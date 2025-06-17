

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
                    className={`absolute left-3 transition-all duration-300 pointer-events-none text-sm ${focusedField === field || formData[field]
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

