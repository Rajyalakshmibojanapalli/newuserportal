import React, { useState } from "react";
import { FaShareAlt } from "react-icons/fa";

import { TextField, InputAdornment } from "@mui/material";
import TransactionDetails from "./transactionDetails/transactionDetails";
import {
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaTelegram,
  FaInstagram,
} from "react-icons/fa";


import assets from "../../../../assets/assets";
const shareIcons = [
  { icon: <FaFacebook />, label: "Facebook" },
  { icon: <FaTwitter />, label: "Twitter" },
  { icon: <FaWhatsapp />, label: "WhatsApp" },
  { icon: <FaTelegram />, label: "Telegram" },
  { icon: <FaInstagram />, label: "Instagram" },
];

const transactionData = [
  {
    sno: 1,
    transactionId: "279RWYX",
    amount: "₹0.00",
    type: "Credit",
    paymentMethod: "Available Balance",
    currency: "INR",
    transactionDate: "29-04-2025 5:25 PM",
    status: "Completed",
    reason: "N/A",
    updatedBy: "N/A",
    updatedOn: "29-04-2025 5:25 PM",
  },
  {
    sno: 2,
    transactionId: "041VDZS",
    amount: "₹0.00",
    type: "Credit",
    paymentMethod: "Available Balance",
    currency: "INR",
    transactionDate: "29-04-2025 5:24 PM",
    status: "Completed",
    reason: "N/A",
    updatedBy: "N/A",
    updatedOn: "29-04-2025 5:24 PM",
  },
];

const Wallet = () => {
  const [showShare, setShowShare] = useState(false);

  const shapeBaseStyles = {
    position: "absolute",
    backgroundColor: "white",
    opacity: 0.1,
    pointerEvents: "none",
    transition: "opacity 0.3s ease, transform 3s ease-in-out",
    zIndex: 0,
    animationIterationCount: "infinite",
    animationDirection: "alternate",
    willChange: "transform",
  };

  const shapeStyles = {
    circle: {
      width: "6rem",
      height: "6rem",
      borderRadius: "50%",
      animationName: "floatUpDown",
      animationDuration: "6s",
      backgroundColor: "#084e54",
    },
    diamond: {
      width: "5rem",
      height: "5rem",
      transform: "rotate(45deg)",
      animationName: "floatLeftRight",
      animationDuration: "5.5s",
      backgroundColor: "#084e54",
    },
  };

  const shapePositions = [
    { top: "-1.5rem", right: "-1.5rem" },
    { bottom: "-1.5rem", left: "-1.5rem" },
  ];

  return (
    <>
      <style>
        {`
          @keyframes floatUpDown {
            0% { transform: translateY(0); }
            100% { transform: translateY(10px); }
          }
          @keyframes floatLeftRight {
            0% { transform: translateX(0); }
            100% { transform: translateX(10px); }
          }
        `}
      </style>

      <div className="w-full flex flex-col gap-4">
        {/* Cards Section */}
       <div className="p-4">
  <div className="flex flex-col gap-4 w-full">
    
    {/* Wallet Balance Card */}
    <div className="w-full relative group p-6 rounded-xl shadow-lg bg-white overflow-hidden transition duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.03] flex flex-col justify-between">
      {["circle", "diamond"].map((shape, i) => (
        <div
          key={i}
          style={{
            ...shapeBaseStyles,
            ...shapeStyles[shape],
            ...shapePositions[i],
          }}
          className="group-hover:opacity-100 opacity-30"
        />
      ))}
      <div className="flex justify-between items-center flex-wrap gap-4 text-[#084e54] z-10">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full flex items-center justify-center border-2 border-[#20934a] shadow-md">
            <img
              src={assets.walletBal}
              alt="Wallet Icon"
              className="w-12 h-12 object-contain"
            />
          </div>
          <div>
            <p className="text-sm">Wallet Balance</p>
            <p className="text-2xl font-bold">₹0.00</p>
          </div>
        </div>

        <div className="flex flex-col items-center w-full mt-4">
  <span className="font-bold text-sm sm:text-base text-center">Add Money to Wallet</span>
  <button
    className="mt-2 text-white font-semibold px-6 py-2 rounded-full text-sm"
    style={{ background: "#20934a" }}
  >
    ADD FUNDS
  </button>
</div>
      </div>
    </div>

    {/* Referral Card */}
    <div className="w-full relative group bg-white p-6 rounded-xl shadow-lg text-[#084e54] overflow-hidden transition duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.03] flex flex-col justify-center">
      {["circle", "diamond"].map((shape, i) => (
        <div
          key={i}
          style={{
            ...shapeBaseStyles,
            ...shapeStyles[shape],
            ...shapePositions[i],
          }}
          className="group-hover:opacity-100 opacity-30"
        />
      ))}
      <div className="z-10 w-full">
        <TextField
          fullWidth
          label="Referral Code"
          value="JMXA4557jXXN"
          InputProps={{
            readOnly: true,
            endAdornment: (
              <InputAdornment position="end">
                <FaShareAlt
                  onClick={() => setShowShare(true)}
                  style={{ cursor: "pointer", color: "#20934a" }}
                />
              </InputAdornment>
            ),
          }}
          variant="outlined"
          size="small"
          sx={{
            input: { color: "#20934a", fontWeight: 600 },
            label: {
              color: "#084e54",
              "&.Mui-focused": { color: "#084e54" },
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#000" },
              "&:hover fieldset": { borderColor: "#084e54" },
              "&.Mui-focused fieldset": { borderColor: "#000" },
            },
          }}
        />
      </div>
    </div>
  </div>
</div>


        {/* ✅ Scrollable Table Only */}
        <div className="w-full overflow-x-auto px-2 pb-10">
  <div className="min-w-full sm:min-w-0">
    <TransactionDetails list={transactionData} />
  </div>
</div>
      </div>

      {/* Share Modal */}
      {showShare && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-40"
            onClick={() => setShowShare(false)}
          />
          <div className="fixed top-[25%] left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-md bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="bg-[#26a69a] text-white px-4 py-2 text-lg font-semibold flex justify-center items-center relative">
              <span>Share Your Referral Code</span>
              <span
                className="absolute right-4 cursor-pointer text-white"
                onClick={() => setShowShare(false)}
              >
                ✕
              </span>
            </div>

            <div className="flex justify-center gap-6 py-6 text-black text-[1.7rem]">
              {shareIcons.map(({ icon, label }, idx) => (
                <div
                  key={idx}
                  className="cursor-pointer p-2 rounded-full transition-all duration-300 hover:text-white"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "44px",
                    height: "44px",
                  }}
                  title={label}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#26a69a";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Wallet;
