import React, { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';


const slabsData = [
  {
    id: 1,
    title: "1st ICO Slab",
    status: "Live",
    statusColor: "bg-emerald-500",
    type: "active",
    prices: { usd: 0.00024, inr: 0.02 },
    soldPercentage: 20.41,
    totalCoins: "50000000000",
    description: "Invest in Jaimax 1st ICO slab for your financial future."
  },
  {
    id: 2,
    title: "2nd ICO Slab",
    status: "Upcoming",
    statusColor: "bg-lime-400",
    type: "upcoming",
    prices: { usd: 0.00059, inr: 0.05 },
    totalCoins: "20000000000"
  },
  {
    id: 3,
    title: "3rd ICO Slab",
    status: "Upcoming",
    statusColor: "bg-lime-400",
    type: "upcoming",
    prices: { usd: 0.00710, inr: 0.60000 },
    totalCoins: "25000000000"
  },
  {
    id: 4,
    title: "4th ICO Slab",
    status: "Upcoming",
    statusColor: "bg-lime-400",
    type: "upcoming",
    prices: { usd: 0.01893, inr: 1.60000 },
    totalCoins: "30000000000"
  },
  {
    id: 5,
    title: "5th ICO Slab",
    status: "Upcoming",
    statusColor: "bg-lime-400",
    type: "upcoming",
    prices: { usd: 0.00189, inr: 0.159 },
    totalCoins: "23000000000"
  }
];

const ActiveSlabContent = ({ slab }) => {
  const [paymentMethod, setPaymentMethod] = useState('INR');
  const [amount, setAmount] = useState('');

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
       <h3 className="text-gray-800 font-semibold text-lg">{slab.title}</h3>
        <span className={`${slab.statusColor} text-white text-xs px-4 py-2 rounded-full flex items-center gap-2 w-fit`}>
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          {slab.status}
        </span>
      </div>

      {/* Payment Method Selection */}
      <div className="space-y-3">
        <label className="block text-sm font-medium text-gray-700">Pay with</label>
        <div className="flex gap-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input 
              type="radio" 
              name="paymentMethod" 
              value="INR"
              checked={paymentMethod === 'INR'}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="text-emerald-600 focus:ring-emerald-500"
            />
            <span className="text-gray-700 font-medium">INR</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input 
              type="radio" 
              name="paymentMethod" 
              value="USD"
              checked={paymentMethod === 'USD'}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="text-emerald-600 focus:ring-emerald-500"
            />
            <span className="text-gray-700 font-medium">USD</span>
          </label>
        </div>
      </div>

      {/* Amount Input */}
      <div className="w-full flex justify-center">
  <div className="w-full max-w-sm space-y-3">
    <input
      type="number"
      placeholder={`Enter Amount in ${paymentMethod}`}
      value={amount}
      onChange={(e) => setAmount(e.target.value)}
      className="w-full rounded-lg py-2 px-3 text-sm border border-black/20 focus:border-2 focus:border-[#20934a]"
    />

    <button className="w-full bg-[#20934a] hover:bg-[#2cc765] text-white py-2 text-sm px-4 rounded-md font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02]">
      Proceed to Pay
    </button>
  </div>
</div>

      {/* Price Changes */}
      <div className="flex justify-between text-sm">
        <span className="text-emerald-600 font-medium flex items-center gap-1">
          <span className="text-emerald-500">↗</span>
          {slab.prices.inr.toFixed(5)} INR
        </span>
        <span className="text-emerald-600 font-medium flex items-center gap-1">
          <span className="text-emerald-500">↗</span>
          {slab.prices.usd.toFixed(5)} USD
        </span>
      </div>

      {/* Progress Section */}
      <div className="space-y-3">
        <p className="text-sm text-gray-600">Sold Tokens: {slab.soldPercentage}%</p>
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <div
            className="bg-gradient-to-r from-emerald-400 to-emerald-500 h-full rounded-full transition-all duration-500 ease-out"
            style={{ width: `${slab.soldPercentage}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-xs text-gray-500">
          <span>0%</span>
          <span>100%</span>
        </div>
      </div>

      {/* Description */}
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-4 border border-emerald-100">
        <p className="text-sm text-gray-700 text-center leading-relaxed">
          {slab.description}
        </p>
      </div>
    </div>
  );
};

const UpcomingSlabContent = ({ slab }) => (
  <div className="space-y-6 text-center">
    {/* Header */}
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
      <h3 className="text-gray-800 font-bold text-xl">{slab.title}</h3>
      <span className={`${slab.statusColor} text-white text-xs px-4 py-2 rounded-full flex items-center gap-2 w-fit mx-auto sm:mx-0`}>
        <div className="w-2 h-2 bg-white rounded-full"></div>
        {slab.status}
      </span>
    </div>

    {/* Coin Image */}
    <div className="flex justify-center">
      <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
        <span className="text-white font-bold text-2xl">J</span>
      </div>
    </div>

    {/* Price Information */}
    <div className="grid grid-cols-2 gap-6 max-w-xs mx-auto">
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 border border-gray-200">
        <p className="text-sm font-semibold text-gray-700 mb-1">USD</p>
        <p className="text-lg font-bold">{slab.prices.usd.toFixed(5)}</p>
      </div>
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 border border-gray-200">
        <p className="font-bold text-gray-700 text-sm mb-1">INR</p>
        <p className="text-lg font-semibold text-gray-800">{slab.prices.inr.toFixed(5)}</p>
      </div>
    </div>

    {/* Total Coins */}
    <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-6 border border-emerald-100">
      <p className="text-sm font-medium text-gray-700 mb-2">
        Total Coins Ready for Release
      </p>
      <p className="text-2xl font-bold text-emerald-600">
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

  // Enhanced scroll to tab with smooth animation
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

  // Auto-play functionality
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

  // Enhanced scroll handler
  const handleScroll = useCallback(() => {
    const container = scrollRef.current;
    if (container && !isDragging) {
      const index = Math.round(container.scrollLeft / container.clientWidth);
      if (index !== activeTab) {
        setActiveTab(index);
      }
    }
  }, [activeTab, isDragging]);

  // Touch/mouse drag handlers
  const handleDragStart = (e) => {
    setIsDragging(true);
    setDragStart(e.type === 'mousedown' ? e.clientX : e.touches[0].clientX);
    setIsAutoPlay(false); // Pause auto-play when user interacts
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    const currentX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
    setDragOffset(currentX - dragStart);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const threshold = 50; // Minimum drag distance to trigger swipe
    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0 && activeTab > 0) {
        scrollToTab(activeTab - 1);
      } else if (dragOffset < 0 && activeTab < slabsData.length - 1) {
        scrollToTab(activeTab + 1);
      }
    }
    setDragOffset(0);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft' && activeTab > 0) {
        scrollToTab(activeTab - 1);
      } else if (e.key === 'ArrowRight' && activeTab < slabsData.length - 1) {
        scrollToTab(activeTab + 1);
      } else if (e.key === ' ') {
        e.preventDefault();
        setIsAutoPlay(!isAutoPlay);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeTab, isAutoPlay, scrollToTab]);

  return (
    <div className="min-h-screen rounded-xl bg-white">
      <div className="container mx-auto px-4 py-8 w-full">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-[#084e54] mb-2">
            ICO Investment Slabs
          </h1>
          <p className="text-gray-600 text-lg">
            Choose your preferred investment slab
          </p>
        </div>

        {/* Top Navigation with Auto-play Control */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className="flex items-center gap-2 px-3 py-2 bg-emerald-100 hover:bg-emerald-200 text-emerald-700 rounded-lg transition-colors duration-200"
            >
              {isAutoPlay ? <Pause size={16} /> : <Play size={16} />}
              <span className="text-sm font-medium">
                {isAutoPlay ? 'Pause' : 'Auto Play'}
              </span>
            </button>
          </div>

          {/* Slab Navigation Buttons */}
          <div className="flex flex-wrap justify-center gap-2">
            {slabsData.map((slab, index) => (
              <button
                key={slab.id}
                onClick={() => scrollToTab(index)}
                className={`px-4 py-2 text-sm rounded-lg font-semibold transition-all duration-300 transform ${
                  activeTab === index
                    ? "bg-emerald-500 text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 hover:bg-emerald-50 shadow-md border border-gray-200 hover:border-emerald-200"
                }`}
              >
                {slab.id}
                {slab.id === 1 ? "st" : slab.id === 2 ? "nd" : slab.id === 3 ? "rd" : "th"} Slab
              </button>
            ))}
          </div>

          <div className="text-sm text-gray-500 font-medium">
            {activeTab + 1} / {slabsData.length}
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          {/* Left Arrow */}
          {activeTab > 0 && (
            <button
              onClick={() => scrollToTab(activeTab - 1)}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200 opacity-0 group-hover:opacity-100 hover:scale-110"
            >
              <ChevronLeft size={24} className="text-emerald-600" />
            </button>
          )}

          {/* Swipeable Cards */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchMove={handleDragMove}
            onTouchEnd={handleDragEnd}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-6 pb-6 no-scrollbar w-full cursor-grab active:cursor-grabbing"
            style={{ 
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              transform: isDragging ? `translateX(${dragOffset * 0.1}px)` : 'none',
              transition: isDragging ? 'none' : 'transform 0.3s ease'
            }}
          >
            {slabsData.map((slab) => (
              <div key={slab.id} className="w-full snap-center px-2 md:px-4 flex-shrink-0">
                <div className="p-2">
                  {slab.type === "active" ? (
                    <ActiveSlabContent slab={slab} />
                  ) : (
                    <UpcomingSlabContent slab={slab} />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          {activeTab < slabsData.length - 1 && (
            <button
              onClick={() => scrollToTab(activeTab + 1)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200 opacity-0 group-hover:opacity-100 hover:scale-110"
            >
              <ChevronRight size={24} className="text-emerald-600" />
            </button>
          )}
        </div>

        {/* Enhanced Pagination Dots */}
        <div className="flex justify-center items-center gap-3 mt-6">
          {slabsData.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToTab(index)}
              className={`h-3 rounded-full transition-all duration-300 hover:scale-110 ${
                activeTab === index
                  ? "bg-emerald-500 w-8 shadow-md"
                  : "bg-gray-300 w-3 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-4 bg-gray-200 rounded-full h-1 overflow-hidden">
          <div 
            className="bg-emerald-500 h-full transition-all duration-300 ease-out"
            style={{ width: `${((activeTab + 1) / slabsData.length) * 100}%` }}
          />
        </div>

        {/* Keyboard Shortcuts Info */}
        <div className="text-center mt-6 text-sm text-gray-500">
          Use ← → arrow keys to navigate • Spacebar to toggle auto-play
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