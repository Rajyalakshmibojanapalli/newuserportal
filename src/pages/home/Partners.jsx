
// import { useState, useEffect } from 'react';

// const Partners = () => {
//     const [isVisible, setIsVisible] = useState(false);
//     const [hoveredIndex, setHoveredIndex] = useState(null);

//     useEffect(() => {
//         setIsVisible(true);
//     }, []);

//     const partners = [
//         { name: 'CoinGecko', category: 'Data Analytics', value: '$2.5B+', description: 'Leading crypto data provider' },
//         { name: 'GitHub', category: 'Development', value: '100M+', description: 'World\'s largest code repository' },
//         { name: 'CoinMarketCap', category: 'Market Data', value: '#1', description: 'Top cryptocurrency platform' },
//         { name: 'Catalog', category: 'Infrastructure', value: '500K+', description: 'Enterprise solutions leader' },
//         { name: 'Binance', category: 'Exchange', value: '$76B+', description: 'Global crypto exchange' },
//     ];

//     // Duplicate partners for seamless scrolling - Two copies for perfect loop
//     const extendedPartners = [...partners, ...partners];

//     const getInitials = (name) => {
//         return name.split(' ').map(word => word[0]).join('').toUpperCase();
//     };

//     const getGradient = (index) => {
//         const gradients = [
//             'from-emerald-400 via-teal-500 to-cyan-600',
//             'from-purple-400 via-pink-500 to-red-500',
//             'from-yellow-400 via-orange-500 to-red-500',
//             'from-green-400 via-blue-500 to-purple-600',
//             'from-indigo-400 via-purple-500 to-pink-500'
//         ];
//         return gradients[index % gradients.length];
//     };

//     return (
//         <div className="relative overflow-hidden py-20" style={{ background: 'linear-gradient(135deg, #094e54,rgb(13, 112, 121))' }}>
//             {/* Animated Background */}
//             <div className="absolute inset-0">
//                 <div className="absolute top-0 left-0 w-full h-full opacity-10">
//                     {[...Array(20)].map((_, i) => (
//                         <div
//                             key={i}
//                             className="absolute rounded-full bg-white animate-pulse" // Added animate-pulse back
//                             style={{
//                                 width: `${Math.random() * 30 + 10}px`,
//                                 height: `${Math.random() * 30 + 10}px`,
//                                 left: `${Math.random() * 100}%`,
//                                 top: `${Math.random() * 100}%`,
//                                 animationDuration: `${3 + Math.random() * 4}s`
//                             }}
//                         />
//                     ))}
//                 </div>
//             </div>

//             <div className="container mx-auto px-4 relative z-10">
//                 {/* Header Section */}
//                 <div
//                     className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//                         }`}
//                 >
//                     <div className="flex justify-center mb-8">
//                         <div className="relative">
//                             <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full blur-xl opacity-50 animate-pulse"></div>
//                             <div className="relative w-24 h-24 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 shadow-2xl">
//                                 <svg className="w-12 h-12 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//                                 </svg>
//                             </div>
//                         </div>
//                     </div>

//                     <h1 className="text-5xl md:text-7xl font-black mb-6">
//                         <span className="bg-gradient-to-r from-white via-teal-100 to-white bg-clip-text text-transparent drop-shadow-lg">
//                             Our Trusted
//                         </span>
//                         <br />
//                         <span className="bg-gradient-to-r from-teal-200 via-white to-teal-200 bg-clip-text text-transparent">
//                             Partners
//                         </span>
//                     </h1>

//                     <p className="text-xl text-white/90 font-medium tracking-wide mb-8">
//                         <span className="bg-gradient-to-r from-teal-200 to-cyan-200 bg-clip-text text-transparent">
//                             EMPOWERING INNOVATION TOGETHER
//                         </span>
//                     </p>

//                     <div className="w-32 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto rounded-full"></div>
//                 </div>

