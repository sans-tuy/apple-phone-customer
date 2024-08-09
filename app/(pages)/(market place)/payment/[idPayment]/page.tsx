"use client";

import CountdownTimer from "@components/CountdownTimer";
import { Button, Divider, Snippet } from "@nextui-org/react";
import Image from "next/image";

export default function PaymentStatus() {
  return (
    <section className="mx-[34rem] my-10 flex flex-col gap-8">
      <div className="text-center flex flex-col gap-4">
        <h2 className="text-xl font-bold flex flex-col gap-4">
          Finish Payment In <br />
          <CountdownTimer />
        </h2>
        <p className="text-slate-500">Deadline payment until</p>
        <h2 className="text-xl font-bold">Saturday, 10 August 2024 10:21</h2>
      </div>

      <div className="border border-slate-300 rounded-md p-4">
        <div className="flex gap-4 items-center justify-between p-4">
          <p>BRI Virtual Account</p>
          <Image
            src="/images/briva-icon.png"
            width={40}
            height={40}
            alt="payment-method"
          />
        </div>
        <Divider />
        <div className="flex gap-4 items-center justify-between p-4">
          <div className="flex flex-col gap-2">
            <p className="text-sm">virtual account number:</p>
            <p className="text-lg font-bold">80777087756283240</p>
          </div>
          <Snippet
            onCopy={() => {
              navigator.clipboard.writeText("80777087756283240");
            }}
            symbol=" "
            variant="flat"
            className="bg-white font-bold text-purple-500 p-0 m-0"
          >
            copy
          </Snippet>
        </div>
        <Divider />
        <div className="flex gap-4 items-center justify-between p-4">
          <p>Total Bill</p>
          <Snippet
            symbol="Rp "
            variant="flat"
            className="bg-white font-bold text-purple-500 p-0 m-0"
          >
            61.900
          </Snippet>
        </div>
      </div>

      <div className="flex justify-between gap-3">
        <Button color="secondary" variant="bordered" className="w-full">
          Detail Order
        </Button>
        <Button color="secondary" className="w-full">
          Shop again
        </Button>
      </div>
    </section>
  );
}
