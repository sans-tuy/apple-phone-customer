"use client";

import { Badge, Button, Input } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoNotificationsOutline } from "react-icons/io5";

export default function Navbar() {
  return (
    <header className="bg-white w-full border border-slate-200 sticky top-0 z-50 py-3 px-52 flex items-center gap-4">
      <Image
        alt="apple logo"
        className="rounded-3xl object-cover"
        src="/images/png-apple-logo-9716.png"
        width={35}
        height={35}
      />
      <Input label="" placeholder="Search..." />
      <Button color="primary" className="px-8">
        Search
      </Button>
      <Badge color="danger" content={5} isInvisible={false} shape="circle">
        <Link href={"/notification"}>
          <IoNotificationsOutline className="cursor-pointer" size={30} />
        </Link>
      </Badge>
      <Badge color="danger" content={5} isInvisible={false} shape="circle">
        <Link href={"/cart"}>
          <AiOutlineShoppingCart className="cursor-pointer" size={30} />
        </Link>
      </Badge>
    </header>
  );
}
