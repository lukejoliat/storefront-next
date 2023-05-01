import clsx from "clsx";
import { FC, ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
};

export const Card: FC<Props> = ({ className, children }) => (
  <div className={clsx("card bg-base-100 shadow-xl", className)}>
    {children}
  </div>
);

export const CardTitle = ({ children }: { children: ReactNode }) => (
  <h2 className="card-title">{children}</h2>
);

export const CardDescription = ({ children }: { children: ReactNode }) => (
  <p className="max-h-20 overflow-hidden">{children}</p>
);

export const CardActions = ({
  children,
  className,
  align,
}: {
  children: ReactNode;
  className?: string;
  align?: "left" | "right";
}) => (
  <div
    className={
      (clsx("card-actions", className),
      align === "left" ? "flex-start" : "flex-end")
    }
  >
    {children}
  </div>
);

export const CardBody = ({ children }: { children: ReactNode }) => (
  <div className="card-body">{children}</div>
);

export const CardImage = ({ children }: { children: ReactNode }) => (
  <figure>{children}</figure>
);
