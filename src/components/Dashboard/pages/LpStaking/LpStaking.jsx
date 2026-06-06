import { useState, useEffect } from "react";
import { useLpStakingWalletQuery } from '../../pages/dashBoard/DashboardApliSlice';
import { useGetP2PHistorySellerQuery } from '../../pages/p2p/p2pApiSlice';
import Pagination from '../../../../ReusableComponents/pagination/pagination'
import Loader from "../../../../ReusableComponents/Loader/loader";
import Table from '../../../../ReusableComponents/tables/reusableTable'
import { formatDateWithAmPm } from "../../../../utils/crypto";
// ─── Helpers ─────────────────────────────────────────────────────────────────
const fmt = (n) => Number(n).toLocaleString("en-US", { maximumFractionDigits: 2 });
const trunc = (s = "", f = 8, b = 4) => s.length > f + b + 1 ? `${s.slice(0, f)}…${s.slice(-b)}` : s;
const fmtDate = (iso) => new Date(iso).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
const fmtTime = (iso) => new Date(iso).toISOString().slice(11, 16) + " UTC";

// ─── useCountUp ───────────────────────────────────────────────────────────────
function useCountUp(target, ms = 2000) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!target) return;
    let start = null;
    const ease = (t) => 1 - Math.pow(1 - t, 3);
    const tick = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / ms, 1);
      setV(p < 1 ? Math.round(ease(p) * target) : target);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target, ms]);
  return v;
}

// ─── Enhanced Ring Component ─────────────────────────────────────────────────
function EnhancedRing({ pct, size = 140 }) {
  const r = (size - 20) / 2 - 8;
  const circ = 2 * Math.PI * r;
  const offset = circ - (pct / 100) * circ;
  
  return (
    <div className="relative flex items-center justify-center">
      <svg 
        width={size} 
        height={size} 
        viewBox={`0 0 ${size} ${size}`} 
        className="transform -rotate-90 drop-shadow-sm"
      >
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="rgba(20, 184, 166, 0.1)"
          strokeWidth="8"
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circ}
          strokeDashoffset={offset}
          className="transition-all duration-1000 ease-out"
        />
        {/* Gradient definition */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#14b8a6" />
            <stop offset="100%" stopColor="#0d9488" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-bold text-gray-800 mb-1">
          {pct.toFixed(0)}%
        </span>
        <span className="text-xs font-medium text-teal-600 uppercase tracking-wider">
          Retained
        </span>
      </div>
    </div>
  );
}

