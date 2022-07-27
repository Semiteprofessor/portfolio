/** @format */

import React from "react";
import "./Experience.css";

const Experience = () => {
	return (
		<div className="experience">
			<div className="container">
				{/* Top */}
				<div className="top">
					<h2>technical skills</h2>
					<span className="bar"></span>
					<p>
						Authoritatively foster bricks-and-clicks networks rather than
						superior architectures. Compellingly mesh frictionless imperatives
						vis-a-vis emerging.
					</p>
				</div>
				<div className="circular-rating">
					<div className="circular">
            <p>HTML</p>
						<div class="rating-bar">
							<div class="skills html">90%</div>
						</div>
					</div>
					<div className="circular">
						<p>CSS</p>
						<div class="rating-bar">
							<div class="skills css">80%</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Experience;
