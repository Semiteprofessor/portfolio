/** @format */

import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
	return (
		<div className="portfolio" id="portfolio">
			<div className="container">
				{/* Top */}
				<div className="top">
					<h2>Successful Projects Completed</h2>
					<span className="bar"></span>
				</div>
				<div className="bottom">
					<div class="card">
						<div class="front">
							<div class="logo">
								<span>
									<img src={require("../assets/images/prop.jpg")} alt="" />
								</span>
							</div>
						</div>
						<div class="back">
							<h1>
								<a href="https://landwayng.com">Real Estate Management</a>
							</h1>
						</div>
					</div>
					<div class="card">
						<div class="front">
							<div class="logo">
								<span>
									<img
										src={require("../assets/images/e-commerce-1.jpg")}
										alt=""
									/>
								</span>
							</div>
						</div>
						<div class="back">
							<h1>
								<a href="https://e-shop.herokuapp.com">e-Commerce</a>
							</h1>
						</div>
					</div>
					<div class="card">
						<div class="front">
							<div class="logo">
								<span>
									<img src={require("../assets/images/student.jpg")} alt="" />
								</span>
							</div>
						</div>
						<div class="back">
							<h1>
								<a href="https://rancho-school.herokuapp.com">
									Student Management System
								</a>
							</h1>
						</div>
					</div>
					<div class="card">
						<div class="front">
							<div class="logo">
								<span>
									<img
										src={require("../assets/images/attendance.jpg")}
										alt=""
									/>
								</span>
							</div>
						</div>
						<div class="back">
							<h1>
								<a href="https://attendance.herokuapp.com">
									Attendance Management
								</a>
							</h1>
						</div>
					</div>
					<div class="card">
						<div class="front">
							<div class="logo">
								<span>
									<img src={require("../assets/images/hospital.jpg")} alt="" />
								</span>
							</div>
						</div>
						<div class="back">
							<h1>
								<a href="https://doctor-assistant.herokuapp.com">
									Hospital Management
								</a>
							</h1>
						</div>
					</div>
					<div class="card">
						<div class="front">
							<div class="logo">
								<span>
									<img
										src={require("../assets/images/restaurant1.jpg")}
										alt=""
									/>
								</span>
							</div>
						</div>
						<div class="back">
							<h1>
								<a href="https://restaurant.herokuapp.com">
									Restaurant / Food Ordering
								</a>
							</h1>
						</div>
					</div>
					<div class="card">
						<div class="front">
							<div class="logo">
								<span>
									<img src={require("../assets/images/pay.jpg")} alt="" />
								</span>
							</div>
						</div>
						<div class="back">
							<h1>
								<a href="https://rancho-pay.herokuapp.com">Payment App</a>
							</h1>
						</div>
					</div>
					<div class="card">
						<div class="front">
							<div class="logo">
								<span>
									<img src={require("../assets/images/blogging.jpg")} alt="" />
								</span>
							</div>
						</div>
						<div class="back">
							<h1>
								<a href="https://rancho-blog.herokuapp.com">Blogging App</a>
							</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
