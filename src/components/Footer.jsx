/** @format */

import React from "react";
import "./Footer.css";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import $ from "jquery";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$("#scroll-up").fadeIn();
		} else {
			$("#scroll-up").fadeOut();
		}
	});
	$("#scroll-up").click(function () {
		$("html, body").animate({ scrollTop: 0 }, 800);
		return false;
	});
	return (
		<div className="footer" id="footer">
			<div className="container">
				<div className="col col-1">
					<h1>
						<span className="secondary">Olapade</span>
						<span className="primary">Taiwo</span>
					</h1>
				</div>
				<div className="col">
					<h5>Support</h5>
					<span className="bar"></span>
					<a href="/">Contact Us</a>
					<a href="/">Chat</a>
					<a href="/">Help Center</a>
					<a href="/">FAQ</a>
				</div>
				<div className="col">
					<h5>Developers</h5>
					<span className="bar"></span>
					<a href="/">Cloud</a>
					<a href="/">Commerce</a>
					<a href="/">Pro</a>
					<a href="/">API</a>
				</div>
				<div className="col">
					<h5>Company</h5>
					<span className="bar"></span>
					<a href="/">About</a>
					<a href="/">Information</a>
					<a href="/">Legal</a>
					<a href="/">Privacy</a>
				</div>
				<div className="col">
					<h5>Social</h5>
					<span className="bar"></span>
					<a href="/">
						<FaFacebook />
					</a>
					<a href="/">
						<FaTwitter />
					</a>
					<a href="/">
						<FaLinkedin />
					</a>
					<a href="/">
						<FaGithub />
					</a>
				</div>

				<div id="scroll-up" onClick={() => scroll.scrollToTop()}>
					<i className="fa fa-arrow-up" aria-hidden="true"></i>
				</div>
			</div>
		</div>
	);
};

export default Footer;
