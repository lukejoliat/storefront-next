import { formatter } from "@/utils/formatter";
import clsx from "clsx";
import { FC, ReactNode } from "react";
import { Product } from "../../components/product-list";
import { AddToCart } from "./add-to-cart";
import { ProductPhotos } from "./product-photos";

type Props = {
  product: Product;
};

export const ProductDetail: FC<Props> = ({ product }) => {
  console.log("product-detail");

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
        <div className="flex flex-col m-auto md:m-0">
          <ProductTitle className="block md:hidden mb-4">
            {product.title}
          </ProductTitle>
          <ProductPhotos photos={product.photos} />
        </div>
        <div className="md:p-6">
          <ProductTitle className="hidden md:block">
            {product.title}
          </ProductTitle>
          <ProductDescription>{product.description}</ProductDescription>
          <div className="bg-primary text-primary-content stats stats-vertical md:stats-vertical lg:stats-horizontal shadow w-full mb-10">
            <ProductReviews />
            <ProductPrice>{formatter.USD.format(product.price)}</ProductPrice>
          </div>
          <AddToCart product={product} />
        </div>
      </div>
      <div className="divider"></div>
      <h1 className="text-lg">Comments (32)</h1>
    </>
  );
};

export const ProductTitle = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <h1 className={clsx("text-5xl font-bold mt-4", className)}>{children}</h1>
);
export const ProductDescription = ({ children }: { children: ReactNode }) => (
  <p className="py-6">{children}</p>
);
export const ProductReviews = () => (
  <div className="stat overflow-x-scroll w-full">
    <div className="stat-title">Reviews</div>
    <div className="stat-value">⭐⭐⭐⭐⭐</div>
    <div className="stat-actions">
      <button className="btn btn-sm">See all reviews</button>
    </div>
  </div>
);
export const ProductPrice = ({ children }: { children: string }) => (
  <div className="stat overflow-x-scroll w-full">
    <div className="stat-title">Price</div>
    <div className="stat-value">{children}</div>
    <div className="stat-actions">
      <button className="btn btn-sm btn-success">Add funds</button>
    </div>
  </div>
);

// Option 1: <ProductInfo title={"test"} description={"megatron"} description={500} /> (bonus: simple)
// Option 2: <ProductInfo {...prodcuct} /> (bonus: simple)
// Option 3: <ProductContext><ProductGallery /><ProductInfo /></ProductContext> (bonus: no props)
// Option 4: <ProductInfo><Description /><Price /><Reviews /></ProductInfo> (bonus: can rearrange)
// Option 5: <ProductInfo product={product} />
// Option 6: ...
