import React from "react";
import { XCircle, Clock } from "lucide-react";

const SellToCompanyModal = ({ sellModal, onClose }) => {
    if (!sellModal.show) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md">
            {/* Subtle grid background pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJhZGllbnQgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LCAwLjUpIiBvcGFjaXR5PSIwLjIiLz4KPHJhZGllbnQgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LCAwLjUpIiBvcGFjaXR5PSIwLjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIsIDIpIi8+CjxwYXRoIGQ9Ik0wIDBoMzJ2MzJaIiBmaWxsPSJub25lIiBzdHJva2U9InVybCgjdGVhbC0xKSIvPgo8L3N2Zz4=')] opacity-5" />

            {/* Main Modal */}
            <div className="relative bg-white rounded-xl shadow-2xl w-[90%] max-w-md overflow-hidden border border-gray-100">
                {/* Header with subtle texture */}
                <div className="relative h-16 bg-gradient-to-r from-gray-50 to-gray-100 flex items-center px-6">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPgo8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJub25lIiBzdHJva2U9InVybCgjdGVhbC0xKSIvPgo8cGF0aCBkPSJNMCAwaDEwMHYxMDBIMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0idXJsKCN0ZWFkLTEpIiBvcGFjaXR5PSIwLjAiLz4KPHBhdGggZD0iTTAgMGgxMDB2MTIwaC0xMDB6IiBmaWxsPSJub25lIiBzdHJva2U9InVybCgjdGVhbC0xKSIgb3BhY2l0eT0iMC4yIi8+Cjwvc3ZnPg==')] opacity-30" />

                    <h3 className="text-gray-800 font-semibold text-lg relative z-10">
                        Sell Order Processing
                    </h3>

                    <button
                        onClick={onClose}
                        className="absolute right-4 w-8 h-8 rounded-full bg-white/80 hover:bg-white shadow-sm flex items-center justify-center transition-all"
                    >
                        <XCircle size={16} className="text-gray-500" />
                    </button>
                </div>

                {/* Content with financial chart illustration */}
                <div className="p-8 text-center relative">
                    {/* Subtle chart illustration */}
                    <div className="absolute top-0 left-0 w-full h-24 opacity-10 pointer-events-none">
                        <svg viewBox="0 0 300 80" className="w-full h-full">
                            <path
                                d="M0,60 Q50,20 100,50 T200,30 T300,50"
                                stroke="url(#chartGradient)"
                                strokeWidth="1.5"
                                fill="none"
                                strokeLinecap="round"
                            />
                            <defs>
                                <linearGradient
                                    id="chartGradient"
                                    x1="0%"
                                    y1="0%"
                                    x2="100%"
                                    y2="0%"
                                >
                                    <stop offset="0%" stopColor="#10b981" />
                                    <stop offset="100%" stopColor="#059669" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>

                    {/* Main Icon with document stack */}
                    <div className="mx-auto w-20 h-20 mb-6 relative">
                        <div className="absolute -bottom-1 -right-1 w-16 h-10 bg-gradient-to-br from-emerald-100 to-green-100 rounded-t-lg rounded-br-lg border border-gray-200 transform rotate-2" />
                        <div className="absolute bottom-0 right-0 w-16 h-10 bg-white rounded-t-lg rounded-br-lg border border-gray-200 transform -rotate-1 shadow-sm" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center shadow-md">
                                <Clock className="text-white" size={16} />
                            </div>
                        </div>
                    </div>

                    {/* Message with typewriter effect */}
                    <div className="space-y-3 relative z-10">
                        <h4 className="text-gray-800 font-medium text-lg">
                            {sellModal.message}
                        </h4>
                        <p className="text-gray-500 text-sm">
                            Your sell order system is being finalized
                        </p>
                    </div>

                    {/* Progress with animated dots */}
                    <div className="mt-6">
                        <div className="flex items-center justify-center gap-1 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <div
                                    key={i}
                                    className={`w-2 h-2 rounded-full ${i < 3 ? "bg-emerald-500" : "bg-gray-200"
                                        } transition-all duration-300`}
                                    style={{ animationDelay: `${i * 100}ms` }}
                                />
                            ))}
                        </div>

                        <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                            <span className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full" />
                            <span>Processing</span>
                            <span className="w-20 h-1 bg-gray-200 rounded-full" />
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default SellToCompanyModal;






// import React, { useEffect, useState } from "react";
// import {
//   XCircle,
//   Clock,
//   TrendingDown,
//   AlertCircle,
//   CheckCircle,
//   Coins,
//   Calendar,
//   ArrowRight,
//   IndianRupee,
// } from "lucide-react";

// import {
//   useSellToCompanyPreviewMutation,
//   useSellToCompanyOrderMutation,
// } from "./p2pApiSlice";

// import { toast } from "../../../../ReusableComponents/Toasts/Toasts";

// const SellToCompanyModal = ({
//   sellModal,
//   setSellModal,
//   onClose,
// }) => {
//   const [previewData, setPreviewData] =
//     useState(null);

//   const [previewError, setPreviewError] =
//     useState(null);

//   const [tokensInput, setTokensInput] =
//     useState("");

//   const [
//     sellToCompanyPreview,
//     { isLoading: isPreviewLoading },
//   ] = useSellToCompanyPreviewMutation();

//   const [
//     sellToCompanyOrder,
//     { isLoading: isSelling },
//   ] = useSellToCompanyOrderMutation();

//   // Preview
//   const fetchPreview = async () => {
//     if (!tokensInput || Number(tokensInput) <= 0) {
//       toast.error("Enter valid token amount");
//       return;
//     }

//     try {
//       setPreviewError(null);