//                 {/* Marquee Container */}
//                 <div className="relative mb-20">
//                     {/* Top Row - Scrolling Left */}
//                     <div className="overflow-hidden py-8 mb-8 opacity-80">
//                         {/* Apply animate-marquee-left here */}
//                         <div className="flex animate-marquee-left space-x-8">
//                             {extendedPartners.map((partner, index) => (
//                                 <div
//                                     key={`top-${index}`}
//                                     className="flex-shrink-0 group cursor-pointer"
//                                     onMouseEnter={() => setHoveredIndex(`top-${index}`)}
//                                     onMouseLeave={() => setHoveredIndex(null)}
//                                     style={{ willChange: 'transform' }}
//                                 >
//                                     <div className="relative w-72 h-44 bg-white/85 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-6 hover:rotate-1 group-hover:bg-white overflow-hidden border border-gray-100">
//                                         <div className={`h-1 w-full bg-gradient-to-r ${getGradient(index % 5)}`}></div>
//                                         <div className={`absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br ${getGradient(index % 5)} rounded-full opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-700`}></div>
//                                         <div className="p-6 h-full flex flex-col justify-between relative z-10">
//                                             <div className="flex items-start justify-between">
//                                                 <div className="flex items-center space-x-3">
//                                                     <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${getGradient(index % 5)} flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300`}>
//                                                         <span className="text-sm font-bold text-white">
//                                                             {getInitials(partner.name)}
//                                                         </span>
//                                                     </div>
//                                                     <div>
//                                                         <h3 className="text-lg font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
//                                                             {partner.name}
//                                                         </h3>
//                                                         <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">{partner.category}</p>
//                                                     </div>
//                                                 </div>
//                                                 <div className="w-3 h-3 bg-green-400 rounded-full shadow-lg animate-pulse"></div>
//                                             </div>
//                                             <div className="flex items-end justify-between">
//                                                 <div>
//                                                     <div className="text-2xl font-black text-gray-800 mb-1">
//                                                         {partner.value}
//                                                     </div>
//                                                     <p className="text-xs text-gray-600 leading-tight max-w-[160px]">
//                                                         {partner.description}
//                                                     </p>
//                                                 </div>
//                                                 <div className={`w-10 h-10 bg-gradient-to-br ${getGradient(index % 5)} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 cursor-pointer`}>
//                                                     <svg className="w-5 h-5 text-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                                                     </svg>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500" style={{
//                                             backgroundImage: `radial-gradient(circle at 20% 80%, rgba(0,0,0,0.1) 0%, transparent 50%)`
//                                         }}></div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Bottom Row - Scrolling Right */}
//                     <div className="overflow-hidden py-8">
//                         <div className="flex animate-marquee-right space-x-8">
//                             {extendedPartners.map((partner, index) => (
//                                 <div
//                                     key={`bottom-${index}`}
//                                     className="flex-shrink-0 group cursor-pointer"
//                                     onMouseEnter={() => setHoveredIndex(`bottom-${index}`)}
//                                     onMouseLeave={() => setHoveredIndex(null)}
//                                 >
//                                     <div className="w-80 h-48 p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl hover:shadow-cyan-500/30 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 group-hover:border-cyan-400/50 overflow-hidden">
//                                         <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${getGradient((index + 2) % 5)}`}></div>
//                                         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-full group-hover:-translate-x-full transition-transform duration-1000"></div>
//                                         <div className="relative z-10 h-full flex flex-col justify-between">
//                                             <div className="flex items-center space-x-4">
//                                                 <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${getGradient((index + 2) % 5)} flex items-center justify-center transform group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300 shadow-lg`}>
//                                                     <span className="text-xl font-black text-white">
//                                                         {getInitials(partner.name)}
//                                                     </span>
//                                                 </div>
//                                                 <div>
//                                                     <h3 className="text-xl font-bold text-white group-hover:text-cyan-200 transition-colors duration-300">
//                                                         {partner.name}
//                                                     </h3>
//                                                     <p className="text-sm text-white/70">{partner.category}</p>
//                                                 </div>
//                                             </div>
//                                             <div className={`transform transition-all duration-300 ${hoveredIndex === `bottom-${index}`
//                                                 ? 'opacity-100 translate-y-0'
//                                                 : 'opacity-70 translate-y-2'
//                                                 }`}>
//                                                 <div className="flex justify-between items-end">
//                                                     <div>
//                                                         <div className="text-2xl font-black text-cyan-300">
//                                                             {partner.value}
//                                                         </div>
//                                                         <div className="text-xs text-white/60">
//                                                             {partner.description}
//                                                         </div>
//                                                     </div>
//                                                     <div className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getGradient((index + 2) % 5)} text-white`}>
//                                                         Trusted
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>

