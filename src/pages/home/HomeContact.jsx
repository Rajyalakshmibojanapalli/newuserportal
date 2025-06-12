// import React from "react";

// export default function HomeContact() {
//   return (
//     <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8 sm:p-12">
//       <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-transform duration-500 hover:scale-[1.01] hover:shadow-3xl mb-8 lg:mb-0 lg:mr-8">
//         {/* Optional: Add a subtle overlay or border for extra flair */}
//         <div className="absolute inset-0 border-4 border-indigo-200 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"></div>

//         <video
//           className="w-full h-auto rounded-3xl block object-cover" // object-cover helps maintain aspect ratio and fill the space
//           autoPlay
//           muted
//           loop
//           playsInline // Recommended for better mobile autoplay experience
//           width={760}
//           height={428}
//         >
//           <source
//             src="https://cdn.dribbble.com/userupload/4026774/file/original-d7d1fab1bfcb5eb34fd2f82790ac0749.mp4"
//             type="video/mp4"
//           />
//           Your browser does not support the video tag.
//         </video>
//       </div>

//       {/* Contact Form */}
//       <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">
//         <h2 className="text-3xl font-extrabold text-gray-800 mb-6">Contact Us</h2>
//         <form>
//           <div className="mb-4">
//             <label
//               htmlFor="name"
//               className="block text-gray-700 text-sm font-bold mb-2"
//             >
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               className="shadow appearance-none border rounded-full w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               placeholder="Your Name"
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               htmlFor="email"
//               className="block text-gray-700 text-sm font-bold mb-2"
//             >
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               className="shadow appearance-none border rounded-full w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               placeholder="Your Email"
//             />
//           </div>
//           <div className="mb-6">
//             <label
//               htmlFor="message"
//               className="block text-gray-700 text-sm font-bold mb-2"
//             >
//               Message
//             </label>
//             <textarea
//               id="message"
//               rows="4"
//               className="shadow appearance-none border rounded-2xl w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               placeholder="Your Message"
//             ></textarea>
//           </div>
//           <button
//             type="submit"
//             className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline transition-colors duration-300"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";

export default function HomeContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="h-screen bg-black flex items-center justify-center relative overflow-hidden">
      <div className="relative z-10 flex w-full h-full max-w-9xl">
        {/* Left Half: Video */}
        <div className="w-1/2 h-full flex items-center justify-center">
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

        {/* Right Half: Black Background with White Glass Form */}
        <div className="w-1/2 h-full flex items-center justify-center bg-black p-6">
         {/* <form
  onSubmit={handleSubmit}
  className="w-full max-w-sm bg-white/20 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/30"
>

            <div className="text-center mb-6">
              <h2 className="text-2xl font-semibold text-black mb-1">
                Get In Touch
              </h2>
              <p className="text-gray-700 text-xs">Let’s create something amazing</p>
            </div>

            <div className="space-y-4">
              {['name', 'email', 'message'].map((field) => (
                <div className="relative" key={field}>
                  <label
                    htmlFor={field}
                    className={`absolute left-3 transition-all duration-300 pointer-events-none text-sm ${
                      focusedField === field || formData[field]
                        ? '-top-2 text-xs text-black'
                        : 'top-2 text-gray-600'
                    }`}
                  >
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  {field !== 'message' ? (
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      id={field}
                      value={formData[field]}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField(field)}
                      onBlur={() => setFocusedField('')}
                      placeholder={`Your ${field}`}
                      className="w-full py-2 px-3 text-sm bg-white/40 border border-white/30 rounded-xl text-black placeholder-transparent focus:outline-none focus:border-purple-500 focus:bg-white/60 transition-all duration-300"
                    />
                  ) : (
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField('')}
                      rows="3"
                      placeholder="Your Message"
                      className="w-full py-2 px-3 text-sm bg-white/40 border border-white/30 rounded-xl text-black placeholder-transparent focus:outline-none focus:border-purple-500 focus:bg-white/60 transition-all duration-300 resize-none"
                    ></textarea>
                  )}
                </div>
              ))}

              <button
                type="submit"
                className="w-full py-2.5 px-4 text-sm bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl text-white font-medium transition duration-300 hover:from-purple-700 hover:to-cyan-700 focus:outline-none transform hover:scale-105"
              >
                Send Message
              </button>
            </div>

            <div className="mt-8 pt-6 border-t border-white/20">
              <p className="text-center text-gray-600 text-sm mb-4">Or connect with us on</p>
              <div className="flex justify-center space-x-4">
                {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 bg-white/30 border border-white/40 rounded-full flex items-center justify-center text-gray-700 hover:text-black hover:bg-white/50 transition-all duration-300 hover:scale-110"
                  >
                    <span className="text-xs font-medium">{social[0]}</span>
                  </a>
                ))}
              </div>
            </div>
          </form> */}

          <form
  onSubmit={handleSubmit}
  className="w-full max-w-sm bg-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/30 text-white"
>
  {/* Title */}
  <div className="text-center mb-6">
    <h2 className="text-2xl font-semibold mb-1">Get In Touch</h2>
    <p className="text-white/70 text-xs">Let’s create something amazing</p>
  </div>

  {/* Form Fields */}
  <div className="space-y-4">
    {['name', 'email', 'message'].map((field) => (
      <div className="relative" key={field}>
        <label
          htmlFor={field}
          className={`absolute left-3 transition-all duration-300 pointer-events-none text-sm ${
            focusedField === field || formData[field]
              ? '-top-2 text-xs text-white'
              : 'top-2 text-white/70'
          }`}
        >
          {field.charAt(0).toUpperCase() + field.slice(1)}
        </label>
        {field !== 'message' ? (
          <input
            type={field === 'email' ? 'email' : 'text'}
            id={field}
            value={formData[field]}
            onChange={handleInputChange}
            onFocus={() => setFocusedField(field)}
            onBlur={() => setFocusedField('')}
            placeholder={`Your ${field}`}
            className="w-full py-2 px-3 text-sm bg-white/10 border border-white/30 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-cyan-400 focus:bg-white/20 transition-all duration-300"
          />
        ) : (
          <textarea
            id="message"
            value={formData.message}
            onChange={handleInputChange}
            onFocus={() => setFocusedField('message')}
            onBlur={() => setFocusedField('')}
            rows="3"
            placeholder="Your Message"
            className="w-full py-2 px-3 text-sm bg-white/10 border border-white/30 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-cyan-400 focus:bg-white/20 transition-all duration-300 resize-none"
          ></textarea>
        )}
      </div>
    ))}

    {/* Submit Button */}
    <button
      type="submit"
      className="w-full py-2.5 px-4 text-sm bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl text-white font-medium transition duration-300 hover:from-purple-700 hover:to-cyan-700 focus:outline-none transform hover:scale-105"
    >
      Send Message
    </button>
  </div>

  {/* Social Links */}
  <div className="mt-8 pt-6 border-t border-white/20">
    <p className="text-center text-white/70 text-sm mb-4">Or connect with us on</p>
    <div className="flex justify-center space-x-4">
      {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
        <a
          key={social}
          href="#"
          className="w-10 h-10 bg-white/10 border border-white/30 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
        >
          <span className="text-xs font-medium">{social[0]}</span>
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