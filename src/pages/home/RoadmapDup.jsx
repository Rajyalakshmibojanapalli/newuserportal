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
// import React, { useState, useEffect, useRef } from 'react';

// const ProjectRoadmap = () => {
//   const [scrollY, setScrollY] = useState(0);
//   const [visibleCards, setVisibleCards] = useState(new Set());
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const containerRef = useRef(null);
//   const cardRefs = useRef({}); // To hold refs for each card

//   const roadmapData = {
//     2024: [
//       {
//         id: 'p1-2024',
//         phase: "Phase 1",
//         title: "Concept Development",
//         description: "Foundation building with core team assembly and strategic planning frameworks.",
//         tags: ["Team Formation", "Strategy", "Planning"],
//         icon: "�",
//         progress: 100,
//         status: "completed"
//       },
//       {
//         id: 'p2-2024',
//         phase: "Phase 2",
//         title: "Smart Contract Development",
//         description: "Advanced blockchain architecture with security audits and protocols.",
//         tags: ["Smart Contracts", "Security", "Blockchain"],
//         icon: "🔒",
//         progress: 85,
//         status: "active"
//       },
//       {
//         id: 'p3-2024',
//         phase: "Phase 3",
//         title: "Platform Development",
//         description: "Digital platform with comprehensive documentation and specifications.",
//         tags: ["Platform", "Documentation", "UI/UX"],
//         icon: "📄",
//         progress: 70,
//         status: "active"
//       },
//       {
//         id: 'p4-2024',
//         phase: "Phase 4",
//         title: "Token Launch",
//         description: "Token launch with comprehensive marketing and fundraising campaigns.",
//         tags: ["Token", "Marketing", "Fundraising"],
//         icon: "💰",
//         progress: 40,
//         status: "upcoming"
//       },
//       {
//         id: 'p5-2024',
//         phase: "Phase 5",
//         title: "Mobile App Launch",
//         description: "Cross-platform mobile applications with seamless user experience.",
//         tags: ["Mobile", "Cross-Platform", "UX"],
//         icon: "📱",
//         progress: 25,
//         status: "upcoming"
//       },
//     ],
//     2025: [
//       {
//         id: 'p1-2025',
//         phase: "Phase 1",
//         title: "AI Integration",
//         description: "Advanced AI features with machine learning capabilities and automation.",
//         tags: ["AI", "Machine Learning", "Automation"],
//         icon: "🤖",
//         progress: 15,
//         status: "future"
//       },
//       {
//         id: 'p2-2025',
//         phase: "Phase 2",
//         title: "Metaverse Platform",
//         description: "Virtual reality ecosystem with NFT integration and digital assets.",
//         tags: ["Metaverse", "VR", "NFTs"],
//         icon: "🌐",
//         progress: 10,
//         status: "future"
//       },
//       {
//         id: 'p3-2025',
//         phase: "Phase 3",
//         title: "DeFi Ecosystem",
//         description: "Decentralized finance platform with yield farming and staking.",
//         tags: ["DeFi", "Yield Farming", "Staking"],
//         icon: "⚡",
//         progress: 5,
//         status: "future"
//       },
//       {
//         id: 'p4-2025',
//         phase: "Phase 4",
//         title: "Global Expansion",
//         description: "Worldwide market penetration with strategic partnerships.",
//         tags: ["Global", "Partnerships", "Expansion"],
//         icon: "🌍",
//         progress: 3,
//         status: "future"
//       },
//     ],
//     2026: [
//       {
//         id: 'p1-2026',
//         phase: "Phase 1",
//         title: "Advanced Technology",
//         description: "Next-generation features with quantum integration and security.",
//         tags: ["Quantum", "Advanced Tech", "Security"],
//         icon: "⚛️",
//         progress: 0,
//         status: "future"
//       },
//       {
//         id: 'p2-2026',
//         phase: "Phase 2",
//         title: "Neural Networks",
//         description: "Brain-computer interface and advanced neural processing systems.",
//         tags: ["Neural", "BCI", "Processing"],
//         icon: "🧠",
//         progress: 0,
//         status: "future"
//       },
//       {
//         id: 'p3-2026',
//         phase: "Phase 3",
//         title: "Space Integration",
//         description: "Satellite-based infrastructure and interplanetary connectivity.",
//         tags: ["Space", "Satellites", "Infrastructure"],
//         icon: "🛰️",
//         progress: 0,
//         status: "future"
//       },
//       {
//         id: 'p4-2026',
//         phase: "Phase 4",
//         title: "Universal Adoption",
//         description: "Complete global transformation and mass market adoption.",
//         tags: ["Universal", "Global", "Adoption"],
//         icon: "🌟",
//         progress: 0,
//         status: "future"
//       },
//     ],
//   };

