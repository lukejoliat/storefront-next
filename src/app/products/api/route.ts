import { NextResponse } from "next/server";
import { Product } from "../product-list";
import { randomUUID } from "crypto";
import { log } from "console";
import { basePath } from "@/utils/base-path";

export const ENDPOINT = `${basePath()}/products/api` as const

export const products: Product[] = [
    {
        id: '123',
        title: 'Megatron',
        description: 'Leader of the decepticons',
        price: 50.00,
        photo: '/megatron.jpeg',
        photos: []
    },
    {
        id: '456',
        title: 'Optimus Prime',
        description: 'Leader of the Autobots',
        price: 55.00,
        photo: '/optimus.jpeg',
        photos: []
    }
]

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    await new Promise((resolve) => setTimeout(resolve, Number(2000)));

    if (id) return NextResponse.json(products.find(p => p.id === id) || {})
    return NextResponse.json(products)
}
