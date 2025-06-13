// import React, { useEffect, useRef, useState } from "react";
// import {
//   Coins,
//   DollarSign,
//   BarChart3,
//   TrendingUp,
//   Users,
//   Wallet,
//   Menu,
//   X,
//   Shield,
//   CreditCard,
//   Globe,
//   Sparkles,
//   ArrowRight,
//   CheckCircle2,
//   Target,
//   Award,
//   Zap,
//   Star,
//   Eye,
//   Heart,
//   Rocket,
//   Crown
// } from "lucide-react";
// import icon from '../../assets/Images/jaicoin.svg'

// // Enhanced SVG Backgrounds for cards
// const CardBg1 = () => (
//   <svg className="absolute inset-0 w-full h-full object-cover opacity-10" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
//     <defs>
//       <radialGradient id="grad1" cx="50%" cy="50%" r="50%">
//         <stop offset="0%" stopColor="rgba(6,182,212,0.6)" />
//         <stop offset="100%" stopColor="rgba(13,148,136,0.2)" />
//       </radialGradient>
//     </defs>
//     <rect x="0" y="0" width="100" height="100" fill="url(#grad1)" />
//     <circle cx="20" cy="20" r="15" fill="rgba(6,182,212,0.1)" />
//     <circle cx="80" cy="50" r="25" fill="rgba(13,148,136,0.1)" />
//     <circle cx="50" cy="80" r="10" fill="rgba(6,182,212,0.1)" />
//   </svg>
// );

// const CardBg2 = () => (
//   <svg className="absolute inset-0 w-full h-full object-cover opacity-10" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
//     <defs>
//       <radialGradient id="grad2" cx="50%" cy="50%" r="50%">
//         <stop offset="0%" stopColor="rgba(168,85,247,0.6)" />
//         <stop offset="100%" stopColor="rgba(232,121,249,0.2)" />
//       </radialGradient>
//     </defs>
//     <rect x="0" y="0" width="100" height="100" fill="url(#grad2)" />
//     <path d="M0 0 L100 0 L100 100 L0 100 Z M 10 10 L 90 10 L 90 90 L 10 90 Z" fill="rgba(168,85,247,0.05)" />
//     <circle cx="30" cy="70" r="20" fill="rgba(232,121,249,0.1)" />
//   </svg>
// );

// const CardBg3 = () => (
//   <svg className="absolute inset-0 w-full h-full object-cover opacity-10" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
//     <defs>
//       <radialGradient id="grad3" cx="50%" cy="50%" r="50%">
//         <stop offset="0%" stopColor="rgba(45,212,191,0.6)" />
//         <stop offset="100%" stopColor="rgba(99,102,241,0.2)" />
//       </radialGradient>
//     </defs>
//     <rect x="0" y="0" width="100" height="100" fill="url(#grad3)" />
//     <rect x="10" y="10" width="30" height="30" fill="rgba(45,212,191,0.1)" />
//     <rect x="60" y="60" width="30" height="30" fill="rgba(99,102,241,0.1)" />
//     <polygon points="50,5 90,40 50,75 10,40" fill="rgba(45,212,191,0.05)" />
//   </svg>
// );

// const CardBg4 = () => (
//   <svg className="absolute inset-0 w-full h-full object-cover opacity-10" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
//     <defs>
//       <radialGradient id="grad4" cx="50%" cy="50%" r="50%">
//         <stop offset="0%" stopColor="rgba(251,191,36,0.6)" />
//         <stop offset="100%" stopColor="rgba(234,88,12,0.2)" />
//       </radialGradient>
//     </defs>
//     <rect x="0" y="0" width="100" height="100" fill="url(#grad4)" />
//     <circle cx="50" cy="50" r="40" fill="rgba(251,191,36,0.05)" />
//     <path d="M50 0 A50 50 0 0 1 100 50 L50 100 L0 50 A50 50 0 0 1 50 0 Z" fill="rgba(234,88,12,0.05)" />
//   </svg>
// );

// export default function JaimaxComponent() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
//   const FloatingParticle = ({
//     size = 10,
//     color = "teal",
//     opacity = 0.2,
//     delay = 0,
//     style = {},
//   }) => {
//     const colors = {
//       teal: "bg-teal-400",
//       cyan: "bg-cyan-400",
//       blue: "bg-blue-500",
//       purple: "bg-purple-600",
//       green: "bg-green-400",
//     };
//     return (
//       <div
//         style={{
//           width: size,
//           height: size,
//           animationDelay: `${delay}s`,
//           opacity: opacity,
//           ...style,
//         }}
//         className={`rounded-full absolute ${colors[color] || "bg-teal-400"} animate-float`}
//       />
//     );
//   };

//   const heroSectionRef = useRef(null);
//   const aboutSectionRef = useRef(null);
//   const featuresRef = useRef(null);
//   const visionRef = useRef(null);
//   const opportunityRef = useRef(null);

//   const [animatedPrice, setAnimatedPrice] = useState(0);
//   const [animatedTokens, setAnimatedTokens] = useState(0);
//   const [animatedMembers, setAnimatedMembers] = useState(0);

//   // Intersection Observer for scroll animations
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("fade-in-up-staggered");
//           } else {
//             entry.target.classList.remove("fade-in-up-staggered");
//           }
//         });
//       },
//       {
//         threshold: 0.1,
//         rootMargin: "0px 0px -50px 0px",
//       }
//     );
    
//     const sections = [
//       heroSectionRef.current,
//       aboutSectionRef.current,
//       featuresRef.current,
//       visionRef.current,
//       opportunityRef.current,
//     ];
    
//     sections.forEach((section) => {
//       if (section) observer.observe(section);
//     });
    
//     return () => {
//       sections.forEach((section) => {
//         if (section) observer.unobserve(section);
//       });
//     };
//   }, []);

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
//         if (progress < 1) requestAnimationFrame(animate);
//       };
//       animate();
//     };
    
//     setTimeout(() => animateNumber(priceTarget, setAnimatedPrice, 1500), 200);
//     setTimeout(() => animateNumber(tokensTarget, setAnimatedTokens, 2000), 400);
//     setTimeout(() => animateNumber(membersTarget, setAnimatedMembers, 1800), 600);
//   }, []);

//   const formatNumber = (num, isPrice = false) => {
//     if (isPrice) return num.toFixed(5);
//     return Math.floor(num).toLocaleString("en-IN");
//   };

