/** @format */

import React from "react";
import "./About.css";

const About = () => {
	return (
		<div className="about">
			<div className="container">
				{/* Left */}
				<div className="left">
					<img src={require("../assets/images/me.jpg")} alt="" />
					<span className="info">Personal Info</span>
					<span className="bar"></span>
					<span>NAME:</span>
					<p>Taiwo Olapade</p> <br />
					<span>E-MAIL:</span>
					<p>
						<b>semiteprofessor@gmail.com</b>
					</p>{" "}
					<br />
					<span>PHONE:</span>
					<p>
						<b>+(234) 806 9095 729</b>
					</p>{" "}
					<br />
					<span>WEBSITE:</span>
					<p>
						<b>taiwoolapade.dev</b>
					</p>
				</div>

				{/* Right */}
				<div className="right">
					<span className="name">Taiwo Olapade</span>
					<span className="bar"></span>
					<span>Talented JavaScript Developer</span>
					<blockquote>
						I am a qualified and professional Full Stack developer with four
						years of experience in both frontend and backend, database
						administration and website design. Strong creative and analytical
						skills. Team player with an eye for detail.{" "}
					</blockquote>
				</div>
			</div>
		</div>
	);
};

export default About;
