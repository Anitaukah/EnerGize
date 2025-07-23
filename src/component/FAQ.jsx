/** @format */

import React from "react";

const FAQ = () => {
	return (
		<div className="container">
			<div>
				<h1>Frequently Asked Questions</h1>
				<div className="btn-group" role="group">
					<button>All</button>
					<button>Getting Started</button>
					<button>Pricing</button>
				</div>

				<div className="accordion">
					<div className="accordion-item">
						<h2 className="accordion-header">
							<button type="button">
								How can the app help me achieve my fitness goals?
							</button>
						</h2>
						<div className="panel">
							<p>
								The app provides tailored workout plans, tracks your
								progress, and offers motivation to keep you on track.
							</p>
						</div>
					</div>

					<div className="accordion-item">
						<h2 className="accordion-header">
							<button type="button">
								Can I customize my workout plans?
							</button>
						</h2>
						<div className="panel">
							<p>
								Yes, you can create personalized workout plans based on
								your fitness level and goals.
							</p>
						</div>
					</div>

					<div className="accordion-item">
						<h2 className="accordion-header">
							<button type="button">
								Is there a free trial available?
							</button>
						</h2>
						<div className="panel">
							<p>
								Yes, you can start with our free Basic plan to explore
								features before upgrading.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FAQ;
