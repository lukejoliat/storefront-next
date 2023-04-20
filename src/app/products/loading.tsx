export default function Loading() {
  return (
    <div className="flex flex-wrap">
      {/* TODO: refactor to use component for product list item */}

      {/* <ProductCard key={p.title} product={p} /> */}
      <div className="p-2 w-96 h-[480px] m-2 rounded-lg bg-slate-800"></div>
      <div className="p-2 w-96 h-[480px] m-2 rounded-lg bg-slate-800"></div>
      <div className="p-2 w-96 h-[480px] m-2 rounded-lg bg-slate-800"></div>
      <div className="p-2 w-96 h-[480px] m-2 rounded-lg bg-slate-800"></div>
      <div className="p-2 w-96 h-[480px] m-2 rounded-lg bg-slate-800"></div>
      <div className="p-2 w-96 h-[480px] m-2 rounded-lg bg-slate-800"></div>
    </div>
  );
}
