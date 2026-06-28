import type { Metadata } from "next";
import "../globals.css";
import Navbar from "./Components/Common/Navbar";
import Header from "./Components/Common/Header";
import UserProfile from "./Components/Common/UserProfile";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-raleway",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className={`min-h-full ${raleway.className}`}>
        <Header />
        {/* Added flex-col for mobile, lg:flex-row for desktop, and responsive padding */}
        <main className="flex flex-col lg:flex-row gap-8 lg:gap-10 w-full items-center lg:items-stretch container mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="w-full max-w-md lg:w-1/3 xl:w-1/4 flex justify-center">
            <UserProfile />
          </div>
          <div className="w-full lg:w-2/3 xl:w-3/4 flex flex-col">
            <Navbar />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
