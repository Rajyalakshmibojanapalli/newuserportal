// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import BuyTransactionDetails from './buyTransactionDetails/buyTransactionDetails';
// import { useBuyDetailsQuery } from './buyHistoryApiSlice';
// import Loader from '../../../Loader/loader';

// function BuyHistory() {
//   // State for token verification
//   const [isTokenVerified, setIsTokenVerified] = useState(false);

//   // State for filtering transactions by status
//   const [selectedStatus, setSelectedStatus] = useState("Completed");

//   // Navigation hook
//   const navigate = useNavigate();

//   // Pagination and search state
//   const [state, setState] = useState({
//     currentPage: 1,
//     perPage: "10",
//     search: "",
//   });

//   // Loading state for UI interactions
//   const [loading, setLoading] = useState(false);

//   // Build query parameters string for API call
//   const queryParams = `limit=${state?.perPage || ""}&page=${
//     state?.currentPage || ""
//   }&search=${state?.search || ""}&status=${selectedStatus}`;

//   // Fetch buy details data using RTK Query
//   const {
//     data: buyDetails,
//     isLoading,
//     error,
//     refetch,
//   } = useBuyDetailsQuery(queryParams);

//   // Extract transaction data from API response
//   const buyHistoryDetails = buyDetails?.data?.withdrawRequests || [
//   {
//     id: "WR001",
//     user: "Rahul Sharma",
//     amount: 1500,
//     status: "Completed",
//     date: "2025-06-15",
//     method: "UPI",
//   },
//   {
//     id: "WR002",
//     user: "Priya Singh",
//     amount: 3200,
//     status: "Pending",
//     date: "2025-06-14",
//     method: "Bank Transfer",
//   },
//   {
//     id: "WR003",
//     user: "Amit Patel",
//     amount: 1000,
//     status: "Rejected",
//     date: "2025-06-13",
//     method: "Paytm",
//   },
//   {
//     id: "WR004",
//     user: "Sneha Rao",
//     amount: 2500,
//     status: "Completed",
//     date: "2025-06-12",
//     method: "UPI",
//   }
// ];;

//   // Token verification effect
//   useEffect(() => {
//     // const token = localStorage.getItem("token");
//     const token = true;
//     const verifyToken = async () => {
//       if (!token) {
//         navigate("/login");
//         return;
//       }
//       setIsTokenVerified(true);
//     };

//     verifyToken();
//   }, [navigate]);

//   // Error handling effect - redirect to login on authentication error
//   useEffect(() => {
//     if (isTokenVerified) {
//       const debounce = setTimeout(() => {
//         if (error?.data?.status_code === 400) {
//           localStorage.clear();
//           navigate("/login");
//           toast.error(error?.data?.message, {
//             position: "top-center",
//           });
//         }
//       }, 2000);

//       return () => clearTimeout(debounce);
//     }
//   }, [isTokenVerified, error, navigate]);

//   // Initial data fetch effect
//   useEffect(() => {
//     refetch();
//   }, [refetch]);

//   // Update loading state when data changes
//   useEffect(() => {
//     setLoading(false);
//   }, [buyHistoryDetails]);

//   // Handlers for state updates
//   const handlePageChange = (page) => {
//     setLoading(true);
//     setState({ ...state, currentPage: page });
//   };

//   const handleStatusChange = (status) => {
//     setSelectedStatus(status);
//     setState({ ...state, currentPage: 1 });
//   };

//   const handleSearch = (searchTerm) => {
//     setState({ ...state, search: searchTerm, currentPage: 1 });
//   };

//   const handlePerPageChange = (perPage) => {
//     setState({
//       ...state,
//       perPage: perPage,
//       currentPage: 1,
//     });
//   };

