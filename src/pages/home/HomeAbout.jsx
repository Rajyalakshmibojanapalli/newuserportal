
import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import icon from '../../assets/Images/jaicoin.svg'
const jaimaxicon = 'https://etimg.etb2bimg.com/thumb/msid-99241573,imgsize-47730,width-1200,height=765,overlay-etciosea/news/security/cryptocurrency-phishing-grows-by-40-in-one-year-kaspersky-report.jpg'
const CopyToClipboardButton = ({ textToCopy, className }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.button
      onClick={handleCopy}
      className={className}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <AnimatePresence mode="wait">
        {copied ? (
          <motion.span
            key="copied"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="flex items-center gap-2"
          >
            ✓ Copied
          </motion.span>
        ) : (
          <motion.span
            key="copy"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="flex items-center gap-2"
          >
            📋 Copy
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

// Professional floating elements
const FloatingElements = () => {
  const elements = Array.from({ length: 8 }, (_, i) => i);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none ">
      {elements.map((element) => (
        <motion.div
          key={element}
          className="absolute w-1 h-1 bg-white/30 rounded-full"
          animate={{
            x: [Math.random() * 100, Math.random() * 100 + 50],
            y: [Math.random() * 100, Math.random() * 100 + 50],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: Math.random() * 15 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            left: Math.random() * 100 + "%",
            top: Math.random() * 100 + "%",
          }}
        />
      ))}
    </div>
  );
};

// Professional metric card component
// const MetricCard = ({ title, value, subtitle, icon, delay = 0 }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.3 }}
//       transition={{ duration: 0.6, delay, ease: "easeOut" }}
//       onHoverStart={() => setIsHovered(true)}
//       onHoverEnd={() => setIsHovered(false)}
//       className="group"
//     >
//       <motion.div
//         whileHover={{ y: -8, scale: 1.02 }}
//         transition={{ type: "spring", stiffness: 300, damping: 25 }}
//         className="relative bg-[#bace27] backdrop-blur-sm rounded-2xl p-8 w-full sm:w-80 shadow-lg border border-gray-100 overflow-hidden"
//       >
//         {/* Subtle hover gradient */}
//         <motion.div
//           className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-yellow-50/50 opacity-0 group-hover:opacity-100"
//           transition={{ duration: 0.3 }}
//         />

//         <div className="relative z-10">
//           <div className="flex items-center justify-between mb-4">
//             <motion.div
//               animate={{ rotate: isHovered ? 10 : 0 }}
//               transition={{ duration: 0.3 }}
//               className="text-2xl"
//             >
//               {icon}
//             </motion.div>
//             <motion.div
//               className="w-2 h-2 bg-green-500 rounded-full"
//               animate={{
//                 scale: [1, 1.2, 1],
//                 opacity: [0.7, 1, 0.7],
//               }}
//               transition={{ duration: 2, repeat: Infinity }}
//             />
//           </div>

//           <h3 className="text-gray-600 text-sm font-semibold uppercase tracking-wider mb-3">
//             {title}
//           </h3>

//           <div className="mb-2">
//             <motion.p
//               className="text-3xl font-bold text-gray-900"
//               animate={{ scale: isHovered ? 1.05 : 1 }}
//               transition={{ type: "spring", stiffness: 300 }}
//             >
//               {value}
//             </motion.p>
//           </div>

//           {subtitle && (
//             <p className="text-gray-500 text-sm">
//               {subtitle}
//             </p>
//           )}
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };


const gradients = [
  "#085359", // Teal blue (matches your dark brand background)
  "#93C572", // Olive green (already used by you)
  "#24E19C", // Bright mint green
  "#00D1B2", // Bright turquoise
];

// 2️⃣ MetricCard Component
const MetricCard = ({ title, value, subtitle, icon, delay = 0, index = 0 }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const bgGradient = gradients[index % gradients.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group"
    >
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="relative rounded-2xl p-8 w-full sm:w-80 shadow-lg border border-white/20 overflow-hidden"
        style={{
          background: bgGradient,
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          borderColor: "rgba(255, 255, 255, 0.15)",
        }}
      >
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <motion.div
              animate={{ rotate: isHovered ? 10 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-3xl text-white"
            >
              {icon}
            </motion.div>
            <motion.div
              className="w-2 h-2 bg-white rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
          <h3 className="text-[#BFFCF9] text-sm font-semibold uppercase tracking-wider mb-3">
            {title}
          </h3>
          <div className="mb-2">
            <motion.p
              className="text-3xl font-bold text-white"
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {value}
            </motion.p>
          </div>
          {subtitle && (
            <p className="text-[#AEE1E4] text-sm">{subtitle}</p>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

// Enhanced text reveal animation
const TextReveal = ({ children, className, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Coin animation component
const CoinDisplay = () => {
  return (
   <>
    <motion.div
      className="mb-12 flex justify-center"
      initial={{ scale: 0, rotate: -180 }}
      whileInView={{ scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, type: "spring", bounce: 0.3 }}
    >
      <motion.div
        className="relative"
        animate={{ rotateY: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-80 h-80 rounded-full bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 shadow-xl flex items-center justify-center text-3xl font-bold text-yellow-900 border-4 border-yellow-300">
          <img src={icon} style={{
            width : "300px"
          }} alt="" />
        </div>
        {/* Glow effect */}
        <div className="absolute inset-0 w-24 h-24 rounded-full bg-yellow-400/30 blur-xl -z-10"></div>
       
      </motion.div>
    </motion.div>
      <p className="mt-6 text-center text-xl md:text-2xl font-semibold text-yellow-300 max-w-lg">
        "Don’t just watch others build their future—own it. Buy Jaimax coin now and secure your tomorrow."
      </p>
   </>
  );
};

// export default function AboutSection({
//   contractAddress = "0x742d35Cc6648C25cbEC6900001Cfb3De3Fxxd4f",
//   liveRounds = [{ atPriceUsdt: "0.00012" }],
//   onClickNavigateToAboutUs = () => { }
// }) {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"]
//   });

//   const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
//   const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);

//   return (
//     <>
//       {/* ABOUT US SECTION */}
//       <motion.div
//         className="relative py-24 px-4 lg:px-24 overflow-hidden 	"
//         style={{ y, opacity  ,
//           backgroundColor :'#24E19C'
//         }}    
//       >
//         <FloatingElements />
//         <div className="relative z-10 text-center max-w-6xl mx-auto ">
//           <TextReveal>
//             <p className="text-green-600 font-semibold text-lg tracking-wide mb-4">
//               Your Gateway to Digital Wealth
//             </p>

//             <h1 className="text-6xl md:text-8xl font-black text-gray-900 tracking-tight mb-8">
//               <span className="bg-gradient-to-r from-green-600 via-gray-400 to-green-600 bg-clip-text text-transparent">
//                 J COIN
//               </span>
//             </h1>
//           </TextReveal>

//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.2 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             className="mt-16"
//           >
//             <CoinDisplay />

//             <TextReveal delay={0.4}>
//               <h2 className="text-gray-900 text-4xl md:text-5xl font-bold mb-8 tracking-wide">
//                 About Jaimax
//               </h2>
//             </TextReveal>

//             <motion.div
//               className="flex justify-center mb-12"
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.6 }}
//             >
//               <motion.div
//                 className="bg-white/70 backdrop-blur-sm rounded-3xl p-10 max-w-4xl border border-gray-200 shadow-lg"
//                 whileHover={{ scale: 1.01, y: -4 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               >
//                 <p className="text-gray-700 text-lg leading-relaxed">
//                   Jaimax, the most valuable crypto investment app, is dedicated to making crypto accessible in a simple way.
//                   Established in 2024, Jaimax has addressed numerous challenges faced by the crypto community, providing solutions
//                   for crypto investing, trading, and literacy...{" "}
//                   <motion.span
//                     onClick={onClickNavigateToAboutUs}
//                     className="cursor-pointer text-green-600 hover:text-green-700 font-semibold hover:underline transition-all duration-300 ml-2 inline-flex items-center"
//                     whileHover={{ x: 3 }}
//                   >
//                     READ MORE →
//                   </motion.span>
//                 </p>
//               </motion.div>
//             </motion.div>

//             {/* Contract Address Section */}
//             <motion.div
//               className="space-y-6"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.8 }}
//             >
//               <h3 className="text-gray-900 font-bold text-xl tracking-wide">
//                 Contract Address
//               </h3>

//               <div className="flex justify-center">
//                 <motion.div
//                   className="bg-gray-900 rounded-2xl p-6 flex items-center gap-4 max-w-full overflow-x-auto shadow-lg border border-gray-200"
//                   whileHover={{ scale: 1.01, y: -2 }}
//                 >
//                   <p className="text-sm md:text-base text-green-400 font-mono break-all font-medium">
//                     {contractAddress}
//                   </p>
//                   <CopyToClipboardButton
//                     textToCopy={contractAddress}
//                     className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-all duration-300 font-medium shadow-md"
//                   />
//                 </motion.div>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </motion.div>

//       {/* LIVE METRICS SECTION */}
//       <motion.div
//         className="py-24 px-4 lg:px-24  relative overflow-hidden"
//         style={{
//           backgroundImage: `url('${jaimaxicon}')`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//           backgroundAttachment: 'fixed',
//           backgroundBlendMode: 'multiply',
//           backgroundRepeat: 'no-repeat',
         

//         }}>


//           <div className="relative z-10 max-w-6xl mx-auto">
//             <motion.div
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 0.8 }}
//               className="text-center mb-16"
//             >
//               <motion.div
//                 className="mb-8 flex justify-center"
//                 animate={{ scale: [1, 1.05, 1] }}
//                 transition={{ duration: 3, repeat: Infinity }}
//               >
//                 <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-2xl shadow-lg">
//                   📊
//                 </div>
//               </motion.div>

//               <h2 className="text-[#b1c201] text-4xl md:text-5xl font-bold mb-6 tracking-wide">
//                 Live Metrics
//               </h2>

//               <motion.div
//                 className="bg-white border border-gray-200 rounded-2xl p-6 inline-block shadow-lg"
//                 whileHover={{ y: -2 }}
//               >
//                 <p className="text-lg text-gray-700">
//                   <span className="font-semibold text-gray-900">Total Supply:</span> 10 Billion Tokens
//                   <span className="mx-4 text-gray-400">•</span>
//                   <span className="font-semibold text-gray-900">Starting Price:</span> $0.00012
//                 </p>
//               </motion.div>
//             </motion.div>

//             {/* Professional Metric Cards */}
//             <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
//               <MetricCard
//                 title="Current Price"
//                 value="$0.00012"
//                 subtitle="USD per token"
//                 icon="💰"
//                 delay={0}
//               />

//               <MetricCard
//                 title="Tokens Sold"
//                 value="225.7M"
//                 subtitle="22.57% of total supply"
//                 icon="🚀"
//                 delay={0.1}
//               />

//               <MetricCard
//                 title="Community"
//                 value="24,567"
//                 subtitle="Active members"
//                 icon="👥"
//                 delay={0.2}
//               />
//             </div>

//             {/* Status indicator */}
//             <motion.div
//               className="flex justify-center mt-12"
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.5 }}
//             >
//               <div className="flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-md border border-gray-200">
//                 <motion.div
//                   className="w-3 h-3 bg-green-500 rounded-full"
//                   animate={{
//                     scale: [1, 1.2, 1],
//                     opacity: [1, 0.7, 1],
//                   }}
//                   transition={{ duration: 2, repeat: Infinity }}
//                 />
//                 <span className="font-medium text-gray-700 text-sm">Live Updates Active</span>
//               </div>
//             </motion.div>
//           </div>
//       </motion.div >
//     </>

// import { FaChartLine, FaUsers, FaDollarSign } from "react-icons/fa";
// export default function AboutSection({
//   contractAddress = "0x742d35Cc6648C25cbEC6900001Cfb3De3Fxxd4f",
//   liveRounds = [{ atPriceUsdt: "0.00012" }],
//   onClickNavigateToAboutUs = () => {}
// }) {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"]
//   });

//   const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
//   const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);

//   return (
//     <>
//       {/* ABOUT US SECTION */}
//       <motion.div
//         ref={containerRef}
//         className="relative py-24 px-4 lg:px-24 overflow-hidden"
//         style={{
//           y,
//           opacity,
//           background: "linear-gradient(135deg, #24E19C 0%, #0A5F57 100%)"
//         }}
//       >
//         <FloatingElements />
//         <div className="relative z-10 text-center max-w-6xl mx-auto">
//           <TextReveal>
//             <p className="text-green-100 font-semibold text-lg tracking-wide mb-4">
//               Your Gateway to Digital Wealth
//             </p>

//             <h1 className="text-6xl md:text-8xl font-black text-white tracking-tight mb-8">
//               <span className="bg-gradient-to-r from-green-200 via-white to-green-200 bg-clip-text text-transparent">
//                 J COIN
//               </span>
//             </h1>
//           </TextReveal>

//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.2 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             className="mt-16"
//           >
//             <CoinDisplay />

//             <TextReveal delay={0.4}>
//               <h2 className="text-white text-4xl md:text-5xl font-bold mb-8 tracking-wide">
//                 About Jaimax
//               </h2>
//             </TextReveal>

//             <motion.div
//               className="flex justify-center mb-12"
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.6 }}
//             >
//               <motion.div
//                 className="bg-white/80 backdrop-blur-md rounded-3xl p-10 max-w-4xl border border-gray-300 shadow-lg"
//                 whileHover={{ scale: 1.02, y: -4 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               >
//                 <p className="text-gray-800 text-lg leading-relaxed">
//                   Jaimax, the most valuable crypto investment app, is dedicated to making crypto accessible in a simple way.
//                   Established in 2024, Jaimax has addressed numerous challenges faced by the crypto community, providing solutions
//                   for crypto investing, trading, and literacy...
//                   <motion.span
//                     onClick={onClickNavigateToAboutUs}
//                     className="cursor-pointer text-green-600 hover:text-green-700 font-semibold hover:underline transition-all duration-300 ml-2 inline-flex items-center"
//                     whileHover={{ x: 3 }}
//                   >
//                     READ MORE →
//                   </motion.span>
//                 </p>
//               </motion.div>
//             </motion.div>

//             {/* Contract Address Section */}
//             <motion.div
//               className="space-y-6"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.8 }}
//             >
//               <h3 className="text-white font-bold text-xl tracking-wide">
//                 Contract Address
//               </h3>

//               <div className="flex justify-center">
//                 <motion.div
//                   className="bg-gray-800 rounded-2xl p-6 flex items-center gap-4 max-w-full overflow-x-auto shadow-lg border border-gray-600"
//                   whileHover={{ scale: 1.01, y: -2 }}
//                 >
//                   <p className="text-sm md:text-base text-green-400 font-mono break-all font-medium">
//                     {contractAddress}
//                   </p>
//                   <CopyToClipboardButton
//                     textToCopy={contractAddress}
//                     className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-all duration-300 font-medium shadow-md"
//                   />
//                 </motion.div>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </motion.div>

//       {/* LIVE METRICS SECTION */}
//       <motion.div
//         className="py-24 px-4 lg:px-24 relative overflow-hidden"
//         style={{
//           backgroundImage: `url('${jaimaxicon}')`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           backgroundAttachment: "fixed",
//           backgroundColor: "#061E24",
//           backgroundBlendMode: "multiply"
//         }}
//       >
//         <div className="relative z-10 max-w-6xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-16"
//           >
//             <motion.div
//               className="mb-8 flex justify-center"
//               animate={{ scale: [1, 1.05, 1] }}
//               transition={{ duration: 3, repeat: Infinity }}
//             >
//               <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-2xl shadow-lg">
//                 📊
//               </div>
//             </motion.div>

//             <h2 className="text-green-400 text-4xl md:text-5xl font-bold mb-6 tracking-wide">
//               Live Metrics
//             </h2>

//             <motion.div
//               className="bg-white/80 border border-gray-300 rounded-2xl p-6 inline-block shadow-lg"
//               whileHover={{ y: -2 }}
//             >
//               <p className="text-lg text-gray-800">
//                 <span className="font-semibold text-gray-900">Total Supply:</span> 10 Billion Tokens
//                 <span className="mx-4 text-gray-400">•</span>
//                 <span className="font-semibold text-gray-900">Starting Price:</span> ${liveRounds[0].atPriceUsdt}
//               </p>
//             </motion.div>
//           </motion.div>

//           {/* Professional Metric Cards */}
//           <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
//             <MetricCard
//               title="Current Price"
//               value={`$${liveRounds[0].atPriceUsdt}`}
//               subtitle="USD per token"
//               icon={<FaDollarSign />}
//               delay={0}
//             />

//             <MetricCard
//               title="Tokens Sold"
//               value="225.7M"
//               subtitle="22.57% of total supply"
//                  icon={<FaUsers />}
//               delay={0.1}
//             />

//             <MetricCard
//               title="Community"
//               value="24,567"
//               subtitle="Active members"
//                 icon={<FaChartLine />}
//               delay={0.2}
//             />
//           </div>

//           {/* Status indicator */}
//           <motion.div
//             className="flex justify-center mt-12"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.5 }}
//           >
//             <div className="flex items-center gap-3 bg-white/80 rounded-full px-6 py-3 shadow-md border border-gray-300">
//               <motion.div
//                 className="w-3 h-3 bg-green-500 rounded-full"
//                 animate={{
//                   scale: [1, 1.2, 1],
//                   opacity: [1, 0.7, 1]
//                 }}
//                 transition={{ duration: 2, repeat: Infinity }}
//               />
//               <span className="font-medium text-gray-800 text-sm">Live Updates Active</span>
//             </div>
//           </motion.div>
//         </div>
//       </motion.div>
//     </>
//   );
// }
import { FaChartLine, FaUsers, FaDollarSign } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


export default function CryptoStakingSection({
  contractAddress = "0x742d35Cc6648C25cbEC6900001Cfb3De3Fxxd4f",
  liveRounds = [{ atPriceUsdt: "0.00012" }],
  onClickNavigateToAboutUs = () => {}
}) {
  const metrics = [
    { icon: <FaDollarSign />, label: "Current Price", value: `$${liveRounds[0].atPriceUsdt}` },
    { icon: <FaUsers />, label: "Tokens Sold", value: "225.7M" },
    { icon: <FaChartLine />, label: "Community", value: "24,567" },
  ];
     const navigate = useNavigate()

  
  return (
    <section className="relative bg-black/90 text-white py-20 overflow-hidden">
      {/* Top Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-400 opacity-20 rounded-full blur-3xl pointer-events-none"></div>

      {/* Container */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-around px-6 ">
        {/* Left Content */}
        <div className="flex-1 max-w-lg space-y-6">
          <p className="text-green-200 font-semibold text-lg tracking-wide">
            Your Gateway to Digital Wealth
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-green-200 via-white to-green-200 bg-clip-text text-transparent">
              J COIN
            </span>
          </h1>
          <h2 className="text-green-400 text-3xl md:text-4xl font-bold">
            About Jaimax
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Jaimax, the most valuable crypto investment app, is dedicated to making crypto accessible in a simple way. Established in 2024, Jaimax has addressed numerous challenges faced by the crypto community, providing solutions for investing, trading, and literacy.
            <span
              onClick={onClickNavigateToAboutUs}
              className="cursor-pointer text-green-400 hover:text-green-500 font-semibold hover:underline transition-all duration-300 ml-2"
            >
              READ MORE →
            </span>
          </p>

          {/* Contract Address */}
          <div>
            <h3 className="text-white font-bold text-xl mb-2">
              Contract Address
            </h3>
            <div className="flex items-center bg-gray-800 border border-gray-700 rounded-2xl p-4 overflow-x-auto">
              <p className="text-green-400 font-mono break-all font-medium text-sm">
                {contractAddress}
              </p>
              <CopyToClipboardButton
                textToCopy={contractAddress}
                className="ml-12 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300"
              />
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-6">
            {/* <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-300">
              Enter App
            </button> */}
            <button  
            onClick={()=> navigate("/images/Jaimax_white_paper.pdf")}
            className="border border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-6 py-3 rounded-full font-semibold transition-all duration-300">
              Read Whitepaper
            </button>
          </div>
        </div>

        {/* Right Coin Display */}
        <div className="flex-1 w-full max-w-md">
          <CoinDisplay />
        </div>
      </div>

      {/* Bottom Metrics */}
      <div className="container mx-auto mt-20 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {metrics.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-green-900/10 border border-green-500/20 rounded-xl py-6 px-6 flex flex-col items-center text-center hover:bg-green-900/20 transition-all duration-300 shadow-md"
            >
              <div className="text-green-400 text-3xl mb-3">{item.icon}</div>
              <p className="text-lg font-semibold">{item.label}</p>
              <p className="text-xl font-bold">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}