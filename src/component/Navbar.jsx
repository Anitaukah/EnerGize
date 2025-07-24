/** @format */

import React from "react";
import Logo from "/Images/logo.png";

const Navbar = () => {
	return (
		<div class="container">
			<nav class="my-4 d-flex">
				<a class="navbar-brand " href="#">
					<img className="" src={Logo} alt="EnerGize logo" />
				</a>

				<div class="ms-auto">
					<ul class=" d-flex gap-4">
						<li class="nav-item fs-6 fw-bolder  ">
							<a
								class="nav-link active text-dark"
								aria-current="page"
								href="#"
							>
								Home
							</a>
						</li>
						<li class="nav-item fs-6 fw-bolder text-dark">
							<a class="nav-link text-dark" href="#">
								About Us
							</a>
						</li>
						<li class="nav-item fs-6 fw-bolder text-dark">
							<a class="nav-link text-dark" href="#">
								Blog
							</a>
						</li>
						<button
							class="btn fs-6 fw-bolder text-dark btn-bg"
							type="button"
						>
							Log In
						</button>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
