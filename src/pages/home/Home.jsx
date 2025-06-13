import React, { useState, useEffect, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import homeBgDesktop from "../../assets/Images/HomeDesktop.jpg";
import homeBgMobile from "../../assets/Images/HomeMobile.jpg";

// Lazy loaded
const Threads = React.lazy(() => import('../../global/Threads'));

// Components
import Roadmap from './RoadmapDup';
import Partners from './Partners';
import HomeFooter from './HomeFoot';
import JaimaxFAQ from './Faq';
import AnimatedTestimonials from './Testimonals';
import ServicesComponent from './Homeservices';
import PhaseCarousel from './Phase';
import CryptoStakingSection from './HomeAbout';
import HomeContact from './HomeContact';

const Home = () => {
  const [currentBg, setCurrentBg] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const updateBackgroundImage = () => {
      setCurrentBg(window.innerWidth < 768 ? homeBgMobile : homeBgDesktop);
    };

    const debounceResize = () => {
      clearTimeout(window.resizeTimeout);
      window.resizeTimeout = setTimeout(updateBackgroundImage, 150);
    };

    updateBackgroundImage();
    window.addEventListener('resize', debounceResize);

    return () => {
      window.removeEventListener('resize', debounceResize);
      clearTimeout(window.resizeTimeout);
    };
  }, []);

  const handleJoinRevolution = () => {
    navigate('/login');
  };

  return (
    <div className="outer-container">

      {/* Hero Section */}
      <div
        className="revolutionSection w-full min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
        style={{
          backgroundImage: `url(${currentBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed"
        }}
      >
        {/* Floating Elements */}
        <div className="floating-elements">
          <div className="floating-circle circle-1"></div>
          <div className="floating-circle circle-2"></div>
          <div className="floating-circle circle-3"></div>
          <div className="floating-square square-1"></div>
          <div className="floating-square square-2"></div>
        </div>

        {/* Overlays */}
        <div className="gradient-overlay-1"></div>
        <div className="gradient-overlay-2"></div>

        {/* Main Heading */}
        <div className="relative z-10 text-center px-6 md:px-12 max-w-6xl mx-auto mt-44 md:mt-48">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="tagline text-2xl md:text-4xl lg:text-5xl font-bold leading-tight text-center"
          >
            <span
              style={{
                color: '#b8cc26',
                display: 'block',
                textShadow: '0 2px 6px rgba(0, 0, 0, 0.6)',
              }}
            >
              Secure Your Financial Tomorrow
            </span>
            <span
              style={{
                color: '#fff',
                textShadow: '0 1px 4px rgba(0,0,0,0.4)',
                display: 'block',
                marginTop: '0.5rem',
              }}
            >
              with Innovation & Trust
            </span>
          </motion.h2>

          {/* CTA Button */}
          <div className="cta-section mt-6">
            <button
              className="cta-button rounded-full hover:bg-lime-600 transition-transform duration-300 hover:scale-105"
              style={{
                padding: "1rem 3rem",
                color: "white",
                backgroundColor: "#1e964a",
                boxShadow: "0 0 12px rgba(186, 206, 39, 0.5)",
                border: "1px solid #bace27"
              }}
              onClick={handleJoinRevolution}
            >
              <span className="uppercase tracking-wide font-semibold">Join Revolution</span>
            </button>
          </div>
        </div>

        {/* Threads Animation */}
        <div className="absolute bottom-0 left-0 right-0 h-[400px] md:h-[600px] pointer-events-none">
          <div className="w-full h-full relative opacity-60">
            <Suspense fallback={<div>Loading threads...</div>}>
              <Threads
                amplitude={1.5}
                distance={0}
                enableMouseInteraction={true}
              />
            </Suspense>
          </div>
        </div>
      </div>

      {/* Page Sections */}
      <CryptoStakingSection />
      <PhaseCarousel />
      <ServicesComponent />
      <Partners />
      <Roadmap />
      <AnimatedTestimonials />
      <JaimaxFAQ />
      <HomeContact />
      <HomeFooter />
    </div>
  );
};

export default Home;



// <style jsx>{`
//         .outer-container {
//           position: relative;
//           overflow: hidden;
//         }

//         /* Main Content Styles */
//         .revolutionSection {
//           position: relative;
//         }

//         /* Floating Background Elements */
//         .floating-elements {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           pointer-events: none;
//           overflow: hidden;
//         }

//         .floating-circle, .floating-square {
//           position: absolute;
//           opacity: 0.1;
//         }

//         .floating-circle {
//           border-radius: 50%;
//           background: linear-gradient(45deg, #074e53, #0d7377);
//         }

//         .circle-1 {
//           width: 300px;
//           height: 300px;
//           top: 10%;
//           left: -10%;
//           animation: floatUpDown 6s ease-in-out infinite;
//         }

//         .circle-2 {
//           width: 200px;
//           height: 200px;
//           top: 60%;
//           right: -5%;
//           animation: floatUpDown 8s ease-in-out infinite reverse;
//         }

//         .circle-3 {
//           width: 150px;
//           height: 150px;
//           top: 30%;
//           right: 20%;
//           animation: floatLeftRight 10s ease-in-out infinite;
//         }

//         .floating-square {
//           background: linear-gradient(45deg, #14a085, #7dd3fc);
//           transform: rotate(45deg);
//         }

//         .square-1 {
//           width: 100px;
//           height: 100px;
//           top: 20%;
//           right: 10%;
//           animation: floatRotate 12s linear infinite;
//         }

//         .square-2 {
//           width: 80px;
//           height: 80px;
//           bottom: 30%;
//           left: 15%;
//           animation: floatRotate 15s linear infinite reverse;
//         }

//         @keyframes floatUpDown {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-30px) rotate(180deg); }
//         }

//         @keyframes floatLeftRight {
//           0%, 100% { transform: translateX(0px); }
//           50% { transform: translateX(30px); }
//         }

//         @keyframes floatRotate {
//           0% { transform: rotate(0deg); }
//           100% { transform: rotate(360deg); }
//         }

//         /* Gradient Overlays */
//         .gradient-overlay-1 {
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           background: radial-gradient(circle at 30% 20%, rgba(7, 78, 83, 0.4) 0%, transparent 50%);
//           pointer-events: none;
//         }

//         .gradient-overlay-2 {
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           background: linear-gradient(135deg, rgba(7, 78, 83, 0.3) 0%, rgba(20, 160, 133, 0.2) 100%);
//           pointer-events: none;
//         }

//         /* Enhanced Logo Styles */
//         .logo-main {
//           position: relative;
//         }

//         .main-title {
//           background: linear-gradient(45deg,rgb(59, 122, 65),rgb(29, 224, 49), #074e53,rgb(11, 193, 41));
//           background-size: 300% 300%;
//           background-clip: text;
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           animation: gradientShift 4s ease-in-out infinite;
//           filter: drop-shadow(0 0 20px rgba(7, 78, 83, 0.5));
//           position: relative;
//       }

//         .logo-main:not(:has(.main-title)) .fallback-title {
//           display: block;
//         }

//         .logo-underline {
//           height: 4px;
//           background: linear-gradient(90deg, transparent, #074e53, #14a085, transparent);
//           margin: 1rem auto 0;
//           width: 0;
//           animation: underlineExpand 2s ease-out 1s forwards;
//         }

//         @keyframes gradientShift {
//           0%, 100% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//         }

//         @keyframes underlineExpand {
//           to { width: 60%; }
//         }

//         /* Tagline Styles */
//         .tagline {
//           opacity: 0;
//           animation: fadeInUp 1s ease-out 1.5s forwards;
//         }

//         .gradient-text {
//           background: linear-gradient(45deg, #14a085, #074e53);
//           background-clip: text;
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//         }

//         .typewriter {
//           display: inline-block;
//           // border-right: 2px solid #c5d82e;
//           animation: typewriter 3s steps(20) 2s forwards, blinkCursor 1s infinite;
//           overflow: hidden;
//           white-space: nowrap;
//           width: 0;
//         }

//         @keyframes typewriter {
//           to { width: 100%; }
//         }

//         @keyframes blinkCursor {
//           0%, 50% { border-color: #14a085; }
//           51%, 100% { border-color: transparent; }
//         }

//         @keyframes fadeInUp {
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//         }

//         /* CTA Button */
//         .cta-section {
//           opacity: 0;
//           animation: fadeInUp 1s ease-out 3s forwards;
//         }

//         .cta-button {
//           position: relative;
//           padding: 1rem 2.5rem;
//           background: linear-gradient(45deg, #c5d82e,rgb(214, 224, 138));
//           border: none;
//           color: white;
//           font-size: 1.2rem;
//           font-weight: 600;
//           cursor: pointer;
//           overflow: hidden;
//           transition: transform 0.3s ease, box-shadow 0.3s ease;
//         }

//         .cta-button:hover {
//           transform: translateY(-3px);
//           box-shadow: 0 10px 30px rgba(7, 78, 83, 0.4);
//         }

//         .button-glow {
//           position: absolute;
//           top: 0;
//           left: -100%;
//           width: 100%;
//           height: 100%;
//           background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
//           transition: left 0.5s ease;
//         }

//         .cta-button:hover .button-glow {
//           left: 100%;
//         }

//         /* Enhanced Scroll Indicator */
//         .scroll-indicator {
//           position: absolute;
//           bottom: 2rem;
//           left: 50%;
//           transform: translateX(-50%);
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           color: white;
//           opacity: 0;
//           animation: fadeInUp 1s ease-out 4s forwards;
//         }

//         .scroll-mouse {
//           width: 24px;
//           height: 40px;
//           border: 2px solid rgba(255, 255, 255, 0.6);
//           border-radius: 12px;
//           position: relative;
//           margin-bottom: 0.5rem;
//           animation: bounce 2s infinite;
//         }

//         .scroll-wheel {
//           width: 2px;
//           height: 8px;
//           background: rgba(20, 160, 133, 0.8);
//           border-radius: 1px;
//           position: absolute;
//           top: 6px;
//           left: 50%;
//           transform: translateX(-50%);
//           animation: scrollWheel 2s infinite;
//         }

//         .scroll-text {
//           font-size: 0.8rem;
//           letter-spacing: 0.1em;
//           text-transform: uppercase;
//           opacity: 0.7;
//         }

//         @keyframes bounce {
//           0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
//           40% { transform: translateY(-10px); }
//           60% { transform: translateY(-5px); }
//         }

//         @keyframes scrollWheel {
//           0% { opacity: 1; transform: translateX(-50%) translateY(0); }
//           50% { opacity: 0.3; transform: translateX(-50%) translateY(8px); }
//           100% { opacity: 1; transform: translateX(-50%) translateY(0); }
//         }

//         /* Responsive Adjustments */
//         @media (max-width: 768px) {
//           .logo-text {
//             font-size: 2.5rem;
//           }
          
//           .floating-circle, .floating-square {
//             opacity: 0.05;
//           }
          
//           .circle-1, .circle-2 {
//             width: 150px;
//             height: 150px;
//           }
          
//           .typewriter {
//             font-size: 1.2rem;
//           }
//         }

// }
//       `}</style>