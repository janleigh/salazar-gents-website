import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

function Navbar() {
	const [isActive, setIsActive] = useState(false);

	return (
		<nav className="navbar is-fixed-top" role="navigation">
			<div className="navbar-brand">
				<a
					onClick={() => {
						setIsActive(!isActive);
					}}
					role="button"
					className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
					aria-label="menu"
					aria-expanded="false"
					data-target="navbar-menu"
				>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</a>
			</div>
			<div className={`navbar-menu ${isActive ? "is-active" : ""}`} id="navbar-menu">
				<div className="navbar-start">
					<img className="banner" src="banner.png" />
					<ScrollLink className="navbar-item" smooth={true} to="home">
						Home
					</ScrollLink>
					{/* <ScrollLink className="navbar-item" smooth={true} to="about">
						About
					</ScrollLink> */}
					<ScrollLink className="navbar-item" smooth={true} to="packages">
						Packages
					</ScrollLink>
					<ScrollLink className="navbar-item" smooth={true} to="hairstyles">
						Hairstyles
					</ScrollLink>
					{/* <ScrollLink className="navbar-item" smooth={true} to="staff">
						Staff List
					</ScrollLink> */}
					<ScrollLink className="navbar-item" smooth={true} to="contact">
						Contact
					</ScrollLink>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
