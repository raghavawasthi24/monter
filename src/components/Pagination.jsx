"use client";
import React, { useState } from "react";
import { BiSkipPrevious } from "react-icons/bi";
import { BiSkipNext } from "react-icons/bi";

export default function Pagination({
  totalItems,
  itemsPerPage,
  onPageChanged,
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
    const { value } = e.target;
    if (value && /^\d+$/.test(value)) {
      const page = parseInt(value);
      goToPage(page);
    }
  };

  return (
    <div className="flex justify-center items-center relative">
      <div className="flex gap-8">
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
                  ? "bg-yellow-300 p-2 w-8 h-8 flex justify-center items-center rounded-md"
                  : "border border-black  w-8 h-8 flex justify-center items-center rounded-md"
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

      <span className="absolute right-0">
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
