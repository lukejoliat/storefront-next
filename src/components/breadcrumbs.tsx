'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

export type Crumb = {
    label: string;
    link: string;
}

type Props = {
    crumbs: Crumb[]
}

export const Breadcrumbs: FC<Props> = ({ crumbs = [] }) => {
    const pathname = usePathname();

    return (<>
        {crumbs.filter(c => {
            if (c.link === '/' || c.link === '') return c;
            if (pathname.includes(`${c.link}/`)) return c;
        }).map(c => (<Link href={c.link} key={`${c.label}-breadcrumb`}>{c.label} / </Link>))}</>
    )
}