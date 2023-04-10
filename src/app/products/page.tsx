import { Container } from "@/components/container";
import { Main } from "@/components/main";
import { SideBar } from "@/components/sidebar";
import { ProductList } from "./product-list";
import { ProductFilters } from "./product-filters";

export default async function Page() {
    return (
        <Container layout="horizontal">
            <SideBar>
                <ProductFilters />
            </SideBar>
            <Main>
                {/* @ts-expect-error Async Server Component */}
                <ProductList />
            </Main>
        </Container>
    )
}