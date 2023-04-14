import React from "react";
import { NavLink } from "./nav-link";
import { PATHS } from "@/app/page";

export function Nav() {
    return (
        <nav className="p-10">
            <ul className="flex">
                <li><NavLink href={PATHS.HOME}>Home</NavLink></li>
                <li><NavLink href={PATHS.PRODUCTS}>Products</NavLink></li>
                <li><NavLink href={PATHS.NEW_ARRIVALS}>New Arrivals</NavLink></li>
                <li>Featured</li>
            </ul>
        </nav>
    );
}