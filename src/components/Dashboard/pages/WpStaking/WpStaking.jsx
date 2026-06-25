
import React, { useState } from "react";
import Loader from "../../../../ReusableComponents/Loader/loader";
import { useGetWpStakingWalletQuery } from "./wpStakingApiSlice";
import { useGetP2PHistorySellerQuery } from "../p2p/p2pApiSlice";
import { useGetCompanySellLogsQuery } from "./wpStakingApiSlice";
import SellToCompanyModal from "./SellToCompanyModal";
import { useUserDataQuery } from '../dashBoard/DashboardApliSlice';

const FONT_LINK = `https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Mono:wght@400;500&family=Outfit:wght@300;400;500;600;700&display=swap`;

const T = {
  bg: "#F0FAFA",
  surface: "#FFFFFF",
  surfaceHover: "#F4FEFE",
  border: "#D0EEEC",
  borderDark: "#A8DEDD",
  teal900: "#0D4F4A",
  teal800: "#0F6259",
  teal700: "#0E7B70",
  teal600: "#0D9488",
  teal500: "#14B8A6",
  teal400: "#2DD4BF",
  teal300: "#5EEAD4",
  teal100: "#CCFBF1",
  teal50: "#F0FDFA",
  textPrimary: "#0D3D38",
  textSecondary: "#2D6E68",
  textMuted: "#6BA8A2",
  white: "#FFFFFF",
  red: "#DC2626",
  redDim: "#FEF2F2",
  redBorder: "#FECACA",
  green: "#059669",
  greenDim: "#ECFDF5",
  greenBorder: "#A7F3D0",
  amber: "#D97706",
  amberDim: "#FFFBEB",
  amberBorder: "#FDE68A",
};

const fmt = (n) =>
  new Intl.NumberFormat("en-IN", { maximumFractionDigits: 2 }).format(n || 0);

const fmtDate = (s) => {
  if (!s) return "—";
  // Remove milliseconds, T, and Z from ISO string
  // "2024-01-15T14:30:45.123Z" -> "2024-01-15"
  return s.split('T')[0];
};

const fmtDateTime = (s) => {
  if (!s) return "—";
  // Remove milliseconds, T, and Z from ISO string
  // "2024-01-15T14:30:45.123Z" -> "2024-01-15 14:30:45"
  return s.replace(/\.\d{3}Z$/, '').replace('T', ' ');
};
// ─── Status Badge ─────────────────────────────────────────────────────────────
const StatusBadge = ({ status }) => {
  const map = {
    completed: { bg: T.greenDim, color: T.green, border: T.greenBorder },
    pending: { bg: T.amberDim, color: T.amber, border: T.amberBorder },
    cancelled: { bg: T.redDim, color: T.red, border: T.redBorder },
    processing: { bg: T.teal50, color: T.teal700, border: T.teal300 },
  };
  const s = map[status?.toLowerCase()] || { bg: "#F9FAFB", color: "#6B7280", border: "#E5E7EB" };
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 4,
      padding: "2px 8px", borderRadius: 12,
      fontSize: 10, fontWeight: 600, fontFamily: "'Outfit', sans-serif",
      background: s.bg, color: s.color, border: `1px solid ${s.border}`,
      textTransform: "capitalize", letterSpacing: ".02em",
    }}>
      <span style={{ width: 4, height: 4, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
      {status || "N/A"}
    </span>
  );
};

