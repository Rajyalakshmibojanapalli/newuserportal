

import React, { useState, useEffect } from 'react';
import icon from "../assets/3djaimax3.jpg";


const JaimaxSplash = () => {
  const [phase, setPhase] = useState('initial'); // initial -> split -> textReveal -> sectionsComplete -> logoBlur -> settled

  useEffect(() => {
    const timeline = [
      { delay: 200, phase: 'split' },
      { delay: 900, phase: 'textReveal' },
      { delay: 2200, phase: 'sectionsComplete' },
      { delay: 2400, phase: 'logoBlur' },
      { delay: 3400, phase: 'settled' }
    ];
    timeline.forEach(({ delay, phase: nextPhase }) => {
      setTimeout(() => setPhase(nextPhase), delay);
    });
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center bg-black">
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 5px currentColor; }
          50% { box-shadow: 0 0 20px currentColor, 0 0 30px currentColor; }
        }
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        .text-3d {
          text-shadow: 
            0 1px 0 #ccc,
            0 2px 0 #c9c9c9,
            0 3px 0 #bbb,
            0 4px 0 #b9b9b9,
            0 5px 0 #aaa,
            0 6px 1px rgba(0,0,0,.1),
            0 0 5px rgba(0,0,0,.1),
            0 1px 3px rgba(0,0,0,.3),
            0 3px 5px rgba(0,0,0,.2),
            0 5px 10px rgba(0,0,0,.25);
        }
        .logo-3d {
          text-shadow: 
            0 1px 0 #ffffff,
            0 2px 0 #ffffff,
            0 3px 0 #ffffff,
            0 4px 0 #ffffff,
            0 5px 0 #ffffff,
            0 6px 0 #ffffff,
            0 7px 0 #ffffff,
            0 8px 0 #ffffff,
            0 9px 0 #ffffff,
            0 10px 10px rgba(0,0,0,0.4),
            0 20px 20px rgba(0,0,0,0.15),
            0 30px 30px rgba(0,0,0,0.1);
        }
        .shimmer-text {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
          -webkit-background-clip: text;
          background-clip: text;
        }
      `}</style>

      {/* Background image - shows during logo phases */}
      {(phase === 'logoBlur' || phase === 'settled') && (
        <div
          className="absolute inset-0 bg-cover bg-center z-0 transition-opacity duration-700"
          style={{
            backgroundImage: `url(${icon})`,
            filter: 'brightness(0.5)',
            opacity: 1
          }}
        />
      )}

      {/* Left Half - Secure Data */}
      <div
        className={`absolute top-0 left-0 bottom-0 w-1/2 flex items-center justify-center transition-all duration-1000 ease-in-out z-20 ${
          phase === 'initial'
            ? 'transform -translate-y-full'
            : phase === 'sectionsComplete' || phase === 'logoBlur' || phase === 'settled'
            ? 'opacity-0 transform -translate-y-full'
            : 'transform translate-y-0 opacity-100'
        }`}
        style={{ background: 'linear-gradient(45deg, #1e1b4b, #7c3aed, #ec4899)' }}
      >
        <div
          className={`text-center transition-all duration-800 delay-300 ease-out ${
            phase === 'textReveal' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex flex-col items-center justify-center mb-6">
            <div className="w-20 h-20 border-3 border-purple-400 rounded-full flex items-center justify-center mb-6 relative">
              <div className="w-10 h-10 bg-purple-400 rounded-full animate-pulse" style={{ animation: 'pulse-glow 2s infinite' }}></div>
              <div className="absolute inset-0 rounded-full border-2 border-purple-400 animate-ping"></div>
            </div>
            <h2 className="text-6xl font-black text-white mb-2 text-3d" 
                style={{ 
                  textShadow: '0 0 20px rgba(196, 181, 253, 0.5), 0 4px 8px rgba(0,0,0,0.3)' 
                }}>
              SECURE
            </h2>
            <h2 className="text-6xl font-black text-white text-3d"
                style={{ 
                  textShadow: '0 0 20px rgba(196, 181, 253, 0.5), 0 4px 8px rgba(0,0,0,0.3)' 
                }}>
              DATA
            </h2>
          </div>
          <p className="text-purple-300 text-xl font-light mb-2 tracking-wide">End-to-end encryption</p>
          <p className="text-purple-300 text-xl font-light mb-6 tracking-wide">Zero-knowledge architecture</p>
          <div className="flex justify-center space-x-2">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-10 bg-purple-400 opacity-70 rounded-sm"
                style={{ 
                  animation: `pulse-glow 1.5s ease-in-out infinite`,
                  animationDelay: `${i * 0.2}s`
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right Half - Great Future */}
      <div
        className={`absolute top-0 right-0 bottom-0 w-1/2 flex items-center justify-center transition-all duration-1000 ease-in-out z-20 ${
          phase === 'initial'
            ? 'translate-x-full'
            : phase === 'sectionsComplete' || phase === 'logoBlur' || phase === 'settled'
            ? 'opacity-0 translate-x-full'
            : 'translate-x-0 opacity-100'
        }`}
        style={{ background: 'linear-gradient(45deg, #0c0a09, #059669, #0284c7)' }}
      >
        <div
          className={`text-center transition-all duration-800 delay-400 ease-out ${
            phase === 'textReveal' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}
        >
          <div className="flex flex-col items-center justify-center mb-6">
            <div className="w-20 h-20 border-3 border-blue-400 rounded-full flex items-center justify-center mb-6 relative">
              <div className="w-6 h-6 bg-blue-400 rounded-full animate-ping"></div>
              <div className="absolute inset-0 rounded-full border-2 border-blue-400 animate-pulse"></div>
            </div>
            <h2 className="text-6xl font-black text-white mb-2 text-3d"
                style={{ 
                  textShadow: '0 0 20px rgba(96, 165, 250, 0.5), 0 4px 8px rgba(0,0,0,0.3)' 
                }}>
              GREAT
            </h2>
            <h2 className="text-6xl font-black text-white text-3d"
                style={{ 
                  textShadow: '0 0 20px rgba(96, 165, 250, 0.5), 0 4px 8px rgba(0,0,0,0.3)' 
                }}>
              FUTURE
            </h2>
          </div>
          <p className="text-blue-300 text-xl font-light mb-2 tracking-wide">AI-powered trading</p>
          <p className="text-blue-300 text-xl font-light mb-6 tracking-wide">Next-gen blockchain</p>
          <div className="flex justify-center">
            <div className="w-48 h-3 bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 rounded-full animate-pulse relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 shimmer-text"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Center dividing line */}
      <div
        className={`absolute top-0 bottom-0 left-1/2 w-0.5 bg-gradient-to-b from-transparent via-white to-transparent transition-all duration-1000 ease-in-out z-30 ${
          phase === 'split' || phase === 'textReveal' ? 'opacity-80 scale-y-100' : 'opacity-0 scale-y-0'
        }`}
        style={{
          boxShadow: '0 0 10px rgba(255,255,255,0.5)'
        }}
      ></div>

      {/* JAIMAX Logo and Tagline */}
      <div
        className={`absolute inset-0 flex items-center justify-center z-40 transition-all duration-1000 ease-out ${
          phase === 'logoBlur' || phase === 'settled' ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="text-center">
          <h1
            className={`text-9xl font-black tracking-wider transition-all duration-1000 ease-out logo-3d ${
              phase === 'logoBlur'
                ? 'blur-sm scale-95 opacity-80'
                : phase === 'settled'
                ? 'blur-none scale-100 opacity-100'
                : 'blur-lg scale-90 opacity-60'
            }`}
            style={{
              color: phase === 'settled' ? '#ffffff' : '#e5e5e5',
              textShadow: phase === 'settled'
                ? '0 0 30px rgba(139, 92, 246, 0.6), 0 0 60px rgba(139, 92, 246, 0.3), 0 10px 20px rgba(0,0,0,0.5), 0 1px 0 #ffffff, 0 2px 0 #ffffff, 0 3px 0 #ffffff, 0 4px 0 #ffffff, 0 5px 0 #ffffff'
                : '0 0 40px rgba(139, 92, 246, 0.8), 0 0 80px rgba(139, 92, 246, 0.4)',
              filter: phase === 'settled' ? 'drop-shadow(0 0 15px rgba(255,255,255,0.2))' : 'none',
            }}
          >
            JAIMAX
          </h1>

          {/* Subtitle after settle */}
          <div
            className={`mt-8 transition-all duration-1200 delay-500 ease-out ${
              phase === 'settled' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-gray-300 text-2xl font-light tracking-widest mb-4"
               style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
              WHERE SECURITY MEETS INNOVATION
            </p>
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto opacity-60"
                 style={{ boxShadow: '0 0 10px rgba(156, 163, 175, 0.3)' }}></div>
          </div>
        </div>
      </div>

      {/* Enhanced Particle Effects */}
      {(phase === 'logoBlur' || phase === 'settled') && (
        <div className="absolute inset-0 z-30 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full ${
                i % 4 === 0
                  ? 'w-1 h-1 bg-purple-400'
                  : i % 4 === 1
                  ? 'w-2 h-2 bg-white'
                  : i % 4 === 2
                  ? 'w-1.5 h-1.5 bg-blue-400'
                  : 'w-1 h-1 bg-pink-400'
              }`}
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
                opacity: 0.3 + Math.random() * 0.4,
                animation: `float ${4 + Math.random() * 3}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 3}s`,
                boxShadow: `0 0 10px currentColor`,
              }}
            />
          ))}
        </div>
      )}

      {/* Additional glow effects for logo phase */}
      {phase === 'settled' && (
        <div className="absolute inset-0 z-35 pointer-events-none flex items-center justify-center">
          <div className="w-96 h-96 rounded-full bg-gradient-radial from-purple-500/10 via-purple-500/5 to-transparent animate-pulse"></div>
        </div>
      )}
    </div>
  );
};

