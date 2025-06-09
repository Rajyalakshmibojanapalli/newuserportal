// // // import React, { useState, useEffect, useRef } from 'react';

// // // const ProjectRoadmap = () => {
// // //   const [scrollY, setScrollY] = useState(0);
// // //   const [visibleCards, setVisibleCards] = useState(new Set());
// // //   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
// // //   const containerRef = useRef(null);

// // //   const roadmapData = {
// // //     2024: [
// // //       { 
// // //         id: 'p1-2024',
// // //         phase: "Phase 1", 
// // //         title: "Concept Development",
// // //         description: "Foundation building with core team assembly and strategic planning frameworks.",
// // //         tags: ["Team Formation", "Strategy", "Planning"],
// // //         icon: "🚀",
// // //         progress: 100,
// // //         status: "completed"
// // //       },
// // //       { 
// // //         id: 'p2-2024',
// // //         phase: "Phase 2", 
// // //         title: "Smart Contract Development",
// // //         description: "Advanced blockchain architecture with security audits and protocols.",
// // //         tags: ["Smart Contracts", "Security", "Blockchain"],
// // //         icon: "🔒",
// // //         progress: 85,
// // //         status: "active"
// // //       },
// // //       { 
// // //         id: 'p3-2024',
// // //         phase: "Phase 3", 
// // //         title: "Platform Development",
// // //         description: "Digital platform with comprehensive documentation and specifications.",
// // //         tags: ["Platform", "Documentation", "UI/UX"],
// // //         icon: "📄",
// // //         progress: 70,
// // //         status: "active"
// // //       },
// // //       { 
// // //         id: 'p4-2024',
// // //         phase: "Phase 4", 
// // //         title: "Token Launch",
// // //         description: "Token launch with comprehensive marketing and fundraising campaigns.",
// // //         tags: ["Token", "Marketing", "Fundraising"],
// // //         icon: "💰",
// // //         progress: 40,
// // //         status: "upcoming"
// // //       },
// // //       { 
// // //         id: 'p5-2024',
// // //         phase: "Phase 5", 
// // //         title: "Mobile App Launch",
// // //         description: "Cross-platform mobile applications with seamless user experience.",
// // //         tags: ["Mobile", "Cross-Platform", "UX"],
// // //         icon: "📱",
// // //         progress: 25,
// // //         status: "upcoming"
// // //       },
// // //     ],
// // //     2025: [
// // //       { 
// // //         id: 'p1-2025',
// // //         phase: "Phase 1", 
// // //         title: "AI Integration",
// // //         description: "Advanced AI features with machine learning capabilities and automation.",
// // //         tags: ["AI", "Machine Learning", "Automation"],
// // //         icon: "🤖",
// // //         progress: 15,
// // //         status: "future"
// // //       },
// // //       { 
// // //         id: 'p2-2025',
// // //         phase: "Phase 2", 
// // //         title: "Metaverse Platform",
// // //         description: "Virtual reality ecosystem with NFT integration and digital assets.",
// // //         tags: ["Metaverse", "VR", "NFTs"],
// // //         icon: "🌐",
// // //         progress: 10,
// // //         status: "future"
// // //       },
// // //       { 
// // //         id: 'p3-2025',
// // //         phase: "Phase 3", 
// // //         title: "DeFi Ecosystem",
// // //         description: "Decentralized finance platform with yield farming and staking.",
// // //         tags: ["DeFi", "Yield Farming", "Staking"],
// // //         icon: "⚡",
// // //         progress: 5,
// // //         status: "future"
// // //       },
// // //       { 
// // //         id: 'p4-2025',
// // //         phase: "Phase 4", 
// // //         title: "Global Expansion",
// // //         description: "Worldwide market penetration with strategic partnerships.",
// // //         tags: ["Global", "Partnerships", "Expansion"],
// // //         icon: "🌍",
// // //         progress: 3,
// // //         status: "future"
// // //       },
// // //     ],
// // //     2026: [
// // //       { 
// // //         id: 'p1-2026',
// // //         phase: "Phase 1", 
// // //         title: "Advanced Technology",
// // //         description: "Next-generation features with quantum integration and security.",
// // //         tags: ["Quantum", "Advanced Tech", "Security"],
// // //         icon: "⚛️",
// // //         progress: 0,
// // //         status: "future"
// // //       },
// // //       { 
// // //         id: 'p2-2026',
// // //         phase: "Phase 2", 
// // //         title: "Neural Networks",
// // //         description: "Brain-computer interface and advanced neural processing systems.",
// // //         tags: ["Neural", "BCI", "Processing"],
// // //         icon: "🧠",
// // //         progress: 0,
// // //         status: "future"
// // //       },
// // //       { 
// // //         id: 'p3-2026',
// // //         phase: "Phase 3", 
// // //         title: "Space Integration",
// // //         description: "Satellite-based infrastructure and interplanetary connectivity.",
// // //         tags: ["Space", "Satellites", "Infrastructure"],
// // //         icon: "🛰️",
// // //         progress: 0,
// // //         status: "future"
// // //       },
// // //       { 
// // //         id: 'p4-2026',
// // //         phase: "Phase 4", 
// // //         title: "Universal Adoption",
// // //         description: "Complete global transformation and mass market adoption.",
// // //         tags: ["Universal", "Global", "Adoption"],
// // //         icon: "🌟",
// // //         progress: 0,
// // //         status: "future"
// // //       },
// // //     ],
// // //   };

// // //   // Smooth mouse tracking
// // //   useEffect(() => {
// // //     const handleMouseMove = (e) => {
// // //       setMousePosition({ 
// // //         x: (e.clientX / window.innerWidth) * 2 - 1, 
// // //         y: (e.clientY / window.innerHeight) * 2 - 1 
// // //       });
// // //     };
// // //     window.addEventListener('mousemove', handleMouseMove, { passive: true });
// // //     return () => window.removeEventListener('mousemove', handleMouseMove);
// // //   }, []);

// // //   // Ultra-smooth scroll
// // //   useEffect(() => {
// // //     let ticking = false;
// // //     const handleScroll = () => {
// // //       if (!ticking) {
// // //         requestAnimationFrame(() => {
// // //           if (containerRef.current) {
// // //             const rect = containerRef.current.getBoundingClientRect();
// // //             const progress = Math.max(0, Math.min(1, -rect.top / (rect.height - window.innerHeight)));
// // //             setScrollY(progress * 100);
// // //           }
// // //           ticking = false;
// // //         });
// // //         ticking = true;
// // //       }
// // //     };

// // //     window.addEventListener('scroll', handleScroll, { passive: true });
// // //     handleScroll();
// // //     return () => window.removeEventListener('scroll', handleScroll);
// // //   }, []);

// // //   // Smooth card reveal
// // //   useEffect(() => {
// // //     const allCardIds = Object.values(roadmapData).flat().map(m => m.id);
// // //     allCardIds.forEach((id, index) => {
// // //       setTimeout(() => {
// // //         setVisibleCards(prev => new Set([...prev, id]));
// // //       }, index * 100);
// // //     });
// // //   }, []);

// // //   // Smooth floating particles
// // //   const SmoothParticles = () => (
// // //     <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
// // //       {[...Array(20)].map((_, i) => (
// // //         <div
// // //           key={i}
// // //           className="absolute rounded-full opacity-40"
// // //           style={{
// // //             width: `${2 + Math.random() * 3}px`,
// // //             height: `${2 + Math.random() * 3}px`,
// // //             left: `${Math.random() * 100}%`,
// // //             top: `${Math.random() * 100}%`,
// // //             background: 'linear-gradient(45deg, #094e54, #4ecdc4)',
// // //             transform: `
// // //               translateX(${mousePosition.x * 10}px) 
// // //               translateY(${mousePosition.y * 10 + Math.sin(scrollY * 0.1 + i) * 20}px)
// // //             `,
// // //             transition: 'transform 0.3s ease-out',
// // //             boxShadow: '0 0 10px rgba(78, 205, 196, 0.5)',
// // //           }}
// // //         />
// // //       ))}
// // //     </div>
// // //   );

// // //   // Compact year badge
// // //   const YearBadge = ({ year }) => (
// // //     <div className="flex justify-center mb-8 relative z-10">
// // //       <div 
// // //         className="w-20 h-20 rounded-full flex items-center justify-center border-2 shadow-xl hover:scale-110 transition-all duration-500 cursor-pointer backdrop-blur-sm"
// // //         style={{
// // //           background: 'linear-gradient(135deg, #094e54, #4ecdc4)',
// // //           borderColor: '#4ecdc4',
// // //           boxShadow: '0 0 30px rgba(78, 205, 196, 0.5)'
// // //         }}
// // //       >
// // //         <span className="text-lg font-bold text-white font-mono">
// // //           {year}
// // //         </span>
// // //       </div>
// // //     </div>
// // //   );

// // //   // Compact milestone card
// // //   const CompactCard = ({ milestone, globalIndex }) => {
// // //     const [isHovered, setIsHovered] = useState(false);
// // //     const isVisible = visibleCards.has(milestone.id);
// // //     const isLeft = globalIndex % 2 === 0;

// // //     const getStatusColor = (status) => {
// // //       switch (status) {
// // //         case 'completed': return '#00ff88';
// // //         case 'active': return '#4ecdc4';
// // //         case 'upcoming': return '#ffd700';
// // //         case 'future': return '#888';
// // //         default: return '#4ecdc4';
// // //       }
// // //     };

// // //     return (
// // //       <div
// // //         id={milestone.id}
// // //         className={`relative mb-8 ${isLeft ? 'lg:pr-8' : 'lg:pl-8'} lg:w-1/2 ${isLeft ? 'lg:ml-0' : 'lg:ml-auto'}`}
// // //         style={{
// // //           transform: isVisible 
// // //             ? 'translateY(0px) scale(1)' 
// // //             : 'translateY(30px) scale(0.95)',
// // //           opacity: isVisible ? 1 : 0,
// // //           transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
// // //           transitionDelay: `${globalIndex * 0.08}s`
// // //         }}
// // //       >
// // //         {/* Smooth connection line */}
// // //         <div 
// // //           className={`absolute top-6 w-12 h-1 ${isLeft ? 'right-0' : 'left-0'} lg:block hidden rounded-full`}
// // //           style={{
// // //             background: `linear-gradient(135deg, #094e54, ${getStatusColor(milestone.status)})`,
// // //             boxShadow: `0 0 10px ${getStatusColor(milestone.status)}50`
// // //           }}
// // //         />

// // //         {/* Smooth timeline dot */}
// // //         <div 
// // //           className={`absolute top-5 w-3 h-3 rounded-full border-2 border-gray-900 shadow-lg ${isLeft ? '-right-1.5' : '-left-1.5'} lg:block hidden transition-all duration-300 z-10`}
// // //           style={{
// // //             background: getStatusColor(milestone.status),
// // //             boxShadow: `0 0 15px ${getStatusColor(milestone.status)}`
// // //           }}
// // //         />

// // //         <div
// // //           className={`group relative backdrop-blur-md rounded-2xl p-5 border shadow-lg transition-all duration-500 cursor-pointer overflow-hidden ${
// // //             isHovered ? 'scale-102 -rotate-0.5' : ''
// // //           }`}
// // //           style={{
// // //             background: `linear-gradient(135deg, rgba(9,78,84,0.3), rgba(78,205,196,0.1))`,
// // //             borderColor: `${getStatusColor(milestone.status)}60`,
// // //             boxShadow: isHovered 
// // //               ? `0 20px 40px -10px rgba(9,78,84,0.3), 0 0 0 1px ${getStatusColor(milestone.status)}30` 
// // //               : '0 8px 20px -5px rgba(9,78,84,0.2)',
// // //             transform: isHovered ? 'translateY(-5px)' : 'translateY(0px)'
// // //           }}
// // //           onMouseEnter={() => setIsHovered(true)}
// // //           onMouseLeave={() => setIsHovered(false)}
// // //         >
// // //           {/* Status indicator */}
// // //           <div 
// // //             className="absolute top-3 right-3 w-2 h-2 rounded-full"
// // //             style={{ backgroundColor: getStatusColor(milestone.status) }}
// // //           />

// // //           {/* Compact icon */}
// // //           <div 
// // //             className="absolute top-3 right-8 w-8 h-8 rounded-lg flex items-center justify-center text-lg backdrop-blur-sm border transition-all duration-300"
// // //             style={{
// // //               background: `linear-gradient(135deg, rgba(9,78,84,0.5), rgba(78,205,196,0.3))`,
// // //               borderColor: `${getStatusColor(milestone.status)}40`,
// // //               transform: isHovered ? 'scale(1.1) rotate(5deg)' : 'scale(1)'
// // //             }}
// // //           >
// // //             {milestone.icon}
// // //           </div>

