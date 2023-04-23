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

  const handleRemoveItem = (item?: Product) => {
    context.removeItem(item);
  };

  const disabled = useMemo(
    () => !context.items || !context.items.size,
    [context]
  );

  const total = useMemo(() => {
    let total = 0;
    context.items.forEach((item, i) => {
      total = item.product.price * item.quantity;
    });
    return total;
  }, [context]);

  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-2xl">Shopping Cart</h1>
      <ul className="menu">
        {[...context.items.keys()].map((i, index) => (
          <li key={i} className="flex">
            <span>
              {context?.items?.get(i)?.product?.title}
              <span>Quantity: {context?.items?.get(i)?.quantity}</span>
              <FaTrash
                onClick={() =>
                  handleRemoveItem(context?.items?.get(i)?.product)
                }
              />
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
