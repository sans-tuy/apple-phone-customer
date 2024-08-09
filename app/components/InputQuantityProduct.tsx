"use client";

import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

interface Props {
  quantityProduct: number;
  handleChangeQtyProduct: (e: number) => void;
  handleAddQty: () => void;
  handleRemoveQty: () => void;
}

export default function InputQuantityProduct(props: Props) {
  const {
    handleAddQty,
    handleRemoveQty,
    quantityProduct,
    handleChangeQtyProduct,
  } = props;
  const [isActive, setIsActive] = useState(true);
  return (
    <div
      className={`rounded-md flex items-center px-4 py-1 border ${
        isActive ? "border-purple-600" : "border-purple-500"
      }`}
    >
      <FiMinus
        className="cursor-pointer text-purple-500"
        onClick={handleRemoveQty}
      />
      <input
        value={quantityProduct}
        onChange={(e) => handleChangeQtyProduct(Number(e.target.value))}
        type="text"
        className="w-10 text-center ml-1 focus:outline-none"
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
      />
      <FiPlus
        className="cursor-pointer text-purple-500"
        onClick={handleAddQty}
      />
    </div>
  );
}
