'use client'

import Image from "next/image";
import { FC, ReactNode, useState } from "react";
import { Product } from "../product-list";
import { AddToCart } from "./add-to-cart";
import { ProductPhotos } from "./product-photos";
import { formatter } from "@/utils/formatter";
import { useMediaQuery } from "@/utils/use-media-query";

type Props = {
  product: Product;
};

export const ProductDetail: FC<Props> = ({ product }) => {
  const [currentPhoto, setCurrentPhoto] = useState<string>(product.photo);
  const isMobile = useMediaQuery(600, { less: true })

  const handleClick = (photo: string) => {
    setCurrentPhoto(photo);
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
      <div className="flex flex-col m-auto">
        <Image
          src={currentPhoto}
          alt="Product Photo"
          className="w-full rounded-lg shadow-2xl md:object-scale-down md:h-[32rem]"
          width={1000}
          height={1000}
        />
        <ProductPhotos photos={product.photos} handleClick={handleClick} className="flex-row mt-2 hidden md:flex" />
      </div>
      <div className="self-start md:p-6 flex-shrink">
        <ProductTitle>{product.title}</ProductTitle>
        <ProductDescription>{product.description}</ProductDescription>
        <div className="bg-primary text-primary-content stats stats-vertical md:stats-vertical lg:stats-horizontal shadow">
          <ProductReviews />
          <ProductPrice>{formatter.USD.format(product.price)}</ProductPrice>
        </div>
        <div className="m-4 w-fit inline-block">
          <div className="btn-group">
            <button className="btn">«</button>
            <button className="btn">Page 22</button>
            <button className="btn">»</button>
          </div>
        </div>
        <AddToCart product={product} />
      </div>
    </div>
  );
};

const ProductTitle = ({ children }: { children: ReactNode }) => (<h1 className="text-5xl font-bold mt-4">{children}</h1>)
const ProductDescription = ({ children }: { children: ReactNode }) => (<p className="py-6">{children}</p>)
const ProductReviews = () => (
  <div className="stat overflow-x-scroll">
    <div className="stat-title">Reviews</div>
    <div className="stat-value">⭐⭐⭐⭐⭐</div>
    <div className="stat-actions">
      <button className="btn btn-sm">See all reviews</button>
    </div>
  </div>
)
const ProductPrice = ({ children }: { children: string }) =>
(<div className="stat overflow-x-scroll">
  <div className="stat-title">Price</div>
  <div className="stat-value">{children}</div>
  <div className="stat-actions">
    <button className="btn btn-sm btn-success">Add funds</button>
  </div>
</div>)

// Option 1: <ProductInfo title={"test"} description={"megatron"} description={500} /> (bonus: simple)
// Option 2: <ProductInfo {...prodcuct} /> (bonus: simple)
// Option 3: <ProductContext><ProductPhotos /><ProductInfo /></ProductContext> (bonus: no props)
// Option 4: <ProductInfo><Description /><Price /><Reviews /></ProductInfo> (bonus: can rearrange)
// Option 5: <ProductInfo product={product} />
// Option 6: 