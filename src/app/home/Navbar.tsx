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
                {/* <div className="navbar-start">
                    <img className="logo" src="https://scontent.fklo1-1.fna.fbcdn.net/v/t1.15752-9/398324452_1072487334179984_2406894746669916032_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=dxUNPNMcmNkAX-8bCHh&_nc_ht=scontent.fklo1-1.fna&oh=03_AdQpr15_dWubUYGoKkKzytFFoGUKL4hgey_o9WvPj6Geqg&oe=656C7C32"/>
                </div> */}
                <div className="navbar-end">
                    <ScrollLink className="navbar-item" smooth={true} to="home">
                        Home
                    </ScrollLink>
                    <ScrollLink className="navbar-item" smooth={true} to="about">
                        About
                    </ScrollLink>
                    <ScrollLink className="navbar-item" smooth={true} to="packages">
                        Packages
                    </ScrollLink>
                    <ScrollLink className="navbar-item" smooth={true} to="hairstyles">
                        Hairstyles
                    </ScrollLink>
                    <ScrollLink className="navbar-item" smooth={true} to="contact">
                        Contact
                    </ScrollLink>
                </div>
            </div>
		</nav>
	);
}

export default Navbar;
