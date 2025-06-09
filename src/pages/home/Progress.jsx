// import React, { useState, useEffect, useRef } from 'react';

// const ProjectRoadmap = () => {
//   const [visibleCards, setVisibleCards] = useState(new Set());
//   const [scrollY, setScrollY] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);
//   const containerRef = useRef(null);

//   const roadmapData = [
//     { 
//       id: 'p1-2024',
//       phase: "Phase 1 - 2024", 
//       title: "Concept Development",
//       description: "Foundation building with core team assembly and strategic planning frameworks.",
//       tags: ["Team Formation", "Concept Design", "Strategic Planning"],
//       icon: "🚀",
//       progress: 100,
//       status: "completed",
//       position: { 
//         desktop: { x: 10, y: 5 },
//         mobile: { x: 50, y: 8 }
//       }
//     },
//     { 
//       id: 'p2-2024',
//       phase: "Phase 2 - 2024", 
//       title: "Smart Contract Development",
//       description: "Blockchain architecture with security audits and testing protocols.",
//       tags: ["Smart Contracts", "Security", "Blockchain"],
//       icon: "🔒",
//       progress: 85,
//       status: "active",
//       position: { 
//         desktop: { x: 25, y: 15 },
//         mobile: { x: 50, y: 16 }
//       }
//     },
//     { 
//       id: 'p3-2024',
//       phase: "Phase 3 - 2024", 
//       title: "Website & Documentation",
//       description: "Digital presence with comprehensive technical documentation.",
//       tags: ["Website", "Documentation", "UI/UX"],
//       icon: "📄",
//       progress: 70,
//       status: "active",
//       position: { 
//         desktop: { x: 45, y: 8 },
//         mobile: { x: 50, y: 24 }
//       }
//     },
//     { 
//       id: 'p4-2024',
//       phase: "Phase 4 - 2024", 
//       title: "Presale & ICO Launch",
//       description: "Token launch with comprehensive marketing campaigns.",
//       tags: ["Presale", "ICO", "Marketing"],
//       icon: "💰",
//       progress: 40,
//       status: "upcoming",
//       position: { 
//         desktop: { x: 65, y: 20 },
//         mobile: { x: 50, y: 32 }
//       }
//     },
//     { 
//       id: 'p5-2024',
//       phase: "Phase 5 - 2024", 
//       title: "Mobile App Launch",
//       description: "Cross-platform mobile applications with Web3 integration.",
//       tags: ["Mobile App", "iOS", "Android"],
//       icon: "📱",
//       progress: 25,
//       status: "upcoming",
//       position: { 
//         desktop: { x: 80, y: 12 },
//         mobile: { x: 50, y: 40 }
//       }
//     },
//     { 
//       id: 'p1-2025',
//       phase: "Phase 1 - 2025", 
//       title: "AI Integration",
//       description: "Advanced AI features with machine learning capabilities.",
//       tags: ["AI", "Machine Learning", "Automation"],
//       icon: "🤖",
//       progress: 15,
//       status: "future",
//       position: { 
//         desktop: { x: 85, y: 35 },
//         mobile: { x: 50, y: 48 }
//       }
//     },
//     { 
//       id: 'p2-2025',
//       phase: "Phase 2 - 2025", 
//       title: "Metaverse Platform",
//       description: "Virtual reality ecosystem with NFT integration.",
//       tags: ["Metaverse", "VR", "NFTs"],
//       icon: "🌐",
//       progress: 10,
//       status: "future",
//       position: { 
//         desktop: { x: 75, y: 50 },
//         mobile: { x: 50, y: 56 }
//       }
//     },
//     { 
//       id: 'p3-2025',
//       phase: "Phase 3 - 2025", 
//       title: "DeFi Ecosystem",
//       description: "Decentralized finance platform with yield farming.",
//       tags: ["DeFi", "Yield Farming", "Staking"],
//       icon: "⚡",
//       progress: 5,
//       status: "future",
//       position: { 
//         desktop: { x: 55, y: 45 },
//         mobile: { x: 50, y: 64 }
//       }
//     },
//     { 
//       id: 'p4-2025',
//       phase: "Phase 4 - 2025", 
//       title: "Global Expansion",
//       description: "Worldwide market penetration and partnerships.",
//       tags: ["Global", "Partnerships", "Expansion"],
//       icon: "🌍",
//       progress: 3,
//       status: "future",
//       position: { 
//         desktop: { x: 35, y: 55 },
//         mobile: { x: 50, y: 72 }
//       }
//     },
//     { 
//       id: 'p1-2026',
//       phase: "Phase 1 - 2026", 
//       title: "Advanced Technology",
//       description: "Next-generation features and quantum integration.",
//       tags: ["Quantum", "Advanced Tech", "Innovation"],
//       icon: "⚛️",
//       progress: 0,
//       status: "future",
//       position: { 
//         desktop: { x: 20, y: 65 },
//         mobile: { x: 50, y: 80 }
//       }
//     },
//     { 
//       id: 'p2-2026',
//       phase: "Phase 2 - 2026", 
//       title: "Neural Networks",
//       description: "Brain-computer interface and neural processing.",
//       tags: ["Neural", "BCI", "Processing"],
//       icon: "🧠",
//       progress: 0,
//       status: "future",
//       position: { 
//         desktop: { x: 40, y: 75 },
//         mobile: { x: 50, y: 88 }
//       }
//     },
//     { 
//       id: 'p3-2026',
//       phase: "Phase 3 - 2026", 
//       title: "Space Network",
//       description: "Satellite-based blockchain infrastructure.",
//       tags: ["Space", "Satellites", "Infrastructure"],
//       icon: "🛰️",
//       progress: 0,
//       status: "future",
//       position: { 
//         desktop: { x: 65, y: 70 },
//         mobile: { x: 50, y: 96 }
//       }
//     },
//     { 
//       id: 'p4-2026',
//       phase: "Phase 4 - 2026", 
//       title: "Universal Adoption",
//       description: "Global transformation and mass adoption.",
//       tags: ["Adoption", "Global", "Transformation"],
//       icon: "🌟",
//       progress: 0,
//       status: "future",
//       position: { 
//         desktop: { x: 85, y: 85 },
//         mobile: { x: 50, y: 104 }
//       }
//     },
//   ];

