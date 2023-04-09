import { Container } from "@/components/container";
import { Main } from "@/components/main";
import { SideBar } from "@/components/sidebar";

export default async function Page() {
    return (
        <Container layout="horizontal">
            <SideBar>
                Filters
            </SideBar>
            <Main>
                Products
            </Main>
        </Container>
    )
}