export default JaimaxSplash;
// const JaimaxSplash = () => {
//   const [phase, setPhase] = useState('initial'); // initial -> split -> textReveal -> sectionsComplete -> logoBlur -> settled

//   useEffect(() => {
//     const timeline = [
//       { delay: 90, phase: 'split' },
//       { delay: 700, phase: 'textReveal' },
//       { delay: 1800, phase: 'sectionsComplete' },
//       { delay: 2000, phase: 'logoBlur' },
//       { delay: 3000, phase: 'settled' }
//     ];
//     timeline.forEach(({ delay, phase: nextPhase }) => {
//       setTimeout(() => setPhase(nextPhase), delay);
//     });
//   }, []);

//   return (
//     <div className="min-h-screen relative overflow-hidden flex items-center justify-center bg-black">
//       {/* Show background image only when JAIMAX logo is visible */}
//       {(phase === 'logoBlur' || phase === 'settled') && (
//         <div
//           className="absolute inset-0 bg-cover bg-center z-0 transition-opacity duration-700"
//           style={{
//             backgroundImage: `url(${icon})`,
//             filter: 'brightness(0.5)',
//             opacity: 1
//           }}
//         />
//       )}

//       {/* Left Half - Secure Data */}
//       <div
//         className={`absolute top-0 left-0 bottom-0 w-1/2 flex items-center justify-center transition-all duration-1000 ease-in-out z-20 ${
//           phase === 'initial'
//             ? 'transform -translate-y-full'
//             : phase === 'sectionsComplete' || phase === 'logoBlur' || phase === 'settled'
//             ? 'opacity-0 transform -translate-y-full'
//             : 'transform translate-y-0 opacity-100'
//         }`}
//         style={{ background: 'linear-gradient(45deg, #0f172a, #195f64, #c2d52c)' }}
//       >
//         <div
//           className={`text-center transition-all duration-800 delay-200 ease-out ${
//             phase === 'textReveal' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
//           }`}
//         >
//           <div className="flex flex-col items-center justify-center mb-4">
//             <div className="w-16 h-16 border-2 border-cyan-400 rounded-full flex items-center justify-center mb-4">
//               <div className="w-8 h-8 bg-cyan-400 rounded-full animate-pulse"></div>
//             </div>
//             <h2 className="text-5xl font-bold text-white mb-4">SECURE</h2>
//             <h2 className="text-5xl font-bold text-white">DATA</h2>
//           </div>
//           <p className="text-cyan-300 text-lg font-light">End-to-end encryption</p>
//           <p className="text-cyan-300 text-lg font-light">Zero-knowledge architecture</p>
//           <div className="flex justify-center mt-6 space-x-1">
//             {[...Array(8)].map((_, i) => (
//               <div
//                 key={i}
//                 className="w-2 h-8 bg-cyan-400 opacity-60 animate-pulse"
//                 style={{ animationDelay: `${i * 0.1}s` }}
//               />
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Right Half - Great Future */}
//       <div
//         className={`absolute top-0 right-0 bottom-0 w-1/2 flex items-center justify-center transition-all duration-800 ease-in-out z-20 ${
//           phase === 'initial'
//             ? 'translate-x-full'
//             : phase === 'sectionsComplete' || phase === 'logoBlur' || phase === 'settled'
//             ? 'opacity-0 translate-x-full'
//             : 'translate-x-0 opacity-100'
//         }`}
//         style={{ background: 'linear-gradient(45deg, #1a1a1a, #1d974a, #195f64)' }}
//       >
//         <div
//           className={`text-center transition-all duration-600 delay-300 ease-out ${
//             phase === 'textReveal' || phase === 'logoBlur' || phase === 'settled'
//               ? 'opacity-100 translate-x-0'
//               : 'opacity-0 -translate-x-6'
//           }`}
//         >
//           <div className="flex flex-col items-center justify-center mb-4">
//             <div className="w-16 h-16 border-2 border-orange-400 rounded-full flex items-center justify-center mb-4">
//               <div className="w-4 h-4 bg-orange-400 rounded-full animate-ping"></div>
//             </div>
//             <h2 className="text-5xl font-bold text-white mb-4">GREAT</h2>
//             <h2 className="text-5xl font-bold text-white">FUTURE</h2>
//           </div>
//           <p className="text-orange-300 text-lg font-light">AI-powered trading</p>
//           <p className="text-orange-300 text-lg font-light">Next-gen blockchain</p>
//           <div className="mt-6">
//             <div className="w-40 h-2 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full mx-auto animate-pulse"></div>
//           </div>
//         </div>
//       </div>

