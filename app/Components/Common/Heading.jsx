import React from "react";
import { Poppins } from "next/font/google";
const poppin = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-raleway",
});
const Heading = ({ children }) => {
  return (
    <h1
      className={`text-[40px] text-[$0B0909] font-medium ${poppin.className} text-[32px]`}
    >
      {children}
    </h1>
  );
};

export default Heading;
