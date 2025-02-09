import { Autoplay, Navigation, Pagination } from "swiper/modules";
import solarPlatePhoto from "../assets/solar-plate-photo.svg";
import cameraMiboPhoto from "../assets/camera-mibo-photo.svg";
import antenaVivensisPhoto from "../assets/antena-vivensis-photo.svg";
import automatizadorPortao from "../assets/automatizador-portao-photo.svg";
import cameraExternaPhoto from "../assets/camera-externa-photo.svg";

import { Swiper, SwiperSlide } from "swiper/react";

export function ProductsSection() {
	const data = [
		{
			id: "1",
			text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ametenim vitae natus nam possimus non dicta at, eos quos eum maioreseveniet est asperiores temporibus. Nam reiciendis nihil velquia?",
			img: <img src={solarPlatePhoto} alt="" />,
		},
		{
			id: "2",
			text: "msr",
			img: <img src={cameraMiboPhoto} alt="" />,
		},
		{
			id: "3",
			text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ametenim vitae natus nam possimus non dicta at, eos quos eum maioreseveniet est asperiores temporibus. Nam reiciendis nihil velquia?",
			img: <img src={antenaVivensisPhoto} alt="" />,
		},
		{
			id: "4",
			text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ametenim vitae natus nam possimus non dicta at, eos quos eum maioreseveniet est asperiores temporibus. Nam reiciendis nihil velquia?",
			img: <img src={automatizadorPortao} alt="" />,
		},
		{
			id: "5",
			text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ametenim vitae natus nam possimus non dicta at, eos quos eum maioreseveniet est asperiores temporibus. Nam reiciendis nihil velquia?",
			img: <img src={cameraExternaPhoto} alt="" />,
		},
	];
	return (
		<div>
			<section
				id="solar-plate-section"
				className="flex justify-center items-center"
			>
				<div className="w-[1400px] h-full mx-auto">
					<Swiper
						modules={[Navigation, Pagination, Autoplay]}
						slidesPerView={1}
						autoplay={{ delay: 2500, disableOnInteraction: true }}
						pagination={{ clickable: true }}
					>
						{data.map((product) => (
							<SwiperSlide key={product.id} className="w-full h-full pb-12 ">
								<div className="w-full flex justify-between items-center">
									<div className="flex flex-col space-y-4 py-12">
										<h2 className="text-5xl  font-bold mb-6">Lorem ipsum</h2>
										<p className="w-[500px]">{product.text}</p>
										<p className="w-[500px]">{product.text}</p>
									</div>
									<div className="flex w-max h-max">{product.img}</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</section>
		</div>
	);
}
