"use client";

import { CartContext } from "@/context/cart-context";
import { useContext, useRef, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { NewDrawer } from "./new-drawer";
import { ShoppingCart } from "./shopping-cart";

export const CartButton = () => {
  const { items } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);
  const handleCartClick = () => {
    setIsOpen((prev) => !prev);
  };

  const ref = useRef<HTMLInputElement>();
  return (
    <>
      <div className="relative">
        {items.size > 0 && (
          <div className="h-4 w-4 bg-red-600 rounded-full absolute bottom-2 left-3 text-white flex items-center justify-center text-center">
            {items.size}
          </div>
        )}
        <FaShoppingCart onClick={handleCartClick} height={100} />
      </div>
      <NewDrawer isOpen={isOpen} setIsOpen={handleCartClick} position="left">
        <ShoppingCart />
      </NewDrawer>
    </>
  );
};
