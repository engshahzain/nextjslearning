import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shahzain Portfolio",
  description: " Muhammad Shahzain Portfolio  in Next js",
};

export default function Home() {
  return (
    <div className=" container mx-auto">
      {/* heading with text section  */}
      <section>
        <div className="flex gap-16 items-center">
          <h1 className="text-3xl text-[$0B0909] font-bold ">ABOUT ME</h1>
          <span className="h-px w-62 block  bg-gradient-to-r from-[#FFA012] to-[#E61905]"></span>
        </div>
      </section>
    </div>
  );
}
