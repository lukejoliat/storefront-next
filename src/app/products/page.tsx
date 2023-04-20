import { Container } from "@/components/container";
import { Main } from "@/components/main";
import { SideBar } from "@/components/sidebar";
import { ProductList } from "./product-list";
import { ProductFilters } from "./product-filters";
import { ReadonlyURLSearchParams } from "next/navigation";
import { Suspense } from "react";
import Loading from "./loading";
import { ClientComponent } from "./client-component";
import { ServerComponent } from "./server-component";

export enum Filters {
    NAME = "name",
    PRICE_FROM = "price-from",
    PRICE_TO = "price-to",
}

export default async function Page({
    searchParams,
}: {
    searchParams: ReadonlyURLSearchParams;
}) {
    return (
        <Container layout="horizontal">
            <SideBar>
                <ProductFilters />
            </SideBar>
            <Main>
                <Suspense fallback={<Loading />}>
                    {/* @ts-expect-error Async Server Component */}
                    <ProductList searchParams={searchParams} />
                </Suspense>
                <ClientComponent>
                    <ServerComponent />
                </ClientComponent>
            </Main>
        </Container>
    );
}
