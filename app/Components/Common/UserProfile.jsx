import Image from "next/image";
import React from "react";
import {
  DownlodeIcon,
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
      {/* profile image  */}
      <div className="w-full relative z-10 max-w-40 h-40 rounded-2xl overflow-hidden">
        <Image
          className="w-full h-full object-cover"
          src={"/profile.jpg"}
          width={200}
          height={100}
          loading="lazy"
          alt="Engr Muhammad Shahzain Profile Image"
        />
      </div>
      <div className="bg-[#FFFF] w-full flex-1 -mt-20 overflow-hidden rounded-[20px] pb-10">
        <div className="w-full  h-20  relative z-0 "></div>
        <div className="flex flex-col items-center justify-center w-full mt-3">
          {/* name  */}
          <h1 className="text-[#0B0909] font-bold text-xl text-center">
            Engr.Muhammad Shahzain
          </h1>

          {/* full stack developer  */}

          <span className="text-[#0b090983] text-center text-[16px] mt-1">
            FullStack Developer
          </span>

          {/* social icons  */}

          <ul className="flex gap-5 my-3 w-full justify-center items-center">
            <li className="bg-[#F2F7FC] flex items-center justify-center px-2 text-xl py-2">
              <a className=" text-[#1877F2]" href="">
                <FbIcon />
              </a>
            </li>
            <li className="bg-[#F2F7FC] flex items-center justify-center px-2 text-xl py-2">
              <a className=" text-[#0077B5]" href="">
                <LinkDinIcon />
              </a>
            </li>
            <li className="bg-[#F2F7FC] flex items-center justify-center px-2 text-xl py-2">
              <a className=" text-[#0B0909]" href="">
                <XIcon />
              </a>
            </li>
            <li className="bg-[#F2F7FC] flex items-center justify-center px-2 text-xl py-2">
              <a className=" text-[#0B0909]" href="">
                <GithubIcon />
              </a>
            </li>
          </ul>

          {/* personal details  */}

          <div className="bg-[#F2F7FC] w-full max-w-[90%] mx-auto py-10 mt-5">
            <div className="flex items-center gap-5 w-full px-8 py-5 pb-8 border-[#E3E3E3] border-b ">
              <div className="icon w-3">
                <PhoneIcon />
              </div>
              <div className="detail flex flex-col gap-0.5">
                <span className="text-[#1a100381]  text-[14px] leading-none font-semibold">
                  {" "}
                  Phone
                </span>
                <span className="text-[#000000] text-[14px] leading-none font-semibold">
                  +923080452803
                </span>
              </div>
            </div>
            <div className="flex items-center gap-5 w-full px-8 py-5 pb-8 border-[#E3E3E3] border-b ">
              <div className="icon w-5  shrink-0">
                <EmailIcon />
              </div>
              <div className="detail flex flex-col gap-0.5">
                <span className="text-[#1a100381]  text-[14px] leading-none font-semibold">
                  {" "}
                  Email
                </span>
                <span className="text-[#000000] text-[14px] leading-none font-semibold">
                  engmuhammadshahzain@gmail.com
                </span>
              </div>
            </div>
            <div className="flex items-center gap-5 w-full px-8 py-5 pb-8 border-[#E3E3E3] border-b ">
              <div className="icon w-5">
                <LocationIcon />
              </div>
              <div className="detail flex flex-col gap-0.5">
                <span className="text-[#1a100381]  text-[14px] leading-none font-semibold">
                  {" "}
                  Location
                </span>
                <span className="text-[#000000] text-[14px] leading-none font-semibold">
                  Multan
                </span>
              </div>
            </div>
            <Link
              href={"/"}
              class="flex items-center gap-2  w-full max-w-[70%] mx-auto px-6 py-3 text-white font-medium rounded-full bg-gradient-to-r from-[#FFA012] to-[#E61905] hover:opacity-90 transition-opacity mt-10"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
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
