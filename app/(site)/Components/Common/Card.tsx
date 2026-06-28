import React from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";

const poppin = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

interface CardProps {
  icon?: React.ReactNode;
  iconwidth?: string;
  mainheading?: string;
  pg?: string;
  date?: string;
  text1?: string;
  text2?: string;
  mainImage?: string;
  imagetext?: string;
  imageSubtext?: string;
  imageAlt?: string;
  phoneNumber?: string;
  email?: string;
  className?: string;
}

const Card = ({
  icon,
  iconwidth = "",
  mainheading,
  pg,
  date,
  text1,
  text2,
  mainImage,
  imagetext,
  imageSubtext,
  imageAlt = "",
  phoneNumber,
  email,
  className = "",
}: CardProps) => {
  return (
    <div className={`${className} px-5 py-3 rounded-[10px]`}>
      <div className="card-wrapper">
        {/* Header */}
        {(icon || mainheading) && (
          <div className="flex items-center gap-2">
            {icon && (
              <div className={`card-icon ${iconwidth || ""}`}>{icon}</div>
            )}

            {mainheading && (
              <h1
                className={`text-[#000000] text-[24px] font-semibold ${poppin.className}`}
              >
                {mainheading}
              </h1>
            )}
          </div>
        )}

        {pg && <p>{pg}</p>}

        <div className="flex flex-col gap-2">
          {date && (
            <p className="text-[#1a10037c] text-[13.87px] pt-1 ">{date}</p>
          )}

          {text1 && (
            <p className="text-[#000000] font-semibold text-[13.87px]">
              {text1}
            </p>
          )}

          {text2 && (
            <p className="text-[#000000] text-[13.87px] font-medium pb-2">
              {text2}
            </p>
          )}
        </div>
        {mainImage && (
          <div>
            <Image
              className="rounded-[10px]"
              src={mainImage}
              alt={imageAlt}
              width={500}
              height={300}
            />
            {imageSubtext && (
              <span
                className={`text-[#1A1003] text-[10px] ${poppin.className}`}
              >
                {imageSubtext}
              </span>
            )}

            {imagetext && (
              <h3 className={`text-[#1A1003] text-[16px]  ${poppin.className}`}>
                {imagetext}
              </h3>
            )}
          </div>
        )}
        {phoneNumber && (
          <span className="text-[#000000] font-medium text-[14px] pl-10">
            {phoneNumber}
          </span>
        )}
        {email && (
          <span className="text-[#000000] font-medium text-[14px] pl-10">
            {email}
          </span>
        )}
      </div>
    </div>
  );
};

export default Card;
