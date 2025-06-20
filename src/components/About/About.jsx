// const bannerImg='https://t4.ftcdn.net/jpg/05/54/46/89/240_F_554468927_iwU3VYIjsaeopAb0WPYxVf21TloEhTEj.jpg';
const globalReachImg='https://www.paragkhanna.com/wp-content/uploads/2020/07/India-and-the-world-in-2019-2.jpg'
// const cryptoIndiaImg='https://mahabahu.com/wp-content/uploads/2022/02/crypto4.jpg';
// const futureCryptoImg='https://cdn.prod.website-files.com/634054c00f602044abb3060d/653aa9ff7fbf6eb69bdc8e80_Future%20of%20Bitcoin.webp';
import img1 from '../../assets/Images/aboutimg.jpg';
import bannerImg2 from '../../assets/Images/heroabout.jpg'
import futureCryptoImg from '../../assets/Images/abouthero.jpg'
import React, { useState, useEffect } from "react";
import { CheckCircle, ArrowRight, Sparkles, Globe, TrendingUp, Shield } from "lucide-react";

const keyPoints = [
  "Best crypto coin in India for new investors looking for trust and transparency.",
  "A fast-growing Indian blockchain project with global scalability.",
  "Backed by a passionate team committed to long-term growth and education.",
  "A powerful opportunity to be part of one of India's most promising crypto coins.",
];

const whyJaimax = [
  "Low Entry Price — High Potential",
  "Indian-based, globally driven",
  "Backed by a dedicated team and ethical vision",
  "Transparent development and long-term growth",
  "The future of crypto, made in India",
];