//       const result =
//         await sellToCompanyPreview({
//           type: sellModal.type,
//           tokensTosell: Number(tokensInput),
//         }).unwrap();

//       setPreviewData(result);
//     } catch (err) {
//       setPreviewError(
//         err?.data?.message ||
//           "Failed to fetch preview"
//       );
//     }
//   };

//   // Final Sell
//   const handleSell = async () => {
//     try {
//       const res = await sellToCompanyOrder({
//         type: sellModal.type,
//         tokensTosell: Number(tokensInput),
//       }).unwrap();

//       toast.success(
//         res?.message || "Sell successful"
//       );

//       onClose();
//     } catch (err) {
//       toast.error(
//         err?.data?.message || "Sell failed"
//       );
//     }
//   };

//   if (!sellModal.show) return null;

//   const preview = previewData?.data?.preview;
//   const seller = preview?.seller;

//   const isWPStaking =
//     sellModal.type === "wpStaking";

//   const formatDate = (dateString) => {
//     if (!dateString) return "—";

//     return new Date(dateString).toLocaleDateString(
//       "en-US",
//       {
//         month: "short",
//         day: "numeric",
//         year: "numeric",
//       }
//     );
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md">

//       <div className="relative bg-white rounded-2xl shadow-2xl w-[90%] max-w-md overflow-hidden border border-gray-100">

//         {/* Header */}
//         <div className="relative h-16 bg-gradient-to-r from-teal-50 to-cyan-50 flex items-center px-6 border-b border-gray-100">

//           <div className="flex items-center gap-2">
//             <div className="w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center">
//               <TrendingDown
//                 size={15}
//                 className="text-white"
//               />
//             </div>

//             <h3 className="text-gray-800 font-semibold text-lg">
//               Sell To Company
//             </h3>
//           </div>

//           <button
//             onClick={onClose}
//             className="absolute right-4"
//           >
//             <XCircle className="text-gray-400" />
//           </button>
//         </div>

//         {/* Body */}
//         <div className="p-6 space-y-4">

//           {/* Input */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Enter Tokens
//             </label>

//             <input
//               type="number"
//               value={tokensInput}
//               onChange={(e) =>
//                 setTokensInput(e.target.value)
//               }
//               placeholder="Enter tokens"
//               className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500"
//             />
//           </div>

//           {/* Preview Button */}
//           {!previewData && (
//             <button
//               onClick={fetchPreview}
//               disabled={isPreviewLoading}
//               className="w-full py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold"
//             >
//               {isPreviewLoading
//                 ? "Loading Preview..."
//                 : "Preview Sell"}
//             </button>
//           )}

//           {/* Error */}
//           {previewError && (
//             <div className="bg-red-50 border border-red-100 rounded-xl p-3 text-red-500 text-sm">
//               {previewError}
//             </div>
//           )}

//           {/* Preview Data */}
//           {previewData && (
//             <div className="space-y-4">

//               {/* Success */}
//               <div className="bg-teal-50 border border-teal-100 rounded-xl p-4">
//                 <div className="flex items-center gap-3">

//                   <div className="w-10 h-10 rounded-lg bg-teal-500 flex items-center justify-center">
//                     <CheckCircle
//                       size={20}
//                       className="text-white"
//                     />
//                   </div>

//                   <div>
//                     <p className="font-semibold text-gray-800">
//                       Preview Ready
//                     </p>

//                     <p className="text-xs text-gray-500">
//                       {seller?.name} •{" "}
//                       {seller?.jaimaxId}
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Transaction */}
//               <div className="border border-teal-100 rounded-xl p-4 space-y-4">

//                 <div className="flex items-center justify-between">

//                   <div>
//                     <p className="text-xs text-gray-400">
//                       Tokens
//                     </p>

//                     <p className="text-lg font-bold">
//                       {preview?.seller?.tokens?.toLocaleString()}
//                     </p>
//                   </div>

//                   <ArrowRight
//                     size={16}
//                     className="text-gray-300"
//                   />

//                   <div>
//                     <p className="text-xs text-gray-400">
//                       Amount
//                     </p>

//                     <p className="text-lg font-bold text-teal-600">
//                       ₹
//                       {preview?.totalAmount?.toLocaleString()}
//                     </p>
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-2 gap-4">

//                   <div>
//                     <p className="text-xs text-gray-400">
//                       Price/Coin
//                     </p>

//                     <p className="font-semibold">
//                       ₹
//                       {preview?.pricePerCoin?.toFixed(
//                         2
//                       )}
//                     </p>
//                   </div>

//                   <div>
//                     <p className="text-xs text-gray-400">
//                       Remaining
//                     </p>

//                     <p className="font-semibold text-teal-600">
//                       {preview?.remainingQuotaAfterSell?.toLocaleString()}
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Cycle */}
//               {preview?.cycleStart &&
//                 preview?.cycleEnd && (
//                   <div className="bg-gray-50 border border-gray-100 rounded-xl p-3 text-sm text-gray-600">
//                     <span className="font-medium">
//                       Cycle:
//                     </span>{" "}
//                     {formatDate(
//                       preview?.cycleStart
//                     )}{" "}
//                     →{" "}
//                     {formatDate(preview?.cycleEnd)}
//                   </div>
//                 )}

//               {/* Action Buttons */}
//               <div className="flex gap-3">

//                 <button
//                   onClick={onClose}
//                   className="flex-1 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 font-medium"
//                 >
//                   Cancel
//                 </button>

//                 <button
//                   onClick={handleSell}
//                   disabled={isSelling}
//                   className="flex-1 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold"
//                 >
//                   {isSelling
//                     ? "Processing..."
//                     : "Confirm Sell"}
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SellToCompanyModal;