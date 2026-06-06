import React, { useState, useEffect, Suspense } from 'react';
import { useGetWeekInfoQuery } from './mineReferralApiSlice';
import Loader from '../../../../ReusableComponents/Loader/loader';
import { useUserDataQuery } from "../dashBoard/DashboardApliSlice";
const ReferralModal = React.lazy(() => import('../../../../ReusableComponents/modals/referalModal'));
import { formatDateWithAmPm } from '../../../../utils/crypto'
const T = {
    teal50: '#E1F5EE',
    teal100: '#9FE1CB',
    teal200: '#5DCAA5',
    teal400: '#1D9E75',
    teal600: '#0F6E56',
    teal800: '#085041',
    teal900: '#04342C',
};

/* ── Responsive hook ── */
const useWindowWidth = () => {
    const [width, setWidth] = useState(
        typeof window !== 'undefined' ? window.innerWidth : 1024
    );
    useEffect(() => {
        const handler = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handler);
        return () => window.removeEventListener('resize', handler);
    }, []);
    return width;
};

const styles = {
    root: {
        minHeight: '100vh',
        background: '#f7fdfb',
        padding: '1.5rem 1rem 3rem',
        fontFamily: "'DM Sans', sans-serif",
    },
    inner: { maxWidth: 1500, margin: '0 auto' },

    topStrip: {
        display: 'flex',
        alignItems: 'stretch',
        gap: 12,
        marginBottom: 14,
        flexWrap: 'wrap',
    },
    weekBanner: {
        flex: 1,
        minWidth: 220,
        background: T.teal50,
        border: `0.5px solid ${T.teal200}`,
        borderRadius: 16,
        padding: '1rem 1.25rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 12,
    },
    weekPill: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: '0.07em',
        textTransform: 'uppercase',
        color: T.teal800,
        background: T.teal100,
        borderRadius: 99,
        padding: '3px 10px',
        marginBottom: 6,
    },
    weekHeading: { fontSize: 20, fontWeight: 700, color: T.teal900, margin: 0 },
    weekRange: { fontSize: 12, color: T.teal600, marginTop: 3 },
    activeBadge: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        fontSize: 12,
        fontWeight: 600,
        color: T.teal800,
        background: T.teal100,
        border: `0.5px solid ${T.teal200}`,
        borderRadius: 99,
        padding: '5px 12px',
        whiteSpace: 'nowrap',
        alignSelf: 'flex-start',
    },
    closedBadge: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        fontSize: 12,
        fontWeight: 600,
        color: '#5F5E5A',
        background: '#F1EFE8',
        border: '0.5px solid #B4B2A9',
        borderRadius: 99,
        padding: '5px 12px',
        whiteSpace: 'nowrap',
        alignSelf: 'flex-start',
    },
    pulse: { width: 7, height: 7, borderRadius: '50%', background: T.teal400 },

    statCol: { display: 'flex', flexDirection: 'column', gap: 10, minWidth: 140 },
    statTile: {
        background: '#fff',
        border: '0.5px solid #e0ece7',
        borderRadius: 14,
        padding: '10px 14px',
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        flex: 1,
    },
    tileIcon: {
        width: 32, height: 32,
        borderRadius: 8,
        background: T.teal50,
        color: T.teal600,
        fontSize: 16,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
    },
    tileLabel: { fontSize: 11, color: '#888', textTransform: 'uppercase', letterSpacing: '0.06em' },
    tileVal: { fontSize: 15, fontWeight: 700, color: T.teal900 },
    tileJmc: { fontSize: 11, color: T.teal600, marginLeft: 2 },

    midGrid: {
        display: 'grid',
        gap: 14,
        marginBottom: 14,
    },
    listPanel: {
        background: '#fff',
        border: '0.5px solid #e0ece7',
        borderRadius: 16,
        overflow: 'hidden',
    },
    panelHead: {
        padding: '13px 16px',
        borderBottom: '0.5px solid #e0ece7',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    phLeft: { display: 'flex', alignItems: 'center', gap: 9 },
    phIcon: {
        width: 30, height: 30,
        borderRadius: 7,
        background: T.teal50,
        color: T.teal600,
        fontSize: 15,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    phTitle: { fontSize: 14, fontWeight: 600, color: T.teal900, margin: 0 },
    phSub: { fontSize: 11, color: '#888', marginTop: 1 },
    countChip: {
        fontSize: 11,
        fontWeight: 600,
        background: T.teal50,
        color: T.teal800,
        border: `0.5px solid ${T.teal200}`,
        borderRadius: 99,
        padding: '3px 10px',
    },

    disbRow: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '12px 16px',
        borderBottom: '0.5px solid #e0ece7',
        cursor: 'default',
        transition: 'background 0.15s',
    },
    avatar: {
        width: 38, height: 38,
        borderRadius: '50%',
        background: T.teal100,
        color: T.teal800,
        fontSize: 13,
        fontWeight: 700,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
    },
    drMain: { flex: 1, minWidth: 0 },
    drName: { fontSize: 13, fontWeight: 600, color: T.teal900, display: 'flex', alignItems: 'center', gap: 6 },
    lvChip: {
        fontSize: 10,
        fontWeight: 700,
        color: T.teal800,
        background: T.teal100,
        borderRadius: 99,
        padding: '2px 7px',
        flexShrink: 0,
    },
    drHandle: { fontSize: 11, color: '#888', marginTop: 2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' },
    drTime: { fontSize: 11, color: '#aaa', marginTop: 3, display: 'flex', alignItems: 'center', gap: 4, flexWrap: 'wrap' },
    okDot: { width: 5, height: 5, borderRadius: '50%', background: T.teal400, flexShrink: 0 },
    drAmt: { textAlign: 'right', flexShrink: 0 },
    drVal: { fontSize: 15, fontWeight: 700, color: T.teal600, whiteSpace: 'nowrap' },
    drFlow: { fontSize: 10, color: '#bbb', marginTop: 2, whiteSpace: 'nowrap' },

    sidePanel: { display: 'flex', flexDirection: 'column', gap: 12 },
    summaryBox: {
        background: '#fff',
        border: '0.5px solid #e0ece7',
        borderRadius: 16,
        padding: '14px 16px',
    },
    sbTitle: {
        fontSize: 11,
        textTransform: 'uppercase',
        letterSpacing: '0.07em',
        color: '#888',
        fontWeight: 600,
        marginBottom: 12,
    },
    balRow: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '8px 0',
        borderBottom: '0.5px solid #e0ece7',
    },
    balRowLast: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '8px 0',
    },
    blLabel: { fontSize: 12, color: '#888', display: 'flex', alignItems: 'center', gap: 5 },
    blVal: { fontSize: 13, fontWeight: 700, color: T.teal900 },
    blValEarned: { fontSize: 13, fontWeight: 700, color: T.teal400 },

    detailsBox: {
        background: T.teal50,
        border: `0.5px solid ${T.teal200}`,
        borderRadius: 16,
        padding: '14px 16px',
    },
    dbRow: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '5px 0',
    },
    dbLabel: { fontSize: 12, color: T.teal600 },
    dbVal: { fontSize: 12, fontWeight: 600, color: T.teal900 },

    inviteBar: {
        background: '#fff',
        border: '0.5px solid #e0ece7',
        borderRadius: 16,
        padding: '14px 18px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 12,
    },
    ibLeft: { display: 'flex', alignItems: 'center', gap: 12 },
    ibIcon: {
        width: 38, height: 38,
        borderRadius: 9,
        background: T.teal50,
        color: T.teal600,
        fontSize: 18,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
    },
    ibText: { fontSize: 14, fontWeight: 600, color: T.teal900 },
    ibSub: { fontSize: 11, color: '#888', marginTop: 2 },
    ibBtn: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 6,
        fontSize: 13,
        fontWeight: 600,
        color: T.teal800,
        background: T.teal100,
        border: `0.5px solid ${T.teal200}`,
        borderRadius: 9,
        padding: '8px 16px',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        transition: 'background 0.15s',
    },

    emptyState: { padding: '3rem 1.5rem', textAlign: 'center' },
    emptyIcon: {
        width: 56, height: 56,
        borderRadius: '50%',
        background: T.teal50,
        color: T.teal600,
        fontSize: 24,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 1rem',
    },
    emptyTitle: { fontSize: 15, fontWeight: 600, color: T.teal900, marginBottom: 6 },
    emptySub: { fontSize: 13, color: '#888' },

    errorBox: {
        background: '#fff',
        border: '0.5px solid #F09595',
        borderRadius: 14,
        padding: '1.25rem 1.5rem',
        maxWidth: 420,
        margin: '4rem auto',
    },
    errorTitle: { fontSize: 15, fontWeight: 600, color: '#A32D2D', marginBottom: 6 },
    errorMsg: { fontSize: 13, color: '#888' },
};