//                 {/* CTA Section */}
//                 <div
//                     className={`text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//                         }`}
//                 >
//                     <div className="inline-block p-8 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl">
//                         <h3 className="text-2xl font-bold text-white mb-4">Ready to Join Our Network?</h3>
//                         <p className="text-white/80 mb-6 max-w-2xl">
//                             Partner with industry leaders and accelerate your growth with our comprehensive ecosystem of trusted collaborators.
//                         </p>
//                         <button className="px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold rounded-2xl hover:from-teal-400 hover:to-cyan-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-teal-500/30">
//                             Become a Partner
//                         </button>
//                     </div>
//                 </div>

//                 {/* Disclaimer */}
//                 <div
//                     className={`flex justify-center mt-16 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//                         }`}
//                 >
//                     <div className="max-w-4xl mx-auto p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
//                         <p className="text-sm text-white/70 text-center leading-relaxed">
//                             All company, product and service names of the third party companies used in this website are for identification purposes only. All these product names, logos and brands belong to their respective owners.
//                         </p>
//                     </div>
//                 </div>
//             </div>

//             {/* Global HTML and CSS Styling - IMPORTANT: Move this to a global CSS file! */}
//             <style jsx global>{`
//                 html {
//                     scrollbar-width: thin;
//                     scrollbar-color: #044e54 rgba(8, 83, 89, 0.1);
//                     background-color: black;
//                     scroll-behavior: smooth;
//                 }

//                 @keyframes marquee-left {
//                     0% { transform: translateX(0); }
//                     100% { transform: translateX(-50%); } /* Scrolls content left by half its total width */
//                 }

//                 @keyframes marquee-right {
//                     0% { transform: translateX(-50%); } /* Start off-screen to the left */
//                     100% { transform: translateX(0%); } /* Move to the right to 0 */
//                 }

//                 .animate-marquee-left {
//                     animation: marquee-left 80s linear infinite;
//                 }

//                 .animate-marquee-right {
//                     animation: marquee-right 60s linear infinite;
//                 }

//                 /* Pause animation on hover for both marquee elements */
//                 .animate-marquee-left:hover,
//                 .animate-marquee-right:hover {
//                     animation-play-state: paused;
//                 }
//             `}</style>
//         </div>
//     );
// };

// export default Partners;
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gecko from '../../assets/Images/gecko.png';
import github from '../../assets/Images/github (2).svg';
import coinmarket from '../../assets/Images/coinmarket.svg';
import catalog from '../../assets/Images/catalog.svg';
import binance from '../../assets/Images/binance.svg';
import clients from '../../assets/Images/clients.svg';


// Define the partner logo URLs
// const partners = [
//     "https://www.pmits.co.uk/portals/0/images/partners/solar-communications-200.png",
//     "https://www.pmits.co.uk/portals/0/images/partners/cbf-200.png",
//     "https://www.pmits.co.uk/portals/0/images/partners/gxs-200.png",
//     "https://www.pmits.co.uk/portals/0/images/partners/jpr-200.png",
//     "https://www.pmits.co.uk/portals/0/images/partners/talk-internet-200.png",
//     "https://www.pmits.co.uk/Portals/0/img/opera3_logo.png",
//     "https://www.pmits.co.uk/Portals/0/pegasus-logo.png",
//     "https://www.pmits.co.uk/Portals/0/sage business partner.jpg",
// ];

// // Main Partners component
//  export default function Partners() {
//  return (
//         // Section container with responsive padding and background
//         <section className="mt-0 mb-0 py-12 bg-white font-inter">
//             {/* Container for content, centered with horizontal padding */}
//             <div className="container mx-auto px-4">
//                 {/* Section title */}
//                 <h2 className="text-2xl font-semibold mb-8 text-center md:text-left">
//                     Our <strong className="text-blue-600">Partners</strong>
//                 </h2>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                     {partners.map((logo, index) => (
//                         // Individual partner logo container
//                         <div
//                             key={index} // Unique key for React list rendering
//                             className="flex items-center justify-center border border-gray-200 rounded-lg p-6 bg-white min-h-[160px] shadow-sm
//                                        hover:shadow-lg hover:border-blue-300 transition-all duration-300 ease-in-out cursor-pointer"
//                         >
//                             {/* Partner logo image */}
//                             <img
//                                 src={logo}
//                                 alt={`Partner ${index + 1}`}
//                                 // Apply grayscale by default, remove on hover of the parent div
//                                 // Smooth transition for the grayscale effect
//                                 className="max-w-full h-auto max-h-[100px] object-contain
//                                            grayscale hover:grayscale-0
//                                            transition-all duration-500 ease-in-out transform hover:scale-105"
//                                 // Fallback for broken images (optional, but good practice)
//                                 onError={(e) => {
//                                     e.target.onerror = null; // Prevent infinite loop if fallback also fails
//                                     e.target.src = `https://placehold.co/200x100/E0E0E0/666666?text=Logo+${index + 1}`;
//                                 }}
//                             />
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }


