import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { MdHome } from "react-icons/md";

import { MdOutlineFileDownload } from "react-icons/md";
import Image from "next/image";
export const FbIcon = () => {
  return <FaFacebookF />;
};
export const LinkDinIcon = () => {
  return <FaLinkedinIn />;
};
export const XIcon = () => {
  return <FaXTwitter />;
};
export const GithubIcon = () => {
  return <FaGithub />;
};
export const PhoneIcon = () => {
  return (
    <Image
      className="w-full object-cover object-center"
      src={"/Phone.png"}
      width={200}
      height={200}
      alt="phone png"
    />
  );
};
export const LocationIcon = () => {
  return (
    <Image
      className="w-full object-cover object-center"
      src={"/location.png"}
      width={200}
      height={200}
      alt="locatioon png"
    />
  );
};
export const EmailIcon = () => {
  return <Image src="/email.png" width={20} height={20} alt="Email Png" />;
};

export const DownlodeIcon = () => {
  return <MdOutlineFileDownload />;
};
export const HomeIcon = () => {
  return <MdHome />;
};
