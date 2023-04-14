import { Container } from "@/components/container";
import { Main } from "@/components/main";
import { SideBar } from "@/components/sidebar";
import { Product } from "../product-list";
import { ENDPOINT as PRODUCTS } from "../api/route";

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
                <div>
                    <h3>Title: {product.title}</h3>
                    <p>Description: {product.description}</p>
                    <p>Price: {product.price}</p>
                </div>
            </Main>
        </Container>
    )
}