// import React, { useRef, useState, useEffect, useCallback } from "react";
// import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';


// const slabsData = [
//   {
//     id: 1,
//     title: "1st ICO Slab",
//     status: "Live",
//     statusColor: "bg-emerald-500",
//     type: "active",
//     prices: { usd: 0.00024, inr: 0.02 },
//     soldPercentage: 20.41,
//     totalCoins: "50000000000",
//     description: "Invest in Jaimax 1st ICO slab for your financial future."
//   },
//   {
//     id: 2,
//     title: "2nd ICO Slab",
//     status: "Upcoming",
//     statusColor: "bg-lime-400",
//     type: "upcoming",
//     prices: { usd: 0.00059, inr: 0.05 },
//     totalCoins: "20000000000"
//   },
//   {
//     id: 3,
//     title: "3rd ICO Slab",
//     status: "Upcoming",
//     statusColor: "bg-lime-400",
//     type: "upcoming",
//     prices: { usd: 0.00710, inr: 0.60000 },
//     totalCoins: "25000000000"
//   },
//   {
//     id: 4,
//     title: "4th ICO Slab",
//     status: "Upcoming",
//     statusColor: "bg-lime-400",
//     type: "upcoming",
//     prices: { usd: 0.01893, inr: 1.60000 },
//     totalCoins: "30000000000"
//   },
//   {
//     id: 5,
//     title: "5th ICO Slab",
//     status: "Upcoming",
//     statusColor: "bg-lime-400",
//     type: "upcoming",
//     prices: { usd: 0.00189, inr: 0.159 },
//     totalCoins: "23000000000"
//   }
// ];

// const ActiveSlabContent = ({ slab }) => {
//   const [paymentMethod, setPaymentMethod] = useState('INR');
//   const [amount, setAmount] = useState('');

//   return (
//     <div className="space-y-4">
//       {/* Header */}
//       <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
//        <h3 className="text-gray-800 font-semibold text-lg">{slab.title}</h3>
//         <span className={`${slab.statusColor} text-white text-xs px-4 py-2 rounded-full flex items-center gap-2 w-fit`}>
//           <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
//           {slab.status}
//         </span>
//       </div>

//       {/* Payment Method Selection */}
//       <div className="space-y-3">
//         <label className="block text-sm font-medium text-gray-700">Pay with</label>
//         <div className="flex gap-6">
//           <label className="flex items-center gap-2 cursor-pointer">
//             <input 
//               type="radio" 
//               name="paymentMethod" 
//               value="INR"
//               checked={paymentMethod === 'INR'}
//               onChange={(e) => setPaymentMethod(e.target.value)}
//               className="text-emerald-600 focus:ring-emerald-500"
//             />
//             <span className="text-gray-700 font-medium">INR</span>
//           </label>
//           <label className="flex items-center gap-2 cursor-pointer">
//             <input 
//               type="radio" 
//               name="paymentMethod" 
//               value="USD"
//               checked={paymentMethod === 'USD'}
//               onChange={(e) => setPaymentMethod(e.target.value)}
//               className="text-emerald-600 focus:ring-emerald-500"
//             />
//             <span className="text-gray-700 font-medium">USD</span>
//           </label>
//         </div>
//       </div>

//       {/* Amount Input */}
//       <div className="w-full flex justify-center">
//   <div className="w-full max-w-sm space-y-3">
//     <input
//       type="number"
//       placeholder={`Enter Amount in ${paymentMethod}`}
//       value={amount}
//       onChange={(e) => setAmount(e.target.value)}
//       className="w-full rounded-lg py-2 px-3 text-sm border border-black/20 focus:border-2 focus:border-[#20934a]"
//     />

//     <button className="w-full bg-[#20934a] hover:bg-[#2cc765] text-white py-2 text-sm px-4 rounded-md font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02]">
//       Proceed to Pay
//     </button>
//   </div>
// </div>

//       {/* Price Changes */}
//       <div className="flex justify-between text-sm">
//         <span className="text-emerald-600 font-medium flex items-center gap-1">
//           <span className="text-emerald-500">↗</span>
//           {slab.prices.inr.toFixed(5)} INR
//         </span>
//         <span className="text-emerald-600 font-medium flex items-center gap-1">
//           <span className="text-emerald-500">↗</span>
//           {slab.prices.usd.toFixed(5)} USD
//         </span>
//       </div>

//       {/* Progress Section */}
//       <div className="space-y-3">
//         <p className="text-sm text-gray-600">Sold Tokens: {slab.soldPercentage}%</p>
//         <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
//           <div
//             className="bg-gradient-to-r from-emerald-400 to-emerald-500 h-full rounded-full transition-all duration-500 ease-out"
//             style={{ width: `${slab.soldPercentage}%` }}
//           ></div>
//         </div>
//         <div className="flex justify-between text-xs text-gray-500">
//           <span>0%</span>
//           <span>100%</span>
//         </div>
//       </div>

//       {/* Description */}
//       <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-4 border border-emerald-100">
//         <p className="text-sm text-gray-700 text-center leading-relaxed">
//           {slab.description}
//         </p>
//       </div>
//     </div>
//   );
// };

// const UpcomingSlabContent = ({ slab }) => (
//   <div className="space-y-6 text-center">
//     {/* Header */}
//     <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
//       <h3 className="text-gray-800 font-bold text-xl">{slab.title}</h3>
//       <span className={`${slab.statusColor} text-white text-xs px-4 py-2 rounded-full flex items-center gap-2 w-fit mx-auto sm:mx-0`}>
//         <div className="w-2 h-2 bg-white rounded-full"></div>
//         {slab.status}
//       </span>
//     </div>

//     {/* Coin Image */}
//     <div className="flex justify-center">
//       <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
//         <span className="text-white font-bold text-2xl">J</span>
//       </div>
//     </div>

//     {/* Price Information */}
//     <div className="grid grid-cols-2 gap-6 max-w-xs mx-auto">
//       <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 border border-gray-200">
//         <p className="text-sm font-semibold text-gray-700 mb-1">USD</p>
//         <p className="text-lg font-bold">{slab.prices.usd.toFixed(5)}</p>
//       </div>
//       <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 border border-gray-200">
//         <p className="font-bold text-gray-700 text-sm mb-1">INR</p>
//         <p className="text-lg font-semibold text-gray-800">{slab.prices.inr.toFixed(5)}</p>
//       </div>
//     </div>

//     {/* Total Coins */}
//     <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-6 border border-emerald-100">
//       <p className="text-sm font-medium text-gray-700 mb-2">
//         Total Coins Ready for Release
//       </p>
//       <p className="text-2xl font-bold text-emerald-600">
//         {parseInt(slab.totalCoins).toLocaleString()}
//       </p>
//     </div>
//   </div>
// );



// const SlabTabs = () => {
//   const [activeTab, setActiveTab] = useState(0);
//   const [isAutoPlay, setIsAutoPlay] = useState(false);
//   const [isDragging, setIsDragging] = useState(false);
//   const [dragStart, setDragStart] = useState(0);
//   const [dragOffset, setDragOffset] = useState(0);
//   const scrollRef = useRef(null);
//   const autoPlayRef = useRef(null);

//   // Enhanced scroll to tab with smooth animation
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

//   // Auto-play functionality
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

//   // Enhanced scroll handler
//   const handleScroll = useCallback(() => {
//     const container = scrollRef.current;
//     if (container && !isDragging) {
//       const index = Math.round(container.scrollLeft / container.clientWidth);
//       if (index !== activeTab) {
//         setActiveTab(index);
//       }
//     }
//   }, [activeTab, isDragging]);

