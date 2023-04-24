import { PATHS } from "@/app/page";
import Image from "next/image";
import logo from "../../public/autobot.png";
import { CartButton } from "./cart-button";
import { NavLink } from "./nav-link";
import { Search } from "./search";

export function Nav() {
  return (
    <nav className="p-10 flex items-center">
      <Image src={logo} alt="logo" width={50} />
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
      <div className="h-full ml-4 cursor-pointer flex items-center">
        <CartButton />
      </div>
    </nav>
  );
}
