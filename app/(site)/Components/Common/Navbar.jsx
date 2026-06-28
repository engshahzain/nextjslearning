"use client";
import Link from "next/link";
import React from "react";
import { Inter } from "next/font/google";
import { ContactIcon, HomeIcon, ResumeIcon, WorkIcon } from "../icons/AllIcons";
import { usePathname } from "next/navigation";
const inter = Inter({ subsets: ["latin"] });
const Navbar = () => {
  const pathname = usePathname();
  return (
    <header className="w-full flex justify-center lg:justify-end mb-5">
      <nav className="inline-block px-3 sm:px-5 py-3 bg-[#F2F7FC] border border-[#1a10035b] rounded-[20px] overflow-x-auto">
        <div className="flex gap-2 sm:gap-5 lg:gap-10 items-center justify-between min-w-max">
          {" "}
          <Link
            href={"/"}
            className={`flex flex-col items-center  ${pathname == "/" ? "bg-gradient-to-r from-[#FFA012] to-[#E61905] hover:opacity-90 text-[#FFFFFF]" : "bg-[#E1E8EF] hover:bg-gradient-to-r  text-[#000000]  "}  transition-colors duration-150 ease-out  rounded-[20px] p-4 hover:from-[#FFA012] hover:to-[#E61905] hover:text-[#FFFFFF]`}
          >
            <span className="text-2xl">
              <HomeIcon />
            </span>
            <span className="text-[12px] font-semibold">Home</span>
          </Link>
          <Link
            href={"/resume"}
            className={`flex flex-col items-center  ${pathname == "/resume" ? "bg-gradient-to-r from-[#FFA012] to-[#E61905] hover:opacity-90 text-[#FFFFFF]" : "bg-[#E1E8EF] hover:bg-gradient-to-r  text-[#000000]  "}  transition-colors duration-150 ease-out  rounded-[20px] p-4 hover:from-[#FFA012] hover:to-[#E61905] hover:text-[#FFFFFF]`}
          >
            <span className="text-2xl  group-hover:text-[#F2F7FC] transition-colors duration-150 ease-out rotate-[-10deg]">
              <ResumeIcon />
            </span>
            <span className="text-[12px] font-semibold  group-hover:text-[#F2F7FC] transition-colors duration-150 ease-out">
              Resume
            </span>
          </Link>
          <Link
            href={"/portfolio"}
            className={`flex flex-col items-center  ${pathname == "/portfolio" ? "bg-gradient-to-r from-[#FFA012] to-[#E61905] hover:opacity-90 text-[#FFFFFF]" : "bg-[#E1E8EF] hover:bg-gradient-to-r  text-[#000000]  "}  transition-colors duration-150 ease-out  rounded-[20px] p-4 hover:from-[#FFA012] hover:to-[#E61905] hover:text-[#FFFFFF]`}
          >
            <span className="text-2xl  group-hover:text-[#F2F7FC] transition-colors duration-150 ease-out">
              <WorkIcon />
            </span>
            <span className="text-[12px] font-semibold  ">Work</span>
          </Link>
          <Link
            href={"/contact"}
            className={`flex flex-col items-center  ${pathname == "/contact" ? "bg-gradient-to-r from-[#FFA012] to-[#E61905] hover:opacity-90 text-[#FFFFFF]" : "bg-[#E1E8EF] hover:bg-gradient-to-r  text-[#000000]  "}  transition-colors duration-150 ease-out  rounded-[20px] p-4 hover:from-[#FFA012] hover:to-[#E61905] hover:text-[#FFFFFF]`}
          >
            <span className="text-2xl  group-hover:text-[#F2F7FC] transition-colors duration-150 ease-out">
              <ContactIcon />
            </span>
            <span className="text-[12px] font-semibold transition-colors duration-150 ease-out ">
              Contact
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
