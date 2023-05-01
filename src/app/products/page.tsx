import { Container } from "@/components/container";
import { Main } from "@/components/main";
import { SideBar } from "@/components/sidebar";
import { ReadonlyURLSearchParams } from "next/navigation";
import { Suspense } from "react";
import Loading from "./loading";
import { ProductFilters } from "./components/product-filters";
import { ProductList } from "./components/product-list";

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
