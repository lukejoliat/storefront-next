import { NextResponse } from "next/server";
import { Product } from "../product-list";
import { randomUUID } from "crypto";
import { log } from "console";
import { basePath } from "@/utils/base-path";

export const ENDPOINT = `${basePath()}/products/api` as const;

export const products: Product[] = [
  {
    id: "123",
    title: "Megatron",
    description: "Leader of the decepticons.",
    price: 50.0,
    photo: "/megatron.jpeg",
    photos: ["/megatron.jpeg", "/meg-1.webp", "/meg-2.webp"],
  },
  {
    id: "456",
    title: "Optimus Prime",
    description:
      "Leader of the Autobots. This Transformers Optimus Prime action figure converts from robot to Transformers truck mode",
    price: 55.0,
    photo: "/optimus.jpeg",
    photos: ["/optimus.jpeg", "/opt-2.webp", "/opt-1.webp"],
  },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  await new Promise((resolve) => setTimeout(resolve, Number(2000)));

  if (id) return NextResponse.json(products.find((p) => p.id === id) || {});
  return NextResponse.json(products);
}
