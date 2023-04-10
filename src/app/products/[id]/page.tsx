import { Container } from "@/components/container";
import { Main } from "@/components/main";
import { SideBar } from "@/components/sidebar";
import { Product } from "../product-list";

type Params = { id: string }

export default async function Page({ params }: { params: Params }) {
    const product = await fetch(`http://localhost:3000/products/api?id=${params.id}`).then(res => res.json()) as Product

    return (
        <Container layout="horizontal">
            <SideBar>
                {/* TODO: refactor to include actual photos */}
                Photos
            </SideBar>
            <Main>
                <div>
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                </div>
            </Main>
        </Container>
    )
}