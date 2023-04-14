import Link from "next/link";
import { ENDPOINT as PRODUCTS } from "./api/route";
import { Card } from "@/components/card";
import { PATHS } from "../page";
import { ProductCard } from "./product-card";

export type Product = {
    id: string;
    title: string;
    price: number;
    description: string;
    photo: string;
    photos: any;
}

export enum Filters {
    NAME = 'name',
    PRICE_FROM = 'price-from',
    PRICE_TO = 'price-to'
}

export const ProductList = async ({ searchParams }: { searchParams: Record<string, string | undefined> }) => {

    // TODO: refactor for a method that returns basepath
    const products = await fetch(PRODUCTS).then(res => res.json()) as Product[]

    const filteredProducts = products.filter(p => {
        // TODO: make this dynamic
        return p.title.includes(searchParams.name || '')
            && p.price >= parseInt(searchParams[Filters.PRICE_FROM] || '0')
            && p.price <= parseInt(searchParams[Filters.PRICE_TO] || '100000000')
    })

    return (
        <>
            <div className="flex">
                {/* TODO: refactor to use component for product list item */}
                {
                    filteredProducts.map(p => (
                        <ProductCard product={p} />
                    ))
                }
            </div>
        </>
    )
}