// ─── Mobile P2P Trade Card ────────────────────────────────────────────────────
const MobileTradeCard = ({ trade, index, sno }) => (
  <div style={{
    background: T.surface, border: `1px solid ${T.border}`,
    borderRadius: 12, padding: "12px", marginBottom: 10,
    boxShadow: "0 2px 6px rgba(13,74,70,0.05)",
    animation: `slideUp .3s ease ${index * 0.03}s both`,
  }}>
    <div style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      marginBottom: 10, paddingBottom: 8, borderBottom: `1px solid ${T.border}`,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{
          width: 22, height: 22, borderRadius: "50%",
          background: T.teal600, color: T.white,
          fontSize: 10, fontWeight: 700,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: "'Outfit', sans-serif",
        }}>{sno}</span>
        <span style={{
          fontFamily: "'DM Mono', monospace", fontSize: 10,
          color: T.teal700, background: T.teal50,
          padding: "3px 8px", borderRadius: 5, fontWeight: 600,
        }}>{trade.tradeId?.slice(-8).toUpperCase()}</span>
      </div>
      <StatusBadge status={trade.status} />
    </div>

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 8 }}>
      <div style={{
        gridColumn: "1 / -1",
        background: `linear-gradient(135deg, ${T.teal50}, ${T.teal100})`,
        padding: "10px", borderRadius: 8, border: `1px solid ${T.teal300}`,
      }}>
        <div style={{ fontSize: 9, fontWeight: 600, color: T.teal700, marginBottom: 3, letterSpacing: ".05em" }}>TOTAL AMOUNT</div>
        <div style={{ fontSize: 18, fontWeight: 700, color: T.teal800, fontFamily: "'DM Serif Display', serif" }}>
          ₹{fmt(trade.payment?.totalInr)}
        </div>
      </div>
      <div>
        <div style={{ fontSize: 9, fontWeight: 600, color: T.textMuted, marginBottom: 3 }}>COINS</div>
        <div style={{ fontSize: 13, fontWeight: 700, color: T.textPrimary }}>{fmt(trade.coins?.totalCoins)}</div>
      </div>
      <div>
        <div style={{ fontSize: 9, fontWeight: 600, color: T.textMuted, marginBottom: 3 }}>PRICE/TOKEN</div>
        <div style={{ fontSize: 13, fontWeight: 600, color: T.textSecondary, fontFamily: "'DM Mono', monospace" }}>
          ₹{fmt(trade.payment?.pricePerCoinInr)}
        </div>
      </div>
      <div>
        <div style={{ fontSize: 9, fontWeight: 600, color: T.textMuted, marginBottom: 3 }}>SELLER GETS</div>
        <div style={{ fontSize: 12, fontWeight: 600, color: T.green, fontFamily: "'DM Mono', monospace" }}>
          ₹{fmt(trade.payment?.sellerReceivesInr)}
        </div>
      </div>
      <div>
        <div style={{ fontSize: 9, fontWeight: 600, color: T.textMuted, marginBottom: 3 }}>SUPPLY</div>
        <div style={{ fontSize: 11, fontWeight: 600, color: T.teal700 }}>{trade.split?.sellerSupplyPct}</div>
      </div>
    </div>

    <div style={{
      display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8,
      paddingTop: 8, borderTop: `1px solid ${T.border}`, fontSize: 10,
    }}>
      <div>
        <div style={{ fontSize: 8, fontWeight: 600, color: T.textMuted, marginBottom: 2 }}>BUYER</div>
        <div style={{ fontWeight: 600, color: T.textPrimary }}>{trade.buyer?.username}</div>
      </div>
      <div>
        <div style={{ fontSize: 8, fontWeight: 600, color: T.textMuted, marginBottom: 2 }}>SELLER</div>
        <div style={{ fontWeight: 600, color: T.textPrimary }}>{trade.seller?.username}</div>
      </div>
    </div>

    <div style={{
      fontSize: 9, color: T.textMuted, fontFamily: "'DM Mono', monospace",
      textAlign: "center", marginTop: 8, paddingTop: 6, borderTop: `1px solid ${T.border}`,
    }}>{fmtDateTime(trade.createdAt)}</div>
  </div>
);

