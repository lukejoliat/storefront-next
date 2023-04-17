import { Container } from "@/components/container";
import { Main } from "@/components/main";
import { SideBar } from "@/components/sidebar";
import { Product } from "../product-list";
import { ENDPOINT as PRODUCTS } from "../api/route";
import { ProductDetail } from "./product-detail";

type Params = { id: string }

export default async function Page({ params }: { params: Params }) {
    // TODO: error handling
    const product = await fetch(`${PRODUCTS}?id=${params.id}`).then(res => res.json()) as Product

    return (
        <Container layout="horizontal">
            <SideBar>
                {/* TODO: refactor to include actual photos */}
                Photos
            </SideBar>
            <Main>
                <ProductDetail product={product} />
            </Main>
        </Container>
    )
}