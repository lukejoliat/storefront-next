"use client";

import { CartContext } from "@/context/cart-context";
import { useContext, useMemo, useRef, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Drawer } from "./drawer";
import { ShoppingCart } from "./shopping-cart";

export const CartButton = () => {
  const { items } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);
  const handleCartClick = () => {
    setIsOpen((prev) => !prev);
  };
  const cartCount = useMemo(() => {
    let count = 0;
    items.forEach((i) => {
      count += i.quantity;
    });
    return count;
  }, [items]);

  const ref = useRef<HTMLInputElement>();
  return (
    <>
      <div className="relative">
        {cartCount > 0 && (
          <div className="h-4 w-4 bg-red-600 rounded-full absolute bottom-2 left-3 text-white flex items-center justify-center text-center">
            {cartCount}
          </div>
        )}
        <FaShoppingCart onClick={handleCartClick} height={100} />
      </div>
      <Drawer isOpen={isOpen} setIsOpen={handleCartClick} position="left">
        <ShoppingCart />
      </Drawer>
    </>
  );
};
