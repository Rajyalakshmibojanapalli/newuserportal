// import React, { useState } from "react";

// export default function HomeContact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [focusedField, setFocusedField] = useState("");

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.id]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//   };

//   return (
//     <div className="min-h-screen bg-black flex items-center justify-center overflow-hidden relative py-8">
//       {/* Wrapper: stacks on small, splits on medium+ */}
//       <div className="relative z-10 flex flex-col md:flex-row w-full h-full max-w-9xl">
//         {/* Left — Globe Map Video */}
//         <div className="w-full md:w-1/2 h-64 md:h-screen flex items-center justify-center">
//           <div className="relative w-full h-full overflow-hidden shadow-2xl bg-white/10 backdrop-blur-xl">
//             <video
//               className="w-full h-full object-cover"
//               autoPlay
//               muted
//               loop
//               playsInline
//             >
//               <source
//                 src="https://cdn.dribbble.com/userupload/4026774/file/original-d7d1fab1bfcb5eb34fd2f82790ac0749.mp4"
//                 type="video/mp4"
//               />
//               Your browser does not support the video tag.
//             </video>
//           </div>
//         </div>


//         {/* Right — Glass Form */}
//         <div className="w-full md:w-1/2 flex items-center justify-center bg-black px-4 sm:px-6 md:px-10 py-6 md:py-20">
//           <form
//             onSubmit={handleSubmit}
//             className="w-full max-w-xs sm:max-w-sm md:max-w-md bg-white/10 backdrop-blur-xl rounded-2xl p-4 sm:p-6 shadow-2xl border border-white/30 text-white"
//           >
//             {/* Title */}
//             <div className="text-center mb-4">
//               <h2 className="text-xl sm:text-2xl font-semibold mb-1">
//                 Get In Touch
//               </h2>
//               <p className="text-white/70 text-xs sm:text-sm">
//                 Let’s create something amazing
//               </p>
//             </div>

//             {/* Form Fields */}
//             <div className="space-y-3">
//               {[
//                 { id: "name", type: "text", label: "Name" },
//                 { id: "email", type: "email", label: "Email" },
//                 { id: "message", type: "textarea", label: "Message" },
//               ].map(({ id, type, label }) => (
//                 <div className="relative" key={id}>
//                   <label
//                     htmlFor={id}
//                     className={`absolute left-3 transition-all duration-300 pointer-events-none text-sm ${
//                       focusedField === id || formData[id]
//                         ? "-top-2 text-xs text-white"
//                         : "top-2 text-white/70"
//                     }`}
//                   >
//                     {label}
//                   </label>

//                   {type !== "textarea" ? (
//                     <input
//                       id={id}
//                       type={type}
//                       value={formData[id]}
//                       onChange={handleInputChange}
//                       onFocus={() => setFocusedField(id)}
//                       onBlur={() => setFocusedField("")}
//                       placeholder={`Your ${label}`}
//                       className="w-full py-1.5 px-3 text-sm bg-white/10 border border-white/30 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-cyan-400 focus:bg-white/20 transition-all duration-300"
//                     />
//                   ) : (
//                     <textarea
//                       id="message"
//                       value={formData.message}
//                       onChange={handleInputChange}
//                       onFocus={() => setFocusedField("message")}
//                       onBlur={() => setFocusedField("")}
//                       rows="3"
//                       placeholder="Your Message"
//                       className="w-full py-1.5 px-3 text-sm bg-white/10 border border-white/30 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-cyan-400 focus:bg-white/20 transition-all duration-300 resize-none"
//                     ></textarea>
//                   )}
//                 </div>
//               ))}

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 className="w-full py-2 text-sm bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl text-white font-medium transition duration-300 hover:from-purple-700 hover:to-cyan-700 focus:outline-none transform hover:scale-105"
//               >
//                 Send Message
//               </button>
//             </div>

//         {/* Right Half: Black Background with White Glass Form */}
//         <div className="w-1/2 h-full flex items-center justify-center bg-black p-6">


//           <form
//             onSubmit={handleSubmit}
//             className="w-full max-w-sm bg-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/30 text-white"
//           >
//             {/* Title */}
//             <div className="text-center mb-6">
//               <h2 className="text-2xl font-semibold mb-1">Get In Touch</h2>
//               <p className="text-white/70 text-xs">Let’s create something amazing</p>
//             </div>

