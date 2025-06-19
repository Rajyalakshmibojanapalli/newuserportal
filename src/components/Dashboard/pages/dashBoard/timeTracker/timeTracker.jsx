


import React, { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import jicon from "../../../../../assets/jcoin.png"

import assets from "../../../../../assets/assets";

const slabsData = [
  {
    id: 1,
    title: "1st ICO Slab",
    status: "Live",
    statusColor: "bg-green-500",
    type: "active",
    prices: { usd: 0.00024, inr: 0.02 },
    soldPercentage: 20.50,
    totalCoins: "50000000000",
    description: "Invest in Jaimax 1st ICO slab for your financial future."
  },
  {
    id: 2,
    title: "2nd ICO Slab",
    status: "Upcoming",
    statusColor: "bg-yellow-500",
    type: "upcoming",
    prices: { usd: 0.00059, inr: 0.05 },
    totalCoins: "20000000000"
  },
  {
    id: 3,
    title: "3rd ICO Slab",
    status: "Upcoming",
    statusColor: "bg-yellow-500",
    type: "upcoming",
    prices: { usd: 0.00710, inr: 0.60000 },
    totalCoins: "25000000000"
  },
  {
    id: 4,
    title: "4th ICO Slab",
    status: "Upcoming",
    statusColor: "bg-yellow-500",
    type: "upcoming",
    prices: { usd: 0.01893, inr: 1.60000 },
    totalCoins: "30000000000"
  },
  {
    id: 5,
    title: "5th ICO Slab",
    status: "Upcoming",
    statusColor: "bg-yellow-500",
    type: "upcoming",
    prices: { usd: 0.00189, inr: 0.159 },
    totalCoins: "23000000000"
  }
];

const ActiveSlabContent = ({ slab, isActive }) => {
  const [paymentMethod, setPaymentMethod] = useState('INR');
  const [amount, setAmount] = useState('');

  const handleProceedToPay = () => {
    if (!amount) {
      alert('Please enter an amount');
      return;
    }
    alert(`Proceeding to pay ${amount} ${paymentMethod} for ${slab.title}`);
  };

  return (
    <div className={`bg-white rounded-lg p-4 w-full w-full max-w-7xl text-gray-800 shadow-lg border border-gray-200 transform transition-all duration-500 min-h-[350px] ${
      isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-80'
    }`}>
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-gray-800 font-semibold text-base">{slab.title}</h3>
        <span className={`${slab.statusColor} text-white text-xs px-2 py-1 rounded-full flex items-center gap-1`}>
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
          {slab.status}
        </span>
      </div>

      {/* Payment Method Selection */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600 mb-2">Pay with</label>
        <div className="flex gap-4">
          {['INR', 'USD'].map((method) => (
            <label key={method} className="flex items-center gap-2 cursor-pointer group">
              <div className="relative">
                <input 
                  type="radio" 
                  name="paymentMethod" 
                  value={method}
                  checked={paymentMethod === method}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="sr-only"
                />
                <div className={`w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 ${
                  paymentMethod === method 
                    ? 'border-green-500 bg-green-500' 
                    : 'border-gray-300'
                } flex items-center justify-center`}>
                  {paymentMethod === method && (
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  )}
                </div>
              </div>
              <span className={`text-sm font-medium ${
                paymentMethod === method ? 'text-gray-800' : 'text-gray-500'
              }`}>{method}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Amount Input */}
      <div className="mb-4 space-y-3">
        <input
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full bg-gray-50 border border-gray-300 rounded-lg py-2.5 px-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500/20"
        />

        <button 
          onClick={handleProceedToPay}
          className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-2.5 px-3 rounded-lg text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Proceed to pay
        </button>
      </div>

      {/* Price Changes */}
      <div className="flex justify-between mb-4">
        <span className="text-green-600 text-sm font-medium flex items-center gap-1">
          <span className="text-green-600">↗</span>
          {slab.prices.inr.toFixed(5)} INR
        </span>
        <span className="text-green-600 text-sm font-medium flex items-center gap-1">
          <span className="text-green-600">↗</span>
          {slab.prices.usd.toFixed(5)} USD
        </span>
      </div>

      {/* Progress Section */}
      <div className="mb-4">
        <p className="text-gray-600 text-sm mb-2">Sold Tokens {slab.soldPercentage}%</p>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-green-500 to-green-600 h-full rounded-full transition-all duration-1000"
            style={{ width: `${slab.soldPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* Description */}
      <div className="text-center">
        <p className="text-gray-600 text-sm leading-relaxed">
          {slab.description}
        </p>
      </div>
    </div>
  );
};

const UpcomingSlabContent = ({ slab, isActive }) => (
  <div className={`bg-white rounded-lg p-4 text-gray-800 shadow-lg border border-gray-200 transform transition-all duration-500 min-h-[320px] ${
    isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-80'
  }`}>
    {/* Header */}
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-gray-800 font-semibold text-base">{slab.title}</h3>
      <span className={`${slab.statusColor} text-white text-xs px-2 py-1 rounded-full flex items-center gap-1`}>
        <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
        {slab.status}
      </span>
    </div>

    {/* Coin Image */}
    <div className="flex justify-center mb-4">
      <div className="w-14 h-14 ">
        <span className="text-white font-bold text-xl">

          <img src={assets.welcomeDraw} alt="" />
        </span>
      </div>
    </div>

    {/* Price Information */}
    <div className="grid grid-cols-2 gap-3 mb-4">
      <div className="bg-gray-50 rounded-lg p-3 border border-gray-200 text-center">
        <p className="text-sm font-semibold text-gray-600 mb-1">USD</p>
        <p className="text-base font-bold text-gray-800">{slab.prices.usd.toFixed(5)}</p>
      </div>
      <div className="bg-gray-50 rounded-lg p-3 border border-gray-200 text-center">
        <p className="font-bold text-gray-600 text-sm mb-1">INR</p>
        <p className="text-base font-semibold text-gray-800">{slab.prices.inr.toFixed(5)}</p>
      </div>
    </div>

    {/* Total Coins */}
    <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4 border border-gray-200 text-center">
      <p className="text-sm font-medium text-gray-600 mb-2">
        Total Coins Ready for Release
      </p>
      <p className="text-xl font-bold text-green-600">
        {parseInt(slab.totalCoins).toLocaleString()}
      </p>
    </div>
  </div>
);

// const SlabTabs = () => {
//   const [activeTab, setActiveTab] = useState(0);
//   const [isAutoPlay, setIsAutoPlay] = useState(false);
//   const [isDragging, setIsDragging] = useState(false);
//   const [dragStart, setDragStart] = useState(0);
//   const [dragOffset, setDragOffset] = useState(0);
//   const scrollRef = useRef(null);
//   const autoPlayRef = useRef(null);

//   const scrollToTab = useCallback((index, smooth = true) => {
//     const container = scrollRef.current;
//     if (container && index >= 0 && index < slabsData.length) {
//       const width = container.clientWidth;
//       container.scrollTo({
//         left: width * index,
//         behavior: smooth ? "smooth" : "auto",
//       });
//       setActiveTab(index);
//     }
//   }, []);

//   const handleTabClick = (index) => {
//     setActiveTab(index);
//     scrollToTab(index, true);
//     setIsAutoPlay(false);
//   };

//   useEffect(() => {
//     if (isAutoPlay) {
//       autoPlayRef.current = setInterval(() => {
//         setActiveTab(prev => {
//           const next = prev + 1 >= slabsData.length ? 0 : prev + 1;
//           scrollToTab(next);
//           return next;
//         });
//       }, 4000);
//     } else {
//       clearInterval(autoPlayRef.current);
//     }

//     return () => clearInterval(autoPlayRef.current);
//   }, [isAutoPlay, scrollToTab]);

//   const handleScroll = useCallback(() => {
//     const container = scrollRef.current;
//     if (container && !isDragging) {
//       const index = Math.round(container.scrollLeft / container.clientWidth);
//       if (index !== activeTab) {
//         setActiveTab(index);
//       }
//     }
//   }, [activeTab, isDragging]);

//   const handleDragStart = (e) => {
//     setIsDragging(true);
//     setDragStart(e.type === 'mousedown' ? e.clientX : e.touches[0].clientX);
//     setIsAutoPlay(false);
//   };

//   const handleDragMove = (e) => {
//     if (!isDragging) return;
//     const currentX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
//     setDragOffset(currentX - dragStart);
//   };

//   const handleDragEnd = () => {
//     if (!isDragging) return;
//     setIsDragging(false);
    
//     const threshold = 50;
//     if (Math.abs(dragOffset) > threshold) {
//       if (dragOffset > 0 && activeTab > 0) {
//         scrollToTab(activeTab - 1);
//       } else if (dragOffset < 0 && activeTab < slabsData.length - 1) {
//         scrollToTab(activeTab + 1);
//       }
//     }
//     setDragOffset(0);
//   };

//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (e.key === 'ArrowLeft' && activeTab > 0) {
//         handleTabClick(activeTab - 1);
//       } else if (e.key === 'ArrowRight' && activeTab < slabsData.length - 1) {
//         handleTabClick(activeTab + 1);
//       } else if (e.key === ' ') {
//         e.preventDefault();
//         setIsAutoPlay(!isAutoPlay);
//       }
//     };

//     window.addEventListener('keydown', handleKeyDown);
//     return () => window.removeEventListener('keydown', handleKeyDown);
//   }, [activeTab, isAutoPlay]);

//   const getOrdinalSuffix = (num) => {
//     const suffixes = ['th', 'st', 'nd', 'rd'];
//     const remainder = num % 100;
//     return suffixes[(remainder - 20) % 10] || suffixes[remainder] || suffixes[0];
//   };

//   return (
//     <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-lg text-xs w-full mx-auto">
//       <div className="px-4 py-4">
        
//         {/* Top Navigation Tabs */}
//         <div className="flex justify-center mb-4">
//           <div className="flex bg-white rounded-lg p-1 border border-gray-200 shadow-sm overflow-x-auto gap-1 max-w-full">
//             {slabsData.map((slab, index) => (
//               <button
//                 key={slab.id}
//                 onClick={() => handleTabClick(index)}
//                 className={`px-2 py-1 text-xs rounded-md font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
//                   activeTab === index
//                     ? "bg-green-100 text-gray-800 shadow-sm"
//                     : "text-gray-500 hover:text-gray-800 hover:bg-green-50"
//                 }`}
//               >
//                 {slab.id}{getOrdinalSuffix(slab.id)}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Carousel Container */}
//         <div className="relative group">
//           {/* Left Arrow */}
//           <button
//             onClick={() =>
//               handleTabClick(activeTab > 0 ? activeTab - 1 : slabsData.length - 1)
//             }
//             className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white shadow-sm rounded-full p-2 transition-all duration-200 border border-gray-200"
//           >
//             <ChevronLeft size={16} className="text-gray-600" />
//           </button>

//           {/* Single Card Display */}
//           <div className="flex justify-center">
//             <div className="w-full max-w-lg mx-auto">
//               {slabsData[activeTab].type === "active" ? (
//                 <ActiveSlabContent slab={slabsData[activeTab]} isActive={true} />
//               ) : (
//                 <UpcomingSlabContent slab={slabsData[activeTab]} isActive={true} />
//               )}
//             </div>
//           </div>

//           {/* Right Arrow */}
//           <button
//             onClick={() =>
//               handleTabClick(activeTab < slabsData.length - 1 ? activeTab + 1 : 0)
//             }
//             className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white shadow-sm rounded-full p-2 transition-all duration-200 border border-gray-200"
//           >
//             <ChevronRight size={16} className="text-gray-600" />
//           </button>
//         </div>

//         {/* Pagination Dots */}
//         <div className="flex justify-center items-center gap-1.5 my-3">
//           {slabsData.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => handleTabClick(index)}
//               className={`h-2 rounded-full transition-all duration-300 ${
//                 activeTab === index
//                   ? "bg-green-500 w-5"
//                   : "bg-gray-300 w-2 hover:bg-gray-400"
//               }`}
//             />
//           ))}
//         </div>

//         {/* Progress Bar */}
//         <div className="text-sm">
//           <div className="bg-gray-200 rounded-full h-1.5 overflow-hidden mb-2">
//             <div
//               className="bg-gradient-to-r from-green-400 to-green-500 h-full transition-all duration-500 rounded-full"
//               style={{
//                 width: `${((activeTab + 1) / slabsData.length) * 100}%`,
//               }}
//             />
//           </div>
//           <div className="flex justify-between text-gray-500 text-sm">
//             <span>{activeTab + 1}/{slabsData.length}</span>
//             <span className="text-green-600 truncate">{slabsData[activeTab].title}</span>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .no-scrollbar {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//         .no-scrollbar::-webkit-scrollbar {
//           display: none;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default SlabTabs;


const SlabTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const scrollRef = useRef(null);
  const autoPlayRef = useRef(null);

  const scrollToTab = useCallback((index, smooth = true) => {
    const container = scrollRef.current;
    if (container && index >= 0 && index < slabsData.length) {
      const width = container.clientWidth;
      container.scrollTo({
        left: width * index,
        behavior: smooth ? "smooth" : "auto",
      });
      setActiveTab(index);
    }
  }, []);

  const handleTabClick = (index) => {
    setActiveTab(index);
    scrollToTab(index, true);
    setIsAutoPlay(false);
  };

  useEffect(() => {
    if (isAutoPlay) {
      autoPlayRef.current = setInterval(() => {
        setActiveTab(prev => {
          const next = prev + 1 >= slabsData.length ? 0 : prev + 1;
          scrollToTab(next);
          return next;
        });
      }, 4000);
    } else {
      clearInterval(autoPlayRef.current);
    }

    return () => clearInterval(autoPlayRef.current);
  }, [isAutoPlay, scrollToTab]);

  // const handleScroll = useCallback(() => {
  //   const container = scrollRef.current;
  //   if (container && !isDragging) {
  //     const index = Math.round(container.scrollLeft / container.clientWidth);
  //     if (index !== activeTab) {
  //       setActiveTab(index);
  //     }
  //   }
  // }, [activeTab, isDragging]);

  // const handleDragStart = (e) => {
  //   setIsDragging(true);
  //   setDragStart(e.type === 'mousedown' ? e.clientX : e.touches[0].clientX);
  //   setIsAutoPlay(false);
  // };

  // const handleDragMove = (e) => {
  //   if (!isDragging) return;
  //   const currentX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
  //   setDragOffset(currentX - dragStart);
  // };

  // const handleDragEnd = () => {
  //   if (!isDragging) return;
  //   setIsDragging(false);
    
  //   const threshold = 50;
  //   if (Math.abs(dragOffset) > threshold) {
  //     if (dragOffset > 0 && activeTab > 0) {
  //       scrollToTab(activeTab - 1);
  //     } else if (dragOffset < 0 && activeTab < slabsData.length - 1) {
  //       scrollToTab(activeTab + 1);
  //     }
  //   }
  //   setDragOffset(0);
  // };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft' && activeTab > 0) {
        handleTabClick(activeTab - 1);
      } else if (e.key === 'ArrowRight' && activeTab < slabsData.length - 1) {
        handleTabClick(activeTab + 1);
      } else if (e.key === ' ') {
        e.preventDefault();
        setIsAutoPlay(!isAutoPlay);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeTab, isAutoPlay]);

  const getOrdinalSuffix = (num) => {
    const suffixes = ['th', 'st', 'nd', 'rd'];
    const remainder = num % 100;
    return suffixes[(remainder - 20) % 10] || suffixes[remainder] || suffixes[0];
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-lg w-full mx-auto">
      <div className="px-2 py-2 md:px-4 md:py-4">
        
        {/* Top Navigation Tabs - Hidden on mobile, visible on desktop */}
        <div className="hidden md:flex justify-center mb-4">
          <div className="flex bg-white rounded-lg p-1 border border-gray-200 shadow-sm overflow-x-auto gap-1 max-w-full">
            {slabsData.map((slab, index) => (
              <button
                key={slab.id}
                onClick={() => handleTabClick(index)}
                className={`px-3 py-2 text-sm rounded-md font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                  activeTab === index
                    ? "bg-green-100 text-gray-800 shadow-sm"
                    : "text-gray-500 hover:text-gray-800 hover:bg-green-50"
                }`}
              >
                {slab.id}{getOrdinalSuffix(slab.id)}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Top Tabs - Only visible on mobile */}
        <div className="flex md:hidden justify-start mb-3 overflow-x-auto">
          <div className="flex gap-1 min-w-max px-1">
            {slabsData.map((slab, index) => (
              <button
                key={slab.id}
                onClick={() => handleTabClick(index)}
                className={`px-3 py-1.5 text-xs rounded-md font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0 border ${
                  activeTab === index
                    ? "bg-green-500 text-white border-green-500"
                    : "bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-600"
                }`}
              >
                {slab.id}{getOrdinalSuffix(slab.id)} Slab
              </button>
            ))}
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          {/* Left Arrow - Hidden on mobile */}
          <button
            onClick={() =>
              handleTabClick(activeTab > 0 ? activeTab - 1 : slabsData.length - 1)
            }
            className="hidden md:block absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white shadow-sm rounded-full p-2 transition-all duration-200 border border-gray-200"
          >
            <ChevronLeft size={16} className="text-gray-600" />
          </button>

          {/* Single Card Display */}
          <div className="flex justify-center">
            <div className="w-full max-w-sm md:max-w-2xl mx-auto">
              {slabsData[activeTab].type === "active" ? (
                <ActiveSlabContent slab={slabsData[activeTab]} isActive={true} />
              ) : (
                <UpcomingSlabContent slab={slabsData[activeTab]} isActive={true} />
              )}
            </div>
          </div>

          {/* Right Arrow - Hidden on mobile */}
          <button
            onClick={() =>
              handleTabClick(activeTab < slabsData.length - 1 ? activeTab + 1 : 0)
            }
            className="hidden md:block absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white shadow-sm rounded-full p-2 transition-all duration-200 border border-gray-200"
          >
            <ChevronRight size={16} className="text-gray-600" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-1.5 my-3">
          {slabsData.map((_, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeTab === index
                  ? "bg-green-500 w-5"
                  : "bg-gray-300 w-2 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="text-xs md:text-sm">
          <div className="bg-gray-200 rounded-full h-1.5 overflow-hidden mb-2">
            <div
              className="bg-gradient-to-r from-green-400 to-green-500 h-full transition-all duration-500 rounded-full"
              style={{
                width: `${((activeTab + 1) / slabsData.length) * 100}%`,
              }}
            />
          </div>
          <div className="flex justify-between text-gray-500 text-xs md:text-sm">
            <span>{activeTab + 1}/{slabsData.length}</span>
            <span className="text-green-600 truncate text-xs md:text-sm">{slabsData[activeTab].title}</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default SlabTabs;