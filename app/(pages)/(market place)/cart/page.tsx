"use client";

import CartItem from "@components/CartItem";
import { Button, Checkbox, Divider } from "@nextui-org/react";
import Link from "next/link";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Cart() {
  return (
    <section className="bg-slate-100 min-h-screen w-screen px-60 flex flex-col gap-4 p-4">
      <ToastContainer />
      <h2 className="text-3xl font-bold">Cart</h2>
      <div className="grid grid-cols-3 gap-10">
        {/* left layout */}
        <div className="col-span-2 flex flex-col gap-4">
          <div className="bg-white rounded-md p-6 flex justify-between items-center">
            <Checkbox defaultSelected color="secondary" className="font-bold">
              Select All(1)
            </Checkbox>
            <button className="text-purple-500 text-sm">Remove</button>
          </div>
          {Array.from({ length: 6 }).map((_, index) => (
            <CartItem key={index} />
          ))}
        </div>

        {/* right layout */}
        <div className="bg-white rounded-md p-6 flex flex-col gap-4 h-[200px] sticky top-20">
          <p className="text-xl font-bold">Summary Order</p>
          <div className="flex justify-between">
            <p>Total</p>
            <p>RP176.000</p>
          </div>
          <Divider />
          <Link href={"/cart/shipment"}>
            <Button className="w-full" color="secondary">
              Checkout
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