// // //           {/* Phase tag */}
// // //           <div 
// // //             className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wide"
// // //             style={{
// // //               background: `linear-gradient(135deg, #094e54, ${getStatusColor(milestone.status)})`,
// // //             }}
// // //           >
// // //             {milestone.phase}
// // //           </div>

// // //           {/* Compact title */}
// // //           <h3 className="text-lg font-bold text-white mb-2 font-mono">
// // //             {milestone.title}
// // //           </h3>

// // //           {/* Compact description */}
// // //           <p className="text-gray-300 text-sm leading-relaxed mb-3">
// // //             {milestone.description}
// // //           </p>

// // //           {/* Compact tags */}
// // //           <div className="flex flex-wrap gap-1.5 mb-3">
// // //             {milestone.tags.map((tag, tagIndex) => (
// // //               <span
// // //                 key={tagIndex}
// // //                 className="px-2 py-1 text-white text-xs rounded-md border transition-all duration-300"
// // //                 style={{
// // //                   background: `rgba(9,78,84,0.5)`,
// // //                   borderColor: `${getStatusColor(milestone.status)}40`,
// // //                   transform: isHovered ? 'translateY(-1px)' : 'translateY(0px)'
// // //                 }}
// // //               >
// // //                 {tag}
// // //               </span>
// // //             ))}
// // //           </div>

// // //           {/* Compact progress */}
// // //           <div className="relative">
// // //             <div className="flex justify-between items-center mb-2">
// // //               <span className="text-xs text-gray-400">Progress</span>
// // //               <span 
// // //                 className="text-xs font-bold text-white px-2 py-0.5 rounded-full"
// // //                 style={{
// // //                   background: `linear-gradient(135deg, #094e54, ${getStatusColor(milestone.status)})`
// // //                 }}
// // //               >
// // //                 {milestone.progress}%
// // //               </span>
// // //             </div>
// // //             <div className="w-full bg-gray-800/50 rounded-full h-2 overflow-hidden">
// // //               <div
// // //                 className="h-full rounded-full transition-all duration-1000"
// // //                 style={{ 
// // //                   width: isVisible ? `${milestone.progress}%` : '0%',
// // //                   background: `linear-gradient(135deg, #094e54, ${getStatusColor(milestone.status)})`,
// // //                   boxShadow: `0 0 10px ${getStatusColor(milestone.status)}60`
// // //                 }}
// // //               />
// // //             </div>
// // //           </div>

// // //           {/* Subtle hover effect */}
// // //           <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
// // //         </div>
// // //       </div>
// // //     );
// // //   };

// // //   // Smooth timeline
// // //   const SmoothTimeline = () => (
// // //     <div 
// // //       className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 shadow-lg lg:block hidden rounded-full"
// // //       style={{
// // //         background: 'linear-gradient(180deg, #094e54, #4ecdc4)',
// // //         boxShadow: '0 0 10px rgba(78, 205, 196, 0.5)'
// // //       }}
// // //     >
// // //       <div 
// // //         className="absolute top-0 w-full transition-all duration-700 rounded-full"
// // //         style={{
// // //           height: `${Math.min(scrollY, 100)}%`,
// // //           background: 'linear-gradient(180deg, #4ecdc4, #ffffff)',
// // //           boxShadow: '0 0 15px rgba(78, 205, 196, 0.8)'
// // //         }}
// // //       />
// // //     </div>
// // //   );

// // //   return (
// // //     <>
// // //       <style jsx>{`
// // //         @keyframes float {
// // //           0%, 100% { transform: translateY(0px); }
// // //           50% { transform: translateY(-10px); }
// // //         }

// // //         @keyframes glow {
// // //           0%, 100% { box-shadow: 0 0 20px rgba(78, 205, 196, 0.5); }
// // //           50% { box-shadow: 0 0 30px rgba(78, 205, 196, 0.8); }
// // //         }

// // //         .scale-102 {
// // //           transform: scale(1.02);
// // //         }
// // //       `}</style>

// // //       <div 
// // //         ref={containerRef}
// // //         className="relative min-h-screen text-white overflow-hidden"
// // //         style={{
// // //           background: 'linear-gradient(135deg, #0a1a1d, #1a4b52, #2a6b70)'
// // //         }}
// // //       >
// // //         {/* Smooth animated background */}
// // //         <div 
// // //           className="absolute inset-0 opacity-60"
// // //           style={{
// // //             background: `
// // //               radial-gradient(circle at 30% 70%, rgba(9,78,84,0.6) 0%, transparent 50%),
// // //               radial-gradient(circle at 70% 30%, rgba(78,205,196,0.4) 0%, transparent 50%)
// // //             `,
// // //             transform: `translateX(${mousePosition.x * 5}px) translateY(${mousePosition.y * 5}px)`,
// // //             transition: 'transform 0.5s ease-out'
// // //           }}
// // //         />

// // //         <SmoothParticles />

// // //         {/* Compact header */}
// // //        <div className="relative z-10 text-center py-20 px-4">
// // //           <div className="relative inline-block">
// // //             <div className="absolute -inset-8 bg-gradient-to-r from-[#005358] via-[#00a3b5] to-[#00c2d1] rounded-full blur-3xl opacity-20 animate-pulse"></div>
// // //             <h1 className="relative text-6xl md:text-8xl font-black bg-gradient-to-r from-[#005358] via-[#00a3b5] to-[#00c2d1] bg-clip-text text-transparent font-mono tracking-tighter hover:scale-105 transition-transform duration-700 cursor-default">
// // //               PROJECT NEXUS
// // //             </h1>
// // //           </div>
// // //           <p 
// // //             className="text-xl md:text-2xl text-[#00a3b5] font-light tracking-[0.2em] uppercase mt-4 hover:tracking-[0.3em] transition-all duration-500"
// // //             style={{ 
// // //               animation: 'subtitleFloat 4s ease-in-out infinite'
// // //             }}
// // //           >
// // //             Revolutionary Roadmap • 2024-2026
// // //           </p>
// // //         </div>

// // //         {/* Compact main content */}
// // //         <div className="relative z-10 max-w-6xl mx-auto px-4 pb-16">
// // //           <div className="relative">
// // //             <SmoothTimeline />

// // //             {Object.entries(roadmapData).map(([year, milestones], yearIndex) => (
// // //               <div key={year} className="relative mb-16">
// // //                 <YearBadge year={year} />
// // //                 <div className="relative lg:pl-4">
// // //                   {milestones.map((milestone, index) => {
// // //                     const globalIdx = yearIndex * 5 + index;
// // //                     return (
// // //                       <CompactCard
// // //                         key={milestone.id}
// // //                         milestone={milestone}
// // //                         globalIndex={globalIdx}
// // //                       />
// // //                     );
// // //                   })}
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>

// // //           {/* Compact stats */}
// // //           <div 
// // //             className="mt-16 backdrop-blur-md rounded-2xl p-6 border shadow-lg"
// // //             style={{
// // //               background: 'linear-gradient(135deg, rgba(9,78,84,0.4), rgba(78,205,196,0.2))',
// // //               borderColor: '#4ecdc4',
// // //               boxShadow: '0 15px 35px rgba(9,78,84,0.3)'
// // //             }}
// // //           >
// // //             <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
// // //               {[
// // //                 { value: "13", label: "Total Phases" },
// // //                 { value: "3", label: "Years" },
// // //                 { value: "5", label: "Active 2024" },
// // //                 { value: "45%", label: "Complete" }
// // //               ].map((stat, index) => (
// // //                 <div key={index} className="hover:scale-105 transition-transform duration-300">
// // //                   <h3 className="text-3xl font-black text-[#4ecdc4] mb-1 font-mono">
// // //                     {stat.value}
// // //                   </h3>
// // //                   <p className="text-gray-400 text-sm uppercase tracking-wide">
// // //                     {stat.label}
// // //                   </p>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </>
// // //   );
// // // };

// // // export default ProjectRoadmap;
// // import React, { useState, useEffect, useRef } from 'react';

// // const ProjectRoadmap = () => {
// //     const [scrollY, setScrollY] = useState(0);
// //     const [visibleCards, setVisibleCards] = useState(new Set());
// //     const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
// //     const containerRef = useRef(null);
// //     const cardRefs = useRef({}); // To hold refs for each card

// //     const roadmapData = {
// //         2024: [
// //             {
// //                 id: 'p1-2024',
// //                 phase: "Phase 1",
// //                 title: "Concept Development",
// //                 description: "Foundation building with core team assembly and strategic planning frameworks.",
// //                 tags: ["Team Formation", "Strategy", "Planning"],
// //                 icon: "🚀",
// //                 progress: 100,
// //                 status: "completed"
// //             },
// //             {
// //                 id: 'p2-2024',
// //                 phase: "Phase 2",
// //                 title: "Smart Contract Development",
// //                 description: "Advanced blockchain architecture with security audits and protocols.",
// //                 tags: ["Smart Contracts", "Security", "Blockchain"],
// //                 icon: "🔒",
// //                 progress: 85,
// //                 status: "active"
// //             },
// //             {
// //                 id: 'p3-2024',
// //                 phase: "Phase 3",
// //                 title: "Platform Development",
// //                 description: "Digital platform with comprehensive documentation and specifications.",
// //                 tags: ["Platform", "Documentation", "UI/UX"],
// //                 icon: "📄",
// //                 progress: 70,
// //                 status: "active"
// //             },
// //             {
// //                 id: 'p4-2024',
// //                 phase: "Phase 4",
// //                 title: "Token Launch",
// //                 description: "Token launch with comprehensive marketing and fundraising campaigns.",
// //                 tags: ["Token", "Marketing", "Fundraising"],
// //                 icon: "💰",
// //                 progress: 40,
// //                 status: "upcoming"
// //             },
// //             {
// //                 id: 'p5-2024',
// //                 phase: "Phase 5",
// //                 title: "Mobile App Launch",
// //                 description: "Cross-platform mobile applications with seamless user experience.",
// //                 tags: ["Mobile", "Cross-Platform", "UX"],
// //                 icon: "📱",
// //                 progress: 25,
// //                 status: "upcoming"
// //             },
// //         ],
// //         2025: [
// //             {
// //                 id: 'p1-2025',
// //                 phase: "Phase 1",
// //                 title: "AI Integration",
// //                 description: "Advanced AI features with machine learning capabilities and automation.",
// //                 tags: ["AI", "Machine Learning", "Automation"],
// //                 icon: "🤖",
// //                 progress: 15,
// //                 status: "future"
// //             },
// //             {
// //                 id: 'p2-2025',
// //                 phase: "Phase 2",
// //                 title: "Metaverse Platform",
// //                 description: "Virtual reality ecosystem with NFT integration and digital assets.",
// //                 tags: ["Metaverse", "VR", "NFTs"],
// //                 icon: "🌐",
// //                 progress: 10,
// //                 status: "future"
// //             },
// //             {
// //                 id: 'p3-2025',
// //                 phase: "Phase 3",
// //                 title: "DeFi Ecosystem",
// //                 description: "Decentralized finance platform with yield farming and staking.",
// //                 tags: ["DeFi", "Yield Farming", "Staking"],
// //                 icon: "⚡",
// //                 progress: 5,
// //                 status: "future"
// //             },
// //             {
// //                 id: 'p4-2025',
// //                 phase: "Phase 4",
// //                 title: "Global Expansion",
// //                 description: "Worldwide market penetration with strategic partnerships.",
// //                 tags: ["Global", "Partnerships", "Expansion"],
// //                 icon: "🌍",
// //                 progress: 3,
// //                 status: "future"
// //             },
// //         ],
// //         2026: [
// //             {
// //                 id: 'p1-2026',
// //                 phase: "Phase 1",
// //                 title: "Advanced Technology",
// //                 description: "Next-generation features with quantum integration and security.",
// //                 tags: ["Quantum", "Advanced Tech", "Security"],
// //                 icon: "⚛️",
// //                 progress: 0,
// //                 status: "future"
// //             },
// //             {
// //                 id: 'p2-2026',
// //                 phase: "Phase 2",
// //                 title: "Neural Networks",
// //                 description: "Brain-computer interface and advanced neural processing systems.",
// //                 tags: ["Neural", "BCI", "Processing"],
// //                 icon: "🧠",
// //                 progress: 0,
// //                 status: "future"
// //             },
// //             {
// //                 id: 'p3-2026',
// //                 phase: "Phase 3",
// //                 title: "Space Integration",
// //                 description: "Satellite-based infrastructure and interplanetary connectivity.",
// //                 tags: ["Space", "Satellites", "Infrastructure"],
// //                 icon: "🛰️",
// //                 progress: 0,
// //                 status: "future"
// //             },
// //             {
// //                 id: 'p4-2026',
// //                 phase: "Phase 4",
// //                 title: "Universal Adoption",
// //                 description: "Complete global transformation and mass market adoption.",
// //                 tags: ["Universal", "Global", "Adoption"],
// //                 icon: "�",
// //                 progress: 0,
// //                 status: "future"
// //             },
// //         ],
// //     };

