/** @format */

import React from "react";
// import { IoCodeSlash } from "react-icons/io5";
import { HiCode } from "react-icons/hi";
import { FaRegSmile, FaCoffee, FaCode } from "react-icons/fa";
import { DiGitBranch } from "react-icons/di";
import $ from "jquery";
import "./Service.css";

$(".counter").each(function () {
	var $this = $(this),
		countTo = $this.attr("data-count");

	$({ countNum: $this.text() }).animate(
		{
			countNum: countTo,
		},

		{
			duration: 8000,
			easing: "linear",
			step: function () {
				$this.text(Math.floor(this.countNum));
			},
			complete: function () {
				$this.text(this.countNum);
				//alert('finished');
			},
		},
	);
});

const Service = () => {
	const lines = 175087;
	const project = 38;
	const coffee = 150;
	const customer = 18;
	return (
		<div className="service">
			<div className="container">
				<div className="center">
					<div>
						<div className="icon">
							<HiCode />
						</div>
						<div className="counter" data-count="">
						175087
						</div>
						<p>Line of Codes</p>
					</div>
					<div>
						<div className="icon">
							<DiGitBranch />
						</div>
						<div className="counter" data-count="">
							{project}
						</div>
						<p>Projects Done</p>
					</div>
					<div>
						<div className="icon">
							<FaCoffee />
						</div>
						<div className="counter" data-count="">
							{coffee}
						</div>
						<p>Cups of Cofees</p>
					</div>
					<div>
						<div className="icon">
							<FaRegSmile />
						</div>
						<div className="counter" data-count="">
							{customer}
						</div>
						<p>Satisfied Customers</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Service;
