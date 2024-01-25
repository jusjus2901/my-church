import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/app/(users)/_components/navbar";
import { Footer } from "@/app/(users)/_components/footer"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UPCI Buenavista",
  description: "UPCI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
          {children}
        <Footer/>
      </body>
    </html>
  );
}