const AboutJaimax = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full text-white overflow-hidden">
      {/* Elevated Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed transform"
          style={{ 
            backgroundImage: `url(${futureCryptoImg})`,
             backgroundBlendMode: 'multiply',
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-purple-900/60 to-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/90"></div>
        
        {/* Elevated Hero Card */}
        <div className={`relative z-10 text-center px-8 py-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="max-w-5xl mx-auto  rounded-3xl   p-12  transition-all duration-300">
            <div className="flex items-center justify-center mb-8">
              <span className="text-yellow-400 font-semibold tracking-widest uppercase text-sm bg-yellow-400/20 px-4 py-2 rounded-full">Introducing</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-8  leading-tight">
              JAIMAX
            </h1>
            <p className="text-xl md:text-2xl font-light text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              The Future of Digital Finance, Born in India
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group relative px-10 py-2 bg-[#bbce28] rounded-full font-semibold text-lg overflow-hidden transition-all duration-300  ">
                <span className="relative z-10 flex items-center">
                  Discover Jaimax
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </span>
                {/* <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity"></div> */}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6  text-transparent">
            A Movement in Digital Finance
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="group p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-3">Global Vision</h3>
            <p className="text-gray-300 leading-relaxed">Born in India, built for the world - creating a secure, transparent platform for everyone.</p>
          </div>
          <div className="group p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-3">High Potential</h3>
            <p className="text-gray-300 leading-relaxed">Low entry price with high growth potential, perfect for new and experienced investors.</p>
          </div>
          <div className="group p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-green-500/30 transition-all duration-300 hover:transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-3">Trust & Security</h3>
            <p className="text-gray-300 leading-relaxed">Backed by a passionate team committed to transparency and long-term growth.</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-6 text-lg leading-relaxed text-gray-300">
          <p>
            Jaimax is not just a name — it's a <span className="text-purple-400 font-semibold">movement shaping the future</span> of
            digital finance. As one of the best crypto coins in India, Jaimax was
            founded with a clear mission: to build a secure, transparent, and
            people-powered platform that redefines what a crypto coin can do.
          </p>
          <p>
            Our goal is to make cryptocurrency <span className="text-blue-400 font-semibold">accessible to everyone</span> — from
            beginners to advanced traders — with real-world value and global
            vision. Born in India and built for the world, Jaimax is quickly
            becoming a recognized name in the world of blockchain technology.
          </p>
        </div>
      </section>

      {/* Key Points Section - Better Image Alignment */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                What Makes Jaimax a Top Crypto Coin?
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Jaimax is not just another digital currency. We're a next-gen
                blockchain-based platform designed to offer stability,
                scalability, and growth.
              </p>
              <div className="space-y-4">
                {keyPoints.map((point, i) => (
                  <div key={i} className="group flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-transparent hover:border-purple-500/30">
                    <CheckCircle className="text-green-400 w-6 h-6 mt-1 group-hover:scale-110 transition-transform flex-shrink-0" />
                    <span className="text-gray-200 leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src={img1}
                  alt="Global Vision"
                  className="relative rounded-3xl shadow-2xl w-full aspect-rectangle hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-[100%]">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>
                <img
                  src={globalReachImg}
                  alt="Global Vision"
                  className="relative rounded-3xl shadow-2xl w-full object-cover aspect-square hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            
            {/* Content */}
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Our Vision: From India to the World
              </h3>
              <div className="space-y-6 text-lg leading-relaxed text-gray-300">
                <p>
                  Jaimax aims to be the <span className="text-blue-400 font-semibold">top crypto project from India</span>, creating
                  impact far beyond borders. We're building a financial ecosystem
                  that connects users, traders, and learners.
                </p>
                <p>
                  With our strong blockchain foundation, we offer a <span className="text-purple-400 font-semibold">safe and secure
                  space</span> for everyone to explore the future of crypto. We believe the
                  best crypto coins are not just about price — they are about
                  purpose.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Now Section */}
      <section className="relative py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"></div>
        <div className="relative max-w-5xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Why Now?
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto rounded-full mb-12"></div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-2xl border border-yellow-500/20">
              <h4 className="font-semibold mb-2">Lightning Speed</h4>
              <p className="text-gray-300 text-sm">Cryptocurrency adoption is evolving at unprecedented pace</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl border border-green-500/20">
              <h4 className="font-semibold mb-2">Golden Opportunity</h4>
              <p className="text-gray-300 text-sm">Incredibly low entry price for early believers</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-500/20">
              <h4 className="font-semibold mb-2">Future Ready</h4>
              <p className="text-gray-300 text-sm">Perfect foundation for smart investors</p>
            </div>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-gray-300 max-w-4xl mx-auto">
            <p>
              The world of cryptocurrency in India is evolving at <span className="text-yellow-400 font-semibold">lightning speed</span>.
              From growing adoption among the youth to increasing interest from
              businesses and institutions, digital assets are no longer just a
              trend — they are the future of finance.
            </p>
            <p>
              Now is the perfect time to be part of something truly transformative.
              Jaimax is currently trading at an <span className="text-green-400 font-semibold">incredibly low entry price</span>,
              offering a golden opportunity for early believers and smart
              investors.
            </p>
          </div>
        </div>
      </section>

      {/* Final Section - Better Image Alignment */}
      <section className="relative py-20 px-6">
        <div className="relative max-w-6xl mx-auto text-center">
          {/* Centered Image with Better Sizing */}
          <div className="relative mb-16 flex justify-center">
            <div className="relative max-w-2xl w-full">
              <div className="absolute inset-0  rounded-3xl blur-2xl"></div>
              <img
                src={bannerImg2}
                alt="Future Crypto"
                className="relative rounded-3xl w-full object-cover aspect-video shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          
          <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight">
            We're not just building a coin.<br />
            We're building a future.
          </h3>
          
          <p className="text-gray-300 mb-12 max-w-4xl mx-auto text-lg leading-relaxed">
            Jaimax is designed to be more than an investment — it's your <span className="text-purple-400 font-semibold">gateway
            into the decentralized world</span>. With every coin you hold, you become
            part of a mission to empower individuals and create global financial
            inclusivity.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
            {whyJaimax.map((item, i) => (
              <div key={i} className="group flex items-center gap-3 p-4 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 hover:border-purple-500/30 transition-all duration-300">
                <CheckCircle className="text-green-400 w-5 h-5 group-hover:scale-110 transition-transform flex-shrink-0" />
                <span className="text-gray-200 text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="relative inline-block">
            <div className="absolute inset-0  rounded-full blur-lg opacity-60"></div>
            <button className="relative group px-12 py-4 bg-[#bbce28] rounded-full font-bold text-xl overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/25">
              <span className="relative z-10 flex items-center">
                Join Jaimax. Join the Future.
              </span>
              {/* <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"></div> */}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutJaimax;