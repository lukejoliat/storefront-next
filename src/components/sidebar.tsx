import clsx from "clsx";
import { FC, ReactNode } from "react";

type Props = {
    children: ReactNode;
}

// TODO: refactor to try sidebar setup with parallel routes? Other options?
// TODO: make sidebar responsive
export const SideBar: FC<Props> = ({ children }) => {
    return (
        <div className={clsx('p-4 max-w-sm')}>{children}</div>
    )
}