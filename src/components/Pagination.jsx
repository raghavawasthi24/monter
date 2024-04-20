"use client";
import React, { useState } from "react";
import { BiSkipPrevious } from "react-icons/bi";
import { BiSkipNext } from "react-icons/bi";

export default function Pagination({
  totalItems,
  itemsPerPage,
  onPageChanged,
  setItemPerPage,
}) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      onPageChanged(page);
    }
  };

  const handlePrevPage = () => {
    goToPage(currentPage - 1);
  };

  const handleNextPage = () => {
    goToPage(currentPage + 1);
  };

  const handleInputChange = (e) => {
  setItemPerPage(parseInt(e.target.value));
  };

  return (
    <div className="flex md:justify-center justify-between items-center md:relative">
      <div className="flex md:gap-8 gap-2 items-center">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="flex justify-center items-center"
        >
          <BiSkipPrevious className="w-8 h-8 mr-2 text-gray-500" />
          Prev
        </button>
        <div className="flex gap-4">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => goToPage(page)}
              className={
                currentPage === page
                  ? "bg-yellow-300 p-1 md:w-8 w-6 md:h-8 h-6 flex justify-center items-center rounded-md"
                  : "border border-black  md:w-8 w-6 md:h-8 h-6 flex justify-center items-center rounded-md"
              }
            >
              {page}
            </button>
          ))}
        </div>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="flex justify-center items-center"
        >
          Next
          <BiSkipNext className="w-8 h-8 mr-2 text-gray-500" />
        </button>
      </div>

      <span className="md:absolute right-0">
        Rows per page:{" "}
        <input
          type="number"
          min="1"
          max={totalItems}
          value={itemsPerPage}
          onChange={handleInputChange}
        />
      </span>
    </div>
  );
}