//   const features = [
//     {
//       icon: Shield,
//       title: "Secure & Transparent",
//       description: "Built with cutting-edge blockchain technology ensuring maximum security and transparency.",
//       gradient: "from-blue-500 to-cyan-500"
//     },
//     {
//       icon: Globe,
//       title: "Global Vision",
//       description: "Born in India, built for the world. Creating impact beyond borders with scalable solutions.",
//       gradient: "from-green-500 to-teal-500"
//     },
//     {
//       icon: Users,
//       title: "Community-Driven",
//       description: "Powered by a passionate community of believers and backed by dedicated team support.",
//       gradient: "from-purple-500 to-pink-500"
//     },
//     {
//       icon: Rocket,
//       title: "High Potential",
//       description: "Low entry price with exceptional growth potential in the evolving crypto landscape.",
//       gradient: "from-orange-500 to-red-500"
//     }
//   ];

//   const benefits = [
//     "Best crypto coin in India for new investors looking for trust and transparency",
//     "Fast-growing Indian blockchain project with global scalability",
//     "Backed by a passionate team committed to long-term growth and education",
//     "Powerful opportunity to be part of India's most promising crypto coins",
//     "Low Entry Price — High Potential",
//     "Transparent development and long-term growth strategy"
//   ];

//   return (
//     <>
//       <style>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px);}
//           50% { transform: translateY(-10px);}
//         }
//         @keyframes glow {
//           0%, 100% { border-color: rgba(14, 165, 233, 0.3);}
//           50% { border-color: rgba(14, 165, 233, 0.6);}
//         }
//         @keyframes gradient-shift {
//           0% { background-position: 0% 50%;}
//           50% { background-position: 100% 50%;}
//           100% { background-position: 0% 50%;}
//         }
//         @keyframes fadeInUp {
//           0% { transform: translateY(30px); opacity: 0;}
//           100% { transform: translateY(0); opacity: 1;}
//         }
//         @keyframes pulse-glow {
//           0%, 100% { box-shadow: 0 0 20px rgba(6,182,212,0.3);}
//           50% { box-shadow: 0 0 40px rgba(6,182,212,0.6);}
//         }
//         .animate-float { animation: float 6s ease-in-out infinite;}
//         .animate-glow { animation: glow 3s ease-in-out infinite;}
//         .animate-gradient { background-size: 200% 200%; animation: gradient-shift 4s ease infinite;}
//         .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite;}
//         .fade-in-up-staggered > * {
//           animation: fadeInUp 1s ease-out forwards;
//           opacity: 0;
//         }
//         .fade-in-up-staggered > *:nth-child(1) { animation-delay: 0.1s;}
//         .fade-in-up-staggered > *:nth-child(2) { animation-delay: 0.2s;}
//         .fade-in-up-staggered > *:nth-child(3) { animation-delay: 0.3s;}
//         .fade-in-up-staggered > *:nth-child(4) { animation-delay: 0.4s;}
//         .fade-in-up-staggered > *:nth-child(5) { animation-delay: 0.5s;}
//         .fade-in-up-staggered > *:nth-child(6) { animation-delay: 0.6s;}
//         .fade-in-up-staggered > *:nth-child(7) { animation-delay: 0.7s;}
//         .fade-in-up-staggered > *:nth-child(8) { animation-delay: 0.8s;}
//         /* Enhanced Glassmorphism effect */
//         .glass-card {
//           background: rgba(255,255,255,0.08);
//           // box-shadow: 0 8px 32px 0 rgba(31,38,135,0.15);
//           backdrop-filter: blur(12px);
//           border-radius: 2rem;
//           // border: 2px solid rgba(255,255,255,0.15);
//           position: relative;
//           overflow: hidden;
//           transition: all 0.3s ease;
//         }
//         .glass-card:hover {
//           transform: translateY(-5px);
//           box-shadow: 0 20px 60px 0 rgba(31,38,135,0.25);
//         }
//         .glass-card .animated-border {
//           position: absolute;
//           inset: 0;
//           border-radius: 2rem;
//           border: 3px solid;
//           border-image: linear-gradient(90deg, #06b6d4, #a855f7, #fbbf24, #06b6d4) 1;
//           animation: gradient-shift 6s linear infinite;
//           opacity: 0.7;
//           pointer-events: none;
//         }
//         .hero-gradient {
//           background:  rgba(8,83,89,0.95);
//           background-size: 400% 400%;
//           animation: gradient-shift 8s ease infinite;
//         }
//       `}</style>

//       <div className="w-full min-h-screen text-white relative overflow-x-hidden hero-gradient">
//         <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/30 border-b border-teal-700">
//           <div className="w-full px-4 sm:px-6 lg:px-8">
//             <div className="flex justify-between items-center py-4">
//               <div className="flex items-center group cursor-pointer">
//                 <div className="relative">
//                   <Coins className="w-10 h-10 text-teal-400 group-hover:text-cyan-400 group-hover:rotate-180 transition-transform duration-500" />
//                   <div className="absolute inset-0 bg-teal-400 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity" />
//                 </div>
//                 <div className="ml-3">
//                   <span className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
//                     JaiMax
//                   </span>
//                   <div className="text-xs text-teal-300">JMAX</div>
//                 </div>
//               </div>
              
//               {/* Desktop Navigation */}
//               <div className="hidden md:flex items-center space-x-8">
//                 {["About", "Features", "Vision", "Opportunity"].map((item) => (
//                   <a
//                     key={item}
//                     href={`#${item.toLowerCase()}`}
//                     className="relative text-teal-200 hover:text-cyan-300 transition-colors group"
//                   >
//                     {item}
//                     <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
//                   </a>
//                 ))}
//                 <button className="bg-gradient-to-r from-teal-500 to-cyan-600 px-6 py-2 rounded-full font-semibold hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 shadow-lg shadow-cyan-500/30 animate-pulse-glow">
//                   Buy JMAX Now
//                 </button>
//               </div>
              
//               {/* Mobile Menu Toggle */}
//               <button
//                 className="md:hidden text-teal-300"
//                 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//                 aria-label="Toggle menu"
//               >
//                 {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//               </button>
//             </div>
//           </div>
//         </nav>

//         {/* Mobile Menu Overlay */}
//         {mobileMenuOpen && (
//           <div className="fixed inset-0 bg-[rgba(8,83,89,0.95)] z-50 flex flex-col items-center justify-center space-y-8 text-white text-2xl font-semibold overflow-y-auto">
//             {["About", "Features", "Vision", "Opportunity"].map((item) => (
//               <a
//                 key={item}
//                 href={`#${item.toLowerCase()}`}
//                 onClick={() => setMobileMenuOpen(false)}
//                 className="hover:text-cyan-300 transition-colors"
//               >
//                 {item}
//               </a>
//             ))}
//             <button
//               className="bg-gradient-to-r from-teal-500 to-cyan-600 px-8 py-3 rounded-full font-semibold shadow-lg shadow-cyan-500/30"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               Buy JMAX Now
//             </button>
//           </div>
//         )}

