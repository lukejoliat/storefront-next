import clsx from "clsx";
import { FC, ReactNode } from "react";

type Props = {
    children: ReactNode;
}

export const SideBar: FC<Props> = ({ children }) => {
    return (
        <div className={clsx('p-4 max-w-sm')}>{children}</div>
    )
}