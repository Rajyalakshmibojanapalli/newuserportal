// // import React, { useState, useEffect, useRef } from 'react';

// // const ProjectRoadmap = () => {
// //   const [scrollY, setScrollY] = useState(0);
// //   const [visibleCards, setVisibleCards] = useState(new Set());
// //   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
// //   const containerRef = useRef(null);

// //   const roadmapData = {
// //     2024: [
// //       { 
// //         id: 'p1-2024',
// //         phase: "Phase 1", 
// //         title: "Concept Development",
// //         description: "Foundation building with core team assembly and strategic planning frameworks.",
// //         tags: ["Team Formation", "Strategy", "Planning"],
// //         icon: "🚀",
// //         progress: 100,
// //         status: "completed"
// //       },
// //       { 
// //         id: 'p2-2024',
// //         phase: "Phase 2", 
// //         title: "Smart Contract Development",
// //         description: "Advanced blockchain architecture with security audits and protocols.",
// //         tags: ["Smart Contracts", "Security", "Blockchain"],
// //         icon: "🔒",
// //         progress: 85,
// //         status: "active"
// //       },
// //       { 
// //         id: 'p3-2024',
// //         phase: "Phase 3", 
// //         title: "Platform Development",
// //         description: "Digital platform with comprehensive documentation and specifications.",
// //         tags: ["Platform", "Documentation", "UI/UX"],
// //         icon: "📄",
// //         progress: 70,
// //         status: "active"
// //       },
// //       { 
// //         id: 'p4-2024',
// //         phase: "Phase 4", 
// //         title: "Token Launch",
// //         description: "Token launch with comprehensive marketing and fundraising campaigns.",
// //         tags: ["Token", "Marketing", "Fundraising"],
// //         icon: "💰",
// //         progress: 40,
// //         status: "upcoming"
// //       },
// //       { 
// //         id: 'p5-2024',
// //         phase: "Phase 5", 
// //         title: "Mobile App Launch",
// //         description: "Cross-platform mobile applications with seamless user experience.",
// //         tags: ["Mobile", "Cross-Platform", "UX"],
// //         icon: "📱",
// //         progress: 25,
// //         status: "upcoming"
// //       },
// //     ],
// //     2025: [
// //       { 
// //         id: 'p1-2025',
// //         phase: "Phase 1", 
// //         title: "AI Integration",
// //         description: "Advanced AI features with machine learning capabilities and automation.",
// //         tags: ["AI", "Machine Learning", "Automation"],
// //         icon: "🤖",
// //         progress: 15,
// //         status: "future"
// //       },
// //       { 
// //         id: 'p2-2025',
// //         phase: "Phase 2", 
// //         title: "Metaverse Platform",
// //         description: "Virtual reality ecosystem with NFT integration and digital assets.",
// //         tags: ["Metaverse", "VR", "NFTs"],
// //         icon: "🌐",
// //         progress: 10,
// //         status: "future"
// //       },
// //       { 
// //         id: 'p3-2025',
// //         phase: "Phase 3", 
// //         title: "DeFi Ecosystem",
// //         description: "Decentralized finance platform with yield farming and staking.",
// //         tags: ["DeFi", "Yield Farming", "Staking"],
// //         icon: "⚡",
// //         progress: 5,
// //         status: "future"
// //       },
// //       { 
// //         id: 'p4-2025',
// //         phase: "Phase 4", 
// //         title: "Global Expansion",
// //         description: "Worldwide market penetration with strategic partnerships.",
// //         tags: ["Global", "Partnerships", "Expansion"],
// //         icon: "🌍",
// //         progress: 3,
// //         status: "future"
// //       },
// //     ],
// //     2026: [
// //       { 
// //         id: 'p1-2026',
// //         phase: "Phase 1", 
// //         title: "Advanced Technology",
// //         description: "Next-generation features with quantum integration and security.",
// //         tags: ["Quantum", "Advanced Tech", "Security"],
// //         icon: "⚛️",
// //         progress: 0,
// //         status: "future"
// //       },
// //       { 
// //         id: 'p2-2026',
// //         phase: "Phase 2", 
// //         title: "Neural Networks",
// //         description: "Brain-computer interface and advanced neural processing systems.",
// //         tags: ["Neural", "BCI", "Processing"],
// //         icon: "🧠",
// //         progress: 0,
// //         status: "future"
// //       },
// //       { 
// //         id: 'p3-2026',
// //         phase: "Phase 3", 
// //         title: "Space Integration",
// //         description: "Satellite-based infrastructure and interplanetary connectivity.",
// //         tags: ["Space", "Satellites", "Infrastructure"],
// //         icon: "🛰️",
// //         progress: 0,
// //         status: "future"
// //       },
// //       { 
// //         id: 'p4-2026',
// //         phase: "Phase 4", 
// //         title: "Universal Adoption",
// //         description: "Complete global transformation and mass market adoption.",
// //         tags: ["Universal", "Global", "Adoption"],
// //         icon: "🌟",
// //         progress: 0,
// //         status: "future"
// //       },
// //     ],
// //   };

// //   // Smooth mouse tracking
// //   useEffect(() => {
// //     const handleMouseMove = (e) => {
// //       setMousePosition({ 
// //         x: (e.clientX / window.innerWidth) * 2 - 1, 
// //         y: (e.clientY / window.innerHeight) * 2 - 1 
// //       });
// //     };
// //     window.addEventListener('mousemove', handleMouseMove, { passive: true });
// //     return () => window.removeEventListener('mousemove', handleMouseMove);
// //   }, []);

// //   // Ultra-smooth scroll
// //   useEffect(() => {
// //     let ticking = false;
// //     const handleScroll = () => {
// //       if (!ticking) {
// //         requestAnimationFrame(() => {
// //           if (containerRef.current) {
// //             const rect = containerRef.current.getBoundingClientRect();
// //             const progress = Math.max(0, Math.min(1, -rect.top / (rect.height - window.innerHeight)));
// //             setScrollY(progress * 100);
// //           }
// //           ticking = false;
// //         });
// //         ticking = true;
// //       }
// //     };

// //     window.addEventListener('scroll', handleScroll, { passive: true });
// //     handleScroll();
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []);

// //   // Smooth card reveal
// //   useEffect(() => {
// //     const allCardIds = Object.values(roadmapData).flat().map(m => m.id);
// //     allCardIds.forEach((id, index) => {
// //       setTimeout(() => {
// //         setVisibleCards(prev => new Set([...prev, id]));
// //       }, index * 100);
// //     });
// //   }, []);

