/** @format */

import React from "react";

const Pricing = () => {
	return (
		<div className="container">
			<div>
				<h1>Pricing</h1>
				<p>
					Start with our free plan and unlock premium features as you grow.
				</p>
				<div>
					<div className="card">
						<h1>Basic</h1>
						<p>
							Ideal for beginners to track workouts and monitor progress.
						</p>
						<h2>
							Free <span>*No credit card needed</span>
						</h2>
						<hr />
						<ul>
							<li> Customizable workout plans</li>
							<li>Track daily progress</li>
							<li>Nutrition tracker</li>
							<li>Access to community challenges</li>
						</ul>
						<button type="button">Get Started</button>
					</div>

					<div className="card">
						<h1>Pro</h1>
						<p>
							Everything in the Basic plan plus advanced features for
							serious athletes.
						</p>
						<h2>
							$29 <span>/month</span>
						</h2>
						<hr />
						<p>Unlock premium features:</p>
						<ul>
							<li> Personalized coaching</li>
							<li>Advanced analytics</li>
							<li>Offline access</li>
						</ul>
						<button type="button">Get Started</button>
					</div>
				</div>
				<p>
					All prices are in USD and charged per month with applicable taxes
					added at checkout.
				</p>
			</div>
		</div>
	);
};

export default Pricing;
