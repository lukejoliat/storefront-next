import { Container } from "@/components/container";
import { Main } from "@/components/main";
import { SideBar } from "@/components/sidebar";
import { ProductList } from "./product-list";
import { ProductFilters } from "./product-filters";
import { ReadonlyURLSearchParams } from "next/navigation";
import { Suspense } from "react";
import Loading from "./loading";

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
            </Main>
        </Container>
    );
}