//       {/* Center dividing line */}
//       <div
//         className={`absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-white to-transparent transition-all duration-800 ease-in-out z-30 ${
//           phase === 'split' || phase === 'textReveal' ? 'opacity-60 scale-y-100' : 'opacity-0 scale-y-0'
//         }`}
//       ></div>

//       {/* JAIMAX Logo and Tagline */}
//       <div
//         className={`absolute inset-0 flex items-center justify-center z-40 transition-all duration-800 ease-out ${
//           phase === 'logoBlur' || phase === 'settled' ? 'opacity-100' : 'opacity-0'
//         }`}
//       >
//         <div className="text-center">
 
//           <h1
//             className={`text-9xl font-black transition-all duration-800 ease-out ${
//               phase === 'logoBlur'
//                 ? 'blur-lg scale-95'
//                 : phase === 'settled'
//                 ? 'blur-none scale-100'
//                 : 'blur-xl scale-90'
//             }`}
//             style={{
//               textShadow:
//                 phase === 'settled'
//                   ? '0 0 20px rgba(41, 185, 84, 0.3), 0 0 40px rgba(52, 143, 79, 0.1)'
//                   : '0 0 60px #bace27',
//               color: phase === 'settled' ? '#ffffff' : 'transparent',
//               background:
//                 phase === 'logoBlur'
//                   ? 'linear-gradient(45deg, #ffffff, #e5e5e5)'
//                   : 'none',
//               backgroundClip: phase === 'logoBlur' ? 'text' : 'initial',
//               WebkitBackgroundClip: phase === 'logoBlur' ? 'text' : 'initial',
//               filter: phase === 'settled' ? 'drop-shadow(0 0 10px rgba(255,255,255,0.1))' : 'none',
//             }}
//           >
//             JAIMAX
//           </h1>

