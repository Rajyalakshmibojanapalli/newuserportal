// import React, { useState, useEffect } from 'react';
// import { TrendingUp, Shield, Users, Globe, BookOpen, Settings, CreditCard, Headphones, ArrowRight } from 'lucide-react';
// import available from '../../assets/availableBal.png';
// import foundation from '../../assets/foundationIcon.svg';
// import members from '../../assets/Images/about.svg';
// import myreferral from '../../assets/members.svg';
// import profile from '../../assets/wallet.svg'
// import access from '../../assets/Images/accessToprofit.svg'
// import binance from '../../assets/Images/allow.svg'
// import utube from '../../assets/Images/utube.svg'
// const JaimaxLanding = () => {
//   const features = [
//     {
//       icon: available,
//       title: "User Account Management",
//       description: "Easily create and manage your personal Jaimax wallet. Our secure dashboard helps you track token balances, purchases, and transaction history all in one place."
//     },
//     {
//       icon: foundation,
//       title: "Privacy Settings & Data Protection",
//       description: "Your privacy matters. Jaimax uses advanced encryption to protect your data and allows you to control how your personal information is stored and shared."
//     },
//     {
//       icon: members,
//       title: "Secure Payment Processing",
//       description: "All transactions are powered by blockchain, ensuring fast, secure, and tamper-proof payments. You can invest and transfer with confidence."
//     },
//     {
//       icon: myreferral,
//       title: "24/7 Communication and Support",
//       description: "Get round-the-clock assistance from our expert support team. Whether you have questions about your wallet, transactions, or features, we're here to help."
//     },
//     {
//       icon: profile,
//       title: "Smart Analytics & Cookie Control",
//       description: "We provide real-time performance insights while allowing full control over cookies and tracking. It's all part of a transparent and secure user experience."
//     },
//     {
//       icon: access,
//       title: "International Access & Data Transfers",
//       description: "Jaimax supports global users with seamless cross-border crypto transactions. Our platform is built to serve an international audience with full compliance."
//     },
//     {
//       icon:binance,
//       title: "Educational Resources",
//       description: "We empower users with simple, clear content about crypto, blockchain, DeFi, and tokenomics. Our resources are ideal for beginners and experts alike."
//     },
//     {
//       icon: utube,
//       title: "Policy Updates & User Rights",
//       description: "Stay up to date with regular policy notifications. Jaimax ensures full user control over personal data, privacy settings, and account activity."
//     }
//   ];

//   return (
//     <div className="min-h-screen" 
//     style={{background: 'linear-gradient(to bottom right, rgba(8,83,89,0.95), rgba(8,83,89,0.95), rgba(8,83,89,0.95))'}}
//     >
//       <div className="relative overflow-hidden">
//         <div className="relative max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 pt-10  pb-6">
//           <div className="text-center">
//             <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">

//               <span className="bg-clip-text text-transparent"style={{backgroundImage: 'linear-gradient(to right, #c5d82e, #16a34a, #c5d82e)'}}>Powering the Future of Crypto</span>
//             </h1>
//             <p className="text-xl text-gray-300 mb-3 max-w-9xl mx-auto leading-relaxed">
//               Welcome to Jaimax, one of the best crypto coins designed for growth, transparency, and financial freedom. Built on powerful blockchain technology, Jaimax offers a secure and scalable platform for users who want to be part of the next generation of digital finance. Whether you're an early investor or just starting your crypto journey, Jaimax gives you the tools to succeed.
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <div className="text-center mb-16">
//           <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
//              Core <span className="text-[#c5d82e]">Functional Features</span>
//           </h2>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="bg-white/20 backdrop-blur-lg text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between transform hover:-translate-y-2 transition-transform duration-300"
//             >
//               <div>
//                 <div className="flex items-center mb-4">
//                   <div className="bg-gradient-to-r from-[#c5d82e] to-[#b8cc26] rounded-full w-12 h-12 flex items-center justify-center mr-4 shadow-sm transition-all duration-300">
//                     <div className="text-[#0e0b0b]">
                      
