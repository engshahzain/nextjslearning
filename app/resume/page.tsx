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
  description: " Muhammad Shahzain Portfolio  in Next js",
};
const skills = [
  {
    skill: "NEXT.js",
  },
  {
    skill: "React.js",
  },
  {
    skill: "HTML 5",
  },
  {
    skill: "CSS 3",
  },
  {
    skill: "Tailwind CSS",
  },
  {
    skill: "JavaScript",
  },
  {
    skill: "Express.js",
  },
  {
    skill: "Nodejs",
  },
  {
    skill: "Shopify",
  },
  {
    skill: "Liquid",
  },
  {
    skill: "MongoDb",
  },
  {
    skill: "GSAP",
  },
];

const SoftSkills = [
  {
    skill: "Time Management",
  },
  {
    skill: "Mentorship",
  },
  {
    skill: "Impeccable Communication",
  },
  {
    skill: "Flexibility",
  },
  {
    skill: "Research",
  },
  {
    skill: "Writing",
  },
];
export default function Page() {
  return (
    <div className="w-full  flex-1 bg-[#FFFFFF] px-20 py-8  rounded-[20px] ">
      {/* heading with text section  */}
      <section>
        <div className="flex gap-12 items-center">
          <Heading>Resume</Heading>
          <span className="h-0.5 w-62 block  bg-gradient-to-r from-[#FFA012] to-[#E61905]"></span>
        </div>
      </section>
      {/*eductaion and ex[erince*/}
      <section className="mt-4">
        <div className="card-wrapper grid grid-cols-2 gap-x-16">
          <div className="w-full flex flex-col gap-5">
            {" "}
            <div className="flex gap-3 items-center">
              <EducationIcon />
              <h2
                className={`font-medium text-[#000000] text-[27px] ${poppin.className}`}
              >
                Education
              </h2>
            </div>
            <Card
              date={"2022-2026"}
              text1={"B.S.c Computer Engineering "}
              text2={"Bahauddin zakariya university"}
              className="bg-[#FFE3BF] py-8"
            />
            <Card
              date={"2021-2022"}
              text1={"FSC Pre Engineering"}
              text2={"Kabirain College Kabirwala"}
              className="bg-[#FFEED9] py-8"
            />
          </div>
          <div className="w-full flex flex-col gap-5">
            {" "}
            <div className="flex gap-3 items-center">
              <ExperienceIcon />
              <h2
                className={`font-medium text-[#000000] text-[27px] ${poppin.className}`}
              >
                Experience
              </h2>
            </div>
            <Card
              date={"2025-2026 Present "}
              text1={"Web Devloper "}
              text2={"Enigma Systems"}
              className="bg-[#FFEED9] py-8"
            />
            <Card
              date={"2023"}
              text1={"FontEnd WebDevloper "}
              text2={"DeveloperHub"}
              className="bg-[#FFE3BF] py-8"
            />
          </div>
        </div>
      </section>
      {/* skils  */}

      <section className="grid grid-cols-2 gap-x-16 py-5">
        <div>
          <h2
            className={`font-medium text-[#000000] mb-3 text-[27px] ${poppin.className}`}
          >
            Work Skills
          </h2>
          <div className="skill-wrapper flex flex-wrap gap-x-5 gap-y-3">
            {skills.map((item, index) => (
              <div
                className="bg-[#E1E8EF] text-[12px] rounded-[8px] p-2 text-[#000000]"
                key={index}
              >
                {item.skill}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2
            className={`font-medium text-[#000000] mb-3 text-[27px] ${poppin.className}`}
          >
            Soft Skills
          </h2>
          <div className="skill-wrapper flex flex-wrap gap-x-5 gap-y-3">
            {SoftSkills.map((item, index) => (
              <div
                className="bg-[#E1E8EF] text-[12px] rounded-[8px] p-2 text-[#000000]"
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
