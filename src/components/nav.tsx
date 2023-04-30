"use client";

import { PATHS } from "@/app/paths";
import Image from "next/image";
import logo from "../../public/autobot.png";
import { CartButton } from "./cart-button";
import { NavLink } from "./nav-link";
import { Search } from "./search";
import { useMediaQuery } from "@/utils/use-media-query";
import { IoMdMenu } from "react-icons/io";
import clsx from "clsx";
import { Container } from "./container";

export function Nav({ className }: { className?: string }) {
  const isMobile = useMediaQuery(600, { less: true });

  return (
    <Container>
      <nav className={clsx('flex items-center justify-between md:justify-normal', className)}>
        <Image src={logo} alt="logo" width={50} />
        {!isMobile ? (
          <>
            <ul className="menu menu-horizontal bg-base-100 rounded-box ml-6">
              <li>
                <NavLink href={PATHS.HOME}>Home</NavLink>
              </li>
              <li>
                <NavLink href={PATHS.PRODUCTS}>Products</NavLink>
              </li>
              <li>
                <NavLink href={PATHS.NEW_ARRIVALS}>New Arrivals</NavLink>
              </li>
              <li>
                <NavLink href={PATHS.NEW_ARRIVALS}>Featured</NavLink>
              </li>
            </ul>
            <Search />
          </>
        ) : (
          <div className="p-2">
            <IoMdMenu />
          </div>
        )}

        <div className="h-full ml-4 cursor-pointer flex items-center justify-end">
          <CartButton />
        </div>
      </nav>
    </Container>
  );
}