const getInitials = (name = '') =>
    name.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase() || '?';

const formatDate = (d) => {
    if (!d) return 'N/A';
    return new Date(d).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        timeZone: 'UTC'
    });
};

const formatDateTime = (d) => {
    if (!d) return 'N/A';
    return new Date(d).toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'UTC'
    });
};
const Icon = ({ name, size = 16 }) => (
    <i className={`ti ti-${name}`} style={{ fontSize: size }} aria-hidden="true" />
);

const StatTile = ({ icon, label, value, suffix }) => (
    <div style={styles.statTile}>
        <div style={styles.tileIcon}><Icon name={icon} size={16} /></div>
        <div>
            <div style={styles.tileLabel}>{label}</div>
            <div style={styles.tileVal}>
                {value}{suffix && <span style={styles.tileJmc}> {suffix}</span>}
            </div>
        </div>
    </div>
);

const DisbursementRow = ({ disbursement, isLast, isMobile, index }) => {
    const tx = disbursement.transactionId;
    const usr = disbursement.referredUserId;
    const [hovered, setHovered] = React.useState(false);

    return (
        <div
            style={{
                ...styles.disbRow,
                gap: isMobile ? 10 : 16,
                padding: isMobile ? '12px 14px' : '16px 20px',
                background: hovered ? T.teal50 : '#fff',
                ...(isLast ? { borderBottom: 'none' } : {}),
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* S.No */}
            <div style={{
                minWidth: isMobile ? 30 : 40,
                fontSize: 13,
                color: '#999',
                fontWeight: 500
            }}>
                {index + 1}
            </div>

            {/* Left: Avatar & User Info */}
            <div style={{ display: 'flex', gap: 12, alignItems: 'center', flex: 1, minWidth: 0 }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ ...styles.drName, marginBottom: 4 }}>
                        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            {usr?.name || 'Anonymous'}
                        </span>
                        <span style={styles.lvChip}> Joined at L{disbursement.levelApplied}</span>
                    </div>
                    <div style={styles.drHandle}>
                        {usr?.username}{!isMobile && ` · ${usr?.email}`}
                    </div>
                    {isMobile && (
                        <div style={{ fontSize: 12, color: '#666', marginTop: 4 }}>
                            {formatDateWithAmPm(disbursement.creditedAt)}
                        </div>
                    )}
                </div>
            </div>

            {/* Middle: Amount */}
            <div style={{
                textAlign: isMobile ? 'right' : 'center',
                minWidth: isMobile ? 'auto' : 120
            }}>
                <div style={{
                    ...styles.drVal,
                    fontSize: isMobile ? 15 : 15,
                    fontWeight: 600,
                    color: T.teal600,
                    marginBottom: 4
                }}>
                    +{disbursement.amountCredited} ₹
                </div>
            </div>

            {/* Right: Time & Status */}
            {!isMobile && (
                <div style={{
                    textAlign: 'right',
                    minWidth: 140
                }}>
                    <div style={{ fontSize: 13, color: '#666', marginBottom: 4 }}>
                        {formatDateWithAmPm(disbursement.creditedAt)}
                    </div>
                </div>
            )}
        </div>
    );
};
const EmptyState = () => (
    <div style={styles.emptyState}>
        <div style={styles.emptyIcon}><Icon name="users" size={24} /></div>
        <div style={styles.emptyTitle}>No disbursements yet</div>
        <div style={styles.emptySub}>No referral bonuses have been disbursed this week.</div>
    </div>
);

