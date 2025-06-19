// import React, { useState } from 'react';
// import { Copy, Upload } from 'lucide-react';
// import Qrcode from "../../../../assets/QR_CODE.png";

// const PaymentIcon = ({ name, color }) => (
//   <div className={`w-6 h-6 ${color} rounded-md flex items-center justify-center text-white font-bold text-xs`}>
//     {name.slice(0, 2)}
//   </div>
// );

// export default function AddFundsPage() {
//   const [transactionId, setTransactionId] = useState('Autofill');
//   const [amount, setAmount] = useState('');
//   const [file, setFile] = useState(null);
//   const [activeTab, setActiveTab] = useState('UPI');
//   const [copyNotification, setCopyNotification] = useState('');

//   const handleFileChange = (event) => {
//     setFile(event.target.files[0]);
//   };

//   const handleCopyUPI = () => {
//     navigator.clipboard.writeText('jaimaxcoin2024@upi');
//     showCopyNotification('UPI ID copied!');
//   };

//   const handleCopy = (text) => {
//     navigator.clipboard.writeText(text);
//     showCopyNotification('Copied to clipboard!');
//   };

//   const showCopyNotification = (message) => {
//     setCopyNotification(message);
//     setTimeout(() => setCopyNotification(''), 2000);
//   };

//   return (
//     <div className="min-h-screen text-white p-4 sm:p-6" style={{ backgroundColor: '#1d8e85' }}>
//       {copyNotification && (
//         <div className="fixed top-3 right-3 bg-white/10 text-lime-400 px-3 py-1 rounded-lg border border-lime-400 z-50 text-sm">
//           {copyNotification}
//         </div>
//       )}

//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-6">
//           <h1 className="text-2xl font-bold mb-1 text-lime-300">Add Funds</h1>
//           <p className="text-white/80 text-sm">Choose your preferred payment method</p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {/* Payment Method Card */}
//           <div className="rounded-xl p-5 border border-white/20 shadow-lg bg-[#1d8e85] flex flex-col justify-between h-full">
//             <div className="mb-4">
//               <h3 className="text-lg font-semibold mb-3">Payment Method</h3>
//               <div className="flex gap-4">
//                 <label className="flex items-center gap-2 cursor-pointer">
//                   <input
//                     type="radio"
//                     name="paymentMethod"
//                     checked={activeTab === 'UPI'}
//                     onChange={() => setActiveTab('UPI')}
//                     className="w-4 h-4 accent-lime-400"
//                   />
//                   <span className="text-sm">UPI</span>
//                 </label>
//                 <label className="flex items-center gap-2 cursor-pointer">
//                   <input
//                     type="radio"
//                     name="paymentMethod"
//                     checked={activeTab === 'Others'}
//                     onChange={() => setActiveTab('Others')}
//                     className="w-4 h-4 accent-lime-400"
//                   />
//                   <span className="text-sm">Others</span>
//                 </label>
//               </div>
//             </div>

//             {activeTab === 'UPI' && (
//               <div className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-semibold mb-1">UPI ID</label>
//                   <div className="relative">
//                     <input
//                       type="text"
//                       value="jaimaxcoin2024@upi"
//                       readOnly
//                       className="w-full bg-white/20 px-3 py-2 border border-white/30 rounded-lg pr-10 text-white text-sm focus:outline-none"
//                     />
//                     <button
//                       onClick={handleCopyUPI}
//                       className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-lime-500/20 hover:bg-lime-400/30 p-1 rounded-md text-white"
//                       title="Copy UPI ID"
//                     >
//                       <Copy size={14} />
//                     </button>
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold mb-1">Amount</label>
//                   <input
//                     type="number"
//                     value={amount}
//                     onChange={(e) => setAmount(e.target.value)}
//                     className="w-full bg-white/20 px-3 py-2 border border-white/30 rounded-lg text-white text-sm focus:outline-none"
//                     placeholder="Enter amount"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold mb-1">Transaction ID</label>
//                   <input
//                     type="text"
//                     value={transactionId}
//                     onChange={(e) => setTransactionId(e.target.value)}
//                     className="w-full bg-white/20 px-3 py-2 border border-white/30 rounded-lg text-white text-sm focus:outline-none"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold mb-1">Payment Screenshot</label>
//                   <input
//                     type="file"
//                     id="file-upload"
//                     className="hidden"
//                     onChange={handleFileChange}
//                     accept="image/*"
//                   />
//                   <label
//                     htmlFor="file-upload"
//                     className="flex justify-between items-center bg-white/20 hover:bg-white/30 px-3 py-2 rounded-lg cursor-pointer border border-white/30 text-white"
//                   >
//                     <span className="text-sm truncate">{file ? file.name : 'Choose screenshot'}</span>
//                     <Upload size={14} className="text-lime-400" />
//                   </label>
//                 </div>