// //   // Smooth floating particles
// //   const SmoothParticles = () => (
// //     <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
// //       {[...Array(20)].map((_, i) => (
// //         <div
// //           key={i}
// //           className="absolute rounded-full opacity-40"
// //           style={{
// //             width: `${2 + Math.random() * 3}px`,
// //             height: `${2 + Math.random() * 3}px`,
// //             left: `${Math.random() * 100}%`,
// //             top: `${Math.random() * 100}%`,
// //             background: 'linear-gradient(45deg, #094e54, #4ecdc4)',
// //             transform: `
// //               translateX(${mousePosition.x * 10}px) 
// //               translateY(${mousePosition.y * 10 + Math.sin(scrollY * 0.1 + i) * 20}px)
// //             `,
// //             transition: 'transform 0.3s ease-out',
// //             boxShadow: '0 0 10px rgba(78, 205, 196, 0.5)',
// //           }}
// //         />
// //       ))}
// //     </div>
// //   );

// //   // Compact year badge
// //   const YearBadge = ({ year }) => (
// //     <div className="flex justify-center mb-8 relative z-10">
// //       <div 
// //         className="w-20 h-20 rounded-full flex items-center justify-center border-2 shadow-xl hover:scale-110 transition-all duration-500 cursor-pointer backdrop-blur-sm"
// //         style={{
// //           background: 'linear-gradient(135deg, #094e54, #4ecdc4)',
// //           borderColor: '#4ecdc4',
// //           boxShadow: '0 0 30px rgba(78, 205, 196, 0.5)'
// //         }}
// //       >
// //         <span className="text-lg font-bold text-white font-mono">
// //           {year}
// //         </span>
// //       </div>
// //     </div>
// //   );

// //   // Compact milestone card
// //   const CompactCard = ({ milestone, globalIndex }) => {
// //     const [isHovered, setIsHovered] = useState(false);
// //     const isVisible = visibleCards.has(milestone.id);
// //     const isLeft = globalIndex % 2 === 0;

// //     const getStatusColor = (status) => {
// //       switch (status) {
// //         case 'completed': return '#00ff88';
// //         case 'active': return '#4ecdc4';
// //         case 'upcoming': return '#ffd700';
// //         case 'future': return '#888';
// //         default: return '#4ecdc4';
// //       }
// //     };

// //     return (
// //       <div
// //         id={milestone.id}
// //         className={`relative mb-8 ${isLeft ? 'lg:pr-8' : 'lg:pl-8'} lg:w-1/2 ${isLeft ? 'lg:ml-0' : 'lg:ml-auto'}`}
// //         style={{
// //           transform: isVisible 
// //             ? 'translateY(0px) scale(1)' 
// //             : 'translateY(30px) scale(0.95)',
// //           opacity: isVisible ? 1 : 0,
// //           transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
// //           transitionDelay: `${globalIndex * 0.08}s`
// //         }}
// //       >
// //         {/* Smooth connection line */}
// //         <div 
// //           className={`absolute top-6 w-12 h-1 ${isLeft ? 'right-0' : 'left-0'} lg:block hidden rounded-full`}
// //           style={{
// //             background: `linear-gradient(135deg, #094e54, ${getStatusColor(milestone.status)})`,
// //             boxShadow: `0 0 10px ${getStatusColor(milestone.status)}50`
// //           }}
// //         />

// //         {/* Smooth timeline dot */}
// //         <div 
// //           className={`absolute top-5 w-3 h-3 rounded-full border-2 border-gray-900 shadow-lg ${isLeft ? '-right-1.5' : '-left-1.5'} lg:block hidden transition-all duration-300 z-10`}
// //           style={{
// //             background: getStatusColor(milestone.status),
// //             boxShadow: `0 0 15px ${getStatusColor(milestone.status)}`
// //           }}
// //         />

// //         <div
// //           className={`group relative backdrop-blur-md rounded-2xl p-5 border shadow-lg transition-all duration-500 cursor-pointer overflow-hidden ${
// //             isHovered ? 'scale-102 -rotate-0.5' : ''
// //           }`}
// //           style={{
// //             background: `linear-gradient(135deg, rgba(9,78,84,0.3), rgba(78,205,196,0.1))`,
// //             borderColor: `${getStatusColor(milestone.status)}60`,
// //             boxShadow: isHovered 
// //               ? `0 20px 40px -10px rgba(9,78,84,0.3), 0 0 0 1px ${getStatusColor(milestone.status)}30` 
// //               : '0 8px 20px -5px rgba(9,78,84,0.2)',
// //             transform: isHovered ? 'translateY(-5px)' : 'translateY(0px)'
// //           }}
// //           onMouseEnter={() => setIsHovered(true)}
// //           onMouseLeave={() => setIsHovered(false)}
// //         >
// //           {/* Status indicator */}
// //           <div 
// //             className="absolute top-3 right-3 w-2 h-2 rounded-full"
// //             style={{ backgroundColor: getStatusColor(milestone.status) }}
// //           />

// //           {/* Compact icon */}
// //           <div 
// //             className="absolute top-3 right-8 w-8 h-8 rounded-lg flex items-center justify-center text-lg backdrop-blur-sm border transition-all duration-300"
// //             style={{
// //               background: `linear-gradient(135deg, rgba(9,78,84,0.5), rgba(78,205,196,0.3))`,
// //               borderColor: `${getStatusColor(milestone.status)}40`,
// //               transform: isHovered ? 'scale(1.1) rotate(5deg)' : 'scale(1)'
// //             }}
// //           >
// //             {milestone.icon}
// //           </div>

// //           {/* Phase tag */}
// //           <div 
// //             className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wide"
// //             style={{
// //               background: `linear-gradient(135deg, #094e54, ${getStatusColor(milestone.status)})`,
// //             }}
// //           >
// //             {milestone.phase}
// //           </div>

// //           {/* Compact title */}
// //           <h3 className="text-lg font-bold text-white mb-2 font-mono">
// //             {milestone.title}
// //           </h3>

// //           {/* Compact description */}
// //           <p className="text-gray-300 text-sm leading-relaxed mb-3">
// //             {milestone.description}
// //           </p>

// //           {/* Compact tags */}
// //           <div className="flex flex-wrap gap-1.5 mb-3">
// //             {milestone.tags.map((tag, tagIndex) => (
// //               <span
// //                 key={tagIndex}
// //                 className="px-2 py-1 text-white text-xs rounded-md border transition-all duration-300"
// //                 style={{
// //                   background: `rgba(9,78,84,0.5)`,
// //                   borderColor: `${getStatusColor(milestone.status)}40`,
// //                   transform: isHovered ? 'translateY(-1px)' : 'translateY(0px)'
// //                 }}
// //               >
// //                 {tag}
// //               </span>
// //             ))}
// //           </div>

