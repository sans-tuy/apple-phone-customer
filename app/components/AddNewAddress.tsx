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
import { Key } from "@react-types/shared";
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import "react-toastify/dist/ReactToastify.css";

export default function AddNewAddress() {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [subDistrict, setSubDistrict] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [statusLocation, setStatusLocation] = useState<Key>("home");
  const handleChangeStatusLocation = (key: Key) => setStatusLocation(key);
  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1 text-2xl font-bold text-center">
            Add New Address
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
      <Button variant="bordered" color="secondary" onClick={onOpen}>
        Add New Address
      </Button>
    </>
  );
}
