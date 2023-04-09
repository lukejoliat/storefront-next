import clsx from "clsx";

export default function Layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode,
}) {
  return (
    <section>
      <div className={clsx('p-4')}>These / are / the / breadcrumbs...</div>
      {children}
    </section>
  );
}