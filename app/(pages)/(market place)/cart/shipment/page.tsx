"use client";

import OrderItem from "@components/OrderItem";
import ShipmentAddress from "@components/ShipmentAddress";
import SummaryOrder from "@components/SummaryOrder";
import { Button, Divider } from "@nextui-org/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Shipment() {
  return (
    <section className="bg-slate-100 min-h-screen w-screen px-60 flex flex-col gap-4 p-4">
      <ToastContainer />
      <h2 className="text-3xl font-bold">Shipment</h2>
      <div className="grid grid-cols-3 gap-10">
        {/* left layout */}
        <div className="col-span-2 flex flex-col gap-4">
          <ShipmentAddress />

          {Array.from({ length: 6 }).map((_, index) => (
            <OrderItem key={index} />
          ))}
        </div>

        {/* right layout */}
        <div className="bg-white rounded-md p-6 flex flex-col gap-4 h-max sticky top-20">
          <SummaryOrder />
        </div>
      </div>
    </section>
  );
}
