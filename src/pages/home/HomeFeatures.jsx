// import {
//   LucideArrowRight,
//   LucideShoppingCart,
//   LucideLayoutTemplate,
//   LucideBrush,
//   LucideCode,
//   LucideLightbulb,
//   LucideShare2,
// } from "lucide-react";
// import AnimatedTestimonials from "./Testimonals";
// import React, { useRef, useEffect } from "react";
// import backlogo from "../../assets/Images/backlogo.svg";

// const services = [
//   {
//     title: "User Account Management",
//     description: "Allow users to create accounts with detailed profile settings.",
//     data: "Provide options for users to manage and update their personal information.",
//     icon: <LucideLayoutTemplate className="w-6 h-6 text-black" />,
//   },
//   {
//     title: "Privacy Settings and Controls",
//     description: "Enable users to control visibility of their personal information.",
//     data: "Allow opting out of certain data uses, as per their preferences.",
//     icon: <LucideBrush className="w-6 h-6 text-black" />,
//   },
//   {
//     title: "Secure Payment Processing",
//     description: "Handle payments securely with compliant gateways.",
//     data: "Follow financial standards and encryption best practices.",
//     icon: <LucideCode className="w-6 h-6 text-black" />,
//   },
//   {
//     title: "Communication and Support",
//     description: "Let users contact support through messaging or email.",
//     data: "Maintain correspondence logs for service and compliance.",
//     icon: <LucideLightbulb className="w-6 h-6 text-black" />,
//   },
//   {
//     title: "Cookie Management & Analytics",
//     description: "Provide clear info on cookies and data use.",
//     data: "Enable user-managed cookie preferences and consents.",
//     icon: <LucideShare2 className="w-6 h-6 text-black" />,
//   },
//   {
//     title: "Data Protection & Security",
//     description: "Enforce data encryption and legal compliance.",
//     data: "Run regular audits to ensure breach prevention.",
//     icon: <LucideShoppingCart className="w-6 h-6 text-black" />,
//   },
//   {
//     title: "International Data Transfers",
//     description: "Inform users how data moves internationally.",
//     data: "Implement legal safeguards and transparency measures.",
//     icon: <LucideShoppingCart className="w-6 h-6 text-black" />,
//   },
//   {
//     title: "User Rights Management",
//     description: "Allow users to control access, edit or delete data.",
//     data: "Offer clear complaint and query processes.",
//     icon: <LucideShoppingCart className="w-6 h-6 text-black" />,
//   },
//   {
//     title: "Educational Resources",
//     description: "Provide FAQs and data usage transparency.",
//     data: "Help users understand privacy rights and policy.",
//     icon: <LucideShoppingCart className="w-6 h-6 text-black" />,
//   },
//   {
//     title: "Policy Updates & Notifications",
//     description: "Notify users on privacy policy changes.",
//     data: "Store policy version history and request re-consent when needed.",
//     icon: <LucideShoppingCart className="w-6 h-6 text-black" />,
//   },
// ];

// export default function FeaturesSection() {
//   const scrollRef = useRef(null);

//   useEffect(() => {
//     const scrollContainer = scrollRef.current;
//     if (!scrollContainer) return;

//     // Duplicate the content to create seamless scroll
//     const originalContent = scrollContainer.children[0];
//     const duplicateContent = originalContent.cloneNode(true);
//     scrollContainer.appendChild(duplicateContent);

//     let scrollAmount = 0;
//     const scrollSpeed = 1; // pixels per frame
//     let animationFrameId;

//     const scrollStep = () => {
//       scrollAmount += scrollSpeed;
//       if (scrollAmount >= originalContent.scrollWidth) {
//         scrollAmount = 0;
//       }
//       scrollContainer.scrollLeft = scrollAmount;
//       animationFrameId = requestAnimationFrame(scrollStep);
//     };

//     animationFrameId = requestAnimationFrame(scrollStep);

//     scrollContainer.style.scrollbarWidth = "none";
//     scrollContainer.style.msOverflowStyle = "none";
//     scrollContainer.style.overflowX = "hidden";

//     return () => cancelAnimationFrame(animationFrameId);
//   }, []);