//         {/* Hero Section */}
//         <section
//           id="hero"
//           className="relative min-h-screen flex items-center justify-center pt-20 z-10"
//           ref={heroSectionRef}
//         >
//           <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
//             <div className="mb-8">
//               <div className="flex justify-center mb-6">
//                 <div className="relative">
//                   {/* <img src={icon} alt="" /> */}
//                   <div className="absolute inset-0 bg-yellow-400 rounded-full blur-xl opacity-30 animate-pulse" />
//                 </div>
//               </div>
//               <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent mb-6">
//                 About JaiMax
//               </h1>
//               <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-purple-400 mx-auto mb-8"></div>
//               <h3 className="text-5xl md:text-3xl font-bold text-center bg-gradient-to-r from-teal-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient mb-4">
//                 Welcome to <span className="drop-shadow-lg">JaiMax</span><div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-6 animate-pulse">
//                 India's Premier Crypto Revolution
//               </div>
//               </h3>
//               {/* <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-6 animate-pulse">
//                 India's Premier Crypto Revolution
//               </div> */}
//               <p className="mt-4 text-lg md:text-2xl text-cyan-100/90 font-medium max-w-4xl mx-auto leading-relaxed">
//                 The next-gen community-driven crypto project reshaping India's digital finance landscape with stunning innovation, rock-solid security, and boundless potential.
//               </p>
//             </div>
            
//             {/* Animated Stats */}
//             <div className="mt-12 flex flex-wrap justify-center gap-8 fade-in-up-staggered">
//               <div className="glass-card px-8 py-6 min-w-[200px] relative group hover:scale-105 transition-transform duration-300 shadow-xl">
//                 <div className="animated-border" />
//                 <div className="relative z-10 flex flex-col items-center">
//                   <DollarSign className="w-10 h-10 text-cyan-400 mb-3" />
//                   <div className="text-3xl font-bold text-cyan-200">
//                     ${formatNumber(animatedPrice, true)}
//                   </div>
//                   <div className="text-sm text-cyan-300 mt-2">Current Price</div>
//                 </div>
//                 <CardBg1 />
//               </div>
//               <div className="glass-card px-8 py-6 min-w-[200px] relative group hover:scale-105 transition-transform duration-300 shadow-xl">
//                 <div className="animated-border" />
//                 <div className="relative z-10 flex flex-col items-center">
//                   <BarChart3 className="w-10 h-10 text-purple-400 mb-3" />
//                   <div className="text-3xl font-bold text-purple-200">
//                     {formatNumber(animatedTokens)}
//                   </div>
//                   <div className="text-sm text-purple-300 mt-2">Total Supply</div>
//                 </div>
//                 <CardBg2 />
//               </div>
//               <div className="glass-card px-8 py-6 min-w-[200px] relative group hover:scale-105 transition-transform duration-300 shadow-xl">
//                 <div className="animated-border" />
//                 <div className="relative z-10 flex flex-col items-center">
//                   <Users className="w-10 h-10 text-green-400 mb-3" />
//                   <div className="text-3xl font-bold text-green-200">
//                     {formatNumber(animatedMembers)}
//                   </div>
//                   <div className="text-sm text-green-300 mt-2">Community Members</div>
//                 </div>
//                 <CardBg3 />
//               </div>
//             </div>

//             {/* CTA Buttons */}
//             <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
//               <button className="bg-gradient-to-r from-teal-500 to-cyan-600 px-12 py-4 rounded-full text-xl font-bold hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 shadow-2xl shadow-cyan-500/40 animate-pulse-glow group">
//                 <span className="flex items-center">
//                   Invest Now <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
//                 </span>
//               </button>
//               <button className="border-2 border-teal-400 px-12 py-4 rounded-full text-xl font-bold hover:bg-teal-400 hover:text-black transition-all duration-300">
//                 Learn More
//               </button>
//             </div>
//           </div>
//         </section>

//         {/* About Section */}
//         <section
//           id="about"
//           className="relative py-20 z-10"
//           ref={aboutSectionRef}
//         >
//           <div className="w-full px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-16">
              
              
//             </div>
            
//             <div className="max-w-6xl mx-auto">
//               <div className=" p-8 md:p-12 mb-12 relative overflow-hidden">
//                 <div className="animated-border" />
//                 <div className="relative z-10">
//                   <div className="flex items-center justify-center mb-8">
//                     {/* <Target className="w-16 h-16 text-teal-400 animate-pulse" /> */}
//                   </div>
//                   <h3 className="text-3xl md:text-4xl font-bold text-center mb-8 text-teal-200">
//                     Not Just a Name — A Movement
//                   </h3>
//                   <p className="text-lg md:text-xl text-cyan-100/90 leading-relaxed mb-8 text-center">
//                     <strong className="text-teal-400">JaiMax</strong> is revolutionizing India's digital finance landscape as one of the <strong className="text-yellow-400">best crypto coins in India</strong>. Founded with a crystal-clear mission: to build a secure, transparent, and people-powered platform that redefines what a cryptocurrency can achieve.
//                   </p>
//                   <p className="text-lg md:text-xl text-cyan-100/90 leading-relaxed text-center">
//                     We're making cryptocurrency accessible to everyone — from beginners taking their first steps to advanced traders seeking the next big opportunity — with real-world value and a truly global vision.
//                   </p>
//                 </div>
//                 <CardBg1 />
//               </div>

//               <div className="grid md:grid-cols-2 gap-8 mb-12">
//                 <div className="glass-card p-8 relative overflow-hidden">
//                   <div className="animated-border" />
//                   <div className="relative z-10">
//                     <div className="flex items-center mb-6">
//                       <Globe className="w-12 h-12 text-green-400 mr-4" />
//                       <h4 className="text-2xl font-bold text-green-200">Born in India, Built for the World</h4>
//                     </div>
//                     <p className="text-cyan-100/90 leading-relaxed">
//                       JaiMax is quickly becoming a recognized name in blockchain technology. We're proud to be among the few <strong className="text-teal-400">Indian crypto coins</strong> creating long-term impact through innovation, community, and unwavering trust.
//                     </p>
//                   </div>
//                   <CardBg3 />
//                 </div>

