"use client";

import { filterProduct } from "@constanst/data";
import { dataDummyProducts } from "@constanst/dummyDb";
import { slideInTransition } from "@motion/motion";
import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Fragment, useMemo, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function Products() {
  const [filterActive, setFilterActive] = useState("all");
  const handleMouseOver = (event: React.MouseEvent<HTMLButtonElement>) => {
    const buttonElement = event.currentTarget;
    const arrowIcon = buttonElement.querySelector(".arrow-icon") as HTMLElement;
    if (arrowIcon) {
      arrowIcon.style.transform = "translateX(0.5rem)";
    }
  };

  const handleBtnFilter = (currFilter: string) => {
    setFilterActive(currFilter);
  };

  const filteredProducts = useMemo(
    () =>
      dataDummyProducts.filter((product) => {
        if (filterActive === "all") {
          return product;
        } else if (filterActive === "new") {
          return product.isNew;
        } else {
          return product.isPopuler;
        }
      }),
    [filterActive]
  );

  const handleMouseOut = (event: React.MouseEvent<HTMLButtonElement>) => {
    const buttonElement = event.currentTarget;
    const arrowIcon = buttonElement.querySelector(".arrow-icon") as HTMLElement;
    if (arrowIcon) {
      arrowIcon.style.transform = "translateX(0)";
    }
  };
  return (
    <motion.section
      viewport={{ once: true }}
      initial="hidden"
      whileInView="show"
      className="mt-8 transition-all duration-300 relative lg:p-4 lg:mt-4"
      id="products"
    >
      <motion.div className="col-span-2 mt-[7rem] lg:mt-0">
        <motion.div
          variants={slideInTransition("up", "tween", 0.3, 1.5)}
          className="absolute invisible lg:visible left-[10%] top-20 mx-auto bg-gradient-to-t from-transparent to-cyan-100  bg-clip-text text-7xl font-extrabold text-transparent opacity-60 lg:left-[36vw] lg:top-0"
        >
          Our Products
        </motion.div>
        <motion.h1
          variants={slideInTransition("up", "tween", 0.5, 1.8)}
          className="absolute bottom-0 h-fit left-[14vw] top-14 mx-auto text-5xl font-extrabold text-cyan-300 lg:left-[42vw] lg:top-8"
        >
          Our Products
        </motion.h1>
      </motion.div>

      <motion.div
        variants={slideInTransition("up", "tween", 1.5, 2.5)}
        className="lg:mt-[6rem] text-xl w-full text-black text-center flex flex-col gap-3 items-center"
      >
        <p className="text-base w-[400px] lg:w-[500px] px-10">
          Find a new phone that fits your budget, get it delivered to your and
          adjust what you need.
        </p>
        <div className="flex gap-3 font-lg font-sans ">
          {filterProduct.map((product, idx) => (
            <Fragment key={idx}>
              <button
                className={`hover:text-slate-600 ${
                  filterActive === product.value
                    ? "font-bold border-b-2 border-black"
                    : "font-normal text-slate-400"
                }`}
                onClick={() => handleBtnFilter(product.value)}
              >
                {product.title}
              </button>
              {filterProduct.length !== idx + 1 && <p>|</p>}
            </Fragment>
          ))}
        </div>
      </motion.div>

      <div className="mt-32 gap-x-40 gap-y-10 px-10 w-full flex flex-wrap lg:px-50 ">
        {filteredProducts.map((product) => (
          <Card
            className="w-96 h-[500px] shadow-md hover:shadow-xl transition-all duration-300"
            key={`product-${product.id}`}
          >
            <CardHeader className="flex justify-center">
              <Image
                src={product.image}
                alt="Shoes"
                width={320}
                height={320}
                quality={30}
                className="hover:scale-105 transition-all duration-300"
              />
            </CardHeader>
            <CardBody className="flex flex-col justify-between p-6">
              <div>
                <strong className="text-xl line-clamp-1">{product.name}</strong>
                <p className="text-sm line-clamp-2">{product.description}</p>
              </div>
              <div className="flex justify-end items-center">
                <Button
                  variant="ghost"
                  color="secondary"
                  className="btn btn-info btn-outline"
                >
                  Buy Now
                </Button>
                <button
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                  className="flex p-3 items-center btn-detail"
                >
                  View More
                  <IoIosArrowForward className="arrow-icon transition-all duration-300" />
                </button>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </motion.section>
  );
}
