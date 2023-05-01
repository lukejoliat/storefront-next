"use client";

import { Product } from "@/app/products/components/product-list";
import { CartContext } from "@/context/cart-context";
import { formatter } from "@/utils/formatter";
import { useContext, useMemo } from "react";
import { FaTrash } from "react-icons/fa";

export const ShoppingCart = () => {
  const { items, removeItem } = useContext(CartContext);

  const handleRemoveItem = (item?: Product) => {
    if (item) removeItem(item);
  };

  const disabled = useMemo(() => !items || !items.size, [items]);

  const total = useMemo(() => {
    let total = 0;
    items.forEach((item, i) => {
      total += item.product.price * item.quantity;
    });
    return total;
  }, [items]);

  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-2xl">Shopping Cart</h1>
      <ul className="menu">
        {[...items.entries()].map(([key, item]) => (
          <li key={key} className="flex">
            <span>
              {item.product?.title}
              {item.quantity > 1 && <span>x{item.quantity}</span>}
              <FaTrash onClick={() => handleRemoveItem(item.product)} />
            </span>
          </li>
        ))}
      </ul>
      <div className="divider"></div>
      <div>Total: {formatter.USD.format(total)}</div>
      <button className="btn btn-primary mt-6" disabled={disabled}>
        Checkout
      </button>
    </div>
  );
};
