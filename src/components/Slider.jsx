/** @format */

import React from "react";
import "./Slider.css";
import { CgMouse } from "react-icons/cg";

const Slider = () => {
	const smoothScroll = (target) => {
		var scrollContainer = target;
		do {
			//find scroll container
			scrollContainer = scrollContainer.parentNode;
			if (!scrollContainer) return;
			scrollContainer.scrollTop += 1;
		} while (scrollContainer.scrollTop === 0);

		var targetY = 0;
		do {
			//find the top of target relatively to the container
			if (target === scrollContainer) break;
			targetY += target.offsetTop;
		} while ((target = target.offsetParent));

		const scroll = function (c, a, b, i) {
			i++;
			if (i > 30) return;
			c.scrollTop = a + ((b - a) / 30) * i;
			setTimeout(function () {
				scroll(c, a, b, i);
			}, 20);
		};
		// start scrolling
		scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
	};

	return (
		<div className="slider">
			<div class="container">
				<div className="center">
					<div className="me">
						<p>hello, it's me</p>
						<span className="bar"></span>
						<p className="name">taiwo olapade</p>
						<span className="bar"></span>
						<h4>javascript developer</h4>
					</div>
					<div className="button">
						<button className="btn" onClick={smoothScroll}>
							{" "}
							<a href="/about"></a> read more
						</button>
						<button className="btn">
							{" "}
							<a href="/portfolio"></a> my works
						</button>
					</div>
					<div className="bottom">
						<CgMouse className="mouse" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Slider;
