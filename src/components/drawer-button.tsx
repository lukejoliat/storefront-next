import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const DrawerButton: FC<Props> = ({ children }) => {
  return (
    <label htmlFor="my-drawer" className="drawer-button cursor-pointer">
      {children}
    </label>
  );
};
