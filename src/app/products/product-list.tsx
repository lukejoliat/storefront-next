import { ENDPOINT as PRODUCTS } from "./api/route";
import { ProductCard } from "./product-card";
import { Filters } from "./page";

export type Product = {
  id: string;
  title: string;
  price: number;
  description: string;
  photo: string;
  photos: any;
};

export const ProductList = async ({
  searchParams,
}: {
  searchParams: Record<string, string | undefined>;
}) => {
  // TODO: refactor for a method that returns basepath
  const products = (await fetch(PRODUCTS).then((res) => res.json())) as Product[];

  const filteredProducts = products.filter((p) => {
    // TODO: make this dynamic
    // return p.title.includes(searchParams[Filters.NAME] || '')
    //     && p.price >= parseInt(searchParams[Filters.PRICE_FROM] || '0')
    //     && p.price <= parseInt(searchParams[Filters.PRICE_TO] || '100000000')

    // alternative:
    if (
      searchParams[Filters.PRICE_FROM] &&
      p.price <= parseInt(searchParams[Filters.PRICE_FROM] as string)
    ) {
      return false;
    }
    if (
      searchParams[Filters.PRICE_TO] &&
      p.price >= parseInt(searchParams[Filters.PRICE_TO] as string)
    ) {
      return false;
    }
    if (
      searchParams[Filters.NAME] &&
      !p.title.toLowerCase().includes(searchParams[Filters.NAME] as string)
    ) {
      return false;
    }
    return true;
  });

  if (!filteredProducts || filteredProducts.length <= 0) {
    return (
      <div className="alert alert-error shadow-lg mt-2">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span>No results. Clear Filters.</span>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-wrap">
      {/* TODO: refactor to use component for product list item */}
      {filteredProducts.map((p) => (
        <ProductCard key={p.title} product={p} />
      ))}
    </div>
  );
};