//           {/* Subtitle after settle */}
//           <div
//             className={`mt-6 transition-all duration-1000 delay-300 ease-out ${
//               phase === 'settled' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
//             }`}
//           >
//             <p className="text-gray-300 text-xl font-light tracking-widest">
//               WHERE SECURITY MEETS INNOVATION
//             </p>
//             <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mt-4 opacity-50"></div>
//           </div>
//         </div>
//       </div>

//       {/* Particle Effects during logo phases */}
//       {(phase === 'logoBlur' || phase === 'settled') && (
//         <div className="absolute inset-0 z-30 pointer-events-none">
//           {[...Array(15)].map((_, i) => (
//             <div
//               key={i}
//               className={`absolute rounded-full opacity-30 ${
//                 i % 3 === 0
//                   ? 'w-1 h-1 bg-cyan-400'
//                   : i % 3 === 1
//                   ? 'w-2 h-2 bg-white'
//                   : 'w-1.5 h-1.5 bg-orange-400'
//               }`}
//               style={{
//                 left: `${15 + Math.random() * 70}%`,
//                 top: `${15 + Math.random() * 70}%`,
//                 animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
//                 animationDelay: `${Math.random() * 2}s`,
//               }}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default JaimaxSplash;

// import React, { useState, useEffect } from 'react';