// //     // Smooth mouse tracking
// //     useEffect(() => {
// //         const handleMouseMove = (e) => {
// //             setMousePosition({
// //                 x: (e.clientX / window.innerWidth) * 2 - 1,
// //                 y: (e.clientY / window.innerHeight) * 2 - 1
// //             });
// //         };
// //         window.addEventListener('mousemove', handleMouseMove, { passive: true });
// //         return () => window.removeEventListener('mousemove', handleMouseMove);
// //     }, []);

// //     // Ultra-smooth scroll
// //     useEffect(() => {
// //         let ticking = false;
// //         const handleScroll = () => {
// //             if (!ticking) {
// //                 requestAnimationFrame(() => {
// //                     if (containerRef.current) {
// //                         const rect = containerRef.current.getBoundingClientRect();
// //                         const progress = Math.max(0, Math.min(1, -rect.top / (rect.height - window.innerHeight)));
// //                         setScrollY(progress * 100);
// //                     }
// //                     ticking = false;
// //                 });
// //                 ticking = true;
// //             }
// //         };

// //         window.addEventListener('scroll', handleScroll, { passive: true });
// //         handleScroll();
// //         return () => window.removeEventListener('scroll', handleScroll);
// //     }, []);

// //     // Smooth card reveal using Intersection Observer
// //     useEffect(() => {
// //         const observer = new IntersectionObserver(
// //             (entries) => {
// //                 entries.forEach(entry => {
// //                     if (entry.isIntersecting) {
// //                         setVisibleCards(prev => new Set([...prev, entry.target.id]));
// //                         observer.unobserve(entry.target); // Stop observing once visible
// //                     }
// //                 });
// //             },
// //             { threshold: 0.1 } // Adjust threshold as needed
// //         );

// //         Object.values(roadmapData).flat().forEach(milestone => {
// //             const cardElement = cardRefs.current[milestone.id];
// //             if (cardElement) {
// //                 observer.observe(cardElement);
// //             }
// //         });

// //         return () => observer.disconnect();
// //     }, [roadmapData]);

// //     // Smooth floating particles
// //     const SmoothParticles = () => (
// //         <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
// //             {[...Array(15)].map((_, i) => ( // Reduced particle count
// //                 <div
// //                     key={i}
// //                     className="absolute rounded-full opacity-40"
// //                     style={{
// //                         width: `${2 + Math.random() * 3}px`,
// //                         height: `${2 + Math.random() * 3}px`,
// //                         left: `${Math.random() * 100}%`,
// //                         top: `${Math.random() * 100}%`,
// //                         background: 'linear-gradient(45deg, #094e54, #4ecdc4)',
// //                         transform: `
// //                             translateX(${mousePosition.x * 8}px)
// //                             translateY(${mousePosition.y * 8 + Math.sin(scrollY * 0.1 + i) * 15}px) // Slightly reduced Y offset
// //                         `,
// //                         transition: 'transform 0.2s ease-out, opacity 0.2s ease-out', // Added opacity transition
// //                         boxShadow: '0 0 8px rgba(78, 205, 196, 0.4)', // Slightly reduced shadow
// //                     }}
// //                 />
// //             ))}
// //         </div>
// //     );

// //     // Compact year badge
// //     const YearBadge = ({ year }) => (
// //         <div className="flex justify-center mb-8 relative z-10">
// //             <div
// //                 className="w-20 h-20 rounded-full flex items-center justify-center border-2 shadow-xl hover:scale-110 transition-all duration-500 cursor-pointer backdrop-blur-sm"
// //                 style={{
// //                     background: 'linear-gradient(135deg, #094e54, #4ecdc4)',
// //                     borderColor: '#4ecdc4',
// //                     boxShadow: '0 0 20px rgba(78, 205, 196, 0.4)' // Reduced shadow
// //                 }}
// //             >
// //                 <span className="text-lg font-bold text-white font-mono">
// //                     {year}
// //                 </span>
// //             </div>
// //         </div>
// //     );

// //     // Compact milestone card (optimized transitions)
// //     const CompactCard = ({ milestone, globalIndex }) => {
// //         const [isHovered, setIsHovered] = useState(false);
// //         const isVisible = visibleCards.has(milestone.id);
// //         const isLeft = globalIndex % 2 === 0;

// //         const getStatusColor = (status) => {
// //             switch (status) {
// //                 case 'completed': return '#00ff88';
// //                 case 'active': return '#4ecdc4';
// //                 case 'upcoming': return '#ffd700';
// //                 case 'future': return '#888';
// //                 default: return '#4ecdc4';
// //             }
// //         };

// //         return (
// //             <div
// //                 ref={el => (cardRefs.current[milestone.id] = el)}
// //                 id={milestone.id}
// //                 className={`relative mb-8 ${isLeft ? 'lg:pr-8' : 'lg:pl-8'} lg:w-1/2 ${isLeft ? 'lg:ml-0' : 'lg:ml-auto'}`}
// //                 style={{
// //                     opacity: isVisible ? 1 : 0,
// //                     transform: isVisible ? 'translateY(0)' : 'translateY(20px)', // Simpler transform
// //                     transition: 'opacity 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
// //                     transitionDelay: `${globalIndex * 0.04}s` // Slightly reduced delay
// //                 }}
// //             >
// //                 {/* Smooth connection line */}
// //                 <div
// //                     className={`absolute top-6 w-12 h-1 ${isLeft ? 'right-0' : 'left-0'} lg:block hidden rounded-full`}
// //                     style={{
// //                         background: `linear-gradient(135deg, #094e54, ${getStatusColor(milestone.status)})`,
// //                         boxShadow: `0 0 6px ${getStatusColor(milestone.status)}50` // Reduced shadow
// //                     }}
// //                 />

// //                 {/* Smooth timeline dot */}
// //                 <div
// //                     className={`absolute top-5 w-3 h-3 rounded-full border-2 border-gray-900 shadow-md ${isLeft ? '-right-1.5' : '-left-1.5'} lg:block hidden transition-all duration-300 z-10`}
// //                     style={{
// //                         background: getStatusColor(milestone.status),
// //                         boxShadow: `0 0 6px ${getStatusColor(milestone.status)}` // Reduced shadow
// //                     }}
// //                 />

// //                 <div
// //                     className={`group relative backdrop-blur-md rounded-2xl p-5 border shadow-lg transition-all duration-300 cursor-pointer overflow-hidden ${
// //                         isHovered ? 'scale-101 translate-y-[-2px]' : '' // Simpler hover transform
// //                     }`}
// //                     style={{
// //                         background: `linear-gradient(135deg, rgba(9,78,84,0.3), rgba(78,205,196,0.1))`,
// //                         borderColor: `${getStatusColor(milestone.status)}40`,
// //                         boxShadow: isHovered
// //                             ? `0 10px 20px -5px rgba(9,78,84,0.3), 0 0 0 1px ${getStatusColor(milestone.status)}30`
// //                             : '0 5px 15px -5px rgba(9,78,84,0.2)', // Reduced shadow
// //                         transform: isHovered ? 'translateY(-2px) scale(1.01)' : 'translateY(0px) scale(1)' // Combined scale and translate
// //                     }}
// //                     onMouseEnter={() => setIsHovered(true)}
// //                     onMouseLeave={() => setIsHovered(false)}
// //                 >
// //                     {/* Status indicator */}
// //                     <div
// //                         className="absolute top-3 right-3 w-2 h-2 rounded-full"
// //                         style={{ backgroundColor: getStatusColor(milestone.status) }}
// //                     />

// //                     {/* Compact icon (simplified hover) */}
// //                     <div
// //                         className="absolute top-3 right-8 w-8 h-8 rounded-lg flex items-center justify-center text-lg backdrop-blur-sm border transition-transform duration-200"
// //                         style={{
// //                             background: `linear-gradient(135deg, rgba(9,78,84,0.5), rgba(78,205,196,0.3))`,
// //                             borderColor: `${getStatusColor(milestone.status)}40`,
// //                             transform: isHovered ? 'scale(1.05)' : 'scale(1)'
// //                         }}
// //                     >
// //                         {milestone.icon}
// //                     </div>

// //                     {/* Phase tag */}
// //                     <div
// //                         className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wide"
// //                         style={{
// //                             background: `linear-gradient(135deg, #094e54, ${getStatusColor(milestone.status)})`,
// //                         }}
// //                     >
// //                         {milestone.phase}
// //                     </div>

// //                     {/* Compact title */}
// //                     <h3 className="text-lg font-bold text-white mb-2 font-mono">
// //                         {milestone.title}
// //                     </h3>

// //                     {/* Compact description */}
// //                     <p className="text-gray-300 text-sm leading-relaxed mb-3">
// //                         {milestone.description}
// //                     </p>

// //                     {/* Compact tags (simplified hover) */}
// //                     <div className="flex flex-wrap gap-1.5 mb-3">
// //                         {milestone.tags.map((tag, tagIndex) => (
// //                             <span
// //                                 key={tagIndex}
// //                                 className="px-2 py-1 text-white text-xs rounded-md border transition-transform duration-200"
// //                                 style={{
// //                                     background: `rgba(9,78,84,0.5)`,
// //                                     borderColor: `${getStatusColor(milestone.status)}40`,
// //                                     transform: isHovered ? 'translateY(-1px)' : 'translateY(0px)'
// //                                 }}
// //                             >
// //                                 {tag}
// //                             </span>
// //                         ))}
// //                     </div>

// //                     {/* Compact progress */}
// //                     <div className="relative">
// //                         <div className="flex justify-between items-center mb-2">
// //                             <span className="text-xs text-gray-400">Progress</span>
// //                             <span
// //                                 className="text-xs font-bold text-white px-2 py-0.5 rounded-full"
// //                                 style={{
// //                                     background: `linear-gradient(135deg, #094e54, ${getStatusColor(milestone.status)})`
// //                                 }}
// //                             >
// //                                 {milestone.progress}%
// //                             </span>
// //                         </div>
// //                         <div className="w-full bg-gray-800/50 rounded-full h-2 overflow-hidden">
// //                             <div
// //                                 className="h-full rounded-full transition-all duration-1000"
// //                                 style={{
// //                                     width: isVisible ? `${milestone.progress}%` : '0%',
// //                                     background: `linear-gradient(135deg, #094e54, ${getStatusColor(milestone.status)})`,
// //                                     boxShadow: `0 0 6px ${getStatusColor(milestone.status)}60` // Reduced shadow
// //                                 }}
// //                             />
// //                         </div>
// //                     </div>

// //                     {/* Subtle hover effect (simplified) */}
// //                     <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none rounded-2xl" />
// //                 </div>
// //             </div>
// //         );
// //     };

// //     // Smooth timeline
// //     const SmoothTimeline = () => (
// //         <div
// //             className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 shadow-lg lg:block hidden rounded-full"
// //             style={{
// //                 background: 'linear-gradient(180deg, #094e54, #4ecdc4)',
// //                 boxShadow: '0 0 10px rgba(78, 205, 196, 0.5)'
// //             }}
// //         >
// //             <div
// //                 className="absolute top-0 w-full transition-all duration-700 rounded-full"
// //                 style={{
// //                     height: `${Math.min(scrollY, 100)}%`,
// //                     background: 'linear-gradient(180deg, #4ecdc4, #ffffff)',
// //                     boxShadow: '0 0 15px rgba(78, 205, 196, 0.8)'
// //                 }}
// //             />
// //         </div>
// //     );

// //     return (
// //         <>
// //             <style jsx>{`
// //                 @keyframes float {
// //                     0%, 100% { transform: translateY(0px); }
// //                     50% { transform: translateY(-10px); }
// //                 }

// //                 @keyframes glow {
// //                     0%, 100% { box-shadow: 0 0 20px rgba(78, 205, 196, 0.5); }
// //                     50% { box-shadow: 0 0 30px rgba(78, 205, 196, 0.8); }
// //                 }

