import Link from "next/link";
import React from "react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const Navbar = () => {
  return (
    <header className="px-20 py-3 bg-black w-full">
      <nav
        className={`flex justify-between container mx-auto inter ${inter.className}`}
      >
        <h2 className="text-white font-bold">Engshahzain</h2>
        <ul className="flex gap-5 text-white">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/category"}>Category</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
