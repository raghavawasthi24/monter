"use client";
import Pagination from "@/components/Pagination";
import DummyData from "@/constants/dummyData";
import Image from "next/image";
import { useState } from "react";
import { CiFilter } from "react-icons/ci";
import { GrDocumentDownload } from "react-icons/gr";
import { RxCross2 } from "react-icons/rx";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemPerPage] = useState(10);

  const handlePageChanged = (page) => {
    setCurrentPage(page);
    // Here you can fetch data for the new page, e.g., using an API call
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = DummyData.slice(startIndex, startIndex + itemsPerPage);
  return (
    <section className="h-screen overflow-hidden relative">
      <div className="flex justify-center items-center relative p-2">
        <h2 className="font-semibold text-lg">Recently Generated Reports</h2>
        <div className="absolute right-0 flex gap-4 mr-4">
          <CiFilter className="w-6 h-6 border border-black p-1 rounded-lg" />
          <RxCross2 className="w-6 h-6 border border-black p-1 rounded-lg" />
        </div>
      </div>

      <div className="flex flex-1 bg-slate-100 py-2 sticky top-0">
        <p className="w-48 text-center font-semibold text-gray-600">Date</p>
        <p className="w-full px-4  font-semibold text-gray-600">Report Name</p>
        <p className="w-48 text-center  font-semibold text-gray-600">
          Download
        </p>
      </div>
      <div className="h-[80%] overflow-auto">
        {currentItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center bg-white py-4 border-b border-gray-200"
          >
            <p className="w-48 text-center">{item.date}</p>
            <p className="w-full px-4">{item.report}</p>
            <div className="w-48 flex justify-center">
              <GrDocumentDownload className="w-6 h-6 text-gray-500" />
            </div>
          </div>
        ))}
      </div>

      <div className="py-2 fixed bottom-0 left-0 w-full bg-white">
        <Pagination
          totalItems={DummyData.length}
          itemsPerPage={itemsPerPage}
          onPageChanged={handlePageChanged}
          setItemPerPage={setItemPerPage}
        />
      </div>
    </section>
  );
}
