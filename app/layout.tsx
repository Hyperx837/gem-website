import Nav from "@/components/nav";
import Link from "@/node_modules/next/link";
import type { Metadata } from "next";
import { BGUp, BGDown } from "@/components/SVG";
// import { Poppins } from "next/fonts/google";
import "./globals.css";

// const poppins = Poppins({});
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col ">
        <BGUp />
        <Nav />
        <main className="flex-grow">{children}</main>
        <footer className="p-10 pt-[10rem] relative">
          <BGDown />
          <div className="flex flex-col min-h-40 bg-black text-white w-[90%] mx-auto rounded-2xl py-auto">
            <div className="flex w-1/3 min-w-[300px] mx-auto px-auto justify-between text-lg p-3 font-medium mt-auto">
              <Link href="/" className="link">
                Home
              </Link>
              <Link href="/about" className="link">
                About
              </Link>
              <Link href="/gems" className="link">
                Gems
              </Link>
            </div>
            <div className="mx-auto mt-3 font-bold mb-auto">
              Copyrights reserved © 2025
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
