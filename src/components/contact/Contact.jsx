
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Globe,
  Clock,
  CheckCircle,
  AlertCircle,
  ArrowLeft,
  Heart,
  Sparkles,
  Zap,
  Star,
  MessageCircle,
} from "lucide-react";
import React, { useState, useEffect, Suspense, lazy } from "react";
import { useInView } from "react-intersection-observer";
const WorldMap = lazy(() => import("../ui/World-map"));

const validateForm = (values) => {
  const errors = {};

  // Name validation
  if (!values.name || !values.name.trim()) {
    errors.name = "Name is required";
  } else if (values.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters";
  } else if (values.name.trim().length > 50) {
    errors.name = "Name cannot exceed 50 characters";
  } else if (!/^[a-zA-Z\s'-]+$/.test(values.name.trim())) {
    errors.name =
      "Name can only contain letters, spaces, apostrophes, and hyphens";
  }

  // Email validation
  if (!values.email || !values.email.trim()) {
    errors.email = "Email is required";
  } else if (
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
      values.email.trim()
    )
  ) {
    errors.email = "Please enter a valid email address";
  } else if (values.email.length > 254) {
    errors.email = "Email address is too long";
  }

  // Phone validation
  if (!values.phone || !values.phone.trim()) {
    errors.phone = "Phone number is required";
  } else {
    const phoneRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    const cleanPhone = values.phone.replace(/[\s\-\(\)]/g, "");
    if (!phoneRegex.test(cleanPhone) && !/^\+\d{1,3}\d{10}$/.test(cleanPhone)) {
      errors.phone =
        "Please enter a valid phone number (10 digits, optional country code)";
    }
  }

  // Subject validation
  if (!values.subject || !values.subject.trim()) {
    errors.subject = "Subject is required";
  } else if (values.subject.trim().length < 3) {
    errors.subject = "Subject must be at least 3 characters";
  } else if (values.subject.trim().length > 100) {
    errors.subject = "Subject cannot exceed 100 characters";
  }

  // Message validation
  if (!values.message || !values.message.trim()) {
    errors.message = "Message is required";
  } else if (values.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters";
  } else if (values.message.trim().length > 2000) {
    errors.message = "Message cannot exceed 2000 characters";
  }

  return errors;
};

const FloatingShape = ({ children, delay = 0, duration = 6 }) => {
  return (
    <div
      className="absolute animate-pulse"
      style={{
        animation: `float ${duration}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    >
      {children}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-20px) rotate(5deg);
          }
          50% {
            transform: translateY(-10px) rotate(0deg);
          }
          75% {
            transform: translateY(-15px) rotate(-5deg);
          }
        }
      `}</style>
    </div>
  );
};

const Particle = ({ index }) => {
  const [position, setPosition] = useState({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      });
    }, 3000 + Math.random() * 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-60 transition-all duration-3000 ease-in-out"
      style={{
        left: position.x,
        top: position.y,
        animationDelay: `${index * 0.1}s`,
      }}
    />
  );
};