//   // Touch/mouse drag handlers
//   const handleDragStart = (e) => {
//     setIsDragging(true);
//     setDragStart(e.type === 'mousedown' ? e.clientX : e.touches[0].clientX);
//     setIsAutoPlay(false); // Pause auto-play when user interacts
//   };

//   const handleDragMove = (e) => {
//     if (!isDragging) return;
//     const currentX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
//     setDragOffset(currentX - dragStart);
//   };

//   const handleDragEnd = () => {
//     if (!isDragging) return;
//     setIsDragging(false);
    
//     const threshold = 50; // Minimum drag distance to trigger swipe
//     if (Math.abs(dragOffset) > threshold) {
//       if (dragOffset > 0 && activeTab > 0) {
//         scrollToTab(activeTab - 1);
//       } else if (dragOffset < 0 && activeTab < slabsData.length - 1) {
//         scrollToTab(activeTab + 1);
//       }
//     }
//     setDragOffset(0);
//   };

//   // Keyboard navigation
//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (e.key === 'ArrowLeft' && activeTab > 0) {
//         scrollToTab(activeTab - 1);
//       } else if (e.key === 'ArrowRight' && activeTab < slabsData.length - 1) {
//         scrollToTab(activeTab + 1);
//       } else if (e.key === ' ') {
//         e.preventDefault();
//         setIsAutoPlay(!isAutoPlay);
//       }
//     };

//     window.addEventListener('keydown', handleKeyDown);
//     return () => window.removeEventListener('keydown', handleKeyDown);
//   }, [activeTab, isAutoPlay, scrollToTab]);

//   return (
//     <div className="min-h-screen  rounded-xl bg-white">
//       <div className="container mx-auto px-4 py-8 w-full">
//         {/* Header */}
//         <div className="text-center mb-6">
//           <h1 className="text-3xl md:text-4xl font-bold text-[#084e54] mb-2">
//             ICO Investment Slabs
//           </h1>
//           <p className="text-gray-600 text-lg">
//             Choose your preferred investment slab
//           </p>
//         </div>

//         {/* Top Navigation with Auto-play Control */}
//         <div className="flex items-center justify-between mb-6">
//           <div className="flex items-center gap-3">
//             <button
//               onClick={() => setIsAutoPlay(!isAutoPlay)}
//               className="flex items-center gap-2 px-3 py-2 bg-emerald-100 hover:bg-emerald-200 text-emerald-700 rounded-lg transition-colors duration-200"
//             >
//               {isAutoPlay ? <Pause size={16} /> : <Play size={16} />}
//               <span className="text-sm font-medium">
//                 {isAutoPlay ? 'Pause' : 'Auto Play'}
//               </span>
//             </button>
//           </div>

//           {/* Slab Navigation Buttons */}
//           <div className="flex flex-wrap justify-center gap-2">
//             {slabsData.map((slab, index) => (
//               <button
//                 key={slab.id}
//                 onClick={() => scrollToTab(index)}
//                 className={`px-4 py-2 text-sm rounded-lg font-semibold transition-all duration-300 transform ${
//                   activeTab === index
//                     ? "bg-emerald-500 text-white shadow-lg scale-105"
//                     : "bg-white text-gray-700 hover:bg-emerald-50 shadow-md border border-gray-200 hover:border-emerald-200"
//                 }`}
//               >
//                 {slab.id}
//                 {slab.id === 1 ? "st" : slab.id === 2 ? "nd" : slab.id === 3 ? "rd" : "th"} Slab
//               </button>
//             ))}
//           </div>

//           <div className="text-sm text-gray-500 font-medium">
//             {activeTab + 1} / {slabsData.length}
//           </div>
//         </div>

//         {/* Carousel Container */}
//         <div className="relative group">
//           {/* Left Arrow */}
//           {activeTab > 0 && (
//             <button
//               onClick={() => scrollToTab(activeTab - 1)}
//               className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200 opacity-0 group-hover:opacity-100 hover:scale-110"
//             >
//               <ChevronLeft size={24} className="text-emerald-600" />
//             </button>
//           )}

//           {/* Swipeable Cards */}
//           <div
//             ref={scrollRef}
//             onScroll={handleScroll}
//             onMouseDown={handleDragStart}
//             onMouseMove={handleDragMove}
//             onMouseUp={handleDragEnd}
//             onMouseLeave={handleDragEnd}
//             onTouchStart={handleDragStart}
//             onTouchMove={handleDragMove}
//             onTouchEnd={handleDragEnd}
//             className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-6 pb-6 no-scrollbar w-full cursor-grab active:cursor-grabbing"
//             style={{ 
//               scrollbarWidth: 'none',
//               msOverflowStyle: 'none',
//               transform: isDragging ? `translateX(${dragOffset * 0.1}px)` : 'none',
//               transition: isDragging ? 'none' : 'transform 0.3s ease'
//             }}
//           >
//             {slabsData.map((slab) => (
//               <div key={slab.id} className="w-full snap-center px-2 md:px-4 flex-shrink-0">
//                 <div className="p-2">
//                   {slab.type === "active" ? (
//                     <ActiveSlabContent slab={slab} />
//                   ) : (
//                     <UpcomingSlabContent slab={slab} />
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Right Arrow */}
//           {activeTab < slabsData.length - 1 && (
//             <button
//               onClick={() => scrollToTab(activeTab + 1)}
//               className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200 opacity-0 group-hover:opacity-100 hover:scale-110"
//             >
//               <ChevronRight size={24} className="text-emerald-600" />
//             </button>
//           )}
//         </div>

//         {/* Enhanced Pagination Dots */}
//         <div className="flex justify-center items-center gap-3 mt-6">
//           {slabsData.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => scrollToTab(index)}
//               className={`h-3 rounded-full transition-all duration-300 hover:scale-110 ${
//                 activeTab === index
//                   ? "bg-emerald-500 w-8 shadow-md"
//                   : "bg-gray-300 w-3 hover:bg-gray-400"
//               }`}
//             />
//           ))}
//         </div>

//         {/* Progress Bar */}
//         <div className="mt-4 bg-gray-200 rounded-full h-1 overflow-hidden">
//           <div 
//             className="bg-emerald-500 h-full transition-all duration-300 ease-out"
//             style={{ width: `${((activeTab + 1) / slabsData.length) * 100}%` }}
//           />
//         </div>

//         {/* Keyboard Shortcuts Info */}
//         <div className="text-center mt-6 text-sm text-gray-500">
//           Use ← → arrow keys to navigate • Spacebar to toggle auto-play
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



