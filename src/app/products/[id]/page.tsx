import { Container } from "@/components/container";
import { Main } from "@/components/main";
import { SideBar } from "@/components/sidebar";
import { Product } from "../product-list";
import { ENDPOINT as PRODUCTS } from "../api/route";
import { ProductDetail } from "./product-detail";
import Image from "next/image";

type Params = { id: string };

export default async function Page({ params }: { params: Params }) {
  // TODO: error handling
  const product = (await fetch(`${PRODUCTS}?id=${params.id}`).then((res) =>
    res.json()
  )) as Product;

  return (
    <Container layout="horizontal" className="bg-base-200 my-6 rounded-md">
      <ProductDetail product={product} />
    </Container>
  );
}
