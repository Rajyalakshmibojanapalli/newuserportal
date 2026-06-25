

import React, { useState, useEffect, useRef } from "react";
import {
  useGetNrmlStakingSellPreviewMutation,
  useNrmlStakingSellMutation,
} from "./stakingApiSlice"; 

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

// ─── Preview Row ──────────────────────────────────────────────────────────────
const PreviewRow = ({ label, value, highlight, muted, accent }) => (
  <div style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 0",
    borderBottom: `1px solid ${T.border}`,
    gap: 8,
  }}>
    <span style={{
      fontSize: 12,
      color: muted ? T.textMuted : T.textSecondary,
      fontFamily: "'Outfit', sans-serif",
      fontWeight: 500,
      flexShrink: 0,
    }}>
      {label}
    </span>
    <span style={{
      fontSize: highlight ? 15 : 13,
      fontWeight: highlight ? 700 : 600,
      color: highlight ? T.teal700 : accent ? T.green : T.textPrimary,
      fontFamily: highlight ? "'DM Serif Display', serif" : "'DM Mono', monospace",
      textAlign: "right",
      wordBreak: "break-all",
    }}>
      {value}
    </span>
  </div>
);

// ─── Section Label ────────────────────────────────────────────────────────────
const SectionLabel = ({ children }) => (
  <div style={{
    fontSize: 9,
    fontWeight: 700,
    color: T.teal600,
    letterSpacing: ".1em",
    textTransform: "uppercase",
    fontFamily: "'Outfit', sans-serif",
    padding: "12px 0 4px",
  }}>
    {children}
  </div>
);

// ─── Steps ────────────────────────────────────────────────────────────────────
const STEP = { INPUT: "input", PREVIEW: "preview", SUCCESS: "success" };

