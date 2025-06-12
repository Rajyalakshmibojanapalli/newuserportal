
import React from 'react';
import { FaShareAlt } from "react-icons/fa";
import assets from "../../../../assets/assets"
import { TextField, InputAdornment } from "@mui/material";
import TransactionDetails from './transactionDetails/transactionDetails';



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
  {
    sno: 3,
    transactionId: "682PQRT",
    amount: "₹500.00",
    type: "Debit",
    paymentMethod: "UPI",
    currency: "INR",
    transactionDate: "28-04-2025 3:10 PM",
    status: "Completed",
    reason: "Subscription Payment",
    updatedBy: "Admin",
    updatedOn: "28-04-2025 3:15 PM",
  },
  {
    sno: 4,
    transactionId: "374MKLO",
    amount: "₹2500.00",
    type: "Credit",
    paymentMethod: "Bank Transfer",
    currency: "INR",
    transactionDate: "27-04-2025 10:00 AM",
    status: "Completed",
    reason: "Client Payment",
    updatedBy: "Finance Team",
    updatedOn: "27-04-2025 10:05 AM",
  },
  {
    sno: 5,
    transactionId: "953WXYZ",
    amount: "₹120.00",
    type: "Debit",
    paymentMethod: "Credit Card",
    currency: "INR",
    transactionDate: "26-04-2025 6:45 PM",
    status: "Failed",
    reason: "Insufficient Balance",
    updatedBy: "System",
    updatedOn: "26-04-2025 6:46 PM",
  },
  {
    sno: 6,
    transactionId: "174ABCD",
    amount: "₹999.00",
    type: "Credit",
    paymentMethod: "Paytm",
    currency: "INR",
    transactionDate: "25-04-2025 9:30 AM",
    status: "Completed",
    reason: "Refund",
    updatedBy: "Support Team",
    updatedOn: "25-04-2025 9:45 AM",
  },
  {
    sno: 7,
    transactionId: "897LMNP",
    amount: "₹75.00",
    type: "Debit",
    paymentMethod: "Net Banking",
    currency: "INR",
    transactionDate: "24-04-2025 11:20 AM",
    status: "Pending",
    reason: "Bill Payment",
    updatedBy: "User",
    updatedOn: "24-04-2025 11:25 AM",
  },
  {
    sno: 7,
    transactionId: "897LMNP",
    amount: "₹75.00",
    type: "Debit",
    paymentMethod: "Net Banking",
    currency: "INR",
    transactionDate: "24-04-2025 11:20 AM",
    status: "Pending",
    reason: "Bill Payment",
    updatedBy: "User",
    updatedOn: "24-04-2025 11:25 AM",
  },
  {
    sno: 7,
    transactionId: "897LMNP",
    amount: "₹75.00",
    type: "Debit",
    paymentMethod: "Net Banking",
    currency: "INR",
    transactionDate: "24-04-2025 11:20 AM",
    status: "Pending",
    reason: "Bill Payment",
    updatedBy: "User",
    updatedOn: "24-04-2025 11:25 AM",
  },
  {
    sno: 7,
    transactionId: "897LMNP",
    amount: "₹75.00",
    type: "Debit",
    paymentMethod: "Net Banking",
    currency: "INR",
    transactionDate: "24-04-2025 11:20 AM",
    status: "Pending",
    reason: "Bill Payment",
    updatedBy: "User",
    updatedOn: "24-04-2025 11:25 AM",
  },
  {
    sno: 7,
    transactionId: "897LMNP",
    amount: "₹75.00",
    type: "Debit",
    paymentMethod: "Net Banking",
    currency: "INR",
    transactionDate: "24-04-2025 11:20 AM",
    status: "Pending",
    reason: "Bill Payment",
    updatedBy: "User",
    updatedOn: "24-04-2025 11:25 AM",
  },
  {
    sno: 7,
    transactionId: "897LMNP",
    amount: "₹75.00",
    type: "Debit",
    paymentMethod: "Net Banking",
    currency: "INR",
    transactionDate: "24-04-2025 11:20 AM",
    status: "Pending",
    reason: "Bill Payment",
    updatedBy: "User",
    updatedOn: "24-04-2025 11:25 AM",
  },
  {
    sno: 7,
    transactionId: "897LMNP",
    amount: "₹75.00",
    type: "Debit",
    paymentMethod: "Net Banking",
    currency: "INR",
    transactionDate: "24-04-2025 11:20 AM",
    status: "Pending",
    reason: "Bill Payment",
    updatedBy: "User",
    updatedOn: "24-04-2025 11:25 AM",
  },
  {
    sno: 7,
    transactionId: "897LMNP",
    amount: "₹75.00",
    type: "Debit",
    paymentMethod: "Net Banking",
    currency: "INR",
    transactionDate: "24-04-2025 11:20 AM",
    status: "Pending",
    reason: "Bill Payment",
    updatedBy: "User",
    updatedOn: "24-04-2025 11:25 AM",
  },
  {
    sno: 7,
    transactionId: "897LMNP",
    amount: "₹75.00",
    type: "Debit",
    paymentMethod: "Net Banking",
    currency: "INR",
    transactionDate: "24-04-2025 11:20 AM",
    status: "Pending",
    reason: "Bill Payment",
    updatedBy: "User",
    updatedOn: "24-04-2025 11:25 AM",
  },
  {
    sno: 7,
    transactionId: "897LMNP",
    amount: "₹75.00",
    type: "Debit",
    paymentMethod: "Net Banking",
    currency: "INR",
    transactionDate: "24-04-2025 11:20 AM",
    status: "Pending",
    reason: "Bill Payment",
    updatedBy: "User",
    updatedOn: "24-04-2025 11:25 AM",
  },
  {
    sno: 7,
    transactionId: "897LMNP",
    amount: "₹75.00",
    type: "Debit",
    paymentMethod: "Net Banking",
    currency: "INR",
    transactionDate: "24-04-2025 11:20 AM",
    status: "Pending",
    reason: "Bill Payment",
    updatedBy: "User",
    updatedOn: "24-04-2025 11:25 AM",
  },
  {
    sno: 7,
    transactionId: "897LMNP",
    amount: "₹75.00",
    type: "Debit",
    paymentMethod: "Net Banking",
    currency: "INR",
    transactionDate: "24-04-2025 11:20 AM",
    status: "Pending",
    reason: "Bill Payment",
    updatedBy: "User",
    updatedOn: "24-04-2025 11:25 AM",
  },
  {
    sno: 7,
    transactionId: "897LMNP",
    amount: "₹75.00",
    type: "Debit",
    paymentMethod: "Net Banking",
    currency: "INR",
    transactionDate: "24-04-2025 11:20 AM",
    status: "Pending",
    reason: "Bill Payment",
    updatedBy: "User",
    updatedOn: "24-04-2025 11:25 AM",
  },
  {
    sno: 7,
    transactionId: "897LMNP",
    amount: "₹75.00",
    type: "Debit",
    paymentMethod: "Net Banking",
    currency: "INR",
    transactionDate: "24-04-2025 11:20 AM",
    status: "Pending",
    reason: "Bill Payment",
    updatedBy: "User",
    updatedOn: "24-04-2025 11:25 AM",
  }
];