//   // Check for mobile screen
//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
    
//     checkMobile();
//     window.addEventListener('resize', checkMobile);
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   // Scroll handling
//   useEffect(() => {
//     let ticking = false;
//     const handleScroll = () => {
//       if (!ticking) {
//         requestAnimationFrame(() => {
//           if (containerRef.current) {
//             const rect = containerRef.current.getBoundingClientRect();
//             const progress = Math.max(0, Math.min(1, -rect.top / (rect.height - window.innerHeight)));
//             setScrollY(progress);
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

//   // Show cards progressively
//   useEffect(() => {
//     roadmapData.forEach((item, index) => {
//       setTimeout(() => {
//         setVisibleCards(prev => new Set([...prev, item.id]));
//       }, index * 200);
//     });
//   }, []);

//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'completed': return { main: '#10b981', glow: '#10b981', bg: '#10b981' };
//       case 'active': return { main: '#3b82f6', glow: '#3b82f6', bg: '#3b82f6' };
//       case 'upcoming': return { main: '#f59e0b', glow: '#f59e0b', bg: '#f59e0b' };
//       case 'future': return { main: '#6b7280', glow: '#6b7280', bg: '#6b7280' };
//       default: return { main: '#6b7280', glow: '#6b7280', bg: '#6b7280' };
//     }
//   };

//   const RoadSurface = () => (
//     <div className="absolute inset-0 overflow-hidden">
//       {/* Road Background Pattern */}
//       <div 
//         className="absolute inset-0 opacity-20"
//         style={{
//           backgroundImage: `
//             repeating-linear-gradient(45deg, #374151 0px, #374151 20px, transparent 20px, transparent 40px),
//             repeating-linear-gradient(-45deg, #4b5563 0px, #4b5563 20px, transparent 20px, transparent 40px)
//           `,
//           backgroundSize: isMobile ? '30px 30px' : '60px 60px'
//         }}
//       />
      
//       {/* Road Texture */}
//       <div 
//         className="absolute inset-0 opacity-10"
//         style={{
//           backgroundImage: `radial-gradient(circle at 20% 50%, #9ca3af 2px, transparent 2px),
//                            radial-gradient(circle at 80% 50%, #9ca3af 1px, transparent 1px),
//                            radial-gradient(circle at 40% 80%, #9ca3af 1px, transparent 1px)`,
//           backgroundSize: isMobile ? '50px 50px, 40px 40px, 60px 60px' : '100px 100px, 80px 80px, 120px 120px'
//         }}
//       />
//     </div>
//   );

