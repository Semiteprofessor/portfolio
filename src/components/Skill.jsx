/** @format */

import React from "react";
import { FaPaintBrush, FaCameraRetro, FaServicestack } from "react-icons/fa";
import { HiCode, HiOutlineSpeakerphone } from "react-icons/hi";
import { MdComputer } from "react-icons/md";
import { GrHostMaintenance } from "react-icons/gr";
import "./Skill.css";

const Skill = () => {
	return (
		<div className="skill" id="skill">
			<div className="container">
				{/* Top */}
				<div className="top">
					<h2>here is what i'm doing</h2>
					<span className="bar"></span>
					<p>
						Professional JavaScript (Full Stack developer) with years of
						experience in both frontend and backend, database administration and
						website design.
					</p>
				</div>
				<div className="bottom">
					<div className="wrapper">
						<div className="icon">
							<FaPaintBrush />
						</div>
						<h2>DESIGNING</h2>
						<p>
							Work on the appearance, layout, and, in some cases, content of a
							website. I design easy to use, aesthetically pleasing, and suits
							the user group and brand of your website.
						</p>
					</div>
					<div className="wrapper">
						<div className="icon">
							<HiCode />
						</div>
						<h2>DEVELOPMENT</h2>
						<p>
							Making and maintaining websites. Develop overall look and feel of
							webpage. Handling technical aspects of a website, including its
							performance and capacity.
						</p>
					</div>
					<div className="wrapper">
						<div className="icon">
							<MdComputer />
						</div>
						<h2>RESPONSIVE DESIGN</h2>
						<p>
							Designers size elements in relative units (%) and apply media
							queries, so their designs can automatically adapt to the browser
							space to ensure content consistency across devices.
						</p>
					</div>
					<div className="wrapper">
						<div className="icon">
							<FaServicestack />
						</div>
						<h2>24/7 SUPPORT</h2>
						<p>
							24/7 support services are here to ensure our customers' success
							and business productivity – whether for on-site assistance,
							technical, or remote support.
						</p>
					</div>
					<div className="wrapper">
						<div className="icon">
							<HiOutlineSpeakerphone />
						</div>
						<h2>BRANDING</h2>
						<p>
							I pride myself in creating effective, engaging ecommerce sites for
							creatives who are building "big little" brands.
						</p>
					</div>
					<div className="wrapper">
						<div className="icon">
							<GrHostMaintenance />
						</div>
						<h2>MAINTENANCE </h2>
						<p>
							Constant process of updating, modifying, and reassessing software
							for correcting the faults, for better performance, updating the
							application with the latest operating system, bug fixing, and many
							more.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skill;
