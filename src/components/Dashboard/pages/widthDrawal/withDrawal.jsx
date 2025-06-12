
import React, { useState } from "react";
import TransactionDetails from './withDrawalHistory/withDrawalHistory';

const WithDrawal = () => {
  const [amount, setAmount] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const sampleData = [
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
    },
    // ... duplicate entries removed for brevity ...
  ];

  const validate = () => {
    const newErrors = {};
    if (!amount) {
      newErrors.amount = "Amount is required";
    } else if (isNaN(amount) || Number(amount) <= 0) {
      newErrors.amount = "Enter a valid positive amount";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleConfirm = () => {
    if (validate()) {
      alert(`Withdrawal confirmed for amount ₹${amount}`);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#1d8e85] text-white flex flex-col">
      <div className="px-4 sm:px-8 py-8 flex-grow">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side */}
          <div className="space-y-6 min-w-0">
            <div>
              <label className="block mb-2 text-sm text-white">Balance Type</label>
              <select className="w-full bg-transparent border border-gray-500 rounded px-4 py-2 focus:outline-none text-white">
                <option className="text-black">Available Balance</option>
              </select>
              <p className="mt-2 text-sm text-white break-words">
                Total Available Balance : 0.00
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 text-sm text-white">Payment Currency</label>
                <button className="w-full bg-[#4ecdc4] text-white font-medium py-2 rounded">
                  INR
                </button>
              </div>
              <div>
                <label className="block mb-2 text-sm text-white">Amount</label>
                <input
                  type="number"
                  placeholder="Enter Amount ₹"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className={`w-full bg-transparent border rounded px-4 py-2 focus:outline-none text-white ${errors.amount ? "border-red-500" : "border-gray-500"}`}
                />
                {errors.amount && (
                  <p className="text-red-500 text-xs mt-1">{errors.amount}</p>
                )}
              </div>
            </div>

            <div className="text-sm text-white space-y-2">
              <div className="flex justify-between py-2 border-b border-gray-600">
                <span>Fees</span>
                <span>0</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-600">
                <span>Will Get</span>
                <span>0</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleConfirm}
              className="w-full bg-gradient-to-r from-[#094e54] to-[#4ecdc4] text-white font-semibold px-6 py-3 rounded-full hover:from-[#0a5c64] hover:to-[#5dd5cd] transition"
            >
              Confirm Password
            </button>
          </div>

          {/* Center - Bank Details */}
          <div className="border border-gray-600 rounded p-6 min-w-0">
            <h2 className="text-lg font-bold mb-6 text-white">Bank Details</h2>
            <p className="mb-3 truncate text-white">Bank Holder Name</p>
            <p className="mb-3 truncate text-white">Bank Account Number</p>
            <p className="mb-3 truncate text-white">Bank IFSC Code</p>
            <p className="mt-4 truncate text-white">Bank Name</p>
          </div>

          {/* Right - Terms & Conditions */}
          <div className="min-w-0">
            <h2 className="text-lg font-bold mb-6 text-white">Terms & Conditions</h2>
            <ul className="list-decimal space-y-3 pl-5 text-sm text-white">
              <li>You have to complete the KYC and get approved status; then you can start the withdrawal process.</li>
              <li>The withdrawal department works only during banking hours (10 AM to 4 PM) from Monday to Friday.</li>
              <li>When you initiate the withdrawal process, the funds will be credited to your account within 24 hours.</li>
              <li>We are not responsible if you provide the wrong bank details. Please check them carefully before initiating the withdrawal process.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Transaction Table */}
      <div className="flex-grow flex flex-col px-4 sm:px-8 pb-8">
        <div className="overflow-x-auto">
          <TransactionDetails list={sampleData} />
        </div>
      </div>
    </div>
  );
};

export default WithDrawal;
