"use client";

import { Product } from "@/app/products/product-list";
import { CartContext } from "@/context/cart-context";
import { useContext, useMemo } from "react";
import { FaTrash } from "react-icons/fa";

const format = new Intl.NumberFormat("en-us", {
  style: "currency",
  currency: "USD",
});

export const ShoppingCart = () => {
  const context = useContext(CartContext);

  const handleRemoveItem = (removeIndex: number) => {
    context.setItems((items: Product[]) => {
      return items.filter((i, index) => index !== removeIndex);
    });
  };

  const disabled = useMemo(
    () => !context.items || !context.items.length,
    [context]
  );

  const total = useMemo(
    () =>
      context.items.reduce((acc, i) => {
        return (acc += i.price);
      }, 0),
    [context]
  );

  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-2xl">Shopping Cart</h1>
      <ul className="menu">
        {context.items.map((i, index) => (
          <li key={i.id} className="flex">
            <span>
              {i.title}
              <FaTrash onClick={() => handleRemoveItem(index)} />
            </span>
          </li>
        ))}
      </ul>
      <div className="divider">yo</div>
      <div>Total: {format.format(total)}</div>
      <button className="btn btn-primary mt-6" disabled={disabled}>
        Checkout
      </button>
    </div>
  );
};
