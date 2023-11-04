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
						<div className="columns is-half">
							<div className="column">
								<div className="card">
									<div className="card-content">
										<div className="content">
											Our super strong conviction is that visiting a barbershop must never be just
											about “getting a haircut because I do so every 3 months”. This must be
											something more than a mere errand. Moreover, we are positive that it must be
											an experience to remember.
											<br />
											<br />
											We are absolutely confident that considering all the fuzz and the chaos in
											our modern lives, there simply must be some place where a man can go to, sit
											for a nice small talk with other men, drink a glass of fine whiskey and
											while doing that also get his facial and head hair taken care of.
											<br />
											<br />
											Probably thanks to our strong traditional values, business principles and
											the quality of our barbering services we are definitely the number one
											classic barbershop for men. We hope to offer you an adventure back in time,
											to the historical period of the 1960s, when the traditional barbershop
											culture was still alive.
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
