import { Blogs } from "@/lib/blogs";
import Image from "next/image";
import Link from "next/link";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "First Blog App",
  description: "Blog App made By Muhammad Shahzain during learning Next js",
};

export default function Home() {
  return (
    <div className=" container mx-auto">
      <div className="grid grid-cols-2">
        {Blogs.map((item, index) => (
          <Link
            key={index}
            href={`blog/${item.slug}`}
            className="p-10 w-full max-w-lg "
          >
            <div className="relative overflow-hidden">
              {item.blog}
              <div className="w-full absolute top-0 left-0 bg-white h-52 opacity-90 blur-2xl"></div>
            </div>
            <h2 className="text-black text-lg font-bold text-left mt-2">
              {item.name}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