// import icon from "../assets/3djaimax3.jpg"

// const JaimaxSplash = () => {
//   const [phase, setPhase] = useState('initial'); // initial -> split -> textReveal -> sectionsComplete -> logoBlur -> settled

//   useEffect(() => {
//     const timeline = [
//       { delay: 90, phase: 'split' },           // 0.3s - sections slide in
//       { delay: 700, phase: 'textReveal' },      // 0.9s - text appears
//       { delay: 1800, phase: 'sectionsComplete' }, // 1.8s - sections fade out
//       { delay: 2000, phase: 'logoBlur' },       // 2.2s - logo appears blurred
//       { delay: 3000, phase: 'settled' }         // 3.0s - logo settles
//     ];

//     timeline.forEach(({ delay, phase: nextPhase }) => {
//       setTimeout(() => setPhase(nextPhase), delay);
//     });
//   }, []);

//   return (
//     <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center">
      
//       {/* Left Half - Secure Data - Comes from TOP */}
//       <div className={`absolute top-0 left-0 bottom-0 w-1/2 flex items-center justify-center transition-all duration-1000 ease-in-out ${
//         phase === 'initial' ? 'transform -translate-y-full' : 
//         phase === 'sectionsComplete' || phase === 'logoBlur' || phase === 'settled' ? 'opacity-0 transform -translate-y-full' : 
//         'transform translate-y-0 opacity-100'
//       }`}
//        style={{ background: 'linear-gradient(45deg, #0f172a, #195f64, #c2d52c)' }}>
//         <div className={`text-center transition-all duration-800 delay-200 ease-out ${
//           phase === 'textReveal' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
//         }`}>
//           <div className="flex flex-col items-center justify-center mb-4">
//             <div className="w-16 h-16 border-2 border-cyan-400 rounded-full flex items-center justify-center mb-4">
//               <div className="w-8 h-8 bg-cyan-400 rounded-full animate-pulse"></div>
//             </div>
//             <h2 className="text-5xl font-bold text-white mb-4">SECURE</h2>
//             <h2 className="text-5xl font-bold text-white">DATA</h2>
//           </div>
//           <p className="text-cyan-300 text-lg font-light">End-to-end encryption</p>
//           <p className="text-cyan-300 text-lg font-light">Zero-knowledge architecture</p>
//           <div className="flex justify-center mt-6 space-x-1">
//             {[...Array(8)].map((_, i) => (
//               <div
//                 key={i}
//                 className="w-2 h-8 bg-cyan-400 opacity-60 animate-pulse"
//                 style={{ animationDelay: `${i * 0.1}s` }}
//               />
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Right Half - Great Future - Faster animation */}
//       <div className={`absolute top-0 right-0 bottom-0 w-1/2  flex items-center justify-center transition-all duration-800 ease-in-out ${
//         phase === 'initial' ? 'translate-x-full' : 
//         phase === 'sectionsComplete' || phase === 'logoBlur' || phase === 'settled' ? 'opacity-0 translate-x-full' : 
//         'translate-x-0 opacity-100'
//       }`} style={{ background: 'linear-gradient(45deg, #1a1a1a, #1d974a, #195f64)' }}>
//         <div className={`text-center transition-all duration-600 delay-300 ease-out ${
//           phase === 'textReveal' || phase === 'logoBlur' || phase === 'settled' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
//         }`}>
//           <div className="flex flex-col items-center justify-center mb-4">
//             <div className="w-16 h-16 border-2 border-orange-400 rounded-full flex items-center justify-center mb-4">
//               <div className="w-4 h-4 bg-orange-400 rounded-full animate-ping"></div>
//             </div>
//             <h2 className="text-5xl font-bold text-white mb-4">GREAT</h2>
//             <h2 className="text-5xl font-bold text-white">FUTURE</h2>
//           </div>
//           <p className="text-orange-300 text-lg font-light">AI-powered trading</p>
//           <p className="text-orange-300 text-lg font-light">Next-gen blockchain</p>
//           <div className="mt-6">
//             <div className="w-40 h-2 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full mx-auto animate-pulse"></div>
//           </div>
//         </div>
//       </div>

