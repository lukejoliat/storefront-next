import clsx from "clsx";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  layout?: "horizontal" | "vertical";
  className?: string | undefined;
};

export const Container: FC<Props> = ({ children, layout, className }) => {
  return (
    <div className={clsx("p-4 flex-col md:flex-row max-w-7xl m-auto", { flex: layout === "horizontal" }, className)}>
      {children}
    </div>
  );
};