//   return (
//     <div>
//       {/* Pass all necessary data and handlers as props to BuyTransactionDetails */}
//       <BuyTransactionDetails 
//         data={buyHistoryDetails}
//         isLoading={isLoading}
//         loading={loading}
//         pagination={{
//           currentPage: state.currentPage,
//           perPage: state.perPage,
//           totalPages: buyDetails 
//             ? Math.ceil(buyDetails?.data?.pagination?.total / state?.perPage) 
//             : 1,
//           total: buyDetails?.data?.pagination?.total || 0
//         }}
//         search={state.search}
//         selectedStatus={selectedStatus}
//         onPageChange={handlePageChange}
//         onStatusChange={handleStatusChange}
//         onSearch={handleSearch}
//         onPerPageChange={handlePerPageChange}
//       />

//       {/* Show loader when data is being fetched or UI is loading */}
//       {(isLoading || loading) && <Loader />}
//     </div>
//   );
// }

// export default BuyHistory; 


// import React from 'react'
// import BuyTransactionDetails from './buyTransactionDetails/buyTransactionDetails'

// function BuyHistory() {



//   return (
//     <div >
//       <BuyTransactionDetails data={buyHistoryDetails} />
//     </div>
//   )
// }

// export default BuyHistory



import React, { useState, useEffect } from "react";
import { ChevronDown, Search, Calendar, CreditCard, DollarSign, Hash, TrendingUp, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";
 import { useBuyDetailsQuery } from "./buyHistoryApiSlice";
 import { toast } from "react-toastify";

// Mock API hook - replace with your actual API integration
const BuyHistory = () => {
  const [isTokenVerified, setIsTokenVerified] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("Completed");
  const navigate = useNavigate();

  // Pagination state
  const [state, setState] = useState({
    currentPage: 1,
    perPage: "10",
    search: "",
  });
  const [loading, setLoading] = useState(false);

  // Update query parameters
  const queryParams = `limit=${state?.perPage || ""}&page=${
    state?.currentPage || ""
    }&search=${state?.search || ""}&status=${selectedStatus}`;

  const {
    data: buyDetails,
    isLoading,
    error,
    refetch,
  } = useBuyDetailsQuery(queryParams);

  
  const TableData = buyDetails?.data?.withdrawRequests || [];

  // Handle PerChange
  const handlePageChange = (e) => {
    setLoading(true);
    setState({ ...state, currentPage: e });
  };

  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
    setState({ ...state, currentPage: 1 });
  };

  // Function for handling search with delay
  let searchTimeout;
  const handleSearch = (e) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      setState({ ...state, search: e.target.value, currentPage: 1 });
    }, 1000);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token)
    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4NDZjM2FkOWRkZWU1ZTM0OWZiZTk3YSIsImV4cCI6MTc1MDIzMTg0OCwiaWF0IjoxNzUwMjMxMjQ4fQ.LV0PtQ1pVAsuMj_om7Y_HNzUWH_UOiLK6VR0SoIj1PQ" 
    const verifyToken = async () => {
      if (!token) {
        navigate("/login");
        return;
      }
      setIsTokenVerified(true);
    };

    verifyToken();
  }, [navigate]);

  useEffect(() => {
    if (isTokenVerified) {
      const debounce = setTimeout(() => {
        if (error?.data?.status_code === 400) {
          localStorage.clear();
          navigate("/login");
          toast.error(error?.data?.message, {
            position: "top-center",
          });
        }
      }, 2000);

      return () => clearTimeout(debounce);
    }
  }, [isTokenVerified, error, navigate]);

  useEffect(() => {
    refetch();
    return () => {
      clearTimeout(searchTimeout);
    };
  }, []);

  /**
   * This method is used to convert the iso string to date & time format
   * @param {*} isoString
   */
  const formatDateWithAmPm = (isoString) => {
    const date = new Date(isoString);
    const day = String(date.getUTCDate()).padStart(2, "0");
    const month = String(date.getUTCMonth() + 1).padStart(2, "0");
    const year = date.getUTCFullYear();
    let hours = date.getUTCHours();
    const minutes = String(date.getUTCMinutes()).padStart(2, "0");
    const amAndPm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;
    return `${day}-${month}-${year} ${hours}:${minutes} ${amAndPm}`;
  };

  useEffect(() => {
    setLoading(false);
  }, [buyDetails?.data?.withdrawRequests]);

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
            <h1 className="text-2xl lg:text-3xl font-bold" style={{ color: '#1d8e85' }}>
              Buy History Details
            </h1>

            {/* Search Bar */}
            <div className="relative max-w-md w-full lg:w-auto">
              <div className="relative">
                <input
                  type="text"
                  className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:border-transparent"
                  style={{ focusRingColor: '#1d8e85' }}
                  placeholder="Search transactions..."
                  onChange={handleSearch}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Cards View */}
        <div className="lg:hidden space-y-4">
          {(isLoading || loading) ? (
            // Loading skeleton for mobile
            [...Array(3)].map((_, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-4 animate-pulse border border-gray-200">
                <div className="flex justify-between items-start mb-3">
                  <div className="h-4 bg-gray-200 rounded w-24"></div>
                  <div className="h-6 bg-gray-200 rounded w-20"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-gray-200 rounded w-full"></div>
                  <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
            ))
          ) : TableData.length === 0 ? (
            <div className="bg-gray-50 rounded-xl p-8 text-center border border-gray-200">
              <p className="text-gray-500">No transactions found</p>
            </div>
          ) : (
            TableData.map((data, i) => (
              <div key={i} className="bg-white rounded-xl p-4 border border-gray-200 hover:shadow-md transition-all duration-200" style={{ borderColor: '#1d8e85' }}>
                {/* Header with S.No and Status */}
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    <Hash className="w-4 h-4" style={{ color: '#1d8e85' }} />
                    <span className="text-sm font-medium text-gray-600">
                      #{state?.currentPage * state?.perPage - (state?.perPage - 1) + i}
                    </span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(data?.status)}`}>
                    {data?.status}
                  </span>
                </div>

                {/* Transaction ID */}
                <div className="mb-3">
                  <div className="flex items-center gap-2 mb-1">
                    <CreditCard className="w-4 h-4" style={{ color: '#1d8e85' }} />
                    <span className="text-xs text-gray-500 uppercase tracking-wide">Transaction ID</span>
                  </div>
                  <p className="text-gray-800 font-mono text-sm break-all">
                    {data?.paypalTransactionId || data?.transactionId || "N/A"}
                  </p>
                </div>

                {/* Payment Details */}
                {/* <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <div style={{ color: '#1d8e85' }}>
                        {getPaymentModeIcon(data?.modeOfPayment)}
                      </div>
                      <span className="text-xs text-gray-500 uppercase tracking-wide">Payment Mode</span>
                    </div>
                    <p className="text-gray-800 text-sm capitalize">{data?.modeOfPayment || "N/A"}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp className="w-4 h-4" style={{ color: '#1d8e85' }} />
                      <span className="text-xs text-gray-500 uppercase tracking-wide">JaiMax Coin</span>
                    </div>
                    <p className="text-gray-800 text-sm font-semibold">{data?.jaimax?.toFixed(3) || "N/A"}</p>
                  </div>
                </div> */}

                {/* Price Information */}
                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <span className="text-xs text-gray-500 uppercase tracking-wide">INR Price</span>
                    <p className="text-gray-800 text-sm">{data?.atPriceInr}</p>
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 uppercase tracking-wide">USD Price</span>
                    <p className="text-gray-800 text-sm">{data?.atPriceUsdt}</p>
                  </div>
                </div>

                {/* Round and Currency */}
                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <span className="text-xs text-gray-500 uppercase tracking-wide">Round</span>
                    <p className="text-gray-800 text-sm">{data?.round}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Globe className="w-4 h-4" style={{ color: '#1d8e85' }} />
                      <span className="text-xs text-gray-500 uppercase tracking-wide">Currency</span>
                    </div>
                    <p className="text-gray-800 text-sm font-semibold">{data?.currency}</p>
                  </div>
                </div>

                {/* Amount and Date */}
                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <span className="text-xs text-gray-500 uppercase tracking-wide">Amount</span>
                    <p className="text-gray-800 text-lg font-bold">
                      {data.currency === "INR"
                        ? `₹${data.amount.toFixed(2)}`
                        : `$${data.amount.toFixed(2)}`}
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar className="w-4 h-4" style={{ color: '#1d8e85' }} />
                      <span className="text-xs text-gray-500 uppercase tracking-wide">Purchase Date</span>
                    </div>
                    <p className="text-gray-800 text-sm">{formatDateWithAmPm(data?.createdAt)}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Desktop Table View */}
        <div className="hidden lg:block">
          <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead style={{ backgroundColor: '#1d8e85' }}>
                  <tr className="text-white text-sm">
                    <th className="px-6 py-4 text-left">S.No</th>
                    <th className="px-6 py-4 text-left">Transaction ID</th>
                    <th className="px-6 py-4 text-left">Payment Mode</th>
                    <th className="px-6 py-4 text-left">JaiMax Coin</th>
                    <th className="px-6 py-4 text-left">INR Price</th>
                    <th className="px-6 py-4 text-left">USD Price</th>
                    <th className="px-6 py-4 text-left">Round</th>
                    <th className="px-6 py-4 text-left">Currency</th>
                    <th className="px-6 py-4 text-left">Amount</th>
                    <th className="px-6 py-4 text-left">Purchase Date</th>
                    <th className="px-6 py-4 text-left">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {(isLoading || loading) ? (
                    [...Array(5)].map((_, i) => (
                      <tr key={i}>
                        {[...Array(11)].map((_, j) => (
                          <td key={j} className="px-6 py-4">
                            <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                          </td>
                        ))}
                      </tr>
                    ))
                  ) : TableData.length === 0 ? (
                    <tr>
                      <td colSpan="11" className="px-6 py-8 text-center text-gray-500">
                        No data found
                      </td>
                    </tr>
                  ) : (
                    TableData.map((data, i) => (
                      <tr key={i} className="text-gray-800 hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4">
                          {state?.currentPage * state?.perPage - (state?.perPage - 1) + i}
                        </td>
                        <td className="px-6 py-4 font-mono text-sm">
                          {data?.paypalTransactionId || data?.transactionId || "N/A"}
                        </td>
                        <td className="px-6 py-4 capitalize">{data?.modeOfPayment || "N/A"}</td>
                        <td className="px-6 py-4 font-semibold">{data?.jaimax?.toFixed(3) || "N/A"}</td>
                        <td className="px-6 py-4">{data?.atPriceInr}</td>
                        <td className="px-6 py-4">{data?.atPriceUsdt}</td>
                        <td className="px-6 py-4">{data?.round}</td>
                        <td className="px-6 py-4 font-semibold">{data?.currency}</td>
                        <td className="px-6 py-4 font-bold">
                          {data.currency === "INR"
                            ? `₹${data.amount.toFixed(2)}`
                            : `$${data.amount.toFixed(2)}`}
                        </td>
                        <td className="px-6 py-4 text-sm">{formatDateWithAmPm(data?.createdAt)}</td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(data?.status)}`}>
                            {data?.status}
                          </span>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-gray-600 text-sm">Show</span>
            <select
              className="bg-white border border-gray-200 rounded-lg px-3 py-1 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:border-transparent"
              style={{ focusRingColor: '#1d8e85' }}
              value={state?.perPage}
              onChange={(e) => {
                const newPerPage = e.target.value;
                setState({
                  ...state,
                  perPage: newPerPage,
                  currentPage: 1,
                });
              }}
            >
              <option value="10" className="bg-white">10</option>
              <option value="30" className="bg-white">30</option>
              <option value="50" className="bg-white">50</option>
            </select>
            <span className="text-gray-600 text-sm">entries</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-gray-600 text-sm hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={state.currentPage <= 1}
              onClick={() => handlePageChange(state.currentPage - 1)}
            >
              Previous
            </button>
            <span className="px-3 py-1 text-white rounded-lg text-sm" style={{ backgroundColor: '#1d8e85' }}>{state.currentPage}</span>
            <button
              className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-gray-600 text-sm hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={state.currentPage >= Math.ceil((buyDetails?.data?.pagination?.total || 0) / state?.perPage)}
              onClick={() => handlePageChange(state.currentPage + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyHistory;