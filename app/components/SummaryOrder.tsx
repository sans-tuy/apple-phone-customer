"use client";

import {
  Button,
  cn,
  Divider,
  Input,
  InternalForwardRefRenderFunction,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Radio,
  RadioGroup,
  RadioProps,
  Tab,
  Tabs,
  useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";
import { Key } from "@react-types/shared";
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import "react-toastify/dist/ReactToastify.css";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const CustomRadio = (props: any) => {
  const { children, ...otherProps } = props;

  return (
    <Radio
      {...otherProps}
      classNames={{
        base: cn(
          "inline-flex m-0 bg-content1 hover:bg-content2 items-center justify-between",
          "flex-row-reverse max-w-[700px] cursor-pointer rounded-lg gap-4 p-4 border-2 border-transparent",
          "data-[selected=true]:border-primary"
        ),
      }}
    >
      <div className="flex gap-4 items-center">{children}</div>
    </Radio>
  );
};

export default function SummaryOrder() {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const router = useRouter();
  const idPayment = Math.random().toString(36).substring(2, 15);
  const handlePayment = () => {
    router.push(`/payment/${idPayment}`);
  };
  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1 text-2xl font-bold text-center">
            Payment
          </ModalHeader>
          <ModalBody>
            <p className="font-bold text-lg">Payment Method</p>
            <RadioGroup
              label=""
              value={selectedPaymentMethod}
              onValueChange={setSelectedPaymentMethod}
            >
              <CustomRadio value="bri">
                <Image
                  src="/images/briva-icon.png"
                  width={40}
                  height={40}
                  alt="bri"
                />
                BRI Virtual Account
              </CustomRadio>
              <Divider />
              <CustomRadio value="bca">
                <Image
                  src="/images/bca-icon.webp"
                  width={40}
                  height={40}
                  alt="bca"
                />
                BCA Virtual Account
              </CustomRadio>
              <Divider />
              <CustomRadio value="dana">
                <Image
                  src="/images/dana-icon.png"
                  width={40}
                  height={40}
                  alt="dana"
                />
                DANA
              </CustomRadio>
              <Divider />
            </RadioGroup>
            <div></div>
            <div className="flex justify-between">
              <div>
                <p className="font-bold">Total Payment</p>
                <p className="font-bold">Rp 61.000</p>
              </div>
              <Button
                variant="bordered"
                color="primary"
                className="flex items-center w-52"
                onClick={handlePayment}
              >
                <IoShieldCheckmarkOutline size={20} />
                Pay
              </Button>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
      <p className="text-xl font-bold">Summary Order</p>
      <div className="flex justify-between">
        <p className="text-sm text-slate-400">Total price (1 product)</p>
        <p className="text-sm ">RP176.000</p>
      </div>
      <div className="flex justify-between">
        <p className="text-sm text-slate-400">Total shipment</p>
        <p className="text-sm ">RP20.000</p>
      </div>
      <div className="flex justify-between">
        <p className="text-sm text-slate-400">Aplication Cost</p>
        <p className="text-sm ">RP1.000</p>
      </div>
      <Divider />
      <div className="flex justify-between">
        <p>Total</p>
        <p>RP199.000</p>
      </div>
      <Divider />
      <Button className="w-full" color="secondary" onClick={onOpen}>
        Payment Method
      </Button>
    </>
  );
}
