/** @format */
import HeaderImage from "/Images/video-preview.png";
import React from "react";

const Overview = () => {
	return (
		<div className="container">
			<div>
				<h1>Discover how our app works and get fit in no time</h1>
				<img src={HeaderImage} alt="" />
				<button type="button">Get Started</button>
			</div>
		</div>
	);
};

export default Overview;
