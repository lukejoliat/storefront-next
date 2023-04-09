import { Container } from "@/components/container";
import { Main } from "@/components/main";
import { SideBar } from "@/components/sidebar";

export default async function Page({ params }: any) {
    return (
        <Container layout="horizontal">
            <SideBar>
                Photos
            </SideBar>
            <Main>
                product: {params.id}
            </Main>
        </Container>
    )
}