// //           {/* Compact progress */}
// //           <div className="relative">
// //             <div className="flex justify-between items-center mb-2">
// //               <span className="text-xs text-gray-400">Progress</span>
// //               <span 
// //                 className="text-xs font-bold text-white px-2 py-0.5 rounded-full"
// //                 style={{
// //                   background: `linear-gradient(135deg, #094e54, ${getStatusColor(milestone.status)})`
// //                 }}
// //               >
// //                 {milestone.progress}%
// //               </span>
// //             </div>
// //             <div className="w-full bg-gray-800/50 rounded-full h-2 overflow-hidden">
// //               <div
// //                 className="h-full rounded-full transition-all duration-1000"
// //                 style={{ 
// //                   width: isVisible ? `${milestone.progress}%` : '0%',
// //                   background: `linear-gradient(135deg, #094e54, ${getStatusColor(milestone.status)})`,
// //                   boxShadow: `0 0 10px ${getStatusColor(milestone.status)}60`
// //                 }}
// //               />
// //             </div>
// //           </div>

// //           {/* Subtle hover effect */}
// //           <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
// //         </div>
// //       </div>
// //     );
// //   };

// //   // Smooth timeline
// //   const SmoothTimeline = () => (
// //     <div 
// //       className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 shadow-lg lg:block hidden rounded-full"
// //       style={{
// //         background: 'linear-gradient(180deg, #094e54, #4ecdc4)',
// //         boxShadow: '0 0 10px rgba(78, 205, 196, 0.5)'
// //       }}
// //     >
// //       <div 
// //         className="absolute top-0 w-full transition-all duration-700 rounded-full"
// //         style={{
// //           height: `${Math.min(scrollY, 100)}%`,
// //           background: 'linear-gradient(180deg, #4ecdc4, #ffffff)',
// //           boxShadow: '0 0 15px rgba(78, 205, 196, 0.8)'
// //         }}
// //       />
// //     </div>
// //   );

// //   return (
// //     <>
// //       <style jsx>{`
// //         @keyframes float {
// //           0%, 100% { transform: translateY(0px); }
// //           50% { transform: translateY(-10px); }
// //         }

// //         @keyframes glow {
// //           0%, 100% { box-shadow: 0 0 20px rgba(78, 205, 196, 0.5); }
// //           50% { box-shadow: 0 0 30px rgba(78, 205, 196, 0.8); }
// //         }

// //         .scale-102 {
// //           transform: scale(1.02);
// //         }
// //       `}</style>

// //       <div 
// //         ref={containerRef}
// //         className="relative min-h-screen text-white overflow-hidden"
// //         style={{
// //           background: 'linear-gradient(135deg, #0a1a1d, #1a4b52, #2a6b70)'
// //         }}
// //       >
// //         {/* Smooth animated background */}
// //         <div 
// //           className="absolute inset-0 opacity-60"
// //           style={{
// //             background: `
// //               radial-gradient(circle at 30% 70%, rgba(9,78,84,0.6) 0%, transparent 50%),
// //               radial-gradient(circle at 70% 30%, rgba(78,205,196,0.4) 0%, transparent 50%)
// //             `,
// //             transform: `translateX(${mousePosition.x * 5}px) translateY(${mousePosition.y * 5}px)`,
// //             transition: 'transform 0.5s ease-out'
// //           }}
// //         />

// //         <SmoothParticles />

// //         {/* Compact header */}
// //        <div className="relative z-10 text-center py-20 px-4">
// //           <div className="relative inline-block">
// //             <div className="absolute -inset-8 bg-gradient-to-r from-[#005358] via-[#00a3b5] to-[#00c2d1] rounded-full blur-3xl opacity-20 animate-pulse"></div>
// //             <h1 className="relative text-6xl md:text-8xl font-black bg-gradient-to-r from-[#005358] via-[#00a3b5] to-[#00c2d1] bg-clip-text text-transparent font-mono tracking-tighter hover:scale-105 transition-transform duration-700 cursor-default">
// //               PROJECT NEXUS
// //             </h1>
// //           </div>
// //           <p 
// //             className="text-xl md:text-2xl text-[#00a3b5] font-light tracking-[0.2em] uppercase mt-4 hover:tracking-[0.3em] transition-all duration-500"
// //             style={{ 
// //               animation: 'subtitleFloat 4s ease-in-out infinite'
// //             }}
// //           >
// //             Revolutionary Roadmap • 2024-2026
// //           </p>
// //         </div>

// //         {/* Compact main content */}
// //         <div className="relative z-10 max-w-6xl mx-auto px-4 pb-16">
// //           <div className="relative">
// //             <SmoothTimeline />

// //             {Object.entries(roadmapData).map(([year, milestones], yearIndex) => (
// //               <div key={year} className="relative mb-16">
// //                 <YearBadge year={year} />
// //                 <div className="relative lg:pl-4">
// //                   {milestones.map((milestone, index) => {
// //                     const globalIdx = yearIndex * 5 + index;
// //                     return (
// //                       <CompactCard
// //                         key={milestone.id}
// //                         milestone={milestone}
// //                         globalIndex={globalIdx}
// //                       />
// //                     );
// //                   })}
// //                 </div>
// //               </div>
// //             ))}
// //           </div>

// //           {/* Compact stats */}
// //           <div 
// //             className="mt-16 backdrop-blur-md rounded-2xl p-6 border shadow-lg"
// //             style={{
// //               background: 'linear-gradient(135deg, rgba(9,78,84,0.4), rgba(78,205,196,0.2))',
// //               borderColor: '#4ecdc4',
// //               boxShadow: '0 15px 35px rgba(9,78,84,0.3)'
// //             }}
// //           >
// //             <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
// //               {[
// //                 { value: "13", label: "Total Phases" },
// //                 { value: "3", label: "Years" },
// //                 { value: "5", label: "Active 2024" },
// //                 { value: "45%", label: "Complete" }
// //               ].map((stat, index) => (
// //                 <div key={index} className="hover:scale-105 transition-transform duration-300">
// //                   <h3 className="text-3xl font-black text-[#4ecdc4] mb-1 font-mono">
// //                     {stat.value}
// //                   </h3>
// //                   <p className="text-gray-400 text-sm uppercase tracking-wide">
// //                     {stat.label}
// //                   </p>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default ProjectRoadmap;
// import React, { useState, useEffect, useRef } from 'react';

// const ProjectRoadmap = () => {
//     const [scrollY, setScrollY] = useState(0);
//     const [visibleCards, setVisibleCards] = useState(new Set());
//     const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//     const containerRef = useRef(null);
//     const cardRefs = useRef({}); // To hold refs for each card

