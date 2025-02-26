import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import solarPlatePhoto from "../assets/solar-plate-photo.svg";
import cameraMiboPhoto from "../assets/camera-mibo-photo.svg";
import antenaVivensisPhoto from "../assets/antena-vivensis-photo.svg";
import automatizadorPortao from "../assets/automatizador-portao-photo.svg";
import cameraExternaPhoto from "../assets/camera-externa-photo.svg";

export function ProductsSection() {
	const data = [
		{
			id: "1",
			title: "Placa Solar",
			text: "Economize até 95% na conta de luz com retorno do investimento em 5-7 anos. Instalação profissional pela TS3 com projeto personalizado. Valorize seu imóvel e reduza emissões de carbono com energia limpa por décadas.",
			img: <img src={solarPlatePhoto} alt="Placa Solar" />,
		},
		{
			id: "2",
			title: "Câmera Mibo Intelbras",
			text: "Monitoramento interno inteligente com visão noturna, detecção de movimento e áudio bidirecional. Instalação simples via Wi-Fi para segurança residencial ou empresarial 24h.",
			img: <img src={cameraMiboPhoto} alt="Câmera Mibo" />,
		},
		{
			id: "3",
			title: "Antena Vivensis",
			text: "Solução profissional para redes wireless de longo alcance. Ideal para conexão estável em áreas extensas com alta performance em ambientes desafiadores.",
			img: <img src={antenaVivensisPhoto} alt="Antena Vivensis" />,
		},
		{
			id: "4",
			title: "Automatizador de Portões Intelbras",
			text: "Controle remoto de portões com segurança integrada. Compatível com diversos modelos, inclui sensores anti-colisão e opção de integração com smartphones.",
			img: <img src={automatizadorPortao} alt="Automatizador de Portão" />,
		},
		{
			id: "5",
			title: "Câmera Externa Intelbras",
			text: "Vigilância perimetral resistente com visão noturna em HD. Ideal para monitorar áreas externas 24h com alertas inteligentes e gravação em nuvem.",
			img: <img src={cameraExternaPhoto} alt="Câmera Externa" />,
		},
	];

	return (
		<section
			id="solar-plate-section"
			className="flex justify-center items-center py-8"
		>
			<div className="w-full max-w-[1400px] mx-auto px-4">
				<Swiper
					modules={[Navigation, Pagination, Autoplay]}
					slidesPerView={1}
					autoplay={{ delay: 2500, disableOnInteraction: true }}
					pagination={{ clickable: true }}
				>
					{data.map((product) => (
						<SwiperSlide key={product.id} className="pb-12">
							<div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-8">
								<div className="flex flex-col space-y-4 py-12 max-w-full lg:max-w-[600px]">
									<h2 className="text-3xl lg:text-5xl font-bold mb-6 px-4 lg:p-4 text-[#3C3B3B]">
										{product.title}
									</h2>
									<div className="flex flex-col space-y-2">
										<p className="w-full lg:w-[500px] text-justify px-4 text-[#3C3B3B]">
											{product.p1 ? product.p1 : product.text}
										</p>
										<p className="w-full lg:w-[500px] text-justify px-4 text-[#3C3B3B]">
											{product.p2 ? product.p2 : ""}
										</p>
									</div>
								</div>
								<div className="flex w-full lg:w-auto h-auto lg:p-4">
									{product.img}
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
}
