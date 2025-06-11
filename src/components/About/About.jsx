
// import React, { useRef, useState, useEffect } from 'react';
// import { TrendingUp, Users, Coins, Shield, CreditCard, Globe, Sparkles, ArrowRight } from 'lucide-react';

// const JaimaxComponent = () => {
//   const leftBoxRef = useRef(null);
//   const rightBoxRef = useRef(null);
//   const statsCardsRef = useRef(null);
//   const thirdBoxRef = useRef(null);
//   const [animatedPrice, setAnimatedPrice] = useState(0);
//   const [animatedTokens, setAnimatedTokens] = useState(0);
//   const [animatedMembers, setAnimatedMembers] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);
//   const [statsVisible, setStatsVisible] = useState(false);
//   const [thirdBoxVisible, setThirdBoxVisible] = useState(false);

//   // Intersection Observer for scroll animations
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             if (entry.target === leftBoxRef.current) {
//               setIsVisible(true);
//             }
//             if (entry.target === statsCardsRef.current) {
//               setStatsVisible(true);
//             }
//             if (entry.target === thirdBoxRef.current) {
//               setThirdBoxVisible(true);
//             }
//           }
//         });
//       },
//       {
//         threshold: 0.3, // Trigger when 30% of the element is visible
//         rootMargin: '0px 0px -100px 0px' // Start animation 100px before element comes into view
//       }
//     );

//     if (leftBoxRef.current) {
//       observer.observe(leftBoxRef.current);
//     }

//     if (statsCardsRef.current) {
//       observer.observe(statsCardsRef.current);
//     }
//     if (thirdBoxRef.current) {
//       observer.observe(thirdBoxRef.current);
//     }

//     return () => {
//       if (leftBoxRef.current) {
//         observer.unobserve(leftBoxRef.current);
//       }
//       if (statsCardsRef.current) {
//         observer.unobserve(statsCardsRef.current);
//       }
//       if (thirdBoxRef.current) {
//         observer.unobserve(thirdBoxRef.current);
//       }
//     };
//   }, []);

//   // Animate numbers on component mount
//   useEffect(() => {
//     const priceTarget = 0.00012;
//     const tokensTarget = 225765326;
//     const membersTarget = 24567;

//     const animateNumber = (target, setter, duration = 2000) => {
//       const start = Date.now();
//       const animate = () => {
//         const now = Date.now();
//         const progress = Math.min((now - start) / duration, 1);
//         const easeOut = 1 - Math.pow(1 - progress, 3);
//         setter(target * easeOut);

//         if (progress < 1) {
//           requestAnimationFrame(animate);
//         }
//       };
//       animate();
//     };

//     setTimeout(() => animateNumber(priceTarget, setAnimatedPrice, 1500), 200);
//     setTimeout(() => animateNumber(tokensTarget, setAnimatedTokens, 2000), 400);
//     setTimeout(() => animateNumber(membersTarget, setAnimatedMembers, 1800), 600);
//   }, []);

//   const formatNumber = (num) => {
//     if (num >= 1000000) {
//       return (num / 1000000).toFixed(1) + 'M';
//     }
//     if (num >= 1000) {
//       return (num / 1000).toFixed(1) + 'K';
//     }
//     return Math.floor(num).toLocaleString();
//   };

//   return (
//     <div className="min-h-screen bg-[#195f64]  p-4 relative overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#b1c201]/20 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
//         <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-teal-300/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
//       </div>

//       <div className="max-w-6xl mx-auto relative z-10">
//         {/* Header Section */}
//         <div className="text-center mb-12">
//           <div className="inline-flex items-center gap-4 mb-6 group">
//             <div className="relative">
//               <div className="w-16 h-16 bg-gradient-to-br from-[#085259] via-teal-500 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-2xl transform group-hover:scale-110 transition-all duration-300">
//                 J
//               </div>
//               <div className="absolute -inset-2 bg-gradient-to-r from-[#085259] to-cyan-400 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
//             </div>
//             <div>
//               <h1 className="text-5xl font-bold bg-gradient-to-r from-black via-slate-800 to-gray-700 bg-clip-text text-transparent">
//                 J COIN
//               </h1>
//               <div className="flex items-center gap-2 mt-1">
//                 <Sparkles className="w-4 h-4 text-slate-600" />
//                 <span className="text-slate-700 text-sm font-medium">Premium Crypto Experience</span>
//               </div>
//             </div>
//           </div>

//           <p className="text-slate-800 text-2xl mb-4 font-light">Your Gateway to Unlocking Wealth</p>

//           <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#085259]/10 to-emerald-600/10 backdrop-blur-sm px-6 py-3 rounded-full border border-emerald-400/30 shadow-lg">
//             <div className="relative">
//               <div className="w-4 h-4 bg-gradient-to-r from-emerald-400 to-green-300 rounded-full animate-pulse"></div>
//               <div className="absolute inset-0 w-4 h-4 bg-emerald-400 rounded-full animate-ping opacity-30"></div>
//             </div>
//             <span className="text-emerald-700 font-semibold text-lg">Phase One - LIVE NOW</span>
//           </div>
//         </div>

//         {/* Live Stats Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12" ref={statsCardsRef}>
//           {/* Current Price */}
//           <div
//             className={`group bg-gradient-to-br from-white/30 via-white/20 to-[#085259]/10 backdrop-blur-xl rounded-3xl p-8 border border-white/40 hover:border-[#085259]/50 transition-all duration-1000 shadow-2xl hover:shadow-[#085259]/20 hover:-translate-y-2 transform ease-out ${statsVisible
//               ? 'translate-y-0 opacity-100'
//               : 'translate-y-20 opacity-0'
//               }`}
//             style={{
//               transitionDelay: '0.1s'
//             }}
//           >
//             <div className="flex items-center gap-4 mb-6">
//               <div className="p-3 bg-gradient-to-br from-emerald-400/20 to-green-500/20 rounded-2xl">
//                 <TrendingUp className="w-8 h-8 text-emerald-700" />
//               </div>
//               <h2 className="text-xl font-bold text-slate-800">Live Price</h2>
//             </div>
//             <div className="space-y-3">
//               <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-green-700 bg-clip-text text-transparent">
//                 ${animatedPrice.toFixed(6)}
//               </div>
//               <div className="text-lg text-slate-600 font-medium">
//                 ₹0.01 INR
//               </div>
//               <div className="flex items-center gap-2 text-emerald-600 text-sm">
//                 <ArrowRight className="w-4 h-4" />
//                 <span>+12.5% 24h</span>
//               </div>
//             </div>
//           </div>

//           {/* Sold Tokens */}
//           <div
//             className={`group bg-gradient-to-br from-white/30 via-white/20 to-[#085259]/10 backdrop-blur-xl rounded-3xl p-8 border border-white/40 hover:border-[#085259]/50 transition-all duration-1000 shadow-2xl hover:shadow-[#085259]/20 hover:-translate-y-2 transform ease-out ${statsVisible
//               ? 'translate-y-0 opacity-100'
//               : 'translate-y-20 opacity-0'
//               }`}
//             style={{
//               transitionDelay: '0.3s'
//             }}
//           >
//             <div className="flex items-center gap-4 mb-6">
//               <div className="p-3 bg-gradient-to-br from-[#085259]/30 to-cyan-500/20 rounded-2xl">
//                 <Coins className="w-8 h-8 text-cyan-700" />
//               </div>
//               <h3 className="text-xl font-bold text-slate-800">Sold Tokens</h3>
//             </div>
//             <div className="text-4xl font-bold bg-gradient-to-r from-[#085259] to-cyan-700 bg-clip-text text-transparent">
//               {formatNumber(animatedTokens)}
//             </div>
//             <div className="text-lg text-slate-600 font-medium mt-3">
//               of 10B Total Supply
//             </div>
//             <div className="w-full bg-slate-400/50 rounded-full h-3 mt-4 overflow-hidden">
//               <div
//                 className="bg-gradient-to-r from-[#085259] via-teal-400 to-cyan-300 h-3 rounded-full transition-all duration-2000 shadow-lg"
//                 style={{ width: `${(animatedTokens / 10000000000) * 100}%` }}
//               ></div>
//             </div>
//             <div className="text-sm text-cyan-700 mt-2 font-medium">
//               {((animatedTokens / 10000000000) * 100).toFixed(2)}% Complete
//             </div>
//           </div>

//           {/* Live Members */}
//           <div
//             className={`group bg-gradient-to-br from-white/30 via-white/20 to-[#085259]/10 backdrop-blur-xl rounded-3xl p-8 border border-white/40 hover:border-[#085259]/50 transition-all duration-1000 shadow-2xl hover:shadow-[#085259]/20 hover:-translate-y-2 transform ease-out ${statsVisible
//               ? 'translate-y-0 opacity-100'
//               : 'translate-y-20 opacity-0'
//               }`}
//             style={{
//               transitionDelay: '0.5s'
//             }}
//           >
//             <div className="flex items-center gap-4 mb-6">
//               <div className="p-3 bg-gradient-to-br from-purple-500/20 to-[#085259]/30 rounded-2xl">
//                 <Users className="w-8 h-8 text-purple-700" />
//               </div>
//               <h3 className="text-xl font-bold text-slate-800">Live Members</h3>
//             </div>
//             <div className="text-4xl font-bold bg-gradient-to-r from-purple-700 to-[#085259] bg-clip-text text-transparent">
//               {formatNumber(animatedMembers)}
//             </div>
//             <div className="text-lg text-slate-600 font-medium mt-3">
//               Active Investors
//             </div>
//             <div className="flex items-center gap-2 text-purple-700 text-sm mt-3">
//               <div className="w-2 h-2 bg-purple-700 rounded-full animate-pulse"></div>
//               <span>Growing Community</span>
//             </div>
//           </div>
//         </div>

//         {/* Referral Banner */}
//         <div className={`bg-gradient-to-r from-emerald-600 via-teal-700 to-cyan-700 rounded-3xl p-8 mb-12 text-center relative overflow-hidden shadow-2xl transition-all duration-1000 ease-out transform ${thirdBoxVisible
//           ? 'scale-100 opacity-100'
//           : 'scale-95 opacity-0'
//           }`}
//           style={{
//             transitionDelay: '0.3s'
//           }}
//           ref={thirdBoxRef}>
//           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
//           <div className="relative z-10">
//             <div className="flex items-center justify-center gap-3 mb-4">
//               <Sparkles className="w-8 h-8 text-yellow-200" />
//               <h3 className="text-3xl font-bold text-white">Referral Rewards</h3>
//               <Sparkles className="w-8 h-8 text-yellow-200" />
//             </div>
//             <p className="text-white text-xl font-medium">
//               Earn <span className="text-yellow-200 font-bold text-2xl">10%</span> of a referral's first purchase in your wallet
//             </p>
//             <div className="mt-4 inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
//               <span className="text-yellow-100 text-sm font-medium">Limited Time Bonus</span>
//             </div>
//           </div>
//         </div>

//         {/* About and Features Section */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12" ref={leftBoxRef}>
//           {/* About Jaimax - Left Box */}
//           <div
//             className={`bg-gradient-to-br from-white/30 via-white/20 to-[#085259]/10 backdrop-blur-xl rounded-3xl p-10 border border-white/40 shadow-2xl transition-all duration-1000 ease-out transform ${isVisible
//               ? 'translate-x-0 opacity-100'
//               : '-translate-x-20 opacity-0'
//               }`}
//             style={{
//               transitionDelay: '0.2s'
//             }}
//           >
//             <h3 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
//               <div className="w-2 h-8 bg-gradient-to-b from-[#085259] to-cyan-400 rounded-full"></div>
//               About Jaimax
//             </h3>
//             <div className="space-y-5 text-slate-700 leading-relaxed">
//               <p className="text-lg">
//                 Our founding members are young and enthusiastic adopters of cryptocurrencies, driven by innovation and excellence.
//               </p>
//               <p className="text-lg">
//                 In late 2024, we decided to launch a revolutionary cryptocurrency exchange. To ensure a smooth entry into the world of crypto, we prioritized ease of use, security, and customer support from the very beginning. Jaimax went live in July 2024.
//               </p>
//               <p className="text-lg">
//                 Jaimax, the most valuable crypto investment app, is dedicated to making crypto accessible in a simple, secure way. Established in 2024, Jaimax has addressed numerous challenges faced by the crypto community.
//               </p>
//             </div>
//           </div>

//           {/* Key Features - Right Box */}
//           <div
//             className={`bg-gradient-to-br from-white/30 via-white/20 to-[#085259]/10 backdrop-blur-xl rounded-3xl p-10 border border-white/40 shadow-2xl transition-all duration-1000 ease-out transform ${isVisible
//               ? 'translate-x-0 opacity-100'
//               : 'translate-x-20 opacity-0'
//               }`}
//             style={{
//               transitionDelay: '0.5s'
//             }}
//             ref={rightBoxRef}
//           >
//             <h3 className="text-3xl font-bold text-slate-800 mb-8 flex items-center gap-3">
//               <div className="w-2 h-8 bg-gradient-to-b from-[#085259] to-cyan-400 rounded-full"></div>
//               Key Features
//             </h3>
//             <div className="space-y-6">
//               <div className="flex items-start gap-4 group">
//                 <div className="p-3 bg-gradient-to-br from-emerald-500/20 to-green-600/20 rounded-2xl group-hover:scale-110 transition-transform">
//                   <Shield className="w-8 h-8 text-emerald-700" />
//                 </div>
//                 <div>
//                   <h4 className="text-slate-800 font-bold text-xl mb-2">Security First</h4>
//                   <p className="text-slate-700 text-lg">Advanced security measures to protect your investments with military-grade encryption</p>
//                 </div>
//               </div>
//               <div className="flex items-start gap-4 group">
//                 <div className="p-3 bg-gradient-to-br from-[#085259]/30 to-cyan-500/20 rounded-2xl group-hover:scale-110 transition-transform">
//                   <CreditCard className="w-8 h-8 text-cyan-700" />
//                 </div>
//                 <div>
//                   <h4 className="text-slate-800 font-bold text-xl mb-2">Virtual Cards</h4>
//                   <p className="text-slate-700 text-lg">Next-generation payment gateway with virtual cryptocurrency cards</p>
//                 </div>
//               </div>
//               <div className="flex items-start gap-4 group">
//                 <div className="p-3 bg-gradient-to-br from-purple-500/20 to-[#085259]/30 rounded-2xl group-hover:scale-110 transition-transform">
//                   <Globe className="w-8 h-8 text-purple-700" />
//                 </div>
//                 <div>
//                   <h4 className="text-slate-800 font-bold text-xl mb-2">Global Access</h4>
//                   <p className="text-slate-700 text-lg">Spend crypto anywhere that accepts traditional payments worldwide</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JaimaxComponent;
import React, { useEffect, useRef, useState } from "react";
import {
  Coins,
  DollarSign,
  BarChart3,
  TrendingUp,
  Users,
  Wallet,
  Menu,
  X,
  Shield,
  CreditCard,
  Globe,
  Sparkles,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

export default function JaimaxComponent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // FloatingParticle subcomponent inside this file
  const FloatingParticle = ({
    size = 10,
    color = "teal",
    opacity = 0.2,
    delay = 0,
    style = {},
  }) => {
    const colors = {
      teal: "bg-teal-400",
      cyan: "bg-cyan-400",
      blue: "bg-blue-500",
      purple: "bg-purple-600",
      green: "bg-green-400",
    };

    return (
      <div
        style={{
          width: size,
          height: size,
          animationDelay: `${delay}s`,
          opacity: opacity,
          ...style,
        }}
        className={`rounded-full absolute ${colors[color] || "bg-teal-400"} animate-float`}
      />
    );
  };

  const leftBoxRef = useRef(null);
  const rightBoxRef = useRef(null);
  const statsCardsRef = useRef(null);
  const thirdBoxRef = useRef(null);
  const [animatedPrice, setAnimatedPrice] = useState(0);
  const [animatedTokens, setAnimatedTokens] = useState(0);
  const [animatedMembers, setAnimatedMembers] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [thirdBoxVisible, setThirdBoxVisible] = useState(false);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === leftBoxRef.current) {
              setIsVisible(true);
            }
            if (entry.target === statsCardsRef.current) {
              setStatsVisible(true);
            }
            if (entry.target === thirdBoxRef.current) {
              setThirdBoxVisible(true);
            }
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (leftBoxRef.current) {
      observer.observe(leftBoxRef.current);
    }
    if (statsCardsRef.current) {
      observer.observe(statsCardsRef.current);
    }
    if (thirdBoxRef.current) {
      observer.observe(thirdBoxRef.current);
    }

    return () => {
      if (leftBoxRef.current) {
        observer.unobserve(leftBoxRef.current);
      }
      if (statsCardsRef.current) {
        observer.unobserve(statsCardsRef.current);
      }
      if (thirdBoxRef.current) {
        observer.unobserve(thirdBoxRef.current);
      }
    };
  }, []);

  // Animate numbers on component mount
  useEffect(() => {
    const priceTarget = 0.00012;
    const tokensTarget = 225765326;
    const membersTarget = 24567;

    const animateNumber = (target, setter, duration = 2000) => {
      const start = Date.now();
      const animate = () => {
        const now = Date.now();
        const progress = Math.min((now - start) / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        setter(target * easeOut);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      animate();
    };

    setTimeout(() => animateNumber(priceTarget, setAnimatedPrice, 1500), 200);
    setTimeout(() => animateNumber(tokensTarget, setAnimatedTokens, 2000), 400);
    setTimeout(() => animateNumber(membersTarget, setAnimatedMembers, 1800), 600);
  }, []);

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes slideInLeft {
          0% {
            transform: translateX(-100px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slideInRight {
          0% {
            transform: translateX(100px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes fadeInUp {
          0% {
            transform: translateY(30px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes glow {
          0%, 100% {
            border-color: rgba(14, 165, 233, 0.3);
          }
          50% {
            border-color: rgba(14, 165, 233, 0.6);
          }
        }
        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 4s ease infinite;
        }
        .mobile-menu-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .mobile-menu-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.3);
          border-radius: 3px;
        }
      `}</style>

      <div
        className="min-h-screen text-white relative overflow-x-hidden"
        style={{
          background:
            "linear-gradient(135deg, rgba(8,83,89,0.95) 0%, rgba(8,83,89,0.9) 100%)",
        }}
      >
        {/* Background particles */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0" />
          {[...Array(20)].map((_, i) => (
            <FloatingParticle
              key={i}
              size={3}
              color="teal"
              opacity={0.15}
              delay={i * 0.3}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}

          {/* Large glowing orbs */}
          <FloatingParticle
            size={600}
            color="cyan"
            opacity={0.15}
            style={{ top: "20%", left: "30%", filter: "blur(100px)" }}
          />
          <FloatingParticle
            size={400}
            color="purple"
            opacity={0.1}
            style={{ top: "70%", left: "60%", filter: "blur(80px)" }}
          />
        </div>

        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/30 border-b border-teal-700">
          <div className="w-full  px-6">
            <div className="flex justify-between items-center py-4">
              {/* Logo */}
              <div className="flex items-center group cursor-pointer">
                <div className="relative">
                  <Coins className="w-10 h-10 text-teal-400 group-hover:text-cyan-400 group-hover:rotate-180 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-teal-400 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity" />
                </div>
                <div className="ml-3">
                  <span className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                    JaiMax
                  </span>
                  <div className="text-xs text-teal-300">JMAX</div>
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {["About", "Tokenomics", "Roadmap", "Community"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="relative text-teal-200 hover:text-cyan-300 transition-colors group"
                  >
                    {item}
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
                  </a>
                ))}
                <button className="bg-gradient-to-r from-teal-500 to-cyan-600 px-6 py-2 rounded-full font-semibold hover:from-teal-600 hover:to-cyan-700 transition-all duration-300">
                  Buy JMAX
                </button>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                className="md:hidden text-teal-300"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-[rgba(8,83,89,0.95)] z-50 flex flex-col items-center justify-center space-y-8 text-white text-2xl font-semibold mobile-menu-scrollbar overflow-y-auto">
            {["About", "Tokenomics", "Roadmap", "Community"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-cyan-300 transition-colors"
              >
                {item}
              </a>
            ))}
            <button
              className="bg-gradient-to-r from-teal-500 to-cyan-600 px-8 py-3 rounded-full font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Buy JMAX
            </button>
          </div>
        )}

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-20 z-10">
          <div className="max-w-7xl mx-auto px-6 text-center">
            {/* Animated Logo */}
            <div className="mb-8 relative flex justify-center">
              <div className="w-32 h-32 relative">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full animate-spin"
                  style={{ animationDuration: "20s" }}
                />
                <div className="absolute inset-2 bg-[rgba(8,83,89,0.95)] rounded-full flex items-center justify-center">
                  <Coins className="w-16 h-16 text-cyan-400" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full blur-xl opacity-30 animate-pulse" />
              </div>
            </div>

            {/* Hero Title */}
            <div className="mb-6">
              <h1 className="text-4xl md:text-6xl font-bold text-center">
                <div className="mb-2 bg-gradient-to-r from-teal-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent animate-pulse">
                  The Best Crypto Coin in India for 
                </div>
                <div className="bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  a Decentralized Future
                </div>
              </h1>
            </div>

            {/* Hero Description */}
            <div className="mb-12">
              <p className="text-xl md:text-2xl text-teal-200 max-w-4xl mx-auto leading-relaxed">
                Revolutionary cryptocurrency powered by cutting-edge blockchain technology. Experience lightning-fast transactions, military-grade security, and community-driven governance.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="mb-16 flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl w-full">
                {[
                  {
                    label: "Live Price",
                    value: "$0.00012",
                    icon: <DollarSign className="w-5 h-5" />,
                    color: "from-green-400 to-emerald-500",
                    borderColor: "border-green-400/40 hover:border-green-400/70",
                  },
                  {
                    label: "Sold Tokens",
                    value: "225,765,326",
                    icon: <BarChart3 className="w-5 h-5" />,
                    color: "from-teal-400 to-cyan-500",
                    borderColor: "border-teal-400/40 hover:border-teal-400/70",
                  },
                  {
                    label: "Live Members",
                    value: "24,567",
                    icon: <TrendingUp className="w-5 h-5" />,
                    color: "from-purple-600 to-cyan-500",
                    borderColor: "border-purple-400/40 hover:border-purple-400/70",
                  },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className={`bg-gradient-to-br from-slate-900/60 via-gray-900/50 to-black/40 backdrop-blur-xl rounded-xl border ${stat.borderColor} transition-all duration-500 group hover:scale-105 animate-glow h-[140px] flex flex-col justify-center items-center p-4`}
                    style={{
                      animationDelay: `${index * 0.2}s`,
                    }}
                  >
                    <div
                      className={`w-10 h-10 rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center mb-2 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300`}
                    >
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-white mb-0.5 text-center group-hover:text-cyan-300 transition-colors duration-300">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-300 text-center group-hover:text-white transition-colors duration-300">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

             
    <section className="w-full py-12 mb-12 ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* TEXT SIDE */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-teal-400">
                What Makes Jaimax a Top Crypto Coin?
              </h2>
              <p className="text-lg leading-relaxed text-white mb-6">
                Jaimax is not just another digital currency. We're a next-gen
                blockchain-based platform designed to offer stability, scalability,
                and growth. As a new cryptocurrency with strong potential, Jaimax
                combines technical strength with real-world community support.
              </p>
            </div>

            <div className="mb-8">
              <ul className="space-y-4">
                {[
                  "Best crypto coin in India for new investors looking for trust and transparency.",
                  "A fast-growing Indian blockchain project with global scalability.",
                  "Backed by a passionate team committed to long-term growth and education.",
                  "A powerful opportunity to be part of one of India's most promising crypto coins.",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start text-white text-lg leading-relaxed"
                  >
                    <CheckCircle2 className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-bold text-teal-400 mb-4">
                  Our Vision: From India to the World
                </h3>
                <p className="text-lg leading-relaxed text-white mb-4">
                  Jaimax aims to be the top crypto project from India, creating
                  impact far beyond borders. We're building a financial ecosystem
                  that connects users, traders, and learners. With our strong
                  blockchain foundation, we offer a safe and secure space for
                  everyone to explore the future of crypto.
                </p>
                <p className="text-lg leading-relaxed text-white">
                  We believe the best crypto coins are not just about price —
                  they are about purpose. That's why we focus on educating users,
                  supporting early adoption, and creating new opportunities in
                  the decentralized economy.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-teal-400 mb-4">
                  Why Now?
                </h3>
                <p className="text-lg leading-relaxed text-white mb-4">
                  The world of cryptocurrency in India is growing faster than
                  ever. And now is the right time to be part of something big.
                  Jaimax is currently available at a low entry price — making it
                  the smartest move for those looking to start their crypto
                  journey with a reliable and ethical project.
                </p>
                <p className="text-lg leading-relaxed text-white">
                  If you're searching for the best Indian crypto coin, Jaimax is
                  your answer. We're not just a coin; we're building a future.
                </p>
              </div>
            </div>
          </div>

          {/* IMAGE SIDE */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-blue-500 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
              <img
                src="https://images.unsplash.com/photo-1604394882740-8d0f8e1ed37b?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Jaimax illustration"
                className="relative rounded-3xl object-cover object-center w-full h-[28rem] shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
            
            {/* What Makes Jaimax Section */}
            {/* <section className="w-full py-12 mb-12">
              <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-8">
                  <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-teal-400">
                    What Makes Jaimax a Top Crypto Coin?
                  </h2>
                  <p className="text-lg leading-relaxed text-white max-w-4xl mx-auto">
                    Jaimax is not just another digital currency. We're a next-gen
                    blockchain-based platform designed to offer stability, scalability,
                    and growth. As a new cryptocurrency with strong potential, Jaimax
                    combines technical strength with real-world community support.
                  </p>
                </div>

                <div className="mb-8">
                  <ul className="space-y-4 max-w-4xl mx-auto">
                    {[
                      "Best crypto coin in India for new investors looking for trust and transparency.",
                      "A fast-growing Indian blockchain project with global scalability.",
                      "Backed by a passionate team committed to long-term growth and education.",
                      "A powerful opportunity to be part of one of India's most promising crypto coins.",
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start text-white text-lg leading-relaxed"
                      >
                        <CheckCircle2 className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-white text-center max-w-4xl mx-auto space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-teal-400 mb-4">
                      Our Vision: From India to the World
                    </h3>
                    <p className="text-lg leading-relaxed mb-4">
                      Jaimax aims to be the top crypto project from India, creating impact
                      far beyond borders. We're building a financial ecosystem that
                      connects users, traders, and learners. With our strong blockchain
                      foundation, we offer a safe and secure space for everyone to explore
                      the future of crypto.
                    </p>
                    <p className="text-lg leading-relaxed">
                      We believe the best crypto coins are not just about price — they are
                      about purpose. That's why we focus on educating users, supporting
                      early adoption, and creating new opportunities in the decentralized
                      economy.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-teal-400 mb-4">
                      Why Now?
                    </h3>
                    <p className="text-lg leading-relaxed mb-4">
                      The world of cryptocurrency in India is growing faster than ever.
                      And now is the right time to be part of something big. Jaimax is
                      currently available at a low entry price — making it the smartest
                      move for those looking to start their crypto journey with a reliable
                      and ethical project.
                    </p>
                    <p className="text-lg leading-relaxed">
                      If you're searching for the best Indian crypto coin, Jaimax is your
                      answer. We're not just a coin; we're building a future.
                    </p>
                  </div>
                </div>
              </div>
            </section>
             */}
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group relative bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg overflow-hidden transition-all duration-500 transform hover:scale-105 animate-gradient">
                {/* Background sliding gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 translate-x-full group-hover:translate-x-0 transition-transform duration-500 z-0" />

                {/* Text on top */}
                <span className="relative z-10 flex items-center justify-center">
                  <Wallet className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  Buy JMAX Now
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>

              <button className="group border-2 border-teal-400/60 text-teal-200 px-8 py-4 rounded-xl font-semibold text-lg backdrop-blur-lg hover:bg-gradient-to-r hover:from-teal-700/40 hover:to-cyan-700/40 hover:border-teal-300 hover:text-white transition-all duration-500 transform hover:scale-105">
                <span className="flex items-center justify-center">
                  <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-180 transition-transform duration-500" />
                  Read Whitepaper
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* About & Features Section */}
        <section className="relative z-10 py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16" ref={leftBoxRef}>
              {/* About Jaimax */}
              <div
                className={`bg-gradient-to-br from-teal-900/50 via-cyan-900/40 to-slate-900/30 backdrop-blur-xl rounded-3xl p-12 border-2 border-teal-400/40 transition-all duration-1000 ease-out transform hover:border-teal-400/60 group animate-glow ${
                  isVisible
                    ? 'translate-x-0 opacity-100'
                    : '-translate-x-20 opacity-0'
                }`}
                style={{
                  transitionDelay: '0.2s'
                }}
              >
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-white flex items-center gap-4 group-hover:text-cyan-300 transition-colors duration-300">
                    <div className="w-2 h-12 bg-gradient-to-b from-teal-400 to-cyan-400 rounded-full animate-gradient group-hover:scale-110 transition-transform duration-300"></div>
                    <span className="bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent">About Jaimax</span>
                  </h3>
                </div>
                <div className="space-y-6 text-gray-100 leading-relaxed">
                  <p className="text-lg text-gray-200 hover:text-white transition-colors duration-300 transform hover:translate-x-2">
                    Our founding members are young and enthusiastic adopters of cryptocurrencies, driven by innovation and excellence.
                  </p>
                  <p className="text-lg text-gray-200 hover:text-white transition-colors duration-300 transform hover:translate-x-2">
                    In late 2024, we decided to launch a revolutionary cryptocurrency exchange. To ensure a smooth entry into the world of crypto, we prioritized ease of use, security, and customer support from the very beginning. Jaimax went live in July 2024.
                  </p>
                  <p className="text-lg text-gray-200 hover:text-white transition-colors duration-300 transform hover:translate-x-2">
                    Jaimax, the most valuable crypto investment app, is dedicated to making crypto accessible in a simple, secure way. Established in 2024, Jaimax has addressed numerous challenges faced by the crypto community.
                  </p>
                </div>
              </div>

              {/* Key Features */}
              <div
                className={`bg-gradient-to-br from-teal-900/50 via-cyan-900/40 to-slate-900/30 backdrop-blur-xl rounded-3xl p-12 border-2 border-teal-400/40 transition-all duration-1000 ease-out transform hover:border-teal-400/60 group animate-glow ${
                  isVisible
                    ? 'translate-x-0 opacity-100'
                    : 'translate-x-20 opacity-0'
                }`}
                style={{
                  transitionDelay: '0.5s'
                }}
                ref={rightBoxRef}
              >
                <div className="mb-10">
                  <h3 className="text-3xl font-bold text-white flex items-center gap-4 group-hover:text-purple-300 transition-colors duration-300">
                    <div className="w-2 h-12 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full animate-gradient group-hover:scale-110 transition-transform duration-300"></div>
                    <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">Key Features</span>
                  </h3>
                </div>
                <div className="space-y-8">
                  <div className="flex items-start gap-6 group/item hover:transform hover:translate-x-2 transition-all duration-300">
                    <div className="p-4 bg-gradient-to-br from-emerald-500/40 to-green-600/40 rounded-2xl group-hover/item:scale-110 transition-all duration-300 animate-glow flex-shrink-0">
                      <Shield className="w-8 h-8 text-emerald-300 group-hover/item:text-emerald-100 transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-bold text-xl mb-3 group-hover/item:text-emerald-300 transition-colors duration-300">Security First</h4>
                      <p className="text-gray-200 text-lg group-hover/item:text-white transition-colors duration-300">Advanced security measures to protect your investments with military-grade encryption</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6 group/item hover:transform hover:translate-x-2 transition-all duration-300">
                    <div className="p-4 bg-gradient-to-br from-cyan-500/40 to-blue-600/40 rounded-2xl group-hover/item:scale-110 transition-all duration-300 animate-glow flex-shrink-0">
                      <CreditCard className="w-8 h-8 text-cyan-300 group-hover/item:text-cyan-100 transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-bold text-xl mb-3 group-hover/item:text-cyan-300 transition-colors duration-300">Virtual Cards</h4>
                      <p className="text-gray-200 text-lg group-hover/item:text-white transition-colors duration-300">Next-generation payment gateway with virtual cryptocurrency cards</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6 group/item hover:transform hover:translate-x-2 transition-all duration-300">
                    <div className="p-4 bg-gradient-to-br from-purple-500/40 to-indigo-600/40 rounded-2xl group-hover/item:scale-110 transition-all duration-300 animate-glow flex-shrink-0">
                      <Globe className="w-8 h-8 text-purple-300 group-hover/item:text-purple-100 transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-bold text-xl mb-3 group-hover/item:text-purple-300 transition-colors duration-300">Global Access</h4>
                      <p className="text-gray-200 text-lg group-hover/item:text-white transition-colors duration-300">Spend crypto anywhere that accepts traditional payments worldwide</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
};