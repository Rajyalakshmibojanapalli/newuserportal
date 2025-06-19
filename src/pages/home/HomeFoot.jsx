import React, { useState, useEffect } from 'react';
import { Smartphone, Download, Rocket, Sparkles, ArrowRight, Play, Apple, Waves, Shield, TrendingUp } from 'lucide-react';
import coinsmax from '../../assets/Images/coinsmax.png';
import icon from "../../assets/3dcoin.png"
import playstore from '../../assets/Images/playStore.svg'
import secureImg from "../../assets/Images/3dsecure.png"
import applestore from '../../assets/Images/appleStore.svg'
export default function HomeFooter() {
    const [isIframeSupported, setIsIframeSupported] = useState(false);
    const [loading, setLoading] = useState(true);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const onClickNavigateToLogin = () => {
        console.log("Navigate to login");
    };

    const checkWebGL2Support = () => {
        const canvas = document.createElement("canvas");
        const gl = canvas.getContext("webgl2");
        return !!gl;
    };

    useEffect(() => {
        const isSupported = checkWebGL2Support();
        setIsIframeSupported(isSupported);
        setTimeout(() => setLoading(false), 1000);

        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const playStoreLink = "https://play.google.com/store/apps/details?id=com.jaimaxjaimax.jaimaxjaimax";
    const appleStoreLink = "#";

    return (
        <div className="relative overflow-hidden">
            {/* Main Hero Section */}
            <div
                className="w-full min-h-screen relative"
                style={{
                    background: loading ? '#666' : 'linear-gradient(135deg, #094e54, #4ecdc4)',
                }}
            >

                {/* Dynamic Animated Background */}
                <div className="absolute inset-0 overflow-hidden">
                    {/* Primary Floating Orb */}
                    <div
                        className="absolute w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
                        style={{
                            background: 'radial-gradient(circle, #4ecdc4, rgba(78, 205, 196, 0.3), transparent)',
                            left: `${15 + mousePosition.x * 0.03}%`,
                            top: `${10 + mousePosition.y * 0.02}%`,
                            animation: 'float 10s ease-in-out infinite'
                        }}
                    />

                    {/* Secondary Floating Orb */}
                    <div
                        className="absolute w-[400px] h-[400px] rounded-full opacity-25 blur-3xl"
                        style={{
                            background: 'radial-gradient(circle, #26a69a, rgba(38, 166, 154, 0.4), transparent)',
                            right: `${10 + mousePosition.x * 0.02}%`,
                            bottom: `${15 + mousePosition.y * 0.03}%`,
                            animation: 'float 8s ease-in-out infinite reverse'
                        }}
                    />

                    {/* Central Conic Gradient */}
                    <div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10 blur-3xl"
                        style={{
                            background: 'conic-gradient(from 0deg, #4ecdc4, #094e54, #26a69a, #4ecdc4)',
                            animation: 'spin 20s linear infinite'
                        }}
                    />

                    {/* Hexagonal Pattern Overlay */}
                    <div className="absolute inset-0 opacity-5">
                        <div className="h-full w-full"
                            style={{
                                backgroundImage: `
                                     radial-gradient(circle at 25% 25%, rgba(78, 205, 196, 0.3) 2px, transparent 2px),
                                     radial-gradient(circle at 75% 75%, rgba(38, 166, 154, 0.3) 2px, transparent 2px)
                                 `,
                                backgroundSize: '60px 60px',
                                backgroundPosition: '0 0, 30px 30px'
                            }}
                        />
                    </div>

                </div>

                <div className="relative z-10 container mx-auto px-6 py-20">
                    <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">

                        {/* Left Column - Content */}
                        <div className="space-y-8 animate-fadeInUp">
                            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-md border border-white/20 shadow-2xl"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.1)',
                                    boxShadow: '0 8px 32px rgba(78, 205, 196, 0.3)'
                                }}>
                                <Shield className="w-5 h-5 text-white" />
                                <span className="text-sm font-semibold text-white tracking-wider uppercase">Secure Investment</span>
                            </div>

                            {/* Main Heading */}
                            <div className="space-y-6">
                                <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-[#bace27] leading-tight tracking-tight">
                                    Secure Your{" "}
                                    <span className="relative inline-block">
                                        <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
                                            Financial
                                        </span>
                                        <div
                                            className="absolute -bottom-2 left-0 right-0 h-1 rounded-full animate-pulse"
                                            style={{ background: 'linear-gradient(90deg, #4ecdc4, #26a69a, #4ecdc4)' }}
                                        />
                                    </span>
                                    {" "}Tomorrow
                                </h1>

                                <div className="relative group">
                                    <h2 className="text-3xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-2">
                                        with{" "}
                                        <span
                                            className="relative inline-block"
                                            style={{
                                                background: 'linear-gradient(45deg, #4ecdc4, #26a69a)',
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent',
                                                backgroundClip: 'text'
                                            }}
                                        >
                                            Jaimax
                                        </span>
                                    </h2>
                                    <div
                                        className="absolute -inset-2 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                                        style={{ background: 'linear-gradient(45deg, rgba(78, 205, 196, 0.3), rgba(38, 166, 154, 0.3))' }}
                                    />
                                </div>

                                <p className="text-xl lg:text-2xl text-white/90 leading-relaxed font-light max-w-2xl">
                                    Begin your journey into the world of cryptocurrency investment with our{" "}
                                    <span className="font-semibold text-[#bace27]">revolutionary Starter Investment plan</span>.
                                    Your gateway to financial freedom awaits.
                                </p>
                            </div>

                            {/* Download Section */}
                            <div className="space-y-8 pt-4">
                                <div className="flex items-center gap-4">
                                    <div
                                        className="w-12 h-12 rounded-full flex items-center justify-center"
                                        style={{ background: 'linear-gradient(45deg, #4ecdc4, #26a69a)' }}
                                    >
                                        <Download className="w-6 h-6 text-white animate-bounce" />
                                    </div>
                                    <div>
                                        <span className="block text-white font-bold tracking-widest text-sm uppercase">
                                            Download Now
                                        </span>
                                        <span className="text-[#bace27] text-sm">Available on all platforms</span>
                                    </div>
                                </div>

                                {/* Enhanced App Store Buttons */}
                                <div className="flex gap-6 max-w-lg">
                                    <a
                                        href={playStoreLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex-1 relative overflow-hidden rounded-2xl p-1 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
                                        style={{
                                            background: 'linear-gradient(135deg, rgba(78, 205, 196, 0.3), rgba(38, 166, 154, 0.4))',
                                            boxShadow: '0 15px 35px rgba(78, 205, 196, 0.4)'
                                        }}
                                    >
                                        <div
                                            className="relative rounded-xl p-4 backdrop-blur-sm transition-all duration-300 group-hover:backdrop-blur-md"
                                            style={{ background: 'rgba(9, 78, 84, 0.6)' }}
                                        >
                                            <div className="flex items-center gap-4">
                                                <div
                                                    className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                                                // style={{ background: 'linear-gradient(45deg, #4ecdc4, #26a69a)' }}
                                                >
                                                    {/* <Play className="w-6 h-6 text-white" /> */} <img src={playstore} alt="" />
                                                </div>
                                                <div className="text-left">
                                                    <div className="text-xs text-cyan-200 font-medium">Get it on</div>
                                                    <div className="text-lg font-bold text-[#bace27]">Google Play</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            style={{ background: 'linear-gradient(135deg, rgba(78, 205, 196, 0.2), rgba(38, 166, 154, 0.3))' }}
                                        />
                                    </a>

                                    <a
                                        href={appleStoreLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex-1 relative overflow-hidden rounded-2xl p-1 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
                                        style={{
                                            background: 'linear-gradient(135deg, rgba(78, 205, 196, 0.3), rgba(38, 166, 154, 0.4))',
                                            boxShadow: '0 15px 35px rgba(78, 205, 196, 0.4)'
                                        }}
                                    >
                                        <div
                                            className="relative rounded-xl p-4 backdrop-blur-sm transition-all duration-300 group-hover:backdrop-blur-md"
                                            style={{ background: 'rgba(9, 78, 84, 0.6)' }}
                                        >
                                            <div className="flex items-center gap-4">
                                                <div
                                                    className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                                                // style={{ background: 'linear-gradient(45deg, #4ecdc4, #26a69a)' }}
                                                >
                                                    {/* <Apple className="w-6 h-6 text-white" /> */}
                                                    <img src={applestore} alt="" />
                                                </div>
                                                <div className="text-left">
                                                    <div className="text-xs text-cyan-200 font-medium">Download on</div>
                                                    <div className="text-lg font-bold text-[#bace27]">App Store</div>
                                                </div>
                                            </div>
                                        </div>

                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Visual */}
                        <div className="relative flex items-center justify-center animate-fadeInRight">
                            <img src={secureImg} alt="" width="600px" />
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="w-full relative"
                style={{
                    background: loading ? '#666' : 'linear-gradient(135deg, #094e54, #4ecdc4)',
                    minHeight: '60vh'
                }}
            >
                <div className="relative z-10 container mx-auto px-6 py-24 text-center" style={{
                    backgroundImage: `url('${coinsmax}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: 'fixed',
                    backgroundBlendMode: 'multiply',
                    backgroundRepeat: 'no-repeat',

<<<<<<< HEAD
                    {/* Central Conic Gradient */}
                    <div 
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10 blur-3xl"
                        style={{
                            background: 'conic-gradient(from 0deg, #4ecdc4, #094e54, #26a69a, #4ecdc4)',
                            animation: 'spin 20s linear infinite'
                        }}
                    />

                    {/* Hexagonal Pattern Overlay */}
                    <div className="absolute inset-0 opacity-5">
                        <div className="h-full w-full"
                             style={{
                                 backgroundImage: `
                                     radial-gradient(circle at 25% 25%, rgba(78, 205, 196, 0.3) 2px, transparent 2px),
                                     radial-gradient(circle at 75% 75%, rgba(38, 166, 154, 0.3) 2px, transparent 2px)
                                 `,
                                 backgroundSize: '60px 60px',
                                 backgroundPosition: '0 0, 30px 30px'
                             }}
                        />
                    </div>

                    {/* Floating Geometric Shapes */}
                    {/* {[...Array(15)].map((_, i) => (
                        <div
                            key={`stay-${i}`}
                            className="absolute opacity-20"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animation: `floatShape ${4 + Math.random() * 6}s ease-in-out infinite`,
                                animationDelay: `${Math.random() * 3}s`
                            }}
                        >
                            {i % 3 === 0 ? (
                                <div className="w-2 h-2 bg-white rounded-full" />
                            ) : i % 3 === 1 ? (
                                <div className="w-3 h-3 border border-white transform rotate-45" />
                            ) : (
                                <div className="w-2 h-2 bg-white transform rotate-45" />
                            )}
                        </div>
                    ))} */}

                    {/* Wave Animation */}
                    {/* <div className="absolute bottom-0 left-0 right-0 h-32 opacity-10">
                        <svg viewBox="0 0 1200 120" className="w-full h-full">
                            <path 
                                d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" 
                                fill="rgba(78, 205, 196, 0.3)"
                                className="animate-wave"
                            />
                        </svg>
                    </div> */}
                </div>

                <div className="relative z-10 container mx-auto px-6 py-24 text-center" style={{backgroundImage:`url('${coinsmax}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                backgroundBlendMode: 'multiply',
              
                
                width:'100%',height:'100%'}}>
=======
                    width: '100%', height: '100%'
                }}>
>>>>>>> 58921db3f18a278a8ae50afcfb0883d75ca5f5e1
                    <div className="space-y-16 animate-fadeInUp">
                        <div className="relative inline-block group" >
                            <div
                                className="w-40 h-40 rounded-full flex items-center justify-center  group-hover:scale-110 transition-all duration-500 shadow-2xl"
                            >
                                <img src={icon} alt="" width={500} height={500} />

                            </div>

                        </div>
                        <div className="space-y-6">
                            <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                                Stay connected with us for
                            </h2>
                            <div className="relative inline-block group">
                                <span
                                    className="text-4xl lg:text-6xl xl:text-7xl font-extrabold bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]"
                                >
                                    regular updates
                                </span>
                            </div>
                        </div>
                        <div className="pt-12">
                            <button
                                onClick={onClickNavigateToLogin}
                                className="group relative overflow-hidden px-4 py-4 rounded-full font-bold text-white text-xl tracking-wider uppercase transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 border-0 shadow-2xl"
                                style={{
                                    background: 'linear-gradient(135deg, #bace27,rgb(202, 211, 130))',
                                    boxShadow: '0 25px 50px rgba(78, 205, 196, 0.4), 0 0 0 1px rgba(78, 205, 196, 0.2)',
                                    '--tw-ring-color': '#094e54'
                                }}
                            >
                                <div className="relative flex items-center justify-center gap-4">
                                    <span className="group-hover:tracking-widest  transition-all duration-300">Join the Revolution</span>
                                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                                </div>

                                <div
                                    className="absolute inset-0 rounded-2xl opacity-0 group-active:opacity-100 transition-opacity duration-150"
                                    style={{ background: 'rgba(255, 255, 255, 0.2)' }}
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}