import Link from "next/link";
import React from "react";
import logo from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBg from "./main-header-background";
import NavLink from "./nav-link";
function MainHeader() {
	return (
		<>
			<MainHeaderBg />
			<header className={classes.header}>
				<Link href={"/"} className={classes.logo}>
					<Image src={logo} alt="brand-logo" priority />
				</Link>
				<nav className={classes.nav}>
					<ul>
						<NavLink path={"/meals"}>Meals</NavLink>
						<NavLink path={"/community"}>Community</NavLink>
					</ul>
				</nav>
			</header>
		</>
	);
}

export default MainHeader;