// const partners = [
//   "https://www.pmits.co.uk/portals/0/images/partners/solar-communications-200.png",
//   "https://www.pmits.co.uk/portals/0/images/partners/cbf-200.png",
//   "https://www.pmits.co.uk/portals/0/images/partners/gxs-200.png",
//   "https://www.pmits.co.uk/portals/0/images/partners/jpr-200.png",
//   "https://www.pmits.co.uk/portals/0/images/partners/talk-internet-200.png",
//   "https://www.pmits.co.uk/Portals/0/img/opera3_logo.png",
//   "https://www.pmits.co.uk/Portals/0/pegasus-logo.png",
//   "https://www.pmits.co.uk/Portals/0/sage business partner.jpg",

// ];

// const cubeFaces = partners.slice(0, 6);

// export default function Perfect3DCubePartners() {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <>
//       <style>{`
//         .partners-section {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           background: rgba(255, 255, 255, 0.15);
//           backdrop-filter: saturate(180%) blur(20px);
//           -webkit-backdrop-filter: saturate(180%) blur(20px);
//           font-family: 'Inter', sans-serif;
//           color: #094d5e;
//           padding: 80px 0 40px 0;
//           min-height: 100vh;
//           gap: 60px;
//           box-sizing: border-box;
//           width: 100%;
//         }

//         .top-container {
//           display: flex;
//           gap: 80px;
//           align-items: center;
//           max-width: 1200px;
//           width: 100%;
//           flex-wrap: wrap;
//           justify-content: center;
//           padding: 0 40px;
//           box-sizing: border-box;
//         }

//         .cube-container {
//           flex-shrink: 0;
//           width: 240px;
//           height: 240px;
//           perspective: 1400px;
//         }

//         .cube {
//           width: 200px;
//           height: 200px;
//           position: relative;
//           transform-style: preserve-3d;
//           animation: rotateCube 20s linear infinite;
//           transition: animation-play-state 0.3s ease;
//           margin: auto;
//           border-radius: 10px;
//           box-shadow: none;
//         }
//         .cube.paused {
//           animation-play-state: paused;
//         }

//         .face {
//           position: absolute;
//           width: 200px;
//           height: 200px;
//           border-radius: 10px;
//           background: #0b525b;
//           border: 2px solid #06b6d4;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           box-shadow: 0 8px 20px rgba(0,0,0,0.3);
//           backface-visibility: hidden;
//           cursor: pointer;
//           transition: transform 0.3s ease, box-shadow 0.3s ease;
//         }

//         .face img {
//           max-width: 70%;
//           max-height: 70%;
//           object-fit: contain;
//           filter: drop-shadow(0 0 5px rgba(0, 255, 255, 0.8));
//           transition: transform 0.3s ease;
//           user-select: none;
//           pointer-events: none;
//         }
//         .face:hover img {
//           transform: scale(1.15);
//           filter: drop-shadow(0 0 12px rgba(0, 255, 255, 1));
//         }
//         .face:hover {
//           box-shadow: 0 0 20px 3px #06b6d4;
//         }

//         .face.front  { transform: translateZ(100px); }
//         .face.back   { transform: rotateY(180deg) translateZ(100px); }
//         .face.right  { transform: rotateY(90deg) translateZ(100px); }
//         .face.left   { transform: rotateY(-90deg) translateZ(100px); }
//         .face.top    { transform: rotateX(90deg) translateZ(100px); }
//         .face.bottom { transform: rotateX(-90deg) translateZ(100px); }

//         @keyframes rotateCube {
//           0%   { transform: rotateX(0deg) rotateY(0deg); }
//           100% { transform: rotateX(360deg) rotateY(360deg); }
//         }

