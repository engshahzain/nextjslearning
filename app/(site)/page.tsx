import { Metadata } from "next";
import { Poppins } from "next/font/google";
import Heading from "./Components/Common/Heading";
import Card from "./Components/Common/Card";
import {
  BackendIcon,
  FullStackIcon,
  ShopifyIcon,
  WebIcon,
} from "./Components/icons/AllIcons";

const poppin = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "Shahzain Portfolio",
  description: "Muhammad Shahzain Portfolio in Next.js",
};

export default function Home() {
  return (
    // Responsive padding: px-6 on mobile, lg:px-20 on desktop
    <div className="home w-full flex-1 bg-[#FFFFFF] px-6 sm:px-10 lg:px-20 py-8 rounded-[20px] shadow-sm">
      <section>
        <div className="flex gap-4 sm:gap-12 items-center flex-wrap">
          <Heading>About</Heading>
          <span className="h-0.5 w-32 sm:w-62 block bg-gradient-to-r from-[#FFA012] to-[#E61905]"></span>
        </div>
        <p className="py-6 sm:py-8 font-medium text-[14px] sm:text-[16px]">
          Hello there! I'm thrilled to welcome you to my portfolio. I am a
          passionate and versatile full-stack developer with a keen interest in
          exploring the latest cutting-edge technologies. My journey in the
          world of web development has been nothing short of exhilarating, and I
          constantly strive to enhance my skills and embrace emerging trends in
          the industry.
        </p>
      </section>

      <section>
        <Heading>What I do!</Heading>
        {/* Changed grid-cols-2 to grid-cols-1 md:grid-cols-2 */}
        <div className="card-wrapper grid grid-cols-1 md:grid-cols-2 gap-x-6 lg:gap-x-8 gap-y-6 lg:gap-y-8 mt-5">
          <Card
            mainheading={"Frontend Web Development"}
            pg={
              "As a frontend developer, I enjoy creating responsive and user-friendly interfaces..."
            }
            icon={<WebIcon />}
            iconwidth={"w-[24px]"}
            className="bg-[#FFEBD1]"
          />
          <Card
            mainheading={"Shopify Theme Development"}
            pg={
              "As a developer, I enjoy building modern and responsive Shopify themes..."
            }
            icon={<ShopifyIcon />}
            iconwidth={"w-[24px]"}
            className="bg-[#F2F7FC]"
          />
          <Card
            mainheading={"Backend Development"}
            pg={
              "As a backend developer, I enjoy building scalable and efficient server-side applications..."
            }
            icon={<BackendIcon />}
            iconwidth={"w-[24px]"}
            className="bg-[#F2F7FC]"
          />
          <Card
            mainheading={"Full-Stack Web Development"}
            pg={
              "As a MERN stack developer, I enjoy turning ideas into complete web applications..."
            }
            icon={<FullStackIcon />}
            iconwidth={"w-[24px]"}
            className="bg-[#FFEBD1]"
          />
        </div>
      </section>
    </div>
  );
}
