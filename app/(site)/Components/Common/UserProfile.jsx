import Image from "next/image";
import React from "react";
import {
  EmailIcon,
  FbIcon,
  GithubIcon,
  LinkDinIcon,
  LocationIcon,
  PhoneIcon,
  XIcon,
} from "../icons/AllIcons";
import Link from "next/link";

const UserProfile = () => {
  return (
    <div className="w-full max-w-sm flex flex-col items-center mt-10">
      {/* Profile Image */}
      <div className="w-full relative z-10 max-w-40 h-40 rounded-2xl overflow-hidden shadow-md">
        <Image
          className="w-full h-full object-cover"
          src={"/profile.jpg"}
          width={200}
          height={200} // Matched height to width to prevent distortion
          loading="lazy"
          alt="Engr Muhammad Shahzain Profile Image"
        />
      </div>

      <div className="bg-[#FFFF] w-full flex-1 -mt-20 overflow-hidden rounded-[20px] pb-10 shadow-sm">
        <div className="w-full h-20 relative z-0"></div>
        <div className="flex flex-col items-center justify-center w-full mt-3">
          {/* Name & Title */}
          <h1 className="text-[#0B0909] font-bold text-xl text-center px-4">
            Engr. Muhammad Shahzain
          </h1>
          <span className="text-[#0b090983] text-center text-[16px] mt-1 font-medium">
            Full-Stack Developer
          </span>

          {/* Social Icons */}
          <ul className="flex gap-4 my-4 w-full justify-center items-center px-4">
            <li className="bg-[#F2F7FC] flex items-center justify-center px-3 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-300">
              <a
                className="text-[#1877F2] text-xl hover:scale-110 transition-transform"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FbIcon />
              </a>
            </li>
            <li className="bg-[#F2F7FC] flex items-center justify-center px-3 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-300">
              <a
                className="text-[#0077B5] text-xl hover:scale-110 transition-transform"
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkDinIcon />
              </a>
            </li>
            <li className="bg-[#F2F7FC] flex items-center justify-center px-3 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300">
              <a
                className="text-[#0B0909] text-xl hover:scale-110 transition-transform"
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <XIcon />
              </a>
            </li>
            <li className="bg-[#F2F7FC] flex items-center justify-center px-3 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300">
              <a
                className="text-[#0B0909] text-xl hover:scale-110 transition-transform"
                href="https://github.com/muhammad-shahzains-projects"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <GithubIcon />
              </a>
            </li>
          </ul>

          {/* Personal Details */}
          <div className="bg-[#F2F7FC] w-full max-w-[90%] mx-auto py-8 mt-5 rounded-xl">
            <div className="flex items-center gap-4 w-full px-6 py-4 border-[#E3E3E3] border-b">
              <div className="icon w-5 shrink-0 flex justify-center text-[#FFA012]">
                <PhoneIcon />
              </div>
              <div className="detail flex flex-col gap-1">
                <span className="text-[#1a100381] text-[12px] leading-none font-semibold uppercase tracking-wider">
                  Phone
                </span>
                <span className="text-[#000000] text-[14px] leading-none font-semibold hover:text-[#FFA012] transition-colors cursor-pointer">
                  +923080452803
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 w-full px-6 py-4 border-[#E3E3E3] border-b">
              <div className="icon w-5 shrink-0 flex justify-center text-[#FFA012]">
                <EmailIcon />
              </div>
              <div className="detail flex flex-col gap-1">
                <span className="text-[#1a100381] text-[12px] leading-none font-semibold uppercase tracking-wider">
                  Email
                </span>
                <span className="text-[#000000] text-[14px] leading-none font-semibold break-all hover:text-[#FFA012] transition-colors cursor-pointer">
                  engmuhammadshahzain@gmail.com
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 w-full px-6 py-4 border-[#E3E3E3] border-b">
              <div className="icon w-5 shrink-0 flex justify-center text-[#FFA012]">
                <LocationIcon />
              </div>
              <div className="detail flex flex-col gap-1">
                <span className="text-[#1a100381] text-[12px] leading-none font-semibold uppercase tracking-wider">
                  Location
                </span>
                <span className="text-[#000000] text-[14px] leading-none font-semibold">
                  Multan
                </span>
              </div>
            </div>

            {/* Fixed the 'class' and SVG stroke attributes to React camelCase */}
            <Link
              href="/Shahzain_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full max-w-[80%] mx-auto px-6 py-3.5 text-white font-medium rounded-full bg-gradient-to-r from-[#FFA012] to-[#E61905] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 mt-8"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                ></path>
              </svg>
              <span>Download Resume</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