//         .content {
//           max-width: 620px;
//           text-align: center;
//           user-select: none;
//           padding: 0 20px;
//         }
//         .content h2 {
//           font-size: 2.8rem;
//           margin-bottom: 0.6rem;
//           font-weight: 700;
//           color: #045d70;
//         }
//         .content strong {
//           color: #06b6d4;
//         }
//         .content p {
//           font-size: 1.25rem;
//           line-height: 1.7;
//           margin-bottom: 1.8rem;
//           color: #0b525b;
//         }
//         .content button {
//           padding: 0.85rem 2.2rem;
//           background: #06b6d4;
//           border: none;
//           border-radius: 30px;
//           color: white;
//           font-weight: 600;
//           font-size: 1.1rem;
//           cursor: pointer;
//           box-shadow: 0 6px 18px rgba(6,182,212,0.6);
//           transition: background-color 0.3s ease;
//         }
//         .content button:hover {
//           background: #038ea6;
//         }

//         /* FLEX horizontal scroll container for partner cards */
//         .cards-scroll-container {
//           width: 100vw;
//           padding: 20px 40px;
//           display: flex;
//           flex-wrap: wrap;
//           gap: 24px;
//           overflow-x: auto;
//           overflow-y: hidden;
//           scroll-behavior: smooth;
//           background: white;
//           border-top: 2px solid #06b6d4;
//           border-bottom: 2px solid #06b6d4;
//           box-shadow: 0 10px 25px rgba(0,0,0,0.1);
//           user-select: none;

//           /* Scrollbar styling */
//           scrollbar-width: thin;
//           scrollbar-color: #06b6d4 #e0f2f7;
//           -webkit-overflow-scrolling: touch;
//         }

//         /* Show two rows by wrapping, limit each card width */
//         .partner-card {
//           flex: 0 0 180px;
//           height: 140px;
//           background: #0b525b;
//           border-radius: 16px;
//           box-shadow: 0 8px 22px rgba(0, 0, 0, 0.25);
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           cursor: pointer;
//           transition: transform 0.3s ease, box-shadow 0.3s ease;
//           border: 2px solid transparent;
//           will-change: transform;
//         }
//         .partner-card:hover {
//           transform: scale(1.15);
//           box-shadow: 0 14px 38px rgba(6,182,212,0.85);
//           border-color: #06b6d4;
//           z-index: 10;
//         }
//         .partner-card img {
//           max-width: 70%;
//           max-height: 70%;
//           object-fit: contain;
//           filter: drop-shadow(0 0 8px rgba(0, 255, 255, 0.9));
//           user-select: none;
//           pointer-events: none;
//           transition: filter 0.3s ease;
//         }
//         .partner-card:hover img {
//           filter: drop-shadow(0 0 18px rgba(0, 255, 255, 1));
//         }

//         /* Responsive */
//         @media (max-width: 900px) {
//           .top-container {
//             flex-direction: column;
//             gap: 40px;
//           }
//           .content {
//             max-width: 100%;
//             padding: 0 20px;
//           }
//           .cards-scroll-container {
//             padding: 20px 20px;
//             gap: 16px;
//           }
//           .partner-card {
//             flex: 0 0 140px;
//             height: 110px;
//             border-radius: 12px;
//           }
//           .cube-container {
//             width: 200px;
//             height: 200px;
//           }
//           .cube {
//             width: 170px;
//             height: 170px;
//           }
//           .face {
//             width: 170px;
//             height: 170px;
//           }
//         }

        
//       `}</style>

//       <section
//         className="partners-section"
//         aria-label="Partners showcase with perfect 3D rotating cube and scrollable partner cards"
//       >
//         <div className="top-container">
//           <div
//             className="cube-container"
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//           >
//             <div className={`cube ${isHovered ? "paused" : ""}`}>
//               {cubeFaces.map((logo, idx) => {
//                 const faceNames = [
//                   "front",
//                   "back",
//                   "right",
//                   "left",
//                   "top",
//                   "bottom",
//                 ];
//                 return (
//                   <div key={idx} className={`face ${faceNames[idx]}`}>
//                     <img
//                       src={logo}
//                       alt={`Partner logo ${idx + 1}`}
//                       loading="lazy"
//                       draggable={false}
//                     />
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           <div className="content">
//             <h2>
//               Our <strong>Trusted Partners</strong>
//             </h2>
//             <p>
//               We collaborate with industry leaders and innovators to bring you the
//               best solutions and services. Our partners are carefully selected to
//               ensure quality, reliability, and cutting-edge technology.
//             </p>
//             <button onClick={() => alert("Explore partners soon!")}>
//               Learn More
//             </button>
//           </div>
//         </div>

