"use client";

import {
  Button,
  Divider,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Tab,
  Tabs,
  useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { Key } from "@react-types/shared";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import "react-toastify/dist/ReactToastify.css";

interface Props {
  isHome: boolean;
  currAddress: string;
  currSubDistrict: string;
  currDistrict: string;
  currCity: string;
  currProvince: string;
  currName: string;
  currPhone: string;
}

export default function AddressItem(props: Props) {
  const {
    isHome,
    currAddress,
    currSubDistrict,
    currDistrict,
    currCity,
    currProvince,
    currName,
    currPhone,
  } = props;
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const [name, setName] = useState(currName);
  const [phone, setPhone] = useState(currPhone);
  const [address, setAddress] = useState(currAddress);
  const [subDistrict, setSubDistrict] = useState(currSubDistrict);
  const [district, setDistrict] = useState(currDistrict);
  const [city, setCity] = useState(currCity);
  const [province, setProvince] = useState(currProvince);
  const [statusLocation, setStatusLocation] = useState<Key>(
    isHome ? "home" : "office"
  );
  const handleChangeStatusLocation = (key: Key) => setStatusLocation(key);
  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1 text-2xl font-bold text-center">
            Edit Address
          </ModalHeader>
          <ModalBody>
            <Input
              autoFocus
              label="name"
              placeholder="name of receiver"
              variant="bordered"
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="outline-slate-400"
              labelPlacement="outside"
            />
            <Input
              autoFocus
              label="phone"
              placeholder="phone number of receiver"
              variant="bordered"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              className="outline-slate-400"
              labelPlacement="outside"
            />
            <Tabs
              aria-label="Options"
              color="secondary"
              variant="bordered"
              selectedKey={statusLocation}
              onSelectionChange={handleChangeStatusLocation}
            >
              <Tab
                key="home"
                title={
                  <div className="flex items-center space-x-2">
                    <AiOutlineHome size={20} />
                    <span>Home</span>
                  </div>
                }
              />
              <Tab
                key="office"
                title={
                  <div className="flex items-center space-x-2">
                    <HiOutlineBuildingOffice2 size={20} />
                    <span>Office</span>
                  </div>
                }
              />
            </Tabs>
            <Divider />
            <Input
              autoFocus
              label="address"
              placeholder="example: Jalan Argopuro No.56"
              variant="bordered"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              className="outline-slate-400"
              labelPlacement="outside"
            />
            {/* TODO need to be change to dropdown */}
            <Input
              autoFocus
              label="sub district"
              placeholder="example: Demak"
              variant="bordered"
              onChange={(e) => setSubDistrict(e.target.value)}
              value={subDistrict}
              className="outline-slate-400"
              labelPlacement="outside"
            />
            <Input
              autoFocus
              label="district"
              placeholder="example: Bubutan"
              variant="bordered"
              onChange={(e) => setDistrict(e.target.value)}
              value={district}
              className="outline-slate-400"
              labelPlacement="outside"
            />
            <Input
              autoFocus
              label="city"
              placeholder="example: Surabaya"
              variant="bordered"
              onChange={(e) => setCity(e.target.value)}
              value={city}
              className="outline-slate-400"
              labelPlacement="outside"
            />
            <Input
              autoFocus
              label="province"
              placeholder="example: Jawa Timur"
              variant="bordered"
              onChange={(e) => setProvince(e.target.value)}
              value={province}
              className="outline-slate-400"
              labelPlacement="outside"
            />
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={onClose}>
              Cancel
            </Button>
            <Button variant="bordered" color="secondary">
              Save Address
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <div className="border-b-1 border-slate-400 grid grid-cols-6 items-start p-2">
        {isHome ? (
          <AiOutlineHome size={20} className="text-slate-400" />
        ) : (
          <HiOutlineBuildingOffice2 size={20} className="text-slate-400" />
        )}
        <div className="col-span-4 flex flex-col gap-1">
          <p className="text-sm font-medium">{isHome ? "Home" : "Office"}</p>
          <p className="text-xs text-slate-400">
            Jalan Argopuro No.56, Sawahan, Surabaya, Jawa Timur
          </p>
          <div className="flex gap-2">
            <p className="text-xs text-slate-500">Anwar Sanusi</p>
            <p className="text-xs text-slate-500">081234567890</p>
          </div>
        </div>
        <button
          className="text-sm font-medium text-purple-500"
          onClick={onOpen}
        >
          Edit
        </button>
      </div>
    </>
  );
}
