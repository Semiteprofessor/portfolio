/** @format */

import React, { useState } from "react";
import { RiMenuFoldLine, RiMenuUnfoldLine } from "react-icons/ri";
import "./Header.css";

const Header = () => {
	const [active, setActive] = useState(false);
	const handleClick = () => setActive(!active);
	return (
		<div className="header">
			<div className="container">
				<h1>
					<span className="secondary">Olapade</span>
					<span className="primary">Taiwo</span>
				</h1>
				<ul className={`nav-menu ${active && "active"}`}>
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/about">About</a>
					</li>
					<li>
						<a href="/service">Service</a>
					</li>
					<li>
						<a href="/skill">Skills</a>
					</li>
					<li>
						<a href="/experience">Experiences</a>
					</li>
					<li>
						<a href="/portfolio">Portfolio</a>
					</li>
					<li>
						<a href="/testimonial">Testimonials</a>
					</li>
					<li>
						<a href="/blog">Blog</a>
					</li>
					<li>
						<a href="/contact">Contact Us</a>
					</li>
				</ul>
				<div className="hamburger"  onClick={handleClick}>
					{active ? (
						<RiMenuUnfoldLine className="icon" />
					) : (
						<RiMenuFoldLine className="icon" />
					)}
				</div>
			</div>
		</div>
	);
};

export default Header;
