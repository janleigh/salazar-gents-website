function Contact() {
	return (
		<div className="column" id="contact">
			<div className="container">
				<div className="columns is-full">
					<div className="column title">
						<h1 className="contact-title">CONTACT US</h1>
					</div>
				</div>
				<div className="columns is-one-third contacts">
					<div className="column general-inquiries">
						<h3>General Inquiries</h3>
						<br />
						<p>
							Tel: <span>+971 56 439 8599</span>
							<br />
							Email: <a href="mailto:ruel101salazar@yahoo.com">ruel101salazar@yahoo.com</a>
							<br />
							Address:{" "}
							<a href="https://maps.app.goo.gl/sxyCvB6pctWuEm3p8">
								S4 Building - 20th Street - Al Satwa - Dubai
							</a>
						</p>
					</div>
					<div className="column social-media">
						<h3>Social Media</h3>
						<br />
						<p>
							<a href="https://www.facebook.com/salazar.gents.salon">Facebook</a>
							<br />
							<a href="https://www.instagram.com/salazargentssalon">Instagram</a>
							<br />
							<a href="https://www.tiktok.com/@salazar.gents.salon">TikTok</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;
