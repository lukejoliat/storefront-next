"use client";

import { CartContext } from "@/context/cart-context";
import { useToggle } from "@/utils/use-toggle";
import { useContext, useMemo, useRef, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { Drawer } from "./drawer";
import { ShoppingCart } from "./shopping-cart";

export const CartButton = () => {
  const { items } = useContext(CartContext);
  const open = useToggle();

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
        <FaShoppingCart onClick={open.toggle} height={100} size={20} />
      </div>
      <Drawer isOpen={open.value} setIsOpen={open.toggle} position="right">
        <div className="flex items-center">
          {/* <h1 className="text-2xl">Filters</h1> */}
          <h1 className="font-bold text-2xl">Shopping Cart</h1>
          <IoMdCloseCircle
            className="ms-auto cursor-pointer"
            size={30}
            onClick={open.toggle}
          />
        </div>
        <ShoppingCart />
      </Drawer>
    </>
  );
};
