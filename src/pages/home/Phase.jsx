// "use client";
// import React, { useRef } from 'react'; // Import useRef
// import logoLeft from '../../assets/images/logowithleft.svg';
// import { motion } from 'framer-motion';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import { Navigation, Pagination, A11y } from 'swiper/modules';
// import { ArrowLeft, ArrowRight } from 'lucide-react';


// function PhaseCarousel() {
//   const bounceUpVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//   };

//   const navigationPrevRef = useRef(null); 
//   const navigationNextRef = useRef(null);

//   const phaseData = [
//     {
//       status: "Live",
//       phaseNo: "Phase 1",
//       tokens: "10 Billion Tokens",
//       price: "Price INR 0.01 - 0.04 Paisa (0.00012-0.00046 USD)",
//       button: "Buy Now",
//     },
//     {
//       status: "Upcoming",
//       phaseNo: "Phase 2",
//       tokens: "20 Billion Tokens",
//       price: "Price INR 0.05 - 0.50 Paisa (0.00061 - 0.0061 USD)",
//       button: "Coming Soon",
//     },
//     {
//       status: "Upcoming",
//       phaseNo: "Phase 3",
//       tokens: "25 Billion Tokens",
//       price: "Price INR 0.60 - 1.53 - Paisa (0.0071 - 0.018 USD)",
//       button: "Coming Soon",
//     },
//     {
//       status: "Upcoming",
//       phaseNo: "Phase 4",
//       tokens: "30 Billion Tokens",
//       price: "Price INR 1.60 - 3.00 Paisa (0.091 - 0.036 USD)",
//       button: "Coming Soon",
//     },
//     {
//       status: "Upcoming",
//       phaseNo: "Phase 5",
//       tokens: "25 Billion Tokens",
//       price: "Price INR 3.15 - 4.10 Paisa (0.037 - 0.049 USD)",
//       button: "Coming Soon",
//     },
//   ];

//   return (
//     <div
//       className="py-10"
//       style={{ 
//           background: 'linear-gradient(135deg, rgba(8,83,89,0.95) 0%, rgba(8,83,89,0.9) 100%)',
//           WebkitBackdropFilter: 'blur(16px)' 
//       }}
//     >

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           variants={bounceUpVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: false, amount: 0.2 }}
//         >
//           <Swiper
//             modules={[Navigation, Pagination, A11y]}
//             spaceBetween={20}
//             slidesPerView={1}
//             centeredSlides={true}
//             initialSlide={phaseData.findIndex(item => item.status === "Live")}
//             navigation={{
//               prevEl: navigationPrevRef.current, // Use the ref
//               nextEl: navigationNextRef.current, // Use the ref
//             }}
//             pagination={{ clickable: true }}
//             grabCursor={true}
//             loop={true}
//             onBeforeInit={(swiper) => {
//               swiper.params.navigation.prevEl = navigationPrevRef.current;
//               swiper.params.navigation.nextEl = navigationNextRef.current;
//             }}
//             breakpoints={{
//               640: {
//                 slidesPerView: 1,
//               },
//               768: {
//                 slidesPerView: 2,
//               },
//               1024: {
//                 slidesPerView: 3,
//               },
//               1440: {
//                 slidesPerView: 3,
//               },
//             }}
//             className="!pb-10"
//           >
//             {phaseData?.map((item, index) => (
//               <SwiperSlide key={index}>
//                 <div
//                   className={`relative rounded-xl py-6 px-4 shadow-md  bg-[#145b56] ${index >= 1 ? 'opacity-70 blur-sm' : ''
//                     }`}
//                 >
//                   {item.status === "Live" && (
//                     <div className="absolute top-2 left-2 bg-[#C5D82E] text-[#021516] text-xs font-bold py-1 px-2 rounded-md">
//                       {item.status}
//                     </div>
//                   )}
//                   <div className="flex items-center justify-between mb-4">
//                     <div className="flex flex-col">
//                       <h5 className="font-extrabold text-xl text-gray-100 mb-1">{item.phaseNo}</h5>
//                       <p className="text-sm text-gray-300">{item.tokens}</p>
//                     </div>
//                     <div className="relative w-20 h-auto">
//                       <img
//                         className="img-fluid"
//                         src={logoLeft}
//                         alt="Phase Logo"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <p className="font-semibold text-white text-sm mb-6 ">{item.price}</p>
//                     <button
//                       className={`w-full rounded-full py-2 font-semibold text-sm ${item.status === "Live"
//                         ? 'bg-[#C5D82E] text-[#021516]'
//                         : 'bg-gray-400 text-gray-100 cursor-not-allowed'
//                         }`}
//                       disabled={item.status !== "Live"}
//                     >
//                       {item.button}
//                     </button>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//                        <div
//               ref={navigationPrevRef}
//               className=" cursor-pointer absolute top-1/2 -translate-y-1/2 left-2 z-10 focus:outline-none  bg-[#C5D82E] text-[#021516] rounded-full p-2"
//             >
//               <ArrowLeft size={24} />
//             </div>
//             <div
//               ref={navigationNextRef}
//               className="  cursor-pointer absolute top-1/2 -translate-y-1/2 right-2 z-10 focus:outline-none  bg-[#C5D82E] text-[#021516] rounded-full p-2"
//             >
//               <ArrowRight size={24} />
//             </div>


