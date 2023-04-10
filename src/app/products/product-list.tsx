import Link from "next/link"
import { PATHS } from "../page"


export type Product = {
    id: string;
    title: string;
    price: number;
    description: string;
    photos: any;
}

export const ProductList = async () => {
    // TODO: refactor for a method that returns basepath
    const products = await fetch('http://localhost:3000/products/api').then(res => res.json()) as Product[]
    return (
        <>
            <div>Product List.</div>
            <div>
                {/* TODO: refactor to use component for product list item */}
                {
                    products.map(p => (
                        <div>

                            <Link href={`/products/${p.id}`}>{p.title}</Link>
                            <p>
                                {p.description}
                            </p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}