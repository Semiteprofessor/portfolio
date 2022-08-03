/** @format */

import React from "react";
// import { IoCodeSlash } from "react-icons/io5";
import { HiCode } from "react-icons/hi";
import { FaRegSmile, FaCoffee, FaCode } from "react-icons/fa";
import { DiGitBranch } from "react-icons/di";
import AnimatedNumber from "react-animated-number";
import "./Service.css";

const Service = () => {
	const lines = 175087;
	const project = 38;
	const coffee = 150;
	const customer = 18;

	return (
		<div className="service" id="service">
			<div className="container">
				<div className="center">
					<div classname="first">
						<div className="icon">
							<HiCode />
						</div>
						<div id="counter">
							<AnimatedNumber value={lines} duration={1000} />
						</div>
						<div className="words">
							<p>Line of Codes</p>
						</div>
					</div>
					<div classname="second">
						<div className="icon">
							<DiGitBranch />
						</div>
						<div id="counter">
							<AnimatedNumber value={project} duration={1000} />
						</div>
						<div className="words">
							<p>Projects Done</p>
						</div>
					</div>
					<div classname="third">
						<div className="icon">
							<FaCoffee />
						</div>
						<div id="counter">
							<AnimatedNumber value={coffee} duration={1000} />
						</div>
						<div className="words">
							<p>Cups of Cofees</p>
						</div>
					</div>
					<div classname="fourth">
						<div className="icon">
							<FaRegSmile />
						</div>
						<div id="counter">
							<AnimatedNumber value={customer} duration={1000} />
						</div>
						<div className="words">
							<p>Satisfied Customers</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Service;