//                       <img src={feature.icon} alt="" />
//                     </div>
//                   </div>
//                   <h3 className="text-lg font-semibold text-[#c5d82e]">{feature.title}</h3>
//                 </div>
//                 <p className="text-sm mb-4 text-gray-200">{feature.description}</p>
//               </div>
//               <div className="mt-6 flex justify-end">
//                 <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r from-[#c5d82e] to-[#b8cc26] text-[#0e0b0b] hover:bg-yellow-400/40 transition-all duration-300">
//                   <ArrowRight className="transform transition-transform duration-300" />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="max-w-9xl mx-auto px-2 sm:px-2 lg:px-2 py-6">
//         <div className=" rounded-3xl p-2">
//           <div className="text-center">
//             <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//               Why <span className="text-[#c5d82e]">Jaimax</span> is a Top Choice
//             </h2>
//             <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
//               Jaimax isn't just another coin — it's a complete crypto investment platform with features designed for real-world use. Our mission is to provide secure, scalable, and user-friendly solutions that put you first.
//             </p>
//             <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
//               Whether you're holding for long-term gains or exploring the future of decentralized finance, Jaimax offers everything you need in one place.
//             </p>
            
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JaimaxLanding;




// import React, { useState, useEffect } from 'react';
// import { TrendingUp, Shield, Users, Globe, BookOpen, Settings, CreditCard, Headphones, ArrowRight, ChevronDown } from 'lucide-react';

// const JaimaxLanding = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const features = [
//     {
//       icon: Shield,
//       title: "User Account Management",
//       description: "Easily create and manage your personal Jaimax wallet. Our secure dashboard helps you track token balances, purchases, and transaction history all in one place."
//     },
//     {
//       icon: Settings,
//       title: "Privacy Settings & Data Protection",
//       description: "Your privacy matters. Jaimax uses advanced encryption to protect your data and allows you to control how your personal information is stored and shared."
//     },
//     {
//       icon: CreditCard,
//       title: "Secure Payment Processing",
//       description: "All transactions are powered by blockchain, ensuring fast, secure, and tamper-proof payments. You can invest and transfer with confidence."
//     },
//     {
//       icon: Headphones,
//       title: "24/7 Communication and Support",
//       description: "Get round-the-clock assistance from our expert support team. Whether you have questions about your wallet, transactions, or features, we're here to help."
//     },
//     {
//       icon: TrendingUp,
//       title: "Smart Analytics & Cookie Control",
//       description: "We provide real-time performance insights while allowing full control over cookies and tracking. It's all part of a transparent and secure user experience."
//     },
//     {
//       icon: Globe,
//       title: "International Access & Data Transfers",
//       description: "Jaimax supports global users with seamless cross-border crypto transactions. Our platform is built to serve an international audience with full compliance."
//     },
//     {
//       icon: BookOpen,
//       title: "Educational Resources",
//       description: "We empower users with simple, clear content about crypto, blockchain, DeFi, and tokenomics. Our resources are ideal for beginners and experts alike."
//     },
//     {
//       icon: Users,
//       title: "Policy Updates & User Rights",
//       description: "Stay up to date with regular policy notifications. Jaimax ensures full user control over personal data, privacy settings, and account activity."
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 relative overflow-hidden">
//       {/* Animated background elements */}
//       <div className="absolute inset-0">
//         <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-lime-400/20 to-green-500/20 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-teal-400/20 to-lime-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-green-400/10 to-teal-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
//       </div>

