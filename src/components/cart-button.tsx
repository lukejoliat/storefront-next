"use client";

import { FaShoppingCart } from "react-icons/fa";
import { DrawerButton } from "./drawer-button";
import { useContext, useRef, useState } from "react";
import { CartContext } from "@/context/cart-context";
import { Drawer } from "./drawer";

export const CartButton = () => {
  const { items } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);
  const handleCartClick = () => {
    setIsOpen(!isOpen)
  }
  const input: HTMLInputElement | null = document.querySelector('.drawer-toggle')
  console.log({ input });

  const ref = useRef<HTMLInputElement>();
  return (<>
    <DrawerButton>
      <label htmlFor="my-drawer" className="drawer-overlay"></label>

      open: {input && input.checked ? 'true' : 'false'}
      <div className="relative">
        {items.size > 0 && (
          <div className="h-4 w-4 bg-red-600 rounded-full absolute bottom-2 left-3 text-white flex items-center justify-center text-center">
            {items.size}
          </div>
        )}
        <FaShoppingCart onClick={handleCartClick} height={100} />
      </div>
    </DrawerButton>
    <Drawer.Portal isOpen={input && input.checked}>
      this is the test content
    </Drawer.Portal>
  </>
  );
};