//     const roadmapData = {
//         2024: [
//             {
//                 id: 'p1-2024',
//                 phase: "Phase 1",
//                 title: "Concept Development",
//                 description: "Foundation building with core team assembly and strategic planning frameworks.",
//                 tags: ["Team Formation", "Strategy", "Planning"],
//                 icon: "🚀",
//                 progress: 100,
//                 status: "completed"
//             },
//             {
//                 id: 'p2-2024',
//                 phase: "Phase 2",
//                 title: "Smart Contract Development",
//                 description: "Advanced blockchain architecture with security audits and protocols.",
//                 tags: ["Smart Contracts", "Security", "Blockchain"],
//                 icon: "🔒",
//                 progress: 85,
//                 status: "active"
//             },
//             {
//                 id: 'p3-2024',
//                 phase: "Phase 3",
//                 title: "Platform Development",
//                 description: "Digital platform with comprehensive documentation and specifications.",
//                 tags: ["Platform", "Documentation", "UI/UX"],
//                 icon: "📄",
//                 progress: 70,
//                 status: "active"
//             },
//             {
//                 id: 'p4-2024',
//                 phase: "Phase 4",
//                 title: "Token Launch",
//                 description: "Token launch with comprehensive marketing and fundraising campaigns.",
//                 tags: ["Token", "Marketing", "Fundraising"],
//                 icon: "💰",
//                 progress: 40,
//                 status: "upcoming"
//             },
//             {
//                 id: 'p5-2024',
//                 phase: "Phase 5",
//                 title: "Mobile App Launch",
//                 description: "Cross-platform mobile applications with seamless user experience.",
//                 tags: ["Mobile", "Cross-Platform", "UX"],
//                 icon: "📱",
//                 progress: 25,
//                 status: "upcoming"
//             },
//         ],
//         2025: [
//             {
//                 id: 'p1-2025',
//                 phase: "Phase 1",
//                 title: "AI Integration",
//                 description: "Advanced AI features with machine learning capabilities and automation.",
//                 tags: ["AI", "Machine Learning", "Automation"],
//                 icon: "🤖",
//                 progress: 15,
//                 status: "future"
//             },
//             {
//                 id: 'p2-2025',
//                 phase: "Phase 2",
//                 title: "Metaverse Platform",
//                 description: "Virtual reality ecosystem with NFT integration and digital assets.",
//                 tags: ["Metaverse", "VR", "NFTs"],
//                 icon: "🌐",
//                 progress: 10,
//                 status: "future"
//             },
//             {
//                 id: 'p3-2025',
//                 phase: "Phase 3",
//                 title: "DeFi Ecosystem",
//                 description: "Decentralized finance platform with yield farming and staking.",
//                 tags: ["DeFi", "Yield Farming", "Staking"],
//                 icon: "⚡",
//                 progress: 5,
//                 status: "future"
//             },
//             {
//                 id: 'p4-2025',
//                 phase: "Phase 4",
//                 title: "Global Expansion",
//                 description: "Worldwide market penetration with strategic partnerships.",
//                 tags: ["Global", "Partnerships", "Expansion"],
//                 icon: "🌍",
//                 progress: 3,
//                 status: "future"
//             },
//         ],
//         2026: [
//             {
//                 id: 'p1-2026',
//                 phase: "Phase 1",
//                 title: "Advanced Technology",
//                 description: "Next-generation features with quantum integration and security.",
//                 tags: ["Quantum", "Advanced Tech", "Security"],
//                 icon: "⚛️",
//                 progress: 0,
//                 status: "future"
//             },
//             {
//                 id: 'p2-2026',
//                 phase: "Phase 2",
//                 title: "Neural Networks",
//                 description: "Brain-computer interface and advanced neural processing systems.",
//                 tags: ["Neural", "BCI", "Processing"],
//                 icon: "🧠",
//                 progress: 0,
//                 status: "future"
//             },
//             {
//                 id: 'p3-2026',
//                 phase: "Phase 3",
//                 title: "Space Integration",
//                 description: "Satellite-based infrastructure and interplanetary connectivity.",
//                 tags: ["Space", "Satellites", "Infrastructure"],
//                 icon: "🛰️",
//                 progress: 0,
//                 status: "future"
//             },
//             {
//                 id: 'p4-2026',
//                 phase: "Phase 4",
//                 title: "Universal Adoption",
//                 description: "Complete global transformation and mass market adoption.",
//                 tags: ["Universal", "Global", "Adoption"],
//                 icon: "�",
//                 progress: 0,
//                 status: "future"
//             },
//         ],
//     };

//     // Smooth mouse tracking
//     useEffect(() => {
//         const handleMouseMove = (e) => {
//             setMousePosition({
//                 x: (e.clientX / window.innerWidth) * 2 - 1,
//                 y: (e.clientY / window.innerHeight) * 2 - 1
//             });
//         };
//         window.addEventListener('mousemove', handleMouseMove, { passive: true });
//         return () => window.removeEventListener('mousemove', handleMouseMove);
//     }, []);

//     // Ultra-smooth scroll
//     useEffect(() => {
//         let ticking = false;
//         const handleScroll = () => {
//             if (!ticking) {
//                 requestAnimationFrame(() => {
//                     if (containerRef.current) {
//                         const rect = containerRef.current.getBoundingClientRect();
//                         const progress = Math.max(0, Math.min(1, -rect.top / (rect.height - window.innerHeight)));
//                         setScrollY(progress * 100);
//                     }
//                     ticking = false;
//                 });
//                 ticking = true;
//             }
//         };

//         window.addEventListener('scroll', handleScroll, { passive: true });
//         handleScroll();
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     // Smooth card reveal using Intersection Observer
//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach(entry => {
//                     if (entry.isIntersecting) {
//                         setVisibleCards(prev => new Set([...prev, entry.target.id]));
//                         observer.unobserve(entry.target); // Stop observing once visible
//                     }
//                 });
//             },
//             { threshold: 0.1 } // Adjust threshold as needed
//         );

//         Object.values(roadmapData).flat().forEach(milestone => {
//             const cardElement = cardRefs.current[milestone.id];
//             if (cardElement) {
//                 observer.observe(cardElement);
//             }
//         });

//         return () => observer.disconnect();
//     }, [roadmapData]);

//     // Smooth floating particles
//     const SmoothParticles = () => (
//         <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
//             {[...Array(15)].map((_, i) => ( // Reduced particle count
//                 <div
//                     key={i}
//                     className="absolute rounded-full opacity-40"
//                     style={{
//                         width: `${2 + Math.random() * 3}px`,
//                         height: `${2 + Math.random() * 3}px`,
//                         left: `${Math.random() * 100}%`,
//                         top: `${Math.random() * 100}%`,
//                         background: 'linear-gradient(45deg, #094e54, #4ecdc4)',
//                         transform: `
//                             translateX(${mousePosition.x * 8}px)
//                             translateY(${mousePosition.y * 8 + Math.sin(scrollY * 0.1 + i) * 15}px) // Slightly reduced Y offset
//                         `,
//                         transition: 'transform 0.2s ease-out, opacity 0.2s ease-out', // Added opacity transition
//                         boxShadow: '0 0 8px rgba(78, 205, 196, 0.4)', // Slightly reduced shadow
//                     }}
//                 />
//             ))}
//         </div>
//     );

