import { FC } from "react"
import { PATHS } from "../page"
import { Product } from "./product-list"
import { Card } from "@/components/card"

type Props = {
    product: Product
}

export const ProductCard: FC<Props> = ({ product }) => {
    return (
        <Card {...product} link={`${PATHS.PRODUCTS}/${product.id}`} className="p-2" />
    )
}