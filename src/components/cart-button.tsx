"use client";

import { FaShoppingCart } from "react-icons/fa";
import { DrawerButton } from "./drawer-button";
import { useContext } from "react";
import { CartContext } from "@/context/cart-context";

export const CartButton = () => {
  const { items } = useContext(CartContext);
  return (
    <DrawerButton>
      <div className="relative">
        {items.size > 0 && (
          <div className="h-4 w-4 bg-red-600 rounded-full absolute bottom-2 left-3 text-white flex items-center justify-center text-center">
            {items.size}
          </div>
        )}
        <FaShoppingCart height={100} />
      </div>
    </DrawerButton>
  );
};
