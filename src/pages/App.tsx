import Footer from "../app/Footer";
import Navbar from "../app/Navbar";

import About from "../app/home/About";
import Contact from "../app/home/Contact";
import HairStyles from "../app/home/HairStyles";
import Home from "../app/home/Home";
import Packages from "../app/home/Packages";

export function App() {
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
