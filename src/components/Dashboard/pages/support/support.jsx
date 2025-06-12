import React, { useState, useEffect } from "react";
import styles from "./support.module.css";
import { Search } from "lucide-react";

const ITEMS_PER_PAGE = 10;

const Support = ({ list }) => {
  // Dummy data for testing - you can remove this later
  const dummyData = [
    {
      ticketId: "TKT1001",
      subject: "Login Issue",
      type: "Bug",
      status: "Open",
      priority: "High",
      assignedTo: "Alice",
      createdOn: "2025-06-01",
      updatedOn: "2025-06-02",
    },
    {
      ticketId: "TKT1002",
      subject: "Payment Failed",
      type: "Issue",
      status: "Closed",
      priority: "Medium",
      assignedTo: "Bob",
      createdOn: "2025-06-01",
      updatedOn: "2025-06-03",
    },
    {
      ticketId: "TKT1003",
      subject: "Feature Request",
      type: "Request",
      status: "Pending",
      priority: "Low",
      assignedTo: "Charlie",
      createdOn: "2025-06-04",
      updatedOn: "2025-06-05",
    },
    
  ];

  // Use dummyData if list is empty or undefined
  const dataList = list && list.length > 0 ? list : dummyData;

  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredList = dataList.filter(
    (item) =>
      item.ticketId.toLowerCase().includes(query.toLowerCase()) ||
      item.status.toLowerCase().includes(query.toLowerCase())
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
    "Ticket ID",
    "Subject",
    "Type",
    "Status",
    "Priority",
    "Assigned To",
    "Created On",
    "Updated On",
  ];

  return (
    <div
      className={styles.container}
      style={{
        background:
          "radial-gradient(circle at 50% 30%, #20934a 0%,rgb(65, 187, 174) 70%)",
      }}
    >
<div className={styles.header}>
  <h2 className={styles.title}>Support Tickets</h2>
  <div className={styles.actions}>
    <button className={styles.createBtn}>Create New</button>
    <div className={styles.searchBox}>
      <input
        type="text"
        placeholder="Search Ticket ID or Status"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="bg-transparent text-white placeholder-white focus:outline-none flex-grow width: 100%    
    minWidth: 0"
        style={{ fontSize: "0.85rem", padding: "4px 4px", color: "white" }}
      />
      <Search className={styles.searchIcon} size={16} />
    </div>
  </div>
</div>

      {paginatedList.length > 0 ? (
        <>
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  {headings.map((heading, i) => (
                    <th key={i} className={styles.th}>
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {paginatedList.map((item, idx) => (
                  <tr
                    key={startIndex + idx}
                    className={idx % 2 === 0 ? styles.trEven : styles.trOdd}
                  >
                    {[
                      item.ticketId,
                      item.subject,
                      item.type,
                      item.status,
                      item.priority,
                      item.assignedTo,
                      item.createdOn,
                      item.updatedOn,
                    ].map((val, i) => (
                      <td key={i} className={styles.td}>
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className={styles.pagination}>
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`${styles.pageButton} ${
                currentPage === 1 && styles.disabled
              }`}
            >
              Previous
            </button>
            <span className={styles.pageIndicator}>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`${styles.pageButton} ${
                currentPage === totalPages && styles.disabled
              }`}
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <div className={styles.noData}>No support tickets found</div>
      )}
    </div>
  );
};

export default Support;
