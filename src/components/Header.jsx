/** @format */

import React, { useState } from "react";
import { RiMenuFoldLine, RiMenuUnfoldLine } from "react-icons/ri";
import { Link } from "react-scroll";
import "./Header.css";

const Header = () => {
	const [active, setActive] = useState(false);
	const handleClick = () => setActive(!active);
	return (
		<div className="header" id="header">
			<div className="container">
				<h1>
					<span className="secondary">Olapade</span>
					<span className="primary">Taiwo</span>
				</h1>
				<ul className={`nav-menu ${active && "active"}`}>
					<li onClick={() => setActive(active)}>
						<Link to="slider" smooth={true} duration={1000}>
							Home
						</Link>
					</li>
					<li onClick={() => setActive({ active })}>
						<Link to="about" smooth={true} duration={1000}>
							About
						</Link>
					</li>
					<li onClick={() => setActive(active)}>
						<Link to="service" smooth={true} duration={1000}>
							Service
						</Link>
					</li>
					<li onClick={() => setActive(active)}>
						<Link to="skill" smooth={true} duration={1000}>
							Skill
						</Link>
					</li>
					<li onClick={() => setActive(active)}>
						<Link to="experience" smooth={true} duration={1000}>
							Experience
						</Link>
					</li>
					<li onClick={() => setActive(active)}>
						<Link to="portfolio" smooth={true} duration={1000}>
							Portfolio
						</Link>
					</li>
					{/* <li>
						<a href="/testimonial">Testimonials</a>
					</li>
					<li>
						<a href="/blog">Blog</a>
					</li> */}
					<li onClick={() => setActive(active)}>
						<Link to="contact" smooth={true} duration={1000}>
							Contact
						</Link>
					</li>
				</ul>
				<div className="hamburger" onClick={handleClick}>
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
