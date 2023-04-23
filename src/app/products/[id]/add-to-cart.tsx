"use client";

import { CartContext } from "@/context/cart-context";
import { useContext } from "react";
import { Product } from "../product-list";

export const AddToCart = ({ product }: { product: Product }) => {
  const context = useContext(CartContext);

  const handleAddClick = () => {
    context.setItems((items: Product[]) => [...items, product]);
  };

  return (
    <button className="btn btn-primary mt-6" onClick={handleAddClick}>
      Add to Cart
    </button>
  );
};
