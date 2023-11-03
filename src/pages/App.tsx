import About from "../app/home/About";
import Contact from "../app/home/Contact";
import HairStyles from "../app/home/HairStyles";
import Home from "../app/home/Home";
import Navbar from "../app/home/Navbar";
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
			</section>
		</>
	);
}

export default App;