//                 <button className="w-full bg-lime-400 text-black font-bold py-2 rounded-lg hover:bg-lime-300 transition duration-200">
//                   Submit Payment
//                 </button>
//               </div>
//             )}

//             {activeTab === 'Others' && (
//               <div className="mt-4 space-y-4 text-sm">
//                 <p className="text-lg font-bold text-white">Available Balance: ₹0.00</p>
//                 <p className="text-white/70">(Referral + Super Bonus)</p>

//                 <div>
//                   <label className="block font-semibold mb-1">Enter Amount To Transfer<span className="text-red-500">*</span></label>
//                   <input
//                     type="number"
//                     placeholder="Enter Transfer Amount"
//                     className="w-full bg-white/20 px-3 py-2 border border-white/30 rounded-lg text-white focus:outline-none"
//                   />
//                 </div>

//                 <button className="bg-lime-400 text-black font-bold py-2 px-4 rounded-full hover:bg-lime-300 transition">
//                   Transfer
//                 </button>
//               </div>
//             )}
//           </div>

//           {/* QR Code Card */}
//           {activeTab === 'UPI' && (
//             <div className="rounded-xl p-5 border border-white/20 shadow-lg bg-[#1d8e85] flex items-center justify-center h-full">
//               <div className="w-full flex justify-center">
                
//                   <img
//                     src={Qrcode}
//                     alt="QR Code"
//                     className=" object-contain rounded-lg"
//                   />
              
//               </div>
//             </div>
//           )}

//           {/* Bank Details Card */}
//           {activeTab === 'UPI' && (
//             <div className="rounded-xl p-5 border border-white/20 shadow-lg bg-[#1d8e85] flex flex-col justify-between h-full">
//               <h2 className="text-lg font-bold mb-4 text-center lg:text-left">Bank Details</h2>
//               <div className="space-y-3 text-sm">
//                 {[
//                   ['Account Holder', 'JAISVIK SOFTWARE SOLUTIONS PVT LTD-HYD'],
//                   ['Account Number', '50200109463200'],
//                   ['IFSC Code', 'HDFC0002083'],
//                   ['Bank Name', 'HDFC Bank']
//                 ].map(([label, value]) => (
//                   <div key={label} className="flex justify-between items-center">
//                     <div>
//                       <p className="font-semibold">{label}</p>
//                       <p className="font-mono break-all">{value}</p>
//                     </div>
//                     <button
//                       onClick={() => handleCopy(value)}
//                       className="bg-lime-500/20 hover:bg-lime-400/30 px-2 py-1 rounded-lg"
//                       title={`Copy ${label}`}
//                     >
//                       <Copy size={14} />
//                     </button>
//                   </div>
//                 ))}
//               </div>

//               <div className="mt-4 p-3 bg-white/20 rounded-lg border border-white/30 text-center">
//                 <p className="text-xs">
//                   💡 <strong>Note:</strong> Please upload payment screenshot after completing the transaction for quick verification.
//                 </p>
//               </div>
//             </div>
//           )}
//         </div>

//         <div className="mt-6 text-center text-white/80 text-sm">
//           For any payment issues, please contact our support team.
//         </div>
//       </div>
//     </div>
//   );
// }



import React, { useState } from 'react';
import { Copy, Upload } from 'lucide-react';
import Qrcode from "../../../../assets/QR_CODE.png";

const PaymentIcon = ({ name, color }) => (
  <div className={`w-6 h-6 ${color} rounded-md flex items-center justify-center text-white font-bold text-xs`}>
    {name.slice(0, 2)}
  </div>
);

