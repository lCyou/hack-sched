import React from "react";
import Providers from "@/app/providers";
import Header from "@/components/header/header";

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Providers>
        <Header />
        <main className=''>
            {children}
        </main>
      </Providers>
    </>
  );
}
