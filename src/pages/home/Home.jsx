import React, { Suspense } from 'react';
import { useState, useEffect } from 'react';
import homeBgDesktop from "../../assets/Images/HomeDesktop.jpg";
import homeBgMobile from "../../assets/Images/HomeMobile.jpg";
import Roadmap from './RoadmapDup';
import SplitText from '../../global/SplitText';
import { useNavigate } from 'react-router-dom';
// import Threads from '../../global/Threads';
import Partners from './Partners';
import HomeFooter from './HomeFoot';
import JaimaxFAQ from './Faq';
import AnimatedTestimonials from './Testimonals';
import JaimaxComponent from '../../components/About/About';
import ServicesComponent from './Homeservices';
import Component from './Phase';
import PhaseCarousel from './Phase';
import AboutSection from './HomeAbout';
import FeaturesSection from './HomeFeatures';
import BlogLayout from './Blog';
import CryptoStakingSection from './HomeAbout';
import { Globe } from '../../components/ui/globe';
import HomeContact from './HomeContact';


const Home = () => {
  const [currentBg, setCurrentBg] = useState('');
  const navigate = useNavigate();
  const Threads = React.lazy(() => import('../../global/Threads'));
  useEffect(() => {
    const updateBackgroundImage = () => {
      if (window.innerWidth < 768) {
        setCurrentBg(homeBgMobile);
      } else {
        setCurrentBg(homeBgDesktop);
      }
    };

    updateBackgroundImage();
    window.addEventListener('resize', updateBackgroundImage);

    return () => {
      window.removeEventListener('resize', updateBackgroundImage);
    };
  }, []);

  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };
  const handlRevolution = () => {
    navigate('/login')
  }
  return (
    <div className='outer-container'>
      {/* Hero Section */}
      <div className="revolutionSection w-full min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
        style={{
          backgroundImage: `url(${currentBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed"
        }}>


        <div className="floating-elements">
          <div className="floating-circle circle-1"></div>
          <div className="floating-circle circle-2"></div>
          <div className="floating-circle circle-3"></div>
          <div className="floating-square square-1"></div>
          <div className="floating-square square-2"></div>
        </div>
        <div className="gradient-overlay-1"></div>
        <div className="gradient-overlay-2"></div>
        <div className="relative z-10 text-center px-6 md:px-12 max-w-6xl mx-auto">
          <div className="mb-8 logo-main">

           
            {/* <h1
              className="main-title text-6xl md:text-8xl lg:text-9xl font-black bg-gradient-to-r from-teal-300 via-emerald-400 to-cyan-300 bg-clip-text text-transparent tracking-wider"
              style={{ fontDisplay: 'swap' }}
            >
              JAIMAX
            </h1> */}

            {/* <div className="logo-underline"></div> */}
          </div>
          <div className="mb-12 space-y-4">
            <h2 className="tagline text-2xl md:text-4xl lg:text-5xl font-bold text-white/90 leading-tight">
              <span className="text-white">Secure Your Financial Tomorrow</span>
              <br />
              <span className="typewriter text-[#c5d82e]">with Innovation & Trust</span>
            </h2>
          </div>
          <div className="cta-section">
            <button className="cta-button hover:bg-green-700 rounded-full " 
            style={{
              padding : "1rem 3rem",
              color : "white",
                 background: "linear-gradient(45deg, #c5d82e,rgb(214, 224, 138))"
            }}
            onClick={handlRevolution}>
              <span >join revolution</span>
              <div className="button-glow"></div>
            </button>
          </div>
        </div>
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
      <CryptoStakingSection />
 
      <PhaseCarousel />
      <ServicesComponent />
      <Partners />
      <Roadmap />
      <AnimatedTestimonials />
      <JaimaxFAQ />
           <HomeContact/>
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