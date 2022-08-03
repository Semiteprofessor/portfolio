/** @format */

import React from "react";
import "./Slider.css";
import { CgMouse } from "react-icons/cg";
import { Link } from "react-scroll";

const Slider = () => {
	return (
		<div className="slider" id="slider">
			<div class="container">
				<div className="center">
					<div className="me">
						<p>hello, it's me</p>
						<span className="bar"></span>
						<p className="name">taiwo olapade</p>
						<span className="bar"></span>
						<h4>javascript developer</h4>
					</div>
					<div className="button">
						<Link to="about" smooth={true} duration={1000}>
							<button className="btn">Read More</button>
						</Link>
						<Link to="portfolio" smooth={true} duration={1000}>
							<button className="btn">My Works</button>
						</Link>
					</div>
					<div className="bottom">
						<CgMouse className="mouse" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Slider;