const Wallet = () => {
  const shapeBaseStyles = {
    position: 'absolute',
    backgroundColor: '#111111',
    opacity: 0.3,
    pointerEvents: 'none',
    transition: 'opacity 0.3s ease, transform 3s ease-in-out',
    zIndex: 0,
    animationIterationCount: 'infinite',
    animationDirection: 'alternate',
    willChange: 'transform',
  };

  const shapeStyles = {
    circle: {
      width: '6rem',
      height: '6rem',
      borderRadius: '50%',
      animationName: 'floatUpDown',
      animationDuration: '6s',
    },
    diamond: {
      width: '5rem',
      height: '5rem',
      transform: 'rotate(45deg)',
      animationName: 'floatLeftRight',
      animationDuration: '5.5s',
    },
  };

  const shapePositions = [
    { top: '-1.5rem', right: '-1.5rem' },
    { bottom: '-1.5rem', left: '-1.5rem' },
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

      <div className='w-full bg-[#1d8e85] min-h-screen '>
        <div className="px-4 py-6 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Wallet Box (Spans 2 Columns) */}
            <div className="relative group p-6 rounded-xl shadow-lg bg-white overflow-hidden transition duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.03] col-span-1 lg:col-span-2 flex flex-col justify-between">

              {/* Floating shapes */}

              {/* Floating shapes */}
              {['circle', 'diamond'].map((shape, i) => (
                <div
                  key={i}
                  style={{ ...shapeBaseStyles, ...shapeStyles[shape], ...shapePositions[i] }}
                  className="group-hover:opacity-100 opacity-30"
                />
              ))}

              {/* Wallet Content */}
              <div className="flex flex-col sm:flex-row justify-between items-center text-[#084e54] z-10">
                <div className="flex items-center gap-4 mb-4 sm:mb-0">
                  <div className="w-16 h-16 bg-[#e0f7f6] rounded-full flex items-center justify-center border-2 border-[#4ecdc4] shadow-md">
                    <img
                      src={assets.walletBal}
                      alt="Wallet Icon"
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-sm">Wallet Balance</p>
                    <p className="text-2xl font-bold">₹0.00</p>
                  </div>
                </div>

                <div className="text-right">
                  <h1 className="font-bold mb-2">Add Money to Wallet</h1>
                  <button className="w-full bg-gradient-to-r from-[#094e54] to-[#4ecdc4] text-white font-semibold px-6 py-3 rounded-full hover:from-[#0a5c64] hover:to-[#5dd5cd] transition">
                    ADD FUNDS
                  </button>
                </div>
              </div>
            </div>

            {/* Referral Code Box (Single Column) */}
            <div className="relative group bg-white p-6 rounded-xl shadow-lg text-[#084e54] overflow-hidden transition duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.03]">
              {/* Floating shapes */}
              {['circle', 'diamond'].map((shape, i) => (
                <div
                  key={i}
                  style={{ ...shapeBaseStyles, ...shapeStyles[shape], ...shapePositions[i] }}
                  className="group-hover:opacity-100 opacity-30"
                />
              ))}

              <TextField
                fullWidth
                label="Referral Code"
                value="JMXA4557jXXN"
                InputProps={{
                  readOnly: true,
                  endAdornment: (
                    <InputAdornment position="end">
                      <FaShareAlt style={{ cursor: 'pointer', color: '#084e54' }} />
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
                size="small"
                sx={{
                  input: { color: '#084e54' },
                  label: { color: '#084e54' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#4caf50' },
                    '&:hover fieldset': { borderColor: '#81c784' },
                    '&.Mui-focused fieldset': { borderColor: '#66bb6a' },
                  },
                }}
              />
            </div>

          </div>
        </div>

        <div className="flex flex-col h-screen">
          {/* Other sidebar or wallet boxes here */}
          <TransactionDetails list={transactionData} />
        </div>

      </div>

    </>
  );
};

export default Wallet;