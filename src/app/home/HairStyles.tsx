import ScrollAnimation from "react-animate-on-scroll";

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

function HairStyles() {
	return (
		<div className="column" id="hairstyles">
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
							<h3>Introducing the</h3>
							<br />
							<h1 className="hairstyles-header">HAIRSTYLES</h1>
							<br />
						</div>
					</div>
				</ScrollAnimation>
				<ScrollAnimation animateIn="animate__zoomIn" animateOnce={true}>
					<div className="hairstyles-images">
						<Swiper
							modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
							navigation
							pagination={{ clickable: true }}
							scrollbar={{ draggable: true }}
							slidesPerView={3}
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
										<figure className="image is-4by3">
											<img src="hairstyles/hr1.png" alt="Hairstyle 1" />
										</figure>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="card">
									<div className="card-image">
										<figure className="image is-4by3">
											<img src="hairstyles/hr2.png" />
										</figure>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="card">
									<div className="card-image">
										<figure className="image is-4by3">
											<img src="hairstyles/hr3.png" />
										</figure>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="card">
									<div className="card-image">
										<figure className="image is-4by3">
											<img src="hairstyles/hr4.png" />
										</figure>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="card">
									<div className="card-image">
										<figure className="image is-4by3">
											<img src="hairstyles/hr5.png" />
										</figure>
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

export default HairStyles;
