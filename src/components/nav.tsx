import React from "react";
import { NavLink } from "./nav-link";
import { PATHS } from "@/app/page";

export function Nav() {
    return (
        <nav className="p-10">
            <ul className="menu menu-horizontal bg-base-100 rounded-box">
                <li><NavLink href={PATHS.HOME}>Home</NavLink></li>
                <li><NavLink href={PATHS.PRODUCTS}>Products</NavLink></li>
                <li><NavLink href={PATHS.NEW_ARRIVALS}>New Arrivals</NavLink></li>
                <li><NavLink href={PATHS.NEW_ARRIVALS}>Featured</NavLink></li>
            </ul>
        </nav>
    );
}