// //                 @keyframes subtitleFloat {
// //                     0%, 100% { transform: translateY(0); }
// //                     50% { transform: translateY(-5px); }
// //                 }

// //                 .scale-101 {
// //                     transform: scale(1.01);
// //                 }
// //                 .translate-y-[-2px] {
// //                     transform: translateY(-2px);
// //                 }
// //             `}</style>

// //             <div
// //                 ref={containerRef}
// //                 className="relative min-h-screen text-white overflow-hidden"
// //                 style={{
// //                     background: 'linear-gradient(135deg, #0a1a1d, #1a4b52, #2a6b70)'
// //                 }}
// //             >
// //                 {/* Smooth animated background */}
// //                 <div
// //                     className="absolute inset-0 opacity-60"
// //                     style={{
// //                         background: `
// //                             radial-gradient(circle at 30% 70%, rgba(9,78,84,0.6) 0%, transparent 50%),
// //                             radial-gradient(circle at 70% 30%, rgba(78,205,196,0.4) 0%, transparent 50%)
// //                         `,
// //                         transform: `translateX(${mousePosition.x * 3}px) translateY(${mousePosition.y * 3}px)`, // Slightly reduced movement
// //                         transition: 'transform 0.3s ease-out' // Faster transition
// //                     }}
// //                 />

// //                 <SmoothParticles />

// //                 {/* Compact header */}
// //                 <div className="relative z-10 text-center py-20 px-4">
// //                     <div className="relative inline-block">
// //                         <div className="absolute -inset-8 bg-gradient-to-r from-[#005358] via-[#00a3b5] to-[#00c2d1] rounded-full blur-3xl opacity-20 animate-pulse"></div>
// //                         <h1 className="relative text-6xl md:text-8xl font-black bg-gradient-to-r from-[#005358] via-[#00a3b5] to-[#00c2d1] bg-clip-text text-transparent font-mono tracking-tighter hover:scale-105 transition-transform duration-700 cursor-default">
// //                             PROJECT NEXUS
// //                         </h1>
// //                     </div>
// //                     <p
// //                         className="text-xl md:text-2xl text-[#00a3b5] font-light tracking-[0.2em] uppercase mt-4 hover:tracking-[0.3em] transition-all duration-500"
// //                         style={{
// //                             animation: 'subtitleFloat 4s ease-in-out infinite'
// //                         }}
// //                     >
// //                         Revolutionary Roadmap • 2024-2026
// //                     </p>
// //                 </div>

// //                 {/* Compact main content */}
// //                 <div className="relative z-10 max-w-6xl mx-auto px-4 pb-16">
// //                     <div className="relative">
// //                         <SmoothTimeline />

// //                         {Object.entries(roadmapData).map(([year, milestones], yearIndex) => (
// //                             <div key={year} className="relative mb-16">
// //                                 <YearBadge year={year} />
// //                                 <div className="relative lg:pl-4">
// //                                     {milestones.map((milestone, index) => {
// //                                         const globalIdx = yearIndex * 5 + index;
// //                                         return (
// //                                             <CompactCard
// //                                                 key={milestone.id}
// //                                                 milestone={milestone}
// //                                                 globalIndex={globalIdx}
// //                                             />
// //                                         );
// //                                     })}
// //                                 </div>
// //                             </div>
// //                         ))}
// //                     </div>

// //                     {/* Compact stats */}
// //                     <div
// //                         className="mt-16 backdrop-blur-md rounded-2xl p-6 border shadow-lg"
// //                         style={{
// //                             background: 'linear-gradient(135deg, rgba(9,78,84,0.4), rgba(78,205,196,0.2))',
// //                             borderColor: '#4ecdc4',
// //                             boxShadow: '0 15px 35px rgba(9,78,84,0.3)'
// //                         }}
// //                     >
// //                         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
// //                             {[
// //                                 { value: "13", label: "Total Phases" },
// //                                 { value: "3", label: "Years" },
// //                                 { value: "5", label: "Active 2024" },
// //                                 { value: "45%", label: "Complete" }
// //                             ].map((stat, index) => (
// //                                 <div key={index} className="hover:scale-105 transition-transform duration-300">
// //                                     <h3 className="text-3xl font-black text-[#4ecdc4] mb-1 font-mono">
// //                                         {stat.value}
// //                                     </h3>
// //                                     <p className="text-gray-400 text-sm uppercase tracking-wide">
// //                                         {stat.label}
// //                                     </p>
// //                                 </div>
// //                             ))}
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //         </>
// //     );
// // };

// // export default ProjectRoadmap;
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
//       {[...Array(15)].map((_, i) => ( // Reduced particle count
//         <div
//           key={i}
//           className="absolute rounded-full opacity-40"
//           style={{
//             width: `${2 + Math.random() * 3}px`,
//             height: `${2 + Math.random() * 3}px`,
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//             background: 'linear-gradient(45deg, #094e54, #4ecdc4)',
//             transform: `
//               translateX(${mousePosition.x * 8}px)
//               translateY(${mousePosition.y * 8 + Math.sin(scrollY * 0.1 + i) * 15}px) // Slightly reduced Y offset
//             `,
//             transition: 'transform 0.2s ease-out, opacity 0.2s ease-out', // Added opacity transition
//             boxShadow: '0 0 8px rgba(78, 205, 196, 0.4)', // Slightly reduced shadow
//           }}
//         />
//       ))}
//     </div>
//   );

//   // Compact year badge
//   const YearBadge = ({ year }) => (
//     <div className="flex justify-center mb-8 relative z-10">
//       <div
//         className="w-20 h-20 rounded-full flex items-center justify-center border-2 shadow-xl hover:scale-110 transition-all duration-500 cursor-pointer backdrop-blur-sm"
//         style={{
//           background: 'linear-gradient(135deg, #094e54, #4ecdc4)',
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

//   // Compact milestone card (optimized transitions)
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
//         ref={el => (cardRefs.current[milestone.id] = el)}
//         id={milestone.id}
//         className={`relative mb-8 ${isLeft ? 'lg:pr-8' : 'lg:pl-8'} lg:w-1/2 ${isLeft ? 'lg:ml-0' : 'lg:ml-auto'}`}
//         style={{
//           opacity: isVisible ? 1 : 0,
//           transform: isVisible ? 'translateY(0)' : 'translateY(20px)', // Simpler transform
//           transition: 'opacity 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
//           transitionDelay: `${globalIndex * 0.04}s` // Slightly reduced delay
//         }}
//       >
//         {/* Smooth connection line */}
//         <div
//           className={`absolute top-6 w-12 h-1 ${isLeft ? 'right-0' : 'left-0'} lg:block hidden rounded-full`}
//           style={{
//             background: `linear-gradient(135deg, #094e54, ${getStatusColor(milestone.status)})`,
//             boxShadow: `0 0 6px ${getStatusColor(milestone.status)}50` // Reduced shadow
//           }}
//         />

//         {/* Smooth timeline dot */}
//         <div
//           className={`absolute top-5 w-3 h-3 rounded-full border-2 border-gray-900 shadow-md ${isLeft ? '-right-1.5' : '-left-1.5'} lg:block hidden transition-all duration-300 z-10`}
//           style={{
//             background: getStatusColor(milestone.status),
//             boxShadow: `0 0 6px ${getStatusColor(milestone.status)}` // Reduced shadow
//           }}
//         />

//         <div
//           className={`group relative backdrop-blur-md rounded-2xl p-5 border shadow-lg transition-all duration-300 cursor-pointer overflow-hidden ${
//             isHovered ? 'scale-101 translate-y-[-2px]' : '' // Simpler hover transform
//           }`}
//           style={{
//             background: `linear-gradient(135deg, rgba(9,78,84,0.3), rgba(78,205,196,0.1))`,
//             borderColor: `${getStatusColor(milestone.status)}60`,
//             boxShadow: isHovered
//               ? `0 10px 20px -5px rgba(9,78,84,0.2), 0 0 0 1px ${getStatusColor(milestone.status)}30`
//               : '0 8px 15px -5px rgba(9,78,84,0.15)', // Reduced hover shadow
//             transform: isHovered ? 'translateY(-2px)' : 'translateY(0px)'
//           }}
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//         >
//           {/* Status indicator */}
//           <div
//             className="absolute top-3 right-3 w-2 h-2 rounded-full"
//             style={{ backgroundColor: getStatusColor(milestone.status) }}
//           />

//           {/* Compact icon */}
//           <div
//             className="absolute top-3 right-8 w-8 h-8 rounded-lg flex items-center justify-center text-lg backdrop-blur-sm border transition-all duration-300"
//             style={{
//               background: `linear-gradient(135deg, rgba(9,78,84,0.5), rgba(78,205,196,0.3))`,
//               borderColor: `${getStatusColor(milestone.status)}40`,
//               transform: isHovered ? 'scale(1.05) rotate(2deg)' : 'scale(1)' // Reduced hover scale
//             }}
//           >
//             {milestone.icon}
//           </div>

//           {/* Phase tag */}
//           <div
//             className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wide"
//             style={{
//               background: `linear-gradient(135deg, #094e54, ${getStatusColor(milestone.status)})`,
//             }}
//           >
//             {milestone.phase}
//           </div>

//           {/* Compact title */}
//           <h3 className="text-lg font-bold text-white mb-2 font-mono">
//             {milestone.title}
//           </h3>

//           {/* Compact description */}
//           <p className="text-gray-300 text-sm leading-relaxed mb-3">
//             {milestone.description}
//           </p>

//           {/* Compact tags */}
//           <div className="flex flex-wrap gap-1.5 mb-3">
//             {milestone.tags.map((tag, tagIndex) => (
//               <span
//                 key={tagIndex}
//                 className="px-2 py-1 text-white text-xs rounded-md border transition-all duration-300"
//                 style={{
//                   background: `rgba(9,78,84,0.5)`,
//                   borderColor: `${getStatusColor(milestone.status)}40`,
//                   transform: isHovered ? 'translateY(-1px)' : 'translateY(0px)'
//                 }}
//               >
//                 {tag}
//               </span>
//             ))}
//           </div>

//           {/* Compact progress */}
//           <div className="relative">
//             <div className="flex justify-between items-center mb-2">
//               <span className="text-xs text-gray-400">Progress</span>
//               <span
//                 className="text-xs font-bold text-white px-2 py-0.5 rounded-full"
//                 style={{
//                   background: `linear-gradient(135deg, #094e54, ${getStatusColor(milestone.status)})`
//                 }}
//               >
//                 {milestone.progress}%
//               </span>
//             </div>
//             <div className="w-full bg-gray-800/50 rounded-full h-2 overflow-hidden">
//               <div
//                 className="h-full rounded-full transition-all duration-700"
//                 style={{
//                   width: isVisible ? `${milestone.progress}%` : '0%',
//                   background: `linear-gradient(135deg, #094e54, ${getStatusColor(milestone.status)})`,
//                   boxShadow: `0 0 6px ${getStatusColor(milestone.status)}60` // Reduced shadow
//                 }}
//               />
//             </div>
//           </div>

//           {/* Subtle hover effect */}
//           <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none rounded-2xl" />
//         </div>
//       </div>
//     );
//   };

//   // Smooth timeline
//   const SmoothTimeline = () => (
//     <div
//       className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 shadow-lg lg:block hidden rounded-full"
//       style={{
//         background: 'linear-gradient(180deg, #094e54, #4ecdc4)',
//         boxShadow: '0 0 8px rgba(78, 205, 196, 0.4)' // Reduced shadow
//       }}
//     >
//       <div
//         className="absolute top-0 w-full transition-all duration-700 rounded-full"
//         style={{
//           height: `${Math.min(scrollY, 100)}%`,
//           background: 'linear-gradient(180deg, #4ecdc4, #ffffff)',
//           boxShadow: '0 0 10px rgba(78, 205, 196, 0.6)' // Reduced shadow
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
//        <div className="relative z-10 text-center py-16 px-4"> {/* Reduced padding */}
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
// import { useState, useRef, useEffect, useCallback } from 'react';
// import { debounce } from 'lodash';

