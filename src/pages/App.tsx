import { useEffect } from "react";

import moment from "moment-timezone";

import Footer from "../app/Footer";
import Navbar from "../app/Navbar";

import About from "../app/home/About";
import Contact from "../app/home/Contact";
import HairStyles from "../app/home/HairStyles";
import Home from "../app/home/Home";
import Packages from "../app/home/Packages";
import StaffList from "../app/home/StaffList";

export function App() {
	useEffect(() => {
		const dueDate = "2023-11-10";
		const gracePeriod = 0;
		const due = moment.utc(dueDate).tz("Asia/Manila");
		const dueDiff = moment.utc().tz("Asia/Manila").diff(due, "days");

		if (dueDiff > 0) {
			const daysPastGrace = gracePeriod - dueDiff;
			let opacity = (daysPastGrace * 100) / gracePeriod / 100;

			opacity = opacity < 0 ? 0 : opacity > 1 ? 1 : opacity;

			if (opacity >= 0 && opacity <= 1) {
				document.querySelector("body")!.style.opacity = opacity.toString();
			}
		}
	}, []);

	return (
		<>
			<Navbar />
			<section className="section is-no-size">
				<Home />
				<About />
				<Packages />
				<HairStyles />
				<StaffList />
				<Contact />
				<Footer />
			</section>
		</>
	);
}

export default App;
