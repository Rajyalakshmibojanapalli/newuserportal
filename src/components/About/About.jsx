
import React, { useRef, useState, useEffect } from 'react';
import { TrendingUp, Users, Coins, Shield, CreditCard, Globe, Sparkles, ArrowRight } from 'lucide-react';

const JaimaxComponent = () => {
  const leftBoxRef = useRef(null);
  const rightBoxRef = useRef(null);
  const statsCardsRef = useRef(null);
  const thirdBoxRef = useRef(null);
  const [animatedPrice, setAnimatedPrice] = useState(0);
  const [animatedTokens, setAnimatedTokens] = useState(0);
  const [animatedMembers, setAnimatedMembers] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [thirdBoxVisible, setThirdBoxVisible] = useState(false);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === leftBoxRef.current) {
              setIsVisible(true);
            }
            if (entry.target === statsCardsRef.current) {
              setStatsVisible(true);
            }
            if (entry.target === thirdBoxRef.current) {
              setThirdBoxVisible(true);
            }
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the element is visible
        rootMargin: '0px 0px -100px 0px' // Start animation 100px before element comes into view
      }
    );

    if (leftBoxRef.current) {
      observer.observe(leftBoxRef.current);
    }

    if (statsCardsRef.current) {
      observer.observe(statsCardsRef.current);
    }
    if (thirdBoxRef.current) {
      observer.observe(thirdBoxRef.current);
    }

    return () => {
      if (leftBoxRef.current) {
        observer.unobserve(leftBoxRef.current);
      }
      if (statsCardsRef.current) {
        observer.unobserve(statsCardsRef.current);
      }
      if (thirdBoxRef.current) {
        observer.unobserve(thirdBoxRef.current);
      }
    };
  }, []);

  // Animate numbers on component mount
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

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      animate();
    };

    setTimeout(() => animateNumber(priceTarget, setAnimatedPrice, 1500), 200);
    setTimeout(() => animateNumber(tokensTarget, setAnimatedTokens, 2000), 400);
    setTimeout(() => animateNumber(membersTarget, setAnimatedMembers, 1800), 600);
  }, []);

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return Math.floor(num).toLocaleString();
  };

  return (
    <div className="min-h-screen bg-[#195f64]  p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#b1c201]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-teal-300/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-4 mb-6 group">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-[#085259] via-teal-500 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-2xl transform group-hover:scale-110 transition-all duration-300">
                J
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-[#085259] to-cyan-400 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
            </div>
            <div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-black via-slate-800 to-gray-700 bg-clip-text text-transparent">
                J COIN
              </h1>
              <div className="flex items-center gap-2 mt-1">
                <Sparkles className="w-4 h-4 text-slate-600" />
                <span className="text-slate-700 text-sm font-medium">Premium Crypto Experience</span>
              </div>
            </div>
          </div>

          <p className="text-slate-800 text-2xl mb-4 font-light">Your Gateway to Unlocking Wealth</p>

          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#085259]/10 to-emerald-600/10 backdrop-blur-sm px-6 py-3 rounded-full border border-emerald-400/30 shadow-lg">
            <div className="relative">
              <div className="w-4 h-4 bg-gradient-to-r from-emerald-400 to-green-300 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 w-4 h-4 bg-emerald-400 rounded-full animate-ping opacity-30"></div>
            </div>
            <span className="text-emerald-700 font-semibold text-lg">Phase One - LIVE NOW</span>
          </div>
        </div>

        {/* Live Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12" ref={statsCardsRef}>
          {/* Current Price */}
          <div
            className={`group bg-gradient-to-br from-white/30 via-white/20 to-[#085259]/10 backdrop-blur-xl rounded-3xl p-8 border border-white/40 hover:border-[#085259]/50 transition-all duration-1000 shadow-2xl hover:shadow-[#085259]/20 hover:-translate-y-2 transform ease-out ${statsVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-20 opacity-0'
              }`}
            style={{
              transitionDelay: '0.1s'
            }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-emerald-400/20 to-green-500/20 rounded-2xl">
                <TrendingUp className="w-8 h-8 text-emerald-700" />
              </div>
              <h2 className="text-xl font-bold text-slate-800">Live Price</h2>
            </div>
            <div className="space-y-3">
              <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-green-700 bg-clip-text text-transparent">
                ${animatedPrice.toFixed(6)}
              </div>
              <div className="text-lg text-slate-600 font-medium">
                ₹0.01 INR
              </div>
              <div className="flex items-center gap-2 text-emerald-600 text-sm">
                <ArrowRight className="w-4 h-4" />
                <span>+12.5% 24h</span>
              </div>
            </div>
          </div>

          {/* Sold Tokens */}
          <div
            className={`group bg-gradient-to-br from-white/30 via-white/20 to-[#085259]/10 backdrop-blur-xl rounded-3xl p-8 border border-white/40 hover:border-[#085259]/50 transition-all duration-1000 shadow-2xl hover:shadow-[#085259]/20 hover:-translate-y-2 transform ease-out ${statsVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-20 opacity-0'
              }`}
            style={{
              transitionDelay: '0.3s'
            }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-[#085259]/30 to-cyan-500/20 rounded-2xl">
                <Coins className="w-8 h-8 text-cyan-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Sold Tokens</h3>
            </div>
            <div className="text-4xl font-bold bg-gradient-to-r from-[#085259] to-cyan-700 bg-clip-text text-transparent">
              {formatNumber(animatedTokens)}
            </div>
            <div className="text-lg text-slate-600 font-medium mt-3">
              of 10B Total Supply
            </div>
            <div className="w-full bg-slate-400/50 rounded-full h-3 mt-4 overflow-hidden">
              <div
                className="bg-gradient-to-r from-[#085259] via-teal-400 to-cyan-300 h-3 rounded-full transition-all duration-2000 shadow-lg"
                style={{ width: `${(animatedTokens / 10000000000) * 100}%` }}
              ></div>
            </div>
            <div className="text-sm text-cyan-700 mt-2 font-medium">
              {((animatedTokens / 10000000000) * 100).toFixed(2)}% Complete
            </div>
          </div>

          {/* Live Members */}
          <div
            className={`group bg-gradient-to-br from-white/30 via-white/20 to-[#085259]/10 backdrop-blur-xl rounded-3xl p-8 border border-white/40 hover:border-[#085259]/50 transition-all duration-1000 shadow-2xl hover:shadow-[#085259]/20 hover:-translate-y-2 transform ease-out ${statsVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-20 opacity-0'
              }`}
            style={{
              transitionDelay: '0.5s'
            }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-purple-500/20 to-[#085259]/30 rounded-2xl">
                <Users className="w-8 h-8 text-purple-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Live Members</h3>
            </div>
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-700 to-[#085259] bg-clip-text text-transparent">
              {formatNumber(animatedMembers)}
            </div>
            <div className="text-lg text-slate-600 font-medium mt-3">
              Active Investors
            </div>
            <div className="flex items-center gap-2 text-purple-700 text-sm mt-3">
              <div className="w-2 h-2 bg-purple-700 rounded-full animate-pulse"></div>
              <span>Growing Community</span>
            </div>
          </div>
        </div>

        {/* Referral Banner */}
        <div className={`bg-gradient-to-r from-emerald-600 via-teal-700 to-cyan-700 rounded-3xl p-8 mb-12 text-center relative overflow-hidden shadow-2xl transition-all duration-1000 ease-out transform ${thirdBoxVisible
          ? 'scale-100 opacity-100'
          : 'scale-95 opacity-0'
          }`}
          style={{
            transitionDelay: '0.3s'
          }}
          ref={thirdBoxRef}>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="w-8 h-8 text-yellow-200" />
              <h3 className="text-3xl font-bold text-white">Referral Rewards</h3>
              <Sparkles className="w-8 h-8 text-yellow-200" />
            </div>
            <p className="text-white text-xl font-medium">
              Earn <span className="text-yellow-200 font-bold text-2xl">10%</span> of a referral's first purchase in your wallet
            </p>
            <div className="mt-4 inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
              <span className="text-yellow-100 text-sm font-medium">Limited Time Bonus</span>
            </div>
          </div>
        </div>

        {/* About and Features Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12" ref={leftBoxRef}>
          {/* About Jaimax - Left Box */}
          <div
            className={`bg-gradient-to-br from-white/30 via-white/20 to-[#085259]/10 backdrop-blur-xl rounded-3xl p-10 border border-white/40 shadow-2xl transition-all duration-1000 ease-out transform ${isVisible
              ? 'translate-x-0 opacity-100'
              : '-translate-x-20 opacity-0'
              }`}
            style={{
              transitionDelay: '0.2s'
            }}
          >
            <h3 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <div className="w-2 h-8 bg-gradient-to-b from-[#085259] to-cyan-400 rounded-full"></div>
              About Jaimax
            </h3>
            <div className="space-y-5 text-slate-700 leading-relaxed">
              <p className="text-lg">
                Our founding members are young and enthusiastic adopters of cryptocurrencies, driven by innovation and excellence.
              </p>
              <p className="text-lg">
                In late 2024, we decided to launch a revolutionary cryptocurrency exchange. To ensure a smooth entry into the world of crypto, we prioritized ease of use, security, and customer support from the very beginning. Jaimax went live in July 2024.
              </p>
              <p className="text-lg">
                Jaimax, the most valuable crypto investment app, is dedicated to making crypto accessible in a simple, secure way. Established in 2024, Jaimax has addressed numerous challenges faced by the crypto community.
              </p>
            </div>
          </div>

          {/* Key Features - Right Box */}
          <div
            className={`bg-gradient-to-br from-white/30 via-white/20 to-[#085259]/10 backdrop-blur-xl rounded-3xl p-10 border border-white/40 shadow-2xl transition-all duration-1000 ease-out transform ${isVisible
              ? 'translate-x-0 opacity-100'
              : 'translate-x-20 opacity-0'
              }`}
            style={{
              transitionDelay: '0.5s'
            }}
            ref={rightBoxRef}
          >
            <h3 className="text-3xl font-bold text-slate-800 mb-8 flex items-center gap-3">
              <div className="w-2 h-8 bg-gradient-to-b from-[#085259] to-cyan-400 rounded-full"></div>
              Key Features
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-gradient-to-br from-emerald-500/20 to-green-600/20 rounded-2xl group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8 text-emerald-700" />
                </div>
                <div>
                  <h4 className="text-slate-800 font-bold text-xl mb-2">Security First</h4>
                  <p className="text-slate-700 text-lg">Advanced security measures to protect your investments with military-grade encryption</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-gradient-to-br from-[#085259]/30 to-cyan-500/20 rounded-2xl group-hover:scale-110 transition-transform">
                  <CreditCard className="w-8 h-8 text-cyan-700" />
                </div>
                <div>
                  <h4 className="text-slate-800 font-bold text-xl mb-2">Virtual Cards</h4>
                  <p className="text-slate-700 text-lg">Next-generation payment gateway with virtual cryptocurrency cards</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-gradient-to-br from-purple-500/20 to-[#085259]/30 rounded-2xl group-hover:scale-110 transition-transform">
                  <Globe className="w-8 h-8 text-purple-700" />
                </div>
                <div>
                  <h4 className="text-slate-800 font-bold text-xl mb-2">Global Access</h4>
                  <p className="text-slate-700 text-lg">Spend crypto anywhere that accepts traditional payments worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JaimaxComponent;