// const roadmapData = {
//   2024: [
//     {
//       id: 'p1-2024',
//       phase: "Phase 1",
//       title: "Concept Development",
//       description: "Foundation building with core team assembly and strategic planning frameworks.",
//       tags: ["Team Formation", "Strategy", "Planning"],
//       icon: "🚀",
//       progress: 100,
//       status: "completed"
//     },
//     {
//       id: 'p2-2024',
//       phase: "Phase 2",
//       title: "Smart Contract Development",
//       description: "Advanced blockchain architecture with security audits and protocols.",
//       tags: ["Smart Contracts", "Security", "Blockchain"],
//       icon: "🔒",
//       progress: 85,
//       status: "active"
//     },
//     {
//       id: 'p3-2024',
//       phase: "Phase 3",
//       title: "Platform Development",
//       description: "Digital platform with comprehensive documentation and specifications.",
//       tags: ["Platform", "Documentation", "UI/UX"],
//       icon: "📄",
//       progress: 70,
//       status: "active"
//     },
//     {
//       id: 'p4-2024',
//       phase: "Phase 4",
//       title: "Token Launch",
//       description: "Token launch with comprehensive marketing and fundraising campaigns.",
//       tags: ["Token", "Marketing", "Fundraising"],
//       icon: "💰",
//       progress: 40,
//       status: "upcoming"
//     },
//     {
//       id: 'p5-2024',
//       phase: "Phase 5",
//       title: "Mobile App Launch",
//       description: "Cross-platform mobile applications with seamless user experience.",
//       tags: ["Mobile", "Cross-Platform", "UX"],
//       icon: "📱",
//       progress: 25,
//       status: "upcoming"
//     },
//   ],
//   2025: [
//     {
//       id: 'p1-2025',
//       phase: "Phase 1",
//       title: "AI Integration",
//       description: "Advanced AI features with machine learning capabilities and automation.",
//       tags: ["AI", "Machine Learning", "Automation"],
//       icon: "🤖",
//       progress: 15,
//       status: "future"
//     },
//     {
//       id: 'p2-2025',
//       phase: "Phase 2",
//       title: "Metaverse Platform",
//       description: "Virtual reality ecosystem with NFT integration and digital assets.",
//       tags: ["Metaverse", "VR", "NFTs"],
//       icon: "🌐",
//       progress: 10,
//       status: "future"
//     },
//     {
//       id: 'p3-2025',
//       phase: "Phase 3",
//       title: "DeFi Ecosystem",
//       description: "Decentralized finance platform with yield farming and staking.",
//       tags: ["DeFi", "Yield Farming", "Staking"],
//       icon: "⚡",
//       progress: 5,
//       status: "future"
//     },
//     {
//       id: 'p4-2025',
//       phase: "Phase 4",
//       title: "Global Expansion",
//       description: "Worldwide market penetration with strategic partnerships.",
//       tags: ["Global", "Partnerships", "Expansion"],
//       icon: "🌍",
//       progress: 3,
//       status: "future"
//     },
//   ],
//   2026: [
//     {
//       id: 'p1-2026',
//       phase: "Phase 1",
//       title: "Advanced Technology",
//       description: "Next-generation features with quantum integration and security.",
//       tags: ["Quantum", "Advanced Tech", "Security"],
//       icon: "⚛️",
//       progress: 0,
//       status: "future"
//     },
//     {
//       id: 'p2-2026',
//       phase: "Phase 2",
//       title: "Neural Networks",
//       description: "Brain-computer interface and advanced neural processing systems.",
//       tags: ["Neural", "BCI", "Processing"],
//       icon: "🧠",
//       progress: 0,
//       status: "future"
//     },
//     {
//       id: 'p3-2026',
//       phase: "Phase 3",
//       title: "Space Integration",
//       description: "Satellite-based infrastructure and interplanetary connectivity.",
//       tags: ["Space", "Satellites", "Infrastructure"],
//       icon: "🛰️",
//       progress: 0,
//       status: "future"
//     },
//     {
//       id: 'p4-2026',
//       phase: "Phase 4",
//       title: "Universal Adoption",
//       description: "Complete global transformation and mass market adoption.",
//       tags: ["Universal", "Global", "Adoption"],
//       icon: "🌟",
//       progress: 0,
//       status: "future"
//     },
//   ],
// };

// function flattenRoadmap(data) {
//   return Object.entries(data).flatMap(([year, phases]) =>
//     phases.map((phase) => ({ ...phase, year }))
//   );
// }

// export default function RoadmapTimeline() {
//   const phases = flattenRoadmap(roadmapData);
//   const [activeIndex, setActiveIndex] = useState(-1);
//   const refs = useRef([]);

//   const handleIntersection = useCallback(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           const index = Number(entry.target.dataset.index);
//           setActiveIndex((prev) => Math.max(prev, index));
//         }
//       });
//     },
//     [setActiveIndex]
//   );

//   const debouncedHandleIntersection = useCallback(
//     debounce(handleIntersection, 100),
//     [handleIntersection]
//   );

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       debouncedHandleIntersection,
//       {
//         root: null,
//         rootMargin: '-40% 0px -40% 0px', // Adjusted rootMargin to trigger earlier
//         threshold: 0,
//       }
//     );

//     refs.current.forEach((el) => {
//       if (el) observer.observe(el);
//     });

//     return () => observer.disconnect();
//   }, [debouncedHandleIntersection]);

//   return (
//     <div
//       className="relative min-h-screen text-white overflow-hidden flex flex-col items-center justify-center"
//       style={{
//         background: 'linear-gradient(135deg, #bace27, #185e64)',
//       }}
//     >
//       <div className="relative inline-block">
//         <div className="absolute -inset-6 bg-gradient-to-r from-[#005358] via-[#00a3b5] to-[#00c2d1] rounded-full blur-2xl opacity-15 animate-pulse"></div>
//         <h1 className="relative text-5xl md:text-7xl font-black bg-gradient-to-r from-[#005358] via-[#00a3b5] to-[#00c2d1] bg-clip-text text-transparent font-mono tracking-tighter hover:scale-103 transition-transform duration-500 cursor-default">
//           PROJECT NEXUS
//         </h1>
//       </div>
//       <p
//         className="text-xl md:text-xl text-[#00a3b5] font-light tracking-[0.15em] uppercase mt-3 hover:tracking-[0.2em] transition-all duration-300"
//         style={{
//           animation: 'subtitleFloat 3s ease-in-out infinite',
//         }}
//       >
//         the name at the middle
//       </p>



//       <div
//         className="flex justify-center py-16 min-h-screen"
//       >
//         <div className="relative z-10 text-center py-16 px-4"> {/* Reduced padding */}
//           <div className="relative max-w-4xl w-full px-6">
//             {/* Vertical timeline line */}
//             <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-blue-300 rounded-full"></div>

//             <div className="space-y-24">
//               {phases.map((phase, i) => {
//                 const isActive = i <= activeIndex;

//                 return (
//                   <div
//                     key={phase.id}
//                     className={`relative flex items-center max-w-3xl gap-4 transition-all duration-700 ease-in-out
//                   ${isActive ? 'opacity-100' : 'opacity-30'}
//                 `}
//                     style={{ willChange: 'opacity' }}
//                   >
//                     {/* Circle */}
//                     <div
//                       ref={(el) => (refs.current[i] = el)}
//                       data-index={i}
//                       className={`z-10 w-10 h-10 rounded-full border-4 flex items-center justify-center text-2xl cursor-default select-none shadow-md
//                     transition-all duration-500 ease-out
//                     ${isActive
//                           ? 'bg-blue-600 border-blue-600 text-white scale-110 shadow-lg'
//                           : 'bg-white border-gray-400 text-gray-400 scale-90'
//                         }`}
//                       style={{ marginLeft: '-2rem' }}
//                     >
//                       {phase.icon}
//                     </div>

//                     {/* Horizontal line */}
//                     <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-200 rounded"></div>

//                     {/* Box */}
//                     <div
//                       className={`bg-white shadow-lg rounded-md p-6 flex-1 transition-transform duration-500 ease-out
//                     ${isActive ? 'scale-100' : 'scale-95'} hover:scale-105`}
//                     >
//                       <div className="flex justify-between items-center mb-2">
//                         <span className="text-sm font-semibold text-gray-500">
//                           {phase.year} - {phase.phase}
//                         </span>
//                         <span
//                           className={`text-xs font-semibold px-2 py-0.5 rounded-full
//                         ${phase.status === 'completed'
//                               ? 'bg-green-200 text-green-800'
//                               : phase.status === 'active'
//                                 ? 'bg-yellow-200 text-yellow-800'
//                                 : 'bg-gray-200 text-gray-600'
//                             }`}
//                         >
//                           {phase.status.toUpperCase()}
//                         </span>
//                       </div>
//                       <h3 className="text-lg font-bold mb-2 text-gray-800">
//                         {phase.title}
//                       </h3>
//                       <p className="text-gray-700 mb-3">{phase.description}</p>
//                       <div className="flex flex-wrap gap-2">
//                         {phase.tags.map((tag) => (
//                           <span
//                             key={tag}
//                             className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-xs"
//                           >
//                             {tag}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// import { useState, useRef, useEffect, useCallback } from 'react';

// const roadmapData = {
//   2024: [
//     {
//       id: 'p1-2024',
//       phase: "Phase 1",
//       title: "Concept Development",
//       description: "Foundation building with core team assembly and strategic planning frameworks.",
//       tags: ["Team Formation", "Strategy", "Planning"],
//       icon: "🚀",
//       progress: 100,
//       status: "completed"
//     },
//     {
//       id: 'p2-2024',
//       phase: "Phase 2",
//       title: "Smart Contract Development",
//       description: "Advanced blockchain architecture with security audits and protocols.",
//       tags: ["Smart Contracts", "Security", "Blockchain"],
//       icon: "🔒",
//       progress: 85,
//       status: "active"
//     },
//     {
//       id: 'p3-2024',
//       phase: "Phase 3",
//       title: "Platform Development",
//       description: "Digital platform with comprehensive documentation and specifications.",
//       tags: ["Platform", "Documentation", "UI/UX"],
//       icon: "📄",
//       progress: 70,
//       status: "active"
//     },
//     {
//       id: 'p4-2024',
//       phase: "Phase 4",
//       title: "Token Launch",
//       description: "Token launch with comprehensive marketing and fundraising campaigns.",
//       tags: ["Token", "Marketing", "Fundraising"],
//       icon: "💰",
//       progress: 40,
//       status: "upcoming"
//     },
//     {
//       id: 'p5-2024',
//       phase: "Phase 5",
//       title: "Mobile App Launch",
//       description: "Cross-platform mobile applications with seamless user experience.",
//       tags: ["Mobile", "Cross-Platform", "UX"],
//       icon: "📱",
//       progress: 25,
//       status: "upcoming"
//     },
//   ],
//   2025: [
//     {
//       id: 'p1-2025',
//       phase: "Phase 1",
//       title: "AI Integration",
//       description: "Advanced AI features with machine learning capabilities and automation.",
//       tags: ["AI", "Machine Learning", "Automation"],
//       icon: "🤖",
//       progress: 15,
//       status: "future"
//     },
//     {
//       id: 'p2-2025',
//       phase: "Phase 2",
//       title: "Metaverse Platform",
//       description: "Virtual reality ecosystem with NFT integration and digital assets.",
//       tags: ["Metaverse", "VR", "NFTs"],
//       icon: "🌐",
//       progress: 10,
//       status: "future"
//     },
//     {
//       id: 'p3-2025',
//       phase: "Phase 3",
//       title: "DeFi Ecosystem",
//       description: "Decentralized finance platform with yield farming and staking.",
//       tags: ["DeFi", "Yield Farming", "Staking"],
//       icon: "⚡",
//       progress: 5,
//       status: "future"
//     },
//     {
//       id: 'p4-2025',
//       phase: "Phase 4",
//       title: "Global Expansion",
//       description: "Worldwide market penetration with strategic partnerships.",
//       tags: ["Global", "Partnerships", "Expansion"],
//       icon: "🌍",
//       progress: 3,
//       status: "future"
//     },
//   ],
//   2026: [
//     {
//       id: 'p1-2026',
//       phase: "Phase 1",
//       title: "Advanced Technology",
//       description: "Next-generation features with quantum integration and security.",
//       tags: ["Quantum", "Advanced Tech", "Security"],
//       icon: "⚛️",
//       progress: 0,
//       status: "future"
//     },
//     {
//       id: 'p2-2026',
//       phase: "Phase 2",
//       title: "Neural Networks",
//       description: "Brain-computer interface and advanced neural processing systems.",
//       tags: ["Neural", "BCI", "Processing"],
//       icon: "🧠",
//       progress: 0,
//       status: "future"
//     },
//     {
//       id: 'p3-2026',
//       phase: "Phase 3",
//       title: "Space Integration",
//       description: "Satellite-based infrastructure and interplanetary connectivity.",
//       tags: ["Space", "Satellites", "Infrastructure"],
//       icon: "🛰️",
//       progress: 0,
//       status: "future"
//     },
//     {
//       id: 'p4-2026',
//       phase: "Phase 4",
//       title: "Universal Adoption",
//       description: "Complete global transformation and mass market adoption.",
//       tags: ["Universal", "Global", "Adoption"],
//       icon: "🌟",
//       progress: 0,
//       status: "future"
//     },
//   ],
// };