const InfoModal = ({ show, onClose }) => {
    if (!show) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1000,
                }}
                onClick={onClose}
            />

            {/* Modal */}
            <div
                style={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    background: '#fff',
                    borderRadius: 16,
                    padding: '24px',
                    maxWidth: 420,
                    width: '90%',
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
                    zIndex: 1001,
                }}
                onClick={e => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        background: 'none',
                        border: 'none',
                        fontSize: 20,
                        cursor: 'pointer',
                        color: '#999',
                        padding: '4px 8px',
                    }}
                >
                    ✕
                </button>

                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                    <div style={{
                        width: 40,
                        height: 40,
                        borderRadius: 8,
                        background: T.teal50,
                        color: T.teal600,
                        fontSize: 18,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Icon name="alert-circle" size={20} />
                    </div>
                    <div>
                        <h3 style={{ fontSize: 16, fontWeight: 700, color: T.teal900, margin: 0 }}>
                            Important Note
                        </h3>
                    </div>
                </div>

                {/* Content */}
                <div style={{ marginBottom: 20 }}>
                    <div style={{ fontSize: 13, lineHeight: '1.6', color: '#555' }}>
                        <p style={{ marginBottom: 12 }}>
                            <strong style={{ color: T.teal900 }}>Reward Validity:</strong><br />
                            This week's reward is valid only for the first <strong>100 new referrals</strong>. Once you reach 100 referrals in this referral cycle, no additional rewards will be credited.
                        </p>
                        <p style={{ marginBottom: 12 }}>
                            <strong style={{ color: T.teal900 }}>Next Cycle:</strong><br />
                            To earn rewards again next week, you must refer <strong>100 new users</strong> in the next referral cycle. The counter resets at the beginning of each new week (Monday to Sunday mid night).
                        </p>
                        <p style={{ marginBottom: 0 }}>
                            <strong style={{ color: T.teal900 }}>Credit Policy:</strong><br />
                            All earned amounts will be credited to your <strong>Available Balance</strong> and can be withdrawn or used as per platform policies.
                        </p>
                    </div>
                </div>

                {/* Footer */}
                <button
                    onClick={onClose}
                    style={{
                        width: '100%',
                        padding: '10px 16px',
                        background: T.teal100,
                        color: T.teal800,
                        border: `0.5px solid ${T.teal200}`,
                        borderRadius: 9,
                        fontSize: 13,
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'background 0.15s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = T.teal200}
                    onMouseLeave={e => e.currentTarget.style.background = T.teal100}
                >
                    Got it
                </button>
            </div>
        </>
    );
};

const WeeklyBonus = () => {
    const { data: userData, userError, isUserLoading } = useUserDataQuery();
    // console.log(userData?.data?.username, "hello")
    const { data, isLoading, isError, error } = useGetWeekInfoQuery();
    const [showModal, setShowModal] = useState(false);
    const width = useWindowWidth();
    const isMobile = width < 640;
    const isTablet = width >= 640 && width < 900;
    const isDesktop = width >= 900;
    const [showInfoModal, setShowInfoModal] = useState(false);
    if (isLoading) return <Loader />;

    if (isError) {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '40px 20px',
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                textAlign: 'center'
            }}>
                <div style={{
                    width: '60px',
                    height: '60px',
                    backgroundColor: '#ffe4e4',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '28px',
                    marginBottom: '16px'
                }}>
                    ❌
                </div>
                <div style={{ fontWeight: '700', color: '#1a1a1a', fontSize: '16px', marginBottom: '8px' }}>
                    Error loading weekly bonus
                </div>
                <div style={{ color: '#888', fontSize: '13px', maxWidth: '280px', lineHeight: '1.5' }}>
                    {error?.data?.message || 'Something went wrong'}
                </div>
                <button
                    onClick={() => window.location.reload()}
                    style={{
                        marginTop: '20px',
                        padding: '8px 24px',
                        backgroundColor: '#e53e3e',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontSize: '14px',
                        fontWeight: '600'
                    }}>
                    Try Again
                </button>
            </div>
        );
    }

    const weekData = data?.data?.data;
    const summary = weekData?.summary || 20;
    const disbursements = summary?.disbursements || [];
    const first = disbursements[0];
    const last = disbursements[disbursements.length - 1];
    const isClosed = summary?.isWeekClosed;
    const hasDisbursements = disbursements.length > 0;

    return (
        <div style={{ ...styles.root, padding: isMobile ? '1rem 0.75rem 2.5rem' : '1.5rem 1rem 3rem' }}>
            <link
                href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap"
                rel="stylesheet"
            />
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css"
            />

            {/* Referral Modal */}
            {showModal && (
                <Suspense fallback={null}>
                    <ReferralModal
                        show={showModal}
                        onHide={() => setShowModal(false)}
                        userData={userData?.data}
                    />
                </Suspense>
            )}

            <div style={styles.inner}>

                {/* ── Top strip ── */}
                {isMobile ? (
                    /* ── MOBILE: banner full width, stats 2×2 grid below ── */
                    <>
                        <div style={{
                            ...styles.weekBanner,
                            marginBottom: 12,
                            alignItems: 'flex-start',
                        }}>
                            <div>
                                <div style={styles.weekPill}>
                                    <Icon name="calendar-week" size={12} /> Week {weekData?.weekNumber}
                                </div>
                                <h1 style={{ ...styles.weekHeading, fontSize: 18 }}>Weekly Bonus</h1>
                                <p style={styles.weekRange}>
                                    {formatDate(weekData?.weekStart)} – {formatDate(weekData?.weekEnd)}
                                </p>
                            </div>
                            <div style={isClosed ? styles.closedBadge : styles.activeBadge}>
                                {!isClosed && <span style={styles.pulse} />}
                                {isClosed ? 'Week Completed' : 'Week Active'}
                            </div>
                        </div>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: 10,
                            marginBottom: 12,
                        }}>
                            <StatTile icon="users" label="Referrals" value={summary?.referralCount ?? 0} />
                            <StatTile icon="award" label="Level" value={`L${summary?.currentLevel || 1}`} />
                            <StatTile icon="currency-rupee" label="Per referral" value={summary?.perReferralAmount || 20} suffix="₹" />
                            <StatTile icon="trending-up" label="Disbursed" value={summary?.totalDisbursed ?? 0} suffix="₹" />
                        </div>
                    </>
                ) : (
                    /* ── TABLET / DESKTOP: original horizontal strip ── */
                    <div style={styles.topStrip}>
                        <div style={styles.weekBanner}>
                            <div>
                                <div style={styles.weekPill}>
                                    <Icon name="calendar-week" size={12} /> Week {weekData?.weekNumber}
                                </div>
                                <h1 style={styles.weekHeading}>Weekly Bonus</h1>
                                <p style={styles.weekRange}>
                                    {formatDate(weekData?.weekStart)} – {formatDate(weekData?.weekEnd)}
                                </p>
                            </div>
                            <div style={isClosed ? styles.closedBadge : styles.activeBadge}>
                                {!isClosed && <span style={styles.pulse} />}
                                {isClosed ? 'Week Completed' : 'Week Active'}
                            </div>
                        </div>
                        <div style={styles.statCol}>
                            <StatTile icon="users" label="Referrals" value={summary?.referralCount ?? 0} />
                            <StatTile icon="award" label="Level" value={`L${summary?.currentLevel || 1}`} />
                        </div>
                        <div style={styles.statCol}>
                            <StatTile icon="currency-rupee" label="Per referral" value={summary?.perReferralAmount || 20} suffix=" ₹" />
                            <StatTile icon="trending-up" label="Disbursed" value={summary?.totalDisbursed ?? 0} suffix=" ₹" />
                        </div>
                    </div>
                )}

                {/* ── Mid grid ── */}
                <div style={{
                    ...styles.midGrid,
                }}>
                    {/* Disbursement list */}
                    <div style={styles.listPanel}>
                        <div style={{ ...styles.panelHead, padding: isMobile ? '12px 14px' : '13px 16px' }}>
                            <div style={styles.phLeft}>
                                <div style={styles.phIcon}><Icon name="history" size={15} /></div>
                                <div>
                                    <p style={styles.phTitle}>Disbursement history</p>
                                    <p style={styles.phSub}>This week's transactions</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                <span style={styles.countChip}>{disbursements.length} total</span>
                                <button
                                    onClick={() => setShowInfoModal(true)}
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        cursor: 'pointer',
                                        color: T.teal600,
                                        fontSize: 18,
                                        padding: '4px 8px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transition: 'color 0.15s',
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.color = T.teal800}
                                    onMouseLeave={e => e.currentTarget.style.color = T.teal600}
                                    title="Important note about rewards"
                                >
                                    <Icon name="info-circle" size={18} />
                                </button>
                            </div>
                        </div>

                        {hasDisbursements ? (
                            disbursements.map((d, i) => (
                                <DisbursementRow
                                    key={d._id}
                                    disbursement={d}
                                    index={i}
                                    isLast={i === disbursements.length - 1}
                                    isMobile={isMobile}
                                />
                            ))
                        ) : (
                            <EmptyState />
                        )}
                        {showInfoModal && (
                            <InfoModal
                                show={showInfoModal}
                                onClose={() => setShowInfoModal(false)}
                            />
                        )}
                    </div>
                </div>



                {/* ── Invite bar ── */}
                <div style={{
                    ...styles.inviteBar,
                    flexDirection: isMobile ? 'column' : 'row',
                    alignItems: isMobile ? 'stretch' : 'center',
                    padding: isMobile ? '14px' : '14px 18px',
                }}>
                    <div style={styles.ibLeft}>
                        <div style={styles.ibIcon}><Icon name="gift" size={18} /></div>
                        <div>
                            <div style={styles.ibText}>Invite more friends</div>
                            <div style={styles.ibSub}>
                                Earn {summary?.perReferralAmount || 20} JMC for every referral you bring in
                            </div>
                        </div>
                    </div>
                    <button
                        style={{
                            ...styles.ibBtn,
                            width: isMobile ? '100%' : 'auto',
                        }}
                        onClick={() => setShowModal(true)}
                        onMouseEnter={e => e.currentTarget.style.background = T.teal200}
                        onMouseLeave={e => e.currentTarget.style.background = T.teal100}
                    >
                        <Icon name="share" size={14} /> Share invite link
                    </button>
                </div>

            </div>
        </div>
    );
};

export default WeeklyBonus;