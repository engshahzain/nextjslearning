import { Metadata } from "next";
import { Poppins } from "next/font/google";
import Heading from "../Components/Common/Heading";
import Card from "../Components/Common/Card";

// Note: I removed the unused icon imports to keep your code clean!

const poppin = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "Shahzain Portfolio",
  description: "Muhammad Shahzain Portfolio in Next.js",
};

export default function Page() {
  return (
    // Responsive padding applied here
    <div className="portfolio w-full flex-1 bg-[#FFFFFF] px-6 sm:px-10 lg:px-20 py-8 rounded-[20px] shadow-sm">
      {/* Heading section */}
      <section>
        <div className="flex gap-4 sm:gap-12 items-center flex-wrap">
          <Heading>Portfolio</Heading>
          {/* Fixed the w-62 typo to standard w-32/w-64 */}
          <span className="h-0.5 w-32 sm:w-64 block bg-gradient-to-r from-[#FFA012] to-[#E61905]"></span>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section>
        {/* Changed to grid-cols-1 for mobile, md:grid-cols-2 for tablets and up */}
        <div className="card-wrapper grid grid-cols-1 md:grid-cols-2 gap-x-6 lg:gap-x-8 gap-y-6 lg:gap-y-8 mt-8">
          {/* Project 1 */}
          <a
            href="https://shahzaincodes.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <Card
              mainImage={"/portfolio2.png"}
              imageSubtext={"Web Development"}
              imagetext={"Animated Portfolio Website"}
              className="bg-[#FFEBD1] transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-md"
            />
          </a>

          {/* Project 2 */}
          <a
            href="https://puregrubs.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <Card
              mainImage={"/Portfolio3.png"}
              imageSubtext={"Shopify Theme Development"}
              imagetext={"Puregrubs Store"}
              className="bg-[#F2F7FC] transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-md"
            />
          </a>

          {/* Project 3 */}
          <a
            href="https://www.dalstrongstudios.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <Card
              mainImage={"/portfolio4.png"}
              imageSubtext={"Frontend Web Development"}
              imagetext={"Dalstrong Landing Page"}
              className="bg-[#FFEBD1] transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-md"
            />
          </a>

          {/* Project 4 */}
          <a
            href="https://shahzaindev.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <Card
              mainImage={"/portfolio1.png"}
              imageSubtext={"Web Development"}
              imagetext={"Portfolio Website"}
              className="bg-[#F2F7FC] transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-md"
            />
          </a>
        </div>
      </section>
    </div>
  );
}
