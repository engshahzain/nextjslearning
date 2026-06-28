import Link from "next/link";
import React from "react";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-5 md:px-10 py-4 md:py-6">
      <Link href={"/"}>
        <Logo />
      </Link>
    </header>
  );
};

export default Header;
