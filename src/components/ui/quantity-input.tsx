"use client";

import React from "react";

function QuantityInput({
  value,
  onChange,
}: {
  value?: number;
  onChange?: (value: number) => void;
}) {
  const [quantity, setQuantity] = React.useState(value);
  return (
    <div className="relative flex items-center max-w-[8rem]">
      <button
        onClick={() => {
          setQuantity((prev = 0) => Math.max(0, prev - 1));
          if (quantity !== undefined) {
            onChange?.(quantity - 1);
          }
        }}
        type="button"
        id="decrement-button"
        data-input-counter-decrement="quantity-input"
        className="bg-slate-100 dark:bg-slate-700 dark:hover:bg-slate-600 dark:border-slate-600 hover:bg-slate-200 border border-slate-300 rounded-s-lg p-3 h-11 focus:ring-slate-100 dark:focus:ring-slate-700 focus:ring-2 focus:outline-none"
      >
        <svg
          className="w-3 h-3 text-slate-900 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 2"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h16"
          />
        </svg>
      </button>
      <input
        value={quantity}
        onChange={(e) => {
          setQuantity(Number(e.target.value));
          onChange?.(Number(e.target.value));
        }}
        type="text"
        id="quantity-input"
        data-input-counter
        aria-describedby="helper-text-explanation"
        className="bg-slate-50 border-x-0 border-slate-300 h-11 text-center text-slate-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="0"
        required
      />
      <button
        onClick={() => {
          setQuantity((prev = 0) => Math.max(0, prev + 1));
          if (quantity !== undefined) {
            onChange?.(quantity + 1);
          }
        }}
        type="button"
        id="increment-button"
        data-input-counter-increment="quantity-input"
        className="bg-slate-100 dark:bg-slate-700 dark:hover:bg-slate-600 dark:border-slate-600 hover:bg-slate-200 border border-slate-300 rounded-e-lg p-3 h-11 focus:ring-slate-100 dark:focus:ring-slate-700 focus:ring-2 focus:outline-none"
      >
        <svg
          className="w-3 h-3 text-slate-900 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 1v16M1 9h16"
          />
        </svg>
      </button>
    </div>
  );
}

export default QuantityInput;
