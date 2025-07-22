/** @format */

import React from "react";

const Navbar = () => {
	return (
		<div>
			<nav class="bg-light">
				<div class="container">
					<a class="navbar-brand" href="#">
						EnerGize
					</a>

					<div class="">
						<ul class="">
							<li class="nav-item">
								<a class="nav-link active" aria-current="page" href="#">
									Home
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">
									About Us
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">
									Blog
								</a>
							</li>
						</ul>
						<button class="btn btn-primary" type="button">
							Log in
						</button>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
