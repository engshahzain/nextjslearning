import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Components/Common/Navbar";
import Header from "./Components/Common/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={` h-full antialiased`}>
      <body className="min-h-full flex flex-col container mx-auto">
        <Header />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
