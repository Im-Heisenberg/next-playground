"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import classes from "./main-header.module.css";
function NavLink({ path, children }) {
	const pathname = usePathname();
	return (
		<li>
			<Link
				href={path}
				className={pathname.startsWith(path) ? classes.active : ""}
			>
				{children}
			</Link>
		</li>
	);
}

export default NavLink;
