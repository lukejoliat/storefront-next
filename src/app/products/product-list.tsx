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
      !p.title.includes(searchParams[Filters.NAME] as string)
    ) {
      return false;
    }
    return true;
  });

  return (
    <>
      <div className="flex flex-wrap">
        {/* TODO: refactor to use component for product list item */}
        {filteredProducts.map((p) => (
          <ProductCard key={p.title} product={p} />
        ))}
      </div>
    </>
  );
};
