import ScrollAnimation from "react-animate-on-scroll";

function About() {
	return (
		<div className="column" id="about">
			<div className="container">
				<ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
					<div className="columns is-half">
						<div
							className="column intro"
							style={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center"
							}}
						>
							<h1 className="about-header">About</h1>
						</div>
					</div>
				</ScrollAnimation>
				<ScrollAnimation animateIn="animate__zoomIn" animateOnce={true}>
					<div className="about-content">
						<div className="columns is-half is-vcentered">
							<div className="column">
								<div className="card">
									<div className="card-content">
										<div className="content">
											Dubai is a major commercial center where appearance matters greatly. It is a
											facet of our public persona.{" "}
											<span className="orange-text">Salazar Gents Salon</span> owes you the
											excellent service that you have so richly merited. Give us a chance to repay
											you with services that are both unmatched in quality and cost. All you have
											to do is kick back and unwind. Let our men do what they do best.
											<br />
											<br />— <span className="orange-text">Salazar Gents Salon</span>
										</div>
									</div>
								</div>
							</div>
							<div
								className="column"
								style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
							>
								<img className="store-pic float" src="bg.png" width={367} />
							</div>
						</div>
					</div>
				</ScrollAnimation>
			</div>
		</div>
	);
}

export default About;
