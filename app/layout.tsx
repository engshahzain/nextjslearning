import type { Metadata } from "next";
import "./globals.css";
import PageLoader from "./(site)/Components/Loader/PageLoader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <PageLoader>{children}</PageLoader>
      </body>
    </html>
  );
}
