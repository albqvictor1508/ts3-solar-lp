import { Swiper, SwiperSlide } from "swiper/react";

export function TestSwiper() {
	const data = [
		{ id: 1, content: "toma no cu 1" },
		{ id: 2, content: "toma no cu 2" },
		{ id: 3, content: "toma no cu 3" },
		{ id: 4, content: "toma no cu 4" },
		{ id: 4, content: "toma no cu 5" },
	];

	return (
		<div>
			<Swiper>
				{data.map((lexsaLinda) => (
					<SwiperSlide key={lexsaLinda.id}>
						<h1>{lexsaLinda.content}</h1>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
