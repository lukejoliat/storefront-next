import { FC } from "react"
import { Product } from "../product-list"

type Props = {
    product: Product
}

export const ProductDetail: FC<Props> = ({ product }) => {
    return (
        <div className="hero bg-base-200 place-items-start">
            <div className="hero-content justify-normal flex-col lg:flex-row">
                <img src={product.photo} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{product.title}</h1>
                    <p className="py-6">{product.description}</p>
                    <button className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}