//   return (
//     <div
//       style={{
//         background: `linear-gradient(to bottom, rgba(9,86,89,0.95), rgba(4,92,97,0.95))`,
//         backgroundRepeat: "no-repeat",
//         backgroundImage: `linear-gradient(to bottom, rgba(9,86,89,0.95), rgba(4,92,97,0.95)), url('${backlogo}')`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//       className="relative"
//     >
//       <div
//         className="w-full py-2 overflow-hidden border-y border-lime-500 z-50 sticky top-0"
//         style={{ userSelect: "none" }}
//       >
//         <div
//           ref={scrollRef}
//           className="flex whitespace-nowrap text-sm font-medium text-lime-300 select-none"
//         >
//           {[...Array(2)].map((_, i) => (
//             <div key={i} className="flex gap-12 px-4" style={{ flexShrink: 0 }}>
//               <span className="text-white">Price: ₹0.02 INR / $0.00024 USD</span>
//               <span className="text-gray-300">Earn 10% referral bonus</span>
//               <span className="text-green-400">Live Price: $0.00024 ↑</span>
//               <span className="text-white">Sold Tokens: 225765326</span>
//               <span className="text-yellow-400">Live Members: 24,567</span>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="w-full py-16 text-center from-lime-700 via-green-800 to-teal-700rounded-lg px-6 mx-auto max-w-4xl">
//         <h2 className="text-white text-3xl md:text-4xl font-extrabold mb-4 tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-cyan-400 drop-shadow-lg">
//           Features
//         </h2>
//         <div className="mx-auto mb-8 w-24 h-1 rounded-full bg-lime-400 opacity-80"></div> {/* Decorative underline */}
//         <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto px-4 leading-relaxed font-medium">
//           Join us today and embark on a journey towards high returns and financial growth.
//         </p>
//       </div>

//       <section className="w-full px-4 py-16 text-white font-sans relative overflow-hidden">
//         {/* Shapes removed here */}
//         <div className="max-w-7xl mx-auto text-center space-y-6 relative z-10">
//           <h2 className="text-4xl md:text-5xl font-extrabold text-lime-400 tracking-wide">
//             LIVE UPDATE
//           </h2>

//           <div className="flex flex-wrap justify-center items-center text-lg gap-4">
//             <p className="text-white/80">
//               TOTAL TOKENS: <span className="text-lime-400 font-semibold">10 BILLION</span>
//             </p>
//             <span className="text-lime-400">|</span>
//             <p className="text-white/80">
//               STARTING PRICE: <span className="text-yellow-300 font-semibold">INR 0.01 (USD 0.00012)</span>
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
//             {[
//               {
//                 label: "LIVE PRICE",
//                 value: "$0.00024",
//                 style: "from-[#0f766e] via-[#0e9c92] to-[#34d399]",
//                 arrow: "⬆",
//                 arrowColor: "text-green-100",
//               },
//               {
//                 label: "SOLD TOKENS",
//                 value: "225,765,326",
//                 style: "from-[#064e3b] via-[#059669] to-[#10b981]",
//                 arrow: "⬆",
//                 arrowColor: "text-lime-200",
//               },
//               {
//                 label: "LIVE MEMBERS",
//                 value: "24,567",
//                 style: "from-[#0f766e] via-[#2dd4bf] to-[#99f6e4]",
//                 arrow: "⬆",
//                 arrowColor: "text-cyan-100",
//               },
//             ].map((item, i) => (
//               <div
//                 key={i}
//                 className={`rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 bg-gradient-to-br ${item.style} text-white flex flex-col justify-center items-center`}
//                 style={{ minHeight: "160px" }}
//               >
//                 <p className="text-sm font-medium tracking-wider mb-2 text-white/80 text-center">
//                   {item.label}
//                 </p>
//                 <h3 className="text-4xl font-bold flex items-center gap-2 justify-center">
//                   {item.value}
//                   <span className={`text-sm animate-bounce ${item.arrowColor}`}>{item.arrow}</span>
//                 </h3>
//               </div>
//             ))}
//           </div>

//         </div>
//       </section>

