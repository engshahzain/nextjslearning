import Link from "next/link";
import React from "react";
import { Inter } from "next/font/google";
import { ContactIcon, HomeIcon, ResumeIcon, WorkIcon } from "../icons/AllIcons";
const inter = Inter({ subsets: ["latin"] });
const Navbar = () => {
  return (
    <header className="w-full flex justify-end">
      <nav className="inline-block px-5 py-3 bg-[#F2F7FC]   border border-[#1a10035b] rounded-[20px]">
        <div className="flex gap-10">
          {" "}
          <Link
            href={"/"}
            className="flex flex-col items-center bg-gradient-to-r from-[#FFA012] to-[#E61905] hover:opacity-90 transition-colors duration-150 ease-out text-[#FFFFFF]  rounded-[20px] p-4"
          >
            <span className="text-2xl">
              <HomeIcon />
            </span>
            <span className="text-[12px] font-semibold">Home</span>
          </Link>
          <Link
            href={"/"}
            className="flex flex-col items-center bg-[#E1E8EF] hover:bg-gradient-to-r hover:from-[#FFA012] hover:to-[#E61905] hover:opacity-90 transition-colors duration-150 ease-out text-[#FFFFFF]  rounded-[20px] p-4 group"
          >
            <span className="text-2xl text-[#1a10037c] group-hover:text-[#F2F7FC] transition-colors duration-150 ease-out rotate-[-10deg]">
              <ResumeIcon />
            </span>
            <span className="text-[12px] font-semibold text-[#000000] group-hover:text-[#F2F7FC] transition-colors duration-150 ease-out">
              Home
            </span>
          </Link>
          <Link
            href={"/"}
            className="flex flex-col items-center bg-[#E1E8EF] hover:bg-gradient-to-r hover:from-[#FFA012] hover:to-[#E61905] hover:opacity-90 transition-colors duration-150 ease-out text-[#FFFFFF]  rounded-[20px] p-4 group"
          >
            <span className="text-2xl text-[#1a10037c] group-hover:text-[#F2F7FC] transition-colors duration-150 ease-out">
              <WorkIcon />
            </span>
            <span className="text-[12px] font-semibold text-[#000000] group-hover:text-[#F2F7FC] ">
              Home
            </span>
          </Link>
          <Link
            href={"/"}
            className="flex flex-col items-center bg-[#E1E8EF] hover:bg-gradient-to-r hover:from-[#FFA012] hover:to-[#E61905] hover:opacity-90 transition-colors duration-150 ease-out text-[#FFFFFF]  rounded-[20px] p-4 group"
          >
            <span className="text-2xl text-[#1a10037c] group-hover:text-[#F2F7FC] transition-colors duration-150 ease-out">
              <ContactIcon />
            </span>
            <span className="text-[12px] font-semibold text-[#000000] group-hover:text-[#F2F7FC] transition-colors duration-150 ease-out ">
              Home
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
