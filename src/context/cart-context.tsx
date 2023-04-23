"use client";

import { Product } from "@/app/products/product-list";
import { ReactNode, createContext, useState } from "react";

type Item = {
  id: string;
  quantity: number;
  product: Product;
};

type Cart = {
  items: Map<string, Item>;
  addItem: any;
  removeItem: any;
};

export const CartContext = createContext<Cart>({
  items: new Map(),
  removeItem: () => {},
  addItem: () => {},
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<Map<string, Item>>(new Map());

  const removeItem = (item: Product) => {
    const oldItem = items.get(item.id);

    if (oldItem && oldItem.quantity === 1) {
      items.delete(item.id);
      setItems(new Map(items));
    } else if (oldItem) {
      setItems(
        new Map(
          items.set(oldItem.id, {
            ...oldItem,
            quantity: (oldItem.quantity -= 1),
          })
        )
      );
    }
  };

  const addItem = (item: Product) => {
    const oldItem = items.get(item.id);
    if (oldItem) {
      setItems(
        new Map(
          items.set(item.id, {
            ...oldItem,
            quantity: oldItem.quantity + 1,
          })
        )
      );
    } else {
      setItems(
        new Map(items.set(item.id, { id: item.id, product: item, quantity: 1 }))
      );
    }
  };

  return (
    <CartContext.Provider value={{ items, removeItem, addItem }}>
      {children}
    </CartContext.Provider>
  );
};