//       {/* Hero Section */}
//       <div className="relative z-10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-24">
//           <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
//             <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-tight">
//               <span className="block mb-2">Powering the</span>
//               <span className="bg-gradient-to-r from-lime-400 via-green-500 to-lime-400 bg-clip-text text-transparent bg-size-200 animate-gradient">
//                 Future of Crypto
//               </span>
//             </h1>
//             <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed px-4">
//               Welcome to Jaimax, one of the best crypto coins designed for growth, transparency, and financial freedom. Built on powerful blockchain technology, Jaimax offers a secure and scalable platform for users who want to be part of the next generation of digital finance.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
//               <button className="group relative px-8 py-4 bg-gradient-to-r from-lime-400 to-green-500 text-slate-900 font-bold text-lg rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-lime-500/25 transform hover:-translate-y-1 w-full sm:w-auto">
//                 Get Started Now
//                 <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
//               </button>
//               <button className="px-8 py-4 border-2 border-lime-400 text-lime-400 font-bold text-lg rounded-full transition-all duration-300 hover:bg-lime-400 hover:text-slate-900 w-full sm:w-auto">
//                 Learn More
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Features Section */}
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
//         <div className="text-center mb-12 sm:mb-16">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
//             Core <span className="text-lime-400">Functional Features</span>
//           </h2>
//           <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
//             Discover the powerful features that make Jaimax the perfect choice for your crypto journey
//           </p>
//         </div>
        
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
//           {features.map((feature, index) => {
//             const IconComponent = feature.icon;
//             return (
//               <div
//                 key={index}
//                 className={`group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl hover:shadow-lime-500/10 transition-all duration-500 transform hover:-translate-y-2 hover:bg-white/10 ${
//                   isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//                 }`}
//                 style={{ transitionDelay: `${index * 100}ms` }}
//               >
//                 <div className="flex flex-col h-full">
//                   <div className="flex items-start mb-6">
//                     <div className="bg-gradient-to-r from-lime-400 to-green-500 rounded-xl w-14 h-14 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 flex-shrink-0">
//                       <IconComponent className="text-slate-900" size={24} />
//                     </div>
//                   </div>
//                   <h3 className="text-xl font-bold text-lime-400 mb-4 group-hover:text-lime-300 transition-colors duration-300">
//                     {feature.title}
//                   </h3>
//                   <p className="text-gray-300 text-sm sm:text-base leading-relaxed flex-grow group-hover:text-gray-200 transition-colors duration-300">
//                     {feature.description}
//                   </p>
//                   <div className="mt-6 flex justify-end">
//                     <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r from-lime-400/20 to-green-500/20 border border-lime-400/30 group-hover:bg-gradient-to-r group-hover:from-lime-400 group-hover:to-green-500 transition-all duration-300">
//                       <ArrowRight className="text-lime-400 group-hover:text-slate-900 transform group-hover:translate-x-1 transition-all duration-300" size={16} />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Why Choose Section */}
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
//         <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl rounded-3xl p-8 sm:p-12 lg:p-16 border border-white/10 shadow-2xl">
//           <div className="text-center">
//             <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
//               Why <span className="text-lime-400">Jaimax</span> is a Top Choice
//             </h2>
//             <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
//               Jaimax isn't just another coin — it's a complete crypto investment platform with features designed for real-world use. Our mission is to provide secure, scalable, and user-friendly solutions that put you first.
//             </p>
//             <p className="text-base sm:text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
//               Whether you're holding for long-term gains or exploring the future of decentralized finance, Jaimax offers everything you need in one place.
//             </p>
            
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
//               <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
//                 <div className="text-3xl sm:text-4xl font-bold text-lime-400 mb-2">99.9%</div>
//                 <div className="text-gray-300 font-medium">Uptime Guarantee</div>
//               </div>
//               <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
//                 <div className="text-3xl sm:text-4xl font-bold text-lime-400 mb-2">50K+</div>
//                 <div className="text-gray-300 font-medium">Active Users</div>
//               </div>
//               <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
//                 <div className="text-3xl sm:text-4xl font-bold text-lime-400 mb-2">24/7</div>
//                 <div className="text-gray-300 font-medium">Support Available</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* CTA Section */}
      

//       <style jsx>{`
//         @keyframes gradient {
//           0%, 100% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//         }
//         .animate-gradient {
//           background-size: 200% 200%;
//           animation: gradient 3s ease infinite;
//         }
//         .bg-size-200 {
//           background-size: 200% 200%;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default JaimaxLanding;


import React, { useState, useEffect } from 'react';
import { TrendingUp, Shield, Users, Globe, BookOpen, Settings, CreditCard, Headphones, ArrowRight, ChevronDown } from 'lucide-react';

