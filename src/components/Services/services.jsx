import React from 'react';
import { Shield, Wallet, TrendingUp, PieChart, BarChart3, Coins } from 'lucide-react';

const CryptoServicesFlipCards = () => {
  const services = [
    {
      icon: <Shield size={48} />,
      title: "SECURITY MEASURES",
      description: "Advanced crypto security protocols with KYC verification, Google Authenticator, and end-to-end encryption.",
      backContent: "Our comprehensive security framework includes blockchain protection, multi-factor authentication, and compliance-first strategies. Every transaction is secured with military-grade encryption and real-time monitoring."
    },
    {
      icon: <Wallet size={48} />,
      title: "SECURE CRYPTO WALLET",
      description: "Integrated wallet with encryption, backup recovery options, and user-friendly features for seamless transactions.",
      backContent: "Store, send, and receive crypto assets with confidence. Our wallet features cold storage integration, instant transfers, and multi-currency support with industry-leading security protocols."
    },
    {
      icon: <TrendingUp size={48} />,
      title: "ACCESS TO PROFITS",
      description: "Real-time tracking, growth analytics, and easy withdrawal systems to maximize your crypto earnings.",
      backContent: "Unlock passive income opportunities through smart investment strategies. Our platform provides automated trading signals, yield farming options, and comprehensive profit tracking tools."
    },
    {
      icon: <PieChart size={48} />,
      title: "FUND MANAGEMENT",
      description: "Intelligent portfolio management system to track performance and allocate funds smartly across digital assets.",
      backContent: "Take control of your crypto portfolio with advanced analytics, risk assessment tools, and automated rebalancing. Monitor all your investments with precision and make data-driven decisions."
    },
    {
      icon: <BarChart3 size={48} />,
      title: "FINANCIAL GROWTH",
      description: "Gateway to financial growth through crypto with reliable and ethical investment opportunities.",
      backContent: "Build long-term wealth with our ecosystem of growth opportunities. Access exclusive investment rounds, staking rewards, and participate in the future of decentralized finance."
    },
    {
      icon: <Coins size={48} />,
      title: "JAIMAX TOKEN",
      description: "The best crypto coin in India backed by real utility and a growing ecosystem for massive opportunities.",
      backContent: "Join India's most promising cryptocurrency project. Enjoy exclusive benefits, governance rights, early access to new features, and be part of the digital finance revolution."
    }
  ];

  return (
    <div className="min-h-screen bg-[#1a5f65] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-[#bace27] to-[#1e964a] bg-clip-text text-transparent">
            Our Service Offerings
          </h1>
          <p className="text-xl text-[#bace27] max-w-3xl mx-auto mb-6 font-semibold">
            Explore the Future of Digital Finance with Jaimax – The Best Crypto Coin in India
          </p>
          <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed text-lg">
            At Jaimax, we provide a powerful range of crypto services designed to help users grow, secure, and manage their digital assets with ease. Whether you're a new investor or a crypto-savvy expert, our platform delivers the tools and features you need to succeed in the world of cryptocurrency. Discover why Jaimax is fast becoming the best crypto coin in India.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#195f64] to-[#1e964a] mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group perspective-1000 h-80"
            >
              <div className="relative w-full h-full transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
                {/* Front of card */}
                <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-yello-800 to-gray-900 rounded-xl shadow-2xl p-8 flex flex-col items-center justify-center text-center border border-[#195f64] hover:border-[#bace27] transition-all duration-300 hover:shadow-[0_0_30px_rgba(186,206,39,0.3)]">
                  <div className="text-[#bace27] mb-6 transform group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-4 tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <div className="absolute top-4 right-4 w-2 h-2 bg-[#1e964a] rounded-full animate-pulse"></div>
                </div>

                {/* Back of card */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-[#195f64] via-[#1e964a] to-[#bace27] rounded-xl shadow-2xl p-8 flex flex-col items-center justify-center text-center text-white">
                  <div className="mb-6 opacity-90 drop-shadow-lg">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed mb-6">
                    {service.backContent}
                  </p>
                  <button className="px-8 py-3 bg-white/90 text-[#195f64] rounded-full font-bold hover:bg-white hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                    Get Started
                  </button>
                  <div className="absolute top-4 right-4 w-3 h-3 bg-white/50 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-white/30 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-[#195f64] to-[#1e964a] rounded-2xl p-8 shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Crypto Journey?
            </h2>
            <p className="text-white/90 mb-6 text-lg">
              Join thousands of investors who trust Jaimax for their digital asset management
            </p>
            <button className="px-10 py-4 bg-[#bace27] text-[#195f64] rounded-full font-bold text-lg hover:bg-white hover:scale-105 transition-all duration-200 shadow-lg">
              Launch App
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .group:hover .group-hover\\:rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default CryptoServicesFlipCards;