//                 <div className="glass-card p-8 relative overflow-hidden">
//                   <div className="animated-border" />
//                   <div className="relative z-10">
//                     <div className="flex items-center mb-6">
//                       <Award className="w-12 h-12 text-yellow-400 mr-4" />
//                       <h4 className="text-2xl font-bold text-yellow-200">Genuine Innovation</h4>
//                     </div>
//                     <p className="text-cyan-100/90 leading-relaxed">
//                       In a market full of hype, JaiMax stands tall as a <strong className="text-purple-400">genuine crypto project</strong> focused on utility, education, and sustainable growth that benefits everyone.
//                     </p>
//                   </div>
//                   <CardBg4 />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Features Section */}
//         <section
//           id="features"
//           className="relative py-20 z-10"
//           ref={featuresRef}
//         >
//           <div className="w-full px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-16">
//               <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent mb-6">
//                 What Makes JaiMax Special
//               </h2>
//               <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
//               <p className="text-xl text-cyan-100/80 max-w-3xl mx-auto">
//                 JaiMax isn't just another digital currency. We're a next-gen blockchain-based platform designed for stability, scalability, and exponential growth.
//               </p>
//             </div>

//             <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
//               {features.map((feature, index) => (
//                 <div key={index} className="glass-card p-8 relative overflow-hidden group hover:scale-105 transition-all duration-300">
//                   <div className="animated-border" />
//                   <div className="relative z-10 text-center">
//                     <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${feature.gradient} p-4 shadow-lg`}>
//                       <feature.icon className="w-full h-full text-white" />
//                     </div>
//                     <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
//                     <p className="text-cyan-100/80 leading-relaxed">{feature.description}</p>
//                   </div>
//                   <CardBg2 />
//                 </div>
//               ))}
//             </div>
            
//             {/* Benefits List */}
//             <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 relative overflow-hidden">
//               <div className="animated-border" />
//               <div className="relative z-10">
//                 <h3 className="text-3xl font-bold text-center mb-8 text-teal-200">Why Choose JaiMax?</h3>
//                 <div className="grid md:grid-cols-2 gap-6">
//                   {benefits.map((benefit, index) => (
//                     <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300">
//                       <CheckCircle2 className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
//                       <p className="text-cyan-100/90">{benefit}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               <CardBg1 />
//             </div>
//           </div>
//         </section>

//         {/* Vision Section */}
//         <section
//           id="vision"
//           className="relative py-2 z-10"
//           ref={visionRef}
//         >
//           <div className="w-full px-4 sm:px-6 lg:px-8">
//             <div className="max-w-6xl mx-auto">
//               <div className="text-center mb-16">
//                 <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-6">
//                   Our Vision: From India to the World
//                 </h2>
//                 <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto mb-8"></div>
//               </div>

//               <div className=" p-8 md:p-12 mb-12 relative overflow-hidden">
//                 <div className="animated-border" />
//                 <div className="relative z-10 text-center">
//                   <div className="flex justify-center mb-8">
//                     {/* <Eye className="w-20 h-20 text-blue-400 animate-pulse" /> */}
//                   </div>
//                   <h3 className="text-3xl md:text-4xl font-bold mb-8 text-blue-200">
//                     The Top Crypto Project from India
//                   </h3>
//                   <p className="text-lg md:text-xl text-cyan-100/90 leading-relaxed mb-8">
//                     JaiMax aims to be the <strong className="text-green-400">top crypto project from India</strong>, creating massive impact far beyond borders. We're building a comprehensive financial ecosystem that seamlessly connects users, traders, and learners worldwide.
//                   </p>
//                   <p className="text-lg md:text-xl text-cyan-100/90 leading-relaxed mb-8">
//                     With our rock-solid blockchain foundation, we offer a safe and secure space for everyone to explore the exciting <strong className="text-purple-400">future of crypto</strong>.
//                   </p>
//                   <div className="bg-gradient-to-r from-teal-500/20 to-purple-500/20 p-6 rounded-2xl border border-teal-400/30">
//                     <p className="text-xl font-semibold text-teal-200">
//                       "We believe the best crypto coins are not just about price — they are about <span className="text-yellow-400">purpose</span>."
//                     </p>
//                   </div>
//                 </div>
//                 <CardBg3 />
//               </div>

//               <div className="grid md:grid-cols-3 gap-8">
//                 <div className="glass-card p-8 relative overflow-hidden text-center">
//                   <div className="animated-border" />
//                   <div className="relative z-10">
//                     <Users className="w-16 h-16 text-teal-400 mx-auto mb-6" />
//                     <h4 className="text-xl font-bold text-teal-200 mb-4">Education Focus</h4>
//                     <p className="text-cyan-100/80">Empowering users through comprehensive crypto education and learning resources.</p>
//                   </div>
//                   <CardBg1 />
//                 </div>

//                 <div className="glass-card p-8 relative overflow-hidden text-center">
//                   <div className="animated-border" />
//                   <div className="relative z-10">
//                     <TrendingUp className="w-16 h-16 text-green-400 mx-auto mb-6" />
//                     <h4 className="text-xl font-bold text-green-200 mb-4">Early Adoption</h4>
//                     <p className="text-cyan-100/80">Supporting early believers with unmatched opportunities in the decentralized economy.</p>
//                   </div>
//                   <CardBg3 />
//                 </div>

//                 <div className="glass-card p-8 relative overflow-hidden text-center">
//                   <div className="animated-border" />
//                   <div className="relative z-10">
//                     <Sparkles className="w-16 h-16 text-purple-400 mx-auto mb-6" />
//                     <h4 className="text-xl font-bold text-purple-200 mb-4">New Opportunities</h4>
//                     <p className="text-cyan-100/80">Creating innovative pathways for financial growth and digital asset management.</p>
//                   </div>
//                   <CardBg2 />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Opportunity Section */}
//         <section
//           id="opportunity"
//           className="relative py-20 z-10"
//           ref={opportunityRef}
//         >
//           <div className="w-full px-4 sm:px-6 lg:px-8">
//             <div className="max-w-6xl mx-auto">
//               <div className="text-center mb-16">
//                 <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent mb-6">
//                   Why Now? The Perfect Moment
//                 </h2>
//                 <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-red-400 mx-auto mb-8"></div>
//               </div>

//               <div className=" p-8 md:p-12 mb-12 relative overflow-hidden">
//                 <div className="animated-border" />
//                 <div className="relative z-10">
//                   <div className="flex justify-center mb-8">
//                     {/* <Zap className="w-20 h-20 text-yellow-400 animate-bounce" /> */}
//                   </div>
//                   <h3 className="text-3xl md:text-4xl font-bold text-center mb-8 text-yellow-200">
//                     India's Crypto Revolution is Here
//                   </h3>
//                   <p className="text-lg md:text-xl text-cyan-100/90 leading-relaxed mb-8 text-center">
//                     The world of cryptocurrency in India is evolving at <strong className="text-yellow-400">lightning speed</strong>. From explosive growth among youth to increasing institutional interest, digital assets are no longer just a trend — they are the <strong className="text-teal-400">future of finance</strong>.
//                   </p>
//                   <div className="bg-gradient-to-r from-yellow-500/20 to-red-500/20 p-8 rounded-2xl border border-yellow-400/30 text-center">
//                     <h4 className="text-2xl font-bold text-yellow-200 mb-4">
//                        Golden Opportunity Alert 
//                     </h4>
//                     <p className="text-xl text-cyan-100/90 mb-4">
//                       JaiMax is currently trading at an <strong className="text-green-400">incredibly low entry price</strong>, offering a golden opportunity for early believers and smart investors.
//                     </p>
//                     <p className="text-lg text-cyan-100/80">
//                       Whether you're new to crypto or looking to diversify your portfolio, JaiMax provides a powerful foundation to grow with a trustworthy and forward-looking project.
//                     </p>
//                   </div>
//                 </div>
//                 <CardBg4 />
//               </div>

//               <div className="grid md:grid-cols-2 gap-8 mb-12">
//                 <div className="glass-card p-8 relative overflow-hidden">
//                   <div className="animated-border" />
//                   <div className="relative z-10">
//                     {/* <Heart className="w-16 h-16 text-pink-400 mb-6" /> */}
//                     <h4 className="text-2xl font-bold text-pink-200 mb-4">More Than Investment</h4>
//                     <p className="text-cyan-100/90 leading-relaxed mb-4">
//                       JaiMax is designed to be more than an investment — it's your <strong className="text-teal-400">gateway into the decentralized world</strong>.
//                     </p>
//                     <p className="text-cyan-100/90 leading-relaxed">
//                       With every coin you hold, you become part of a mission to empower individuals, create global financial inclusivity, and make blockchain accessible for all.
//                     </p>
//                   </div>
//                   <CardBg2 />
//                 </div>

//                 <div className="glass-card p-8 relative overflow-hidden">
//                   <div className="animated-border" />
//                   <div className="relative z-10">
//                     {/* <Star className="w-16 h-16 text-yellow-400 mb-6" /> */}
//                     <h4 className="text-2xl font-bold text-yellow-200 mb-4">We're Building the Future</h4>
//                     <p className="text-cyan-100/90 leading-relaxed mb-4">
//                       We're not just building a coin. <strong className="text-purple-400">We're building a future.</strong>
//                     </p>
//                     <p className="text-cyan-100/90 leading-relaxed">
//                       A community-driven platform with clear vision, strong leadership, and a roadmap that prioritizes transparency, ethical growth, and breakthrough innovation.
//                     </p>
//                   </div>
//                   <CardBg4 />
//                 </div>
//               </div>

//               {/* Final CTA Section */}
//               <div className=" p-8 md:p-12 relative overflow-hidden text-center">
//                 <div className="animated-border" />
//                 <div className="relative z-10">
//                   {/* <Rocket className="w-24 h-24 text-teal-400 mx-auto mb-8 animate-bounce" /> */}
//                   <h3 className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">
//                     Don't Wait for "Someday"
//                   </h3>
//                   <p className="text-xl md:text-2xl text-yellow-200 font-bold mb-8">
//                     The smartest time to invest is NOW.
//                   </p>
//                   <p className="text-lg text-cyan-100/90 mb-12 max-w-3xl mx-auto">
//                     If you're searching for the <strong className="text-green-400">best Indian crypto coin</strong>, your search ends here. JaiMax isn't just another digital token — it's a movement, a community-driven platform with a clear vision and the future of crypto, made in India.
//                   </p>
                  
//                 </div>
//                 <CardBg1 />
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// }



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
  CheckCircle2,
  Target,
  Award,
  Zap,
  Star,
  Eye,
  Heart,
  Rocket,
  Crown
} from "lucide-react";

// Enhanced SVG Backgrounds for cards
const CardBg1 = () => (
  <svg className="absolute inset-0 w-full h-full object-cover opacity-10" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
    <defs>
      <radialGradient id="grad1" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="rgba(6,182,212,0.6)" />
        <stop offset="100%" stopColor="rgba(13,148,136,0.2)" />
      </radialGradient>
    </defs>
    <rect x="0" y="0" width="100" height="100" fill="url(#grad1)" />
    <circle cx="20" cy="20" r="15" fill="rgba(6,182,212,0.1)" />
    <circle cx="80" cy="50" r="25" fill="rgba(13,148,136,0.1)" />
    <circle cx="50" cy="80" r="10" fill="rgba(6,182,212,0.1)" />
  </svg>
);

const CardBg2 = () => (
  <svg className="absolute inset-0 w-full h-full object-cover opacity-10" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
    <defs>
      <radialGradient id="grad2" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="rgba(168,85,247,0.6)" />
        <stop offset="100%" stopColor="rgba(232,121,249,0.2)" />
      </radialGradient>
    </defs>
    <rect x="0" y="0" width="100" height="100" fill="url(#grad2)" />
    <path d="M0 0 L100 0 L100 100 L0 100 Z M 10 10 L 90 10 L 90 90 L 10 90 Z" fill="rgba(168,85,247,0.05)" />
    <circle cx="30" cy="70" r="20" fill="rgba(232,121,249,0.1)" />
  </svg>
);

const CardBg3 = () => (
  <svg className="absolute inset-0 w-full h-full object-cover opacity-10" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
    <defs>
      <radialGradient id="grad3" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="rgba(45,212,191,0.6)" />
        <stop offset="100%" stopColor="rgba(99,102,241,0.2)" />
      </radialGradient>
    </defs>
    <rect x="0" y="0" width="100" height="100" fill="url(#grad3)" />
    <rect x="10" y="10" width="30" height="30" fill="rgba(45,212,191,0.1)" />
    <rect x="60" y="60" width="30" height="30" fill="rgba(99,102,241,0.1)" />
    <polygon points="50,5 90,40 50,75 10,40" fill="rgba(45,212,191,0.05)" />
  </svg>
);