const JaimaxLanding = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: Shield,
      title: "User Account Management",
      description: "Easily create and manage your personal Jaimax wallet. Our secure dashboard helps you track token balances, purchases, and transaction history all in one place."
    },
    {
      icon: Settings,
      title: "Privacy Settings & Data Protection",
      description: "Your privacy matters. Jaimax uses advanced encryption to protect your data and allows you to control how your personal information is stored and shared."
    },
    {
      icon: CreditCard,
      title: "Secure Payment Processing",
      description: "All transactions are powered by blockchain, ensuring fast, secure, and tamper-proof payments. You can invest and transfer with confidence."
    },
    {
      icon: Headphones,
      title: "24/7 Communication and Support",
      description: "Get round-the-clock assistance from our expert support team. Whether you have questions about your wallet, transactions, or features, we're here to help."
    },
    {
      icon: TrendingUp,
      title: "Smart Analytics & Cookie Control",
      description: "We provide real-time performance insights while allowing full control over cookies and tracking. It's all part of a transparent and secure user experience."
    },
    {
      icon: Globe,
      title: "International Access & Data Transfers",
      description: "Jaimax supports global users with seamless cross-border crypto transactions. Our platform is built to serve an international audience with full compliance."
    },
    {
      icon: BookOpen,
      title: "Educational Resources",
      description: "We empower users with simple, clear content about crypto, blockchain, DeFi, and tokenomics. Our resources are ideal for beginners and experts alike."
    },
    {
      icon: Users,
      title: "Policy Updates & User Rights",
      description: "Stay up to date with regular policy notifications. Jaimax ensures full user control over personal data, privacy settings, and account activity."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Geometric background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-lime-500 to-green-600 rounded-full opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-teal-500 to-lime-500 rounded-full opacity-15"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-500 to-teal-500 rounded-full opacity-10"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-24">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-tight">
              <span className="block mb-2">Powering the</span>
              <span className="bg-gradient-to-r from-lime-400 via-green-500 to-lime-400 bg-clip-text text-transparent">
                Future of Crypto
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed px-4">
              Welcome to Jaimax, one of the best crypto coins designed for growth, transparency, and financial freedom. Built on powerful blockchain technology, Jaimax offers a secure and scalable platform for users who want to be part of the next generation of digital finance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-lime-500 to-green-600 text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto">
                Get Started Now
                <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </button>
              <button className="px-8 py-4 border-2 border-lime-500 text-lime-400 font-bold text-lg rounded-lg hover:bg-lime-500 hover:text-white transition-all duration-300 w-full sm:w-auto">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative z-10 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Core <span className="text-lime-400">Functional Features</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              Discover the powerful features that make Jaimax the perfect choice for your crypto journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className={`group bg-slate-700 rounded-2xl p-4 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:bg-slate-600 border border-slate-600 hover:border-lime-500/50 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-start mb-6">
                      <div className="bg-gradient-to-r from-lime-500 to-green-600 rounded-xl w-14 h-14 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 flex-shrink-0">
                        <IconComponent className="text-white" size={24} />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-lime-400 mb-4 group-hover:text-lime-300 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed flex-grow group-hover:text-gray-200 transition-colors duration-300">
                      {feature.description}
                    </p>
                    <div className="mt-6 flex justify-end">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-600 border border-lime-500/30 group-hover:bg-lime-500 transition-all duration-300">
                        <ArrowRight className="text-lime-400 group-hover:text-white transform group-hover:translate-x-1 transition-all duration-300" size={16} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="relative z-10 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-600 shadow-2xl">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Why <span className="text-lime-400">Jaimax</span> is a Top Choice
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Jaimax isn't just another coin — it's a complete crypto investment platform with features designed for real-world use. Our mission is to provide secure, scalable, and user-friendly solutions that put you first.
              </p>
              <p className="text-base sm:text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                Whether you're holding for long-term gains or exploring the future of decentralized finance, Jaimax offers everything you need in one place.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center p-6 rounded-2xl bg-slate-800 border border-slate-600 hover:border-lime-500/50 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl font-bold text-lime-400 mb-2">99.9%</div>
                  <div className="text-gray-300 font-medium">Uptime Guarantee</div>
                </div>
                <div className="text-center p-6 rounded-2xl bg-slate-800 border border-slate-600 hover:border-lime-500/50 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl font-bold text-lime-400 mb-2">50K+</div>
                  <div className="text-gray-300 font-medium">Active Users</div>
                </div>
                <div className="text-center p-6 rounded-2xl bg-slate-800 border border-slate-600 hover:border-lime-500/50 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl font-bold text-lime-400 mb-2">24/7</div>
                  <div className="text-gray-300 font-medium">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </div>
  );
};

export default JaimaxLanding;