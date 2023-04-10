import { Breadcrumbs } from "@/components/breadcrumbs";
import clsx from "clsx";

export default function Layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode,
}) {
  return (
    <section>
      <Breadcrumbs />
      {children}
    </section>
  );
}