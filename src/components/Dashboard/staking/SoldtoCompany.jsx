import React, { useState } from 'react';
import { useGetNrmlStakingSellLogsQuery } from './stakingApiSlice';
import Pagination from '../../../ReusableComponents/pagination/pagination';
import { ArrowLeft, Hash, ReceiptText, CalendarDays, Coins, IndianRupee, Tag } from 'lucide-react';

const COLUMNS = [
  { label: 'S.No',              key: 'index'   },
  { label: 'Transaction ID',    key: 'txn'     },
  { label: 'Date',              key: 'date'    },
  { label: 'Tokens Sold (JMC)', key: 'tokens'  },
  { label: 'Price / Token',     key: 'price'   },
  { label: 'Total INR Paid',    key: 'inr'     },
  { label: 'Status',            key: 'status'  },
];

const formatTokens = (val) =>
  new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 8 }).format(val || 0);

const formatINR = (val) =>
  new Intl.NumberFormat('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(val || 0);

const formatDate = (str) => {
  if (!str) return '-';
  return str.replace('T', ' ').replace('Z', '').split('.')[0];
};

const StatusBadge = ({ status }) => {
  const isCompleted = status === 'COMPLETED';
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center',
      fontSize: 10, fontWeight: 700, padding: '3px 8px', borderRadius: 6,
      background: isCompleted ? '#ECFDF5' : '#FEF9C3',
      color: isCompleted ? '#065F46' : '#92400E',
      border: `1px solid ${isCompleted ? '#6EE7B7' : '#FDE68A'}`,
      whiteSpace: 'nowrap',
    }}>
      {isCompleted ? '✓ ' : '⏳ '}{status || '-'}
    </span>
  );
};

/* ── Skeleton ── */
const Skeleton = ({ onBack }) => (
  <div className="space-y-5">
    <button onClick={onBack} className="flex items-center gap-2 text-sm text-gray-500">
      <ArrowLeft size={14} /> Back to Dashboard
    </button>
    <div className="rounded-2xl overflow-hidden border border-gray-100">
      <div className="bg-[#085041] px-6 py-4 flex items-center gap-3">
        <div className="h-4 w-48 bg-teal-700 rounded animate-pulse" />
      </div>
      <div className="bg-[#0a5e4a] px-6 py-3 grid grid-cols-7 gap-4">
        {[...Array(7)].map((_, i) => <div key={i} className="h-2.5 bg-teal-800 rounded animate-pulse" />)}
      </div>
      {[...Array(5)].map((_, i) => (
        <div key={i} className="bg-white px-6 py-4 grid grid-cols-7 gap-4 border-b border-gray-100 last:border-0">
          {[...Array(7)].map((_, j) => <div key={j} className="h-3 bg-gray-100 rounded animate-pulse" />)}
        </div>
      ))}
    </div>
  </div>
);

/* ── Error ── */
const ErrorState = ({ onBack, message, refetch }) => (
  <div className="space-y-5">
    <button onClick={onBack} className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 transition-colors">
      <ArrowLeft size={14} /> Back to Dashboard
    </button>
    <div className="bg-white rounded-2xl p-14 text-center border border-gray-100">
      <p className="text-sm text-gray-500 mb-4">{message || 'Failed to load sell logs.'}</p>
      <button onClick={refetch} className="px-5 py-2 text-sm font-medium bg-[#085041] text-white rounded-xl hover:bg-[#0F6E56] transition-colors">
        Try Again
      </button>
    </div>
  </div>
);