// ─── Animated Stats Card ─────────────────────────────────────────────────────
function StatsCard({ label, value, subLabel, trend, delay = 0, icon, gradient = false }) {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`
      relative overflow-hidden rounded-2xl border transition-all duration-500 hover:shadow-lg hover:-translate-y-1
      ${gradient 
        ? 'bg-gradient-to-br from-teal-500 to-teal-600 border-teal-400 text-white' 
        : 'bg-white border-gray-200 hover:border-teal-200'
      }
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
    `}>
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5" />
      
      <div className="relative p-6">
        <div className="flex items-start justify-between mb-4">
          <div className={`text-xs font-semibold uppercase tracking-wider ${gradient ? 'text-teal-100' : 'text-gray-500'}`}>
            {label}
          </div>
          
        </div>
        
        <div className="space-y-1">
          <div className={`text-3xl font-bold ${gradient ? 'text-white' : 'text-gray-900'}`}>
            {value}
          </div>
          {subLabel && (
            <div className={`text-sm font-medium ${gradient ? 'text-teal-100' : 'text-gray-600'}`}>
              {subLabel}
            </div>
          )}
          {trend && (
            <div className="flex items-center gap-1 text-xs">
              <span className={gradient ? 'text-teal-100' : 'text-gray-400'}>
                {trend}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Enhanced Copy Button ────────────────────────────────────────────────────
function CopyBtn({ text, size = "sm" }) {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const sizeClasses = {
    sm: "text-xs px-2 py-1",
    xs: "text-[10px] px-1.5 py-0.5"
  };

  return (
    <button
      onClick={handleCopy}
      className={`
        ${sizeClasses[size]} ml-2 font-medium rounded-lg border transition-all duration-200
        ${copied 
          ? 'bg-green-50 border-green-200 text-green-700' 
          : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-teal-50 hover:border-teal-200 hover:text-teal-700'
        }
      `}
    >
      {copied ? (
        <span className="flex items-center gap-1">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Copied
        </span>
      ) : (
        <span className="flex items-center gap-1">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          Copy
        </span>
      )}
    </button>
  );
}

// ─── Enhanced Skeleton ───────────────────────────────────────────────────────
function EnhancedSkeleton() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-50 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header skeleton */}
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
            <div className="h-8 w-40 bg-gray-200 rounded animate-pulse" />
          </div>
          <div className="flex gap-2">
            <div className="h-8 w-16 bg-gray-200 rounded-full animate-pulse" />
            <div className="h-8 w-20 bg-gray-200 rounded-full animate-pulse" />
          </div>
        </div>
        
        {/* Hero section skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-3xl p-8 border border-gray-200">
            <div className="space-y-4 animate-pulse">
              <div className="h-6 w-32 bg-gray-200 rounded" />
              <div className="h-16 w-48 bg-gray-200 rounded" />
              <div className="h-4 w-24 bg-gray-200 rounded" />
            </div>
          </div>
          <div className="bg-white rounded-3xl p-8 border border-gray-200">
            <div className="flex justify-center animate-pulse">
              <div className="w-32 h-32 bg-gray-200 rounded-full" />
            </div>
          </div>
        </div>
        
        {/* Stats skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200 animate-pulse">
              <div className="space-y-3">
                <div className="h-4 w-16 bg-gray-200 rounded" />
                <div className="h-8 w-20 bg-gray-200 rounded" />
                <div className="h-3 w-12 bg-gray-200 rounded" />
              </div>
            </div>
          ))}
        </div>
        
        {/* Table skeleton */}
        <div className="bg-white rounded-3xl border border-gray-200">
          <div className="p-6 border-b border-gray-100 animate-pulse">
            <div className="h-6 w-32 bg-gray-200 rounded" />
          </div>
          <div className="p-6 space-y-4 animate-pulse">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="h-12 bg-gray-100 rounded-lg" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Enhanced Status Badge ───────────────────────────────────────────────────
function StatusBadge({ status }) {
  const configs = {
    completed: { 
      bg: "bg-gradient-to-r from-green-50 to-emerald-50", 
      text: "text-green-700", 
      border: "border-green-200", 
      icon: "✓",
      pulse: false
    },
    pending: { 
      bg: "bg-gradient-to-r from-amber-50 to-yellow-50", 
      text: "text-amber-700", 
      border: "border-amber-200", 
      icon: "⏳",
      pulse: true
    },
    cancelled: { 
      bg: "bg-gradient-to-r from-red-50 to-rose-50", 
      text: "text-red-600", 
      border: "border-red-200", 
      icon: "✗",
      pulse: false
    },
    active: { 
      bg: "bg-gradient-to-r from-blue-50 to-indigo-50", 
      text: "text-blue-700", 
      border: "border-blue-200", 
      icon: "●",
      pulse: true
    },
  };
  
  const config = configs[status?.toLowerCase()] || configs.pending;
  
  return (
    <span className={`
      inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full border transition-all
      ${config.bg} ${config.text} ${config.border}
    `}>
      <span className={`text-xs ${config.pulse ? 'animate-pulse' : ''}`}>
        {config.icon}
      </span>
      {status || "Unknown"}
    </span>
  );
}
const fmtDateTime = (s) => {
  if (!s) return "—";
  return new Date(s).toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit"
  });
};
// ─── Enhanced P2P History Section ────────────────────────────────────────────
// ─── Enhanced P2P History Section ────────────────────────────────────────────
function P2PHistorySection({ walletUserId }) {
  const [page, setPage] = useState(1);
  const [tradeType, setTradeType] = useState("leaderwpStaking");
  const limit = 10;
  
  // Remove the redundant state object - use page directly
  const { data, isLoading, isFetching, isError, refetch } = useGetP2PHistorySellerQuery(
    { page, limit, tradeType },
    { skip: !walletUserId }
  );

  const trades = data?.data?.trades ?? [];
  const total = data?.data?.pagination?.total ?? data?.data?.orderSummary?.total ?? 0;
  const totalPages = data?.data?.pagination?.totalPages ?? Math.max(1, Math.ceil(total / limit));

  // Add the missing handlePageChange function
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const tradeTypes = [
    { value: "leaderwpStaking", label: "Gradual Bonus", icon: "🎯" },
  ];

  return (
    <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm">
      {/* Enhanced header */}
      <div className="bg-gradient-to-r from-teal-50 to-blue-50 px-6 py-6 border-b border-gray-100">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div>
                <p className="text-xs font-semibold text-teal-600 uppercase tracking-wider">P2P Trading</p>
                <h2 className="text-xl font-bold text-gray-900">Sold History</h2>
              </div>
            </div>
          </div>

          {/* Enhanced filter */}
          {/* <div className="flex items-center gap-2 bg-white rounded-2xl p-2 border border-gray-200 shadow-sm">
            {tradeTypes.map(({ value, label, icon }) => (
              <button
                key={value}
                onClick={() => { setTradeType(value); setPage(1); }}
                className={`
                  flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl transition-all duration-200
                  ${tradeType === value
                    ? "bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-md transform scale-105"
                    : "text-gray-600 hover:bg-gray-50"
                  }
                `}
              >
                {label}
              </button>
            ))}
          </div> */}
        </div>
      </div>

      {/* Table content */}
      {isLoading || isFetching ? (
        <div className="p-8 space-y-4">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="h-16 bg-gradient-to-r from-gray-100 to-gray-50 rounded-xl animate-pulse" />
          ))}
        </div>
      ) : isError ? (
        <div className="p-12 text-center space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Failed to load data</h3>
            <p className="text-sm text-gray-500 mb-4">Unable to fetch P2P trading history</p>
            <button 
              onClick={refetch} 
              className="bg-teal-500 text-white px-6 py-2 rounded-xl font-medium hover:bg-teal-600 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      ) : trades.length === 0 ? (
        <div className="p-12 text-center space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No trades found</h3>
            <p className="text-sm text-gray-500">No trading history matches your current filter</p>
          </div>
        </div>
      ) : (
        <>
          {/* Enhanced desktop table */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-teal-500">
                  {[
                    "Trade Details", "Participants", "From seller","Pricing", "Amount",  "Date"
                  ].map(header => (
                    <th key={header} className="text-left px-6 py-4 text-xs font-semibold text-white uppercase tracking-wider">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {trades.map((trade, i) => (
                  <tr key={trade.tradeId ?? i} className="hover:bg-gray-50 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        <div className="font-mono text-sm font-medium text-gray-900">
                          {trunc(trade.tradeId ?? "—", 8, 4)}
                        </div>
                        <div className="text-xs text-gray-500">ID: {i + 1 + (page - 1) * limit}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span className="text-sm font-medium text-gray-900">{trade.buyer?.username ?? "—"}</span>
                          <span className="text-xs text-gray-500">buyer</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <span className="text-sm font-medium text-gray-900">{trade.seller?.username ?? "—"}</span>
                          <span className="text-xs text-gray-500">seller</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        <div className="text-lg font-bold text-gray-900">
                          {fmt(trade.coins?.fromSeller ?? 0)}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        <div className="text-sm font-medium text-gray-900">
                          ₹{fmt(trade.payment?.pricePerCoinInr ?? 0)}
                        </div>
                        <div className="text-xs text-gray-500">per token</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        <div className="text-lg font-bold text-gray-900">
                          ₹{fmt(trade.payment?.sellerReceivesInr ?? 0)}
                        </div>
                        <div className="text-xs text-gray-500">
                          of ₹{fmt(trade.payment?.totalInr ?? 0)} total
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      <div className="space-y-1">
                        <div>{trade.createdAt ? fmtDateTime(trade.createdAt) : "—"}</div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Enhanced mobile cards */}
<div className="lg:hidden space-y-4 p-2">
  {trades.map((trade, i) => (
    <div key={trade.tradeId ?? i} className="bg-white border border-gray-200 rounded-xl p-6 space-y-4 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-mono text-sm font-medium text-gray-900">
            {trunc(trade.tradeId ?? "—", 6, 4)}
          </span>
        </div>
        <StatusBadge status={trade.status} />
      </div>

      {/* Main content */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</p>
          <p className="text-2xl font-bold text-gray-900">
            {fmt(trade.coins?.fromSeller ?? 0)}
          </p>
          {/* <p className="text-xs text-teal-600 font-medium">WP Tokens</p> */}
        </div>
        <div className="space-y-1 text-right">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">You Receive</p>
          <p className="text-2xl font-bold text-gray-900">
            ₹{fmt(trade.payment?.sellerReceivesInr ?? 0)}
          </p>
          <p className="text-xs text-gray-500">of ₹{fmt(trade.payment?.totalInr ?? 0)}</p>
        </div>
      </div>

      {/* Participants */}
      <div className="bg-gray-50 rounded-xl p-3 space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-xs font-medium text-gray-700">Buyer</span>
          </div>
          <span className="text-sm font-medium text-gray-900">{trade.buyer?.username ?? "—"}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span className="text-xs font-medium text-gray-700">Seller</span>
          </div>
          <span className="text-sm font-medium text-gray-900">{trade.seller?.username ?? "—"}</span>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between text-xs text-gray-500">
        <span>{trade.createdAt ? fmtDate(trade.createdAt) : "—"}</span>
        <span>₹{fmt(trade.payment?.pricePerCoinInr ?? 0)}/token</span>
      </div>
    </div>
  ))}
</div>
          {/* Fixed pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center p-6 border-t border-gray-100">
              <Pagination
                currentPage={page}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}

// ─── Enhanced Main Component ─────────────────────────────────────────────────
export default function WPStakingDashboard() {
  const { data, isLoading, isError, refetch } = useLpStakingWalletQuery();

  const wallet = data?.data ?? {};
  const { id, userId, convertedAt, totalTokensAwarded = 0, totalSoldInP2P = 0 } = wallet;
  const netAvailable = totalTokensAwarded - totalSoldInP2P;
  const retainedPct = totalTokensAwarded > 0 ? (netAvailable / totalTokensAwarded) * 100 : 0;
  
  const animatedTokens = useCountUp(totalTokensAwarded, 2500);
  const animatedAvailable = useCountUp(netAvailable, 2000);
  const animatedSold = useCountUp(totalSoldInP2P, 1800);

  if (isLoading) return <Loader />;

  if (isError) return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 flex items-center justify-center p-4">
      <div className="text-center space-y-6 p-8 bg-white rounded-3xl border border-red-200 shadow-lg max-w-md">
        
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Connection Failed</h2>
          <p className="text-gray-600 mb-6">Unable to load your wallet data. Please check your connection and try again.</p>
          <button 
            onClick={refetch}
            className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-200 transform hover:scale-105"
          >
            Retry Connection
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-50 p-4 sm:p-6 font-sans">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* ── Enhanced Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              {/* <div className="text-3xl">💰</div> */}
              <div>
                <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider">Layer Benefits</p>
                <h1 className="text-3xl font-bold text-gray-900 leading-tight">Wallet</h1>
              </div>
            </div>
            {/* <p className="text-gray-600">Monitor your staking rewards and trading activity</p> */}
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-white border border-green-200 text-green-700 px-4 py-2 rounded-full shadow-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold">Live Data</span>
            </div>
            <button
              onClick={refetch}
              className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-50 transition-colors shadow-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span className="text-sm font-medium">Refresh</span>
            </button>
          </div>
        </div>



        {/* ── Stats Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatsCard 
            label="Total Awarded"
            value={fmt(totalTokensAwarded)}
            subLabel="WP Tokens"
            icon="🎯"
            delay={100}
            gradient={true}
          />
          <StatsCard 
            label="Available Balance"
            value={fmt(netAvailable)}
            subLabel="WP Tokens"
            icon="💎"
            delay={200}
          />
          <StatsCard 
            label="P2P Sales"
            value={fmt(totalSoldInP2P)}
            subLabel="WP Tokens"
            icon="🔄"
            delay={300}
          />
         
        </div>

        {/* ── P2P History ── */}
        <P2PHistorySection walletUserId={userId} />

        {/* ── Footer ── */}
        
      </div>
    </div>
  );
}