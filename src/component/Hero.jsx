/** @format */

import React from "react";
// import HeroImage from "/Images/hero-bg.png";

const Hero = () => {
	return (
		<div className="container">
			<div className="Hero-bg">
				<div>
					<h1 className="text-capitalize">
						Transform your fitness journey today. Start today
					</h1>
					<p>
						Track workouts, monitor progress, and achieve your goals with
						our all-in-one fitness app.
					</p>
				</div>
				<div>
					<button type="button">Get Started</button>
					<button type="button">Book a Demo</button>
				</div>
			</div>
		</div>
	);
};

export default Hero;