const CardBg4 = () => (
  <svg className="absolute inset-0 w-full h-full object-cover opacity-10" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
    <defs>
      <radialGradient id="grad4" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="rgba(251,191,36,0.6)" />
        <stop offset="100%" stopColor="rgba(234,88,12,0.2)" />
      </radialGradient>
    </defs>
    <rect x="0" y="0" width="100" height="100" fill="url(#grad4)" />
    <circle cx="50" cy="50" r="40" fill="rgba(251,191,36,0.05)" />
    <path d="M50 0 A50 50 0 0 1 100 50 L50 100 L0 50 A50 50 0 0 1 50 0 Z" fill="rgba(234,88,12,0.05)" />
  </svg>
);

export default function JaimaxComponent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
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

  const heroSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const featuresRef = useRef(null);
  const visionRef = useRef(null);
  const opportunityRef = useRef(null);

  const [animatedPrice, setAnimatedPrice] = useState(0);
  const [animatedTokens, setAnimatedTokens] = useState(0);
  const [animatedMembers, setAnimatedMembers] = useState(0);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-up-staggered");
          } else {
            entry.target.classList.remove("fade-in-up-staggered");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );
    
    const sections = [
      heroSectionRef.current,
      aboutSectionRef.current,
      featuresRef.current,
      visionRef.current,
      opportunityRef.current,
    ];
    
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });
    
    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

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
        if (progress < 1) requestAnimationFrame(animate);
      };
      animate();
    };
    
    setTimeout(() => animateNumber(priceTarget, setAnimatedPrice, 1500), 200);
    setTimeout(() => animateNumber(tokensTarget, setAnimatedTokens, 2000), 400);
    setTimeout(() => animateNumber(membersTarget, setAnimatedMembers, 1800), 600);
  }, []);

  const formatNumber = (num, isPrice = false) => {
    if (isPrice) return num.toFixed(5);
    return Math.floor(num).toLocaleString("en-IN");
  };

  const features = [
    {
      icon: Shield,
      title: "Secure & Transparent",
      description: "Built with cutting-edge blockchain technology ensuring maximum security and transparency.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Globe,
      title: "Global Vision",
      description: "Born in India, built for the world. Creating impact beyond borders with scalable solutions.",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: Users,
      title: "Community-Driven",
      description: "Powered by a passionate community of believers and backed by dedicated team support.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Rocket,
      title: "High Potential",
      description: "Low entry price with exceptional growth potential in the evolving crypto landscape.",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const benefits = [
    "Best crypto coin in India for new investors looking for trust and transparency",
    "Fast-growing Indian blockchain project with global scalability",
    "Backed by a passionate team committed to long-term growth and education",
    "Powerful opportunity to be part of India's most promising crypto coins",
    "Low Entry Price — High Potential",
    "Transparent development and long-term growth strategy"
  ];

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px);}
          50% { transform: translateY(-10px);}
        }
        @keyframes glow {
          0%, 100% { border-color: rgba(14, 165, 233, 0.3);}
          50% { border-color: rgba(14, 165, 233, 0.6);}
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%;}
          50% { background-position: 100% 50%;}
          100% { background-position: 0% 50%;}
        }
        @keyframes fadeInUp {
          0% { transform: translateY(30px); opacity: 0;}
          100% { transform: translateY(0); opacity: 1;}
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(6,182,212,0.3);}
          50% { box-shadow: 0 0 40px rgba(6,182,212,0.6);}
        }
        .animate-float { animation: float 6s ease-in-out infinite;}
        .animate-glow { animation: glow 3s ease-in-out infinite;}
        .animate-gradient { background-size: 200% 200%; animation: gradient-shift 4s ease infinite;}
        .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite;}
        .fade-in-up-staggered > * {
          animation: fadeInUp 1s ease-out forwards;
          opacity: 0;
        }
        .fade-in-up-staggered > *:nth-child(1) { animation-delay: 0.1s;}
        .fade-in-up-staggered > *:nth-child(2) { animation-delay: 0.2s;}
        .fade-in-up-staggered > *:nth-child(3) { animation-delay: 0.3s;}
        .fade-in-up-staggered > *:nth-child(4) { animation-delay: 0.4s;}
        .fade-in-up-staggered > *:nth-child(5) { animation-delay: 0.5s;}
        .fade-in-up-staggered > *:nth-child(6) { animation-delay: 0.6s;}
        .fade-in-up-staggered > *:nth-child(7) { animation-delay: 0.7s;}
        .fade-in-up-staggered > *:nth-child(8) { animation-delay: 0.8s;}
        /* Enhanced Glassmorphism effect */
        .glass-card {
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(12px);
          border-radius: 2rem;
          border: 1px solid rgba(255,255,255,0.1);
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .glass-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 60px 0 rgba(31,38,135,0.25);
        }
        .hero-gradient {
          background:  rgba(8,83,89,0.95);
          background-size: 400% 400%;
          animation: gradient-shift 8s ease infinite;
        }
      `}</style>

      <div className="w-full min-h-screen text-white relative overflow-x-hidden hero-gradient">
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/30 border-b border-teal-700">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
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
                {["About", "Features", "Vision", "Opportunity"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="relative text-teal-200 hover:text-cyan-300 transition-colors group"
                  >
                    {item}
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
                  </a>
                ))}
                <button className="bg-gradient-to-r from-teal-500 to-cyan-600 px-6 py-2 rounded-full font-semibold hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 shadow-lg shadow-cyan-500/30 animate-pulse-glow">
                  Buy JMAX Now
                </button>
              </div>
              
              {/* Mobile Menu Toggle */}
              <button
                className="md:hidden text-teal-300"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-[rgba(8,83,89,0.95)] z-50 flex flex-col items-center justify-center space-y-8 text-white text-2xl font-semibold overflow-y-auto">
            {["About", "Features", "Vision", "Opportunity"].map((item) => (
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
              className="bg-gradient-to-r from-teal-500 to-cyan-600 px-8 py-3 rounded-full font-semibold shadow-lg shadow-cyan-500/30"
              onClick={() => setMobileMenuOpen(false)}
            >
              Buy JMAX Now
            </button>
          </div>
        )}

        {/* Hero Section */}
        <section
          id="hero"
          className="relative min-h-screen flex items-center justify-center pt-20 z-10"
          ref={heroSectionRef}
        >
          <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-yellow-400 rounded-full blur-xl opacity-30 animate-pulse" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent mb-6">
                About JaiMax
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-purple-400 mx-auto mb-8"></div>
              <h3 className="text-5xl md:text-3xl font-bold text-center bg-gradient-to-r from-teal-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient mb-4">
                Welcome to <span className="drop-shadow-lg">JaiMax</span>
                <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-6 animate-pulse">
                  India's Premier Crypto Revolution
                </div>
              </h3>
              <p className="mt-4 text-lg md:text-2xl text-cyan-100/90 font-medium max-w-4xl mx-auto leading-relaxed">
                The next-gen community-driven crypto project reshaping India's digital finance landscape with stunning innovation, rock-solid security, and boundless potential.
              </p>
            </div>
            
            {/* Animated Stats */}
            <div className="mt-12 flex flex-wrap justify-center gap-8 fade-in-up-staggered">
              <div className="glass-card px-8 py-6 min-w-[200px] relative group hover:scale-105 transition-transform duration-300 shadow-xl">
                <div className="relative z-10 flex flex-col items-center">
                  <DollarSign className="w-10 h-10 text-cyan-400 mb-3" />
                  <div className="text-3xl font-bold text-cyan-200">
                    ${formatNumber(animatedPrice, true)}
                  </div>
                  <div className="text-sm text-cyan-300 mt-2">Current Price</div>
                </div>
                <CardBg1 />
              </div>
              <div className="glass-card px-8 py-6 min-w-[200px] relative group hover:scale-105 transition-transform duration-300 shadow-xl">
                <div className="relative z-10 flex flex-col items-center">
                  <BarChart3 className="w-10 h-10 text-purple-400 mb-3" />
                  <div className="text-3xl font-bold text-purple-200">
                    {formatNumber(animatedTokens)}
                  </div>
                  <div className="text-sm text-purple-300 mt-2">Total Supply</div>
                </div>
                <CardBg2 />
              </div>
              <div className="glass-card px-8 py-6 min-w-[200px] relative group hover:scale-105 transition-transform duration-300 shadow-xl">
                <div className="relative z-10 flex flex-col items-center">
                  <Users className="w-10 h-10 text-green-400 mb-3" />
                  <div className="text-3xl font-bold text-green-200">
                    {formatNumber(animatedMembers)}
                  </div>
                  <div className="text-sm text-green-300 mt-2">Community Members</div>
                </div>
                <CardBg3 />
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="bg-gradient-to-r from-teal-500 to-cyan-600 px-12 py-4 rounded-full text-xl font-bold hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 shadow-2xl shadow-cyan-500/40 animate-pulse-glow group">
                <span className="flex items-center">
                  Invest Now <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="border-2 border-teal-400 px-12 py-4 rounded-full text-xl font-bold hover:bg-teal-400 hover:text-black transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="relative py-20 z-10"
          ref={aboutSectionRef}
        >
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="glass-card p-8 md:p-12 mb-12 relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-8">
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-center mb-8 text-teal-200">
                    Not Just a Name — A Movement
                  </h3>
                  <p className="text-lg md:text-xl text-cyan-100/90 leading-relaxed mb-8 text-center">
                    <strong className="text-teal-400">JaiMax</strong> is revolutionizing India's digital finance landscape as one of the <strong className="text-yellow-400">best crypto coins in India</strong>. Founded with a crystal-clear mission: to build a secure, transparent, and people-powered platform that redefines what a cryptocurrency can achieve.
                  </p>
                  <p className="text-lg md:text-xl text-cyan-100/90 leading-relaxed text-center">
                    We're making cryptocurrency accessible to everyone — from beginners taking their first steps to advanced traders seeking the next big opportunity — with real-world value and a truly global vision.
                  </p>
                </div>
                <CardBg1 />
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="glass-card p-8 relative overflow-hidden">
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <Globe className="w-12 h-12 text-green-400 mr-4" />
                      <h4 className="text-2xl font-bold text-green-200">Born in India, Built for the World</h4>
                    </div>
                    <p className="text-cyan-100/90 leading-relaxed">
                      JaiMax is quickly becoming a recognized name in blockchain technology. We're proud to be among the few <strong className="text-teal-400">Indian crypto coins</strong> creating long-term impact through innovation, community, and unwavering trust.
                    </p>
                  </div>
                  <CardBg3 />
                </div>

                <div className="glass-card p-8 relative overflow-hidden">
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <Award className="w-12 h-12 text-yellow-400 mr-4" />
                      <h4 className="text-2xl font-bold text-yellow-200">Genuine Innovation</h4>
                    </div>
                    <p className="text-cyan-100/90 leading-relaxed">
                      In a market full of hype, JaiMax stands tall as a <strong className="text-purple-400">genuine crypto project</strong> focused on utility, education, and sustainable growth that benefits everyone.
                    </p>
                  </div>
                  <CardBg4 />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="relative py-20 z-10"
          ref={featuresRef}
        >
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent mb-6">
                What Makes JaiMax Special
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
              <p className="text-xl text-cyan-100/80 max-w-3xl mx-auto">
                JaiMax isn't just another digital currency. We're a next-gen blockchain-based platform designed for stability, scalability, and exponential growth.
              </p>
            </div>

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {features.map((feature, index) => (
                <div key={index} className="glass-card p-8 relative overflow-hidden group hover:scale-105 transition-all duration-300">
                  <div className="relative z-10 text-center">
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${feature.gradient} p-4 shadow-lg`}>
                      <feature.icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-cyan-100/80 leading-relaxed">{feature.description}</p>
                  </div>
                  <CardBg2 />
                </div>
              ))}
            </div>
            
            {/* Benefits List */}
            <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-center mb-8 text-teal-200">Why Choose JaiMax?</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300">
                      <CheckCircle2 className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                      <p className="text-cyan-100/90">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
              <CardBg1 />
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section
          id="vision"
          className="relative py-20 z-10"
          ref={visionRef}
        >
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-6">
                  Our Vision: From India to the World
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto mb-8"></div>
              </div>

              <div className="glass-card p-8 md:p-12 mb-12 relative overflow-hidden">
                <div className="relative z-10 text-center">
                  <div className="flex justify-center mb-8">
                    <Target className="w-16 h-16 text-blue-400" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-8 text-blue-200">
                    The Top Crypto Project from India
                  </h3>
                  <p className="text-lg md:text-xl text-cyan-100/90 leading-relaxed mb-8">
                    JaiMax aims to be the <strong className="text-green-400">top crypto project from India</strong>, creating massive impact far beyond borders. We're building a comprehensive financial ecosystem that seamlessly connects users, traders, and learners worldwide.
                  </p>
                  <p className="text-lg md:text-xl text-cyan-100/90 leading-relaxed mb-8">
                    With our rock-solid blockchain foundation, we offer a safe and secure space for everyone to explore the exciting <strong className="text-purple-400">future of crypto</strong>.
                  </p>
                  <div className="bg-gradient-to-r from-teal-500/20 to-purple-500/20 p-6 rounded-2xl border border-cyan-400/30 mt-8">
                    <h4 className="text-2xl font-bold text-cyan-200 mb-4">Our Mission</h4>
                    <p className="text-cyan-100/90 leading-relaxed">
                      To democratize cryptocurrency investment in India and beyond, creating opportunities for everyone to participate in the digital economy revolution.
                    </p>
                  </div>
                </div>
                <CardBg2 />
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="glass-card p-6 relative overflow-hidden text-center">
                  <div className="relative z-10">
                    <Eye className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-cyan-200 mb-3">Transparency</h4>
                    <p className="text-cyan-100/80">Complete transparency in all operations and community decisions</p>
                  </div>
                  <CardBg1 />
                </div>
                
                <div className="glass-card p-6 relative overflow-hidden text-center">
                  <div className="relative z-10">
                    <Heart className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-pink-200 mb-3">Community</h4>
                    <p className="text-cyan-100/80">Building a strong, supportive community of crypto enthusiasts</p>
                  </div>
                  <CardBg2 />
                </div>
                
                <div className="glass-card p-6 relative overflow-hidden text-center">
                  <div className="relative z-10">
                    <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-yellow-200 mb-3">Innovation</h4>
                    <p className="text-cyan-100/80">Continuous innovation to stay ahead in the crypto space</p>
                  </div>
                  <CardBg3 />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Opportunity Section */}
        <section
          id="opportunity"
          className="relative py-20 z-10"
          ref={opportunityRef}
        >
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-6">
                  Your Golden Opportunity
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto mb-8"></div>
                <p className="text-xl text-cyan-100/80 max-w-3xl mx-auto">
                  Don't miss out on being part of India's most promising cryptocurrency project from the ground up.
                </p>
              </div>

              <div className="glass-card p-8 md:p-12 mb-12 relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex justify-center mb-8">
                    <Crown className="w-16 h-16 text-yellow-400" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-center mb-8 text-yellow-200">
                    Early Investor Advantages
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <Star className="w-8 h-8 text-yellow-400 flex-shrink-0" />
                        <div>
                          <h4 className="text-xl font-bold text-yellow-200">Low Entry Price</h4>
                          <p className="text-cyan-100/80">Get in at ground level pricing before major market adoption</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <TrendingUp className="w-8 h-8 text-green-400 flex-shrink-0" />
                        <div>
                          <h4 className="text-xl font-bold text-green-200">High Growth Potential</h4>
                          <p className="text-cyan-100/80">Be part of a project designed for exponential growth</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <Shield className="w-8 h-8 text-blue-400 flex-shrink-0" />
                        <div>
                          <h4 className="text-xl font-bold text-blue-200">Secure Investment</h4>
                          <p className="text-cyan-100/80">Built on proven blockchain technology with maximum security</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <Users className="w-8 h-8 text-purple-400 flex-shrink-0" />
                        <div>
                          <h4 className="text-xl font-bold text-purple-200">Strong Community</h4>
                          <p className="text-cyan-100/80">Join a passionate community of like-minded investors</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <Sparkles className="w-8 h-8 text-cyan-400 flex-shrink-0" />
                        <div>
                          <h4 className="text-xl font-bold text-cyan-200">Innovation Focus</h4>
                          <p className="text-cyan-100/80">Continuous development and feature enhancement</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <Globe className="w-8 h-8 text-teal-400 flex-shrink-0" />
                        <div>
                          <h4 className="text-xl font-bold text-teal-200">Global Reach</h4>
                          <p className="text-cyan-100/80">Expanding beyond India to international markets</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-2xl font-bold text-yellow-300 mb-6">
                      "The best time to invest was yesterday. The second best time is now."
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                      <button className="bg-gradient-to-r from-yellow-500 to-orange-600 px-12 py-4 rounded-full text-xl font-bold hover:from-yellow-600 hover:to-orange-700 transition-all duration-300 shadow-2xl shadow-orange-500/40 animate-pulse-glow group">
                        <span className="flex items-center">
                          <Wallet className="mr-2 w-6 h-6" />
                          Start Investing <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </button>
                      <button className="border-2 border-yellow-400 px-12 py-4 rounded-full text-xl font-bold hover:bg-yellow-400 hover:text-black transition-all duration-300">
                        Join Community
                      </button>
                    </div>
                  </div>
                </div>
                <CardBg4 />
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative py-16 border-t border-teal-700/50 z-10">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center mb-6">
                  <Coins className="w-12 h-12 text-teal-400 mr-4" />
                  <div>
                    <span className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                      JaiMax
                    </span>
                    <div className="text-sm text-teal-300">JMAX</div>
                  </div>
                </div>
                <p className="text-lg text-cyan-100/80 max-w-2xl mx-auto mb-8">
                  Join the revolution. Invest in the future. Be part of India's premier cryptocurrency project.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                  <button className="bg-gradient-to-r from-teal-500 to-cyan-600 px-10 py-3 rounded-full text-lg font-bold hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 shadow-lg shadow-cyan-500/30">
                    Buy JMAX Now
                  </button>
                  <button className="border-2 border-teal-400 px-10 py-3 rounded-full text-lg font-bold hover:bg-teal-400 hover:text-black transition-all duration-300">
                    White Paper
                  </button>
                  <button className="border-2 border-purple-400 px-10 py-3 rounded-full text-lg font-bold hover:bg-purple-400 hover:text-black transition-all duration-300">
                    Community
                  </button>
                </div>
              </div>
              
              <div className="border-t border-teal-700/50 pt-8 text-center">
                <p className="text-cyan-300/70">
                  © 2025 JaiMax (JMAX). All rights reserved. | Cryptocurrency investments carry risk. Please invest responsibly.
                </p>
              </div>
            </div>
          </div>
        </footer>

        {/* Floating Particles */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <FloatingParticle size={8} color="teal" opacity={0.3} delay={0} style={{ top: "10%", left: "10%" }} />
          <FloatingParticle size={12} color="cyan" opacity={0.2} delay={1} style={{ top: "20%", right: "15%" }} />
          <FloatingParticle size={6} color="blue" opacity={0.4} delay={2} style={{ top: "50%", left: "5%" }} />
          <FloatingParticle size={10} color="purple" opacity={0.3} delay={3} style={{ top: "70%", right: "10%" }} />
          <FloatingParticle size={14} color="green" opacity={0.2} delay={4} style={{ top: "80%", left: "20%" }} />
          <FloatingParticle size={8} color="teal" opacity={0.3} delay={5} style={{ top: "30%", right: "25%" }} />
        </div>
      </div>
    </>
  );
}