//   const RoadPath = () => {
//     const desktopPath = `M 10,5 Q 25,15 45,8 T 80,12 Q 85,35 75,50 Q 55,45 35,55 Q 20,65 40,75 Q 65,70 85,85`;
//     const mobilePath = `M 50,8 L 50,16 L 50,24 L 50,32 L 50,40 L 50,48 L 50,56 L 50,64 L 50,72 L 50,80 L 50,88 L 50,96 L 50,104`;
    
//     return (
//       <svg 
//         className="absolute inset-0 w-full h-full" 
//         viewBox={isMobile ? "0 0 100 110" : "0 0 100 100"}
//         preserveAspectRatio="none"
//       >
//         <defs>
//           <linearGradient id="roadGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//             <stop offset="0%" stopColor="#1f2937" />
//             <stop offset="50%" stopColor="#374151" />
//             <stop offset="100%" stopColor="#4b5563" />
//           </linearGradient>
//           <filter id="roadGlow">
//             <feGaussianBlur stdDeviation="0.5" result="coloredBlur"/>
//             <feMerge> 
//               <feMergeNode in="coloredBlur"/>
//               <feMergeNode in="SourceGraphic"/>
//             </feMerge>
//           </filter>
//         </defs>
        
//         {/* Main Road */}
//         <path
//           d={isMobile ? mobilePath : desktopPath}
//           stroke="url(#roadGradient)"
//           strokeWidth={isMobile ? "12" : "8"}
//           fill="none"
//           filter="url(#roadGlow)"
//           className="drop-shadow-2xl"
//         />
        
//         {/* Road Borders */}
//         <path
//           d={isMobile ? mobilePath : desktopPath}
//           stroke="#000000"
//           strokeWidth={isMobile ? "16" : "12"}
//           fill="none"
//           opacity="0.3"
//         />
        
//         {/* Center Line */}
//         <path
//           d={isMobile ? mobilePath : desktopPath}
//           stroke="#fbbf24"
//           strokeWidth="1"
//           fill="none"
//           strokeDasharray="4,4"
//           opacity="0.8"
//         >
//           <animate attributeName="stroke-dashoffset" values="0;8" dur="2s" repeatCount="indefinite"/>
//         </path>
        
//         {/* Progress Indicator */}
//         <path
//           d={isMobile ? mobilePath : desktopPath}
//           stroke="#10b981"
//           strokeWidth="4"
//           fill="none"
//           strokeDasharray="100,100"
//           strokeDashoffset={100 - (scrollY * 100)}
//           className="transition-all duration-500"
//           filter="url(#roadGlow)"
//         />
//       </svg>
//     );
//   };

//   const MilestoneMarker = ({ milestone, index }) => {
//     const isVisible = visibleCards.has(milestone.id);
//     const colors = getStatusColor(milestone.status);
//     const [isHovered, setIsHovered] = useState(false);
//     const position = isMobile ? milestone.position.mobile : milestone.position.desktop;
    
//     return (
//       <div
//         className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20"
//         style={{
//           left: `${position.x}%`,
//           top: `${position.y}%`,
//           transform: isVisible 
//             ? 'translate(-50%, -50%) scale(1) rotate(0deg)' 
//             : 'translate(-50%, -50%) scale(0) rotate(180deg)',
//           transition: 'all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
//           transitionDelay: `${index * 0.2}s`
//         }}
//       >
//         {/* Road Sign Post */}
//         <div className="relative">
//           {/* Sign Post */}
//           <div 
//             className="absolute left-1/2 top-full w-2 bg-gradient-to-b from-amber-600 to-amber-800 shadow-lg z-10"
//             style={{ 
//               height: isMobile ? '40px' : '60px', 
//               transform: 'translateX(-50%)',
//               boxShadow: '0 4px 8px rgba(0,0,0,0.3)'
//             }}
//           />
          
//           {/* Milestone Marker */}
//           <div
//             className={`relative rounded-full border-4 border-white shadow-2xl cursor-pointer transition-all duration-500 ${
//               isHovered ? 'scale-125 rotate-12' : 'hover:scale-110'
//             }`}
//             style={{
//               width: isMobile ? '48px' : '64px',
//               height: isMobile ? '48px' : '64px',
//               background: `linear-gradient(135deg, ${colors.bg}dd, ${colors.bg}88)`,
//               boxShadow: `0 0 30px ${colors.glow}80, 0 8px 16px rgba(0,0,0,0.3)`
//             }}
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//           >
//             <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/20 to-transparent"></div>
//             <div className={`w-full h-full flex items-center justify-center ${isMobile ? 'text-lg' : 'text-2xl'}`}>
//               {milestone.icon}
//             </div>
            
