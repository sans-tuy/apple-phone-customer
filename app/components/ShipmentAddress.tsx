"use client";

import OrderItem from "@components/OrderItem";
import {
  Button,
  Divider,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddressItem from "./AddressItem";
import AddNewAddress from "./AddNewAddress";

export default function ShipmentAddress() {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const [searchAddress, setSearchAddress] = useState("");
  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1 text-2xl font-bold text-center">
            List Address
          </ModalHeader>
          <ModalBody>
            <Input
              autoFocus
              label=""
              placeholder="write address/city/province shipment"
              variant="bordered"
              onChange={(e) => setSearchAddress(e.target.value)}
              value={searchAddress}
              className="outline-slate-400"
              startContent={
                <IoSearchOutline size={20} className="text-slate-400" />
              }
            />
            <AddNewAddress />
            <div className="overflow-y-scroll h-[400px]">
              <AddressItem
                currName="Anwar Sanusi"
                currPhone="08721631732313"
                isHome={true}
                currAddress="Jl. Argopuro no.56"
                currCity="Surabaya"
                currDistrict="Sawahan"
                currProvince="Jawa Timur"
                currSubDistrict="Sawahan"
              />
              <AddressItem
                currName="Anwar Sanusi"
                currPhone="08721631732313"
                isHome={false}
                currAddress="Jl. Argopuro no.56"
                currCity="Surabaya"
                currDistrict="Sawahan"
                currProvince="Jawa Timur"
                currSubDistrict="Sawahan"
              />
              <AddressItem
                currName="Anwar Sanusi"
                currPhone="08721631732313"
                isHome={true}
                currAddress="Jl. Argopuro no.56"
                currCity="Surabaya"
                currDistrict="Sawahan"
                currProvince="Jawa Timur"
                currSubDistrict="Sawahan"
              />
              <AddressItem
                currName="Anwar Sanusi"
                currPhone="08721631732313"
                isHome={false}
                currAddress="Jl. Argopuro no.56"
                currCity="Surabaya"
                currDistrict="Sawahan"
                currProvince="Jawa Timur"
                currSubDistrict="Sawahan"
              />
              <AddressItem
                currName="Anwar Sanusi"
                currPhone="08721631732313"
                isHome={true}
                currAddress="Jl. Argopuro no.56"
                currCity="Surabaya"
                currDistrict="Sawahan"
                currProvince="Jawa Timur"
                currSubDistrict="Sawahan"
              />
              <AddressItem
                currName="Anwar Sanusi"
                currPhone="08721631732313"
                isHome={false}
                currAddress="Jl. Argopuro no.56"
                currCity="Surabaya"
                currDistrict="Sawahan"
                currProvince="Jawa Timur"
                currSubDistrict="Sawahan"
              />
              <AddressItem
                currName="Anwar Sanusi"
                currPhone="08721631732313"
                isHome={true}
                currAddress="Jl. Argopuro no.56"
                currCity="Surabaya"
                currDistrict="Sawahan"
                currProvince="Jawa Timur"
                currSubDistrict="Sawahan"
              />
              <AddressItem
                currName="Anwar Sanusi"
                currPhone="08721631732313"
                isHome={false}
                currAddress="Jl. Argopuro no.56"
                currCity="Surabaya"
                currDistrict="Sawahan"
                currProvince="Jawa Timur"
                currSubDistrict="Sawahan"
              />
              <AddressItem
                currName="Anwar Sanusi"
                currPhone="08721631732313"
                isHome={true}
                currAddress="Jl. Argopuro no.56"
                currCity="Surabaya"
                currDistrict="Sawahan"
                currProvince="Jawa Timur"
                currSubDistrict="Sawahan"
              />
              <AddressItem
                currName="Anwar Sanusi"
                currPhone="08721631732313"
                isHome={false}
                currAddress="Jl. Argopuro no.56"
                currCity="Surabaya"
                currDistrict="Sawahan"
                currProvince="Jawa Timur"
                currSubDistrict="Sawahan"
              />
              <AddressItem
                currName="Anwar Sanusi"
                currPhone="08721631732313"
                isHome={true}
                currAddress="Jl. Argopuro no.56"
                currCity="Surabaya"
                currDistrict="Sawahan"
                currProvince="Jawa Timur"
                currSubDistrict="Sawahan"
              />
              <AddressItem
                currName="Anwar Sanusi"
                currPhone="08721631732313"
                isHome={false}
                currAddress="Jl. Argopuro no.56"
                currCity="Surabaya"
                currDistrict="Sawahan"
                currProvince="Jawa Timur"
                currSubDistrict="Sawahan"
              />
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>

      <div className="bg-white rounded-md p-6 flex flex-col gap-3">
        <p className="uppercase font-bold text-bold text-lg">
          Shipment Address
        </p>
        <div className="flex gap-2 items-center">
          <div className="flex gap-2 items-center text-sm font-medium">
            <FaLocationDot className="text-purple-500" size={15} />
            <p>Home | Anwar Sanusi</p>
          </div>
        </div>
        <p className="text-sm text-slate-400">
          Jalan Argopuro No.56, Sawahan, Surabaya, Jawa Timur, 6287863825615
        </p>
        <Button
          color="secondary"
          variant="bordered"
          className="w-max"
          onClick={onOpen}
        >
          Change Address
        </Button>
      </div>
    </>
  );
}
