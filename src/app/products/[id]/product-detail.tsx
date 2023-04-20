import Image from "next/image";
import { FC } from "react";
import { Product } from "../product-list";

type Props = {
  product: Product;
};

export const ProductDetail: FC<Props> = ({ product }) => {
  return (
    <div className="hero place-items-start">
      <div className="hero-content justify-normal flex-col lg:flex-row">
        <Image
          src={product.photo}
          alt="Product Photo"
          className="rounded-lg shadow-2xl max-w-2xl w-full"
          width={1000}
          height={1000}
        />
        <div className="self-start md:p-6">
          <h1 className="text-5xl font-bold">{product.title}</h1>
          <p className="py-6">{product.description}</p>
          <div className="stats bg-primary text-primary-content">
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
          <button className="btn btn-primary mt-6">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};
