import Image from "next/image";
import { CiFilter } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";

export default function Home() {
  return (
    <section className="h-screen overflow-hidden">
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

      <div className="py-2 bg-black fixed bottom-0 left-0"></div>
    </section>
  );
}