export default function AddFundsPage() {
  const [transactionId, setTransactionId] = useState('Autofill');
  const [amount, setAmount] = useState('');
  const [file, setFile] = useState(null);
  const [activeTab, setActiveTab] = useState('UPI');
  const [copyNotification, setCopyNotification] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleCopyUPI = () => {
    navigator.clipboard.writeText('jaimaxcoin2024@upi');
    showCopyNotification('UPI ID copied!');
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    showCopyNotification('Copied to clipboard!');
  };

  const showCopyNotification = (message) => {
    setCopyNotification(message);
    setTimeout(() => setCopyNotification(''), 2000);
  };

  return (
    <div className="h-screen text-white p-4 sm:p-6" style={{ backgroundColor: '#1d8e85' }}>
      {copyNotification && (
        <div className="fixed top-3 right-3 bg-white/10 text-lime-400 px-3 py-1 rounded-lg border border-lime-400 z-50 text-sm">
          {copyNotification}
        </div>
      )}

      <div className="max-w-7xl mx-auto px-2">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold mb-1 text-lime-300">Add Funds</h1>
          <p className="text-white/80 text-sm">Choose your preferred payment method</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-stretch">

          {/* Payment Method Card */}
         <div className="rounded-xl p-4 border border-white/20 shadow-lg bg-[#1d8e85] h-full flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-3">Payment Method</h3>
              <div className="flex gap-4 mb-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    checked={activeTab === 'UPI'}
                    onChange={() => setActiveTab('UPI')}
                    className="w-4 h-4 accent-lime-400"
                  />
                  <span className="text-sm">UPI</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    checked={activeTab === 'Others'}
                    onChange={() => setActiveTab('Others')}
                    className="w-4 h-4 accent-lime-400"
                  />
                  <span className="text-sm">Others</span>
                </label>
              </div>

              {activeTab === 'UPI' && (
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-semibold mb-1">UPI ID</label>
                    <div className="relative">
                      <input
                        type="text"
                        value="jaimaxcoin2024@upi"
                        readOnly
                        className="w-full bg-white/20 px-3 py-2 border border-white/30 rounded-lg pr-10 text-white text-sm focus:outline-none"
                      />
                      <button
                        onClick={handleCopyUPI}
                        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-lime-500/20 hover:bg-lime-400/30 p-1 rounded-md text-white"
                        title="Copy UPI ID"
                      >
                        <Copy size={14} />
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-1">Amount</label>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="w-full bg-white/20 px-3 py-2 border border-white/30 rounded-lg text-white text-sm focus:outline-none"
                      placeholder="Enter amount"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-1">Transaction ID</label>
                    <input
                      type="text"
                      value={transactionId}
                      onChange={(e) => setTransactionId(e.target.value)}
                      className="w-full bg-white/20 px-3 py-2 border border-white/30 rounded-lg text-white text-sm focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-1">Payment Screenshot</label>
                    <input
                      type="file"
                      id="file-upload"
                      className="hidden"
                      onChange={handleFileChange}
                      accept="image/*"
                    />
                    <label
                      htmlFor="file-upload"
                      className="flex justify-between items-center bg-white/20 hover:bg-white/30 px-3 py-2 rounded-lg cursor-pointer border border-white/30 text-white"
                    >
                      <span className="text-sm truncate">{file ? file.name : 'Choose screenshot'}</span>
                      <Upload size={14} className="text-lime-400" />
                    </label>
                  </div>
                </div>
              )}

              {activeTab === 'Others' && (
                <div className="space-y-3 text-sm">
                  <p className="text-lg font-bold text-white">Available Balance: ₹0.00</p>
                  <p className="text-white/70">(Referral + Super Bonus)</p>

                  <div>
                    <label className="block font-semibold mb-1">Enter Amount To Transfer<span className="text-red-500">*</span></label>
                    <input
                      type="number"
                      placeholder="Enter Transfer Amount"
                      className="w-full bg-white/20 px-3 py-2 border border-white/30 rounded-lg text-white focus:outline-none"
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="mt-4">
              <button className="w-full bg-lime-400 text-black font-bold py-2 rounded-lg hover:bg-lime-300 transition duration-200">
                {activeTab === 'Others' ? 'Transfer' : 'Submit Payment'}
              </button>
            </div>
          </div>

          {/* QR Code Card */}
          {activeTab === 'UPI' && (
            <div className="rounded-xl p-4 border border-white/20 shadow-lg bg-[#1d8e85] h-full flex flex-col justify-between">
              <div className="w-full max-w-xs">
                <img
                  src={Qrcode}
                  alt="QR Code"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            </div>
          )}

          {/* Bank Details Card */}
          {activeTab === 'UPI' && (
           <div className="rounded-xl p-4 border border-white/20 shadow-lg bg-[#1d8e85] h-full flex flex-col justify-between">
              <div>
                <h2 className="text-lg font-bold mb-3 text-center lg:text-left">Bank Details</h2>
                <div className="space-y-2 text-sm">
                  {[
                    ['Account Holder', 'JAISVIK SOFTWARE SOLUTIONS PVT LTD-HYD'],
                    ['Account Number', '50200109463200'],
                    ['IFSC Code', 'HDFC0002083'],
                    ['Bank Name', 'HDFC Bank']
                  ].map(([label, value]) => (
                    <div key={label} className="flex justify-between items-center">
                      <div>
                        <p className="font-semibold">{label}</p>
                        <p className="font-mono break-all">{value}</p>
                      </div>
                      <button
                        onClick={() => handleCopy(value)}
                        className="bg-lime-500/20 hover:bg-lime-400/30 px-2 py-1 rounded-lg"
                        title={`Copy ${label}`}
                      >
                        <Copy size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 p-3 bg-white/20 rounded-lg border border-white/30 text-center">
                <p className="text-xs">
                  💡 <strong>Note:</strong> Please upload payment screenshot after completing the transaction.
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="mt-6 text-center text-white/80 text-sm">
          For any payment issues, please contact our support team.
        </div>
      </div>
    </div>
  );
}

// import React, { useState } from 'react';
// import { Copy, Upload } from 'lucide-react';
// import Qrcode from "../../../../assets/QR_CODE.png";

// const PaymentIcon = ({ name, color }) => (
//   <div className={`w-6 h-6 ${color} rounded-md flex items-center justify-center text-white font-bold text-xs`}>
//     {name.slice(0, 2)}
//   </div>
// );

// export default function AddFundsPage() {
//   const [transactionId, setTransactionId] = useState('Autofill');
//   const [amount, setAmount] = useState('');
//   const [file, setFile] = useState(null);
//   const [activeTab, setActiveTab] = useState('UPI');
//   const [copyNotification, setCopyNotification] = useState('');

//   const handleFileChange = (event) => {
//     setFile(event.target.files[0]);
//   };

//   const handleCopyUPI = () => {
//     navigator.clipboard.writeText('jaimaxcoin2024@upi');
//     showCopyNotification('UPI ID copied!');
//   };

//   const handleCopy = (text) => {
//     navigator.clipboard.writeText(text);
//     showCopyNotification('Copied to clipboard!');
//   };

//   const showCopyNotification = (message) => {
//     setCopyNotification(message);
//     setTimeout(() => setCopyNotification(''), 2000);
//   };

//   return (
//     <div className="min-h-screen text-white p-4 sm:p-6" style={{ backgroundColor: '#1d8e85' }}>
//       {copyNotification && (
//         <div className="fixed top-3 right-3 bg-white/10 text-lime-400 px-3 py-1 rounded-lg border border-lime-400 z-50 text-sm">
//           {copyNotification}
//         </div>
//       )}

//       <div className="max-w-7xl mx-auto px-2">
//         <div className="text-center mb-6">
//           <h1 className="text-2xl font-bold mb-1 text-lime-300">Add Funds</h1>
//           <p className="text-white/80 text-sm">Choose your preferred payment method</p>
//         </div>

//         <div className="flex flex-wrap gap-4 justify-between">
//           {/* Payment Method Card */}
//           <div className="flex-1 min-w-[300px] rounded-xl p-4 border border-white/20 shadow-lg bg-[#1d8e85] flex flex-col h-full">
//             <div className="mb-3">
//               <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
//               <div className="flex gap-4">
//                 <label className="flex items-center gap-2 cursor-pointer">
//                   <input
//                     type="radio"
//                     name="paymentMethod"
//                     checked={activeTab === 'UPI'}
//                     onChange={() => setActiveTab('UPI')}
//                     className="w-4 h-4 accent-lime-400"
//                   />
//                   <span className="text-sm">UPI</span>
//                 </label>
//                 <label className="flex items-center gap-2 cursor-pointer">
//                   <input
//                     type="radio"
//                     name="paymentMethod"
//                     checked={activeTab === 'Others'}
//                     onChange={() => setActiveTab('Others')}
//                     className="w-4 h-4 accent-lime-400"
//                   />
//                   <span className="text-sm">Others</span>
//                 </label>
//               </div>
//             </div>

//             {activeTab === 'UPI' && (
//               <div className="space-y-3">
//                 <div>
//                   <label className="block text-sm font-semibold mb-1">UPI ID</label>
//                   <div className="relative">
//                     <input
//                       type="text"
//                       value="jaimaxcoin2024@upi"
//                       readOnly
//                       className="w-full bg-white/20 px-3 py-2 border border-white/30 rounded-lg pr-10 text-white text-sm focus:outline-none"
//                     />
//                     <button
//                       onClick={handleCopyUPI}
//                       className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-lime-500/20 hover:bg-lime-400/30 p-1 rounded-md text-white"
//                       title="Copy UPI ID"
//                     >
//                       <Copy size={14} />
//                     </button>
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold mb-1">Amount</label>
//                   <input
//                     type="number"
//                     value={amount}
//                     onChange={(e) => setAmount(e.target.value)}
//                     className="w-full bg-white/20 px-3 py-2 border border-white/30 rounded-lg text-white text-sm focus:outline-none"
//                     placeholder="Enter amount"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold mb-1">Transaction ID</label>
//                   <input
//                     type="text"
//                     value={transactionId}
//                     onChange={(e) => setTransactionId(e.target.value)}
//                     className="w-full bg-white/20 px-3 py-2 border border-white/30 rounded-lg text-white text-sm focus:outline-none"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold mb-1">Payment Screenshot</label>
//                   <input
//                     type="file"
//                     id="file-upload"
//                     className="hidden"
//                     onChange={handleFileChange}
//                     accept="image/*"
//                   />
//                   <label
//                     htmlFor="file-upload"
//                     className="flex justify-between items-center bg-white/20 hover:bg-white/30 px-3 py-2 rounded-lg cursor-pointer border border-white/30 text-white"
//                   >
//                     <span className="text-sm truncate">{file ? file.name : 'Choose screenshot'}</span>
//                     <Upload size={14} className="text-lime-400" />
//                   </label>
//                 </div>

//                 <button className="w-full bg-lime-400 text-black font-bold py-2 rounded-lg hover:bg-lime-300 transition duration-200">
//                   Submit Payment
//                 </button>
//               </div>
//             )}

//             {activeTab === 'Others' && (
//               <div className="mt-4 space-y-3 text-sm">
//                 <p className="text-lg font-bold text-white">Available Balance: ₹0.00</p>
//                 <p className="text-white/70">(Referral + Super Bonus)</p>

//                 <div>
//                   <label className="block font-semibold mb-1">Enter Amount To Transfer<span className="text-red-500">*</span></label>
//                   <input
//                     type="number"
//                     placeholder="Enter Transfer Amount"
//                     className="w-full bg-white/20 px-3 py-2 border border-white/30 rounded-lg text-white focus:outline-none"
//                   />
//                 </div>

//                 <button className="bg-lime-400 text-black font-bold py-2 px-4 rounded-full hover:bg-lime-300 transition">
//                   Transfer
//                 </button>
//               </div>
//             )}
//           </div>

//           {/* QR Code Card */}
//           {activeTab === 'UPI' && (
//             <div className="flex-1 min-w-[300px] rounded-xl p-4 border border-white/20 shadow-lg bg-[#1d8e85] flex items-center justify-center h-full">
//               <div className="w-full max-w-xs">
//                 <img
//                   src={Qrcode}
//                   alt="QR Code"
//                   className="w-full h-full object-contain rounded-lg"
//                 />
//               </div>
//             </div>
//           )}

//           {/* Bank Details Card */}
//           {activeTab === 'UPI' && (
//             <div className="flex-1 min-w-[300px] rounded-xl p-4 border border-white/20 shadow-lg bg-[#1d8e85] flex flex-col justify-between h-full">
//               <h2 className="text-lg font-bold mb-3 text-center lg:text-left">Bank Details</h2>
//               <div className="space-y-2 text-sm">
//                 {[
//                   ['Account Holder', 'JAISVIK SOFTWARE SOLUTIONS PVT LTD-HYD'],
//                   ['Account Number', '50200109463200'],
//                   ['IFSC Code', 'HDFC0002083'],
//                   ['Bank Name', 'HDFC Bank']
//                 ].map(([label, value]) => (
//                   <div key={label} className="flex justify-between items-center">
//                     <div>
//                       <p className="font-semibold">{label}</p>
//                       <p className="font-mono break-all">{value}</p>
//                     </div>
//                     <button
//                       onClick={() => handleCopy(value)}
//                       className="bg-lime-500/20 hover:bg-lime-400/30 px-2 py-1 rounded-lg"
//                       title={`Copy ${label}`}
//                     >
//                       <Copy size={14} />
//                     </button>
//                   </div>
//                 ))}
//               </div>

//               <div className="mt-3 p-3 bg-white/20 rounded-lg border border-white/30 text-center">
//                 <p className="text-xs">
//                   💡 <strong>Note:</strong> Please upload payment screenshot after completing the transaction.
//                 </p>
//               </div>
//             </div>
//           )}
//         </div>

//         <div className="mt-6 text-center text-white/80 text-sm">
//           For any payment issues, please contact our support team.
//         </div>
//       </div>
//     </div>
//   );
// }