// function flattenRoadmap(data) {
//   return Object.entries(data).flatMap(([year, phases]) =>
//     phases.map((phase) => ({ ...phase, year }))
//   );
// }

// // Custom debounce hook
// function useDebounceCallback(callback, delay) {
//   const timeoutRef = useRef(null);

//   const debouncedCallback = useCallback((...args) => {
//     if (timeoutRef.current) clearTimeout(timeoutRef.current);
//     timeoutRef.current = setTimeout(() => {
//       callback(...args);
//     }, delay);
//   }, [callback, delay]);

//   useEffect(() => {
//     return () => clearTimeout(timeoutRef.current);
//   }, []);

//   return debouncedCallback;
// }

// export default function RoadmapTimeline() {
//   const phases = flattenRoadmap(roadmapData);
//   const [activeIndex, setActiveIndex] = useState(-1);
//   const refs = useRef([]);
//   const visibleIndices = useRef(new Set());
// const handleIntersection = useCallback((entries) => {
//   entries.forEach((entry) => {
//     const index = Number(entry.target.dataset.index);
//     if (entry.isIntersecting) {
//       visibleIndices.current.add(index);
//     } else {
//       visibleIndices.current.delete(index);
//     }
//   });

//   if (visibleIndices.current.size === 0) {
//     setActiveIndex(-1);
//   } else {
//     setActiveIndex(Math.max(...visibleIndices.current));
//   }
// }, []);
//   const debouncedHandleIntersection = useDebounceCallback(handleIntersection, 100);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       debouncedHandleIntersection,
//       {
//         root: null,
//         rootMargin: '-20% 0px -20% 0px',
//         threshold: 0,
//       }
//     );

//     refs.current.forEach((el) => {
//       if (el) observer.observe(el);
//     });

//     return () => observer.disconnect();
//   }, [debouncedHandleIntersection]);

//   return (
//     <div
//       className="relative min-h-screen text-white overflow-hidden flex flex-col items-center justify-center"
//       style={{
//         background:'#bace27',
//       }}
//     >
//       <div className="relative inline-block">
//         <div className="absolute -inset-6 bg-gradient-to-r from-[#005358] via-[#00a3b5] to-[#00c2d1] rounded-full blur-2xl opacity-15 animate-pulse"></div>
//         <h1 className="relative text-5xl md:text-7xl font-black bg-gradient-to-r from-[#005358] via-[#00a3b5] to-[#00c2d1] bg-clip-text text-transparent font-mono tracking-tighter hover:scale-103 transition-transform duration-500 cursor-default">
//           PROJECT NEXUS
//         </h1>
//       </div>
//       <p
//         className="text-xl md:text-xl text-[#00a3b5] font-light tracking-[0.15em] uppercase mt-3 hover:tracking-[0.2em] transition-all duration-300"
//         style={{
//           animation: 'subtitleFloat 3s ease-in-out infinite',
//         }}
//       >
//         the name at the middle
//       </p>

//       <div
//         className="flex justify-center py-16 min-h-screen"
//       >
//         <div className="relative z-10 text-center py-16 px-4">
//           <div className="relative max-w-4xl w-full px-6">
//             <div className="absolute left-8 top-0 bottom-0 w-1  rounded-full"></div>

//             <div className="space-y-24">
//               {phases.map((phase, i) => {
//                 const isActive = i <= activeIndex;

//                 return (
//                   <div
//                     key={phase.id}
//                     className={`relative flex items-center max-w-3xl gap-4 transition-all duration-700 ease-in-out
//                   ${isActive ? 'opacity-100' : 'opacity-30'}`}
//                     style={{ willChange: 'opacity' }}
//                   >
//                     <div
//                       ref={(el) => (refs.current[i] = el)}
//                       data-index={i}
//                       className={`z-10 w-10 h-10 rounded-full border-4 flex items-center justify-center text-2xl cursor-default select-none shadow-md
//                     transition-all duration-500 ease-out
//                     ${isActive
//                           ? 'bg-blue-600 border-blue-600 text-white scale-110 shadow-lg'
//                           : 'bg-white border-gray-400 text-gray-400 scale-90'
//                         }`}
//                       style={{ marginLeft: '-2rem' }}
//                     >
//                       {phase.icon}
//                     </div>

//                     <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-200 rounded"></div>

//                     <div
//                       className={`bg-white shadow-lg rounded-md p-6 flex-1 transition-transform duration-500 ease-out
//                     ${isActive ? 'scale-100' : 'scale-95'} hover:scale-105`}
//                     >
//                       <div className="flex justify-between items-center mb-2">
//                         <span className="text-sm font-semibold text-gray-500">
//                           {phase.year} - {phase.phase}
//                         </span>
//                         <span
//                           className={`text-xs font-semibold px-2 py-0.5 rounded-full
//                         ${phase.status === 'completed'
//                               ? 'bg-green-200 text-green-800'
//                               : phase.status === 'active'
//                                 ? 'bg-yellow-200 text-yellow-800'
//                                 : 'bg-gray-200 text-gray-600'
//                             }`}
//                         >
//                           {phase.status.toUpperCase()}
//                         </span>
//                       </div>
//                       <h3 className="text-lg font-bold mb-2 text-gray-800">
//                         {phase.title}
//                       </h3>
//                       <p className="text-gray-700 mb-3">{phase.description}</p>
//                       <div className="flex flex-wrap gap-2">
//                         {phase.tags.map((tag) => (
//                           <span
//                             key={tag}
//                             className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-xs"
//                           >
//                             {tag}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// import React, { useState, useEffect } from 'react';
// import { CheckCircle, Settings, Home, Clock, TrendingUp } from 'lucide-react';

// const Roadmap = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [hoveredItem, setHoveredItem] = useState(null);

//   useEffect(() => {
//     const timer = setTimeout(() => setIsVisible(true), 100);
//     return () => clearTimeout(timer);
//   }, []);

//   const infographicData = [
//     {
//       id: 1,
//       title: "Market Research & Analysis",
//       description: "Identify opportunities, analyze competitors, and understand customer needs.",
//       icon: CheckCircle,
//       color: "from-red-400 to-red-600",
//       delay: 0
//     },
//     {
//       id: 2,
//       title: "Strategic Planning",
//       description: "Develop business strategies, set objectives, and execute growth-focused plans.",
//       icon: Settings,
//       color: "from-red-300 to-red-500",
//       delay: 200
//     },
//     {
//       id: 3,
//       title: "Brand Identity",
//       description: "Establish market presence and build customer loyalty through branding.",
//       icon: Home,
//       color: "from-red-500 to-red-700",
//       delay: 400
//     },
//     {
//       id: 4,
//       title: "Process Optimization",
//       description: "Improve efficiency and streamline operations to reduce costs.",
//       icon: Clock,
//       color: "from-red-300 to-red-500",
//       delay: 600
//     },
//     {
//       id: 5,
//       title: "Scaling & Growth",
//       description: "Expand reach and scale sustainably while maintaining quality.",
//       icon: TrendingUp,
//       color: "from-red-600 to-red-800",
//       delay: 800
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-[linear-gradient(135deg,rgba(8,83,89,0.95),rgba(8,83,89,0.9))] p-6 overflow-hidden relative">
      
//       {/* Soft Background Lights */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-red-400 rounded-full opacity-10 blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-32 right-12 w-96 h-96 bg-white rounded-full opacity-5 blur-2xl animate-pulse delay-2000"></div>
//       </div>

//       <div className="relative z-10 max-w-6xl mx-auto">
//         {/* Header */}
//         <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
//           <h1 className="text-5xl font-bold text-white mb-4 tracking-wide">
//             BUSINESS <span className="text-red-300">ROADMAP</span>
//           </h1>
//           <div className="w-32 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto rounded-full"></div>
//         </div>

//         {/* Timeline Container */}
//         <div className="relative">
//           <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-transparent via-red-400 to-transparent opacity-60"></div>
//           <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-red-400 rounded-full animate-bounce" style={{ top: '10%' }}></div>

//           <div className="space-y-12">
//             {infographicData.map((item, index) => {
//               const IconComponent = item.icon;
//               const isEven = index % 2 === 0;

//               return (
//                 <div
//                   key={item.id}
//                   className={`relative flex items-center transition-all duration-700 transform ${
//                     isVisible ? 'translate-x-0 opacity-100' : `${isEven ? '-translate-x-20' : 'translate-x-20'} opacity-0`
//                   }`}
//                   style={{ transitionDelay: `${item.delay}ms` }}
//                   onMouseEnter={() => setHoveredItem(item.id)}
//                   onMouseLeave={() => setHoveredItem(null)}
//                 >
//                   {/* Timeline Node */}
//                   <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
//                     <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-2xl border-4 border-white transition-all duration-300 transform ${
//                       hoveredItem === item.id ? 'scale-125 rotate-12' : 'scale-100'
//                     }`}>
//                       <span className="text-2xl font-bold text-white">{item.id.toString().padStart(2, '0')}</span>
//                     </div>
//                   </div>

//                   {/* Content Card */}
//                   <div className={`w-5/12 ${isEven ? 'mr-auto pr-16' : 'ml-auto pl-16'}`}>
//                     <div className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl transition-all duration-500 transform ${
//                       hoveredItem === item.id ? 'scale-105 shadow-red-500/20 bg-white/20' : ''
//                     }`}>
//                       {/* Icon */}
//                       <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} mb-4 transition-all duration-300 ${
//                         hoveredItem === item.id ? 'rotate-12 scale-110' : ''
//                       }`}>
//                         <IconComponent size={24} className="text-white" />
//                       </div>

//                       {/* Title & Description */}
//                       <h3 className="text-xl font-bold text-white mb-3 tracking-wide">{item.title}</h3>
//                       <p className="text-white/80 leading-relaxed text-sm">{item.description}</p>

//                       <div className={`mt-4 h-1 bg-gradient-to-r ${item.color} rounded-full transition-all duration-500 ${
//                         hoveredItem === item.id ? 'w-full' : 'w-0'
//                       }`}></div>
//                     </div>
//                   </div>

//                   {/* Line from timeline to card */}
//                   <div className={`absolute left-1/2 ${isEven ? 'right-1/2' : 'left-1/2'} top-8 w-16 h-0.5 bg-gradient-to-r from-red-400/60 to-transparent transition-all duration-500 ${
//                     hoveredItem === item.id ? 'bg-red-400 shadow-lg shadow-red-400/40' : ''
//                   }`} style={{
//                     transform: `translateX(${isEven ? '-50%' : '50%'})`
//                   }}></div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Footer Badge */}
//         <div className={`text-center mt-16 transition-all duration-1000 delay-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//           <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
//             <div className="w-3 h-3 bg-red-400 rounded-full animate-ping"></div>
//             <span className="text-white font-medium">Interactive Roadmap Timeline</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Roadmap;

import React, { useState, useEffect, useRef } from 'react';