//             {/* Pulsing Effect */}
//             {milestone.status === 'active' && (
//               <div 
//                 className="absolute inset-0 rounded-full animate-ping"
//                 style={{ backgroundColor: `${colors.glow}40` }}
//               />
//             )}
//           </div>

//           {/* Info Card */}
//           <div
//             className={`absolute left-1/2 bottom-full mb-4 transform -translate-x-1/2 transition-all duration-500 ${
//               isMobile ? 'w-72' : 'w-80'
//             } ${
//               isHovered ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
//             }`}
//             style={{
//               // Adjust card position on mobile to prevent overflow
//               ...(isMobile && position.x > 70 ? { left: 'auto', right: '0', transform: 'translateX(0)' } : {}),
//               ...(isMobile && position.x < 30 ? { left: '0', transform: 'translateX(0)' } : {})
//             }}
//           >
//             <div className="bg-gray-900/95 backdrop-blur-xl rounded-2xl p-4 md:p-6 border border-white/20 shadow-2xl">
//               {/* Status Badge */}
//               <div 
//                 className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wider mb-3"
//                 style={{ backgroundColor: colors.bg }}
//               >
//                 <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
//                 {milestone.status}
//               </div>

//               {/* Phase Title */}
//               <div className="text-sm text-gray-400 mb-1">{milestone.phase}</div>
//               <h3 className={`font-bold text-white mb-3 ${isMobile ? 'text-lg' : 'text-xl'}`}>
//                 {milestone.title}
//               </h3>
              
//               {/* Description */}
//               <p className="text-gray-300 text-sm leading-relaxed mb-4">
//                 {milestone.description}
//               </p>