/* ── Main Component ── */
const SoldToCompany = ({ onBack }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10);

  const { data: response, isLoading, isError, error, refetch } = useGetNrmlStakingSellLogsQuery({
    page: currentPage,
    limit: pageSize,
  });

  const logs       = response?.data?.logs       || [];
  const pagination = response?.data?.pagination;

  const handlePageChange = (p) => { setCurrentPage(p); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  if (isLoading) return <Skeleton onBack={onBack} />;
  if (isError || !response?.success)
    return <ErrorState onBack={onBack} message={error?.data?.message} refetch={refetch} />;

  return (
    <div className="space-y-5">

      {/* ── Header ── */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            fontSize: 13, fontWeight: 500, padding: '7px 14px',
            borderRadius: 10, border: '0.5px solid #e5e7eb',
            background: '#fff', color: '#374151', cursor: 'pointer',
            transition: 'all .15s', boxShadow: '0 1px 4px rgba(0,0,0,.04)',
            outline: 'none',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = '#9FE1CB'; e.currentTarget.style.color = '#0F6E56'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.color = '#374151'; }}
        >
          <ArrowLeft size={15} /> Back to Dashboard
        </button>
      </div>

      {/* ── Empty ── */}
      {!logs.length ? (
        <div className="bg-white rounded-2xl p-14 text-center border border-gray-100">
          <p className="text-sm font-semibold text-gray-800 mb-1">No sell logs yet</p>
          <p className="text-xs text-gray-400">Your company sell transactions will appear here</p>
        </div>
      ) : (
        <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-xl shadow-black/10">

          {/* ── Panel Header ── */}
          <div className="bg-[#f4fefb] px-6 py-4 flex items-center justify-between">
            <p className="text-sm font-semibold text-[#0F6E56]">Sold to Company Logs</p>
            {pagination?.totalCount > 0 && (
              <span className="text-xs font-semibold text-[#085041] bg-[#9FE1CB] px-3 py-1 rounded-full">
                {pagination.totalCount} records
              </span>
            )}
          </div>

          {/* ── Desktop Table ── */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full" style={{ tableLayout: 'fixed' }}>
              <colgroup>
                <col style={{ width: '5%' }} />
                <col style={{ width: '22%' }} />
                <col style={{ width: '18%' }} />
                <col style={{ width: '15%' }} />
                <col style={{ width: '13%' }} />
                <col style={{ width: '13%' }} />
                <col style={{ width: '14%' }} />
              </colgroup>
              <thead>
                <tr className="bg-[#0a5e4a] border-b border-[#0F6E56]">
                  {COLUMNS.map(({ label }) => (
                    <th key={label} className="px-4 py-3 text-left">
                      <span className="text-[10px] font-semibold text-white uppercase tracking-widest whitespace-nowrap">
                        {label}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white">
                {logs.map((row, index) => (
                  <tr
                    key={row._id || index}
                    className="border-b border-gray-100 last:border-0 hover:bg-[#E1F5EE]/50 transition-colors duration-100"
                  >
                    {/* S.No */}
                    <td className="px-4 py-3.5">
                      <span className="text-xs text-gray-400 font-medium">
                        {(currentPage - 1) * pageSize + index + 1}
                      </span>
                    </td>

                    {/* Transaction ID */}
                    <td className="px-4 py-3.5">
                      <span className="text-[11px] font-mono text-gray-500 truncate block">
                        {row._id || '-'}
                      </span>
                    </td>

                    {/* Date */}
                    <td className="px-4 py-3.5">
                      <span className="text-xs text-gray-500 whitespace-nowrap">
                        {formatDate(row.createdAt)}
                      </span>
                    </td>

                    {/* Tokens Sold */}
                    <td className="px-4 py-3.5">
                      <span className="inline-flex items-center gap-1 bg-[#E1F5EE] border border-[#5DCAA5] text-[#085041] text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap">
                        {formatTokens(row.tokensSold)} JMC
                      </span>
                    </td>

                    {/* Price per Token */}
                    <td className="px-4 py-3.5">
                      <span className="text-xs font-semibold text-gray-700">
                        ₹{formatINR(row.pricePerTokenInr)}
                      </span>
                    </td>

                    {/* Total INR */}
                    <td className="px-4 py-3.5">
                      <span className="text-xs font-bold text-[#0F6E56]">
                        ₹{formatINR(row.totalInrPaid)}
                      </span>
                    </td>

                    {/* Status */}
                    <td className="px-4 py-3.5">
                      <StatusBadge status={row.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── Mobile Cards ── */}
          <div className="md:hidden bg-gray-50 divide-y divide-gray-200">
            {logs.map((row, index) => (
              <div
                key={row._id || index}
                className="bg-white mx-3 my-2 rounded-xl border border-gray-100 overflow-hidden shadow-sm"
              >
                {/* Card top bar */}
                <div className="bg-[#085041] px-4 py-2.5 flex items-center justify-between">
                  <span className="text-[10px] font-semibold text-[#5DCAA5]">
                    #{(currentPage - 1) * pageSize + index + 1}
                  </span>
                  <StatusBadge status={row.status} />
                </div>

                {/* Card body */}
                <div className="px-4 py-3 space-y-2.5">

                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-gray-400 font-medium">Tokens Sold</span>
                    <span className="inline-flex items-center gap-1 bg-[#E1F5EE] border border-[#5DCAA5] text-[#085041] text-sm font-bold px-3 py-1 rounded-full">
                      {formatTokens(row.tokensSold)}
                      <span className="text-[10px] text-[#0F6E56] font-semibold ml-0.5">JMC</span>
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-gray-400 font-medium">Price / Token</span>
                    <span className="text-xs font-semibold text-gray-700">₹{formatINR(row.pricePerTokenInr)}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-gray-400 font-medium">Total INR Paid</span>
                    <span className="text-xs font-bold text-[#0F6E56]">₹{formatINR(row.totalInrPaid)}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-gray-400 font-medium">Date</span>
                    <span className="text-xs text-gray-600">{formatDate(row.createdAt)}</span>
                  </div>

                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-[10px] text-gray-400 mb-0.5 font-medium">Transaction ID</p>
                    <p className="text-[11px] font-mono text-gray-500 break-all leading-relaxed">
                      {row._id || '-'}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ── Pagination ── */}
          {pagination && pagination.totalPages > 1 && (
            <div className="bg-white border-t border-gray-100">
              <Pagination
                currentPage={currentPage}
                totalPages={pagination.totalPages}
                totalItems={pagination.totalCount}   // ← API uses totalCount not total
                itemsPerPage={pageSize}
                onPageChange={handlePageChange}
                isLoading={isLoading}
              />
            </div>
          )}

        </div>
      )}
    </div>
  );
};

export default SoldToCompany;