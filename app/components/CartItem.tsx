"use client";

import InputQuantityProduct from "@components/InputQuantityProduct";
import {
  Button,
  Checkbox,
  Divider,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
import { GiNotebook } from "react-icons/gi";
import { GoTrash } from "react-icons/go";
import { IoMdHeartEmpty } from "react-icons/io";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CartItem() {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const [quantityProduct, setQuantityProduct] = useState(1);
  const [noteProduct, setNoteProduct] = useState("");
  const [isFavorite, setisFavorite] = useState(false);
  const maxQty = 123;
  const handleAddQty = () => {
    if (quantityProduct < maxQty) {
      setQuantityProduct(quantityProduct + 1);
    }
  };
  const handleRemoveQty = () => {
    if (quantityProduct > 1) {
      setQuantityProduct(quantityProduct - 1);
    }
  };
  const handleChangeQtyProduct = (e: number) => {
    if (e > 0 && e <= maxQty && typeof e === "number") {
      setQuantityProduct(e);
    }
  };
  const handleSaveNote = () => {
    toast.success("Success Add Notes Product !", {
      position: "bottom-center",
    });
    onClose();
  };
  const handleFavorite = () => {
    isFavorite
      ? toast.success("Success Add Favorite Product !", {
          position: "bottom-center",
        })
      : toast.error("Success Remove Favorite Product !", {
          position: "bottom-center",
        });
    setisFavorite(!isFavorite);
  };
  const handleDeleteCart = () => {
    toast.error("Success Delete Product !", {
      position: "bottom-center",
    });
  };
  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">
            Notes Product
          </ModalHeader>
          <ModalBody>
            <Input
              autoFocus
              label=""
              placeholder="Enter your notes product here..."
              variant="bordered"
              onChange={(e) => setNoteProduct(e.target.value)}
              value={noteProduct}
            />
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="flat" onPress={onClose}>
              Close
            </Button>
            <Button color="secondary" onPress={handleSaveNote}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <div className="bg-white rounded-md p-6 flex flex-col">
        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <Checkbox defaultSelected color="secondary" />
            <Image
              src="https://swiperjs.com/demos/images/nature-2.jpg"
              alt="img"
              height={100}
              width={70}
              className="rounded-md"
            />
            <div className="flex flex-col justify-center gap-3">
              <p className="sm-md-base uppercase">Iphone 13</p>
              <p className="text-xs text-slate">12/256 GB</p>
            </div>
          </div>
          <p className="text-purple-500 text-sm">IDR 38.000</p>
        </div>
        <div className="flex justify-end gap-4 items-center">
          <GiNotebook size={30} className="text-slate-400" onClick={onOpen} />
          <IoMdHeartEmpty
            size={30}
            className={`${isFavorite ? "text-red-400" : "text-slate-400"}`}
            onClick={handleFavorite}
          />
          <GoTrash
            size={30}
            className="text-slate-400"
            onClick={handleDeleteCart}
          />
          <InputQuantityProduct
            handleAddQty={handleAddQty}
            handleRemoveQty={handleRemoveQty}
            quantityProduct={quantityProduct}
            handleChangeQtyProduct={handleChangeQtyProduct}
          />
        </div>
      </div>
    </>
  );
}
