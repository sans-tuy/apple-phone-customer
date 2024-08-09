"use client";

import { useState } from "react";

interface Props {
  variants: {
    key: string;
    value: string;
    soldOut: boolean;
  }[];
  handleSelectVariant: (key: string) => void;
  selectedVariant: string;
}

export default function ButtonVariant(props: Props) {
  const { variants, selectedVariant, handleSelectVariant } = props;

  return (
    <div className="flex gap-2">
      {variants.map((variant) => (
        <button
          disabled={variant.soldOut}
          key={`list-product-variant-${variant.key}`}
          onClick={() => handleSelectVariant(variant.key)}
          className={`border px-4 py-2 rounded-md disabled:text-slate-300 disabled:border-slate-300 disabled:cursor-no-drop hover:text-purple-500 hover:border-purple-500 ${
            selectedVariant === variant.key
              ? "text-purple-500 border-purple-500"
              : "text-slate-600 border-slate-500"
          }`}
        >
          {variant.value}
        </button>
      ))}
    </div>
  );
}
