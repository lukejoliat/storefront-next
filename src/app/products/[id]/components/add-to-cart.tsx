"use client";

import { CartContext } from "@/context/cart-context";
import { useContext, useState } from "react";
import { Product } from "../../components/product-list";

export const AddToCart = ({ product }: { product: Product }) => {
  const context = useContext(CartContext);
  const [count, setCount] = useState(1);
  const increment = () => setCount((count) => (count += 1));
  const decrement = () => setCount((count) => (count <= 1 ? 1 : (count -= 1)));

  const handleAddClick = () => {
    context.addItem(product, count);
  };

  return (
    <>
      <Counter count={count} increment={increment} decrement={decrement} />
      <button className="btn btn-primary w-full" onClick={handleAddClick}>
        Add to Cart
      </button>
    </>
  );
};

const Counter = ({
  count,
  increment,
  decrement,
}: {
  count: number;
  increment: () => void;
  decrement: () => void;
}) => {
  return (
    <div className="my-4">
      <div className="btn-group w-full">
        <button className="btn" onClick={decrement}>
          -
        </button>
        <button className="btn flex-1">Quantity ({count})</button>
        <button className="btn" onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
};
