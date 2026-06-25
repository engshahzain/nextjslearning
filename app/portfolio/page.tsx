import { Metadata } from "next";
import { Poppins } from "next/font/google";
import Heading from "../Components/Common/Heading";
import Card from "../Components/Common/Card";
import {
  BackendIcon,
  FullStackIcon,
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
          <Heading>PortFolio</Heading>
          <span className="h-0.5 w-62 block  bg-gradient-to-r from-[#FFA012] to-[#E61905]"></span>
        </div>
      </section>
      {/* what i do section  skill section */}
      <section>
        <div className="card-wrapper grid  grid-cols-2 gap-x-8 gap-y-8 mt-5">
          <a href="https://shahzaincodes.vercel.app/" target="_blank">
            <Card
              mainImage={"/portfolio2.png"}
              imageSubtext={"Web Development"}
              imagetext={"Animated PortFolio Web Site"}
              className="bg-[#FFEBD1]"
            />
          </a>
          <a href="https://puregrubs.com/" target="_blank">
            <Card
              mainImage={"/Portfolio3.png"}
              imageSubtext={"Shopify Theme Development"}
              imagetext={"Puregrubs Store"}
              className="bg-[#FFEBD1]"
            />
          </a>
          <a href="https://www.dalstrongstudios.com/" target="_blank">
            <Card
              mainImage={"/portfolio4.png"}
              imageSubtext={"Frontend Web Development"}
              imagetext={"Dalstrong Landing Page"}
              className="bg-[#FFEBD1]"
            />
          </a>
          <a href="https://shahzaindev.vercel.app/" target="_blank">
            <Card
              mainImage={"/portfolio1.png"}
              imageSubtext={"Web Development"}
              imagetext={"PortFolio Web Site"}
              className="bg-[#FFEBD1]"
            />
          </a>
        </div>
      </section>
    </div>
  );
}