//         {/* FLEX horizontal scroll container with wrapping to get two rows */}
//         <div
//           className="cards-scroll-container"
//           tabIndex={0}
//           aria-label="Scrollable list of all partner logos"
//         >
//           {partners.map((logo, index) => (
//             <div
//               key={index}
//               className="partner-card"
//               title={`Partner ${index + 1}`}
//             >
//               <img
//                 src={logo}
//                 alt={`Partner logo ${index + 1}`}
//                 loading="lazy"
//                 draggable={false}
//               />
//             </div>
//           ))}
//         </div>
//       </section>
//     </>
//   );
// }
const partners = [
  "https://www.pmits.co.uk/portals/0/images/partners/solar-communications-200.png",
  "https://www.pmits.co.uk/portals/0/images/partners/cbf-200.png",
  "https://www.pmits.co.uk/portals/0/images/partners/gxs-200.png",
  "https://www.pmits.co.uk/portals/0/images/partners/jpr-200.png",
  "https://www.pmits.co.uk/portals/0/images/partners/talk-internet-200.png",
  "https://www.pmits.co.uk/Portals/0/img/opera3_logo.png",
  "https://www.pmits.co.uk/Portals/0/pegasus-logo.png",
  "https://www.pmits.co.uk/Portals/0/sage business partner.jpg",
];

const cubeFaces = partners.slice(0, 6);

