import { Container } from "@/components/container";
import { Main } from "@/components/main";
import { SideBar } from "@/components/sidebar";
import { ReadonlyURLSearchParams } from "next/navigation";
import { Suspense } from "react";
import Loading from "./loading";
import { ProductFilters } from "./product-filters";
import { ProductList } from "./product-list";

export default async function Page({
  searchParams,
}: {
  searchParams: ReadonlyURLSearchParams;
}) {

  return (
    <Container layout="horizontal">
      <SideBar>
        <Suspense fallback={<Loading />}>
          <ProductFilters />
        </Suspense>
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