//       {/* Center dividing line - smoother transition */}
//       <div className={`absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-white to-transparent transition-all duration-800 ease-in-out ${
//         phase === 'split' || phase === 'textReveal' ? 'opacity-60 scale-y-100' : 'opacity-0 scale-y-0'
//       }`}></div>

//       {/* JAIMAX Logo - Smoother blur transition */}
    

//      (
//     <div className="relative w-full h-screen overflow-hidden bg-black">
//       {/* Background image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center z-0"
//         style={{ backgroundImage: `url(${icon})`, filter: 'brightness(0.2)' }}
//       ></div>

//       {/* Background particles (optional) */}
//       {(phase === 'logoBlur' || phase === 'settled') && (
//         <div className="absolute inset-0 z-10">
//           {[...Array(15)].map((_, i) => (
//             <div
//               key={i}
//               className="absolute w-1 h-1 bg-white rounded-full animate-ping"
//               style={{
//                 top: `${Math.random() * 100}%`,
//                 left: `${Math.random() * 100}%`,
//                 animationDelay: `${Math.random() * 2}s`,
//                 animationDuration: '3s',
//               }}
//             />
//           ))}
//         </div>
//       )}

//       {/* Main content */}
//       <div
//         className={`absolute inset-0 flex items-center justify-center z-20 transition-all duration-800 ease-out ${
//           phase === 'logoBlur' || phase === 'settled' ? 'opacity-100' : 'opacity-0'
//         }`}
//       >
//         <div className="text-center" 
//         >
//           {/* Animated tagline above logo */}
//           <div
//             className={`mb-4 text-xl font-semibold tracking-wider text-cyan-200 opacity-0 animate-fade-in-up` 
              
//             }
//           >
//             Empowering the Future of Finance
//           </div>

//           {/* JAIMAX Logo Text */}
//           <h1
//             className={`text-9xl font-black transition-all duration-800 ease-out ${
//               phase === 'logoBlur'
//                 ? 'blur-lg scale-95'
//                 : phase === 'settled'
//                 ? 'blur-none scale-100'
//                 : 'blur-xl scale-90'
//             }`}
//             style={{
//               textShadow:
//                 phase === 'settled'
//                   ? '0 0 20px rgba(41, 185, 84, 0.3), 0 0 40px rgba(52, 143, 79, 0.1)'
//                   : '0 0 60px #bace27',
//               color: phase === 'settled' ? '#ffffff' : 'transparent',
//               background:
//                 phase === 'logoBlur'
//                   ? 'linear-gradient(45deg, #ffffff, #e5e5e5)'
//                   : 'none',
//               backgroundClip: phase === 'logoBlur' ? 'text' : 'initial',
//               WebkitBackgroundClip: phase === 'logoBlur' ? 'text' : 'initial',
//               filter:
//                 phase === 'settled'
//                   ? 'drop-shadow(0 0 10px rgba(255,255,255,0.1))'
//                   : 'none',
//             }}
//           >
//             JAIMAX
//           </h1>

//           {/* Subtitle after settle */}
//           <div
//             className={`mt-6 transition-all duration-1000 delay-300 ease-out ${
//               phase === 'settled' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
//             }`}
//           >
//             <p className="text-gray-300 text-xl font-light tracking-widest">
//               WHERE SECURITY MEETS INNOVATION
//             </p>
//             <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mt-4 opacity-50"></div>
//           </div>
//         </div>
//       </div>
//     </div>

//       {/* Enhanced background particles during logo phase */}
//       {(phase === 'logoBlur' || phase === 'settled') && (
//         <div className="absolute inset-0 z-10">
//           {[...Array(15)].map((_, i) => (
//             <div
//               key={i}
//               className={`absolute rounded-full opacity-30 ${
//                 i % 3 === 0 ? 'w-1 h-1 bg-cyan-400' : 
//                 i % 3 === 1 ? 'w-2 h-2 bg-white' : 
//                 'w-1.5 h-1.5 bg-orange-400'
//               }`}
//               style={{
//                 left: `${15 + Math.random() * 70}%`,
//                 top: `${15 + Math.random() * 70}%`,
//                 animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
//                 animationDelay: `${Math.random() * 2}s`
//               }}
//             />
//           ))}
//         </div>
//       )}

     

//     </div>
//   );
// };

// export default JaimaxSplash;