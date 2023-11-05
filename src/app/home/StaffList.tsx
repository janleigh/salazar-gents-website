import ScrollAnimation from "react-animate-on-scroll";

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

function checkIfMobile() {
	if (window.innerWidth < 768) {
		return 1;
	} else {
		return 3;
	}
}

function StaffList() {
	return (
		<div className="column" id="staff">
			<div className="container">
				<ScrollAnimation animateIn="animate__zoomIn" animateOnce={true}>
					<div className="columns is-full">
						<div
							className="column intro"
							style={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center"
							}}
						>
							<h3>Meet the</h3>
							<br />
							<h1 className="staff-header">STAFF</h1>
							<br />
						</div>
					</div>
				</ScrollAnimation>
				<ScrollAnimation animateIn="animate__zoomIn" animateOnce={true}>
					<div className="staff-cards">
						<Swiper
							modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
							navigation
							pagination={{ clickable: true }}
							scrollbar={{ draggable: true }}
							slidesPerView={checkIfMobile()}
							spaceBetween={20}
							loop={true}
							autoplay={{
								delay: 2500,
								disableOnInteraction: false
							}}
							className="swiper-container"
						>
							<SwiperSlide>
								<div className="card">
									<div className="card-image">
										<figure className="image is-3by4">
											<img
												src="staff/eric.png"
												alt="Placeholder image"
												style={{ backgroundSize: "contain" }}
											/>
										</figure>
									</div>
									<div className="card-content">
										<div className="media">
											<div className="media-content">
												<p className="title is-4">Eric</p>
											</div>
										</div>
										<div className="content">
											<span className="orange-text">Eric</span> has decade of in-depth expertise
											working in the Philippines and the UAE for a reputable salon sector.
											Well-versed in current hair trends and paying close attention to the little
											elements of your look.
											<br />
											<br /> In the UAE, his skill sets have been tried, tested, and liked by
											people of all ages and ethnicities.
										</div>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="card">
									<div className="card-image">
										<figure className="image is-3by4">
											<img
												src="staff/bobot.png"
												alt="Placeholder image"
												style={{ backgroundSize: "contain" }}
											/>
										</figure>
									</div>
									<div className="card-content">
										<div className="media">
											<div className="media-content">
												<p className="title is-4">Bobot</p>
											</div>
										</div>
										<div className="content">
											<span className="orange-text">Bobot</span> has accumulated significant
											experience in the UAE alone for more than 10 YEARS. His skill as a barber
											and hairdresser was developed as early as the 90's. His obsession with
											offering gentlemen's appearances impeccable precision and perfection is
											unmatched.
											<br />
											<br />
											He delighted in fostering a warm and welcoming for environment customers. He
											is knowledgeable about safety and hygienic requirements for the UAE.
										</div>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="card">
									<div className="card-image">
										<figure className="image is-3by4">
											<img
												src="staff/dante.png"
												alt="Placeholder image"
												style={{ backgroundSize: "contain" }}
											/>
										</figure>
									</div>
									<div className="card-content">
										<div className="media">
											<div className="media-content">
												<p className="title is-4">Dante</p>
											</div>
										</div>
										<div className="content">
											<span className="orange-text">Dante</span> has a ton of expertise providing
											salon services. Because of his fame, he is highly well-liked in Al Satwa,
											where a large number of clients of various ages and ethnicities go from
											other areas to receive the cuts or services they want.
											<br />
											<br />
											<span className="orange-text">Dante's</span> happiness and the standard by
											which he judges his chosen masterpiece are completed tasks and client
											satisfaction. He is well-versed about this field's compliance with health
											and safety regulations.
										</div>
									</div>
								</div>
							</SwiperSlide>
						</Swiper>
					</div>
				</ScrollAnimation>
			</div>
		</div>
	);
}

export default StaffList;
