"use client";

import { Product } from "@/app/products/product-list";
import { ReactNode, createContext, useState } from "react";

type Cart = {
  items: Product[];
  setItems: any;
};

export const CartContext = createContext<Cart>({
  items: [],
  setItems: () => {},
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<Product[]>([]);
  return (
    <CartContext.Provider value={{ items, setItems }}>
      {children}
    </CartContext.Provider>
  );
};