//     // Compact year badge
//     const YearBadge = ({ year }) => (
//         <div className="flex justify-center mb-8 relative z-10">
//             <div
//                 className="w-20 h-20 rounded-full flex items-center justify-center border-2 shadow-xl hover:scale-110 transition-all duration-500 cursor-pointer backdrop-blur-sm"
//                 style={{
//                     background: 'linear-gradient(135deg, #094e54, #4ecdc4)',
//                     borderColor: '#4ecdc4',
//                     boxShadow: '0 0 20px rgba(78, 205, 196, 0.4)' // Reduced shadow
//                 }}
//             >
//                 <span className="text-lg font-bold text-white font-mono">
//                     {year}
//                 </span>
//             </div>
//         </div>
//     );

//     // Compact milestone card (optimized transitions)
//     const CompactCard = ({ milestone, globalIndex }) => {
//         const [isHovered, setIsHovered] = useState(false);
//         const isVisible = visibleCards.has(milestone.id);
//         const isLeft = globalIndex % 2 === 0;

//         const getStatusColor = (status) => {
//             switch (status) {
//                 case 'completed': return '#00ff88';
//                 case 'active': return '#4ecdc4';
//                 case 'upcoming': return '#ffd700';
//                 case 'future': return '#888';
//                 default: return '#4ecdc4';
//             }
//         };

//         return (
//             <div
//                 ref={el => (cardRefs.current[milestone.id] = el)}
//                 id={milestone.id}
//                 className={`relative mb-8 ${isLeft ? 'lg:pr-8' : 'lg:pl-8'} lg:w-1/2 ${isLeft ? 'lg:ml-0' : 'lg:ml-auto'}`}
//                 style={{
//                     opacity: isVisible ? 1 : 0,
//                     transform: isVisible ? 'translateY(0)' : 'translateY(20px)', // Simpler transform
//                     transition: 'opacity 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
//                     transitionDelay: `${globalIndex * 0.04}s` // Slightly reduced delay
//                 }}
//             >
//                 {/* Smooth connection line */}
//                 <div
//                     className={`absolute top-6 w-12 h-1 ${isLeft ? 'right-0' : 'left-0'} lg:block hidden rounded-full`}
//                     style={{
//                         background: `linear-gradient(135deg, #094e54, ${getStatusColor(milestone.status)})`,
//                         boxShadow: `0 0 6px ${getStatusColor(milestone.status)}50` // Reduced shadow
//                     }}
//                 />

//                 {/* Smooth timeline dot */}
//                 <div
//                     className={`absolute top-5 w-3 h-3 rounded-full border-2 border-gray-900 shadow-md ${isLeft ? '-right-1.5' : '-left-1.5'} lg:block hidden transition-all duration-300 z-10`}
//                     style={{
//                         background: getStatusColor(milestone.status),
//                         boxShadow: `0 0 6px ${getStatusColor(milestone.status)}` // Reduced shadow
//                     }}
//                 />

//                 <div
//                     className={`group relative backdrop-blur-md rounded-2xl p-5 border shadow-lg transition-all duration-300 cursor-pointer overflow-hidden ${
//                         isHovered ? 'scale-101 translate-y-[-2px]' : '' // Simpler hover transform
//                     }`}
//                     style={{
//                         background: `linear-gradient(135deg, rgba(9,78,84,0.3), rgba(78,205,196,0.1))`,
//                         borderColor: `${getStatusColor(milestone.status)}40`,
//                         boxShadow: isHovered
//                             ? `0 10px 20px -5px rgba(9,78,84,0.3), 0 0 0 1px ${getStatusColor(milestone.status)}30`
//                             : '0 5px 15px -5px rgba(9,78,84,0.2)', // Reduced shadow
//                         transform: isHovered ? 'translateY(-2px) scale(1.01)' : 'translateY(0px) scale(1)' // Combined scale and translate
//                     }}
//                     onMouseEnter={() => setIsHovered(true)}
//                     onMouseLeave={() => setIsHovered(false)}
//                 >
//                     {/* Status indicator */}
//                     <div
//                         className="absolute top-3 right-3 w-2 h-2 rounded-full"
//                         style={{ backgroundColor: getStatusColor(milestone.status) }}
//                     />

//                     {/* Compact icon (simplified hover) */}
//                     <div
//                         className="absolute top-3 right-8 w-8 h-8 rounded-lg flex items-center justify-center text-lg backdrop-blur-sm border transition-transform duration-200"
//                         style={{
//                             background: `linear-gradient(135deg, rgba(9,78,84,0.5), rgba(78,205,196,0.3))`,
//                             borderColor: `${getStatusColor(milestone.status)}40`,
//                             transform: isHovered ? 'scale(1.05)' : 'scale(1)'
//                         }}
//                     >
//                         {milestone.icon}
//                     </div>

//                     {/* Phase tag */}
//                     <div
//                         className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wide"
//                         style={{
//                             background: `linear-gradient(135deg, #094e54, ${getStatusColor(milestone.status)})`,
//                         }}
//                     >
//                         {milestone.phase}
//                     </div>

//                     {/* Compact title */}
//                     <h3 className="text-lg font-bold text-white mb-2 font-mono">
//                         {milestone.title}
//                     </h3>

//                     {/* Compact description */}
//                     <p className="text-gray-300 text-sm leading-relaxed mb-3">
//                         {milestone.description}
//                     </p>

//                     {/* Compact tags (simplified hover) */}
//                     <div className="flex flex-wrap gap-1.5 mb-3">
//                         {milestone.tags.map((tag, tagIndex) => (
//                             <span
//                                 key={tagIndex}
//                                 className="px-2 py-1 text-white text-xs rounded-md border transition-transform duration-200"
//                                 style={{
//                                     background: `rgba(9,78,84,0.5)`,
//                                     borderColor: `${getStatusColor(milestone.status)}40`,
//                                     transform: isHovered ? 'translateY(-1px)' : 'translateY(0px)'
//                                 }}
//                             >
//                                 {tag}
//                             </span>
//                         ))}
//                     </div>

//                     {/* Compact progress */}
//                     <div className="relative">
//                         <div className="flex justify-between items-center mb-2">
//                             <span className="text-xs text-gray-400">Progress</span>
//                             <span
//                                 className="text-xs font-bold text-white px-2 py-0.5 rounded-full"
//                                 style={{
//                                     background: `linear-gradient(135deg, #094e54, ${getStatusColor(milestone.status)})`
//                                 }}
//                             >
//                                 {milestone.progress}%
//                             </span>
//                         </div>
//                         <div className="w-full bg-gray-800/50 rounded-full h-2 overflow-hidden">
//                             <div
//                                 className="h-full rounded-full transition-all duration-1000"
//                                 style={{
//                                     width: isVisible ? `${milestone.progress}%` : '0%',
//                                     background: `linear-gradient(135deg, #094e54, ${getStatusColor(milestone.status)})`,
//                                     boxShadow: `0 0 6px ${getStatusColor(milestone.status)}60` // Reduced shadow
//                                 }}
//                             />
//                         </div>
//                     </div>

