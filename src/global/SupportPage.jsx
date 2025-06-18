// import React, { useEffect } from "react";
// const SupportPage = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <div className="24/7-support">
//       <section className="support_page py-5">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12">
//               <h3 className="text-white mb-4">*24/7 support </h3>
//               <p className="para">
//                 Our 24/7 support team is here for you anytime, anywhere, ready
//                 to provide expert guidance and prompt resolutions to enhance
//                 your cryptocurrency experience.
//               </p>
//               <p className="para">
//                 {" "}
//                 Enjoy peace of mind with our always-on support service,
//                 available 24/7 to help you navigate any challenges related to
//                 your cryptocurrency transactions or account management.
//               </p>

//               <p className="para">
//                 {" "}
//                 You can reach us via Email listed below:
//                 <br />
//                 <b>
//                   <a href="mailto:support@jaimax.com">support@jaimax.com</a>
//                 </b>{" "}
//                 <br />
//                 <b>
//                   {" "}
//                   <a href="mailto:info@jaimax.com">info@jaimax.com</a>
//                 </b>
//               </p>
//               <h4 className="text-white mb-4 mt-5">Risk disclosure</h4>
//               <p className="para">
//                 {" "}
//                 Cryptocurrency markets are highly volatile, and prices can
//                 fluctuate dramatically in short periods. Investors may
//                 experience significant gains or losses. The regulatory
//                 environment for cryptocurrencies varies by jurisdiction and can
//                 change rapidly. This can affect the legality and accessibility
//                 of certain services or products.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };
// export default SupportPage;
import React, { useEffect, useState } from "react";
import { Mail, Shield, Clock, Zap, AlertTriangle, HeadphonesIcon } from "lucide-react";

const SupportPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen  relative overflow-hidden">

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mb-6 shadow-2xl ">
            <HeadphonesIcon className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent mb-4">
            Support
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Your crypto journey never sleeps, and neither do we. Expert guidance at your fingertips, anytime, anywhere.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Clock,
              title: "Always Available",
              description: "Round-the-clock support for all your cryptocurrency needs",
              delay: "delay-200"
            },
            {
              icon: Zap,
              title: "Lightning Fast",
              description: "Quick responses and prompt resolutions to keep you moving",
              delay: "delay-400"
            },
            {
              icon: Shield,
              title: "Expert Guidance",
              description: "Professional team with deep cryptocurrency expertise",
              delay: "delay-600"
            }
          ].map((feature, index) => (
            <div
              key={index}
              className={`group relative bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:bg-white/10 ${isVisible ? `animate-fade-in-up ${feature.delay}` : 'opacity-0'}`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Support Information */}
          <div className={`transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 h-full">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Mail className="w-8 h-8 mr-3 text-purple-400" />
                Get In Touch
              </h2>
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed text-lg">
                  Our dedicated support team is here for you anytime, anywhere, ready to provide expert guidance and prompt resolutions to enhance your cryptocurrency experience.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Enjoy peace of mind with our always-on support service, available 24/7 to help you navigate any challenges related to your cryptocurrency transactions or account management.
                </p>
                
                {/* Contact Buttons */}
                <div className="space-y-4 pt-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Contact Us:</h3>
                  <a
                    href="mailto:support@jaimax.com"
                    className="group flex items-center justify-between bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-6 py-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 mr-3" />
                      <span className="font-semibold">support@jaimax.com</span>
                    </div>
                    <div className="w-2 h-2 bg-white rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                  </a>
                  <a
                    href="mailto:info@jaimax.com"
                    className="group flex items-center justify-between bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white px-6 py-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 mr-3" />
                      <span className="font-semibold">info@jaimax.com</span>
                    </div>
                    <div className="w-2 h-2 bg-white rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Risk Disclosure */}
          <div className={`transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 backdrop-blur-lg rounded-3xl p-8 border border-red-500/20 h-full">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <AlertTriangle className="w-8 h-8 mr-3 text-orange-400" />
                Risk Disclosure
              </h2>
              <div className="bg-black/20 rounded-2xl p-6 border border-orange-500/20">
                <p className="text-gray-300 leading-relaxed text-lg mb-4">
                  <strong className="text-orange-400">Important:</strong> Cryptocurrency markets are highly volatile, and prices can fluctuate dramatically in short periods. Investors may experience significant gains or losses.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  The regulatory environment for cryptocurrencies varies by jurisdiction and can change rapidly. This can affect the legality and accessibility of certain services or products.
                </p>
                <div className="mt-6 p-4 bg-orange-500/10 rounded-xl border border-orange-500/20">
                  <p className="text-orange-200 text-sm font-medium">
                    💡 Always do your own research and never invest more than you can afford to lose.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`text-center transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Don't let questions hold you back. Our expert team is standing by to help you succeed in your crypto journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@jaimax.com"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Support
              </a>
              <a
                href="mailto:info@jaimax.com"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-2xl border border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105"
              >
                General Inquiries
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .delay-200 { animation-delay: 200ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-600 { animation-delay: 600ms; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </div>
  );
};

export default SupportPage;