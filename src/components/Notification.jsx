/** @format */

import React from "react";
import "./Notification.css";

const Notification = () => {
	return (
		<div className="notification-toast" data-toast>
			<button className="toast-close-btn" data-toast-close>
				<ion-icon name="close-outline"></ion-icon>
			</button>

			<div className="toast-banner">
				<img
					src={require("../assets/images/me.jpg")}
					alt="Rose Gold Earrings"
					width="150"
					height="120"
				/>
			</div>

			<div className="toast-detail">
				<p className="toast-message">Someone in new just bought</p>

				<p className="toast-title">Rose Gold Earrings</p>

				<p className="toast-meta">
					<time datetime="PT2M">2 Minutes</time> ago
				</p>
			</div>
		</div>
	);
};

export default Notification;