//                     {/* Subtle hover effect (simplified) */}
//                     <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none rounded-2xl" />
//                 </div>
//             </div>
//         );
//     };

//     // Smooth timeline
//     const SmoothTimeline = () => (
//         <div
//             className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 shadow-lg lg:block hidden rounded-full"
//             style={{
//                 background: 'linear-gradient(180deg, #094e54, #4ecdc4)',
//                 boxShadow: '0 0 10px rgba(78, 205, 196, 0.5)'
//             }}
//         >
//             <div
//                 className="absolute top-0 w-full transition-all duration-700 rounded-full"
//                 style={{
//                     height: `${Math.min(scrollY, 100)}%`,
//                     background: 'linear-gradient(180deg, #4ecdc4, #ffffff)',
//                     boxShadow: '0 0 15px rgba(78, 205, 196, 0.8)'
//                 }}
//             />
//         </div>
//     );

//     return (
//         <>
//             <style jsx>{`
//                 @keyframes float {
//                     0%, 100% { transform: translateY(0px); }
//                     50% { transform: translateY(-10px); }
//                 }

//                 @keyframes glow {
//                     0%, 100% { box-shadow: 0 0 20px rgba(78, 205, 196, 0.5); }
//                     50% { box-shadow: 0 0 30px rgba(78, 205, 196, 0.8); }
//                 }

//                 @keyframes subtitleFloat {
//                     0%, 100% { transform: translateY(0); }
//                     50% { transform: translateY(-5px); }
//                 }

//                 .scale-101 {
//                     transform: scale(1.01);
//                 }
//                 .translate-y-[-2px] {
//                     transform: translateY(-2px);
//                 }
//             `}</style>

//             <div
//                 ref={containerRef}
//                 className="relative min-h-screen text-white overflow-hidden"
//                 style={{
//                     background: 'linear-gradient(135deg, #0a1a1d, #1a4b52, #2a6b70)'
//                 }}
//             >
//                 {/* Smooth animated background */}
//                 <div
//                     className="absolute inset-0 opacity-60"
//                     style={{
//                         background: `
//                             radial-gradient(circle at 30% 70%, rgba(9,78,84,0.6) 0%, transparent 50%),
//                             radial-gradient(circle at 70% 30%, rgba(78,205,196,0.4) 0%, transparent 50%)
//                         `,
//                         transform: `translateX(${mousePosition.x * 3}px) translateY(${mousePosition.y * 3}px)`, // Slightly reduced movement
//                         transition: 'transform 0.3s ease-out' // Faster transition
//                     }}
//                 />

//                 <SmoothParticles />

//                 {/* Compact header */}
//                 <div className="relative z-10 text-center py-20 px-4">
//                     <div className="relative inline-block">
//                         <div className="absolute -inset-8 bg-gradient-to-r from-[#005358] via-[#00a3b5] to-[#00c2d1] rounded-full blur-3xl opacity-20 animate-pulse"></div>
//                         <h1 className="relative text-6xl md:text-8xl font-black bg-gradient-to-r from-[#005358] via-[#00a3b5] to-[#00c2d1] bg-clip-text text-transparent font-mono tracking-tighter hover:scale-105 transition-transform duration-700 cursor-default">
//                             PROJECT NEXUS
//                         </h1>
//                     </div>
//                     <p
//                         className="text-xl md:text-2xl text-[#00a3b5] font-light tracking-[0.2em] uppercase mt-4 hover:tracking-[0.3em] transition-all duration-500"
//                         style={{
//                             animation: 'subtitleFloat 4s ease-in-out infinite'
//                         }}
//                     >
//                         Revolutionary Roadmap • 2024-2026
//                     </p>
//                 </div>

//                 {/* Compact main content */}
//                 <div className="relative z-10 max-w-6xl mx-auto px-4 pb-16">
//                     <div className="relative">
//                         <SmoothTimeline />

//                         {Object.entries(roadmapData).map(([year, milestones], yearIndex) => (
//                             <div key={year} className="relative mb-16">
//                                 <YearBadge year={year} />
//                                 <div className="relative lg:pl-4">
//                                     {milestones.map((milestone, index) => {
//                                         const globalIdx = yearIndex * 5 + index;
//                                         return (
//                                             <CompactCard
//                                                 key={milestone.id}
//                                                 milestone={milestone}
//                                                 globalIndex={globalIdx}
//                                             />
//                                         );
//                                     })}
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                     {/* Compact stats */}
//                     <div
//                         className="mt-16 backdrop-blur-md rounded-2xl p-6 border shadow-lg"
//                         style={{
//                             background: 'linear-gradient(135deg, rgba(9,78,84,0.4), rgba(78,205,196,0.2))',
//                             borderColor: '#4ecdc4',
//                             boxShadow: '0 15px 35px rgba(9,78,84,0.3)'
//                         }}
//                     >
//                         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
//                             {[
//                                 { value: "13", label: "Total Phases" },
//                                 { value: "3", label: "Years" },
//                                 { value: "5", label: "Active 2024" },
//                                 { value: "45%", label: "Complete" }
//                             ].map((stat, index) => (
//                                 <div key={index} className="hover:scale-105 transition-transform duration-300">
//                                     <h3 className="text-3xl font-black text-[#4ecdc4] mb-1 font-mono">
//                                         {stat.value}
//                                     </h3>
//                                     <p className="text-gray-400 text-sm uppercase tracking-wide">
//                                         {stat.label}
//                                     </p>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default ProjectRoadmap;
import React, { useState, useEffect, useRef } from 'react';

