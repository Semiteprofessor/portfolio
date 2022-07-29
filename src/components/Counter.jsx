/** @format */

import React from "react";
import "./Counter.css";

const Counter = () => {
	return (
		<div className="counter">
			<div className="container">
				<h2>Work experiences</h2>
				<span className="bar"></span>
				<div class="timeline">
					<div class="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
						<div class="timeline__event__icon ">
							<i class="lni-cake"></i>
						</div>
						<div class="timeline__event__date">
							20-08-2018 <br /> Through <br /> 14-04-2019
						</div>
						<div class="timeline__event__content ">
							<div class="timeline__event__title">
								JavaScript (React) Frontend Developer
							</div>
							<div class="timeline__event__description">
								<p>
									JavaScript (React) Frontend developer for complete 8 months. I
									was able to dvelop severeal apps such as School Management
									app, e-Commerce app, Real Estate Managment app, Store
									Management app, Attendance Management app and many more...
								</p>
							</div>
						</div>
					</div>
					<div class="timeline__event animated fadeInUp delay-2s timeline__event--type2">
						<div class="timeline__event__icon">
							<i class="lni-burger"></i>
						</div>
						<div class="timeline__event__date">
							15-04-2019 <br /> Through <br /> 24-06-2020
						</div>
						<div class="timeline__event__content">
							<div class="timeline__event__title">
								JavaScript (Node) Backend Developer
							</div>
							<div class="timeline__event__description">
								<p>
									- Have experience with using Node.js to interact with MongoDB.{" "}
									<br />
									- Working with React Router for SPA’s application development.
									<br />
									- Worked with Axios & ReactJS for AJAX Calls making.
									<br />- Experienced with JSON and JWT for authentication
									security using Node JS.
								</p>
							</div>
						</div>
					</div>
					<div class="timeline__event animated fadeInUp delay-1s timeline__event--type3">
						<div class="timeline__event__icon">
							<i class="lni-slim"></i>
						</div>
						<div class="timeline__event__date">
							12-07-2020 <br /> Through <br /> 15-04-2022
							<br />
						</div>
						<div class="timeline__event__content">
							<div class="timeline__event__title">
								JavaScript (Full Stack) Developer{" "}
							</div>
							<div class="timeline__event__description">
								<p>
									- Experienced with React JS, Redux architecture <br />
									- Experienced in developing web pages using HTML/HTML5,
									CSS/CSS3, JavaScript, React JS, Redux, Bootstrap, Node.js,
									Ajax, <br />
									- MERN Stack development experience (Mongo dB, Express, React,
									Node) <br />- Have experience with using Node.js to interact
									with MongoDB. <br />- Working with React Router for SPA’s
									application development. <br />
									- Worked on Webpack Experience in the development of React
									components. <br />
								</p>
							</div>
						</div>
					</div>
					<div class="timeline__event animated fadeInUp timeline__event--type1">
						<div class="timeline__event__icon">
							<i class="lni-cake"></i>
						</div>
						<div class="timeline__event__date">
							20-05-2022 <br /> To <br /> Date
						</div>
						<div class="timeline__event__content">
							<div class="timeline__event__title">
								JavaScript (Full Stack) Developer{" "}
							</div>
							<div class="timeline__event__description">
								<p>
									- MERN Stack development experience (Mongo dB, Express, React,
									Node) <br />- Have experience with using Node.js to interact
									with MongoDB. <br />- Working with React Router for SPA’s
									application development. <br />
									- Built a webpack-dev-server. <br />
									- Experienced with JSON and JWT for authentication security
									using Node JS. <br />- Used Bootstrap for responsive web
									design
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Counter;
