import { Mail, Phone, MapPin, Send, Globe, Clock } from "lucide-react";
import React, { useState, Suspense, lazy } from "react";
import { useInView } from "react-intersection-observer";
const WorldMap = lazy(() => import("../ui/World-map"));

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { ref: mapRef, inView: mapInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen from-slate-500 via-white to-blue-50 dark:from-gray-400 dark:via-gray-400 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="text-center m-5 text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-yellow-600 text-6xl font-bold">
          Contact us
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Let's Connect
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                Whether you have a question about our services, need support, or just want to say hello,
                we're always happy to hear from you.
              </p>
            </div>

            {[{
              icon: Mail,
              title: "Email Us",
              detail: "office@jaimax.com",
              description: "Send us an email anytime"
            },
            {
              icon: Phone,
              title: "Call Us",
              detail: "+916303008654",
              description: "Mon-Fri from 9am to 6pm"
            },
            {
              icon: MapPin,
              title: "Visit Us",
              detail: "4th Floor, Building No/Flat No: 18,Vaishnavis Cynosure,Old Mumbai Highway,Telecom Nagar Extenstion, Gachibowli,Hyderabad, Telangana",
              description: "Find us on the map"
            },
            {
              icon: Globe,
              title: "Global Presence",
              detail: "www.jaimax.com",
              description: "Serving clients across continents"
            }].map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">{item.detail}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Section - Form */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send us a Message</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              {["name", "email", "Phone","subject"].map((field) => (
                <div key={field}>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {field.charAt(0).toUpperCase() + field.slice(1)} *
                  </label>
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={formData[field]}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                    placeholder={`Your ${field}`}
                    required
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors resize-none"
                  placeholder="Tell us more about your inquiry..."
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Business Hours */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 m-6 rounded-xl border border-blue-100 dark:border-blue-800">
          <div className="flex items-center space-x-3 mb-3">
            <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h3 className="font-semibold text-gray-900 dark:text-white">Business Hours</h3>
          </div>
          <div className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
            <div className="flex justify-between">
              <span>Monday - Friday</span>
              <span>9:00 AM - 6:00 PM IST</span>
            </div>
            <div className="flex justify-between">
              <span>Saturday</span>
              <span>Closed</span>
            </div>
            <div className="flex justify-between">
              <span>Sunday</span>
              <span>Closed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Heading */}
      <div className="pt-16 pb-8 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our mission is to grow and excel on a global scale, striving for success that reaches across the world.
          </p>
        </div>
      </div>

      {/* Lazy Loaded WorldMap */}
      <div ref={mapRef} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        {mapInView && <WorldMap />}
      </div>
    </div>
  );
}
