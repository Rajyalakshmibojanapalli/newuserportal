import React, { useState, useEffect } from "react";
import styles from "./buyTransactionDetails.module.css";
import { Search } from "lucide-react";

const ITEMS_PER_PAGE = 10;

const TransactionDetails = ({ data }) => {
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredList = data.filter(
    (item) =>
      item.transactionId.toLowerCase().includes(query.toLowerCase()) ||
      item.updatedBy.toLowerCase().includes(query.toLowerCase())
  );

  const totalPages = Math.ceil(filteredList.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedList = filteredList.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [query]);

  // Shortened column headings for compactness
  const headings = [
    "No",
    "Txn ID",
    "Amt",
    "Type",
    "Pay Method",
    "Curr",
    "Txn Date",
    "Status",
    "Reason",
    "Updated By",
    "Updated On",
  ];

  return (
    <div
      className={styles.container}
      style={{
        width: "100%",
        fontSize: "0.85rem",
       
      }}
    >
      {/* Header */}
      <div className={styles.header} style={{ marginBottom: "12px" }}>
        <h2
          className={styles.title}
          style={{ fontSize: "1.1rem", color: "#084e54" }}
        >
          Team Transactions
        </h2>

<div className="flex items-center border border-white rounded-xl px-3 py-2 sm:w-60 focus-within:border-2 focus-within:border-white transition-all duration-200 shadow-sm bg-white/10 backdrop-blur">
          <input
            type="text"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="bg-transparent text-white placeholder-white focus:outline-none flex-grow text-sm"
          />
          <Search className="text-white" size={16} />
        </div>
      </div>

      {paginatedList.length > 0 ? (
        <>
          <div
            className={styles.tableWrapper}
            style={{
              overflowX: "auto",
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <style>
              {`
                .${styles.tableWrapper}::-webkit-scrollbar {
                  display: none;
                }
              `}
            </style>

            <table
              className={styles.table}
              style={{
                width: "100%",
                borderCollapse: "collapse",
                minWidth: "850px",
                tableLayout: "fixed",
                fontSize: "0.85rem",
              }}
            >
              <thead className={styles.thead}>
                <tr>
                  {headings.map((heading, i) => (
                    <th
                      key={i}
                      className={`${styles.th} ${
                        i === 0 ? styles.thFirst : ""
                      }`}
                      title={heading}
                      style={{
                        backgroundColor: "#f3f4f6",
                        opacity: 1,
                        padding: "8px 10px",
                        border: "1px solid #ddd",
                        textAlign: "left",
                        whiteSpace: "nowrap",
                        fontWeight: "600",
                        color: "#111",
                        fontSize: "0.85rem",
                      }}
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {paginatedList.map((item, idx) => (
                  <tr
                    key={startIndex + idx}
                    style={{
                      backgroundColor:
                        idx % 2 === 0
                          ? "rgba(243, 244, 246, 0.7)"
                          : "rgba(255, 255, 255, 1)",
                      verticalAlign: "top",
                    }}
                  >
                    {[
                      item.sno,
                      item.transactionId,
                      item.amount,
                      item.type,
                      item.paymentMethod,
                      item.currency,
                      item.transactionDate,
                      item.status,
                      item.reason,
                      item.updatedBy,
                      item.updatedOn,
                    ].map((val, i) => (
                      <td
                        key={i}
                        title={typeof val === "string" ? val : undefined}
                        style={{
                          padding: "8px 10px",
                          border: "1px solid #ddd",
                          color: "#333",
                          whiteSpace: "normal",
                          wordWrap: "break-word",
                          wordBreak: "break-word",
                          textAlign: "left",
                          maxWidth: i === 8 || i === 9 ? "180px" : "auto",
                          fontSize: "0.85rem",
                        }}
                      >
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center gap-4 mt-3">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="px-3 py-1.5 bg-gray-300 rounded disabled:opacity-50"
              style={{ fontSize: "0.85rem" }}
            >
              Previous
            </button>

            <span style={{ fontSize: "0.85rem" }}>
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-3 py-1.5 bg-gray-300 rounded disabled:opacity-50"
              style={{ fontSize: "0.85rem" }}
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <div
          className={styles.noData}
          style={{ fontSize: "0.9rem", padding: "16px" }}
        >
          No data found
        </div>
      )}
    </div>
  );
};

export default TransactionDetails;