//               {/* Tags */}
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {milestone.tags.map((tag, tagIndex) => (
//                   <span
//                     key={tagIndex}
//                     className="px-2 py-1 bg-white/10 text-white text-xs rounded-full border border-white/20"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>

//               {/* Progress */}
//               <div className="space-y-2">
//                 <div className="flex justify-between text-sm">
//                   <span className="text-gray-400">Progress</span>
//                   <span className="text-white font-bold">{milestone.progress}%</span>
//                 </div>
//                 <div className="w-full bg-gray-700/50 rounded-full h-2">
//                   <div
//                     className="h-full rounded-full transition-all duration-1000"
//                     style={{ 
//                       width: `${milestone.progress}%`,
//                       backgroundColor: colors.bg,
//                       boxShadow: `0 0 10px ${colors.glow}80`
//                     }}
//                   />
//                 </div>
//               </div>

//               {/* Arrow */}
//               <div 
//                 className="absolute top-full left-1/2 transform -translate-x-1/2 w-4 h-4 rotate-45 border-r border-b border-white/20"
//                 style={{ 
//                   backgroundColor: 'rgba(17, 24, 39, 0.95)',
//                   ...(isMobile && position.x > 70 ? { left: '80%' } : {}),
//                   ...(isMobile && position.x < 30 ? { left: '20%' } : {})
//                 }}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const RoadSigns = () => (
//     <>
//       {/* Year 2024 Sign */}
//       <div className={`absolute z-30 ${isMobile ? 'top-4 left-4' : 'top-10 left-10'}`}>
//         <div className={`bg-green-600 text-white rounded-lg font-bold shadow-2xl border-4 border-white transform rotate-3 hover:rotate-0 transition-transform duration-300 ${
//           isMobile ? 'px-3 py-2 text-sm' : 'px-6 py-3 text-lg'
//         }`}>
//           START 2024
//           <div className="absolute -bottom-2 left-4 w-4 h-4 bg-amber-600 transform rotate-45"></div>
//         </div>
//       </div>

//       {/* Year 2025 Sign - Adjust position for mobile */}
//       <div className={`absolute z-30 transform ${
//         isMobile 
//           ? 'top-1/2 right-4 -translate-y-1/2' 
//           : 'top-1/2 right-10 -translate-y-1/2'
//       }`}>
//         <div className={`bg-blue-600 text-white rounded-lg font-bold shadow-2xl border-4 border-white transform -rotate-3 hover:rotate-0 transition-transform duration-300 ${
//           isMobile ? 'px-3 py-2 text-sm' : 'px-6 py-3 text-lg'
//         }`}>
//           2025 ZONE
//           <div className="absolute -bottom-2 right-4 w-4 h-4 bg-amber-600 transform rotate-45"></div>
//         </div>
//       </div>

//       {/* Year 2026 Sign */}
//       <div className={`absolute z-30 ${isMobile ? 'bottom-4 right-4' : 'bottom-10 right-10'}`}>
//         <div className={`bg-purple-600 text-white rounded-lg font-bold shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-300 ${
//           isMobile ? 'px-3 py-2 text-sm' : 'px-6 py-3 text-lg'
//         }`}>
//           FUTURE 2026
//           <div className="absolute -bottom-2 left-4 w-4 h-4 bg-amber-600 transform rotate-45"></div>
//         </div>
//       </div>
//     </>
//   );

//   return (
//     <>
//       <style jsx>{`
//         @keyframes roadShimmer {
//           0% { background-position: -100% 0; }
//           100% { background-position: 100% 0; }
//         }
//       `}</style>

//       <div 
//         ref={containerRef}
//         className="relative min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 overflow-hidden"
//         style={{ minHeight: isMobile ? '300vh' : '200vh' }}
//       >
//         {/* Sky Background */}
//         <div className="absolute inset-0 bg-gradient-to-b from-slate-800 via-slate-900 to-gray-900"></div>
        
//         {/* Road Surface */}
//         <RoadSurface />
        
//         {/* Road Path */}
//         <RoadPath />
        
//         {/* Milestone Markers */}
//         {roadmapData.map((milestone, index) => (
//           <MilestoneMarker key={milestone.id} milestone={milestone} index={index} />
//         ))}
        
//         {/* Road Signs */}
//         <RoadSigns />

//         {/* Header */}
//         <div className="relative z-40 text-center py-12 md:py-16 px-4">
//           <h1 className={`font-black text-white mb-4 drop-shadow-2xl ${
//             isMobile ? 'text-4xl' : 'text-6xl md:text-8xl'
//           }`}>
//             PROJECT <span className="text-yellow-400">NEXUS</span>
//           </h1>
//           <p className={`text-gray-300 font-light tracking-wide ${
//             isMobile ? 'text-base' : 'text-xl'
//           }`}>
//             Follow the Road to Success • 2024-2026
//           </p>
//         </div>

//         {/* Legend */}
//         <div className={`fixed z-40 bg-gray-900/90 backdrop-blur-sm rounded-xl border border-white/20 ${
//           isMobile 
//             ? 'bottom-4 left-4 p-3' 
//             : 'bottom-6 left-6 p-4'
//         }`}>
//           <h3 className={`text-white font-bold mb-3 ${isMobile ? 'text-sm' : ''}`}>
//             Road Legend
//           </h3>
//           <div className={`space-y-2 ${isMobile ? 'text-xs' : 'text-sm'}`}>
//             <div className="flex items-center space-x-2">
//               <div className="w-3 h-3 rounded-full bg-green-500"></div>
//               <span className="text-gray-300">Completed</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <div className="w-3 h-3 rounded-full bg-blue-500"></div>
//               <span className="text-gray-300">Active</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
//               <span className="text-gray-300">Upcoming</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <div className="w-3 h-3 rounded-full bg-gray-500"></div>
//               <span className="text-gray-300">Future</span>
//             </div>
//           </div>
//         </div>

//         {/* Progress Indicator */}
//         <div className={`fixed z-40 bg-gray-900/90 backdrop-blur-sm rounded-xl border border-white/20 ${
//           isMobile 
//             ? 'top-4 right-4 p-3' 
//             : 'top-6 right-6 p-4'
//         }`}>
//           <div className={`text-white font-bold mb-2 ${isMobile ? 'text-sm' : ''}`}>
//             Journey Progress
//           </div>
//           <div className={`bg-gray-700 rounded-full h-3 ${isMobile ? 'w-24' : 'w-32'}`}>
//             <div
//               className="h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full transition-all duration-500"
//               style={{ width: `${scrollY * 100}%` }}
//             />
//           </div>
//           <div className={`text-gray-300 mt-1 ${isMobile ? 'text-xs' : 'text-sm'}`}>
//             {Math.round(scrollY * 100)}% Complete
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProjectRoadmap;
import React from 'react'

export default function Progress() {
  return (
    <div>Progress</div>
  )
}
