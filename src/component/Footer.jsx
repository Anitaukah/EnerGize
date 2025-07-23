/** @format */

import FooterImage from "/Images/logo-white-footer.png";
import React from "react";

const Footer = () => {
	return (
		<div className="container ">
			<img src={FooterImage} alt="" />
			<div>
				<ul>
					<li>Privacy Policy</li>
					<li>Terms of Service</li>
					<li>Contact Us</li>
				</ul>
			</div>
			<p>© 2025 Fitness App by Anita Ukah. All rights reserved.</p>
		</div>
	);
};

export default Footer;
