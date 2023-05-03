"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import { Container } from "./container";

export type Crumb = {
  label: string;
  link: string;
};

type Props = {
  crumbs: Crumb[];
  className?: string | undefined;
};

export const Breadcrumbs: FC<Props> = ({ crumbs = [], className }) => {
  const pathname = usePathname();

  return (
    <Container>
      <div className={clsx("text-sm breadcrumbs hidden md:block", className)}>
        <ul>
          {crumbs
            .filter((c) => {
              if (c.link === "/" || c.link === "") return c;
              if (pathname.includes(`${c.link}/`)) return c;
            })
            .map((c) => (
              <li key={`${c.label}-breadcrumb`}>
                <Link href={c.link} className="text-base">
                  {c.label}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </Container>
  );
};
