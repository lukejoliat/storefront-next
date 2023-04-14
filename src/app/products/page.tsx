import { Container } from "@/components/container";
import { Main } from "@/components/main";
import { SideBar } from "@/components/sidebar";
import { ProductList } from "./product-list";
import { ProductFilters } from "./product-filters";
import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default async function Page({ searchParams }: { searchParams: ReadonlyURLSearchParams }) {
    return (
        <Container layout="horizontal">
            <SideBar>
                <ProductFilters />
            </SideBar>
            <Main>
                <Suspense fallback={'I am loading...'}>
                    {/* @ts-expect-error Async Server Component */}
                    <ProductList searchParams={searchParams} />
                </Suspense>
            </Main>
        </Container>
    )
}