//             {/* Form Fields */}
//             <div className="space-y-4">
//               {['name', 'email', 'message'].map((field) => (
//                 <div className="relative" key={field}>
//                   <label
//                     htmlFor={field}
//                     className={`absolute left-3 transition-all duration-300 pointer-events-none text-sm ${focusedField === field || formData[field]
//                         ? '-top-2 text-xs text-white'
//                         : 'top-2 text-white/70'
//                       }`}
//                   >
//                     {field.charAt(0).toUpperCase() + field.slice(1)}
//                   </label>
//                   {field !== 'message' ? (
//                     <input
//                       type={field === 'email' ? 'email' : 'text'}
//                       id={field}
//                       value={formData[field]}
//                       onChange={handleInputChange}
//                       onFocus={() => setFocusedField(field)}
//                       onBlur={() => setFocusedField('')}
//                       placeholder={`Your ${field}`}
//                       className="w-full py-2 px-3 text-sm bg-white/10 border border-white/30 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-cyan-400 focus:bg-white/20 transition-all duration-300"
//                     />
//                   ) : (
//                     <textarea
//                       id="message"
//                       value={formData.message}
//                       onChange={handleInputChange}
//                       onFocus={() => setFocusedField('message')}
//                       onBlur={() => setFocusedField('')}
//                       rows="3"
//                       placeholder="Your Message"
//                       className="w-full py-2 px-3 text-sm bg-white/10 border border-white/30 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-cyan-400 focus:bg-white/20 transition-all duration-300 resize-none"
//                     ></textarea>
//                   )}
//                 </div>
//               ))}

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 className="w-full py-2.5 px-4 text-sm bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl text-white font-medium transition duration-300 hover:from-purple-700 hover:to-cyan-700 focus:outline-none transform hover:scale-105"
//               >
//                 Send Message
//               </button>
//             </div>

//             {/* Social Links */}
//             <div className="mt-8 pt-6 border-t border-white/20">
//               <p className="text-center text-white/70 text-sm mb-4">Or connect with us on</p>
//               <div className="flex justify-center space-x-4">
//                 {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
//                   <a
//                     key={social}
//                     href="#"
//                     className="w-10 h-10 bg-white/10 border border-white/30 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
//                   >
//                     <span className="text-xs font-medium">{social[0]}</span>
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </form>
// >>>>>>> 820dbd0094d08cb049348a0cc78862f2bfe94dcd

//             {/* Social Links */}
//             <div className="mt-6 pt-4 border-t border-white/20">
//               <p className="text-center text-white/70 text-xs mb-3">
//                 Or connect with us on
//               </p>
//               <div className="flex justify-center space-x-3">
//                 {[
//                   "Twitter",
//                   "LinkedIn",
//                   "GitHub"
//                 ].map((social) => (
//                   <a
//                     key={social}
//                     href="#"
//                     className="w-8 h-8 bg-white/10 border border-white/30 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
//                   >
//                     <span className="text-xs font-medium">
//                       {social[0]}
//                     </span>
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }


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
    // Add your form submission logic here
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center overflow-hidden relative py-8">
      {/* Main Container */}
      <div className="relative z-10 flex flex-col md:flex-row w-full h-full max-w-7xl mx-auto">
        
        {/* Left Side - Video Background */}
        <div className="w-full md:w-1/2 h-64 md:h-screen flex items-center justify-center">
          <div className="relative w-full h-full overflow-hidden shadow-2xl bg-white/10 backdrop-blur-xl rounded-none md:rounded-l-2xl">
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
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center bg-black px-4 sm:px-6 md:px-10 py-6 md:py-20">
          <div
            className="w-full max-w-sm bg-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/30 text-white"
          >
            {/* Header */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Get In Touch
              </h2>
              <p className="text-white/70 text-sm">
                Let's create something amazing together
              </p>
            </div>

            {/* Form Fields */}
            <div className="space-y-4">
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
                        ? "-top-2 text-xs text-cyan-400 bg-black px-1 rounded"
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
                      className="w-full py-2 px-3 text-sm bg-white/10 border border-white/30 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-cyan-400 focus:bg-white/20 transition-all duration-300"
                    />
                  ) : (
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField("")}
                      rows="4"
                      className="w-full py-2 px-3 text-sm bg-white/10 border border-white/30 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-cyan-400 focus:bg-white/20 transition-all duration-300 resize-none"
                    ></textarea>
                  )}
                </div>
              ))}

              {/* Submit Button */}
              <button
                type="submit"
                onClick={handleSubmit}
                className="w-full py-3 px-4 text-sm bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl text-white font-medium transition-all duration-300 hover:from-purple-700 hover:to-cyan-700 focus:outline-none transform hover:scale-105 hover:shadow-lg"
              >
                Send Message
              </button>
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-6 border-t border-white/20">
              <p className="text-center text-white/70 text-sm mb-4">
                Or connect with us on
              </p>
              <div className="flex justify-center space-x-4">
                {[
                  { name: "Twitter", icon: "T", href: "#" },
                  { name: "LinkedIn", icon: "L", href: "#" },
                  { name: "GitHub", icon: "G", href: "#" }
                ].map(({ name, icon, href }) => (
                  <a
                    key={name}
                    href={href}
                    className="w-10 h-10 bg-white/10 border border-white/30 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:border-cyan-400"
                    title={name}
                  >
                    <span className="text-sm font-medium">{icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-cyan-900/20 pointer-events-none"></div>
    </div>
  );
}