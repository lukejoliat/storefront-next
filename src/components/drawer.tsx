import { Props } from "next/script";
import { FC, ReactNode } from "react";

type DrawerProps = {
  children: ReactNode;
};

export const Drawer = ({ children }: DrawerProps) => {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      {children}
    </div>
  );
};

// eslint-disable-next-line react/display-name
Drawer.Content = ({ children }: DrawerProps) => {
  return <div className="drawer-content">{children}</div>;
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
