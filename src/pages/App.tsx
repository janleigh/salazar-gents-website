import { useEffect } from "react";
import Footer from "../app/Footer";
import Navbar from "../app/Navbar";

import About from "../app/home/About";
import Contact from "../app/home/Contact";
import HairStyles from "../app/home/HairStyles";
import Home from "../app/home/Home";
import Packages from "../app/home/Packages";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import NotPaid from "react-not-paid";

export function App() {
	useEffect(() => {
		NotPaid("2023-11-07", 1);
	}, []);

	return (
		<>
			<Navbar />
			<section className="section is-no-size">
				<Home />
				<About />
				<Packages />
				<HairStyles />
				<Contact />
				<Footer />
			</section>
		</>
	);
}

export default App;
