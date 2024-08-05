import Footer from "@layout/Footer";
import Navbar from "@layout/Navbar";
import type { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "landing page apple phone",
  description: "landing page of apple official store",
};

export default function LandingPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        <title>Apple Phone</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="Anwar sanusi" />
        <meta
          name="description"
          content="This is official website of Apple Phone."
        />
      </Head>
      <Navbar />
      <main className="bg-white drop-shadow-2xl overflow-hidden pt-[80px] transition-all duration-300">
        {children}
      </main>
      <Footer />
    </>
  );
}
