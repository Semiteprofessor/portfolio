/** @format */

import React from "react";
import "./Experience.css";

const Experience = () => {
	return (
		<div className="experience" id="experience">
			<div className="container">
				{/* Top */}
				<div className="top">
					<h2>technical skills</h2>
					<span className="bar"></span>
					<p>
						- Full Stack Web App Development <br /> - Javascript proficiency{" "}
						<br /> - Strong frontend development skill <br /> - Custom Databases{" "}
						<br /> - User Interface/User Experience <br /> - Web Design Ability
						to work in a team <br /> - Understanding of different platforms{" "}
						<br /> - High leve proficiency in database <br /> - Analytical mind
						and the ability to multitask 
					</p>
				</div>
				<div className="center"></div>

				<div className="middle">
					<h2>Tools / Frameworks</h2>
					<span className="bar"></span>
				</div>
				<div className="linear-rating">
					<div className="">
						<p className="title">HTML</p>
						<div className="rating-bar">
							<div className="skills html">95%</div>
						</div>
					</div>
					<div className="circular">
						<p className="title">CSS</p>
						<div className="rating-bar">
							<div className="skills css">80%</div>
						</div>
					</div>
					<div className="circular">
						<p className="title">JS</p>
						<div className="rating-bar">
							<div className="skills js">70%</div>
						</div>
					</div>
					<div className="circular">
						<p className="title">React</p>
						<div className="rating-bar">
							<div className="skills react">80%</div>
						</div>
					</div>
					<div className="circular">
						<p className="title">Node</p>
						<div className="rating-bar">
							<div className="skills node">90%</div>
						</div>
					</div>
					<div className="circular">
						<p className="title">Redux</p>
						<div className="rating-bar">
							<div className="skills redux">95%</div>
						</div>
					</div>
					<div className="circular">
						<p className="title">AWS</p>
						<div className="rating-bar">
							<div className="skills aws">40%</div>
						</div>
					</div>
					<div className="circular">
						<p className="title">MySQL</p>
						<div className="rating-bar">
							<div className="skills mysql">85%</div>
						</div>
					</div>
					<div className="circular">
						<p className="title">Laravel</p>
						<div className="rating-bar">
							<div className="skills laravel">75%</div>
						</div>
					</div>
					<div className="circular">
						<p className="title">APIs</p>
						<div className="rating-bar">
							<div className="skills api">100%</div>
						</div>
					</div>
					<div className="circular">
						<p className="title">Webpack</p>
						<div class="rating-bar">
							<div class="skills webpack">85%</div>
						</div>
					</div>
					<div className="circular">
						<p className="title">MongoDB</p>
						<div className="rating-bar">
							<div className="skills mongo">90%</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Experience;
