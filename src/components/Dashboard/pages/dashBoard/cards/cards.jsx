import React, { useState } from "react";
import assets from "../../../../../assets/assets";


const TopCards = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cards = [
    {
      label: "Total Coins",
      value: 24,
      image: assets.totalCoins1,
      hoverImage: assets.totalCoins,
      shapes: ["circle", "triangle"],
    },
    {
      label: "Wallet Balance",
      value: 10,
      image: assets.walletBal,
      hoverImage: assets.walletBal1,
      shapes: ["square", "diamond"],
    },
    {
      label: "Available Balance",
      value: 12,
      image: assets.available,
      hoverImage: assets.available1,
      shapes: ["pentagon", "ellipse"],
    },
    {
      label: "Referral Earnings",
      value: 2,
      image: assets.referal,
      hoverImage: assets.referal1,
      shapes: ["hexagon", "circle"],
    },
    {
      label: "Active Members",
      value: 2,
      image: assets.activememo,
      hoverImage: assets.activememo1,
      shapes: ["triangle", "square"],
    },
    {
      label: "Withdrawal Amount",
      value: 1000,
      image: assets.withdraw,
      hoverImage: assets.withdraw1,
      shapes: ["diamond", "pentagon"],
    },
    {
      label: "Super Bonus",
      value: 2,
      image: assets.superBonus,
      hoverImage: assets.superBonus1,
      shapes: ["ellipse", "hexagon"],
    },
  ];

  const normalGradient = "linear-gradient(135deg, #c9f3dd,rgb(38, 124, 97))";
  const hoverGradient = "linear-gradient(135deg,rgb(111, 251, 167),rgb(27, 156, 89))";

  const shapeBaseStyles = {
    position: "absolute",
    opacity: 0.18,
    pointerEvents: "none",
    transition: "opacity 0.3s ease, transform 3s ease-in-out, background 0.5s ease",
    zIndex: 0,
    animationIterationCount: "infinite",
    animationDirection: "alternate",
    willChange: "transform",
  };

  const shapeStyles = {
    circle: {
      width: "3rem",
      height: "3rem",
      borderRadius: "50%",
      background: normalGradient,
      animationName: "floatUpDown",
      animationDuration: "6s",
    },
    triangle: {
      width: 0,
      height: 0,
      borderLeft: "1.8rem solid transparent",
      borderRight: "1.8rem solid transparent",
      borderBottom: "3rem solid #1d5f4a",
      animationName: "floatLeftRight",
      animationDuration: "5s",
    },
    square: {
      width: "3.5rem",
      height: "3.5rem",
      background: normalGradient,
      animationName: "floatUpDown",
      animationDuration: "7s",
    },
    pentagon: {
      width: "3.5rem",
      height: "3.5rem",
      background: normalGradient,
      clipPath: "polygon(50% 0%, 95% 35%, 77% 90%, 23% 90%, 5% 35%)",
      animationName: "floatLeftRight",
      animationDuration: "6.5s",
    },
    diamond: {
      width: "3rem",
      height: "3rem",
      background: normalGradient,
      transform: "rotate(45deg)",
      animationName: "floatUpDown",
      animationDuration: "5.5s",
    },
    ellipse: {
      width: "4rem",
      height: "2.5rem",
      background: normalGradient,
      borderRadius: "50% / 100%",
      animationName: "floatLeftRight",
      animationDuration: "6s",
    },
    hexagon: {
      width: "3.5rem",
      height: "3.5rem",
      background: normalGradient,
      clipPath: "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)",
      animationName: "floatUpDown",
      animationDuration: "6.5s",
    },
  };

  const shapePositions = [
    { top: "-1rem", right: "-1rem" },
    { bottom: "-1rem", left: "-1rem" },
  ];

  return (
    <>
      <style>
        {`
          @keyframes floatUpDown {
            0% { transform: translateY(0); }
            100% { transform: translateY(6px); }
          }
          @keyframes floatLeftRight {
            0% { transform: translateX(0); }
            100% { transform: translateX(6px); }
          }

          .group:hover .shape-gradient {
            background: ${hoverGradient} !important;
          }
          .group:hover .shape-triangle {
            border-bottom-color: #157a45 !important;
          }
        `}
      </style>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-3 sm:px-4 md:px-5 mb-4">
        {cards.map((item, idx) => (
          <div
            key={idx}
            className="group cursor-pointer relative p-3 sm:p-4 rounded-lg shadow bg-white
              transition duration-200 ease-in-out hover:bg-[#26a69a] hover:shadow-xl hover:scale-[1.03]
              min-w-[220px]"
            onMouseEnter={() => setHoveredCard(idx)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="z-10">
              <div className="text-[#084e54] text-lg font-semibold mb-1 group-hover:text-white truncate">
                {item.label}
              </div>
              <div className="text-2xl font-bold mb-1 text-[#084e54] group-hover:text-white">
                {item.value}
              </div>
              <div className="text-sm text-[#1d4d4f] group-hover:text-white truncate">
                Increased from last month
              </div>
            </div>

            <img
              src={hoveredCard === idx ? item.hoverImage : item.image}
              alt={item.label}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 object-contain opacity-80 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 z-10"
            />

            {/* Optional shapes */}
            {item.shapes.map((shape, i) => (
              <div
                key={i}
                className={`shape-${shape}`}
                style={{
                  ...shapeBaseStyles,
                  ...shapeStyles[shape],
                  ...shapePositions[i],
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default TopCards;
