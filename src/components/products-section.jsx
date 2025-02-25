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
			text: "Ter uma placa solar traz economia de até 95% na conta de luz, com retorno do investimento em 5 a 7 anos, além de oferecer independência energética e proteção contra aumentos nas tarifas. O imóvel valoriza em até 8%, e o usuário contribui para o meio ambiente, reduzindo a pegada de carbono com energia limpa e sustentável. Um investimento que une economia, segurança e benefícios ambientais por décadas, Para adquirir uma, siga:",
			img: <img src={solarPlatePhoto} alt="Placa Solar" />,
		},
		{
			id: "2",
			title: "Câmera Mibo Intelbras",
			text: "A Câmera Mibo Intelbras é perfeita para monitoramento interno, oferecendo segurança e praticidade. Com visão noturna, detecção de movimento e áudio bidirecional, ela permite acompanhar tudo em tempo real pelo smartphone. Conectada via Wi-Fi, é fácil de instalar e controlar, ideal para residências ou pequenos negócios que buscam proteção e tranquilidade com um equipamento compacto e eficiente.",

			img: <img src={cameraMiboPhoto} alt="Câmera Mibo" />,
		},
		{
			id: "3",
			title: "Antena Vivensis",
			text: "A placa solar traz economia de até 95% na conta de luz, com retorno do investimento em 5 a 7 anos, além de valorizar o imóvel em até 8%. Para adquirir, você deve contratar a TS3 para uma avaliação do consumo e viabilidade. Após a análise, é criado um projeto e definido o orçamento. Em seguida, profissionais certificados realizam a instalação e a integração à rede elétrica. Um investimento que une economia financeira, segurança energética, valorização do imóvel e benefícios ambientais por décadas, reduzindo a pegada de carbono com energia limpa e sustentável.",

			img: <img src={antenaVivensisPhoto} alt="Antena Vivensis" />,
		},
		{
			id: "4",
			title: "Automatizador de Portões Intelbras",
			text: "O Automatizador de Portões traz praticidade e segurança ao automatizar a abertura e fechamento de portões deslizantes ou basculantes. Controlado por controle remoto, teclado ou até pelo smartphone, ele inclui sensores de segurança para evitar acidentes. Ideal para quem busca comodidade e proteção, ele transforma o acesso à garagem ou ao portão em uma experiência rápida, segura e moderna.",
			img: <img src={automatizadorPortao} alt="Automatizador de Portão" />,
		},
		{
			id: "5",
			title: "Câmera Externa Intelbras",
			text: "Projetada para ambientes externos, a Câmera Externa Intelbras é resistente às intempéries e oferece alta durabilidade. Com visão noturna em infravermelho, gravação em HD e alertas inteligentes, ela garante monitoramento preciso 24 horas por dia. Compatível com gravação em nuvem ou local, é uma solução robusta para proteger perímetros, garagens ou áreas externas de residências e empresas.",
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
							<div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8">
								<div className="flex flex-col space-y-4 py-12 max-w-full md:max-w-[600px]">
									<h2 className="text-3xl md:text-5xl font-bold mb-6">
										{product.title}
									</h2>
									<p className="w-full md:w-[500px] text-justify">
										{product.text}
									</p>
								</div>
								<div className="flex w-full md:w-auto h-auto md:p-4">
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
