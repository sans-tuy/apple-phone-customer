"use client";

import ButtonVariant from "@components/ButtonVariant";
import CardImage from "@components/CardImage";
import InputQuantityProduct from "@components/InputQuantityProduct";
import PreviewImage from "@components/PreviewImage";
import { variants } from "@constanst/dummyDb";
import { Button, Divider, Input, Tab, Tabs } from "@nextui-org/react";
import { Key } from "@react-types/shared";
import Image from "next/image";
import { useState } from "react";
import { BsChatLeftText } from "react-icons/bs";
import { CiEdit } from "react-icons/ci";
import { FiHeart, FiPlus } from "react-icons/fi";
import { GoShareAndroid } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Product() {
  const [selectedTab, setSelectedTab] = useState<Key>("detail");
  const [selectedVariant, setSelectedVariant] = useState<string>(
    variants[0].key
  );
  const [quantityProduct, setQuantityProduct] = useState(1);
  const [isUsingNote, setIsUsingNote] = useState(false);
  const [noteOrder, setNoteOrder] = useState("");
  const [expandDesc, setExpandDesc] = useState(false);
  const maxQty = 123;
  const handleSelectVariant = (key: string) => {
    setSelectedVariant(key);
  };
  const handleSelectionCHange = (key: Key) => {
    setSelectedTab(key);
  };
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
  const handleAddNote = () => {
    setIsUsingNote(!isUsingNote);
  };
  const handleChangeQtyProduct = (e: number) => {
    if (e > 0 && e <= maxQty && typeof e === "number") {
      setQuantityProduct(e);
    }
  };
  const notify = () => {
    toast.success("Success Add Cart !", {
      position: "bottom-center",
    });
  };
  const listImages = [
    "https://swiperjs.com/demos/images/nature-1.jpg",
    "https://swiperjs.com/demos/images/nature-2.jpg",
    "https://swiperjs.com/demos/images/nature-3.jpg",
    "https://swiperjs.com/demos/images/nature-4.jpg",
    "https://swiperjs.com/demos/images/nature-5.jpg",
  ];
  return (
    <section>
      <ToastContainer />
      {/* detail produk */}
      <div className="grid grid-cols-3 gap-4 p-10 relative">
        <div className="relative">
          <PreviewImage images={listImages} styles="sticky top-20" />
        </div>
        <div className="bg-white px-6">
          <div className="flex flex-col gap-3">
            <h3 className="md-bold-base">Iphone 13</h3>
            <div className="flex justify-between">
              <p className="sm-md-base text-red">Sold: 129</p>
              <p className="sm-md-base text-slate-400">Returns: 15-day</p>
              <p className="sm-md-base text-slate-400">Watchers: 1450</p>
            </div>
            <h3 className="xl-bold-base text-purple-500">IDR 10.000.000</h3>
          </div>
          <Divider className="my-4" />
          <div className="flex flex-col gap-3">
            <div className="flex gap-2">
              <p className="sm-bold-base">choose variant: </p>
              <p className="sm-md-base text-slate-400">{selectedVariant}</p>
            </div>
            <ButtonVariant
              variants={variants}
              handleSelectVariant={handleSelectVariant}
              selectedVariant={selectedVariant}
            />
          </div>
          <Divider className="mt-4" />
          <Tabs
            selectedKey={selectedTab}
            onSelectionChange={handleSelectionCHange}
            variant="underlined"
            aria-label="Tabs detail product"
            className="w-full mb-4"
            classNames={{
              tabList:
                "gap-6 w-full relative rounded-none p-0 border-b border-divider",
              cursor: "w-full bg-[#c084fc]",
              tab: "max-w-fit px-0 h-12",
              tabContent: "group-data-[selected=true]:text-[#a855f7]",
            }}
          >
            <Tab key="detail" title="Detail" />
            <Tab key="spesification" title="Spesification" />
            <Tab key="info" title="Important Notes" />
          </Tabs>
          <p className={`${expandDesc ? "" : "line-clamp-[10]"}`}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
            voluptatem rem ad illum maiores velit veritatis debitis obcaecati
            quisquam laborum, in eligendi numquam dolorem sunt magnam deserunt
            consequatur inventore hic laudantium. Iure dolorum ex nobis aperiam
            et iusto, consequuntur pariatur veritatis aliquid quaerat nihil,
            delectus, consequatur accusantium voluptas voluptate optio doloribus
            ipsum. Aperiam repellat ab, alias distinctio voluptatum vitae nobis
            assumenda ipsum provident rerum perspiciatis soluta, numquam nisi
            corrupti quam? Blanditiis culpa quas atque dolorum eaque consectetur
            deserunt facilis explicabo, nemo est sit aperiam vel provident
            perspiciatis eos distinctio autem aspernatur quaerat modi obcaecati
            eveniet. Dolor a optio illo molestias quibusdam veritatis at non
          </p>
          <button
            className="text-purple-500"
            onClick={() => setExpandDesc(!expandDesc)}
          >
            {expandDesc ? "collapse" : "expand..."}
          </button>
          <Divider className="mt-4" />
          <div className="flex flex-col gap-3">
            <p className="text-lg font-bold">Shipment</p>
            <div className="flex items-center gap-2">
              <IoLocationOutline size={20} />
              <p className="text-md text-slate-500">
                Shipment from North Jakarta
              </p>
            </div>
            <div className="flex items-center gap-2">
              <TbTruckDelivery size={20} />
              <p className="text-md text-slate-500">
                Ongkir regular 18rb - 22rb
              </p>
            </div>
            <div className="flex items-center gap-2">
              <TbTruckDelivery color="white" size={20} />
              <p className="text-md text-slate-400">
                Estimate 3 - 7 days shipment
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="border border-slate-400 rounded-md p-4 w-80 flex flex-col gap-3 sticky top-20">
            <p className="sm-bold-base">Add quantity and note</p>
            <div className="flex items-center gap-2">
              <Image
                alt="product-image"
                src={listImages[0]}
                width={30}
                height={30}
                className="rounded-sm"
              />
              <p>Iphone 13</p>
            </div>
            <Divider className="my-3" />
            <div className="flex gap-3 items-center">
              <InputQuantityProduct
                handleAddQty={handleAddQty}
                handleRemoveQty={handleRemoveQty}
                quantityProduct={quantityProduct}
                handleChangeQtyProduct={handleChangeQtyProduct}
              />
              <p>Stock: {maxQty}</p>
            </div>
            <div className="mt-4 flex flex-col gap-4">
              {!isUsingNote ? (
                <button
                  className="flex items-center gap-2 text-sm text-purple-500"
                  onClick={handleAddNote}
                >
                  <CiEdit className="text-purple-500" size={20} /> Tambah
                  Catatan
                </button>
              ) : (
                <>
                  <Input
                    type="email"
                    variant="bordered"
                    label="Notes"
                    placeholder="Example: colors, size"
                    color="secondary"
                    value={noteOrder}
                    onChange={(e) => setNoteOrder(e.target.value)}
                  />
                  <button
                    className="flex items-center gap-2 text-sm text-purple-500"
                    onClick={handleAddNote}
                  >
                    Batalkan Catatan
                  </button>
                </>
              )}
            </div>
            <div className="flex justify-between items-center py-4">
              <p className="sm-md-base">Subtotal</p>
              <p className="sm-bold-base">IDR 10.000.000</p>
            </div>
            <div className="flex flex-col gap-2">
              <Button
                className="flex items-center gap-2 text-white w-full"
                color="secondary"
                onClick={notify}
              >
                <FiPlus className="cursor-pointer " />
                Cart
              </Button>
              <Button
                className="flex items-center gap-2 text-purple-600 w-full"
                color="secondary"
                variant="bordered"
              >
                Buy Now
              </Button>
            </div>
            <div className="flex gap-2 justify-between mt-2">
              <button className="flex justify-center gap-2 items-center">
                <BsChatLeftText size={15} />
                <p>chat</p>
              </button>
              <Divider orientation="vertical" />
              <button className="flex justify-center gap-2 items-center">
                <FiHeart size={15} />
                <p>wishlist</p>
              </button>
              <Divider orientation="vertical" />
              <button className="flex justify-center gap-2 items-center">
                <GoShareAndroid size={15} />
                <p>share</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* rekomendasi produk */}
      <div className="mx-40 flex flex-col gap-4 mb-4">
        <h2 className="md-bold-base">Recomendation Product</h2>
        <div className="grid grid-cols-4  gap-10">
          {Array.from({ length: 12 }).map((_, index) => (
            <CardImage
              key={index}
              isfavorite
              img=""
              name="Iphone 14"
              price={13000000}
              sold={149}
              url="290321u3092013"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
