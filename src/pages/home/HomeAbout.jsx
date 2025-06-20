import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChartLine, FaUsers, FaDollarSign } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import icon from "../../assets/3dcoin.png";

const CopyToClipboardButton = ({ textToCopy }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.button
      onClick={handleCopy}
      className="ml-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300"
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
          >
            ✓ Copied
          </motion.span>
        ) : (
          <motion.span
            key="copy"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
          >
            Copy
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

const CoinDisplay = () => (
  <motion.div
    className="mb-10 flex justify-center"
    initial={{ scale: 0, rotate: -180 }}
    whileInView={{ scale: 1, rotate: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1, type: "spring", bounce: 0.3 }}
  >
    <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-2xl  flex items-center justify-center">
      <img src={icon} alt="Jaimax Coin" className="w-full h-full object-contain" />
    </div>
  </motion.div>
);

export default function CryptoStakingSection({
  contractAddress = "0x742d35Cc6648C25cbEC6900001Cfb3De3Fxxd4f",
  liveRounds = [{ atPriceUsdt: "0.00012" }],
  onClickNavigateToAboutUs = () => {}
}) {
  const navigate = useNavigate();
  const metrics = [
    { icon: <FaDollarSign />, label: "Current Price", value: `$${liveRounds[0].atPriceUsdt}` },
    { icon: <FaUsers />, label: "Tokens Sold", value: "225.7M" },
    { icon: <FaChartLine />, label: "Community", value: "24,567" },
  ];

  return (
    <section className="relative bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-4 sm:px-10 lg:px-20 overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-400 opacity-20 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
        <div className="flex-1">
          <CoinDisplay />
        </div>

        <div className="flex-1 space-y-6">
          <p className="text-green-200 font-semibold text-lg tracking-wide">
            Your Gateway to Digital Wealth
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-green-200 via-white to-green-200 bg-clip-text text-transparent">
            J COIN
          </h1>
          <h2 className="text-green-400 text-3xl md:text-4xl font-bold">About Jaimax</h2>
          <p className="text-gray-300 leading-relaxed">
            Jaimax, the most valuable crypto investment app, is dedicated to making crypto accessible in a simple way. Established in 2024, Jaimax has addressed numerous challenges faced by the crypto community, providing solutions for investing, trading, and literacy.
           <a
  href="#"
  onClick={onClickNavigateToAboutUs}
  className="cursor-pointer text-green-400 hover:text-green-500 font-semibold hover:underline transition-all duration-300 ml-2"
>
  READ MORE →
</a>

          </p>

          <div>
            <h3 className="text-white font-bold text-xl mb-2">Contract Address</h3>
            <div className="flex flex-wrap items-center bg-gray-800 border border-gray-700 rounded-2xl p-4">
              <p className="text-green-400 font-mono break-all font-medium text-sm">
                {contractAddress}
              </p>
              <CopyToClipboardButton textToCopy={contractAddress} />
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-6">
            <button
              onClick={() => navigate("/images/Jaimax_white_paper.pdf")}
              className="border border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
            >
              Read Whitepaper
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 px-4 sm:px-10">
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