//           </Swiper>
//         </motion.div>
//       </div>
//       <style jsx>{`
//         .swiper-button-prev,
//         .swiper-button-next {
//           color: white; /* Adjust the color */
//           background-color: rgba(0, 0, 0, 0.3); /* Add a background */
//           padding: 10px;
//           border-radius: 50%; /* Make them circular */
//           width: 30px; /* Adjust the width */
//           height: 30px; /* Adjust the height */
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         .swiper-button-prev::after,
//         .swiper-button-next::after {
//           font-size: 16px; /* Adjust the arrow size */
//           font-weight: bold;
//         }
//       `}</style>
//     </div>
//   );
// }

// export default PhaseCarousel;


// 1B4242 4FBDBA CDEED6
"use client";
import React, { useRef, useEffect } from "react";
import logoLeft from "../../assets/images/logowithleft.svg";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";

function PhaseCarousel() {
  const bounceUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const swiperRef = useRef(null);

  const phaseData = [
    {
      status: "Live",
      phaseNo: "Phase 1",
      tokens: "10 Billion Tokens",
      price: "Price INR 0.01 - 0.04 Paisa (0.00012-0.00046 USD)",
      button: "Buy Now",
    },
    {
      status: "Upcoming",
      phaseNo: "Phase 2",
      tokens: "20 Billion Tokens",
      price: "Price INR 0.05 - 0.50 Paisa (0.00061 - 0.0061 USD)",
      button: "Coming Soon",
    },
    {
      status: "Upcoming",
      phaseNo: "Phase 3",
      tokens: "25 Billion Tokens",
      price: "Price INR 0.60 - 1.53 Paisa (0.0071 - 0.018 USD)",
      button: "Coming Soon",
    },
    {
      status: "Upcoming",
      phaseNo: "Phase 4",
      tokens: "30 Billion Tokens",
      price: "Price INR 1.60 - 3.00 Paisa (0.091 - 0.036 USD)",
      button: "Coming Soon",
    },
    {
      status: "Upcoming",
      phaseNo: "Phase 5",
      tokens: "25 Billion Tokens",
      price: "Price INR 3.15 - 4.10 Paisa (0.037 - 0.049 USD)",
      button: "Coming Soon",
    },
  ];

  useEffect(() => {
    const handleWheel = (e) => {
      if (!swiperRef.current) return;
      if (e.deltaY > 0) {
        swiperRef.current.swiper.slideNext();
      } else if (e.deltaY < 0) {
        swiperRef.current.swiper.slidePrev();
      }
    };
    const el = swiperRef.current?.el;
    if (el) el.addEventListener("wheel", handleWheel);
    return () => {
      if (el) el.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div
      className="py-10"
      style={{
        // background:
        //   "linear-gradient(135deg, rgba(8,83,89,0.95) 0%, rgba(8,83,89,0.9) 100%)",
        WebkitBackdropFilter: "blur(16px)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          variants={bounceUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={10}
            slidesPerView={1}
            centeredSlides={true}
            initialSlide={phaseData.findIndex((item) => item.status === "Live")}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            pagination={{ clickable: true }}
            grabCursor={true}
            loop={true}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1440: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            className="!pb-10"
          >
            {phaseData?.map((item, index) => (
              <SwiperSlide key={index} ref={swiperRef}>
                <div
                  className={`relative rounded-xl py-6 px-4 shadow-md bg-[#145b56] ${
                    index >= 1 ? "opacity-70 blur-sm" : ""
                  }`}
                >
                  {item.status === "Live" && (
                    <div className="absolute top-2 left-2 bg-[#C5D82E] text-[#021516] text-xs font-bold py-1 px-2 rounded-md">
                      {item.status}
                    </div>
                  )}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex flex-col">
                      <h5 className="font-extrabold text-xl text-gray-100 mb-1">
                        {item.phaseNo}
                      </h5>
                      <p className="text-sm text-gray-300">{item.tokens}</p>
                    </div>
                    <div className="relative w-20 h-auto">
                      <img
                        className="img-fluid"
                        src={logoLeft}
                        alt="Phase Logo"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm mb-6">
                      {item.price}
                    </p>
                    <button
                      className={`w-full rounded-full py-2 font-semibold text-sm ${
                        item.status === "Live"
                          ? "bg-[#C5D82E] text-[#021516]"
                          : "bg-gray-400 text-gray-100 cursor-not-allowed"
                      }`}
                      disabled={item.status !== "Live"}
                    >
                      {item.button}
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            {/* Custom Navigation Buttons - hidden on mobile (sm:hidden) */}
            <div
              ref={navigationPrevRef}
              className="cursor-pointer absolute top-1/2 -translate-y-1/2 left-2 z-10 focus:outline-none bg-[#C5D82E] text-[#021516] rounded-full p-2 sm:w-10 sm:h-10 w-8 h-8 flex items-center justify-center hidden sm:flex"
            >
              <ArrowLeft size={20} className="sm:w-6 sm:h-6 w-5 h-5" />
            </div>
            <div
              ref={navigationNextRef}
              className="cursor-pointer absolute top-1/2 -translate-y-1/2 right-2 z-10 focus:outline-none bg-[#C5D82E] text-[#021516] rounded-full p-2 sm:w-10 sm:h-10 w-8 h-8 flex items-center justify-center hidden sm:flex"
            >
              <ArrowRight size={20} className="sm:w-6 sm:h-6 w-5 h-5" />
            </div>
          </Swiper>
        </motion.div>
      </div>
      <style jsx>{`
        @media (max-width: 640px) {
          .swiper-button-prev,
          .swiper-button-next {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}

export default PhaseCarousel;