// ─── Mobile Company Sell Card ─────────────────────────────────────────────────
const MobileCompanyCard = ({ log, index, sno }) => (
  <div style={{
    background: T.surface, border: `1px solid ${T.border}`,
    borderRadius: 12, padding: "12px", marginBottom: 10,
    boxShadow: "0 2px 6px rgba(13,74,70,0.05)",
    animation: `slideUp .3s ease ${index * 0.03}s both`,
  }}>
    <div style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      marginBottom: 10, paddingBottom: 8, borderBottom: `1px solid ${T.border}`,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{
          width: 22, height: 22, borderRadius: "50%",
          background: T.teal600, color: T.white,
          fontSize: 10, fontWeight: 700,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: "'Outfit', sans-serif",
        }}>{sno}</span>
        <span style={{
          fontFamily: "'DM Mono', monospace", fontSize: 10,
          color: T.teal700, background: T.teal50,
          padding: "3px 8px", borderRadius: 5, fontWeight: 600,
        }}>{(log._id || log.id)?.slice(-8).toUpperCase()}</span>
      </div>
      <StatusBadge status={log.status} />
    </div>

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 8 }}>
      <div style={{
        gridColumn: "1 / -1",
        background: `linear-gradient(135deg, ${T.teal50}, ${T.teal100})`,
        padding: "10px", borderRadius: 8, border: `1px solid ${T.teal300}`,
      }}>
        <div style={{ fontSize: 9, fontWeight: 600, color: T.teal700, marginBottom: 3, letterSpacing: ".05em" }}>YOU RECEIVED</div>
        <div style={{ fontSize: 18, fontWeight: 700, color: T.teal800, fontFamily: "'DM Serif Display', serif" }}>
          ₹{fmt(log.totalInrPaid ?? log.totalInrReceived ?? log.inrAmount)}
        </div>
      </div>
      <div>
        <div style={{ fontSize: 9, fontWeight: 600, color: T.textMuted, marginBottom: 3 }}>TOKENS SOLD</div>
        <div style={{ fontSize: 13, fontWeight: 700, color: T.textPrimary }}>{fmt(log.tokensSold ?? log.tokens)}</div>
      </div>
      <div>
        <div style={{ fontSize: 9, fontWeight: 600, color: T.textMuted, marginBottom: 3 }}>PRICE/TOKEN</div>
        <div style={{ fontSize: 13, fontWeight: 600, color: T.textSecondary, fontFamily: "'DM Mono', monospace" }}>
          ₹{(log.pricePerTokenInr)}
        </div>
      </div>
    </div>

    <div style={{
      fontSize: 9, color: T.textMuted, fontFamily: "'DM Mono', monospace",
      textAlign: "center", marginTop: 4, paddingTop: 6, borderTop: `1px solid ${T.border}`,
    }}>{fmtDateTime(log.createdAt)}</div>
  </div>
);

// ─── Tab Button ───────────────────────────────────────────────────────────────
const TabBtn = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    style={{
      padding: "7px 18px",
      borderRadius: 20,
      border: active ? "none" : `1px solid ${T.border}`,
      background: active ? `linear-gradient(135deg, ${T.teal700}, ${T.teal500})` : T.surface,
      color: active ? T.white : T.textSecondary,
      fontSize: 12, fontWeight: 700,
      fontFamily: "'Outfit', sans-serif",
      cursor: "pointer", letterSpacing: ".03em",
      boxShadow: active ? "0 4px 12px rgba(13,148,136,0.28)" : "none",
      transition: "all .18s",
      whiteSpace: "nowrap",
    }}
  >{children}</button>
);

