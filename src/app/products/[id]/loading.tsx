import { Container } from "@/components/container";
import { ProductDescription, ProductTitle } from "./components/product-detail";

export default function Loading() {
  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
        <div className="flex flex-col m-auto md:m-0">
          <div className="w-full h-[600px] rounded-lg bg-slate-600 animate-pulse"></div>
        </div>
        <div className="md:p-6">
          <ProductTitle className="hidden md:block">
            <h2>
              <div className="w-[250px] h-12 rounded-lg bg-slate-600 animate-pulse"></div>
            </h2>
          </ProductTitle>
          <ProductDescription>
            <div className="w-[420px] h-6 rounded-lg bg-slate-600 animate-pulse my-2"></div>
            <div className="w-[290px] h-6 rounded-lg bg-slate-600 animate-pulse my-2"></div>
            <div className="w-[170px] h-6 rounded-lg bg-slate-600 animate-pulse my-2"></div>
            <div className="w-[600px] h-6 rounded-lg bg-slate-600 animate-pulse my-2"></div>
          </ProductDescription>
        </div>
      </div>
      <div className="divider"></div>
      <h1 className="text-lg">Comments (32)</h1>
    </Container>
  );
}
