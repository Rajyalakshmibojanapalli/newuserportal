import React from "react";

export default function HomeContact() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8 sm:p-12">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-transform duration-500 hover:scale-[1.01] hover:shadow-3xl mb-8 lg:mb-0 lg:mr-8">
        {/* Optional: Add a subtle overlay or border for extra flair */}
        <div className="absolute inset-0 border-4 border-indigo-200 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"></div>

        <video
          className="w-full h-auto rounded-3xl block object-cover" // object-cover helps maintain aspect ratio and fill the space
          autoPlay
          muted
          loop
          playsInline // Recommended for better mobile autoplay experience
          width={760}
          height={428}
        >
          <source
            src="https://cdn.dribbble.com/userupload/4026774/file/original-d7d1fab1bfcb5eb34fd2f82790ac0749.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-6">Contact Us</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="shadow appearance-none border rounded-full w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded-full w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="shadow appearance-none border rounded-2xl w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}