//   // Smooth mouse tracking
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({
//         x: (e.clientX / window.innerWidth) * 2 - 1,
//         y: (e.clientY / window.innerHeight) * 2 - 1
//       });
//     };
//     window.addEventListener('mousemove', handleMouseMove, { passive: true });
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   // Ultra-smooth scroll
//   useEffect(() => {
//     let ticking = false;
//     const handleScroll = () => {
//       if (!ticking) {
//         requestAnimationFrame(() => {
//           if (containerRef.current) {
//             const rect = containerRef.current.getBoundingClientRect();
//             const progress = Math.max(0, Math.min(1, -rect.top / (rect.height - window.innerHeight)));
//             setScrollY(progress * 100);
//           }
//           ticking = false;
//         });
//         ticking = true;
//       }
//     };

//     window.addEventListener('scroll', handleScroll, { passive: true });
//     handleScroll();
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Smooth card reveal using Intersection Observer
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach(entry => {
//           if (entry.isIntersecting) {
//             setVisibleCards(prev => new Set([...prev, entry.target.id]));
//             observer.unobserve(entry.target); // Stop observing once visible
//           }
//         });
//       },
//       { threshold: 0.1 } // Adjust threshold as needed
//     );

//     Object.values(roadmapData).flat().forEach(milestone => {
//       const cardElement = cardRefs.current[milestone.id];
//       if (cardElement) {
//         observer.observe(cardElement);
//       }
//     });

//     return () => observer.disconnect();
//   }, [roadmapData]);

//   // Smooth floating particles
//   const SmoothParticles = () => (
//     <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">

//     </div>
//   );

//   const YearBadge = ({ year }) => (
//     <div className="flex justify-center mb-8 relative z-10">
//       <div
//         className="w-20 h-20 rounded-full flex items-center justify-center border-2 shadow-xl hover:scale-110 transition-all duration-500 cursor-pointer backdrop-blur-sm"
//         style={{
//           // background: 'linear-gradient(135deg, #094e54, #4ecdc4)',
//           borderColor: '#4ecdc4',
//           boxShadow: '0 0 20px rgba(78, 205, 196, 0.4)' // Reduced shadow
//         }}
//       >
//         <span className="text-lg font-bold text-white font-mono">
//           {year}
//         </span>
//       </div>
//     </div>
//   );
//   const CompactCard = ({ milestone, globalIndex }) => {
//     const [isHovered, setIsHovered] = useState(false);
//     const isVisible = visibleCards.has(milestone.id);
//     const isLeft = globalIndex % 2 === 0;

//     const getStatusColor = (status) => {
//       switch (status) {
//         case 'completed': return '#00ff88';
//         case 'active': return '#4ecdc4';
//         case 'upcoming': return '#ffd700';
//         case 'future': return '#888';
//         default: return '#4ecdc4';
//       }
//     };
//     return (
//       <div
//         ref={(el) => (cardRefs.current[milestone.id] = el)}
//         id={milestone.id}
//         className={`relative mb-8 ${isLeft ? 'lg:pr-8' : 'lg:pl-8'} lg:w-1/2 ${isLeft ? 'lg:ml-0' : 'lg:ml-auto'}`}
//         style={{
//           opacity: isVisible ? 1 : 0,
//           transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)',
//           transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
//           transitionDelay: `${globalIndex * 0.05}s`,
//           perspective: '1200px',
//         }}
//       >
//         {/* Line and Dot */}
//         <div
//           className={`absolute top-6 w-12 h-1 ${isLeft ? 'right-1.5' : 'left-0'} lg:block hidden rounded-full`}
//           style={{
//             background: `linear-gradient(135deg, #094e54, ${getStatusColor(milestone.status)})`,
//             boxShadow: `0 0 8px ${getStatusColor(milestone.status)}80`,
//           }}
//         />
//         <div
//           className={`absolute top-5 w-3 h-3 rounded-full border-2 border-gray-900 shadow-md ${isLeft ? 'right-1.5' : '-left-1.5'} lg:block hidden`}
//           style={{
//             backgroundColor: getStatusColor(milestone.status),
//             boxShadow: `0 0 10px ${getStatusColor(milestone.status)}`,
//           }}
//         />

//         {/* Milestone Card */}
//         <div
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//           className="group relative p-6 rounded-2xl border shadow-xl transform-gpu transition-transform duration-500 cursor-pointer"
//           style={{
//             background: 'linear-gradient(135deg, rgba(9,78,84,0.4), rgba(78,205,196,0.15))',
//             borderColor: `${getStatusColor(milestone.status)}66`,
//             transform: isHovered
//               ? 'rotateX(4deg) rotateY(-4deg) scale(1.04)'
//               : 'rotateX(0deg) rotateY(0deg) scale(1)',
//             boxShadow: isHovered
//               ? `0 15px 35px -5px ${getStatusColor(milestone.status)}99, 0 5px 10px rgba(0,0,0,0.2)`
//               : '0 8px 18px rgba(0,0,0,0.15)',
//           }}
//         >
//           {/* Status dot and icon */}
//           <div
//             className="absolute top-3 right-3 w-2 h-2 rounded-full"
//             style={{ backgroundColor: getStatusColor(milestone.status) }}
//           />
//           <div
//             className="absolute top-3 right-8 w-8 h-8 flex items-center justify-center text-lg rounded-md backdrop-blur border"
//             style={{
//               background: `linear-gradient(135deg, rgba(9,78,84,0.5), rgba(78,205,196,0.3))`,
//               borderColor: `${getStatusColor(milestone.status)}50`,
//               transform: isHovered ? 'scale(1.1)' : 'scale(1)',
//               transition: 'transform 0.3s ease',
//             }}
//           >
//             {milestone.icon}
//           </div>

//           {/* Phase */}
//           <div
//             className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wide"
//             style={{
//               background: `linear-gradient(135deg, #094e54, ${getStatusColor(milestone.status)})`,
//             }}
//           >
//             {milestone.phase}
//           </div>

//           {/* Title */}
//           <h3 className="text-lg font-bold text-white mb-2">{milestone.title}</h3>

//           {/* Description */}
//           <p className="text-sm text-gray-300 mb-3">{milestone.description}</p>

//           {/* Tags */}
//           <div className="flex flex-wrap gap-1.5 mb-3">
//             {milestone.tags.map((tag, i) => (
//               <span
//                 key={i}
//                 className="px-2 py-1 text-white text-xs rounded-md border"
//                 style={{
//                   background: `rgba(9,78,84,0.5)`,
//                   borderColor: `${getStatusColor(milestone.status)}40`,
//                 }}
//               >
//                 {tag}
//               </span>
//             ))}
//           </div>

//           {/* Progress */}
//           <div className="relative">
//             <div className="flex justify-between items-center mb-1">
//               <span className="text-xs text-gray-400">Progress</span>
//               <span
//                 className="text-xs font-bold text-white px-2 py-0.5 rounded-full"
//                 style={{
//                   background: `linear-gradient(135deg, #094e54, ${getStatusColor(milestone.status)})`,
//                 }}
//               >
//                 {milestone.progress}%
//               </span>
//             </div>
//             <div className="w-full bg-gray-700/40 rounded-full h-2">
//               <div
//                 className="h-full rounded-full transition-all duration-700"
//                 style={{
//                   width: isVisible ? `${milestone.progress}%` : '0%',
//                   background: `linear-gradient(135deg, #094e54, ${getStatusColor(milestone.status)})`,
//                   boxShadow: `0 0 5px ${getStatusColor(milestone.status)}88`,
//                 }}
//               />
//             </div>
//           </div>

//           {/* Overlay effect */}
//           <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none rounded-2xl" />
//         </div>
//       </div>
//     )

//   };
//   const SmoothTimeline = () => (
//     <div
//       className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 shadow-lg lg:block hidden rounded-full"
//       style={{
//         background: 'linear-gradient(180deg, #094e54, #4ecdc4)',
//         boxShadow: '0 0 28px rgba(78, 205, 196, 0.4)'
//       }}
//     >
//       <div
//         className="absolute top-0 w-full transition-all duration-700 rounded-full"
//         style={{
//           height: `${Math.min(scrollY, 100)}%`,
//           background: 'linear-gradient(180deg, #4ecdc4, #ffffff)',
//           boxShadow: '0 0 10px rgba(22, 192, 181, 0.6)' // Reduced shadow
//         }}
//       />
//     </div>
//   );

//   return (
//     <>
//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-8px); } /* Reduced float height */
//         }

//         @keyframes glow {
//           0%, 100% { box-shadow: 0 0 15px rgba(78, 205, 196, 0.4); } /* Reduced glow */
//           50% { box-shadow: 0 0 20px rgba(78, 205, 196, 0.6); } /* Reduced glow */
//         }

//         .scale-101 {
//           transform: scale(1.01);
//         }
//       `}</style>

//       <div
//         ref={containerRef}
//         className="relative min-h-screen text-white overflow-hidden"
//         style={{
//           background: 'linear-gradient(135deg, #0a1a1d, #1a4b52, #2a6b70)'
//         }}
//       >
//         {/* Smooth animated background */}
//         <div
//           className="absolute inset-0 opacity-50" // Reduced opacity
//           style={{
//             background: `
//               radial-gradient(circle at 30% 70%, rgba(9,78,84,0.5) 0%, transparent 50%),
//               radial-gradient(circle at 70% 30%, rgba(78,205,196,0.3) 0%, transparent 50%)
//             `,
//             transform: `translateX(${mousePosition.x * 4}px) translateY(${mousePosition.y * 4}px)`, // Reduced movement
//             transition: 'transform 0.4s ease-out' // Reduced transition time
//           }}
//         />

//         <SmoothParticles />

//         {/* Compact header */}
//         <div className="relative z-10 text-center py-16 px-4"> {/* Reduced padding */}
//           <div className="relative inline-block">
//             <div className="absolute -inset-6 bg-gradient-to-r from-[#005358] via-[#00a3b5] to-[#00c2d1] rounded-full blur-2xl opacity-15 animate-pulse"></div> {/* Reduced blur and opacity */}
//             <h1 className="relative text-5xl md:text-7xl font-black bg-gradient-to-r from-[#005358] via-[#00a3b5] to-[#00c2d1] bg-clip-text text-transparent font-mono tracking-tighter hover:scale-103 transition-transform duration-500 cursor-default"> {/* Reduced scale and duration */}
//               PROJECT NEXUS
//             </h1>
//           </div>
//           <p
//             className="text-xl md:text-xl text-[#00a3b5] font-light tracking-[0.15em] uppercase mt-3 hover:tracking-[0.2em] transition-all duration-300"
//             style={{
//               animation: 'subtitleFloat 3s ease-in-out infinite' /* Reduced animation duration */
//             }}
//           >
//             Revolutionary Roadmap • 2024-2026
//           </p>
//         </div>

//         {/* Compact main content */}
//         <div className="relative z-10 max-w-6xl mx-auto px-4 pb-12"> {/* Reduced padding */}
//           <div className="relative">
//             <SmoothTimeline />

//             {Object.entries(roadmapData).map(([year, milestones], yearIndex) => (
//               <div key={year} className="relative mb-12"> {/* Reduced margin */}
//                 <YearBadge year={year} />
//                 <div className="relative lg:pl-4">
//                   {milestones.map((milestone, index) => {
//                     const globalIdx = yearIndex * 5 + index;
//                     return (
//                       <CompactCard
//                         key={milestone.id}
//                         milestone={milestone}
//                         globalIndex={globalIdx}
//                       />
//                     );
//                   })}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Compact stats */}
//           <div
//             className="mt-12 backdrop-blur-md rounded-xl p-5 border shadow-lg"
//             style={{
//               background: 'linear-gradient(135deg, rgba(9,78,84,0.3), rgba(78,205,196,0.15))', /* Reduced opacity */
//               borderColor: '#4ecdc480', /* Reduced border opacity */
//               boxShadow: '0 10px 25px rgba(9,78,84,0.2)' /* Reduced shadow */
//             }}
//           >
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center"> {/* Reduced gap */}
//               {[
//                 { value: "13", label: "Total Phases" },
//                 { value: "3", label: "Years" },
//                 { value: "5", label: "Active 2024" },
//                 { value: "45%", label: "Complete" }
//               ].map((stat, index) => (
//                 <div key={index} className="hover:scale-103 transition-transform duration-200"> {/* Reduced scale and duration */}
//                   <h3 className="text-2xl font-black text-[#4ecdc4] mb-0.5 font-mono"> {/* Reduced text size and margin */}
//                     {stat.value}
//                   </h3>
//                   <p className="text-gray-400 text-sm uppercase tracking-wide">
//                     {stat.label}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProjectRoadmap;
// import React from 'react';

// const phaseData = [
//   {
//     status: "Live",
//     phaseNo: "Phase 1",
//     tokens: "10 Billion Tokens",
//     price: "Price INR 0.01 - 0.04 Paisa (0.00012-0.00046 USD)",
//     button: "Buy Now",
//   },
//   {
//     status: "Upcoming",
//     phaseNo: "Phase 2",
//     tokens: "20 Billion Tokens",
//     price: "Price INR 0.05 - 0.50 Paisa (0.00061 - 0.0061 USD)",
//     button: "Coming Soon",
//   },
//   {
//     status: "Upcoming",
//     phaseNo: "Phase 3",
//     tokens: "25 Billion Tokens",
//     price: "Price INR 0.60 - 1.53 - Paisa (0.0071 - 0.018 USD)",
//     button: "Coming Soon",
//   },
//   {
//     status: "Upcoming",
//     phaseNo: "Phase 4",
//     tokens: "30 Billion Tokens",
//     price: "Price INR 1.60 - 3.00 Paisa (0.091 - 0.036 USD)",
//     button: "Coming Soon",
//   },
//   {
//     status: "Upcoming",
//     phaseNo: "Phase 5",
//     tokens: "25 Billion Tokens",
//     price: "Price INR 3.15 - 4.10 Paisa (0.037 - 0.049 USD)",
//     button: "Coming Soon",
//   },
// ];

// const TokenRoadmap = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8" style={{background: 'linear-gradient(135deg, #095258 0%, #1c994a 50%, #095258 100%)'}}>
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-16">
//           <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
//             Token Sale <span className="text-transparent bg-clip-text bg-gradient-to-r" style={{backgroundImage: 'linear-gradient(to right, #bbcf28, #1c994a)'}}>Roadmap</span>
//           </h1>
//           <p className="text-xl text-gray-300">Join our phased token launch journey</p>
//         </div>
        
//         <div className="relative max-w-5xl mx-auto">
//           {/* Central Timeline */}
//           <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 z-0" style={{background: 'linear-gradient(to bottom, #bbcf28, #1c994a, #bbcf28)'}}></div>
          
//           {/* Timeline Phases */}
//           <div className="space-y-24">
//             {phaseData.map((phase, index) => (
//               <div key={index} className="relative grid grid-cols-2 gap-8 items-center min-h-[200px]">
                
//                 {/* Left Side - Even indices (0, 2, 4) */}
//                 {index % 2 === 0 ? (
//                   <div className="flex justify-end pr-4">
//                     <div className="w-80 relative">
//                       <div className={`relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:bg-white/15 ${
//                         phase.status === 'Live' ? 'ring-2' : ''
//                       }`} style={{
//                         ringColor: phase.status === 'Live' ? 'rgba(188, 207, 40, 0.5)' : 'transparent'
//                       }}>
//                         {/* Status Badge */}
//                         <div className="absolute -top-3 right-6">
//                           <span className={`px-4 py-1 rounded-full text-sm font-semibold ${
//                             phase.status === 'Live' 
//                               ? 'text-white shadow-lg' 
//                               : 'bg-gray-600 text-gray-200'
//                           }`} style={{
//                             backgroundColor: phase.status === 'Live' ? '#1c994a' : '#4b5563',
//                             boxShadow: phase.status === 'Live' ? '0 10px 25px rgba(28, 153, 74, 0.5)' : 'none'
//                           }}>
//                             {phase.status}
//                           </span>
//                         </div>
                        
//                         {/* Phase Content */}
//                         <div className="mt-4">
//                           <h3 className="text-2xl font-bold text-white mb-3">{phase.phaseNo}</h3>
                          
//                           <div className="space-y-3 mb-6">
//                             <div className="flex items-center space-x-2">
//                               <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#bbcf28'}}></div>
//                               <span className="font-medium" style={{color: '#bbcf28'}}>{phase.tokens}</span>
//                             </div>
                            
//                             <div className="text-gray-300 text-sm leading-relaxed">
//                               {phase.price}
//                             </div>
//                           </div>
                          
//                           <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
//                             phase.status === 'Live'
//                               ? 'text-white shadow-lg'
//                               : 'bg-gray-600 hover:bg-gray-700 text-gray-300 cursor-not-allowed'
//                           }`} style={{
//                             background: phase.status === 'Live' ? 'linear-gradient(to right, #1c994a, #bbcf28)' : '#4b5563',
//                             boxShadow: phase.status === 'Live' ? '0 10px 25px rgba(28, 153, 74, 0.25)' : 'none'
//                           }}>
//                             {phase.button}
//                           </button>
//                         </div>
                        
//                         {/* Connecting Line from right edge of left card */}
//                         <div className="absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2 w-8 h-0.5 z-10" style={{
//                           background: 'linear-gradient(to right, #bbcf28, #1c994a)'
//                         }}></div>
//                       </div>
//                     </div>
//                   </div>
//                 ) : (
//                   <div></div>
//                 )}
                
//                 {/* Right Side - Odd indices (1, 3) */}
//                 {index % 2 === 1 ? (
//                   <div className="flex justify-start pl-4">
//                     <div className="w-80 relative">
//                       <div className={`relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:bg-white/15 ${
//                         phase.status === 'Live' ? 'ring-2' : ''
//                       }`} style={{
//                         ringColor: phase.status === 'Live' ? 'rgba(188, 207, 40, 0.5)' : 'transparent'
//                       }}>
//                         {/* Status Badge */}
//                         <div className="absolute -top-3 left-6">
//                           <span className={`px-4 py-1 rounded-full text-sm font-semibold ${
//                             phase.status === 'Live' 
//                               ? 'text-white shadow-lg' 
//                               : 'bg-gray-600 text-gray-200'
//                           }`} style={{
//                             backgroundColor: phase.status === 'Live' ? '#1c994a' : '#4b5563',
//                             boxShadow: phase.status === 'Live' ? '0 10px 25px rgba(28, 153, 74, 0.5)' : 'none'
//                           }}>
//                             {phase.status}
//                           </span>
//                         </div>
                        
//                         {/* Phase Content */}
//                         <div className="mt-4">
//                           <h3 className="text-2xl font-bold text-white mb-3">{phase.phaseNo}</h3>
                          
//                           <div className="space-y-3 mb-6">
//                             <div className="flex items-center space-x-2">
//                               <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#bbcf28'}}></div>
//                               <span className="font-medium" style={{color: '#bbcf28'}}>{phase.tokens}</span>
//                             </div>
                            
//                             <div className="text-gray-300 text-sm leading-relaxed">
//                               {phase.price}
//                             </div>
//                           </div>
                          
//                           <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
//                             phase.status === 'Live'
//                               ? 'text-white shadow-lg'
//                               : 'bg-gray-600 hover:bg-gray-700 text-gray-300 cursor-not-allowed'
//                           }`} style={{
//                             background: phase.status === 'Live' ? 'linear-gradient(to right, #1c994a, #bbcf28)' : '#4b5563',
//                             boxShadow: phase.status === 'Live' ? '0 10px 25px rgba(28, 153, 74, 0.25)' : 'none'
//                           }}>
//                             {phase.button}
//                           </button>
//                         </div>
                        
//                         {/* Connecting Line from left edge of right card */}
//                         <div className="absolute top-1/2 left-0 transform -translate-x-full -translate-y-1/2 w-8 h-0.5 z-10" style={{
//                           background: 'linear-gradient(to left, #bbcf28, #1c994a)'
//                         }}></div>
//                       </div>
//                     </div>
//                   </div>
//                 ) : (
//                   <div></div>
//                 )}
                
//                 {/* Timeline Node - Always centered */}
//                 <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
//                   <div className={`w-6 h-6 rounded-full border-4 ${
//                     phase.status === 'Live' 
//                       ? 'border-4 shadow-lg' 
//                       : 'bg-gray-600 border-gray-500'
//                   }`} style={{
//                     backgroundColor: phase.status === 'Live' ? '#bbcf28' : '#6b7280',
//                     borderColor: phase.status === 'Live' ? '#1c994a' : '#6b7280',
//                     boxShadow: phase.status === 'Live' ? '0 10px 25px rgba(188, 207, 40, 0.5)' : 'none'
//                   }}>
//                     <div className={`absolute inset-0 rounded-full ${
//                       phase.status === 'Live' ? 'animate-ping' : ''
//                     }`} style={{backgroundColor: phase.status === 'Live' ? '#bbcf28' : 'transparent'}}></div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>      
//       </div>
//     </div>
//   );
// };

// export default TokenRoadmap;

// import React from 'react';

// const phaseData = [
//   {
//     status: "Live",
//     phaseNo: "Phase 1",
//     tokens: "10 Billion Tokens",
//     price: "Price INR 0.01 - 0.04 Paisa (0.00012-0.00046 USD)",
//     button: "Buy Now",
//   },
//   {
//     status: "Upcoming",
//     phaseNo: "Phase 2",
//     tokens: "20 Billion Tokens",
//     price: "Price INR 0.05 - 0.50 Paisa (0.00061 - 0.0061 USD)",
//     button: "Coming Soon",
//   },
//   {
//     status: "Upcoming",
//     phaseNo: "Phase 3",
//     tokens: "25 Billion Tokens",
//     price: "Price INR 0.60 - 1.53 - Paisa (0.0071 - 0.018 USD)",
//     button: "Coming Soon",
//   },
//   {
//     status: "Upcoming",
//     phaseNo: "Phase 4",
//     tokens: "30 Billion Tokens",
//     price: "Price INR 1.60 - 3.00 Paisa (0.091 - 0.036 USD)",
//     button: "Coming Soon",
//   },
//   {
//     status: "Upcoming",
//     phaseNo: "Phase 5",
//     tokens: "25 Billion Tokens",
//     price: "Price INR 3.15 - 4.10 Paisa (0.037 - 0.049 USD)",
//     button: "Coming Soon",
//   },
// ];

// const TokenRoadmap = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4 md:p-8" style={{background: 'linear-gradient(135deg, #095258 0%, #1c994a 50%, #095258 100%)'}}>
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-8 md:mb-16">
//           <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4">
//             Token Sale <span className="text-transparent bg-clip-text bg-gradient-to-r" style={{backgroundImage: 'linear-gradient(to right, #bbcf28, #1c994a)'}}>Roadmap</span>
//           </h1>
//           <p className="text-lg md:text-xl text-gray-300">Join our phased token launch journey</p>
//         </div>
        
//         <div className="relative max-w-5xl mx-auto">
//           {/* Central Timeline - Hidden on mobile */}
//           <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 z-0" style={{background: 'linear-gradient(to bottom, #bbcf28, #1c994a, #bbcf28)'}}></div>
          
//           {/* Left Timeline for mobile */}
//           <div className="md:hidden absolute left-6 h-full w-1 z-0" style={{background: 'linear-gradient(to bottom, #bbcf28, #1c994a, #bbcf28)'}}></div>
          
//           {/* Timeline Phases */}
//           <div className="space-y-8 md:space-y-24">
//             {phaseData.map((phase, index) => (
//               <div key={index} className="relative">
                
//                 {/* Desktop Layout - Alternating sides */}
//                 <div className="hidden md:grid md:grid-cols-2 md:gap-8 md:items-center md:min-h-[200px]">
                  
//                   {/* Left Side - Even indices (0, 2, 4) */}
//                   {index % 2 === 0 ? (
//                     <div className="flex justify-end pr-4">
//                       <div className="w-80 relative">
//                         <div className={`relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:bg-white/15 ${
//                           phase.status === 'Live' ? 'ring-2' : ''
//                         }`} style={{
//                           ringColor: phase.status === 'Live' ? 'rgba(188, 207, 40, 0.5)' : 'transparent'
//                         }}>
//                           {/* Status Badge */}
//                           <div className="absolute -top-3 right-6">
//                             <span className={`px-4 py-1 rounded-full text-sm font-semibold ${
//                               phase.status === 'Live' 
//                                 ? 'text-white shadow-lg' 
//                                 : 'bg-gray-600 text-gray-200'
//                             }`} style={{
//                               backgroundColor: phase.status === 'Live' ? '#1c994a' : '#4b5563',
//                               boxShadow: phase.status === 'Live' ? '0 10px 25px rgba(28, 153, 74, 0.5)' : 'none'
//                             }}>
//                               {phase.status}
//                             </span>
//                           </div>
                          
//                           {/* Phase Content */}
//                           <div className="mt-4">
//                             <h3 className="text-2xl font-bold text-white mb-3">{phase.phaseNo}</h3>
                            
//                             <div className="space-y-3 mb-6">
//                               <div className="flex items-center space-x-2">
//                                 <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#bbcf28'}}></div>
//                                 <span className="font-medium" style={{color: '#bbcf28'}}>{phase.tokens}</span>
//                               </div>
                              
//                               <div className="text-gray-300 text-sm leading-relaxed">
//                                 {phase.price}
//                               </div>
//                             </div>
                            
//                             <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
//                               phase.status === 'Live'
//                                 ? 'text-white shadow-lg'
//                                 : 'bg-gray-600 hover:bg-gray-700 text-gray-300 cursor-not-allowed'
//                             }`} style={{
//                               background: phase.status === 'Live' ? 'linear-gradient(to right, #1c994a, #bbcf28)' : '#4b5563',
//                               boxShadow: phase.status === 'Live' ? '0 10px 25px rgba(28, 153, 74, 0.25)' : 'none'
//                             }}>
//                               {phase.button}
//                             </button>
//                           </div>
                          
//                           {/* Connecting Line from right edge of left card */}
//                           <div className="absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2 w-8 h-0.5 z-10" style={{
//                             background: 'linear-gradient(to right, #bbcf28, #1c994a)'
//                           }}></div>
//                         </div>
//                       </div>
//                     </div>
//                   ) : (
//                     <div></div>
//                   )}
                  
//                   {/* Right Side - Odd indices (1, 3) */}
//                   {index % 2 === 1 ? (
//                     <div className="flex justify-start pl-4">
//                       <div className="w-80 relative">
//                         <div className={`relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:bg-white/15 ${
//                           phase.status === 'Live' ? 'ring-2' : ''
//                         }`} style={{
//                           ringColor: phase.status === 'Live' ? 'rgba(188, 207, 40, 0.5)' : 'transparent'
//                         }}>
//                           {/* Status Badge */}
//                           <div className="absolute -top-3 left-6">
//                             <span className={`px-4 py-1 rounded-full text-sm font-semibold ${
//                               phase.status === 'Live' 
//                                 ? 'text-white shadow-lg' 
//                                 : 'bg-gray-600 text-gray-200'
//                             }`} style={{
//                               backgroundColor: phase.status === 'Live' ? '#1c994a' : '#4b5563',
//                               boxShadow: phase.status === 'Live' ? '0 10px 25px rgba(28, 153, 74, 0.5)' : 'none'
//                             }}>
//                               {phase.status}
//                             </span>
//                           </div>
                          
//                           {/* Phase Content */}
//                           <div className="mt-4">
//                             <h3 className="text-2xl font-bold text-white mb-3">{phase.phaseNo}</h3>
                            
//                             <div className="space-y-3 mb-6">
//                               <div className="flex items-center space-x-2">
//                                 <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#bbcf28'}}></div>
//                                 <span className="font-medium" style={{color: '#bbcf28'}}>{phase.tokens}</span>
//                               </div>
                              
//                               <div className="text-gray-300 text-sm leading-relaxed">
//                                 {phase.price}
//                               </div>
//                             </div>
                            
//                             <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
//                               phase.status === 'Live'
//                                 ? 'text-white shadow-lg'
//                                 : 'bg-gray-600 hover:bg-gray-700 text-gray-300 cursor-not-allowed'
//                             }`} style={{
//                               background: phase.status === 'Live' ? 'linear-gradient(to right, #1c994a, #bbcf28)' : '#4b5563',
//                               boxShadow: phase.status === 'Live' ? '0 10px 25px rgba(28, 153, 74, 0.25)' : 'none'
//                             }}>
//                               {phase.button}
//                             </button>
//                           </div>
                          
//                           {/* Connecting Line from left edge of right card */}
//                           <div className="absolute top-1/2 left-0 transform -translate-x-full -translate-y-1/2 w-8 h-0.5 z-10" style={{
//                             background: 'linear-gradient(to left, #bbcf28, #1c994a)'
//                           }}></div>
//                         </div>
//                       </div>
//                     </div>
//                   ) : (
//                     <div></div>
//                   )}
                  
//                   {/* Timeline Node - Always centered on desktop */}
//                   <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
//                     <div className={`w-6 h-6 rounded-full border-4 ${
//                       phase.status === 'Live' 
//                         ? 'border-4 shadow-lg' 
//                         : 'bg-gray-600 border-gray-500'
//                     }`} style={{
//                       backgroundColor: phase.status === 'Live' ? '#bbcf28' : '#6b7280',
//                       borderColor: phase.status === 'Live' ? '#1c994a' : '#6b7280',
//                       boxShadow: phase.status === 'Live' ? '0 10px 25px rgba(188, 207, 40, 0.5)' : 'none'
//                     }}>
//                       <div className={`absolute inset-0 rounded-full ${
//                         phase.status === 'Live' ? 'animate-ping' : ''
//                       }`} style={{backgroundColor: phase.status === 'Live' ? '#bbcf28' : 'transparent'}}></div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Mobile Layout - All cards on right side */}
//                 <div className="md:hidden flex items-center">
//                   {/* Timeline Node - Perfectly aligned with left timeline */}
//                   <div className="absolute left-6 transform -translate-x-1/2 z-20">
//                     <div className={`w-4 h-4 rounded-full border-2 ${
//                       phase.status === 'Live' 
//                         ? 'border-2 shadow-lg' 
//                         : 'bg-gray-600 border-gray-500'
//                     }`} style={{
//                       backgroundColor: phase.status === 'Live' ? '#bbcf28' : '#6b7280',
//                       borderColor: phase.status === 'Live' ? '#1c994a' : '#6b7280',
//                       boxShadow: phase.status === 'Live' ? '0 8px 20px rgba(188, 207, 40, 0.4)' : 'none'
//                     }}>
//                       <div className={`absolute inset-0 rounded-full ${
//                         phase.status === 'Live' ? 'animate-ping' : ''
//                       }`} style={{backgroundColor: phase.status === 'Live' ? '#bbcf28' : 'transparent'}}></div>
//                     </div>
//                   </div>

//                   {/* Connecting Line */}
//                   <div className="ml-8 w-6 h-0.5 z-10" style={{
//                     background: 'linear-gradient(to right, #bbcf28, #1c994a)'
//                   }}></div>

//                   {/* Card - Always on right */}
//                   <div className="flex-1 ml-2">
//                     <div className={`relative bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-xl transform transition-all duration-300 ${
//                       phase.status === 'Live' ? 'ring-2' : ''
//                     }`} style={{
//                       ringColor: phase.status === 'Live' ? 'rgba(188, 207, 40, 0.5)' : 'transparent'
//                     }}>
//                       {/* Status Badge */}
//                       <div className="absolute -top-2 right-4">
//                         <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
//                           phase.status === 'Live' 
//                             ? 'text-white shadow-lg' 
//                             : 'bg-gray-600 text-gray-200'
//                         }`} style={{
//                           backgroundColor: phase.status === 'Live' ? '#1c994a' : '#4b5563',
//                           boxShadow: phase.status === 'Live' ? '0 8px 20px rgba(28, 153, 74, 0.4)' : 'none'
//                         }}>
//                           {phase.status}
//                         </span>
//                       </div>
                      
//                       {/* Phase Content */}
//                       <div className="mt-3">
//                         <h3 className="text-xl font-bold text-white mb-2">{phase.phaseNo}</h3>
                        
//                         <div className="space-y-2 mb-4">
//                           <div className="flex items-center space-x-2">
//                             <div className="w-1.5 h-1.5 rounded-full" style={{backgroundColor: '#bbcf28'}}></div>
//                             <span className="font-medium text-sm" style={{color: '#bbcf28'}}>{phase.tokens}</span>
//                           </div>
                          
//                           <div className="text-gray-300 text-xs leading-relaxed">
//                             {phase.price}
//                           </div>
//                         </div>
                        
//                         <button className={`w-full py-2.5 px-4 rounded-lg font-semibold text-sm transition-all duration-300 ${
//                           phase.status === 'Live'
//                             ? 'text-white shadow-lg'
//                             : 'bg-gray-600 hover:bg-gray-700 text-gray-300 cursor-not-allowed'
//                         }`} style={{
//                           background: phase.status === 'Live' ? 'linear-gradient(to right, #1c994a, #bbcf28)' : '#4b5563',
//                           boxShadow: phase.status === 'Live' ? '0 8px 20px rgba(28, 153, 74, 0.2)' : 'none'
//                         }}>
//                           {phase.button}
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
                
//               </div>
//             ))}
//           </div>
//         </div>      
//       </div>
//     </div>
//   );
// };

// export default TokenRoadmap;



import React from 'react';

const phaseData = [
  {
    status: "Live",
    phaseNo: "Phase 1",
    tokens: "10 Billion Tokens",
    price: "Price INR 0.01 - 0.04 Paisa (0.00012-0.00046 USD)",
    button: "Buy Now",
    // icon: "🚀",
    description: "Launch phase with exclusive early-bird benefits",
  },
  {
    status: "Upcoming",
    phaseNo: "Phase 2",
    tokens: "20 Billion Tokens",
    price: "Price INR 0.05 - 0.50 Paisa (0.00061 - 0.0061 USD)",
    button: "Coming Soon",
    // icon: "⭐",
    description: "Enhanced rewards and premium token allocation",
  },
  {
    status: "Upcoming",
    phaseNo: "Phase 3",
    tokens: "25 Billion Tokens",
    price: "Price INR 0.60 - 1.53 - Paisa (0.0071 - 0.018 USD)",
    button: "Coming Soon",
    // icon: "💎",
    description: "Diamond tier with exclusive staking benefits",
  },
  {
    status: "Upcoming",
    phaseNo: "Phase 4",
    tokens: "30 Billion Tokens",
    price: "Price INR 1.60 - 3.00 Paisa (0.091 - 0.036 USD)",
    button: "Coming Soon",
    // icon: "👑",
    description: "Premium phase with governance token access",
  },
  {
    status: "Upcoming",
    phaseNo: "Phase 5",
    tokens: "25 Billion Tokens",
    price: "Price INR 3.15 - 4.10 Paisa (0.037 - 0.049 USD)",
    button: "Coming Soon",
    // icon: "🏆",
    description: "Ultimate tier with maximum rewards potential",
  },
];

const TokenRoadmap = () => {
  return (
    <div className="min-h-screen relative overflow-hidden p-4 md:p-8" style={{
      background: 'linear-gradient(135deg, #095258 0%, #1c994a 50%, #095258 100%)'
    }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 rounded-full opacity-10 animate-pulse" style={{
          background: 'radial-gradient(circle, #bbcf28 0%, transparent 70%)'
        }}></div>
        <div className="absolute top-40 right-32 w-96 h-96 rounded-full opacity-5 animate-pulse delay-1000" style={{
          background: 'radial-gradient(circle, #1c994a 0%, transparent 70%)'
        }}></div>
        <div className="absolute bottom-32 left-40 w-64 h-64 rounded-full opacity-10 animate-pulse delay-2000" style={{
          background: 'radial-gradient(circle, #bbcf28 0%, transparent 70%)'
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-8 md:mb-16">
          <div className="inline-block p-1 rounded-full mb-6" style={{
            background: 'linear-gradient(45deg, #bbcf28, #1c994a, #bbcf28)'
          }}>
            <div className="bg-black px-6 py-2 rounded-full">
              <span className="text-sm font-medium text-white tracking-widest uppercase">Token Sale</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight">
            Token Sale{' '}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-green-400 to-yellow-300 animate-pulse">
                Roadmap
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-300 to-transparent opacity-50"></div>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light">
            Join our phased token launch journey
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Central Timeline - Enhanced */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 z-0" style={{
            background: 'linear-gradient(to bottom, #bbcf28 0%, #1c994a 50%, #bbcf28 100%)',
            boxShadow: '0 0 20px rgba(188, 207, 40, 0.3)'
          }}></div>
          
          {/* Left Timeline for mobile - Enhanced */}
          <div className="md:hidden absolute left-6 h-full w-1 z-0" style={{
            background: 'linear-gradient(to bottom, #bbcf28 0%, #1c994a 50%, #bbcf28 100%)',
            boxShadow: '0 0 15px rgba(188, 207, 40, 0.3)'
          }}></div>
          
          {/* Timeline Phases */}
          <div className="space-y-8 md:space-y-24">
            {phaseData.map((phase, index) => (
              <div key={index} className="relative">
                
                {/* Desktop Layout - Alternating sides */}
                <div className="hidden md:grid md:grid-cols-2 md:gap-8 md:items-center md:min-h-[200px]">
                  
                  {/* Left Side - Even indices (0, 2, 4) */}
                  {index % 2 === 0 ? (
                    <div className="flex justify-end pr-4">
                      <div className="w-80 relative group">
                        <div className={`relative backdrop-blur-xl rounded-3xl p-8 border shadow-2xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
                          phase.status === 'Live' 
                            ? 'bg-gradient-to-br from-green-500/20 via-green-400/15 to-green-600/20 border-green-400/40 ring-2 ring-green-400/50' 
                            : 'bg-gradient-to-br from-gray-800/40 via-gray-700/40 to-gray-800/40 border-gray-600/30 hover:border-gray-500/50'
                        }`} style={{
                          backdropFilter: 'blur(20px)',
                          boxShadow: phase.status === 'Live' 
                            ? '0 25px 50px rgba(28, 153, 74, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)' 
                            : '0 25px 50px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
                        }}>
                          {/* Floating Icon */}
                          <div className="absolute -top-6 left-8 text-4xl transform group-hover:scale-110 transition-transform duration-300">
                            {phase.icon}
                          </div>
                          
                          {/* Status Badge - Redesigned */}
                          <div className="absolute -top-4 right-8">
                            <div className={`relative px-6 py-2 rounded-full text-sm font-bold tracking-wide ${
                              phase.status === 'Live' 
                                ? 'text-white shadow-xl' 
                                : 'bg-gray-700/80 text-gray-300 border border-gray-600/50'
                            }`} style={{
                              background: phase.status === 'Live' 
                                ? 'linear-gradient(135deg, #1c994a 0%, #bbcf28 100%)' 
                                : undefined,
                              boxShadow: phase.status === 'Live' 
                                ? '0 15px 30px rgba(28, 153, 74, 0.4), 0 0 20px rgba(28, 153, 74, 0.3)' 
                                : 'none'
                            }}>
                              {phase.status}
                              {phase.status === 'Live' && (
                                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                              )}
                            </div>
                          </div>
                          
                          {/* Content */}
                          <div className="mt-8">
                            <h3 className="text-3xl font-black text-white mb-2 tracking-tight">{phase.phaseNo}</h3>
                            <p className="text-gray-400 text-sm mb-6 italic">{phase.description}</p>
                            
                            <div className="space-y-4 mb-8">
                              <div className="flex items-center space-x-3 p-3 rounded-xl bg-black/20 border border-green-400/20">
                                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-green-300 animate-pulse"></div>
                                <span className="font-bold text-green-300">{phase.tokens}</span>
                              </div>
                              
                              <div className="p-3 rounded-xl bg-black/20 border border-gray-600/20">
                                <div className="text-gray-300 text-sm leading-relaxed font-medium">
                                  {phase.price}
                                </div>
                              </div>
                            </div>
                            
                            <button className={`w-full py-4 px-8 rounded-2xl font-bold text-lg tracking-wide transition-all duration-300 transform hover:scale-105 ${
                              phase.status === 'Live'
                                ? 'text-white shadow-2xl hover:shadow-green-400/25'
                                : 'bg-gray-700 hover:bg-gray-600 text-gray-300 cursor-not-allowed'
                            }`} style={{
                              background: phase.status === 'Live' 
                                ? 'linear-gradient(135deg, #1c994a 0%, #bbcf28 50%, #1c994a 100%)' 
                                : undefined,
                              boxShadow: phase.status === 'Live' 
                                ? '0 20px 40px rgba(28, 153, 74, 0.3)' 
                                : 'none'
                            }}>
                              {phase.button}
                            </button>
                          </div>
                          
                          {/* Connecting Line Enhanced */}
                          <div className="absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2 w-8 h-1 z-10" style={{
                            background: 'linear-gradient(to right, #bbcf28, #1c994a)',
                            boxShadow: '0 0 10px rgba(188, 207, 40, 0.5)'
                          }}></div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div></div>
                  )}
                  
                  {/* Right Side - Odd indices (1, 3) */}
                  {index % 2 === 1 ? (
                    <div className="flex justify-start pl-4">
                      <div className="w-80 relative group">
                        <div className={`relative backdrop-blur-xl rounded-3xl p-8 border shadow-2xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
                          phase.status === 'Live' 
                            ? 'bg-gradient-to-br from-green-500/20 via-green-400/15 to-green-600/20 border-green-400/40 ring-2 ring-green-400/50' 
                            : 'bg-gradient-to-br from-gray-800/40 via-gray-700/40 to-gray-800/40 border-gray-600/30 hover:border-gray-500/50'
                        }`} style={{
                          backdropFilter: 'blur(20px)',
                          boxShadow: phase.status === 'Live' 
                            ? '0 25px 50px rgba(28, 153, 74, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)' 
                            : '0 25px 50px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
                        }}>
                          {/* Floating Icon */}
                          <div className="absolute -top-6 right-8 text-4xl transform group-hover:scale-110 transition-transform duration-300">
                            {phase.icon}
                          </div>
                          
                          {/* Status Badge */}
                          <div className="absolute -top-4 left-8">
                            <div className={`relative px-6 py-2 rounded-full text-sm font-bold tracking-wide ${
                              phase.status === 'Live' 
                                ? 'text-white shadow-xl' 
                                : 'bg-gray-700/80 text-gray-300 border border-gray-600/50'
                            }`} style={{
                              background: phase.status === 'Live' 
                                ? 'linear-gradient(135deg, #1c994a 0%, #bbcf28 100%)' 
                                : undefined,
                              boxShadow: phase.status === 'Live' 
                                ? '0 15px 30px rgba(28, 153, 74, 0.4), 0 0 20px rgba(28, 153, 74, 0.3)' 
                                : 'none'
                            }}>
                              {phase.status}
                              {phase.status === 'Live' && (
                                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                              )}
                            </div>
                          </div>
                          
                          {/* Content */}
                          <div className="mt-8">
                            <h3 className="text-3xl font-black text-white mb-2 tracking-tight">{phase.phaseNo}</h3>
                            <p className="text-gray-400 text-sm mb-6 italic">{phase.description}</p>
                            
                            <div className="space-y-4 mb-8">
                              <div className="flex items-center space-x-3 p-3 rounded-xl bg-black/20 border border-green-400/20">
                                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-green-300 animate-pulse"></div>
                                <span className="font-bold text-green-300">{phase.tokens}</span>
                              </div>
                              
                              <div className="p-3 rounded-xl bg-black/20 border border-gray-600/20">
                                <div className="text-gray-300 text-sm leading-relaxed font-medium">
                                  {phase.price}
                                </div>
                              </div>
                            </div>
                            
                            <button className={`w-full py-4 px-8 rounded-2xl font-bold text-lg tracking-wide transition-all duration-300 transform hover:scale-105 ${
                              phase.status === 'Live'
                                ? 'text-white shadow-2xl hover:shadow-green-400/25'
                                : 'bg-gray-700 hover:bg-gray-600 text-gray-300 cursor-not-allowed'
                            }`} style={{
                              background: phase.status === 'Live' 
                                ? 'linear-gradient(135deg, #1c994a 0%, #bbcf28 50%, #1c994a 100%)' 
                                : undefined,
                              boxShadow: phase.status === 'Live' 
                                ? '0 20px 40px rgba(28, 153, 74, 0.3)' 
                                : 'none'
                            }}>
                              {phase.button}
                            </button>
                          </div>
                          
                          {/* Connecting Line Enhanced */}
                          <div className="absolute top-1/2 left-0 transform -translate-x-full -translate-y-1/2 w-8 h-1 z-10" style={{
                            background: 'linear-gradient(to left, #bbcf28, #1c994a)',
                            boxShadow: '0 0 10px rgba(188, 207, 40, 0.5)'
                          }}></div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div></div>
                  )}
                  
                  {/* Timeline Node - Enhanced */}
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className={`relative w-8 h-8 rounded-full border-4 ${
                      phase.status === 'Live' 
                        ? 'border-4 shadow-2xl' 
                        : 'bg-gray-600 border-gray-500'
                    }`} style={{
                      backgroundColor: phase.status === 'Live' ? '#bbcf28' : '#6b7280',
                      borderColor: phase.status === 'Live' ? '#1c994a' : '#6b7280',
                      boxShadow: phase.status === 'Live' 
                        ? '0 0 30px rgba(188, 207, 40, 0.6), inset 0 2px 4px rgba(255, 255, 255, 0.2)' 
                        : 'none'
                    }}>
                      {phase.status === 'Live' && (
                        <>
                          <div className="absolute inset-0 rounded-full animate-ping bg-green-400 opacity-75"></div>
                          <div className="absolute inset-2 rounded-full bg-white opacity-30"></div>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Mobile Layout - Enhanced */}
                <div className="md:hidden flex items-center">
                  {/* Timeline Node */}
                  <div className="absolute left-6 transform -translate-x-1/2 z-20">
                    <div className={`relative w-6 h-6 rounded-full border-2 ${
                      phase.status === 'Live' 
                        ? 'border-2 shadow-xl' 
                        : 'bg-gray-600 border-gray-500'
                    }`} style={{
                      backgroundColor: phase.status === 'Live' ? '#bbcf28' : '#6b7280',
                      borderColor: phase.status === 'Live' ? '#1c994a' : '#6b7280',
                      boxShadow: phase.status === 'Live' 
                        ? '0 0 20px rgba(188, 207, 40, 0.5)' 
                        : 'none'
                    }}>
                      {phase.status === 'Live' && (
                        <div className="absolute inset-0 rounded-full animate-ping bg-yellow-400 opacity-75"></div>
                      )}
                    </div>
                  </div>

                  {/* Connecting Line */}
                  <div className="ml-8 w-8 h-1 z-10" style={{
                    background: 'linear-gradient(to right, #bbcf28, #1c994a)',
                    boxShadow: '0 0 8px rgba(188, 207, 40, 0.4)'
                  }}></div>

                  {/* Card - Mobile Enhanced */}
                  <div className="flex-1 ml-3">
                    <div className={`relative backdrop-blur-xl rounded-2xl p-5 border shadow-xl transform transition-all duration-300 ${
                      phase.status === 'Live' 
                        ? 'bg-gradient-to-br from-green-500/20 via-green-400/15 to-green-600/20 border-green-400/30' 
                        : 'bg-gradient-to-br from-gray-800/40 via-gray-700/40 to-gray-800/40 border-gray-600/30'
                    }`} style={{
                      backdropFilter: 'blur(15px)',
                      boxShadow: phase.status === 'Live' 
                        ? '0 20px 40px rgba(28, 153, 74, 0.15)' 
                        : '0 20px 40px rgba(0, 0, 0, 0.2)'
                    }}>
                      {/* Icon */}
                      <div className="absolute -top-3 left-4 text-2xl">
                        {phase.icon}
                      </div>
                      
                      {/* Status Badge */}
                      <div className="absolute -top-3 right-4">
                        <span className={`px-4 py-1 rounded-full text-xs font-bold ${
                          phase.status === 'Live' 
                            ? 'text-white shadow-lg' 
                            : 'bg-gray-700 text-gray-300'
                        }`} style={{
                          background: phase.status === 'Live' 
                            ? 'linear-gradient(135deg, #1c994a, #bbcf28)' 
                            : undefined,
                          boxShadow: phase.status === 'Live' 
                            ? '0 10px 20px rgba(28, 153, 74, 0.3)' 
                            : 'none'
                        }}>
                          {phase.status}
                        </span>
                      </div>
                      
                      {/* Content */}
                      <div className="mt-4">
                        <h3 className="text-xl font-black text-white mb-1">{phase.phaseNo}</h3>
                        <p className="text-gray-400 text-xs mb-4 italic">{phase.description}</p>
                        
                        <div className="space-y-3 mb-5">
                          <div className="flex items-center space-x-2 p-2 rounded-lg bg-black/20">
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-green-300"></div>
                            <span className="font-bold text-green-300 text-sm">{phase.tokens}</span>
                          </div>
                          
                          <div className="p-2 rounded-lg bg-black/20">
                            <div className="text-gray-300 text-xs leading-relaxed">
                              {phase.price}
                            </div>
                          </div>
                        </div>
                        
                        <button className={`w-full py-3 px-6 rounded-xl font-bold text-sm transition-all duration-300 ${
                          phase.status === 'Live'
                            ? 'text-white shadow-xl'
                            : 'bg-gray-700 text-gray-300 cursor-not-allowed'
                        }`} style={{
                          background: phase.status === 'Live' 
                            ? 'linear-gradient(135deg, #1c994a, #bbcf28)' 
                            : undefined,
                          boxShadow: phase.status === 'Live' 
                            ? '0 15px 30px rgba(28, 153, 74, 0.2)' 
                            : 'none'
                        }}>
                          {phase.button}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            ))}
          </div>
        </div>      
      </div>
    </div>
  );
};

export default TokenRoadmap;