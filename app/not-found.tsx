import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center text-center">
      <div className="flex flex-col gap-2 ">
        <h1 className="text-3xl text-black font-bold text-center ">
          Page Not Found
        </h1>
        <Link href={"/"} className="underline ">
          Return To HomePage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
