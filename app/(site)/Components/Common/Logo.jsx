import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div>
      <Image
        src={"/Logo.png"}
        width={250}
        height={250}
        loading="lazy"
        alt="Eng Muhammad Shahzain Logo"
      />
    </div>
  );
};

export default Logo;