import React, { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

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
      <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-md">
        <span className="text-white font-bold text-xl">J</span>
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

  const handleScroll = useCallback(() => {
    const container = scrollRef.current;
    if (container && !isDragging) {
      const index = Math.round(container.scrollLeft / container.clientWidth);
      if (index !== activeTab) {
        setActiveTab(index);
      }
    }
  }, [activeTab, isDragging]);

  const handleDragStart = (e) => {
    setIsDragging(true);
    setDragStart(e.type === 'mousedown' ? e.clientX : e.touches[0].clientX);
    setIsAutoPlay(false);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    const currentX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
    setDragOffset(currentX - dragStart);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const threshold = 50;
    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0 && activeTab > 0) {
        scrollToTab(activeTab - 1);
      } else if (dragOffset < 0 && activeTab < slabsData.length - 1) {
        scrollToTab(activeTab + 1);
      }
    }
    setDragOffset(0);
  };

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
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-lg text-xs max-w-lg mx-auto">
      <div className="px-4 py-4">
        
        {/* Top Navigation Tabs */}
        <div className="flex justify-center mb-4">
          <div className="flex bg-white rounded-lg p-1 border border-gray-200 shadow-sm overflow-x-auto gap-1 max-w-full">
            {slabsData.map((slab, index) => (
              <button
                key={slab.id}
                onClick={() => handleTabClick(index)}
                className={`px-2 py-1 text-xs rounded-md font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
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

        {/* Carousel Container */}
        <div className="relative group">
          {/* Left Arrow */}
          <button
            onClick={() =>
              handleTabClick(activeTab > 0 ? activeTab - 1 : slabsData.length - 1)
            }
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white shadow-sm rounded-full p-2 transition-all duration-200 border border-gray-200"
          >
            <ChevronLeft size={16} className="text-gray-600" />
          </button>

          {/* Single Card Display */}
          <div className="flex justify-center">
            <div className="w-full max-w-lg mx-auto">
              {slabsData[activeTab].type === "active" ? (
                <ActiveSlabContent slab={slabsData[activeTab]} isActive={true} />
              ) : (
                <UpcomingSlabContent slab={slabsData[activeTab]} isActive={true} />
              )}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={() =>
              handleTabClick(activeTab < slabsData.length - 1 ? activeTab + 1 : 0)
            }
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white shadow-sm rounded-full p-2 transition-all duration-200 border border-gray-200"
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
        <div className="text-sm">
          <div className="bg-gray-200 rounded-full h-1.5 overflow-hidden mb-2">
            <div
              className="bg-gradient-to-r from-green-400 to-green-500 h-full transition-all duration-500 rounded-full"
              style={{
                width: `${((activeTab + 1) / slabsData.length) * 100}%`,
              }}
            />
          </div>
          <div className="flex justify-between text-gray-500 text-sm">
            <span>{activeTab + 1}/{slabsData.length}</span>
            <span className="text-green-600 truncate">{slabsData[activeTab].title}</span>
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

// import React, { useRef, useState, useEffect, useCallback } from "react";
// import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

// const slabsData = [
//   {
//     id: 1,
//     title: "1st ICO Slab",
//     status: "Live",
//     statusColor: "bg-green-500",
//     type: "active",
//     prices: { usd: 0.00024, inr: 0.02 },
//     soldPercentage: 20.50,
//     totalCoins: "50000000000",
//     description: "Invest in Jaimax 1st ICO slab for your financial future."
//   },
//   {
//     id: 2,
//     title: "2nd ICO Slab",
//     status: "Upcoming",
//     statusColor: "bg-yellow-500",
//     type: "upcoming",
//     prices: { usd: 0.00059, inr: 0.05 },
//     totalCoins: "20000000000"
//   },
//   {
//     id: 3,
//     title: "3rd ICO Slab",
//     status: "Upcoming",
//     statusColor: "bg-yellow-500",
//     type: "upcoming",
//     prices: { usd: 0.00710, inr: 0.60000 },
//     totalCoins: "25000000000"
//   },
//   {
//     id: 4,
//     title: "4th ICO Slab",
//     status: "Upcoming",
//     statusColor: "bg-yellow-500",
//     type: "upcoming",
//     prices: { usd: 0.01893, inr: 1.60000 },
//     totalCoins: "30000000000"
//   },
//   {
//     id: 5,
//     title: "5th ICO Slab",
//     status: "Upcoming",
//     statusColor: "bg-yellow-500",
//     type: "upcoming",
//     prices: { usd: 0.00189, inr: 0.159 },
//     totalCoins: "23000000000"
//   }
// ];

// const ActiveSlabContent = ({ slab, isActive }) => {
//   const [paymentMethod, setPaymentMethod] = useState('INR');
//   const [amount, setAmount] = useState('');

//   const handleProceedToPay = () => {
//     if (!amount) {
//       alert('Please enter an amount');
//       return;
//     }
//     alert(`Proceeding to pay ${amount} ${paymentMethod} for ${slab.title}`);
//   };

//   return (
//     <div className={`bg-white rounded-lg p-4 text-gray-800 shadow-lg border border-gray-200 transform transition-all duration-500 min-h-[320px] ${
//       isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-80'
//     }`}>
//       {/* Header */}
//       <div className="flex justify-between items-center mb-4">
//         <h3 className="text-gray-800 font-semibold text-base">{slab.title}</h3>
//         <span className={`${slab.statusColor} text-white text-xs px-2 py-1 rounded-full flex items-center gap-1`}>
//           <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
//           {slab.status}
//         </span>
//       </div>

//       {/* Payment Method Selection */}
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-600 mb-2">Pay with</label>
//         <div className="flex gap-4">
//           {['INR', 'USD'].map((method) => (
//             <label key={method} className="flex items-center gap-2 cursor-pointer group">
//               <div className="relative">
//                 <input 
//                   type="radio" 
//                   name="paymentMethod" 
//                   value={method}
//                   checked={paymentMethod === method}
//                   onChange={(e) => setPaymentMethod(e.target.value)}
//                   className="sr-only"
//                 />
//                 <div className={`w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 ${
//                   paymentMethod === method 
//                     ? 'border-green-500 bg-green-500' 
//                     : 'border-gray-300'
//                 } flex items-center justify-center`}>
//                   {paymentMethod === method && (
//                     <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
//                   )}
//                 </div>
//               </div>
//               <span className={`text-sm font-medium ${
//                 paymentMethod === method ? 'text-gray-800' : 'text-gray-500'
//               }`}>{method}</span>
//             </label>
//           ))}
//         </div>
//       </div>

//       {/* Amount Input */}
//       <div className="mb-4 space-y-3">
//         <input
//           type="number"
//           placeholder="Enter Amount"
//           value={amount}
//           onChange={(e) => setAmount(e.target.value)}
//           className="w-full bg-gray-50 border border-gray-300 rounded-lg py-2.5 px-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500/20"
//         />

//         <button 
//           onClick={handleProceedToPay}
//           className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-2.5 px-3 rounded-lg text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
//         >
//           Proceed to pay
//         </button>
//       </div>

//       {/* Price Changes */}
//       <div className="flex justify-between mb-4">
//         <span className="text-green-600 text-sm font-medium flex items-center gap-1">
//           <span className="text-green-600">↗</span>
//           {slab.prices.inr.toFixed(5)} INR
//         </span>
//         <span className="text-green-600 text-sm font-medium flex items-center gap-1">
//           <span className="text-green-600">↗</span>
//           {slab.prices.usd.toFixed(5)} USD
//         </span>
//       </div>

//       {/* Progress Section */}
//       <div className="mb-4">
//         <p className="text-gray-600 text-sm mb-2">Sold Tokens {slab.soldPercentage}%</p>
//         <div className="w-full bg-gray-200 rounded-full h-2">
//           <div
//             className="bg-gradient-to-r from-green-500 to-green-600 h-full rounded-full transition-all duration-1000"
//             style={{ width: `${slab.soldPercentage}%` }}
//           ></div>
//         </div>
//       </div>

//       {/* Description */}
//       <div className="text-center">
//         <p className="text-gray-600 text-sm leading-relaxed">
//           {slab.description}
//         </p>
//       </div>
//     </div>
//   );
// };

// const UpcomingSlabContent = ({ slab, isActive }) => (
//   <div className={`bg-white rounded-lg p-4 text-gray-800 shadow-lg border border-gray-200 transform transition-all duration-500 min-h-[320px] ${
//     isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-80'
//   }`}>
//     {/* Header */}
//     <div className="flex justify-between items-center mb-4">
//       <h3 className="text-gray-800 font-semibold text-base">{slab.title}</h3>
//       <span className={`${slab.statusColor} text-white text-xs px-2 py-1 rounded-full flex items-center gap-1`}>
//         <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
//         {slab.status}
//       </span>
//     </div>

//     {/* Coin Image */}
//     <div className="flex justify-center mb-4">
//       <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-md">
//         <span className="text-white font-bold text-xl">J</span>
//       </div>
//     </div>

//     {/* Price Information */}
//     <div className="grid grid-cols-2 gap-3 mb-4">
//       <div className="bg-gray-50 rounded-lg p-3 border border-gray-200 text-center">
//         <p className="text-sm font-semibold text-gray-600 mb-1">USD</p>
//         <p className="text-base font-bold text-gray-800">{slab.prices.usd.toFixed(5)}</p>
//       </div>
//       <div className="bg-gray-50 rounded-lg p-3 border border-gray-200 text-center">
//         <p className="font-bold text-gray-600 text-sm mb-1">INR</p>
//         <p className="text-base font-semibold text-gray-800">{slab.prices.inr.toFixed(5)}</p>
//       </div>
//     </div>

//     {/* Total Coins */}
//     <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4 border border-gray-200 text-center">
//       <p className="text-sm font-medium text-gray-600 mb-2">
//         Total Coins Ready for Release
//       </p>
//       <p className="text-xl font-bold text-green-600">
//         {parseInt(slab.totalCoins).toLocaleString()}
//       </p>
//     </div>
//   </div>
// );

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
//     <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-lg text-xs max-w-lg mx-auto">
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
//                     ? "bg-gray-100 text-gray-800 shadow-sm"
//                     : "text-gray-500 hover:text-gray-800 hover:bg-gray-50"
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
// import React, { useRef, useState, useEffect, useCallback } from "react";
// import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

// const slabsData = [
//   {
//     id: 1,
//     title: "1st ICO Slab",
//     status: "Live",
//     statusColor: "bg-green-500",
//     type: "active",
//     prices: { usd: 0.00024, inr: 0.02 },
//     soldPercentage: 20.50,
//     totalCoins: "50000000000",
//     description: "Invest in Jaimax 1st ICO slab for your financial future."
//   },
//   {
//     id: 2,
//     title: "2nd ICO Slab",
//     status: "Upcoming",
//     statusColor: "bg-yellow-500",
//     type: "upcoming",
//     prices: { usd: 0.00059, inr: 0.05 },
//     totalCoins: "20000000000"
//   },
//   {
//     id: 3,
//     title: "3rd ICO Slab",
//     status: "Upcoming",
//     statusColor: "bg-yellow-500",
//     type: "upcoming",
//     prices: { usd: 0.00710, inr: 0.60000 },
//     totalCoins: "25000000000"
//   },
//   {
//     id: 4,
//     title: "4th ICO Slab",
//     status: "Upcoming",
//     statusColor: "bg-yellow-500",
//     type: "upcoming",
//     prices: { usd: 0.01893, inr: 1.60000 },
//     totalCoins: "30000000000"
//   },
//   {
//     id: 5,
//     title: "5th ICO Slab",
//     status: "Upcoming",
//     statusColor: "bg-yellow-500",
//     type: "upcoming",
//     prices: { usd: 0.00189, inr: 0.159 },
//     totalCoins: "23000000000"
//   }
// ];

// const ActiveSlabContent = ({ slab, isActive }) => {
//   const [paymentMethod, setPaymentMethod] = useState('INR');
//   const [amount, setAmount] = useState('');

//   const handleProceedToPay = () => {
//     if (!amount) {
//       alert('Please enter an amount');
//       return;
//     }
//     alert(`Proceeding to pay ${amount} ${paymentMethod} for ${slab.title}`);
//   };

//   return (
//     <div className={`bg-white rounded-lg p-4 text-gray-800 shadow-lg border border-gray-200 transform transition-all duration-500 min-h-[320px] ${
//       isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-80'
//     }`}>
//       {/* Header */}
//       <div className="flex justify-between items-center mb-4">
//         <h3 className="text-gray-800 font-semibold text-base">{slab.title}</h3>
//         <span className={`${slab.statusColor} text-white text-xs px-2 py-1 rounded-full flex items-center gap-1`}>
//           <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
//           {slab.status}
//         </span>
//       </div>

//       {/* Payment Method Selection */}
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-600 mb-2">Pay with</label>
//         <div className="flex gap-4">
//           {['INR', 'USD'].map((method) => (
//             <label key={method} className="flex items-center gap-2 cursor-pointer group">
//               <div className="relative">
//                 <input 
//                   type="radio" 
//                   name="paymentMethod" 
//                   value={method}
//                   checked={paymentMethod === method}
//                   onChange={(e) => setPaymentMethod(e.target.value)}
//                   className="sr-only"
//                 />
//                 <div className={`w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 ${
//                   paymentMethod === method 
//                     ? 'border-green-500 bg-green-500' 
//                     : 'border-gray-300'
//                 } flex items-center justify-center`}>
//                   {paymentMethod === method && (
//                     <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
//                   )}
//                 </div>
//               </div>
//               <span className={`text-sm font-medium ${
//                 paymentMethod === method ? 'text-gray-800' : 'text-gray-500'
//               }`}>{method}</span>
//             </label>
//           ))}
//         </div>
//       </div>

//       {/* Amount Input */}
//       <div className="mb-4 space-y-3">
//         <input
//           type="number"
//           placeholder="Enter Amount"
//           value={amount}
//           onChange={(e) => setAmount(e.target.value)}
//           className="w-full bg-gray-50 border border-gray-300 rounded-lg py-2.5 px-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500/20"
//         />

//         <button 
//           onClick={handleProceedToPay}
//           className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-2.5 px-3 rounded-lg text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
//         >
//           Proceed to pay
//         </button>
//       </div>

//       {/* Price Changes */}
//       <div className="flex justify-between mb-4">
//         <span className="text-green-600 text-sm font-medium flex items-center gap-1">
//           <span className="text-green-600">↗</span>
//           {slab.prices.inr.toFixed(5)} INR
//         </span>
//         <span className="text-green-600 text-sm font-medium flex items-center gap-1">
//           <span className="text-green-600">↗</span>
//           {slab.prices.usd.toFixed(5)} USD
//         </span>
//       </div>

//       {/* Progress Section */}
//       <div className="mb-4">
//         <p className="text-gray-600 text-sm mb-2">Sold Tokens {slab.soldPercentage}%</p>
//         <div className="w-full bg-gray-200 rounded-full h-2">
//           <div
//             className="bg-gradient-to-r from-green-500 to-green-600 h-full rounded-full transition-all duration-1000"
//             style={{ width: `${slab.soldPercentage}%` }}
//           ></div>
//         </div>
//       </div>

//       {/* Description */}
//       <div className="text-center">
//         <p className="text-gray-600 text-sm leading-relaxed">
//           {slab.description}
//         </p>
//       </div>
//     </div>
//   );
// };

// const UpcomingSlabContent = ({ slab, isActive }) => (
//   <div className={`bg-white rounded-lg p-4 text-gray-800 shadow-lg border border-gray-200 transform transition-all duration-500 min-h-[320px] ${
//     isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-80'
//   }`}>
//     {/* Header */}
//     <div className="flex justify-between items-center mb-4">
//       <h3 className="text-gray-800 font-semibold text-base">{slab.title}</h3>
//       <span className={`${slab.statusColor} text-white text-xs px-2 py-1 rounded-full flex items-center gap-1`}>
//         <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
//         {slab.status}
//       </span>
//     </div>

//     {/* Coin Image */}
//     <div className="flex justify-center mb-4">
//       <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-md">
//         <span className="text-white font-bold text-xl">J</span>
//       </div>
//     </div>

//     {/* Price Information */}
//     <div className="grid grid-cols-2 gap-3 mb-4">
//       <div className="bg-gray-50 rounded-lg p-3 border border-gray-200 text-center">
//         <p className="text-sm font-semibold text-gray-600 mb-1">USD</p>
//         <p className="text-base font-bold text-gray-800">{slab.prices.usd.toFixed(5)}</p>
//       </div>
//       <div className="bg-gray-50 rounded-lg p-3 border border-gray-200 text-center">
//         <p className="font-bold text-gray-600 text-sm mb-1">INR</p>
//         <p className="text-base font-semibold text-gray-800">{slab.prices.inr.toFixed(5)}</p>
//       </div>
//     </div>

//     {/* Total Coins */}
//     <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4 border border-gray-200 text-center">
//       <p className="text-sm font-medium text-gray-600 mb-2">
//         Total Coins Ready for Release
//       </p>
//       <p className="text-xl font-bold text-green-600">
//         {parseInt(slab.totalCoins).toLocaleString()}
//       </p>
//     </div>
//   </div>
// );

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
//     <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-lg text-xs max-w-md mx-auto">
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
//                     ? "bg-gray-100 text-gray-800 shadow-sm"
//                     : "text-gray-500 hover:text-gray-800 hover:bg-gray-50"
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
//             <div className="w-full max-w-md mx-auto">
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

// import React, { useRef, useState, useEffect, useCallback } from "react";
// import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

// const slabsData = [
//   {
//     id: 1,
//     title: "1st ICO Slab",
//     status: "Live",
//     statusColor: "bg-green-500",
//     type: "active",
//     prices: { usd: 0.00024, inr: 0.02 },
//     soldPercentage: 20.50,
//     totalCoins: "50000000000",
//     description: "Invest in Jaimax 1st ICO slab for your financial future."
//   },
//   {
//     id: 2,
//     title: "2nd ICO Slab",
//     status: "Upcoming",
//     statusColor: "bg-yellow-500",
//     type: "upcoming",
//     prices: { usd: 0.00059, inr: 0.05 },
//     totalCoins: "20000000000"
//   },
//   {
//     id: 3,
//     title: "3rd ICO Slab",
//     status: "Upcoming",
//     statusColor: "bg-yellow-500",
//     type: "upcoming",
//     prices: { usd: 0.00710, inr: 0.60000 },
//     totalCoins: "25000000000"
//   },
//   {
//     id: 4,
//     title: "4th ICO Slab",
//     status: "Upcoming",
//     statusColor: "bg-yellow-500",
//     type: "upcoming",
//     prices: { usd: 0.01893, inr: 1.60000 },
//     totalCoins: "30000000000"
//   },
//   {
//     id: 5,
//     title: "5th ICO Slab",
//     status: "Upcoming",
//     statusColor: "bg-yellow-500",
//     type: "upcoming",
//     prices: { usd: 0.00189, inr: 0.159 },
//     totalCoins: "23000000000"
//   }
// ];

// const ActiveSlabContent = ({ slab, isActive }) => {
//   const [paymentMethod, setPaymentMethod] = useState('INR');
//   const [amount, setAmount] = useState('');

//   return (
//     <div className={`bg-white rounded-2xl p-6 text-gray-800 shadow-2xl border border-gray-200 transform transition-all duration-700 min-h-[500px] ${
//       isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-80'
//     }`}>
//       {/* Header */}
//       <div className="flex justify-between items-center mb-6 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
//         <h3 className="text-gray-800 font-bold text-xl">{slab.title}</h3>
//         <span className={`${slab.statusColor} text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-2 transform transition-all duration-300 hover:scale-105`}>
//           <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
//           {slab.status}
//         </span>
//       </div>

//       {/* Payment Method Selection */}
//       <div className="mb-6 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
//         <label className="block text-sm font-medium text-gray-600 mb-3">Pay with</label>
//         <div className="flex gap-6">
//           <label className="flex items-center gap-2 cursor-pointer group">
//             <div className="relative">
//               <input 
//                 type="radio" 
//                 name="paymentMethod" 
//                 value="INR"
//                 checked={paymentMethod === 'INR'}
//                 onChange={(e) => setPaymentMethod(e.target.value)}
//                 className="sr-only"
//               />
//               <div className={`w-4 h-4 rounded-full border-2 transition-all duration-300 group-hover:scale-110 ${
//                 paymentMethod === 'INR' 
//                   ? 'border-green-500 bg-green-500 shadow-lg shadow-green-500/30' 
//                   : 'border-gray-300 group-hover:border-green-400'
//               } flex items-center justify-center`}>
//                 {paymentMethod === 'INR' && (
//                   <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
//                 )}
//               </div>
//             </div>
//             <span className={`font-medium transition-colors duration-300 ${
//               paymentMethod === 'INR' ? 'text-gray-800' : 'text-gray-500 group-hover:text-gray-800'
//             }`}>INR</span>
//           </label>
//           <label className="flex items-center gap-2 cursor-pointer group">
//             <div className="relative">
//               <input 
//                 type="radio" 
//                 name="paymentMethod" 
//                 value="USD"
//                 checked={paymentMethod === 'USD'}
//                 onChange={(e) => setPaymentMethod(e.target.value)}
//                 className="sr-only"
//               />
//               <div className={`w-4 h-4 rounded-full border-2 transition-all duration-300 group-hover:scale-110 ${
//                 paymentMethod === 'USD' 
//                   ? 'border-green-500 bg-green-500 shadow-lg shadow-green-500/30' 
//                   : 'border-gray-300 group-hover:border-green-400'
//               } flex items-center justify-center`}>
//                 {paymentMethod === 'USD' && (
//                   <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
//                 )}
//               </div>
//             </div>
//             <span className={`font-medium transition-colors duration-300 ${
//               paymentMethod === 'USD' ? 'text-gray-800' : 'text-gray-500 group-hover:text-gray-800'
//             }`}>USD</span>
//           </label>
//         </div>
//       </div>

//       {/* Amount Input */}
//       <div className="mb-6 space-y-4 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
//         <input
//           type="text"
//           placeholder="Enter Amount"
//           value={amount}
//           onChange={(e) => setAmount(e.target.value)}
//           className="w-full bg-gray-50 border border-gray-300 rounded-xl py-3 px-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-300 transform focus:scale-105"
//         />

//         <button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-green-500/25 transform hover:scale-105 active:scale-95">
//           Proceed to pay
//         </button>
//       </div>

//       {/* Price Changes */}
//       <div className="flex justify-between mb-6 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
//         <span className="text-green-600 font-medium flex items-center gap-1 transform transition-all duration-300 hover:scale-105">
//           <span className="text-green-600 animate-bounce">↗</span>
//           {slab.prices.inr.toFixed(5)} INR
//         </span>
//         <span className="text-green-600 font-medium flex items-center gap-1 transform transition-all duration-300 hover:scale-105">
//           <span className="text-green-600 animate-bounce" style={{ animationDelay: '0.5s' }}>↗</span>
//           {slab.prices.usd.toFixed(5)} USD
//         </span>
//       </div>

//       {/* Progress Section */}
//       <div className="mb-6 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
//         <p className="text-gray-600 text-sm mb-3">Sold Tokens {slab.soldPercentage}%</p>
//         <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
//           <div
//             className="bg-gradient-to-r from-green-500 to-green-600 h-full rounded-full transition-all duration-1000 ease-out animate-pulse"
//             style={{ 
//               width: `${slab.soldPercentage}%`,
//               boxShadow: '0 0 10px rgba(34, 197, 94, 0.3)'
//             }}
//           ></div>
//         </div>
//       </div>

//       {/* Description */}
//       <div className="text-center animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
//         <p className="text-gray-600 text-sm leading-relaxed">
//           {slab.description}
//         </p>
//       </div>
//     </div>
//   );
// };

// const UpcomingSlabContent = ({ slab, isActive }) => (
//   <div className={`bg-white rounded-2xl p-6 text-gray-800 shadow-2xl border border-gray-200 transform transition-all duration-700 min-h-[500px] ${
//     isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-80'
//   }`}>
//     {/* Header */}
//     <div className="flex justify-between items-center mb-8 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
//       <h3 className="text-gray-800 font-bold text-xl">{slab.title}</h3>
//       <span className={`${slab.statusColor} text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-2 transform transition-all duration-300 hover:scale-105`}>
//         <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
//         {slab.status}
//       </span>
//     </div>

//     {/* Coin Image */}
//     <div className="flex justify-center mb-8 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
//       <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg transform transition-all duration-500 hover:scale-110 hover:rotate-12 animate-float">
//         <span className="text-white font-bold text-2xl">J</span>
//       </div>
//     </div>

//     {/* Price Information */}
//     <div className="grid grid-cols-2 gap-4 mb-8 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
//       <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 text-center transform transition-all duration-300 hover:scale-105 hover:bg-gray-100">
//         <p className="text-sm font-semibold text-gray-600 mb-1">USD</p>
//         <p className="text-lg font-bold text-gray-800">{slab.prices.usd.toFixed(5)}</p>
//       </div>
//       <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 text-center transform transition-all duration-300 hover:scale-105 hover:bg-gray-100">
//         <p className="font-bold text-gray-600 text-sm mb-1">INR</p>
//         <p className="text-lg font-semibold text-gray-800">{slab.prices.inr.toFixed(5)}</p>
//       </div>
//     </div>

//     {/* Total Coins */}
//     <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-6 border border-gray-200 text-center animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
//       <p className="text-sm font-medium text-gray-600 mb-2">
//         Total Coins Ready for Release
//       </p>
//       <p className="text-2xl font-bold text-green-600 animate-pulse">
//         {parseInt(slab.totalCoins).toLocaleString()}
//       </p>
//     </div>
//   </div>
// );

// const SlabTabs = () => {
//   const [activeTab, setActiveTab] = useState(0);
//   const [isAutoPlay, setIsAutoPlay] = useState(false);
//   const [isDragging, setIsDragging] = useState(false);
//   const [dragStart, setDragStart] = useState(0);
//   const [dragOffset, setDragOffset] = useState(0);
//   const scrollRef = useRef(null);
//   const autoPlayRef = useRef(null);

//   // Enhanced scroll to tab with smooth animation
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

//   // Handle tab click with immediate update
//   const handleTabClick = (index) => {
//     setActiveTab(index);
//     scrollToTab(index, true);
//     setIsAutoPlay(false); // Stop auto-play when user manually selects
//   };

//   // Auto-play functionality
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

//   // Enhanced scroll handler
//   const handleScroll = useCallback(() => {
//     const container = scrollRef.current;
//     if (container && !isDragging) {
//       const index = Math.round(container.scrollLeft / container.clientWidth);
//       if (index !== activeTab) {
//         setActiveTab(index);
//       }
//     }
//   }, [activeTab, isDragging]);

//   // Touch/mouse drag handlers
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

//   // Keyboard navigation
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

//   return (
//    <>
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
//       <div className="container mx-auto px-4 py-8 w-full">
//         {/* Top Navigation Tabs */}
//         <div className="flex justify-center mb-8 animate-fadeInDown">
//           <div className="flex bg-white rounded-2xl p-2 border border-gray-200 shadow-lg">
//             {slabsData.map((slab, index) => (
//               <button
//                 key={slab.id}
//                 onClick={() => handleTabClick(index)}
//                 className={`px-6 py-3 text-sm rounded-xl font-medium transition-all duration-500 transform relative overflow-hidden ${
//                   activeTab === index
//                     ? "bg-gray-100 text-gray-800 shadow-lg scale-105"
//                     : "text-gray-500 hover:text-gray-800 hover:bg-gray-50 hover:scale-105"
//                 }`}
//               >
//                 {activeTab === index && (
//                   <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl animate-pulse"></div>
//                 )}
//                 <span className="relative z-10">
//                   {slab.id === 1 ? "1st" : slab.id === 2 ? "2nd" : slab.id === 3 ? "3rd" : `${slab.id}th`} Slab
//                 </span>
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Carousel Container */}
//         <div className="relative group">
//           {/* Left Arrow */}
//           <button
//             onClick={() => handleTabClick(activeTab > 0 ? activeTab - 1 : slabsData.length - 1)}
//             className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200 hover:scale-110 border border-gray-200"
//           >
//             <ChevronLeft size={24} className="text-gray-600" />
//           </button>

//           {/* Swipeable Cards */}
//           <div
//             ref={scrollRef}
//             onScroll={handleScroll}
//             onMouseDown={handleDragStart}
//             onMouseMove={handleDragMove}
//             onMouseUp={handleDragEnd}
//             onMouseLeave={handleDragEnd}
//             onTouchStart={handleDragStart}
//             onTouchMove={handleDragMove}
//             onTouchEnd={handleDragEnd}
//             className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-6 pb-6 no-scrollbar w-full cursor-grab active:cursor-grabbing"
//             style={{ 
//               scrollbarWidth: 'none',
//               msOverflowStyle: 'none',
//               transform: isDragging ? `translateX(${dragOffset * 0.1}px)` : 'none',
//               transition: isDragging ? 'none' : 'transform 0.3s ease'
//             }}
//           >
//             {slabsData.map((slab, index) => (
//               <div key={slab.id} className="w-full max-w-md mx-auto snap-center flex-shrink-0">
//                 {slab.type === "active" ? (
//                   <ActiveSlabContent slab={slab} isActive={activeTab === index} />
//                 ) : (
//                   <UpcomingSlabContent slab={slab} isActive={activeTab === index} />
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Right Arrow */}
//           <button
//             onClick={() => handleTabClick(activeTab < slabsData.length - 1 ? activeTab + 1 : 0)}
//             className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200 hover:scale-110 border border-gray-200"
//           >
//             <ChevronRight size={24} className="text-gray-600" />
//           </button>
//         </div>

//         {/* Auto-play Control */}
//         <div className="flex justify-center mt-6 mb-6">
//           <button
//             onClick={() => setIsAutoPlay(!isAutoPlay)}
//             className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-gray-50 text-gray-800 rounded-lg transition-colors duration-200 border border-gray-200 shadow-md"
//           >
//             {isAutoPlay ? <Pause size={16} /> : <Play size={16} />}
//             <span className="text-sm font-medium">
//               {isAutoPlay ? 'Pause' : 'Auto Play'}
//             </span>
//           </button>
//         </div>

//         {/* Enhanced Pagination Dots */}
//         <div className="flex justify-center items-center gap-3 mb-6">
//           {slabsData.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => handleTabClick(index)}
//               className={`h-3 rounded-full transition-all duration-300 hover:scale-110 relative ${
//                 activeTab === index
//                   ? "bg-green-500 w-8 shadow-lg shadow-green-500/30"
//                   : "bg-gray-300 w-3 hover:bg-gray-400"
//               }`}d-full transition-all duration-300 hover:scale-110 relative ${
//                 activeTab === index
//                   ? "bg-green-400 w-8 shadow-lg shadow-green-400/50"
//                   : "bg-slate-600 w-3 hover:bg-slate-500"
//               }`}
//             >
//               {activeTab === index && (
//                 <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75"></div>
//               )}
//             </button>
//           ))}
//         </div>

//         {/* Progress Indicator with Slide Info */}
//         <div className="max-w-md mx-auto">
//           <div className="bg-slate-700 rounded-full h-2 overflow-hidden mb-3">
//             <div 
//               className="bg-gradient-to-r from-green-400 to-green-500 h-full transition-all duration-500 ease-out rounded-full"
//               style={{ width: `${((activeTab + 1) / slabsData.length) * 100}%` }}
//             />
//           </div>
//           <div className="flex justify-between items-center text-sm">
//             <span className="text-gray-400">
//               Slide {activeTab + 1} of {slabsData.length}
//             </span>
//             <span className="text-green-400 font-medium">
//               {slabsData[activeTab].title}
//             </span>
//           </div>
//         </div>

//         {/* Keyboard Shortcuts Info */}
//         <div className="text-center mt-6 text-sm text-gray-500">
//           Use ← → arrow keys or swipe to navigate • Spacebar to toggle auto-play
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
        
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         @keyframes fadeInDown {
//           from {
//             opacity: 0;
//             transform: translateY(-30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         @keyframes float {
//           0%, 100% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-10px);
//           }
//         }
        
//         .animate-fadeInUp {
//           animation: fadeInUp 0.6s ease-out forwards;
//         }
        
//         .animate-fadeInDown {
//           animation: fadeInDown 0.6s ease-out forwards;
//         }
        
//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }
//       `}</style>
//     </div>
//    </>
//   );
// };

// export default SlabTabs;


// import React, { useState, useEffect } from "react";
// import { Play, Pause } from 'lucide-react';

// const slabsData = [
//   {
//     id: 1,
//     title: "1st ICO Slab",
//     status: "Live",
//     statusColor: "bg-green-500",
//     type: "active",
//     prices: { usd: 0.00024, inr: 0.02 },
//     soldPercentage: 20.50,
//     totalCoins: "50000000000",
//     description: "Invest in Jaimax 1st ICO slab for your financial future."
//   },
//   {
//     id: 2,
//     title: "2nd ICO Slab",
//     status: "Upcoming",
//     statusColor: "bg-yellow-500",
//     type: "upcoming",
//     prices: { usd: 0.00059, inr: 0.05 },
//     totalCoins: "20000000000"
//   },
//   {
//     id: 3,
//     title: "3rd ICO Slab",
//     status: "Upcoming",
//     statusColor: "bg-yellow-500",
//     type: "upcoming",
//     prices: { usd: 0.00710, inr: 0.60000 },
//     totalCoins: "25000000000"
//   },
//   {
//     id: 4,
//     title: "4th ICO Slab",
//     status: "Upcoming",
//     statusColor: "bg-yellow-500",
//     type: "upcoming",
//     prices: { usd: 0.01893, inr: 1.60000 },
//     totalCoins: "30000000000"
//   },
//   {
//     id: 5,
//     title: "5th ICO Slab",
//     status: "Upcoming",
//     statusColor: "bg-yellow-500",
//     type: "upcoming",
//     prices: { usd: 0.00189, inr: 0.159 },
//     totalCoins: "23000000000"
//   }
// ];

// const ActiveSlabContent = ({ slab }) => {
//   const [paymentMethod, setPaymentMethod] = useState('INR');
//   const [amount, setAmount] = useState('');

//   return (
//     <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 text-white max-w-md mx-auto shadow-2xl border border-slate-700 transform transition-all duration-700 animate-slideIn">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-6 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
//         <h3 className="text-white font-bold text-xl">{slab.title}</h3>
//         <span className={`${slab.statusColor} text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-2 transform transition-all duration-300 hover:scale-105`}>
//           <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
//           {slab.status}
//         </span>
//       </div>

//       {/* Payment Method Selection */}
//       <div className="mb-6 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
//         <label className="block text-sm font-medium text-gray-300 mb-3">Pay with</label>
//         <div className="flex gap-6">
//           <label className="flex items-center gap-2 cursor-pointer group">
//             <div className="relative">
//               <input 
//                 type="radio" 
//                 name="paymentMethod" 
//                 value="INR"
//                 checked={paymentMethod === 'INR'}
//                 onChange={(e) => setPaymentMethod(e.target.value)}
//                 className="sr-only"
//               />
//               <div className={`w-4 h-4 rounded-full border-2 transition-all duration-300 group-hover:scale-110 ${
//                 paymentMethod === 'INR' 
//                   ? 'border-green-400 bg-green-400 shadow-lg shadow-green-400/50' 
//                   : 'border-gray-400 group-hover:border-green-300'
//               } flex items-center justify-center`}>
//                 {paymentMethod === 'INR' && (
//                   <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
//                 )}
//               </div>
//             </div>
//             <span className={`font-medium transition-colors duration-300 ${
//               paymentMethod === 'INR' ? 'text-white' : 'text-gray-400 group-hover:text-white'
//             }`}>INR</span>
//           </label>
//           <label className="flex items-center gap-2 cursor-pointer group">
//             <div className="relative">
//               <input 
//                 type="radio" 
//                 name="paymentMethod" 
//                 value="USD"
//                 checked={paymentMethod === 'USD'}
//                 onChange={(e) => setPaymentMethod(e.target.value)}
//                 className="sr-only"
//               />
//               <div className={`w-4 h-4 rounded-full border-2 transition-all duration-300 group-hover:scale-110 ${
//                 paymentMethod === 'USD' 
//                   ? 'border-green-400 bg-green-400 shadow-lg shadow-green-400/50' 
//                   : 'border-gray-400 group-hover:border-green-300'
//               } flex items-center justify-center`}>
//                 {paymentMethod === 'USD' && (
//                   <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
//                 )}
//               </div>
//             </div>
//             <span className={`font-medium transition-colors duration-300 ${
//               paymentMethod === 'USD' ? 'text-white' : 'text-gray-400 group-hover:text-white'
//             }`}>USD</span>
//           </label>
//         </div>
//       </div>

//       {/* Amount Input */}
//       <div className="mb-6 space-y-4 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
//         <input
//           type="text"
//           placeholder="Enter Amount"
//           value={amount}
//           onChange={(e) => setAmount(e.target.value)}
//           className="w-full bg-slate-700 border border-slate-600 rounded-xl py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all duration-300 transform focus:scale-105"
//         />

//         <button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-green-500/25 transform hover:scale-105 active:scale-95">
//           Proceed to pay
//         </button>
//       </div>

//       {/* Price Changes */}
//       <div className="flex justify-between mb-6 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
//         <span className="text-green-400 font-medium flex items-center gap-1 transform transition-all duration-300 hover:scale-105">
//           <span className="text-green-400 animate-bounce">↗</span>
//           {slab.prices.inr.toFixed(5)} INR
//         </span>
//         <span className="text-green-400 font-medium flex items-center gap-1 transform transition-all duration-300 hover:scale-105">
//           <span className="text-green-400 animate-bounce" style={{ animationDelay: '0.5s' }}>↗</span>
//           {slab.prices.usd.toFixed(5)} USD
//         </span>
//       </div>

//       {/* Progress Section */}
//       <div className="mb-6 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
//         <p className="text-gray-400 text-sm mb-3">Sold Tokens {slab.soldPercentage}%</p>
//         <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
//           <div
//             className="bg-gradient-to-r from-green-400 to-green-500 h-full rounded-full transition-all duration-1000 ease-out animate-pulse"
//             style={{ 
//               width: `${slab.soldPercentage}%`,
//               boxShadow: '0 0 10px rgba(34, 197, 94, 0.5)'
//             }}
//           ></div>
//         </div>
//       </div>

//       {/* Description */}
//       <div className="text-center animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
//         <p className="text-gray-300 text-sm leading-relaxed">
//           {slab.description}
//         </p>
//       </div>
//     </div>
//   );
// };

// const UpcomingSlabContent = ({ slab }) => (
//   <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 text-white max-w-md mx-auto shadow-2xl border border-slate-700 transform transition-all duration-700 animate-slideIn">
//     {/* Header */}
//     <div className="flex justify-between items-center mb-8 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
//       <h3 className="text-white font-bold text-xl">{slab.title}</h3>
//       <span className={`${slab.statusColor} text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-2 transform transition-all duration-300 hover:scale-105`}>
//         <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
//         {slab.status}
//       </span>
//     </div>

//     {/* Coin Image */}
//     <div className="flex justify-center mb-8 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
//       <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg transform transition-all duration-500 hover:scale-110 hover:rotate-12 animate-float">
//         <span className="text-white font-bold text-2xl">J</span>
//       </div>
//     </div>

//     {/* Price Information */}
//     <div className="grid grid-cols-2 gap-4 mb-8 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
//       <div className="bg-slate-700 rounded-lg p-4 border border-slate-600 text-center transform transition-all duration-300 hover:scale-105 hover:bg-slate-600">
//         <p className="text-sm font-semibold text-gray-300 mb-1">USD</p>
//         <p className="text-lg font-bold text-white">{slab.prices.usd.toFixed(5)}</p>
//       </div>
//       <div className="bg-slate-700 rounded-lg p-4 border border-slate-600 text-center transform transition-all duration-300 hover:scale-105 hover:bg-slate-600">
//         <p className="font-bold text-gray-300 text-sm mb-1">INR</p>
//         <p className="text-lg font-semibold text-white">{slab.prices.inr.toFixed(5)}</p>
//       </div>
//     </div>

//     {/* Total Coins */}
//     <div className="bg-gradient-to-r from-slate-700 to-slate-800 rounded-lg p-6 border border-slate-600 text-center animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
//       <p className="text-sm font-medium text-gray-300 mb-2">
//         Total Coins Ready for Release
//       </p>
//       <p className="text-2xl font-bold text-green-400 animate-pulse">
//         {parseInt(slab.totalCoins).toLocaleString()}
//       </p>
//     </div>
//   </div>
// );

// const SlabTabs = () => {
//   const [activeTab, setActiveTab] = useState(0);
//   const [isAutoPlay, setIsAutoPlay] = useState(false);

//   // Auto-play functionality
//   useEffect(() => {
//     let interval;
//     if (isAutoPlay) {
//       interval = setInterval(() => {
//         setActiveTab(prev => (prev + 1) % slabsData.length);
//       }, 4000);
//     }
//     return () => clearInterval(interval);
//   }, [isAutoPlay]);

//   // Handle tab click
//   const handleTabClick = (index) => {
//     setActiveTab(index);
//     setIsAutoPlay(false); // Stop auto-play when user manually selects
//   };

//   // Get current slab
//   const currentSlab = slabsData[activeTab];

//   return (
//     <div className="min-h-screen bg-[#1d8e85]">
//       <div className="container mx-auto px-4 py-8 w-full">
//         {/* Top Navigation Tabs */}
//         <div className="flex justify-center mb-8 animate-fadeInDown">
//           <div className="flex bg-slate-800 rounded-2xl p-2 border border-slate-700 shadow-lg">
//             {slabsData.map((slab, index) => (
//               <button
//                 key={slab.id}
//                 onClick={() => handleTabClick(index)}
//                 className={`px-6 py-3 text-sm rounded-xl font-medium transition-all duration-500 transform relative overflow-hidden ${
//                   activeTab === index
//                     ? "bg-slate-700 text-white shadow-lg scale-105"
//                     : "text-gray-400 hover:text-white hover:bg-slate-700/50 hover:scale-105"
//                 }`}
//               >
//                 {activeTab === index && (
//                   <div className="absolute inset-0  rounded-xl animate-pulse"></div>
//                 )}
//                 <span className="relative z-10">
//                   {slab.id === 1 ? "1st" : slab.id === 2 ? "2nd" : slab.id === 3 ? "3rd" : `${slab.id}th`} Slab
//                 </span>
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Single Card Display */}
//         <div className="flex justify-center mb-8">
//           <div key={currentSlab.id} className="w-full max-w-md">
//             {currentSlab.type === "active" ? (
//               <ActiveSlabContent slab={currentSlab} />
//             ) : (
//               <UpcomingSlabContent slab={currentSlab} />
//             )}
//           </div>
//         </div>

//         {/* Auto-play Control */}
//         {/* <div className="flex justify-center mb-6">
//           <button
//             onClick={() => setIsAutoPlay(!isAutoPlay)}
//             className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors duration-200 border border-slate-600"
//           >
//             {isAutoPlay ? <Pause size={16} /> : <Play size={16} />}
//             <span className="text-sm font-medium">
//               {isAutoPlay ? 'Pause' : 'Auto Play'}
//             </span>
//           </button>
//         </div> */}

//         {/* Enhanced Pagination Dots */}
//         <div className="flex justify-center items-center gap-3 mb-6">
//           {slabsData.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => handleTabClick(index)}
//               className={`h-2 rounded-full transition-all duration-300 hover:scale-110 ${
//                 activeTab === index
//                   ? "bg-green-400 w-8 shadow-md shadow-green-400/50"
//                   : "bg-slate-600 w-2 hover:bg-slate-500"
//               }`}
//             />
//           ))}
//         </div>

//         {/* Progress Indicator */}
//         <div className="max-w-md mx-auto">
//           <div className="bg-slate-700 rounded-full h-1 overflow-hidden">
//             <div 
//               className="bg-green-400 h-full transition-all duration-500 ease-out"
//               style={{ width: `${((activeTab + 1) / slabsData.length) * 100}%` }}
//             />
//           </div>
//           <div className="text-center mt-2 text-sm text-gray-500">
//             {activeTab + 1} / {slabsData.length}
//           </div>
//         </div>

//         {/* Keyboard Shortcuts Info */}
//         <div className="text-center mt-6 text-sm text-gray-500">
//           Use ← → arrow keys to navigate • Spacebar to toggle auto-play
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         @keyframes fadeInDown {
//           from {
//             opacity: 0;
//             transform: translateY(-30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         @keyframes slideIn {
//           from {
//             opacity: 0;
//             transform: translateX(30px) scale(0.95);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0) scale(1);
//           }
//         }
        
//         @keyframes float {
//           0%, 100% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-10px);
//           }
//         }
        
//         .animate-fadeInUp {
//           animation: fadeInUp 0.6s ease-out forwards;
//         }
        
//         .animate-fadeInDown {
//           animation: fadeInDown 0.6s ease-out forwards;
//         }
        
//         .animate-slideIn {
//           animation: slideIn 0.7s ease-out forwards;
//         }
        
//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default SlabTabs;