const ProjectRoadmap = () => {
  const [scrollY, setScrollY] = useState(0);
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const cardRefs = useRef({}); // To hold refs for each card

  const roadmapData = {
    2024: [
      {
        id: 'p1-2024',
        phase: "Phase 1",
        title: "Concept Development",
        description: "Foundation building with core team assembly and strategic planning frameworks.",
        tags: ["Team Formation", "Strategy", "Planning"],
        icon: "�",
        progress: 100,
        status: "completed"
      },
      {
        id: 'p2-2024',
        phase: "Phase 2",
        title: "Smart Contract Development",
        description: "Advanced blockchain architecture with security audits and protocols.",
        tags: ["Smart Contracts", "Security", "Blockchain"],
        icon: "🔒",
        progress: 85,
        status: "active"
      },
      {
        id: 'p3-2024',
        phase: "Phase 3",
        title: "Platform Development",
        description: "Digital platform with comprehensive documentation and specifications.",
        tags: ["Platform", "Documentation", "UI/UX"],
        icon: "📄",
        progress: 70,
        status: "active"
      },
      {
        id: 'p4-2024',
        phase: "Phase 4",
        title: "Token Launch",
        description: "Token launch with comprehensive marketing and fundraising campaigns.",
        tags: ["Token", "Marketing", "Fundraising"],
        icon: "💰",
        progress: 40,
        status: "upcoming"
      },
      {
        id: 'p5-2024',
        phase: "Phase 5",
        title: "Mobile App Launch",
        description: "Cross-platform mobile applications with seamless user experience.",
        tags: ["Mobile", "Cross-Platform", "UX"],
        icon: "📱",
        progress: 25,
        status: "upcoming"
      },
    ],
    2025: [
      {
        id: 'p1-2025',
        phase: "Phase 1",
        title: "AI Integration",
        description: "Advanced AI features with machine learning capabilities and automation.",
        tags: ["AI", "Machine Learning", "Automation"],
        icon: "🤖",
        progress: 15,
        status: "future"
      },
      {
        id: 'p2-2025',
        phase: "Phase 2",
        title: "Metaverse Platform",
        description: "Virtual reality ecosystem with NFT integration and digital assets.",
        tags: ["Metaverse", "VR", "NFTs"],
        icon: "🌐",
        progress: 10,
        status: "future"
      },
      {
        id: 'p3-2025',
        phase: "Phase 3",
        title: "DeFi Ecosystem",
        description: "Decentralized finance platform with yield farming and staking.",
        tags: ["DeFi", "Yield Farming", "Staking"],
        icon: "⚡",
        progress: 5,
        status: "future"
      },
      {
        id: 'p4-2025',
        phase: "Phase 4",
        title: "Global Expansion",
        description: "Worldwide market penetration with strategic partnerships.",
        tags: ["Global", "Partnerships", "Expansion"],
        icon: "🌍",
        progress: 3,
        status: "future"
      },
    ],
    2026: [
      {
        id: 'p1-2026',
        phase: "Phase 1",
        title: "Advanced Technology",
        description: "Next-generation features with quantum integration and security.",
        tags: ["Quantum", "Advanced Tech", "Security"],
        icon: "⚛️",
        progress: 0,
        status: "future"
      },
      {
        id: 'p2-2026',
        phase: "Phase 2",
        title: "Neural Networks",
        description: "Brain-computer interface and advanced neural processing systems.",
        tags: ["Neural", "BCI", "Processing"],
        icon: "🧠",
        progress: 0,
        status: "future"
      },
      {
        id: 'p3-2026',
        phase: "Phase 3",
        title: "Space Integration",
        description: "Satellite-based infrastructure and interplanetary connectivity.",
        tags: ["Space", "Satellites", "Infrastructure"],
        icon: "🛰️",
        progress: 0,
        status: "future"
      },
      {
        id: 'p4-2026',
        phase: "Phase 4",
        title: "Universal Adoption",
        description: "Complete global transformation and mass market adoption.",
        tags: ["Universal", "Global", "Adoption"],
        icon: "🌟",
        progress: 0,
        status: "future"
      },
    ],
  };

  // Smooth mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Ultra-smooth scroll
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const progress = Math.max(0, Math.min(1, -rect.top / (rect.height - window.innerHeight)));
            setScrollY(progress * 100);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth card reveal using Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => new Set([...prev, entry.target.id]));
            observer.unobserve(entry.target); // Stop observing once visible
          }
        });
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    Object.values(roadmapData).flat().forEach(milestone => {
      const cardElement = cardRefs.current[milestone.id];
      if (cardElement) {
        observer.observe(cardElement);
      }
    });

    return () => observer.disconnect();
  }, [roadmapData]);

  // Smooth floating particles
  const SmoothParticles = () => (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
   
    </div>
  );

  const YearBadge = ({ year }) => (
    <div className="flex justify-center mb-8 relative z-10">
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center border-2 shadow-xl hover:scale-110 transition-all duration-500 cursor-pointer backdrop-blur-sm"
        style={{
          background: 'linear-gradient(135deg, #094e54, #4ecdc4)',
          borderColor: '#4ecdc4',
          boxShadow: '0 0 20px rgba(78, 205, 196, 0.4)' // Reduced shadow
        }}
      >
        <span className="text-lg font-bold text-white font-mono">
          {year}
        </span>
      </div>
    </div>
  );
  const CompactCard = ({ milestone, globalIndex }) => {
    const [isHovered, setIsHovered] = useState(false);
    const isVisible = visibleCards.has(milestone.id);
    const isLeft = globalIndex % 2 === 0;

    const getStatusColor = (status) => {
      switch (status) {
        case 'completed': return '#00ff88';
        case 'active': return '#4ecdc4';
        case 'upcoming': return '#ffd700';
        case 'future': return '#888';
        default: return '#4ecdc4';
      }
    };

    return (
      <div
        ref={el => (cardRefs.current[milestone.id] = el)}
        id={milestone.id}
        className={`relative mb-8 ${isLeft ? 'lg:pr-8' : 'lg:pl-8'} lg:w-1/2 ${isLeft ? 'lg:ml-0' : 'lg:ml-auto'}`}
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)', // Simpler transform
          transition: 'opacity 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          transitionDelay: `${globalIndex * 0.04}s` // Slightly reduced delay
        }}
      >
        {/* Smooth connection line */}
        <div
          className={`absolute top-6 w-12 h-1 ${isLeft ? 'right-1.5' : 'left-0'} lg:block hidden rounded-full`}
          style={{
            background: `linear-gradient(135deg, #094e54, ${getStatusColor(milestone.status)})`,
            boxShadow: `0 0 6px ${getStatusColor(milestone.status)}50` // Reduced shadow
          }}
        />

        {/* Smooth timeline dot */}
        <div
          className={`absolute top-5 w-3 h-3 rounded-full border-2 border-gray-900 shadow-md ${isLeft ? 'right-1.5' : '-left-1.5'} lg:block hidden transition-all duration-300 z-10`}
          style={{
            background: getStatusColor(milestone.status),
            boxShadow: `0 0 6px ${getStatusColor(milestone.status)}` // Reduced shadow
          }}
        />

        <div
          className={`group relative backdrop-blur-md rounded-2xl p-5 border shadow-lg transition-all duration-300 cursor-pointer overflow-hidden ${
            isHovered ? 'scale-101 translate-y-[-2px]' : '' // Simpler hover transform
          }`}
          style={{
            background: `linear-gradient(135deg, rgba(9,78,84,0.3), rgba(78,205,196,0.1))`,
            borderColor: `${getStatusColor(milestone.status)}60`,
            boxShadow: isHovered
              ? `0 10px 20px -5px rgba(9,78,84,0.2), 0 0 0 1px ${getStatusColor(milestone.status)}30`
              : '0 8px 15px -5px rgba(9,78,84,0.15)', // Reduced hover shadow
            transform: isHovered ? 'translateY(-2px)' : 'translateY(0px)'
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Status indicator */}
          <div
            className="absolute top-3 right-3 w-2 h-2 rounded-full"
            style={{ backgroundColor: getStatusColor(milestone.status) }}
          />

          {/* Compact icon */}
          <div
            className="absolute top-3 right-8 w-8 h-8 rounded-lg flex items-center justify-center text-lg backdrop-blur-sm border transition-all duration-300"
            style={{
              background: `linear-gradient(135deg, rgba(9,78,84,0.5), rgba(78,205,196,0.3))`,
              borderColor: `${getStatusColor(milestone.status)}40`,
              transform: isHovered ? 'scale(1.05) rotate(2deg)' : 'scale(1)' // Reduced hover scale
            }}
          >
            {milestone.icon}
          </div>

          {/* Phase tag */}
          <div
            className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wide"
            style={{
              background: `linear-gradient(135deg, #094e54, ${getStatusColor(milestone.status)})`,
            }}
          >
            {milestone.phase}
          </div>

          {/* Compact title */}
          <h3 className="text-lg font-bold text-white mb-2 font-mono">
            {milestone.title}
          </h3>

          {/* Compact description */}
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            {milestone.description}
          </p>

          {/* Compact tags */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {milestone.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="px-2 py-1 text-white text-xs rounded-md border transition-all duration-300"
                style={{
                  background: `rgba(9,78,84,0.5)`,
                  borderColor: `${getStatusColor(milestone.status)}40`,
                  transform: isHovered ? 'translateY(-1px)' : 'translateY(0px)'
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Compact progress */}
          <div className="relative">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs text-gray-400">Progress</span>
              <span
                className="text-xs font-bold text-white px-2 py-0.5 rounded-full"
                style={{
                  background: `linear-gradient(135deg, #094e54, ${getStatusColor(milestone.status)})`
                }}
              >
                {milestone.progress}%
              </span>
            </div>
            <div className="w-full bg-gray-800/50 rounded-full h-2 overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{
                  width: isVisible ? `${milestone.progress}%` : '0%',
                  background: `linear-gradient(135deg, #094e54, ${getStatusColor(milestone.status)})`,
                  boxShadow: `0 0 6px ${getStatusColor(milestone.status)}60`
                }}
              />
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none rounded-2xl" />
        </div>
      </div>
    );
  };
  const SmoothTimeline = () => (
    <div
      className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 shadow-lg lg:block hidden rounded-full"
      style={{
        background: 'linear-gradient(180deg, #094e54, #4ecdc4)',
        boxShadow: '0 0 28px rgba(78, 205, 196, 0.4)' 
      }}
    >
      <div
        className="absolute top-0 w-full transition-all duration-700 rounded-full"
        style={{
          height: `${Math.min(scrollY, 100)}%`,
          background: 'linear-gradient(180deg, #4ecdc4, #ffffff)',
          boxShadow: '0 0 10px rgba(22, 192, 181, 0.6)' // Reduced shadow
        }}
      />
    </div>
  );

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); } /* Reduced float height */
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 15px rgba(78, 205, 196, 0.4); } /* Reduced glow */
          50% { box-shadow: 0 0 20px rgba(78, 205, 196, 0.6); } /* Reduced glow */
        }

        .scale-101 {
          transform: scale(1.01);
        }
      `}</style>

      <div
        ref={containerRef}
        className="relative min-h-screen text-white overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0a1a1d, #1a4b52, #2a6b70)'
        }}
      >
        {/* Smooth animated background */}
        <div
          className="absolute inset-0 opacity-50" // Reduced opacity
          style={{
            background: `
              radial-gradient(circle at 30% 70%, rgba(9,78,84,0.5) 0%, transparent 50%),
              radial-gradient(circle at 70% 30%, rgba(78,205,196,0.3) 0%, transparent 50%)
            `,
            transform: `translateX(${mousePosition.x * 4}px) translateY(${mousePosition.y * 4}px)`, // Reduced movement
            transition: 'transform 0.4s ease-out' // Reduced transition time
          }}
        />

        <SmoothParticles />

        {/* Compact header */}
       <div className="relative z-10 text-center py-16 px-4"> {/* Reduced padding */}
          <div className="relative inline-block">
            <div className="absolute -inset-6 bg-gradient-to-r from-[#005358] via-[#00a3b5] to-[#00c2d1] rounded-full blur-2xl opacity-15 animate-pulse"></div> {/* Reduced blur and opacity */}
            <h1 className="relative text-5xl md:text-7xl font-black bg-gradient-to-r from-[#005358] via-[#00a3b5] to-[#00c2d1] bg-clip-text text-transparent font-mono tracking-tighter hover:scale-103 transition-transform duration-500 cursor-default"> {/* Reduced scale and duration */}
              PROJECT NEXUS
            </h1>
          </div>
          <p
            className="text-xl md:text-xl text-[#00a3b5] font-light tracking-[0.15em] uppercase mt-3 hover:tracking-[0.2em] transition-all duration-300"
            style={{
              animation: 'subtitleFloat 3s ease-in-out infinite' /* Reduced animation duration */
            }}
          >
            Revolutionary Roadmap • 2024-2026
          </p>
        </div>

        {/* Compact main content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 pb-12"> {/* Reduced padding */}
          <div className="relative">
            <SmoothTimeline />

            {Object.entries(roadmapData).map(([year, milestones], yearIndex) => (
              <div key={year} className="relative mb-12"> {/* Reduced margin */}
                <YearBadge year={year} />
                <div className="relative lg:pl-4">
                  {milestones.map((milestone, index) => {
                    const globalIdx = yearIndex * 5 + index;
                    return (
                      <CompactCard
                        key={milestone.id}
                        milestone={milestone}
                        globalIndex={globalIdx}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Compact stats */}
          <div
            className="mt-12 backdrop-blur-md rounded-xl p-5 border shadow-lg"
            style={{
              background: 'linear-gradient(135deg, rgba(9,78,84,0.3), rgba(78,205,196,0.15))', /* Reduced opacity */
              borderColor: '#4ecdc480', /* Reduced border opacity */
              boxShadow: '0 10px 25px rgba(9,78,84,0.2)' /* Reduced shadow */
            }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center"> {/* Reduced gap */}
              {[
                { value: "13", label: "Total Phases" },
                { value: "3", label: "Years" },
                { value: "5", label: "Active 2024" },
                { value: "45%", label: "Complete" }
              ].map((stat, index) => (
                <div key={index} className="hover:scale-103 transition-transform duration-200"> {/* Reduced scale and duration */}
                  <h3 className="text-2xl font-black text-[#4ecdc4] mb-0.5 font-mono"> {/* Reduced text size and margin */}
                    {stat.value}
                  </h3>
                  <p className="text-gray-400 text-sm uppercase tracking-wide">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectRoadmap;
