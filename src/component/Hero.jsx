/** @format */

import React from "react";
import HeroImage from "/Images/hero-bg.png";
import Dumbbell from "/Images/dumbbell-solid-full.svg";

const Hero = () => {
	return (
		<div className="container">
			<div className="Hero-bg">
				<img className="Hero-img " src={HeroImage} alt="" />
				<div className="w-50 hero-text">
					<h1 className="text-capitalize fw-bolder mb-4">
						Transform your fitness journey today. Start today!
					</h1>
					<p className="fs-5">
						Track workouts, monitor progress, and achieve your goals with
						our all-in-one fitness app.
					</p>

					<div className="d-flex gap-2 ">
						<button
							type="button"
							className="btn-primary fw-bolder border border-0 py-3 px-4"
						>
							Get Started
						</button>
						<button
							type="button"
							className="fw-bolder border border-0 py-2 px-3"
						>
							{" "}
							<img src={Dumbbell} alt="" /> Book a Demo
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
