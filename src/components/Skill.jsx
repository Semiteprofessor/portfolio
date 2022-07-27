/** @format */

import React from "react";
import { FaPaintBrush, FaCameraRetro, FaServicestack } from "react-icons/fa";
import { HiCode, HiOutlineSpeakerphone } from "react-icons/hi";
import { MdComputer } from "react-icons/md";
import "./Skill.css";

const Skill = () => {
	return (
		<div className="skill">
			<div className="container">
				{/* Top */}
				<div className="top">
					<h2>here is what i'm doing</h2>
					<span className="bar"></span>
					<p>
						Progressively reintermediate magnetic services vis-a-vis focused
						supply chains. Appropriately coordinate high quality human capital
						without
					</p>
				</div>
				<div className="bottom">
					<div className="wrapper">
						<div className="icon">
							<FaPaintBrush />
						</div>
						<h1>DESIGNING</h1>
						<p>
							Simplify corporate e-services after diverse imperatives.
							Competently leverage existing excellent systems and seamless
							value.
						</p>
					</div>
					<div className="wrapper">
						<div className="icon">
							<HiCode />
						</div>
						<h1>DEVELOPMENT</h1>
						<p>
							Simplify corporate e-services after diverse imperatives.
							Competently leverage existing excellent systems and seamless
							value.
						</p>
					</div>
					<div className="wrapper">
						<div className="icon">
							<MdComputer />
						</div>
						<h1>RESPONSIVE DESIGN</h1>
						<p>
							Simplify corporate e-services after diverse imperatives.
							Competently leverage existing excellent systems and seamless
							value.
						</p>
					</div>
					<div className="wrapper">
						<div className="icon">
							<FaServicestack />
						</div>
						<h1>24/7 SUPPORT</h1>
						<p>
							Simplify corporate e-services after diverse imperatives.
							Competently leverage existing excellent systems and seamless
							value.
						</p>
					</div>
					<div className="wrapper">
						<div className="icon">
							<HiOutlineSpeakerphone />
						</div>
						<h1>BRANDING</h1>
						<p>
							Simplify corporate e-services after diverse imperatives.
							Competently leverage existing excellent systems and seamless
							value.
						</p>
					</div>
					<div className="wrapper">
						<div className="icon">
							<FaCameraRetro />
						</div>
						<h1>PHOTOGRAPHY</h1>
						<p>
							Simplify corporate e-services after diverse imperatives.
							Competently leverage existing excellent systems and seamless
							value.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skill;
