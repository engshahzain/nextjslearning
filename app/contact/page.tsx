import { Metadata } from "next";
import { Poppins } from "next/font/google";
import Heading from "../Components/Common/Heading";
import Card from "../Components/Common/Card";
import {
  BackendIcon,
  EmailIcon2,
  FullStackIcon,
  PhoneIcon,
  PhoneICon2,
  ShopifyIcon,
  WebIcon,
} from "../Components/icons/AllIcons";
const poppin = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-raleway",
});
export const metadata: Metadata = {
  title: "Shahzain Portfolio",
  description: " Muhammad Shahzain Portfolio  in Next js",
};

export default function Page() {
  return (
    <div className="w-full flex-1 bg-[#FFFFFF] px-20 py-8  rounded-[20px] ">
      {/* heading with text section  */}
      <section>
        <div className="flex gap-12 items-center">
          <Heading>Contact</Heading>
          <span className="h-0.5 w-62 block  bg-gradient-to-r from-[#FFA012] to-[#E61905]"></span>
        </div>
      </section>
      {/* what i do section  skill section */}
      <section>
        <div className="card-wrapper grid  grid-cols-2 gap-x-8 gap-y-8 mt-5">
          <Card
            mainheading={"Phone:"}
            icon={<PhoneICon2 />}
            iconwidth={"w-[24px]"}
            className="bg-[#FFEBD1]"
            phoneNumber={"+923080452803"}
          />
          <Card
            icon={<EmailIcon2 />}
            mainheading={"Email :"}
            iconwidth={"w-[24px]"}
            className="bg-[#F2F7FC]"
          />
        </div>
      </section>
    </div>
  );
}
