import clsx from "clsx";
import { FC, ReactNode } from "react"

type Props = {
    children: ReactNode;
}

export const Main: FC<Props> = ({ children }) => {
    return (
        <div className={clsx('flex-1 p-4')}>{children}</div>
    )
}