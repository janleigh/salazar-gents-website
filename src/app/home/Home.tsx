import { Link as ScrollLink } from "react-scroll";

function Home() {
	return (
		<div className="column" id="home">
			<div
				className="store-bg"
				style={{
					backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('bg.png')"
				}}
			>
				<div className="container">
					<div className="columns is-full animate__animated animate__fadeInUp">
						<div className="column first-column py-3 px-6">
							<h1>
								SALAZAR
								<br />
								GENTS
								<br />
								SALON
							</h1>
							<br />
							<h2>Opens 9AM - 11PM Daily</h2>
							<br />
							<button className="button is-primary">
								<ScrollLink smooth={true} to="packages">
									View Packages →
								</ScrollLink>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
