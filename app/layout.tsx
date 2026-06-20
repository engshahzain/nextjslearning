import type { Metadata } from "next";
import "./globals.css";
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
    <html lang="en" className={` h-full antialiased`}>
      <body className={`min-h-full ${raleway.className}`}>
        <Header />
        <main className="flex gap-10 w-full  container mx-auto py-5">
          <UserProfile />
          <div className="w-full">
            <Navbar />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
