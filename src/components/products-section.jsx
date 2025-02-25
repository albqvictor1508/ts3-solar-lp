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
			text: "Ter uma placa solar traz economia de até 95% na conta de luz, com retorno do investimento em 5 a 7 anos, além de oferecer independência energética e proteção contra aumentos nas tarifas. O imóvel valoriza em até 8%, e o usuário contribui para o meio ambiente, reduzindo a pegada de carbono com energia limpa e sustentável. Um investimento que une economia, segurança e benefícios ambientais por décadas, Para adquirir uma, siga:",
			img: <img src={solarPlatePhoto} alt="Placa Solar" />,
			list: [
				{
					title: "Avaliação",
					content: "Contrate a TS3 para analisar seu consumo e viabilidade",
				},
				{
					title: "Projeto e Orçamento",
					content:
						"Defina o sistema necessário (tamanho, custo) e aproveite incentivos fiscais.",
				},
				{
					title: "Instalação",
					content:
						"Profissionais certificados fazem a instalação e integração à rede elétrica.",
				},
			],
		},
		{
			id: "2",
			text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit...",
			img: <img src={cameraMiboPhoto} alt="Câmera Mibo" />,
		},
		{
			id: "3",
			text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit...",
			img: <img src={antenaVivensisPhoto} alt="Antena Vivensis" />,
		},
		{
			id: "4",
			text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit...",
			img: <img src={automatizadorPortao} alt="Automatizador de Portão" />,
		},
		{
			id: "5",
			text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit...",
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
							<div className="flex flex-col md:flex-row justify-between items-center gap-8">
								<div className="flex flex-col space-y-4 py-12 max-w-full md:max-w-[600px]">
									<h2 className="text-3xl md:text-5xl font-bold mb-6">
										Lorem ipsum
									</h2>
									<p className="w-full md:w-[500px]">{product.text}</p>

									<ul>
										{product.list
											? product.list.map((listItem) => (
													<li className="flex" key={listItem.title}>
														<span>
															{listItem.title}: {listItem.content}
														</span>
													</li>
												))
											: ""}
									</ul>
								</div>
								<div className="flex w-full md:w-auto h-auto">
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