//       <div className="px-4 py-16">
//         {/* Removed background SVG shapes */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="bg-white/20 backdrop-blur-lg text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between transform hover:-translate-y-2"
//             >
//               <div>
//                 <div className="flex items-center mb-4">
//                   <div className="bg-gradient-to-r from-[#c5d82e] to-[#b8cc26] rounded-full w-12 h-12 flex items-center justify-center mr-4 shadow-sm transition-all duration-300">
//                     {service.icon}
//                   </div>
//                   <h3 className="text-lg font-semibold">{service.title}</h3>
//                 </div>
//                 <p className="text-sm mb-4 text-gray-200">{service.description}</p>
//                 {service.data && <p className="text-sm text-gray-300 leading-relaxed">{service.data}</p>}
//               </div>
//               <div className="mt-6 flex justify-end">
//                 <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r from-[#c5d82e] to-[#b8cc26] text-[#0e0b0b] hover:bg-yellow-400/40 transition-all duration-300">
//                   <LucideArrowRight className="transform transition-transform duration-300" />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//     </div>
//   );
// }
import React, { useState, useEffect } from 'react';
import { TrendingUp, Shield, Users, Globe, BookOpen, Settings, CreditCard, Headphones, ArrowRight } from 'lucide-react';

const JaimaxLanding = () => {
  const features = [
    {
      icon: <Settings className="w-8 h-8" />,
      title: "User Account Management",
      description: "Easily create and manage your personal Jaimax wallet. Our secure dashboard helps you track token balances, purchases, and transaction history all in one place."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Privacy Settings & Data Protection",
      description: "Your privacy matters. Jaimax uses advanced encryption to protect your data and allows you to control how your personal information is stored and shared."
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Secure Payment Processing",
      description: "All transactions are powered by blockchain, ensuring fast, secure, and tamper-proof payments. You can invest and transfer with confidence."
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "24/7 Communication and Support",
      description: "Get round-the-clock assistance from our expert support team. Whether you have questions about your wallet, transactions, or features, we're here to help."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Smart Analytics & Cookie Control",
      description: "We provide real-time performance insights while allowing full control over cookies and tracking. It's all part of a transparent and secure user experience."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "International Access & Data Transfers",
      description: "Jaimax supports global users with seamless cross-border crypto transactions. Our platform is built to serve an international audience with full compliance."
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Educational Resources",
      description: "We empower users with simple, clear content about crypto, blockchain, DeFi, and tokenomics. Our resources are ideal for beginners and experts alike."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Policy Updates & User Rights",
      description: "Stay up to date with regular policy notifications. Jaimax ensures full user control over personal data, privacy settings, and account activity."
    }
  ];

  return (
    <div className="min-h-screen" 
    style={{background: 'linear-gradient(to bottom right, rgba(8,83,89,0.95), rgba(8,83,89,0.95), rgba(8,83,89,0.95))'}}
    >
      <div className="relative overflow-hidden">
        <div className="relative max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 pt-10  pb-6">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">

              <span className="bg-clip-text text-transparent"style={{backgroundImage: 'linear-gradient(to right, #c5d82e, #16a34a, #c5d82e)'}}>Powering the Future of Crypto</span>
            </h1>
            <p className="text-xl text-gray-300 mb-3 max-w-9xl mx-auto leading-relaxed">
              Welcome to Jaimax, one of the best crypto coins designed for growth, transparency, and financial freedom. Built on powerful blockchain technology, Jaimax offers a secure and scalable platform for users who want to be part of the next generation of digital finance. Whether you're an early investor or just starting your crypto journey, Jaimax gives you the tools to succeed.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
             Core <span className="text-[#c5d82e]">Functional Features</span>
          </h2>
          {/* <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover the powerful features of Jaimax that make it one of the best crypto coins for the future.
          </p> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/20 backdrop-blur-lg text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between transform hover:-translate-y-2 transition-transform duration-300"
            >
              <div>
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-[#c5d82e] to-[#b8cc26] rounded-full w-12 h-12 flex items-center justify-center mr-4 shadow-sm transition-all duration-300">
                    <div className="text-[#0e0b0b]">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-[#c5d82e]">{feature.title}</h3>
                </div>
                <p className="text-sm mb-4 text-gray-200">{feature.description}</p>
              </div>
              <div className="mt-6 flex justify-end">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r from-[#c5d82e] to-[#b8cc26] text-[#0e0b0b] hover:bg-yellow-400/40 transition-all duration-300">
                  <ArrowRight className="transform transition-transform duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-9xl mx-auto px-2 sm:px-2 lg:px-2 py-6">
        <div className=" rounded-3xl p-2">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why <span className="text-[#c5d82e]">Jaimax</span> is a Top Choice
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Jaimax isn't just another coin — it's a complete crypto investment platform with features designed for real-world use. Our mission is to provide secure, scalable, and user-friendly solutions that put you first.
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
              Whether you're holding for long-term gains or exploring the future of decentralized finance, Jaimax offers everything you need in one place.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default JaimaxLanding;