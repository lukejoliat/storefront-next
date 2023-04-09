import clsx from "clsx"
import { FC, ReactNode } from "react"

type Props = {
    children: ReactNode;
    layout: 'horizontal' | 'vertical'
}

export const Container: FC<Props> = ({ children, layout }) => {
    return (
        <div className={clsx('p-4', { 'flex': layout === 'horizontal' })}>
            {children}
        </div>
    )
}