const ThankYouPage = ({ onBackToForm }) => {
  window.scrollTo(0, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900  flex items-center justify-center px-2 relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-emerald-400 rounded-full opacity-10 animate-pulse blur-3xl" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-cyan-400 rounded-full opacity-10 animate-pulse delay-1000 blur-3xl" />
        <div className="absolute top-1/2 left-5 w-32 h-32 bg-teal-400 rounded-full opacity-10 animate-pulse delay-2000 blur-3xl" />
        <FloatingShape delay={0}>
          <div className="w-6 h-6 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-lg opacity-20 rotate-45"></div>
        </FloatingShape>
        <FloatingShape delay={1.5}>
          <div className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-20 absolute left-[80%] top-[20%]"></div>
        </FloatingShape>
        <FloatingShape delay={3}>
          <div className="w-6 h-2 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full opacity-20 absolute left-[70%] top-[70%]"></div>
        </FloatingShape>
      </div>

      {/* Main Content */}
      <div className="max-w-xl w-full text-center m-3 space-y-4 bg-white/10 backdrop-blur-xl p-4 sm:p-6 rounded-2xl shadow-2xl border border-white/20 relative z-10">
        <div className="relative">
          <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center animate-ping">
            {/* <Heart className="w-4 h-4 text-white" /> */}
          </div>
          <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center animate-pulse">
            {/* <Star className="w-3 h-3 text-white" /> */}
          </div>
        </div>

        <h1 className="text-2xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
          Amazing!
        </h1>
        <p className="text-lg sm:text-xl text-white/90 font-light">
          Your message has been sent successfully
        </p>

        {/* Confirmation Section */}
        <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-xl space-y-2 border border-white/20">
          <div className="flex items-center justify-center gap-2 text-emerald-300">
            <CheckCircle className="w-5 h-5" />
            <span className="font-semibold text-base sm:text-lg">
              Message Delivered Successfully
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Response within 2–4 hours</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>Confirmation email sent</span>
            </div>
          </div>
        </div>

        {/* Steps */}
        <h3 className="text-xl sm:text-2xl font-bold text-white pt-2">
          What’s next?
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
          {[
            {
              step: "1",
              title: "Instant Review",
              desc: "We review your message immediately",
              icon: Zap,
            },
            {
              step: "2",
              title: "Expert Analysis",
              desc: "Our team analyzes your requirements",
              icon: Star,
            },
            {
              step: "3",
              title: "Personalized Response",
              desc: "You get a tailored solution",
              icon: MessageCircle,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-2 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                {item.step}
              </div>
              <item.icon className="w-6 h-6 text-cyan-300" />
              <div className="text-center">
                <p className="font-semibold text-white">{item.title}</p>
                <p className="text-white/70 text-xs">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button
            onClick={onBackToForm}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Send Another Message
          </button>
          <button
            onClick={() => window.open("https://jaimax.com", "_blank")}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105 text-sm"
          >
            <Globe className="w-4 h-4" />
            Explore Our Website
          </button>
        </div>
      </div>
    </div>
  );
};

const ContactField = ({
  label,
  name,
  type = "text",
  as = "input",
  rows,
  value,
  onChange,
  onBlur,
  error,
  touched,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative w-full mb-6">
      <div className="relative group">
        {as === "textarea" ? (
          <textarea
            name={name}
            value={value}
            onChange={onChange}
            onBlur={(e) => {
              setIsFocused(false);
              onBlur(e);
            }}
            onFocus={() => setIsFocused(true)}
            rows={rows}
            className={`block w-full py-5 px-6 text-gray-900 dark:text-white bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border-2 rounded-2xl appearance-none focus:outline-none focus:ring-0 transition-all duration-300 resize-none placeholder-transparent ${touched && error
                ? "border-red-400 bg-red-50/20 shadow-red-500/20 shadow-lg"
                : value && touched && !error
                  ? "border-emerald-400 bg-emerald-50/20 shadow-emerald-500/20 shadow-lg"
                  : isFocused
                    ? "border-blue-400 bg-blue-50/20 shadow-blue-500/20 shadow-lg scale-[1.02]"
                    : "border-white/30 hover:border-white/50"
              }`}
          />
        ) : (
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={(e) => {
              setIsFocused(false);
              onBlur(e);
            }}
            onFocus={() => setIsFocused(true)}
            className={`block w-full py-3 px-3 text-gray-900 dark:text-white bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border-2 rounded-2xl appearance-none focus:outline-none focus:ring-0 transition-all duration-300 placeholder-transparent ${touched && error
                ? "border-red-400 bg-red-50/20 shadow-red-500/20 shadow-lg"
                : value && touched && !error
                  ? "border-emerald-400 bg-emerald-50/20 shadow-emerald-500/20 shadow-lg"
                  : isFocused
                    ? "border-blue-400 bg-blue-50/20 shadow-blue-500/20 shadow-lg scale-[1.02]"
                    : "border-white/30 hover:border-white/50"
              }`}
          />
        )}

        <label
          className={`
    absolute 
    text-base font-medium 
    top-1 left-0 z-10 
    px-2 
    rounded 
    transition-all duration-300 ease-in-out 
    origin-[0] 
    transform 
    ${value || isFocused ? "scale-75 -translate-y-6" : "scale-100 translate-y-0"
            }
    ${touched && error
              ? "text-red-600"
              : touched && value && !error
                ? "text-amber-600"
                : isFocused
                  ? "text-sky-800"
                  : "text-white/70"
            }
  `}
        >
          {label} <span className="text-red-400">*</span>
        </label>

        {/* Status icon */}
        {touched && (
          <div className="absolute right-6 top-5">
            {error ? (
              <AlertCircle className="w-5 h-5 text-red-400 animate-pulse" />
            ) : value ? (
              <CheckCircle className="w-5 h-5 text-emerald-400 animate-pulse" />
            ) : null}
          </div>
        )}

        {/* Focus ring effect */}
        {isFocused && (
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-sm -z-10 animate-pulse" />
        )}
      </div>

      {/* Error message with better styling */}
      {touched && error && (
        <div className="flex items-center mt-3 p-3 bg-red-50/10 backdrop-blur-sm rounded-xl border border-red-400/30">
          <AlertCircle className="w-4 h-4 mr-2 text-red-400 flex-shrink-0" />
          <span className="text-red-300 text-sm font-medium">{error}</span>
        </div>
      )}

      {/* Success message */}
      {touched && !error && value && (
        <div className="flex items-center mt-3 p-3 bg-emerald-50/10 backdrop-blur-sm rounded-xl border border-emerald-400/30">
          <CheckCircle className="w-4 h-4 mr-2 text-emerald-400 flex-shrink-0" />
          <span className="text-emerald-300 text-sm font-medium">
            Looks good!
          </span>
        </div>
      )}
    </div>
  );
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }

    // Real-time validation for better UX
    if (touched[name]) {
      const fieldErrors = validateForm({ ...formData, [name]: value });
      setErrors((prev) => ({ ...prev, [name]: fieldErrors[name] || "" }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));

    // Validate on blur
    const fieldErrors = validateForm(formData);
    setErrors((prev) => ({ ...prev, [name]: fieldErrors[name] || "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mark all fields as touched
    const allTouched = Object.keys(formData).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    setTouched(allTouched);

    // Validate all fields
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    // If no errors, submit
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      // Simulate API call with more realistic timing
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSubmitting(false);
      setShowThankYou(true);
    }
  };

  const handleBackToForm = () => {
    setShowThankYou(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setErrors({});
    setTouched({});
  };

  if (showThankYou) {
    return <ThankYouPage onBackToForm={handleBackToForm} />;
  }

  return (
    <>
      <div
        className="min-h-screen  relative overflow-hidden"
        style={{
          background: "linear-gradient(to bottom right, #195f65, #0a9396)",
        }}
      >
        {/* Advanced Background Effects */}
        <div className="absolute inset-0">
          {/* Animated gradient orbs */}
          {/* <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-40 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-40 w-96 h-96 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div> */}

          {/* Floating geometric shapes */}
          <FloatingShape delay={0}>
            <div className="absolute top-32 left-1/4 w-16 h-16 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-lg rotate-45 backdrop-blur-sm"></div>
          </FloatingShape>
          <FloatingShape delay={1.5}>
            <div className="absolute top-64 right-1/3 w-12 h-12 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full backdrop-blur-sm"></div>
          </FloatingShape>
          <FloatingShape delay={3}>
            <div className="absolute bottom-32 left-1/3 w-20 h-8 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full backdrop-blur-sm"></div>
          </FloatingShape>

          {/* Particle system */}
          {Array.from({ length: 20 }, (_, i) => (
            <Particle key={i} index={i} />
          ))}

          {/* Grid pattern overlay */}
          {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div> */}
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
          {/* Enhanced Header */}
          <div className="text-center pb-12 mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 mb-6">
              {/* <Sparkles className="w-5 h-5 text-yellow-400 animate-spin" /> */}
              <span className="text-white/90 font-medium">
                Let's Create Something Amazing Together
              </span>
              {/* <Sparkles className="w-5 h-5 text-yellow-400 animate-spin" /> */}
            </div>

            <h1 className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6 animate-pulse">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
              Ready to transform your ideas into reality? Drop us a message and
              let's start an exciting conversation about your next project.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mt-8 rounded-full shadow-lg shadow-purple-500/50"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 items-start">
            {/* Enhanced Contact Info */}
            <div className="space-y-8">
              <div className="text-center lg:text-left mb-4">
                <h2 className="text-3xl font-bold text-white mb-2">
                  Multiple Ways to Connect
                </h2>
                <p className="text-white/70">
                  Choose your preferred method to reach out to us
                </p>
              </div>

              {[
                {
                  icon: Mail,
                  title: "Email Us",
                  detail: "office@jaimax.com",
                  desc: "For detailed inquiries & project discussions",
                  gradient: "from-red-500 via-pink-500 to-rose-500",
                  action: "mailto:office@jaimax.com",
                },
                {
                  icon: Phone,
                  title: "Call Us",
                  detail: "+91 63030 08654",
                  desc: "Available Mon-Fri, 9 AM to 6 PM IST",
                  gradient: "from-green-500 via-emerald-500 to-teal-500",
                  action: "tel:+916303008654",
                },
                {
                  icon: MapPin,
                  title: "Visit Our Office",
                  detail: "Hyderabad, Telangana",
                  desc: "Vaishnavis Cynosure, Gachibowli",
                  gradient: "from-blue-500 via-cyan-500 to-sky-500",
                  action: "#",
                },
                {
                  icon: Globe,
                  title: "Online Portfolio",
                  detail: "www.jaimax.com",
                  desc: "Explore our work & services 24/7",
                  gradient: "from-purple-500 via-violet-500 to-indigo-500",
                  action: "https://jaimax.com",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group flex items-start gap-6 p-2 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
                  onClick={() =>
                    item.action.startsWith("http")
                      ? window.open(item.action, "_blank")
                      : (window.location.href = item.action)
                  }
                >
                  <div
                    className={`w-10 h-10 rounded-3xl flex items-center justify-center bg-gradient-to-br ${item.gradient} shadow-2xl group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className="w-10 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                      {item.title}
                    </h3>
                    <p className="text-white/70 text-sm mb-3 leading-relaxed">
                      {item.desc}
                    </p>
                    <p className="text-blue-300 font-bold text-lg group-hover:text-white transition-colors duration-300">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced Contact Form */}
            <div className="bg-white/10 backdrop-blur-xl p-4 rounded-3xl shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-500">
              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
                  Send Your Message
                </h3>
                <p className="text-white/70 text-lg">
                  Fill out the form below and we'll get back to you soon
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <ContactField
                  name="name"
                  label="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  error={errors.name}
                  touched={touched.name}
                />

                <ContactField
                  name="email"
                  label="Email Address"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  error={errors.email}
                  touched={touched.email}
                />

                <ContactField
                  name="phone"
                  label="Phone Number"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  error={errors.phone}
                  touched={touched.phone}
                />

                <ContactField
                  name="subject"
                  label="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  error={errors.subject}
                  touched={touched.subject}
                />

                <ContactField
                  name="message"
                  label="Your Message"
                  as="textarea"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  error={errors.message}
                  touched={touched.message}
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-4 bg-[#c5d82e] text-white font-bold text-lg rounded-full transition-all duration-500 flex justify-center items-center gap-4 shadow-2xl relative overflow-hidden group ${isSubmitting
                      ? "opacity-80 cursor-not-allowed scale-75"
                      : "hover:scale-105 hover:shadow-blue-500/25 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700"
                    }`}
                >
                  {/* Button background effect */}
                  <div className="absolute inset-0  opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl"></div>

                  {isSubmitting ? (
                    <>
                      <div className=" rounded-full h-6 w-6 border-b-2 border-white"></div>
                      Sending your message...
                    </>
                  ) : (
                    <>
                      <Send className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Enhanced Map Section */}
          <div className="mt-20 rounded-3xl overflow-hidden  ">
            <div className=" p-12 text-center ">
              <div className="flex items-center justify-center gap-3 mb-6">
                {/* <MapPin className="w-8 h-8 text-blue-400" /> */}
                <h2 className="text-5xl font-bold text-transparent   bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                  Find Us Here
                </h2>
                {/* <MapPin className="w-8 h-8 text-blue-400" /> */}
              </div>
              <p className="text-white/80 text-xl max-w-3xl mx-auto leading-relaxed">
                Our office is strategically located in the heart of Hyderabad's
                tech hub. Come visit us for a coffee and let's discuss your next
                big idea!
              </p>

              {/* Location highlights */}
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                {[
                  {
                    icon: Clock,
                    title: "Business Hours",
                    desc: "Mon-Fri: 9 AM - 6 PM IST",
                  },
                  {
                    icon: MapPin,
                    title: "Easy Access",
                    desc: "Near Gachibowli x Road",
                  },
                  {
                    icon: Phone,
                    title: "Quick Contact",
                    desc: "Call ahead for meetings",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-3 p-6 bg-white/10 backdrop-blur-sm rounded-2xl"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-white">{item.title}</h3>
                    <p className="text-white/70 text-sm text-center">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="">
              <div className="">
                <Suspense
                  fallback={
                    <div className="text-center text-gray-500">
                      Loading map...
                    </div>
                  }
                >
                  {/* <WorldMap />              */}
                </Suspense>
              </div>

              {/* Animated location markers */}
              <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
              <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-blue-500 rounded-full animate-ping delay-1000"></div>
              <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-green-500 rounded-full animate-ping delay-2000"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
