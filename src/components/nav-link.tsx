import Link, { LinkProps } from "next/link"
import { FC, ReactNode } from "react"

type Props = LinkProps & {
    children: ReactNode
}

export const NavLink: FC<Props> = (props) => {
    return <Link {...props} />
}