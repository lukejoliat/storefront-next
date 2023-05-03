import { Breadcrumbs, Crumb } from "@/components/breadcrumbs";
import clsx from "clsx";

export default function Layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const crumbs: Crumb[] = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Products",
      link: "/products",
    },
  ];

  return (
    <section>
      <Breadcrumbs crumbs={crumbs} />
      {children}
    </section>
  );
}
