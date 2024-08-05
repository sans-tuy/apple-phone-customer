import AfterSales from "@sections/AfterSales";
import Benefit from "@sections/Benefit";
import ContactUs from "@sections/ContactUs";
import Home from "@sections/Home";
import Products from "@sections/Products";
import WhatsNew from "@sections/WhatsNew";
import { Inter } from "next/font/google";
import { useContext } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Landing() {
  return (
    <div
      className={`w-full flex flex-col justify-between gap-y-20 pb-8 ${inter.className} transition-all duration-300`}
    >
      <Home />
      <WhatsNew />
      <Products />
      <AfterSales />
      <Benefit />
      <ContactUs />
    </div>
  );
}
