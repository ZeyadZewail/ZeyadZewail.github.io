"use client";

import React, { useEffect, useState } from "react";
import { styles } from "../util/styles";
import logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import { navLinks } from "../constants/constants";
import Image from "next/image";

const Navbar = () => {
	const [active, setActive] = useState("");
	const [toggle, setToggle] = useState(false);

	return (
		<nav className={`${styles.paddingX} w-full items-center py-5 fixed top-0 z-20 bg-primary`}>
			<div className="w-full flex justify-between items-center max-w-7xl mx-auto">
				<div
					className="flex items-center gap-2"
					onClick={() => {
						setActive("");
						window.scrollTo(0, 0);
					}}>
					<Image src={logo} alt="logo" className="w-9 h-9 object-contain" />
					<p className="text-white  text-[18px] font-bold cursor-pointer ">
						Zeyad Zewail <span className="md:block hidden">Web Developer</span>
					</p>
				</div>
				<ul className="list-none hidden sm:flex flex-row gap-9">
					{navLinks.map((link) => (
						<li
							key={link.id}
							className={`${
								active === link.title ? "text-white" : "text-secondary"
							} hover:text-white text-[18px] font-medium cursor-pointer`}
							onClick={() => {
								setActive(link.title);
							}}>
							<a href={`#${link.id}`} aria-label={`${link.id}`}>
								{link.title}
							</a>
						</li>
					))}
				</ul>
				<div className="sm:hidden flex flex-1 justify-end items-center">
					<Image
						src={toggle ? close : menu}
						alt="menu"
						className="w-[28px] h-[28px] object-contain cursor-pointer"
						onClick={() => {
							setToggle(!toggle);
						}}></Image>
				</div>
				<div
					className={`${
						!toggle ? "hidden" : "flex"
					} sm:hidden p-6 black-gradient absolute top-[4rem] right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
					<ul className="list-none flex justify-end items-start flex-col gap-4">
						{navLinks.map((link) => (
							<li
								key={link.id}
								className={`${
									active === link.title ? "text-white" : "text-secondary"
								} hover:text-white text-[16px] font-medium cursor-pointer`}
								onClick={() => {
									setActive(link.title);
									setToggle(false);
								}}>
								<a href={`#${link.id}`}>{link.title}</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
