/** @format */

import Navbar from "./component/Navbar";
import "./index.css";
import Hero from "./component/Hero";
import Overview from "./component/Overview";
import Testimonial from "./component/Testimonial";
import Pricing from "./component/Pricing";
import FAQ from "./component/FAQ";
import Footer from "./component/Footer";

function App() {
	return (
		<div>
			<Navbar />
			<Hero />
			<Overview />
			<Testimonial />
			<Pricing />
			<FAQ />
			<Footer />
		</div>
	);
}

export default App;
