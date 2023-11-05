import { useEffect } from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import NotPaid from "react-not-paid";

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
		NotPaid("2023-11-05", 0);
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
