
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gecko from '../../assets/Images/gecko.png';
import github from '../../assets/Images/github (2).svg';
import coinmarket from '../../assets/Images/coinmarket.svg';
import catalog from '../../assets/Images/catalog.svg';
import binance from '../../assets/Images/binance.svg';
import clients from '../../assets/Images/clients.svg';

const partners = [
  "https://www.pmits.co.uk/portals/0/images/partners/solar-communications-200.png",
  "https://www.pmits.co.uk/portals/0/images/partners/cbf-200.png",
  "https://www.pmits.co.uk/portals/0/images/partners/gxs-200.png",
  "https://www.pmits.co.uk/portals/0/images/partners/jpr-200.png",
  "https://www.pmits.co.uk/portals/0/images/partners/talk-internet-200.png",
  "https://www.pmits.co.uk/Portals/0/img/opera3_logo.png",
  "https://www.pmits.co.uk/Portals/0/pegasus-logo.png",
  "https://www.pmits.co.uk/Portals/0/sage business partner.jpg",
];

const cubeFaces = partners.slice(0, 6);

export default function Perfect3DCubePartners() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <style>{`
        .partners-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          background: linear-gradient(135deg, rgba(8,83,89,0.95) 0%, rgba(8,83,89,0.9) 100%);
          font-family: 'Inter', sans-serif;
          color: #ffffff;
          padding: 80px 0 40px 0;
          min-height: 80vh;
          gap: 60px;
          box-sizing: border-box;
          width: 100%;
        }

        .top-container {
          display: flex;
          gap: 80px;
          align-items: center;
          max-width: 1200px;
          width: 100%;
          flex-wrap: wrap;
          justify-content: center;
          padding: 0 40px;
          box-sizing: border-box;
        }

        .cube-container {
          flex-shrink: 0;
          width: 140px;
          height: 140px;
          perspective: 1400px;
        }

        .cube {
          width: 140px;
          height: 140px;
          position: relative;
          transform-style: preserve-3d;
          animation: rotateCube 20s linear infinite;
          transition: animation-play-state 0.3s ease;
          margin: auto;
          border-radius: 10px;
          box-shadow: none;
        }
        .cube.paused {
          animation-play-state: paused;
        }

        .face {
          position: absolute;
          width: 140px;
          height: 140px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.06);
          border: 2px solid #06b6d4;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0 8px 20px rgba(0,0,0,0.3);
          backface-visibility: hidden;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .face img {
          max-width: 70%;
          max-height: 70%;
          object-fit: contain;
          filter: drop-shadow(0 0 5px rgba(0, 255, 255, 0.8));
          transition: transform 0.3s ease;
          user-select: none;
          pointer-events: none;
        }
        .face:hover img {
          transform: scale(1.15);
          filter: drop-shadow(0 0 12px rgba(0, 255, 255, 1));
        }
        .face:hover {
          box-shadow: 0 0 20px 3px #06b6d4;
        }

        .face.front  { transform: translateZ(70px); }
        .face.back   { transform: rotateY(180deg) translateZ(70px); }
        .face.right  { transform: rotateY(90deg) translateZ(70px); }
        .face.left   { transform: rotateY(-90deg) translateZ(70px); }
        .face.top    { transform: rotateX(90deg) translateZ(70px); }
        .face.bottom { transform: rotateX(-90deg) translateZ(70px); }

        @keyframes rotateCube {
          0%   { transform: rotateX(0deg) rotateY(0deg); }
          100% { transform: rotateX(360deg) rotateY(360deg); }
        }

        .content {
          max-width: 620px;
          text-align: center;
          user-select: none;
          padding: 0 20px;
        }
        .content h2 {
          font-size: 2.8rem;
          margin-bottom: 0.6rem;
          font-weight: 700;
          color: #e0f7fa;
        }
        .content strong {
          color: #06b6d4;
        }
        .content p {
          font-size: 1.25rem;
          line-height: 1.7;
          margin-bottom: 1.8rem;
          color: #d0e8ea;
        }
        .content button {
          padding: 0.85rem 2.2rem;
          background: #06b6d4;
          border: none;
          border-radius: 30px;
          color: white;
          font-weight: 600;
          font-size: 1.1rem;
          cursor: pointer;
          box-shadow: 0 6px 18px rgba(6,182,212,0.6);
          transition: background-color 0.3s ease;
        }
        .content button:hover {
          background: #038ea6;
        }

        .cards-scroll-container {
          width: 100vw;
          padding: 15px 40px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          background: rgba(255, 255, 255, 0.06);
         
       
          user-select: none;
          overflow: hidden;
        }

        .scroll-row {
          display: flex;
          gap: 16px;
          animation: scrollLeft 15s linear infinite;
          white-space: nowrap;
        }

        .scroll-row:nth-child(2) {
          animation: scrollRight 15s linear infinite;
        }

        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .partner-card {
          flex: 0 0 120px;
          height: 90px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
        
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 2px solid transparent;
        }
        .partner-card:hover {
          transform: scale(1.1);
          box-shadow: 0 10px 28px rgba(6,182,212,0.75);
          border-color: #06b6d4;
          z-index: 10;
        }
        .partner-card img {
          max-width: 70%;
          max-height: 70%;
          object-fit: contain;
          filter: drop-shadow(0 0 8px rgba(0, 255, 255, 0.9));
          user-select: none;
          pointer-events: none;
          transition: filter 0.3s ease;
        }
        .partner-card:hover img {
          filter: drop-shadow(0 0 18px rgba(0, 255, 255, 1));
        }

        @media (max-width: 900px) {
          .top-container {
            flex-direction: column;
            gap: 40px;
          }
          .content {
            max-width: 100%;
            padding: 0 20px;
          }
          .cards-scroll-container {
            padding: 20px 20px;
            gap: 16px;
          }
          .partner-card {
            flex: 0 0 100px;
            height: 75px;
            border-radius: 10px;
          }
          .cube-container {
            width: 200px;
            height: 200px;
          }
          .cube {
            width: 170px;
            height: 170px;
          }
          .face {
            width: 170px;
            height: 170px;
          }
        }

        @media (max-width: 900px) {
  .partners-section {
    padding: 60px 20px 30px;
    gap: 40px;
  }

  .top-container {
    flex-direction: column;
    gap: 30px;
    padding: 0 20px;
    align-items: center;
  }

  .cube-container {
    width: 160px;
    height: 160px;
    perspective: 1200px;
  }

  .cube {
    width: 140px;
    height: 140px;
  }

  .face {
    width: 140px;
    height: 140px;
  }

  .content {
    max-width: 100%;
    text-align: center;
    padding: 0;
  }

  .content h2 {
    font-size: 2rem;
  }

  .content p {
    font-size: 1rem;
    line-height: 1.5;
  }

  .cards-scroll-container {
    padding: 15px 15px;
    gap: 12px;
  }

  .partner-card {
    flex: 0 0 90px;
    height: 70px;
    border-radius: 10px;
  }
}

      `}</style>

      <section
        className="partners-section"
        aria-label="Partners showcase with perfect 3D rotating cube and scrollable partner cards"
      >
        <div className="top-container">
          <div
            className="cube-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className={`cube ${isHovered ? "paused" : ""}`}>
              {cubeFaces.map((logo, idx) => {
                const faceNames = [
                  "front",
                  "back",
                  "right",
                  "left",
                  "top",
                  "bottom",
                ];
                return (
                  <div key={idx} className={`face ${faceNames[idx]}`}>
                    <img
                      src={logo}
                      alt={`Partner logo ${idx + 1}`}
                      loading="lazy"
                      draggable={false}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="content">
            <h2>
              Our <strong>Trusted Partners</strong>
            </h2>
            <p>
              We collaborate with industry leaders and innovators to bring you the
              best solutions and services. Our partners are carefully selected to
              ensure quality, reliability, and cutting-edge technology.
            </p>
            <button onClick={() => alert("Explore partners soon!")}>
              Learn More
            </button>
          </div>
        </div>

        <div
          className="cards-scroll-container"
          aria-label="Scrolling partner logos in opposite directions"
        >
          <div className="scroll-row">
            {[...partners, ...partners].map((logo, index) => (
              <div
                key={`row1-${index}`}
                className="partner-card"
                title={`Partner ${(index % partners.length) + 1}`}
              >
                <img
                  src={logo}
                  alt={`Partner logo ${(index % partners.length) + 1}`}
                  loading="lazy"
                  draggable={false}
                />
              </div>
            ))}
          </div>
          <div className="scroll-row">
            {[...partners, ...partners].map((logo, index) => (
              <div
                key={`row2-${index}`}
                className="partner-card"
                title={`Partner ${(index % partners.length) + 1}`}
              >
                <img
                  src={logo}
                  alt={`Partner logo ${(index % partners.length) + 1}`}
                  loading="lazy"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
    