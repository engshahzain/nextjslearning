import { Metadata } from "next";
import { Poppins } from "next/font/google";
import Heading from "../Components/Common/Heading";
import Card from "../Components/Common/Card";
import { EmailIcon2, PhoneICon2 } from "../Components/icons/AllIcons";

const poppin = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "Shahzain Contact", // Updated title for better SEO/Browser tabs
  description: "Muhammad Shahzain Portfolio in Next.js",
};

export default function Page() {
  return (
    // Responsive padding: px-6 on mobile, lg:px-20 on desktop
    <div className="w-full flex-1 bg-[#FFFFFF] px-6 sm:px-10 lg:px-20 py-8 rounded-[20px] contact shadow-sm">
      {/* Heading section */}
      <section>
        <div className="flex gap-4 sm:gap-12 items-center flex-wrap">
          <Heading>Contact</Heading>
          {/* Replaced invalid w-62 with standard responsive widths */}
          <span className="h-0.5 w-32 sm:w-64 block bg-gradient-to-r from-[#FFA012] to-[#E61905]"></span>
        </div>
      </section>

      {/* Contact details */}
      <section className="mt-8">
        {/* Responsive Grid: 1 column mobile, 2 columns tablet+ */}
        <div className="card-wrapper grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-x-8 lg:gap-y-8">
          <Card
            mainheading={"Phone:"}
            icon={<PhoneICon2 />}
            iconwidth={"w-[24px]"}
            className="bg-[#FFEBD1] py-6 sm:py-8"
            phoneNumber={"+923080452803"}
          />
          <Card
            icon={<EmailIcon2 />}
            mainheading={"Email :"}
            email={"engmuhammadshahzain@gmail.com"}
            iconwidth={"w-[24px]"}
            className="bg-[#F2F7FC] py-6 sm:py-8 overflow-hidden break-all" // Added break-all so long emails don't overflow on tiny screens
          />
        </div>
      </section>

      {/* Contact Form Container */}
      {/* Adjusted padding for smaller screens */}
      <section className="bg-[#F8FBFB] my-8 block w-full px-6 sm:px-10 py-8 sm:py-10 rounded-[20px] shadow-sm">
        <p className="font-medium text-[16px] sm:text-[18px] leading-relaxed text-gray-800">
          I am always open to discussing new{" "}
          <b className="text-black">
            projects, opportunities in the tech world, partnerships,{" "}
          </b>
          and <b className="text-black">mentorship.</b>
        </p>

        <form action="" className="flex flex-col gap-8 mt-8">
          <div className="border-b border-[#B5B5B5] w-full focus-within:border-[#FFA012] transition-colors duration-300">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full bg-transparent py-3 px-2 outline-none focus:ring-0 placeholder:text-gray-500 text-[16px] font-semibold text-black"
              required
            />
          </div>
          <div className="border-b border-[#B5B5B5] w-full focus-within:border-[#FFA012] transition-colors duration-300">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full bg-transparent py-3 px-2 outline-none focus:ring-0 placeholder:text-gray-500 text-[16px] font-semibold text-black"
              required
            />
          </div>
          <div className="border-b border-[#B5B5B5] w-full focus-within:border-[#FFA012] transition-colors duration-300">
            <textarea
              name="message"
              placeholder="Message"
              rows={4} // Added rows so it looks like a proper message box
              className="w-full bg-transparent py-3 px-2 outline-none focus:ring-0 placeholder:text-gray-500 text-[16px] font-semibold text-black resize-y"
              required
            ></textarea>
          </div>
          <div className="mt-2">
            {/* Gradient Button Trick */}
            <div className="inline-flex p-[2px] rounded-md bg-gradient-to-r from-[#FFA012] to-[#E61905] transition-transform hover:scale-105 active:scale-95 duration-200">
              <button
                type="submit"
                className="px-8 py-2.5 text-[#000000] rounded-[4px] bg-white hover:bg-transparent hover:text-white text-[14px] font-bold cursor-pointer transition-all duration-300"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}
