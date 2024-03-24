import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/app/providers";
import React from "react";
import dynamic from "next/dynamic";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

const ColorMode = dynamic(() => import("@/components/colorMode"), {
  suspense: true,
});

export const metadata: Metadata = {
  title: "Hack Sched",
  description: "Hack Sched is a tool for scheduling hackathons. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col`}>
        <Providers>
        <ColorMode/>
        {/* <header className=''> */}
          <Header />
        {/* </header> */}
        <main className=''>
          {children}
        </main>
        </Providers>
      </body>
    </html>
  );
}
