import React, { useState, useEffect } from "react";
import styles from "./transactionDetails.module.css";
import { Search } from "lucide-react";

const ITEMS_PER_PAGE = 10;

const TransactionDetails = ({ list }) => {
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredList = list.filter(
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

  const handlePrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  useEffect(() => setCurrentPage(1), [query]);

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
        fontSize: "0.85rem",
        background:
          "radial-gradient(circle at 50% 30%, #20934a 0%,rgb(65, 187, 174) 70%)",
        borderRadius: "8px",
        padding: "1rem",
      }}
    >
      {/* Header */}
      <div
  className={`${styles.header} flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2`}
  style={{ marginBottom: "12px" }}
>
  <h2
    className={styles.title}
    style={{ fontSize: "1.1rem", color: "#084e54" }}
  >
    Team Transactions
  </h2>

 <div className="flex items-center rounded-xl border border-white px-3 py-1.5 w-full max-w-sm sm:max-w-xs md:max-w-[200px] lg:max-w-[288px] transition-all duration-200">

    <input
      type="text"
      placeholder="Search"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="bg-transparent text-white placeholder-white focus:outline-none flex-grow"
      style={{ fontSize: "0.85rem", padding: "4px 8px", color: "white" }}
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
              paddingBottom: "1rem",
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
                minWidth: "900px",
                width: "100%",
                borderCollapse: "collapse",
                tableLayout: "fixed",
                fontSize: "0.85rem",
              }}
            >
              <thead>
                <tr>
                  {headings.map((heading, i) => (
                    <th
                      key={i}
                      className={`${styles.th}`}
                      title={heading}
                      style={{
                        backgroundColor: "#f3f4f6",
                        padding: "8px 10px",
                        border: "1px solid #ddd",
                        textAlign: "left",
                        whiteSpace: "nowrap",
                        fontWeight: "600",
                        color: "#111",
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

          {/* Pagination */}
          <div className="flex justify-center items-center gap-4 mt-3">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded font-medium transition-all duration-200 ${
                currentPage === 1
                  ? "bg-[#a5d6a7] text-white cursor-not-allowed"
                  : "bg-[#20934a] text-white hover:bg-[#1c7f3e]"
              }`}
              style={{ fontSize: "0.85rem" }}
            >
              Previous
            </button>

            <span
              style={{ fontSize: "0.85rem" }}
              className="text-[#084e54] font-medium"
            >
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded font-medium transition-all duration-200 ${
                currentPage === totalPages
                  ? "bg-[#a5d6a7] text-white cursor-not-allowed"
                  : "bg-[#20934a] text-white hover:bg-[#1c7f3e]"
              }`}
              style={{ fontSize: "0.85rem" }}
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <div
          className={styles.noData}
          style={{ fontSize: "0.9rem", padding: "16px", color: "white" }}
        >
          No data found
        </div>
      )}
    </div>
  );
};

export default TransactionDetails;
