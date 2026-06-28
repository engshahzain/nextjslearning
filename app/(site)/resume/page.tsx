import { Metadata } from "next";
import { Poppins } from "next/font/google";
import Heading from "../Components/Common/Heading";
import Card from "../Components/Common/Card";
import {
  BackendIcon,
  EducationIcon,
  ExperienceIcon,
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
  title: "Shahzain Resume",
  description: "Muhammad Shahzain Portfolio in Next js",
};

const skills = [
  { skill: "Next.js" }, // Minor capitalization fixes for professionalism
  { skill: "React.js" },
  { skill: "HTML5" },
  { skill: "CSS3" },
  { skill: "Tailwind CSS" },
  { skill: "JavaScript" },
  { skill: "Express.js" },
  { skill: "Node.js" },
  { skill: "Shopify" },
  { skill: "Liquid" },
  { skill: "MongoDB" },
  { skill: "GSAP" },
];

const SoftSkills = [
  { skill: "Time Management" },
  { skill: "Mentorship" },
  { skill: "Impeccable Communication" },
  { skill: "Flexibility" },
  { skill: "Research" },
  { skill: "Writing" },
];

export default function Page() {
  return (
    // Responsive padding: smaller on mobile, larger on desktop
    <div className="w-full flex-1 bg-[#FFFFFF] px-6 sm:px-10 lg:px-20 py-8 rounded-[20px] resume shadow-sm">
      {/* Heading section */}
      <section>
        <div className="flex gap-4 sm:gap-12 items-center flex-wrap">
          <Heading>Resume</Heading>
          {/* Changed w-62 to standard w-32 (mobile) and sm:w-64 (desktop) */}
          <span className="h-0.5 w-32 sm:w-64 block bg-gradient-to-r from-[#FFA012] to-[#E61905]"></span>
        </div>
      </section>

      {/* Education and Experience */}
      <section className="mt-8">
        {/* Changed to 1 column on mobile, 2 columns on large screens */}
        <div className="card-wrapper grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-x-16">
          {/* Education Column */}
          <div className="w-full flex flex-col gap-5">
            <div className="flex gap-3 items-center">
              <EducationIcon />
              <h2
                className={`font-medium text-[#000000] text-[24px] sm:text-[27px] ${poppin.className}`}
              >
                Education
              </h2>
            </div>
            <Card
              date={"2022-2026"}
              text1={"B.S.c Computer Engineering"}
              text2={"Bahauddin Zakariya University"}
              className="bg-[#FFE3BF] py-6 sm:py-8"
            />
            <Card
              date={"2021-2022"}
              text1={"FSC Pre Engineering"}
              text2={"Kabirain College Kabirwala"}
              className="bg-[#FFEED9] py-6 sm:py-8"
            />
          </div>

          {/* Experience Column */}
          <div className="w-full flex flex-col gap-5">
            <div className="flex gap-3 items-center">
              <ExperienceIcon />
              <h2
                className={`font-medium text-[#000000] text-[24px] sm:text-[27px] ${poppin.className}`}
              >
                Experience
              </h2>
            </div>
            <Card
              date={"2025-2026 Present"}
              text1={"Web Developer"}
              text2={"Enigma Systems"}
              className="bg-[#FFEED9] py-6 sm:py-8"
            />
            <Card
              date={"2023"}
              text1={"Front-End Web Developer"} // Fixed spelling here
              text2={"DeveloperHub"}
              className="bg-[#FFE3BF] py-6 sm:py-8"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-x-16 py-8 mt-6 border-t border-gray-100">
        {/* Hard Skills */}
        <div>
          <h2
            className={`font-medium text-[#000000] mb-4 text-[24px] sm:text-[27px] ${poppin.className}`}
          >
            Work Skills
          </h2>
          <div className="skill-wrapper flex flex-wrap gap-3 sm:gap-x-5 sm:gap-y-3">
            {skills.map((item, index) => (
              <div
                className="bg-[#E1E8EF] text-[12px] sm:text-[14px] rounded-lg px-3 py-2 text-[#000000] hover:bg-gradient-to-r hover:from-[#FFA012] hover:to-[#E61905] hover:text-white transition-colors duration-300 cursor-default"
                key={index}
              >
                {item.skill}
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h2
            className={`font-medium text-[#000000] mb-4 text-[24px] sm:text-[27px] ${poppin.className}`}
          >
            Soft Skills
          </h2>
          <div className="skill-wrapper flex flex-wrap gap-3 sm:gap-x-5 sm:gap-y-3">
            {SoftSkills.map((item, index) => (
              <div
                className="bg-[#E1E8EF] text-[12px] sm:text-[14px] rounded-lg px-3 py-2 text-[#000000] hover:bg-gradient-to-r hover:from-[#FFA012] hover:to-[#E61905] hover:text-white transition-colors duration-300 cursor-default"
                key={index}
              >
                {item.skill}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