// ─── Modal ────────────────────────────────────────────────────────────────────
export default function SellToCompanyModal({ isOpen, onClose, netTokens = 10000, onSellSuccess }) {
  const [step, setStep] = useState(STEP.INPUT);
  const [tokensToSell, setTokensToSell] = useState("");
  const [previewData, setPreviewData] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const inputRef = useRef(null);

 const [previewSell, { isLoading: previewing }] = useGetNrmlStakingSellPreviewMutation();
const [executeSell, { isLoading: selling }]    = useNrmlStakingSellMutation();

  useEffect(() => {
    if (isOpen) {
      setStep(STEP.INPUT);
      setTokensToSell("");
      setPreviewData(null);
      setErrorMsg("");
      // Lock body scroll when modal open
      document.body.style.overflow = "hidden";
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") handleClose(); };
    if (isOpen) document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen]);

  const handleClose = () => {
    if (selling) return;
    onClose();
  };

  const handlePreview = async () => {
    setErrorMsg("");
    const amount = Number(tokensToSell);
    if (!amount || amount <= 0) { setErrorMsg("Please enter a valid token amount."); return; }
    if (amount > netTokens) { setErrorMsg(`You only have ${fmt(netTokens)} JMC available.`); return; }
    try {
      const res = await previewSell({ tokensToSell: amount }).unwrap();
      if (res?.success) { setPreviewData(res.data); setStep(STEP.PREVIEW); }
      else setErrorMsg(res?.message || "Preview failed. Please try again.");
    } catch (err) {
      setErrorMsg(err?.data?.message || "Preview failed. Please try again.");
    }
  };

  const handleSell = async () => {
    setErrorMsg("");
    try {
      const res = await executeSell({ tokensToSell: Number(tokensToSell) }).unwrap();
      if (res?.success) { setStep(STEP.SUCCESS); onSellSuccess?.(); }
      else setErrorMsg(res?.message || "Sale failed. Please try again.");
    } catch (err) {
      setErrorMsg(err?.data?.message || "Sale failed. Please try again.");
    }
  };

  if (!isOpen) return null;

  const elig = previewData?.eligiblity;
  const sold = previewData?.soldThisMonth;
  const isEligible = elig?.eligibleToSell !== false;

  return (
    <>
      <style>{`
        @keyframes fadeIn  { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px) } to { opacity: 1; transform: none } }
        @keyframes slideUp2{ from { opacity: 0; transform: translateY(12px) } to { opacity: 1; transform: none } }
        @keyframes scaleIn { from { opacity: 0; transform: scale(.94) } to { opacity: 1; transform: scale(1) } }
        @keyframes checkPop{ 0%{transform:scale(0)} 70%{transform:scale(1.2)} 100%{transform:scale(1)} }

        /* ── Responsive modal shell ── */
        .stc-backdrop {
          position: fixed; inset: 0;
          background: rgba(13,79,74,0.48);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          z-index: 9999;
          display: flex;
          align-items: flex-end;        /* bottom-sheet on mobile */
          justify-content: center;
          animation: fadeIn .2s ease both;
        }
        .stc-card {
          background: #fff;
          width: 100%;
          max-width: 460px;
          max-height: 92dvh;            /* dvh = dynamic viewport height (safe areas) */
          max-height: 92vh;             /* fallback */
          display: flex;
          flex-direction: column;
          border-radius: 20px 20px 0 0; /* bottom-sheet corners on mobile */
          box-shadow: 0 -8px 40px rgba(13,79,74,0.18);
          border: 1px solid #D0EEEC;
          animation: slideUp .28s cubic-bezier(.32,1,.56,1) both;
          overflow: hidden;             /* clip header gradient */
        }
        .stc-body {
          flex: 1;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
          padding: 18px 16px 24px;
          overscroll-behavior: contain;
        }
        /* On wider screens → centred dialog, not bottom-sheet */
        @media (min-width: 540px) {
          .stc-backdrop {
            align-items: center;
            padding: 16px;
          }
          .stc-card {
            border-radius: 20px;
            box-shadow: 0 24px 64px rgba(13,79,74,0.22), 0 4px 16px rgba(13,79,74,0.12);
            animation: scaleIn .25s cubic-bezier(.34,1.56,.64,1) both;
          }
          .stc-body { padding: 20px 20px 24px; }
        }

        /* quick-fill buttons */
        .qf-btn {
          flex: 1; padding: 6px 0;
          font-size: 11px; font-weight: 600;
          border: 1px solid #D0EEEC; border-radius: 7px;
          cursor: pointer; background: #F0FAFA;
          color: #2D6E68; font-family: 'Outfit', sans-serif;
          transition: all .15s; min-height: 34px;
        }
        .qf-btn:hover { background: #F0FDFA; border-color: #5EEAD4; color: #0E7B70; }

        /* action buttons */
        .action-row { display: flex; gap: 10px; }
        .btn-back {
          flex: 1; padding: 13px 10px;
          background: #fff; border: 1.5px solid #D0EEEC;
          border-radius: 10px; cursor: pointer;
          font-size: 13px; font-weight: 600; color: #2D6E68;
          font-family: 'Outfit', sans-serif; transition: all .15s;
          min-height: 46px;
        }
        .btn-back:hover:not(:disabled) { border-color: #5EEAD4; color: #0E7B70; }
        .btn-confirm {
          flex: 2; padding: 13px 10px;
          border: none; border-radius: 10px;
          font-size: 13px; font-weight: 700;
          font-family: 'Outfit', sans-serif;
          letter-spacing: .03em; transition: all .2s;
          min-height: 46px; cursor: pointer;
        }

        /* number input — remove spinners */
        .token-input::-webkit-outer-spin-button,
        .token-input::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
        .token-input[type=number] { -moz-appearance: textfield; }
      `}</style>

      {/* ── Backdrop ── */}
      <div className="stc-backdrop" onClick={handleClose}>

        {/* ── Card ── */}
        <div className="stc-card" onClick={(e) => e.stopPropagation()}>

          {/* ── Sticky Header ── */}
          <div style={{
            background: `linear-gradient(135deg, ${T.teal900} 0%, ${T.teal700} 100%)`,
            padding: "16px 18px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            flexShrink: 0, position: "relative", overflow: "hidden",
          }}>
            <div style={{ position: "absolute", top: -28, right: -28, width: 90, height: 90, borderRadius: "50%", background: "rgba(255,255,255,0.07)", pointerEvents: "none" }} />
            <div style={{ zIndex: 1 }}>
              <div style={{ fontSize: 10, fontWeight: 600, color: "rgba(255,255,255,0.5)", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 2 }}>
                WP Staking
              </div>
              <div style={{ fontSize: 16, fontWeight: 700, color: T.white, fontFamily: "'Outfit', sans-serif" }}>
                Sell Tokens to Company
              </div>
            </div>
            {step !== STEP.SUCCESS && (
              <button
                onClick={handleClose}
                aria-label="Close"
                style={{
                  width: 32, height: 32, borderRadius: "50%", flexShrink: 0,
                  background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)",
                  color: T.white, cursor: "pointer", fontSize: 18, lineHeight: 1,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  zIndex: 1, transition: "background .15s",
                }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.24)"}
                onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.12)"}
              >×</button>
            )}
          </div>

          {/* ── Scrollable Body ── */}
          <div className="stc-body">

            {/* ══ INPUT ══ */}
            {step === STEP.INPUT && (
              <div style={{ animation: "slideUp2 .25s ease both" }}>

                {/* Balance pill */}
                <div style={{
                  background: T.teal50, border: `1px solid ${T.teal300}`,
                  borderRadius: 10, padding: "10px 14px",
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  marginBottom: 18,
                }}>
                  <span style={{ fontSize: 11, color: T.textMuted, fontWeight: 600, letterSpacing: ".05em" }}>AVAILABLE BALANCE</span>
                  <span style={{ fontSize: 15, fontWeight: 700, color: T.teal700, fontFamily: "'DM Serif Display', serif" }}>
                    {fmt(netTokens)} <span style={{ fontSize: 11, fontFamily: "'DM Mono', monospace", color: T.teal600 }}>JMC</span>
                  </span>
                </div>

                {/* Input */}
                <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: T.textSecondary, marginBottom: 8, letterSpacing: ".04em" }}>
                  TOKENS TO SELL
                </label>
                <div style={{ position: "relative", marginBottom: 10 }}>
                  <input
                    ref={inputRef}
                    className="token-input"
                    type="number"
                    min="1"
                    max={netTokens}
                    value={tokensToSell}
                    onChange={(e) => { setTokensToSell(e.target.value); setErrorMsg(""); }}
                    onKeyDown={(e) => { if (e.key === "Enter") handlePreview(); }}
                    placeholder="Enter tokens"
                    style={{
                      width: "100%", padding: "13px 52px 13px 14px",
                      fontSize: 16, fontWeight: 600, fontFamily: "'DM Mono', monospace",
                      color: T.textPrimary, background: T.surface,
                      border: `1.5px solid ${errorMsg ? T.redBorder : T.border}`,
                      borderRadius: 10, outline: "none", boxSizing: "border-box",
                      transition: "border-color .15s, box-shadow .15s",
                    }}
                    onFocus={e => { e.target.style.borderColor = T.teal400; e.target.style.boxShadow = "0 0 0 3px rgba(20,184,166,0.12)"; }}
                    onBlur={e => { e.target.style.borderColor = errorMsg ? T.redBorder : T.border; e.target.style.boxShadow = "none"; }}
                  />
                  <span style={{
                    position: "absolute", right: 13, top: "50%", transform: "translateY(-50%)",
                    fontSize: 10, fontWeight: 700, color: T.teal600,
                    fontFamily: "'DM Mono', monospace", letterSpacing: ".04em", pointerEvents: "none",
                  }}>JMC</span>
                </div>

                {/* Quick-fill */}
                <div style={{ display: "flex", gap: 6, marginBottom: 16 }}>
                  {[25, 50, 75, 100].map((pct) => (
                    <button
                      key={pct}
                      className="qf-btn"
                      onClick={() => { setTokensToSell(Math.floor(netTokens * pct / 100)); setErrorMsg(""); }}
                    >
                      {pct}%
                    </button>
                  ))}
                </div>

                {errorMsg && (
                  <div style={{
                    background: T.redDim, border: `1px solid ${T.redBorder}`,
                    borderRadius: 8, padding: "9px 12px",
                    fontSize: 12, color: T.red, fontFamily: "'Outfit', sans-serif", marginBottom: 14,
                  }}>⚠ {errorMsg}</div>
                )}

                <button
                  onClick={handlePreview}
                  disabled={previewing || !tokensToSell}
                  style={{
                    width: "100%", padding: "14px",
                    background: previewing || !tokensToSell ? T.border : `linear-gradient(135deg, ${T.teal700}, ${T.teal500})`,
                    color: previewing || !tokensToSell ? T.textMuted : T.white,
                    border: "none", borderRadius: 10, fontSize: 14, fontWeight: 700,
                    fontFamily: "'Outfit', sans-serif", letterSpacing: ".04em",
                    cursor: previewing || !tokensToSell ? "not-allowed" : "pointer",
                    boxShadow: previewing || !tokensToSell ? "none" : "0 4px 14px rgba(13,148,136,0.3)",
                    transition: "all .2s", minHeight: 48,
                  }}
                >
                  {previewing ? "Loading Preview…" : "Preview Sale →"}
                </button>
              </div>
            )}

            {/* ══ PREVIEW ══ */}
            {step === STEP.PREVIEW && previewData && (
              <div style={{ animation: "slideUp2 .25s ease both" }}>
                <div style={{ fontSize: 12, color: T.textMuted, fontFamily: "'Outfit', sans-serif", marginBottom: 2 }}>
                  Review the details below before confirming.
                </div>

                {/* Sale Breakdown */}
                <SectionLabel>Sale Breakdown</SectionLabel>
                <div style={{ borderTop: `1px solid ${T.border}` }}>
                  {/* <PreviewRow label="Tokens to Sell"  value={`${fmt(elig?.reuestedTokensToSell)} JMC`} /> */}
                  <PreviewRow label="Price per Token"  value={`₹${fmt(previewData.pricePerToken)}`} />
                  <PreviewRow label="You Receive"      value={`₹${fmt(previewData.totalInrRecives)}`} highlight />
                </div>

                {/* Eligibility */}
                <SectionLabel>Eligibility</SectionLabel>
                <div style={{ borderTop: `1px solid ${T.border}` }}>
                  {/* <PreviewRow
                    label="Eligible to Sell"
                    value={elig?.eligibleToSell ? "✓ Yes" : "✗ No"}
                    accent={elig?.eligibleToSell}
                  /> */}
                  <PreviewRow label="Total Eligible Tokens"  value={`${fmt(elig?.totalTokensElgibleToSell)} JMC`} muted />
                  <PreviewRow label="Requested Tokens"       value={`${fmt(elig?.reuestedTokensToSell)} JMC`} muted />
                </div>

                {/* Sold This Month */}
                <SectionLabel>Sold This Month</SectionLabel>
                <div style={{ borderTop: `1px solid ${T.border}`, marginBottom: 14 }}>
                  <PreviewRow label="Via P2P"           value={`${fmt(sold?.viaP2P)} JMC`} muted />
                  <PreviewRow label="Via Company Sell"  value={`${fmt(sold?.viaCompanySell)} JMC`} muted />
                  <PreviewRow label="Total Sold"        value={`${fmt(sold?.total)} JMC`} />
                </div>

                {/* Eligibility banner */}
                {!isEligible ? (
                  <div style={{
                    background: T.redDim, border: `1px solid ${T.redBorder}`,
                    borderRadius: 10, padding: "12px 14px", fontSize: 12, color: T.red,
                    fontFamily: "'Outfit', sans-serif", marginBottom: 14, lineHeight: 1.5,
                  }}>
                    <strong>Not eligible:</strong> {previewData.reason || "You do not meet the criteria to sell at this time."}
                  </div>
                ) : (
                  <div style={{
                    background: T.greenDim, border: `1px solid ${T.greenBorder}`,
                    borderRadius: 10, padding: "10px 14px", fontSize: 12, color: T.green,
                    fontFamily: "'Outfit', sans-serif", marginBottom: 14, fontWeight: 600,
                  }}>
                    ✓ Eligible — you can proceed with this sale.
                  </div>
                )}

                {errorMsg && (
                  <div style={{
                    background: T.redDim, border: `1px solid ${T.redBorder}`,
                    borderRadius: 8, padding: "9px 12px", fontSize: 12, color: T.red,
                    fontFamily: "'Outfit', sans-serif", marginBottom: 12,
                  }}>⚠ {errorMsg}</div>
                )}

                <div className="action-row">
                  <button
                    className="btn-back"
                    onClick={() => { setStep(STEP.INPUT); setErrorMsg(""); }}
                    disabled={selling}
                  >← Back</button>
                  <button
                    className="btn-confirm"
                    onClick={handleSell}
                    disabled={selling || !isEligible}
                    style={{
                      background: (selling || !isEligible) ? T.border : `linear-gradient(135deg, ${T.teal700}, ${T.teal500})`,
                      color: (selling || !isEligible) ? T.textMuted : T.white,
                      cursor: (selling || !isEligible) ? "not-allowed" : "pointer",
                      boxShadow: (selling || !isEligible) ? "none" : "0 4px 14px rgba(13,148,136,0.3)",
                    }}
                  >
                    {selling ? "Processing…" : "Confirm Sell"}
                  </button>
                </div>
              </div>
            )}

            {/* ══ SUCCESS ══ */}
            {step === STEP.SUCCESS && (
              <div style={{ textAlign: "center", padding: "16px 0 8px", animation: "slideUp2 .3s ease both" }}>
                <div style={{
                  width: 64, height: 64, borderRadius: "50%",
                  background: T.greenDim, border: `2px solid ${T.greenBorder}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 16px", fontSize: 28,
                  animation: "checkPop .4s cubic-bezier(.34,1.56,.64,1) .1s both",
                }}>✓</div>

                <div style={{ fontSize: 18, fontWeight: 700, color: T.textPrimary, fontFamily: "'Outfit', sans-serif", marginBottom: 6 }}>
                  Sale Successful!
                </div>
                <div style={{ fontSize: 13, color: T.textMuted, fontFamily: "'Outfit', sans-serif", marginBottom: 6 }}>
                  You sold{" "}
                  <span style={{ color: T.teal700, fontWeight: 700 }}>{fmt(tokensToSell)} JMC</span>{" "}
                  to the company.
                </div>

                {previewData?.totalInrRecives != null && (
                  <div style={{
                    background: T.teal50, border: `1px solid ${T.teal300}`,
                    borderRadius: 12, padding: "12px 16px", margin: "16px 0",
                    fontSize: 22, fontWeight: 700, color: T.teal700,
                    fontFamily: "'DM Serif Display', serif",
                  }}>
                    ₹{fmt(previewData.totalInrRecives)}
                    <div style={{ fontSize: 11, color: T.textMuted, fontFamily: "'Outfit', sans-serif", fontWeight: 500, marginTop: 3 }}>
                      credited to your account
                    </div>
                  </div>
                )}

                <button
                  onClick={handleClose}
                  style={{
                    width: "100%", padding: "14px",
                    background: `linear-gradient(135deg, ${T.teal700}, ${T.teal500})`,
                    color: T.white, border: "none", borderRadius: 10,
                    fontSize: 14, fontWeight: 700, fontFamily: "'Outfit', sans-serif",
                    cursor: "pointer", marginTop: 6,
                    boxShadow: "0 4px 14px rgba(13,148,136,0.3)",
                    minHeight: 48,
                  }}
                >Done</button>
              </div>
            )}

          </div>{/* /stc-body */}
        </div>{/* /stc-card */}
      </div>{/* /stc-backdrop */}
    </>
  );
}