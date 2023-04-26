import clsx from "clsx";
import { Props } from "next/script";
import { FC, ReactNode } from "react";

type DrawerProps = {
  children: ReactNode;
  className?: string | undefined;
};

export const Drawer = ({ children, className }: DrawerProps) => {
  return (
    <div className={clsx("drawer", className)}>
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      {children}
    </div>
  );
};

// eslint-disable-next-line react/display-name
Drawer.Content = ({ children, className }: DrawerProps) => {
  return <div className={clsx("drawer-content", className)}>{children}</div>;
};

// eslint-disable-next-line react/display-name
Drawer.Side = ({ children }: DrawerProps) => {
  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer" className="drawer-overlay"></label>
      <div className="p-4 w-80 bg-base-100 text-base-content">{children}</div>
    </div>
  );
};
