import { basePath } from "@/utils/base-path";
import { NextResponse } from "next/server";
import { Product } from "../product-list";

export const ENDPOINT = `${basePath()}/products/api` as const;

export const products: Product[] = [
  {
    id: "123",
    title: "Megatron",
    description: "Leader of the decepticons. Megatron is a Decepticon, one of the lineal descendants of the military hardware robots created by the Quintessons on their factory world of Cybertron.",
    price: 50.0,
    photo: "/megatron.jpeg",
    photos: ["/megatron.jpeg", "/meg-1.webp", "/meg-2.webp", '/long.png'],
  },
  {
    id: "456",
    title: "Optimus Prime",
    description:
      "Leader of the Autobots. This Transformers Optimus Prime action figure converts from robot to Transformers truck mode",
    price: 55.0,
    photo: "/optimus.jpeg",
    photos: ["/optimus.jpeg", "/opt-2.webp", "/opt-1.webp", '/wide.png'],
  },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  await new Promise((resolve) => setTimeout(resolve, Number(2000)));

  if (id) {
    const product = NextResponse.json(products.find((p) => p.id === id));
    if (product) return product
    else throw new Error('Could not find product')
  }

  return NextResponse.json(products);
}