// ─── Main ─────────────────────────────────────────────────────────────────────
function WpStaking() {
  const [p2pPage, setP2pPage] = useState(1);
  const [companyPage, setCompanyPage] = useState(1);
  const [activeTab, setActiveTab] = useState("p2p"); // "p2p" | "company"
  const [sellModalOpen, setSellModalOpen] = useState(false);
  const limit = 10;
  const { data: userData, refetch: userRefetch } = useUserDataQuery();
  const { data: response, isLoading, isError, error, refetch } = useGetWpStakingWalletQuery();
  console.log(userData?.data?.wpCompanySellingActive,)
  const { data: historyResponse, isLoading: historyLoading } =
    useGetP2PHistorySellerQuery({ page: p2pPage, limit, tradeType: "wpStaking" });

  const { data: companyLogsResponse, isLoading: companyLoading } =
    useGetCompanySellLogsQuery({ page: companyPage, limit });

  const data = response?.success ? response.data : null;
  const historyData = historyResponse?.data?.trades || [];
  const p2pTotalPages = historyResponse?.data?.pagination?.totalPages || 1;

  const companyData = companyLogsResponse?.data?.logs
    ?? companyLogsResponse?.data?.trades
    ?? companyLogsResponse?.data
    ?? [];
  const companyTotalPages = companyLogsResponse?.data?.pagination?.totalPages || 1;

  if (isLoading) return <Loader />;

  if (isError || !response?.success) {
    return (
      <div style={{ minHeight: "60vh", background: T.bg, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
        <div style={{ textAlign: "center", padding: "40px 32px", background: T.surface, border: `1px solid ${T.border}`, borderRadius: 20, maxWidth: 340, boxShadow: "0 4px 24px rgba(13,74,70,0.1)" }}>
          <div style={{ width: 56, height: 56, borderRadius: "50%", background: T.redDim, border: `1px solid ${T.redBorder}`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px", fontSize: 26 }}>⚠️</div>
          <div style={{ fontSize: 16, fontWeight: 600, color: T.textPrimary, fontFamily: "'Outfit', sans-serif", marginBottom: 6 }}>Failed to load wallet</div>
          <div style={{ fontSize: 13, color: T.textMuted, fontFamily: "'Outfit', sans-serif", marginBottom: 20 }}>
            {error?.data?.message || "Unable to fetch WP staking wallet"}
          </div>
          <button onClick={refetch} style={{ padding: "10px 28px", background: `linear-gradient(135deg, ${T.teal700}, ${T.teal500})`, color: T.white, borderRadius: 10, border: "none", cursor: "pointer", fontSize: 13, fontWeight: 600, fontFamily: "'Outfit', sans-serif", boxShadow: "0 4px 12px rgba(13,148,136,0.3)" }}>
            Retry
          </button>
        </div>
      </div>
    );
  }

  // ── Shared Pagination renderer ──
  const Pagination = ({ page, setPage, totalPages }) => (
    totalPages > 1 ? (
      <div style={{
        padding: "14px 20px", borderTop: `1px solid ${T.border}`, background: T.teal50,
        display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12,
      }}>
        <span style={{ fontSize: 12, color: T.textMuted, fontFamily: "'Outfit', sans-serif" }}>
          Page <span style={{ color: T.textSecondary, fontWeight: 600 }}>{page}</span> of{" "}
          <span style={{ color: T.textSecondary, fontWeight: 600 }}>{totalPages}</span>
        </span>
        <div style={{ display: "flex", gap: 6, alignItems: "center", flexWrap: "wrap" }}>
          <button className="pg-btn" onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>← Prev</button>
          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
            const n = Math.max(1, Math.min(page - 2, totalPages - 4)) + i;
            return (
              <button key={n} className={`pg-btn${page === n ? " pg-btn-active" : ""}`} onClick={() => setPage(n)}>{n}</button>
            );
          })}
          <button className="pg-btn" onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}>Next →</button>
        </div>
      </div>
    ) : null
  );

  return (
    <>
      <link rel="stylesheet" href={FONT_LINK} />
      <style>{`
        @keyframes slideUp { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }
        @keyframes pulse   { 0%,100%{opacity:1} 50%{opacity:.4} }
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 6px; height: 6px; }
        ::-webkit-scrollbar-track { background: ${T.bg}; }
        ::-webkit-scrollbar-thumb { background: ${T.borderDark}; border-radius: 3px; }
        .th-cell { padding: 10px 12px; text-align: left; font-size: 9px; font-weight: 700; color: ${T.teal800}; letter-spacing: .06em; text-transform: uppercase; font-family: 'Outfit', sans-serif; white-space: nowrap; background: ${T.teal50}; border-bottom: 2px solid ${T.teal300}; }
        .td-cell { padding: 12px; font-size: 12px; color: ${T.textSecondary}; font-family: 'Outfit', sans-serif; border-bottom: 1px solid ${T.border}; background: ${T.white}; transition: background .15s; }
        .tr-row:hover .td-cell { background: ${T.surfaceHover}; }
        .tr-row:last-child .td-cell { border-bottom: none; }
        .pg-btn { padding: 6px 14px; font-size: 11px; font-weight: 600; border-radius: 8px; border: 1px solid ${T.border}; background: ${T.surface}; color: ${T.textSecondary}; cursor: pointer; font-family: 'Outfit', sans-serif; transition: all .15s; }
        .pg-btn:hover:not(:disabled) { background: ${T.teal50}; color: ${T.teal700}; border-color: ${T.teal300}; transform: translateY(-1px); }
        .pg-btn:disabled { opacity: 0.4; cursor: not-allowed; }
        .pg-btn-active { background: ${T.teal600} !important; color: ${T.white} !important; border-color: ${T.teal600} !important; }
        .desktop-table { display: block; }
        .mobile-cards  { display: none; }
        @media (max-width: 1024px) { .desktop-table { display: none; } .mobile-cards { display: block; } }
        @media (max-width: 480px)  { .hero-stats { flex-direction: column; align-items: flex-start !important; } .hero-mini-stats { width: 100%; } .hero-mini-stat { min-width: auto !important; flex: 1; } }
      `}</style>

      <div style={{ minHeight: "100vh", background: T.bg, padding: "20px", fontFamily: "'Outfit', sans-serif" }}>
        <div style={{ maxWidth: 1600, margin: "0 auto" }}>

          {/* ── Header ── */}
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 5, animation: "slideUp .35s ease both", flexWrap: "wrap", gap: 12 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 5 }}>
                <div style={{ width: 3, height: 15, background: T.teal500, borderRadius: 2 }} />
                <span style={{ fontSize: 11, fontWeight: 600, color: T.teal600, letterSpacing: ".1em", textTransform: "uppercase" }}>Wealth Plan</span>
              </div>
              <h1 style={{ margin: 0, fontSize: 24, fontWeight: 700, color: T.textPrimary, letterSpacing: "-.02em" }}>
                Staking Wallet
              </h1>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              {userData?.data?.wpCompanySellingActive && (
                <button
                  onClick={() => setSellModalOpen(true)}
                  style={{
                    padding: "7px 18px",
                    background: `linear-gradient(135deg, ${T.teal700}, ${T.teal500})`,
                    color: T.white,
                    border: "none",
                    borderRadius: 20,
                    fontSize: 12,
                    fontWeight: 700,
                    fontFamily: "'Outfit', sans-serif",
                    cursor: "pointer",
                    letterSpacing: ".04em",
                    boxShadow: "0 4px 12px rgba(13,148,136,0.3)",
                    transition: "box-shadow .18s, transform .18s",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.boxShadow = "0 6px 18px rgba(13,148,136,0.4)";
                    e.currentTarget.style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(13,148,136,0.3)";
                    e.currentTarget.style.transform = "";
                  }}
                >
                  Sell to Company
                </button>
              )}
              <div style={{ display: "flex", alignItems: "center", gap: 6, background: T.teal50, border: `1px solid ${T.teal300}`, borderRadius: 20, padding: "5px 15px" }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: T.teal500, animation: "pulse 2s infinite" }} />
                <span style={{ fontSize: 11, fontWeight: 600, color: T.teal700, letterSpacing: ".05em" }}>LIVE</span>
              </div>
            </div>
          </div>

          {/* ── Hero Balance Card ── */}
          <div style={{
            background: `linear-gradient(135deg, ${T.teal900} 0%, ${T.teal700} 55%, ${T.teal600} 100%)`,
            borderRadius: 18, padding: "20px", marginBottom: 16,
            position: "relative", overflow: "hidden",
            boxShadow: "0 12px 18px rgba(13,79,74,0.28)",
            animation: "slideUp .4s ease .05s both",
          }}>
            <div style={{ position: "absolute", top: -48, right: -48, width: 220, height: 220, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.08)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", top: -28, right: -28, width: 140, height: 140, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.06)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, transparent, ${T.teal400}, transparent)`, pointerEvents: "none" }} />

            <div className="hero-stats" style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 20 }}>
              <div>
                <div style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.55)", letterSpacing: ".12em", textTransform: "uppercase", marginBottom: 6 }}>
                  Net Token Balance
                </div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 10, flexWrap: "wrap" }}>
                  <span style={{ fontSize: 30, fontWeight: 700, color: T.white, fontFamily: "'DM Serif Display', serif", lineHeight: 1, letterSpacing: "-.02em" }}>
                    {fmt(data.netTokens)}
                  </span>
                  <span style={{ fontSize: 18, color: T.teal300, fontFamily: "'DM Mono', monospace", fontWeight: 500 }}>JMC</span>
                </div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", marginTop: 8, fontFamily: "'DM Mono', monospace" }}>
                  Converted on {fmtDate(data.convertedAt)}
                </div>
              </div>
              <div className="hero-mini-stats" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                {[
                  { label: "Total Awarded", value: `${fmt(data.totalTokensAwarded)} JMC` },
                  { label: "Tokens per Mnth", value: `${fmt(data.tokensPerMonth)} JMC` },
                  { label: "Sold in P2P", value: `${fmt(data.totalSoldInP2P)} JMC` },
                  { label: "Sold to Company", value: `${fmt(data.totalSoldToCompanyTillNow)} JMC` },
                ].map(({ label, value }) => (
                  <div key={label} className="hero-mini-stat" style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 12, padding: "12px 16px", backdropFilter: "blur(4px)", minWidth: 140 }}>
                    <div style={{ fontSize: 9, color: "rgba(255,255,255,0.55)", fontWeight: 600, letterSpacing: ".08em", textTransform: "uppercase", marginBottom: 5 }}>{label}</div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: T.white, fontFamily: "'DM Serif Display', serif" }}>{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── History Panel ── */}
          <div style={{
            background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16,
            overflow: "hidden", boxShadow: "0 2px 8px rgba(13,74,70,0.08)",
            animation: "slideUp .5s ease .2s both",
          }}>
            {/* Panel header + tabs */}
            <div style={{
              padding: "16px 20px",
              display: "flex", alignItems: "center", justifyContent: "space-between",
              flexWrap: "wrap", gap: 12,
              borderBottom: `1px solid ${T.border}`,
            }}>
              <div>
                <h2 style={{ margin: "0 0 2px", fontSize: 16, fontWeight: 700, color: T.textPrimary, fontFamily: "'Outfit', sans-serif" }}>
                  Transaction History
                </h2>
                <p style={{ margin: 0, fontSize: 12, color: T.textMuted, fontFamily: "'Outfit', sans-serif" }}>
                  {activeTab === "p2p" ? "P2P trades for WP staking tokens" : "sold to company logs"}
                </p>
              </div>
              {/* ── Tab Switcher ── */}
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <TabBtn active={activeTab === "p2p"} onClick={() => setActiveTab("p2p")}>P2P History</TabBtn>
                <TabBtn active={activeTab === "company"} onClick={() => setActiveTab("company")}>Sold to Company</TabBtn>
              </div>
            </div>

            {/* ══ P2P TAB ══ */}
            {activeTab === "p2p" && (
              historyLoading ? (
                <div style={{ padding: 48, textAlign: "center" }}><Loader /></div>
              ) : historyData.length === 0 ? (
                <div style={{ padding: "60px 24px", textAlign: "center" }}>
                  <div style={{ fontSize: 36, marginBottom: 12 }}>📋</div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: T.textPrimary, fontFamily: "'Outfit', sans-serif", marginBottom: 5 }}>No P2P transactions yet</div>
                  <div style={{ fontSize: 13, color: T.textMuted, fontFamily: "'Outfit', sans-serif" }}>Your P2P trading history will appear here</div>
                </div>
              ) : (
                <>
                  {/* Desktop Table */}
                  <div className="desktop-table" style={{ overflowX: "auto" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse" }}>
                      <thead>
                        <tr>
                          <th className="th-cell" style={{ width: 50, textAlign: "center" }}>S.No</th>
                          <th className="th-cell">Trade ID</th>
                          <th className="th-cell">Coins</th>
                          <th className="th-cell">Price/Token</th>
                          <th className="th-cell">Total ₹</th>
                          <th className="th-cell">Seller Gets</th>
                          <th className="th-cell">Supply %</th>
                          <th className="th-cell">Buyer</th>
                          <th className="th-cell">Seller</th>
                          <th className="th-cell">Created</th>
                        </tr>
                      </thead>
                      <tbody>
                        {historyData.map((trade, i) => {
                          const sno = (p2pPage - 1) * limit + i + 1;
                          return (
                            <tr key={trade._id || i} className="tr-row">
                              <td className="td-cell" style={{ textAlign: "center", fontWeight: 700, color: T.teal700, fontSize: 13 }}>{sno}</td>
                              <td className="td-cell">
                                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: T.teal700, background: T.teal50, padding: "4px 8px", borderRadius: 5, fontWeight: 600, border: `1px solid ${T.teal300}` }}>
                                  {trade.tradeId?.slice(-10).toUpperCase()}
                                </span>
                              </td>
                              <td className="td-cell" style={{ fontWeight: 700, color: T.textPrimary, fontFamily: "'DM Mono', monospace", fontSize: 13 }}>{(trade.coins?.totalCoins)}</td>
                              <td className="td-cell" style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: T.textSecondary }}>₹{(trade.payment?.pricePerCoinInr)}</td>
                              <td className="td-cell" style={{ fontWeight: 700, color: T.teal700, fontFamily: "'DM Serif Display', serif", fontSize: 15 }}>₹{(trade.payment?.totalInr)}</td>
                              <td className="td-cell" style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: T.green, fontWeight: 600 }}>₹{(trade.payment?.sellerReceivesInr)}</td>
                              <td className="td-cell" style={{ fontWeight: 600, color: T.teal700, fontSize: 12 }}>{trade.split?.sellerSupplyPct || "—"}</td>
                              <td className="td-cell" style={{ fontSize: 11 }}><div style={{ fontWeight: 600, color: T.textPrimary }}>{trade.buyer?.username}</div></td>
                              <td className="td-cell" style={{ fontSize: 11 }}><div style={{ fontWeight: 600, color: T.textPrimary }}>{trade.seller?.username}</div></td>
                              <td className="td-cell" style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: T.textMuted, whiteSpace: "nowrap" }}>{fmtDateTime(trade.createdAt)}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>

                  {/* Mobile Cards */}
                  <div className="mobile-cards" style={{ padding: "0 16px 16px" }}>
                    {historyData.map((trade, i) => {
                      const sno = (p2pPage - 1) * limit + i + 1;
                      return <MobileTradeCard key={trade._id || i} trade={trade} index={i} sno={sno} />;
                    })}
                  </div>

                  <Pagination page={p2pPage} setPage={setP2pPage} totalPages={p2pTotalPages} />
                </>
              )
            )}

            {/* ══ COMPANY SELLS TAB ══ */}
            {activeTab === "company" && (
              companyLoading ? (
                <div style={{ padding: 48, textAlign: "center" }}><Loader /></div>
              ) : !Array.isArray(companyData) || companyData.length === 0 ? (
                <div style={{ padding: "60px 24px", textAlign: "center" }}>
                  <div style={{ fontSize: 36, marginBottom: 12 }}>🏢</div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: T.textPrimary, fontFamily: "'Outfit', sans-serif", marginBottom: 5 }}>No company sells yet</div>
                  <div style={{ fontSize: 13, color: T.textMuted, fontFamily: "'Outfit', sans-serif" }}>Your company sell history will appear here</div>
                </div>
              ) : (
                <>
                  {/* Desktop Table */}
                  <div className="desktop-table" style={{ overflowX: "auto" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse" }}>
                      <thead>
                        <tr>
                          <th className="th-cell" style={{ width: 50, textAlign: "center" }}>S.No</th>
                          <th className="th-cell">Log ID</th>
                          <th className="th-cell">Tokens Sold(JMC)</th>
                          <th className="th-cell">Price/Token</th>
                          <th className="th-cell">You Received</th>
                          <th className="th-cell">Status</th>
                          <th className="th-cell">Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {companyData.map((log, i) => {
                          const sno = (companyPage - 1) * limit + i + 1;
                          const logId = (log._id || log.id || "");
                          const inr = log.totalInrPaid ?? log.totalInrReceived ?? log.inrAmount;
                          const tokens = log.tokensSold ?? log.tokens;
                          return (
                            <tr key={logId || i} className="tr-row">
                              <td className="td-cell" style={{ textAlign: "center", fontWeight: 700, color: T.teal700, fontSize: 13 }}>{sno}</td>
                              <td className="td-cell">
                                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: T.teal700, background: T.teal50, padding: "4px 8px", borderRadius: 5, fontWeight: 600, border: `1px solid ${T.teal300}` }}>
                                  {logId.slice(-10).toUpperCase()}
                                </span>
                              </td>
                              <td className="td-cell" style={{ fontWeight: 700, color: T.textPrimary, fontFamily: "'DM Mono', monospace", fontSize: 13 }}>{fmt(tokens)}</td>
                              <td className="td-cell" style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: T.textSecondary }}>₹{(log.pricePerTokenInr)}</td>
                              <td className="td-cell" style={{ fontWeight: 700, color: T.green, fontFamily: "'DM Serif Display', serif", fontSize: 15 }}>₹{fmt(inr)}</td>
                              <td className="td-cell"><StatusBadge status={log.status} /></td>
                              <td className="td-cell" style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: T.textMuted, whiteSpace: "nowrap" }}>{fmtDateTime(log.createdAt)}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>

                  {/* Mobile Cards */}
                  <div className="mobile-cards" style={{ padding: "0 16px 16px" }}>
                    {companyData.map((log, i) => {
                      const sno = (companyPage - 1) * limit + i + 1;
                      return <MobileCompanyCard key={log._id || i} log={log} index={i} sno={sno} />;
                    })}
                  </div>

                  <Pagination page={companyPage} setPage={setCompanyPage} totalPages={companyTotalPages} />
                </>
              )
            )}

          </div>{/* /history panel */}

        </div>
      </div>

      {/* ── Sell to Company Modal ── */}
      <SellToCompanyModal
        isOpen={sellModalOpen}
        onClose={() => setSellModalOpen(false)}
        netTokens={data?.netTokens || 0}
        onSellSuccess={refetch}
      />
    </>
  );
}

export default WpStaking;