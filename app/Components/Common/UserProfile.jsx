import Image from "next/image";
import React from "react";

const UserProfile = () => {
  return (
    <div className="w-full max-w-sm flex flex-col items-center justify-between">
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
      <div className="bg-[#FFFF] w-full -mt-20 overflow-hidden rounded-[20px] ">
        <div className="w-full  h-20  relative z-0 "></div>
        <div className="flex flex-col items-center justify-center w-full mt-2">
          {/* name  */}
          <h1 className="text-[#0B0909] font-bold text-xl text-center">
            Engr.Muhammad Shahzain
          </h1>

          {/* full stack developer  */}

          <span className="text-[#0b090983] text-center text-[16px] mt-1">
            FullStack Developer
          </span>

          {/* social icons  */}

          <ul></ul>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
