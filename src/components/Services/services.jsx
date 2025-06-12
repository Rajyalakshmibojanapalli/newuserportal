import React from 'react';
import { Monitor, Code, Palette, PenTool, TrendingUp, Camera } from 'lucide-react';

const ServicesFlipCards = () => {
  const services = [
    {
      icon: <Monitor size={48} />,
      title: "GRAPHIC DESIGN",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis lectus quis lorem.",
      backContent: "Professional graphic design services including branding, logos, print materials, and digital graphics. We create visually stunning designs that communicate your brand message effectively."
    },
    {
      icon: <Code size={48} />,
      title: "WEB DEVELOPMENT",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis lectus quis lorem.",
      backContent: "Custom web development solutions using modern technologies. From responsive websites to complex web applications, we build digital experiences that drive results."
    },
    {
      icon: <Palette size={48} />,
      title: "PRODUCT DESIGN",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis lectus quis lorem.",
      backContent: "User-centered product design that combines aesthetics with functionality. We create intuitive interfaces and engaging user experiences for digital products."
    },
    {
      icon: <PenTool size={48} />,
      title: "BLOG WRITING",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis lectus quis lorem.",
      backContent: "Engaging content creation and blog writing services. We craft compelling stories and informative articles that connect with your audience and boost SEO."
    },
    {
      icon: <TrendingUp size={48} />,
      title: "SOCIAL MARKETING",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis lectus quis lorem.",
      backContent: "Strategic social media marketing campaigns that build brand awareness and drive engagement. We help you connect with your audience across all platforms."
    },
    {
      icon: <Camera size={48} />,
      title: "PHOTOGRAPHY",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis lectus quis lorem.",
      backContent: "Professional photography services for portraits, events, products, and commercial needs. We capture moments and create images that tell your story."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Our Service Offerings
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
           Explore the Future of Digital Finance with Jaimax – The Best Crypto Coin in India

          </p>
          <p>
            At Jaimax, we provide a powerful range of crypto services designed to help users grow, secure, and manage their digital assets with ease. Whether you're a new investor or a crypto-savvy expert, our platform delivers the tools and features you need to succeed in the world of cryptocurrency. Discover why Jaimax is fast becoming the best crypto coin in India.
          </p>
          <div className="w-16 h-1 bg-indigo-600 mx-auto mt-6"></div>
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
                <div className="absolute inset-0 backface-hidden bg-white rounded-lg shadow-lg p-8 flex flex-col items-center justify-center text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="text-indigo-600 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-4 tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Back of card */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-lg shadow-lg p-8 flex flex-col items-center justify-center text-center text-white">
                  <div className="mb-6 opacity-80">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-indigo-100 text-sm leading-relaxed">
                    {service.backContent}
                  </p>
                  <button className="mt-6 px-6 py-2 bg-white text-indigo-600 rounded-full font-semibold hover:bg-indigo-50 transition-colors duration-200">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
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

export default ServicesFlipCards;