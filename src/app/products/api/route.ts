import { NextResponse } from "next/server";
import { Product } from "../product-list";
import { randomUUID } from "crypto";
import { log } from "console";



export const products: Product[] = [
    {
        id: '123',
        title: 'Megatron',
        description: 'Leader of the decepticons',
        price: 50.00,
        photos: []
    },
    {
        id: '456',
        title: 'Optimus Prime',
        description: 'Leader of the Autobots',
        price: 55.00,
        photos: []
    }
]

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    console.log({ id });
    console.log({ products })
    await new Promise((resolve) => setTimeout(resolve, Number(5000)));

    if (id) return NextResponse.json(products.find(p => p.id === id) || {})
    return NextResponse.json(products)
}
