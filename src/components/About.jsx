/** @format */

import React from "react";
import "./About.css";
import $ from "jquery";

$(document).ready(function () {
	$(".sidebar-menu").mouseenter(function () {
		$(this).children(".expand").addClass("turn");
	});

	$(".sidebar-menu").mouseleave(function () {
		if ($(this).hasClass("open")) {
		} else {
			$(this).children(".expand").removeClass("turn");
		}
	});

	$(".sidebar-menu").click(function () {
		var $this = $(this);
		if ($this.hasClass("open")) {
			$(".sidebar-menu").removeClass("open");
			$(".sub-menu").stop(true).slideUp("fast");
			$(".expand").removeClass("turn");
			$this.removeClass("open");
			$this.children(".expand").removeClass("turn");
			$this.next().stop(true).slideUp("fast");
		} else {
			$(".sidebar-menu").removeClass("open");
			$(".sub-menu").stop(true).slideUp("fast");
			$(".expand").removeClass("turn");

			$this.addClass("open");
			$this.children(".expand").addClass("turn");
			$this.next().stop(true).slideDown("fast");
		}
	});
});

const About = () => {
	return (
		<div className="about" id="about">
			<div className="container">
				{/* Left */}
				<div className="left">
					<img src={require("../assets/images/me.jpg")} alt="" />
					<span className="info">Personal Info</span>
					<span className="bar"></span>
					<span>NAME:</span>
					<p>
						<b>Taiwo Olapade</b>
					</p>{" "}
					<br />
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
					<span className="talent">Talented JavaScript Developer</span>
					<blockquote className="block">
						I am a hard-worker, qualified and professional Full Stack developer
						with good communication skill who work effectively in a team and
						have the ability to meet deadline. I have years of experience in
						both frontend and backend, database administration and website
						design. Strong creative and analytical skills. Team player with an
						eye for detail.{" "}
					</blockquote>

					<div class="sidebar-1">
						<div class="sidebar-menu">
							Who Am I?<div class="expand"></div>
						</div>
						<div class="sub-menu">
							<ul>
								<li>
									I am a Software Developer who specialises in the design,
									testing and implementation of software using the JavaScript
									programming language. JavaScript should not to be confused
									with Java - despite sharing similar names, the two are
									distinctly different programming languages.
								</li>
							</ul>
						</div>
					</div>
					<div class="sidebar-1">
						<div class="sidebar-menu">
							What I'm Really Good At?<div class="expand"></div>
						</div>
						<div class="sub-menu">
							<ul>
								<li>
									With a strong JavaScript foundation, I have become an expert
									in both front-end and back-end web development and mobile app
									development. Undoubtedly, becoming a JavaScript developer has
									given a lot of potentials.
								</li>
							</ul>
						</div>
					</div>
					<div class="sidebar-1">
						<div class="sidebar-menu">
							How Can You Contact Me?<div class="expand"></div>
						</div>
						<div class="sub-menu">
							<ul>
								<li>
									<a href="https://www.linkedin.com/in/taiwo-olapade-2a4672105">
										LinkedIn
									</a>
								</li>
								<li>
									<a href="https://www.github.com/semiteprofessor">Github</a>
								</li>
								<li>Twitter - @geocodec</li>
								<li>E-Mail - semiteprofessor@gmail.com</li>
								<li>Phone - (+234) 806 9095 729</li>
							</ul>
						</div>
					</div>
					<div class="sidebar-1">
						<div class="sidebar-menu">
							What Is My Hobbies?<div class="expand"></div>
						</div>
						<div class="sub-menu">
							<ul>
								<li>Making reasearch and Lerning something new</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
