import React, { useState } from "react";

export default function HomeContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState("");

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center overflow-hidden relative py-8">
      {/* Wrapper: stacks on small, splits on medium+ */}
      <div className="relative z-10 flex flex-col md:flex-row w-full h-full max-w-9xl">
        {/* Left — Globe Map Video */}
        <div className="w-full md:w-1/2 h-64 md:h-screen flex items-center justify-center">
          <div className="relative w-full h-full overflow-hidden shadow-2xl bg-white/10 backdrop-blur-xl">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source
                src="https://cdn.dribbble.com/userupload/4026774/file/original-d7d1fab1bfcb5eb34fd2f82790ac0749.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Right — Glass Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center bg-black px-4 sm:px-6 md:px-10 py-6 md:py-20">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md bg-white/10 backdrop-blur-xl rounded-2xl p-4 sm:p-6 shadow-2xl border border-white/30 text-white"
          >
            {/* Title */}
            <div className="text-center mb-4">
              <h2 className="text-xl sm:text-2xl font-semibold mb-1">
                Get In Touch
              </h2>
              <p className="text-white/70 text-xs sm:text-sm">
                Let’s create something amazing
              </p>
            </div>

            {/* Form Fields */}
            <div className="space-y-3">
              {[
                { id: "name", type: "text", label: "Name" },
                { id: "email", type: "email", label: "Email" },
                { id: "message", type: "textarea", label: "Message" },
              ].map(({ id, type, label }) => (
                <div className="relative" key={id}>
                  <label
                    htmlFor={id}
                    className={`absolute left-3 transition-all duration-300 pointer-events-none text-sm ${
                      focusedField === id || formData[id]
                        ? "-top-2 text-xs text-white"
                        : "top-2 text-white/70"
                    }`}
                  >
                    {label}
                  </label>

                  {type !== "textarea" ? (
                    <input
                      id={id}
                      type={type}
                      value={formData[id]}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField(id)}
                      onBlur={() => setFocusedField("")}
                      placeholder={`Your ${label}`}
                      className="w-full py-1.5 px-3 text-sm bg-white/10 border border-white/30 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-cyan-400 focus:bg-white/20 transition-all duration-300"
                    />
                  ) : (
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField("")}
                      rows="3"
                      placeholder="Your Message"
                      className="w-full py-1.5 px-3 text-sm bg-white/10 border border-white/30 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-cyan-400 focus:bg-white/20 transition-all duration-300 resize-none"
                    ></textarea>
                  )}
                </div>
              ))}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-2 text-sm bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl text-white font-medium transition duration-300 hover:from-purple-700 hover:to-cyan-700 focus:outline-none transform hover:scale-105"
              >
                Send Message
              </button>
            </div>

            {/* Social Links */}
            <div className="mt-6 pt-4 border-t border-white/20">
              <p className="text-center text-white/70 text-xs mb-3">
                Or connect with us on
              </p>
              <div className="flex justify-center space-x-3">
                {[
                  "Twitter",
                  "LinkedIn",
                  "GitHub"
                ].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-8 h-8 bg-white/10 border border-white/30 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  >
                    <span className="text-xs font-medium">
                      {social[0]}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}


// import React, { useState } from "react";

// export default function HomeContact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });
//   const [focusedField, setFocusedField] = useState('');

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.id]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 sm:p-8 flex items-center justify-center relative overflow-hidden">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
//       </div>

//       <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-8 w-full max-w-7xl">
//         {/* Video Section */}
//         <div className="group relative w-full max-w-2xl">
//           <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
//           <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
//             <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
//             <video
//               className="w-full h-full rounded-3xl block object-cover relative z-10"
//               autoPlay
//               muted
//               loop
//               playsInline
//               width={760}
//               height={760}
//             >
//               <source
//                 src="https://cdn.dribbble.com/userupload/4026774/file/original-d7d1fab1bfcb5eb34fd2f82790ac0749.mp4"
//                 type="video/mp4"
//               />
//               Your browser does not support the video tag.
//             </video>
//           </div>
//         </div>

//         {/* Contact Form */}
//         <div className="w-full max-w-md">
//           <div className="relative">
//             <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3xl blur opacity-25"></div>
//             <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
//               <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"></div>
              
//               <div className="relative z-10">
//                 <div className="text-center mb-8">
//                   <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
//                     Get In Touch
//                   </h2>
//                   <p className="text-gray-300 text-sm">
//                     Let's create something amazing together
//                   </p>
//                 </div>

//                 <div className="space-y-6">
//                   {/* Name Field */}
//                   <div className="relative">
//                     <label
//                       htmlFor="name"
//                       className={`absolute left-4 transition-all duration-300 pointer-events-none ${
//                         focusedField === 'name' || formData.name
//                           ? '-top-2 text-xs bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent'
//                           : 'top-3 text-gray-400'
//                       }`}
//                     >
//                       Name
//                     </label>
//                     <input
//                       type="text"
//                       id="name"
//                       value={formData.name}
//                       onChange={handleInputChange}
//                       onFocus={() => setFocusedField('name')}
//                       onBlur={() => setFocusedField('')}
//                       className="w-full py-3 px-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-transparent focus:outline-none focus:border-purple-400 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm"
//                       placeholder="Your Name"
//                     />
//                   </div>

//                   {/* Email Field */}
//                   <div className="relative">
//                     <label
//                       htmlFor="email"
//                       className={`absolute left-4 transition-all duration-300 pointer-events-none ${
//                         focusedField === 'email' || formData.email
//                           ? '-top-2 text-xs bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent'
//                           : 'top-3 text-gray-400'
//                       }`}
//                     >
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       onFocus={() => setFocusedField('email')}
//                       onBlur={() => setFocusedField('')}
//                       className="w-full py-3 px-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-transparent focus:outline-none focus:border-purple-400 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm"
//                       placeholder="Your Email"
//                     />
//                   </div>

//                   {/* Message Field */}
//                   <div className="relative">
//                     <label
//                       htmlFor="message"
//                       className={`absolute left-4 transition-all duration-300 pointer-events-none ${
//                         focusedField === 'message' || formData.message
//                           ? '-top-2 text-xs bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent'
//                           : 'top-3 text-gray-400'
//                       }`}
//                     >
//                       Message
//                     </label>
//                     <textarea
//                       id="message"
//                       value={formData.message}
//                       onChange={handleInputChange}
//                       onFocus={() => setFocusedField('message')}
//                       onBlur={() => setFocusedField('')}
//                       rows="4"
//                       className="w-full py-3 px-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-transparent focus:outline-none focus:border-purple-400 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm resize-none"
//                       placeholder="Your Message"
//                     ></textarea>
//                   </div>

//                   {/* Submit Button */}
//                   <button
//                     type="submit"
//                     className="group relative w-full py-4 px-6 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl text-white font-semibold transition-all duration-300 hover:from-purple-700 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-transparent transform hover:scale-105 hover:shadow-2xl"
//                   >
//                     <span className="relative z-10">Send Message</span>
//                     <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
//                   </button>
//                 </div>

//                 {/* Social Links */}
//                 <div className="mt-8 pt-6 border-t border-white/10">
//                   <p className="text-center text-gray-400 text-sm mb-4">
//                     Or connect with us on
//                   </p>
//                   <div className="flex justify-center space-x-4">
//                     {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
//                       <a
//                         key={social}
//                         href="#"
//                         className="w-10 h-10 bg-white/5 border border-white/20 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-110"
//                       >
//                         <span className="text-xs font-medium">{social[0]}</span>
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }