'use client'

import Image from "next/image";
import { FC, useState } from "react";
import { Product } from "../product-list";
import { AddToCart } from "./add-to-cart";
import { ProductPhotos } from "./product-photos";

type Props = {
  product: Product;
};

export const ProductDetail: FC<Props> = ({ product }) => {
  const [currentPhoto, setCurrentPhoto] = useState<string>(product.photo);

  const handleClick = (photo: string) => {
    setCurrentPhoto(photo);
  }

  return (
    <div className="flex">
      <ProductPhotos photos={product.photos} handleClick={handleClick} />
      <div className="hero place-items-start">
        {/* TODO: refactor to include actual photos */}

        <div className="hero-content justify-normal flex-col lg:flex-row">
          <Image
            src={currentPhoto}
            alt="Product Photo"
            className="rounded-lg shadow-2xl max-w-2xl w-full"
            width={1000}
            height={1000}
          />
          <div className="self-start md:p-6">
            <h1 className="text-5xl font-bold">{product.title}</h1>
            <p className="py-6">{product.description}</p>
            <div className="stats bg-primary text-primary-content block md:grid">
              <div className="stat">
                <div className="stat-title">Price</div>
                <div className="stat-value">$89,400</div>
                <div className="stat-actions">
                  <button className="btn btn-sm btn-success">Add funds</button>
                </div>
              </div>
              <div className="stat">
                <div className="stat-title">Reviews</div>
                <div className="stat-value">⭐⭐⭐⭐⭐</div>
                <div className="stat-actions">
                  <button className="btn btn-sm">Withdrawal</button>
                  <button className="btn btn-sm">deposit</button>
                </div>
              </div>
            </div>
            <AddToCart product={product} />
          </div>
        </div>
      </div></div>
  );
};