function Roadmap() {
  const [timelineProgress, setTimelineProgress] = useState(0);
  const [activeMilestones, setActiveMilestones] = useState(new Set());
  const timelineRef = useRef(null);
  const milestonesRef = useRef([]);

  const roadmapData = [
    {
      id: 1,
      phase: 'Phase 1',
      title: 'Foundation & Security',
      date: 'Q1 2025',
      description: 'Establishing robust infrastructure with enterprise-grade security protocols and comprehensive smart contract architecture.',
      features: [
        'Smart Contract Development & Deployment',
        'Multi-layer Security Audits',
        'Core Infrastructure Setup',
        'Token Economics Implementation'
      ],
      status: 'completed',
      side: 'left',
      phaseClass: 'phase-1'
    },
    {
      id: 2,
      phase: 'Phase 2',
      title: 'DeFi Ecosystem Integration',
      date: 'Q2 2025',
      description: 'Advanced DeFi protocols integration with institutional-grade yield optimization and cross-chain compatibility.',
      features: [
        'Automated Market Maker (AMM)',
        'Yield Farming & Liquidity Mining',
        'Cross-chain Bridge Protocol',
        'Risk Management Systems'
      ],
      status: 'in-progress',
      side: 'right',
      phaseClass: 'phase-2'
    },
    {
      id: 3,
      phase: 'Phase 3',
      title: 'NFT & Digital Assets',
      date: 'Q3 2025',
      description: 'Comprehensive NFT marketplace with advanced features including fractional ownership and institutional custody solutions.',
      features: [
        'Enterprise NFT Marketplace',
        'Fractional Ownership Protocol',
        'Institutional Custody Solutions',
        'Creator Economy Platform'
      ],
      status: 'upcoming',
      side: 'left',
      phaseClass: 'phase-3'
    },
    {
      id: 4,
      phase: 'Phase 4',
      title: 'Governance & DAO',
      date: 'Q4 2025',
      description: 'Implementation of decentralized governance with advanced voting mechanisms and treasury management protocols.',
      features: [
        'Quadratic Voting System',
        'Treasury Management DAO',
        'Proposal Execution Framework',
        'Stakeholder Incentive Alignment'
      ],
      status: 'upcoming',
      side: 'right',
      phaseClass: 'phase-4'
    },
    {
      id: 5,
      phase: 'Phase 5',
      title: 'AI & Analytics Integration',
      date: 'Q1 2026',
      description: 'Advanced AI-powered analytics, predictive modeling, and automated portfolio optimization for institutional clients.',
      features: [
        'Predictive Market Analytics',
        'AI-powered Risk Assessment',
        'Automated Portfolio Rebalancing',
        'Institutional Grade Reporting'
      ],
      status: 'upcoming',
      side: 'left',
      phaseClass: 'phase-5'
    },
    {
      id: 6,
      phase: 'Phase 6',
      title: 'Global Expansion',
      date: 'Q2 2026',
      description: 'International market expansion with regulatory compliance, multi-jurisdiction support, and enterprise partnerships.',
      features: [
        'Multi-jurisdiction Compliance',
        'Enterprise Partnership Network',
        'Institutional Grade Infrastructure',
        'Global Regulatory Framework'
      ],
      status: 'upcoming',
      side: 'right',
      phaseClass: 'phase-6'
    }
  ];

  const updateTimelineProgress = function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    
    const scrollPercentage = Math.min(scrollTop / documentHeight, 1);
    setTimelineProgress(scrollPercentage * 100);

    const newActiveMilestones = new Set();
    milestonesRef.current.forEach(function(milestone, index) {
      if (milestone) {
        const rect = milestone.getBoundingClientRect();
        if (rect.top < windowHeight && rect.bottom > 0) {
          newActiveMilestones.add(index);
        }
      }
    });
    setActiveMilestones(newActiveMilestones);
  };

  useEffect(function() {
    let ticking = false;
    const handleScroll = function() {
      if (!ticking) {
        requestAnimationFrame(function() {
          updateTimelineProgress();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    updateTimelineProgress();

    return function() {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getStatusBadge = function(status) {
    const baseStyle = {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '8px 16px',
      borderRadius: '50px',
      fontSize: '0.8rem',
      fontWeight: 600,
      width: 'fit-content'
    };

    if (status === 'completed') {
      return React.createElement('span', {
        style: Object.assign({}, baseStyle, {
          background: 'linear-gradient(135deg, #6bcf7f, #4ca2cd)',
          color: 'white'
        })
      }, '✓ Completed');
    } else if (status === 'in-progress') {
      return React.createElement('span', {
        style: Object.assign({}, baseStyle, {
          background: 'linear-gradient(135deg, #ffd93d, #ff6b9d)',
          color: 'white',
          boxShadow: '0 0 20px rgba(255, 217, 61, 0.5)'
        })
      }, '⚡ In Progress');
    } else {
      return React.createElement('span', {
        style: Object.assign({}, baseStyle, {
          background: 'rgba(255, 255, 255, 0.1)',
          color: 'rgba(255, 255, 255, 0.8)',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        })
      }, '⏳ Upcoming');
    }
  };

  const getPhaseBackground = function(phaseClass) {
    if (phaseClass === 'phase-1') return 'linear-gradient(135deg, #ff6b6b, #ff8e53)';
    if (phaseClass === 'phase-2') return 'linear-gradient(135deg, #4ecdc4, #44a08d)';
    if (phaseClass === 'phase-3') return 'linear-gradient(135deg, #ffd93d, #ff6b9d)';
    if (phaseClass === 'phase-4') return 'linear-gradient(135deg, #6bcf7f, #4ca2cd)';
    if (phaseClass === 'phase-5') return 'linear-gradient(135deg, #a18cd1, #fbc2eb)';
    return 'linear-gradient(135deg, #00f5ff, #0099cc)';
  };

  return React.createElement('div', {
    style: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
      background: 'linear-gradient(135deg, rgba(8,83,89,0.95) 0%, rgba(8,83,89,0.9) 100%)',
      minHeight: '100vh',
      overflowX: 'hidden',
      position: 'relative'
    }
  }, 
    React.createElement('div', {
      style: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '50px 50px',
        pointerEvents: 'none',
        zIndex: 1
      }
    }),
    React.createElement('div', {
      style: {
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '60px 40px',
        position: 'relative',
        zIndex: 10
      }
    },
      React.createElement('div', {
        style: {
          textAlign: 'center',
          marginBottom: '80px'
        }
      },
        React.createElement('h1', {
          style: {
            fontSize: '3.2rem',
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: '16px',
            letterSpacing: '-1px',
            textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
          }
        }, 'Crypto Roadmap 2025'),
        React.createElement('p', {
          style: {
            fontSize: '1.2rem',
            color: 'rgba(255, 255, 255, 0.8)',
            fontWeight: 400,
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.6
          }
        }, 'Strategic Development Plan for Next-Generation Blockchain Infrastructure')
      ),
      React.createElement('div', {
        style: {
          position: 'relative',
          maxWidth: '1200px',
          margin: '0 auto'
        }
      },
        React.createElement('div', {
          ref: timelineRef,
          style: {
            position: 'absolute',
            left: '50%',
            top: 0,
            height: '100%',
            width: '6px',
            transform: 'translateX(-50%)',
            borderRadius: '3px',
            zIndex: 5,
            minHeight: '2000px'
          }
        },
          React.createElement('div', {
            style: {
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%)',
              borderRadius: '3px'
            }
          }),
          React.createElement('div', {
            style: {
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: timelineProgress + '%',
              background: 'linear-gradient(180deg, rgba(0, 245, 255, 0.9) 0%, rgba(107, 207, 127, 0.8) 25%, rgba(255, 217, 61, 0.8) 50%, rgba(255, 107, 107, 0.8) 75%, rgba(161, 140, 209, 0.8) 100%)',
              borderRadius: '3px',
              boxShadow: '0 0 20px rgba(0, 245, 255, 0.4)',
              transition: 'height 0.3s ease-out'
            }
          })
        ),
        roadmapData.map(function(milestone, index) {
          return React.createElement('div', {
            key: milestone.id,
            ref: function(el) { milestonesRef.current[index] = el; },
            style: {
              position: 'relative',
              marginBottom: '120px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: milestone.side === 'left' ? 'flex-end' : 'flex-start',
              paddingRight: milestone.side === 'left' ? '100px' : '0',
              paddingLeft: milestone.side === 'right' ? '100px' : '0',
              minHeight: '200px'
            }
          },
            React.createElement('div', {
              style: {
                position: 'absolute',
                left: '50%',
                top: '50%',
                width: '24px',
                height: '24px',
                background: 'linear-gradient(45deg, #00f5ff, #6bcf7f)',
                border: '5px solid rgba(8,83,89,0.9)',
                borderRadius: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 20,
                boxShadow: activeMilestones.has(index) 
                  ? '0 0 40px rgba(0, 245, 255, 1), 0 0 60px rgba(107, 207, 127, 0.5)'
                  : '0 0 25px rgba(0, 245, 255, 0.6)',
                transition: 'all 0.3s ease'
              }
            }),
            React.createElement('div', {
              style: {
                background: activeMilestones.has(index) 
                  ? 'rgba(255, 255, 255, 0.15)' 
                  : 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(15px)',
                border: activeMilestones.has(index)
                  ? '1px solid rgba(0, 245, 255, 0.3)'
                  : '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '16px',
                padding: '32px',
                maxWidth: '450px',
                width: '100%',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden',
                textAlign: milestone.side === 'left' ? 'right' : 'left',
                boxShadow: activeMilestones.has(index)
                  ? '0 10px 40px rgba(0, 245, 255, 0.1)'
                  : 'none',
                cursor: 'pointer'
              },
              onMouseEnter: function(e) {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.2)';
              },
              onMouseLeave: function(e) {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = activeMilestones.has(index)
                  ? '0 10px 40px rgba(0, 245, 255, 0.1)'
                  : 'none';
              }
            },
              React.createElement('div', {
                style: {
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: milestone.side === 'left' ? 'flex-end' : 'flex-start'
                }
              },
                React.createElement('span', {
                  style: {
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '8px 16px',
                    borderRadius: '50px',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    marginBottom: '20px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    width: 'fit-content',
                    background: getPhaseBackground(milestone.phaseClass),
                    color: 'white'
                  }
                }, milestone.phase),
                React.createElement('h3', {
                  style: {
                    fontSize: '1.6rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '12px',
                    lineHeight: 1.3
                  }
                }, milestone.title),
                React.createElement('div', {
                  style: {
                    color: 'rgba(0, 245, 255, 0.9)',
                    fontSize: '1rem',
                    fontWeight: 500,
                    marginBottom: '16px'
                  }
                }, milestone.date),
                React.createElement('p', {
                  style: {
                    color: 'rgba(255, 255, 255, 0.85)',
                    lineHeight: 1.6,
                    marginBottom: '24px',
                    fontSize: '0.95rem'
                  }
                }, milestone.description),
                React.createElement('ul', {
                  style: {
                    listStyle: 'none',
                    marginBottom: '24px',
                    padding: 0
                  }
                }, milestone.features.map(function(feature, featureIndex) {
                  return React.createElement('li', {
                    key: featureIndex,
                    style: {
                      color: 'rgba(255, 255, 255, 0.9)',
                      marginBottom: '10px',
                      paddingLeft: '24px',
                      position: 'relative',
                      fontSize: '0.9rem',
                      lineHeight: 1.5
                    }
                  },
                    React.createElement('span', {
                      style: {
                        position: 'absolute',
                        left: 0,
                        color: 'rgba(0, 245, 255, 0.8)',
                        fontSize: '1.2rem'
                      }
                    }, '●'),
                    feature
                  );
                })),
                getStatusBadge(milestone.status)
              )
            )
          );
        })
      ),
      React.createElement('div', {
        style: {
          textAlign: 'center',
          marginTop: '100px',
          padding: '40px 0',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)'
        }
      },
        React.createElement('p', {
          style: {
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: '1.1rem',
            lineHeight: 1.6
          }
        }, 'Building the future of decentralized finance with enterprise-grade security and innovation')
      )
    )
  );
}

export default Roadmap;

// import React, { useState, useEffect } from 'react';

// const roadmapData = {
//   2024: [
//     { id: 'p1-2024', phase: "Phase 1", title: "Concept Development", description: "Foundation building with core team assembly and strategic planning frameworks.", tags: ["Team Formation", "Strategy", "Planning"], icon: "🚀", progress: 100, status: "completed" },
//     { id: 'p2-2024', phase: "Phase 2", title: "Smart Contract Development", description: "Advanced blockchain architecture with security audits and protocols.", tags: ["Smart Contracts", "Security", "Blockchain"], icon: "🔒", progress: 85, status: "active" },
//     { id: 'p3-2024', phase: "Phase 3", title: "Platform Development", description: "Digital platform with comprehensive documentation and specifications.", tags: ["Platform", "Documentation", "UI/UX"], icon: "📄", progress: 70, status: "active" },
//     { id: 'p4-2024', phase: "Phase 4", title: "Token Launch", description: "Token launch with comprehensive marketing and fundraising campaigns.", tags: ["Token", "Marketing", "Fundraising"], icon: "💰", progress: 40, status: "upcoming" },
//     { id: 'p5-2024', phase: "Phase 5", title: "Mobile App Launch", description: "Cross-platform mobile applications with seamless user experience.", tags: ["Mobile", "Cross-Platform", "UX"], icon: "📱", progress: 25, status: "upcoming" },
//   ],
//   2025: [
//     { id: 'p1-2025', phase: "Phase 1", title: "AI Integration", description: "Advanced AI features with machine learning capabilities and automation.", tags: ["AI", "Machine Learning", "Automation"], icon: "🤖", progress: 15, status: "future" },
//     { id: 'p2-2025', phase: "Phase 2", title: "Metaverse Platform", description: "Virtual reality ecosystem with NFT integration and digital assets.", tags: ["Metaverse", "VR", "NFTs"], icon: "🌐", progress: 10, status: "future" },
//     { id: 'p3-2025', phase: "Phase 3", title: "DeFi Ecosystem", description: "Decentralized finance platform with yield farming and staking.", tags: ["DeFi", "Yield Farming", "Staking"], icon: "⚡", progress: 5, status: "future" },
//     { id: 'p4-2025', phase: "Phase 4", title: "Global Expansion", description: "Worldwide market penetration with strategic partnerships.", tags: ["Global", "Partnerships", "Expansion"], icon: "🌍", progress: 3, status: "future" },
//   ],
//   2026: [
//     { id: 'p1-2026', phase: "Phase 1", title: "Advanced Technology", description: "Next-generation features with quantum integration and security.", tags: ["Quantum", "Advanced Tech", "Security"], icon: "⚛️", progress: 0, status: "future" },
//     { id: 'p2-2026', phase: "Phase 2", title: "Neural Networks", description: "Brain-computer interface and advanced neural processing systems.", tags: ["Neural", "BCI", "Processing"], icon: "🧠", progress: 0, status: "future" },
//     { id: 'p3-2026', phase: "Phase 3", title: "Space Integration", description: "Satellite-based infrastructure and interplanetary connectivity.", tags: ["Space", "Satellites", "Infrastructure"], icon: "🛰️", progress: 0, status: "future" },
//     { id: 'p4-2026', phase: "Phase 4", title: "Universal Adoption", description: "Complete global transformation and mass market adoption.", tags: ["Universal", "Global", "Adoption"], icon: "🌟", progress: 0, status: "future" },
//   ]
// };

// const statusColors = {
//   completed: "from-green-400 to-green-600",
//   active: "from-yellow-400 to-yellow-600",
//   upcoming: "from-red-400 to-red-600",
//   future: "from-gray-400 to-gray-600"
// };

// const Roadmap = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [hoveredItem, setHoveredItem] = useState(null);

//   useEffect(() => {
//     const timer = setTimeout(() => setIsVisible(true), 100);
//     return () => clearTimeout(timer);
//   }, []);

//   const years = Object.keys(roadmapData).sort();

//   return (
//     <div className="min-h-screen bg-[linear-gradient(135deg,rgba(8,83,89,0.95),rgba(8,83,89,0.9))] p-6 overflow-hidden relative">
//       {/* Soft Background Lights */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-red-400 rounded-full opacity-10 blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-32 right-12 w-96 h-96 bg-white rounded-full opacity-5 blur-2xl animate-pulse delay-2000"></div>
//       </div>

//       <div className="relative z-10 max-w-6xl mx-auto">
//         {/* Header */}
//         <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
//           <h1 className="text-5xl font-bold text-white mb-4 tracking-wide">
//             BUSINESS <span className="text-red-300">ROADMAP</span>
//           </h1>
//           <div className="w-32 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto rounded-full"></div>
//         </div>

//         {/* Render each year */}
//         {years.map(year => (
//           <div key={year} className="mb-16">
//             {/* Year Heading */}
//             <h2 className="text-4xl font-semibold text-white mb-8 border-b border-red-500 pb-2">
//               {year}
//             </h2>

//             <div className="relative">
//               <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-transparent via-red-400 to-transparent opacity-60"></div>
//               <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-red-400 rounded-full animate-bounce" style={{ top: '5%' }}></div>

//               <div className="space-y-12">
//                 {roadmapData[year].map((item, index) => {
//                   const isEven = index % 2 === 0;
//                   const colorClass = statusColors[item.status] || "from-gray-400 to-gray-600";

//                   return (
//                     <div
//                       key={item.id}
//                       className={`relative flex items-center transition-all duration-700 transform ${
//                         isVisible ? 'translate-x-0 opacity-100' : `${isEven ? '-translate-x-20' : 'translate-x-20'} opacity-0`
//                       }`}
//                       style={{ transitionDelay: `${index * 200}ms` }}
//                       onMouseEnter={() => setHoveredItem(item.id)}
//                       onMouseLeave={() => setHoveredItem(null)}
//                     >
//                       {/* Timeline Node */}
//                       <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
//                         <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${colorClass} flex items-center justify-center shadow-2xl border-4 border-white transition-all duration-300 transform ${
//                           hoveredItem === item.id ? 'scale-125 rotate-12' : 'scale-100'
//                         }`}>
//                           <span className="text-3xl">{item.icon}</span>
//                         </div>
//                       </div>

//                       {/* Content Card */}
//                       <div className={`w-5/12 ${isEven ? 'mr-auto pr-16' : 'ml-auto pl-16'}`}>
//                         <div className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl transition-all duration-500 transform ${
//                           hoveredItem === item.id ? 'scale-105 shadow-red-500/20 bg-white/20' : ''
//                         }`}>
//                           {/* Title & Description */}
//                           <h3 className="text-xl font-bold text-white mb-1 tracking-wide">{item.phase}: {item.title}</h3>
//                           <p className="text-white/80 leading-relaxed text-sm mb-2">{item.description}</p>
                          
//                           {/* Tags */}
//                           <div className="flex flex-wrap gap-2 mb-3">
//                             {item.tags.map(tag => (
//                               <span key={tag} className="bg-red-600/40 text-white text-xs px-2 py-1 rounded-full">
//                                 {tag}
//                               </span>
//                             ))}
//                           </div>

//                           {/* Progress Bar */}
//                           <div className="w-full bg-white/20 rounded-full h-2 mb-1">
//                             <div
//                               className={`h-2 rounded-full bg-gradient-to-r ${colorClass}`}
//                               style={{ width: `${item.progress}%`, transition: 'width 0.5s ease-in-out' }}
//                             ></div>
//                           </div>
//                           <p className="text-xs text-white/70">{item.progress}% complete</p>
//                         </div>
//                       </div>

//                       {/* Line from timeline to card */}
//                       <div
//                         className={`absolute left-1/2 ${isEven ? 'right-1/2' : 'left-1/2'} top-8 w-16 h-0.5 bg-gradient-to-r from-red-400/60 to-transparent transition-all duration-500 ${
//                           hoveredItem === item.id ? 'bg-red-400 shadow-lg shadow-red-400/40' : ''
//                         }`}
//                         style={{ transform: `translateX(${isEven ? '-50%' : '50%'})` }}
//                       ></div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         ))}

//         {/* Footer Badge */}
//         <div className={`text-center mt-16 transition-all duration-1000 delay-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//           <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
//             <div className="w-3 h-3 bg-red-400 rounded-full animate-ping"></div>
//             <span className="text-white font-medium">Interactive Roadmap Timeline</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Roadmap;



// const Roadmap = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [hoveredItem, setHoveredItem] = useState(null);

//   useEffect(() => {
//     const timer = setTimeout(() => setIsVisible(true), 100);
//     return () => clearTimeout(timer);
//   }, []);

//   const infographicData = [
//     {
//       id: 1,
//       title: "Market Research & Analysis",
//       description: "Conduct comprehensive market research to identify opportunities, analyze competitors, and understand customer needs for strategic planning.",
//       icon: CheckCircle,
//       color: "from-blue-400 to-blue-600",
//       delay: 0
//     },
//     {
//       id: 2,
//       title: "Strategic Planning & Development",
//       description: "Develop robust business strategies, set clear objectives, and create actionable plans to achieve sustainable growth and success.",
//       icon: Settings,
//       color: "from-cyan-400 to-cyan-600",
//       delay: 200
//     },
//     {
//       id: 3,
//       title: "Brand Building & Identity",
//       description: "Create compelling brand identity, establish market presence, and build strong customer relationships through effective branding strategies.",
//       icon: Home,
//       color: "from-blue-500 to-blue-700",
//       delay: 400
//     },
//     {
//       id: 4,
//       title: "Process Optimization",
//       description: "Streamline operations, improve efficiency, and implement best practices to maximize productivity and minimize operational costs.",
//       icon: Clock,
//       color: "from-teal-400 to-teal-600",
//       delay: 600
//     },
//     {
//       id: 5,
//       title: "Growth & Scaling",
//       description: "Execute growth strategies, expand market reach, and scale operations while maintaining quality and customer satisfaction.",
//       icon: TrendingUp,
//       color: "from-blue-600 to-blue-800",
//       delay: 800
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 p-6 overflow-hidden relative">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
//         <div className="absolute top-40 right-20 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
//         <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
//       </div>

//       <div className="relative z-10 max-w-6xl mx-auto">
//         {/* Header */}
//         <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
//           <h1 className="text-5xl font-bold text-white mb-4 tracking-wide">
//             BUSINESS <span className="text-cyan-300">INFOGRAPHIC</span>
//           </h1>
//           <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
//         </div>

//         {/* Timeline Container */}
//         <div className="relative">
//           {/* Central Timeline Line */}
//           <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-60"></div>
          
//           {/* Animated pulse on timeline */}
//           <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-cyan-400 rounded-full animate-bounce" style={{top: '10%'}}></div>

//           {/* Infographic Items */}
//           <div className="space-y-12">
//             {infographicData.map((item, index) => {
//               const IconComponent = item.icon;
//               const isEven = index % 2 === 0;
              
//               return (
//                 <div
//                   key={item.id}
//                   className={`relative flex items-center transition-all duration-700 transform ${
//                     isVisible 
//                       ? 'translate-x-0 opacity-100' 
//                       : `${isEven ? '-translate-x-20' : 'translate-x-20'} opacity-0`
//                   }`}
//                   style={{
//                     transitionDelay: `${item.delay}ms`
//                   }}
//                   onMouseEnter={() => setHoveredItem(item.id)}
//                   onMouseLeave={() => setHoveredItem(null)}
//                 >
//                   {/* Timeline Node */}
//                   <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
//                     <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-2xl border-4 border-white transition-all duration-300 transform ${
//                       hoveredItem === item.id ? 'scale-125 rotate-12' : 'scale-100'
//                     }`}>
//                       <span className="text-2xl font-bold text-white">{item.id.toString().padStart(2, '0')}</span>
//                     </div>
//                   </div>

//                   {/* Content Card */}
//                   <div className={`w-5/12 ${isEven ? 'mr-auto pr-16' : 'ml-auto pl-16'}`}>
//                     <div className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl transition-all duration-500 transform ${
//                       hoveredItem === item.id 
//                         ? 'scale-105 bg-white/20 shadow-cyan-500/20' 
//                         : 'scale-100'
//                     }`}>
//                       {/* Icon */}
//                       <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} mb-4 transition-all duration-300 ${
//                         hoveredItem === item.id ? 'rotate-12 scale-110' : ''
//                       }`}>
//                         <IconComponent size={24} className="text-white" />
//                       </div>

//                       {/* Content */}
//                       <h3 className="text-xl font-bold text-white mb-3 tracking-wide">
//                         {item.title}
//                       </h3>
//                       <p className="text-gray-200 leading-relaxed text-sm">
//                         {item.description}
//                       </p>
                      
//                       {/* Animated underline */}
//                       <div className={`mt-4 h-1 bg-gradient-to-r ${item.color} rounded-full transition-all duration-500 ${
//                         hoveredItem === item.id ? 'w-full' : 'w-0'
//                       }`}></div>
//                     </div>
//                   </div>

//                   {/* Connection Line */}
//                   <div className={`absolute left-1/2 ${isEven ? 'right-1/2' : 'left-1/2'} top-8 w-16 h-0.5 bg-gradient-to-r from-cyan-400/60 to-transparent transition-all duration-500 ${
//                     hoveredItem === item.id ? 'bg-cyan-400 shadow-lg shadow-cyan-400/50' : ''
//                   }`} style={{
//                     transform: `translateX(${isEven ? '-50%' : '50%'})`
//                   }}></div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Footer */}
//         <div className={`text-center mt-16 transition-all duration-1000 delay-1000 transform ${
//           isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//         }`}>
//           <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
//             <div className="w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
//             <span className="text-white font-medium">Interactive Business Timeline</span>
//           </div>
//         </div>
//       </div>

//       {/* Floating particles animation */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {[...Array(20)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-2 h-2 bg-cyan-400/30 rounded-full animate-pulse"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 5}s`,
//               animationDuration: `${2 + Math.random() * 3}s`
//             }}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Roadmap ;