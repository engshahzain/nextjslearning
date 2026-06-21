import Link from "next/link";
import React from "react";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="  flex justify-between items-center  px-10 py-6">
      <Link href={"/"}>
        <Logo />
      </Link>
      <button className="bg-transparent text-[#0B0909] shadow-[#0B0909] shadow-sm rounded-full  p-3 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-moon-icon lucide-moon"
        >
          <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
        </svg>
      </button>
    </header>
  );
};

export default Header;