export default function Perfect3DCubePartners() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <style>{`
        .partners-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          background: linear-gradient(135deg, rgba(8,83,89,0.95) 0%, rgba(8,83,89,0.9) 100%);
          font-family: 'Inter', sans-serif;
          color: #ffffff;
          padding: 80px 0 40px 0;
          min-height: 100vh;
          gap: 60px;
          box-sizing: border-box;
          width: 100%;
        }

        .top-container {
          display: flex;
          gap: 80px;
          align-items: center;
          max-width: 1200px;
          width: 100%;
          flex-wrap: wrap;
          justify-content: center;
          padding: 0 40px;
          box-sizing: border-box;
        }

        .cube-container {
          flex-shrink: 0;
          width: 140px;
          height: 140px;
          perspective: 1400px;
        }

        .cube {
          width: 140px;
          height: 140px;
          position: relative;
          transform-style: preserve-3d;
          animation: rotateCube 20s linear infinite;
          transition: animation-play-state 0.3s ease;
          margin: auto;
          border-radius: 10px;
          box-shadow: none;
        }
        .cube.paused {
          animation-play-state: paused;
        }

        .face {
          position: absolute;
          width: 140px;
          height: 140px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.06);
          border: 2px solid #06b6d4;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0 8px 20px rgba(0,0,0,0.3);
          backface-visibility: hidden;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .face img {
          max-width: 70%;
          max-height: 70%;
          object-fit: contain;
          filter: drop-shadow(0 0 5px rgba(0, 255, 255, 0.8));
          transition: transform 0.3s ease;
          user-select: none;
          pointer-events: none;
        }
        .face:hover img {
          transform: scale(1.15);
          filter: drop-shadow(0 0 12px rgba(0, 255, 255, 1));
        }
        .face:hover {
          box-shadow: 0 0 20px 3px #06b6d4;
        }

        .face.front  { transform: translateZ(70px); }
        .face.back   { transform: rotateY(180deg) translateZ(70px); }
        .face.right  { transform: rotateY(90deg) translateZ(70px); }
        .face.left   { transform: rotateY(-90deg) translateZ(70px); }
        .face.top    { transform: rotateX(90deg) translateZ(70px); }
        .face.bottom { transform: rotateX(-90deg) translateZ(70px); }

        @keyframes rotateCube {
          0%   { transform: rotateX(0deg) rotateY(0deg); }
          100% { transform: rotateX(360deg) rotateY(360deg); }
        }

        .content {
          max-width: 620px;
          text-align: center;
          user-select: none;
          padding: 0 20px;
        }
        .content h2 {
          font-size: 2.8rem;
          margin-bottom: 0.6rem;
          font-weight: 700;
          color: #e0f7fa;
        }
        .content strong {
          color: #06b6d4;
        }
        .content p {
          font-size: 1.25rem;
          line-height: 1.7;
          margin-bottom: 1.8rem;
          color: #d0e8ea;
        }
        .content button {
          padding: 0.85rem 2.2rem;
          background: #06b6d4;
          border: none;
          border-radius: 30px;
          color: white;
          font-weight: 600;
          font-size: 1.1rem;
          cursor: pointer;
          box-shadow: 0 6px 18px rgba(6,182,212,0.6);
          transition: background-color 0.3s ease;
        }
        .content button:hover {
          background: #038ea6;
        }

        .cards-scroll-container {
          width: 100vw;
          padding: 15px 40px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          background: rgba(255, 255, 255, 0.06);
          border-top: 2px solid #06b6d4;
          border-bottom: 2px solid #06b6d4;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          user-select: none;
          overflow: hidden;
        }

        .scroll-row {
          display: flex;
          gap: 16px;
          animation: scrollLeft 15s linear infinite;
          white-space: nowrap;
        }

        .scroll-row:nth-child(2) {
          animation: scrollRight 15s linear infinite;
        }

        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .partner-card {
          flex: 0 0 120px;
          height: 90px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 2px solid transparent;
        }
        .partner-card:hover {
          transform: scale(1.1);
          box-shadow: 0 10px 28px rgba(6,182,212,0.75);
          border-color: #06b6d4;
          z-index: 10;
        }
        .partner-card img {
          max-width: 70%;
          max-height: 70%;
          object-fit: contain;
          filter: drop-shadow(0 0 8px rgba(0, 255, 255, 0.9));
          user-select: none;
          pointer-events: none;
          transition: filter 0.3s ease;
        }
        .partner-card:hover img {
          filter: drop-shadow(0 0 18px rgba(0, 255, 255, 1));
        }

        @media (max-width: 900px) {
          .top-container {
            flex-direction: column;
            gap: 40px;
          }
          .content {
            max-width: 100%;
            padding: 0 20px;
          }
          .cards-scroll-container {
            padding: 20px 20px;
            gap: 16px;
          }
          .partner-card {
            flex: 0 0 100px;
            height: 75px;
            border-radius: 10px;
          }
          .cube-container {
            width: 200px;
            height: 200px;
          }
          .cube {
            width: 170px;
            height: 170px;
          }
          .face {
            width: 170px;
            height: 170px;
          }
        }
      `}</style>

      <section
        className="partners-section"
        aria-label="Partners showcase with perfect 3D rotating cube and scrollable partner cards"
      >
        <div className="top-container">
          <div
            className="cube-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className={`cube ${isHovered ? "paused" : ""}`}>
              {cubeFaces.map((logo, idx) => {
                const faceNames = [
                  "front",
                  "back",
                  "right",
                  "left",
                  "top",
                  "bottom",
                ];
                return (
                  <div key={idx} className={`face ${faceNames[idx]}`}>
                    <img
                      src={logo}
                      alt={`Partner logo ${idx + 1}`}
                      loading="lazy"
                      draggable={false}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="content">
            <h2>
              Our <strong>Trusted Partners</strong>
            </h2>
            <p>
              We collaborate with industry leaders and innovators to bring you the
              best solutions and services. Our partners are carefully selected to
              ensure quality, reliability, and cutting-edge technology.
            </p>
            <button onClick={() => alert("Explore partners soon!")}>
              Learn More
            </button>
          </div>
        </div>

        <div
          className="cards-scroll-container"
          aria-label="Scrolling partner logos in opposite directions"
        >
          <div className="scroll-row">
            {[...partners, ...partners].map((logo, index) => (
              <div
                key={`row1-${index}`}
                className="partner-card"
                title={`Partner ${(index % partners.length) + 1}`}
              >
                <img
                  src={logo}
                  alt={`Partner logo ${(index % partners.length) + 1}`}
                  loading="lazy"
                  draggable={false}
                />
              </div>
            ))}
          </div>
          <div className="scroll-row">
            {[...partners, ...partners].map((logo, index) => (
              <div
                key={`row2-${index}`}
                className="partner-card"
                title={`Partner ${(index % partners.length) + 1}`}
              >
                <img
                  src={logo}
                  alt={`Partner logo ${(index % partners.length) + 1}`}
                  loading="lazy"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
    