import undrawPc from "./assets/undraw-pc.svg";
import intelbrasLogo from "./assets/intelbras-logo.svg";
import ts3Logo01 from "./assets/ts3-images/ts3-solar-logo-01.png";
import skyLogo from "./assets/sky-logo.svg";
import vivensisLogo from "./assets/traced-vivensis-logo.svg";
import frenteTS3 from "./assets/ts3-images/frente-ts3-solar.jpg";
import { ProductsSection } from "./components/products-section";
import { ClientsCard } from "./components/clients-card";
import solarCasa from "./assets/ts3-images/solar-casa.png";
import solarZonaRural from "./assets/ts3-images/solar-zona-rural.png";
import solarComercio from "./assets/ts3-images/solar-comercio.png";
import { useState } from "react";

export function App() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const handleRedirectWhatsapp = () => {
		const number = "83993759434";
		const message = encodeURIComponent(
			"Olá, gostaria de entrar em contato com alexsa!",
		);
		const whatsappLink = `https://wa.me/${number}?text=${message}`;

		window.open(whatsappLink);
	};

	return (
		<div className="overflow-x-hidden">
			<header className="w-full bg-white fixed border-b border-gray-300 z-20">
				<nav className="w-full flex justify-between items-center rounded-xl px-4 md:px-8 lg:px-12 py-2">
					<img
						src={ts3Logo01}
						alt="logo TS3"
						className="w-28 md:w-36 lg:w-40"
					/>

					<button
						type="button"
						className="md:hidden text-2xl text-[#3C3B3B]"
						onClick={toggleMenu}
					>
						<i className={`bx ${isMenuOpen ? "bx-x" : "bx-menu"}`} />
					</button>

					<div
						className={`${isMenuOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8 mt-4 md:mt-0`}
					>
						<a href="instagram" className="md:hidden">
							<button
								className="flex items-center justify-center w-10 h-10 border-2 border-[#3C3B3B] rounded-xl"
								type="button"
							>
								<i className="bx bxl-instagram text-2xl font-bold text-[#3C3B3B]" />
							</button>
						</a>

						<button
							className="flex items-center justify-center w-10 h-10 bg-[#01AB55] text-white rounded-xl font-bold md:hidden"
							type="button"
							onClick={handleRedirectWhatsapp}
						>
							<i className="bx bxl-whatsapp text-2xl font-bold" />
						</button>

						<div className="hidden md:flex gap-4">
							<a href="instagram">
								<button
									className="flex items-center gap-2 border-2 border-[#3C3B3B] px-3 py-2 rounded-xl"
									type="button"
								>
									<span className="font-bold text-sm text-[#3C3B3B]">
										ts3tecnologia
									</span>
									<i className="bx bxl-instagram text-2xl font-bold text-[#3C3B3B]" />
								</button>
							</a>
							<button
								className="flex gap-2 items-center bg-[#01AB55] text-white px-3 py-2 rounded-xl font-bold text-base"
								type="button"
								onClick={handleRedirectWhatsapp}
							>
								Contate-nos
								<i className="bx bxl-whatsapp text-2xl font-bold" />
							</button>
						</div>
					</div>
				</nav>
			</header>

			<main className="mx-auto">
				{/* Hero Section */}
				<section id="hero-section" className="w-full px-4 md:px-12 lg:px-16">
					<div className="container mx-auto mt-32 flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 items-center">
						<div className="flex flex-col space-y-6 md:space-y-12 lg:space-y-16 flex-1">
							<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#3C3B3B] leading-tight max-w-full md:max-w-[600px] lg:max-w-[700px]">
								Cansado de pagar contas altíssimas de energia?
							</h1>
							<p className="text-base md:text-base lg:text-lg text-[#737171] leading-6 max-w-full md:max-w-[600px] lg:max-w-[700px]">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
								esse nostrum voluptatem repudiandae pariatur nemo sed,
								voluptatum similique quam distinctio vero illum nesciunt eius
								dignissimos blanditiis, animi voluptates.
							</p>
							<div className="flex gap-4">
								<button
									className="flex gap-2 items-center justify-center bg-[#01AB55] text-white w-40 md:w-[230px] lg:w-[250px] py-2 rounded-3xl text-sm font-bold"
									type="button"
									onClick={handleRedirectWhatsapp}
								>
									CONTATE-NOS
									<i className="bx bxl-whatsapp text-2xl font-bold" />
								</button>
								<a href="#solar-plate-section">
									<button
										className="border-2 border-[#3C3B3B] text-[#3C3B3B] bg-transparent rounded-3xl w-40 md:w-[230px] lg:w-[250px] text-center py-2 font-bold text-sm"
										type="button"
									>
										LER MAIS
									</button>
								</a>
							</div>
						</div>
						<img
							src={undrawPc}
							alt="Ilustração"
							className="w-full md:w-[500px] lg:w-[600px] rounded-md object-cover"
						/>
					</div>
					<div
						id="brand-div"
						className="py-12 mt-32 w-full border-t border-b border-[#e2e2e2] mb-12 md:mb-56 lg:mb-64"
					>
						<div className="container mx-auto flex flex-wrap items-center justify-around gap-8">
							<img
								src={vivensisLogo}
								alt="vivensis tecnology"
								className="w-24 md:w-fit lg:w-auto"
							/>
							<img
								src={skyLogo}
								alt="sky tv"
								className="w-24 md:w-auto lg:w-auto"
							/>
							<img
								src={intelbrasLogo}
								alt="intelbras"
								className="w-24 md:w-auto lg:w-auto"
							/>
						</div>
					</div>
				</section>

				{/* About Section */}
				<section
					id="about-section"
					className="bg-gray-100 w-full py-12 px-4 md:px-12 lg:px-16 pb-12 md:pb-56 lg:pb-64 flex flex-col space-y-12"
				>
					<div className="flex flex-col space-y-6 md:space-y-20 lg:space-y-24">
						<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3C3B3B] text-center">
							Onde Atendemos?
						</h2>

						<div
							id="cards"
							className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center"
						>
							<div className="bg-white p-6 shadow flex flex-col space-y-6">
								<div className="flex gap-4 items-center">
									<div className="px-2 py-1 rounded-md text-xl font-bold bg-[#E1FFEE]">
										<i className="bx bx-sun" />
									</div>
									<h2 className="text-2xl font-bold text-[#3C3B3B]">Casas</h2>
								</div>
								<p className="text-sm text-[#737171]">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Quaerat eum quia cum ratione temporibus repudiandae
									doloremque, cumque vitae corrupti asperiores ipsam corporis
									sequi architecto nisi aliquam, iste possimus ut voluptatum?
								</p>
							</div>

							<div className="bg-white p-6 shadow flex flex-col space-y-6">
								<div className="flex gap-4 items-center">
									<div className="px-2 py-1 rounded-md text-xl font-bold bg-[#E1FFEE]">
										<i className="bx bx-money" />
									</div>
									<h2 className="text-2xl font-bold text-[#3C3B3B]">
										Comércios
									</h2>
								</div>
								<p className="text-sm text-[#737171]">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Quaerat eum quia cum ratione temporibus repudiandae
									doloremque, cumque vitae corrupti asperiores ipsam corporis
									sequi architecto nisi aliquam, iste possimus ut voluptatum?
								</p>
							</div>

							<div className="bg-white p-6 shadow flex flex-col space-y-6">
								<div className="flex gap-4 items-center">
									<div className="px-2 py-1 rounded-md text-xl font-bold bg-[#E1FFEE]">
										<i className="bx bx-sun" />
									</div>
									<h2 className="text-2xl font-bold text-[#3C3B3B]">
										Zona Rural
									</h2>
								</div>
								<p className="text-sm text-[#737171]">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Quaerat eum quia cum ratione temporibus repudiandae
									doloremque, cumque vitae corrupti asperiores ipsam corporis
									sequi architecto nisi aliquam, iste possimus ut voluptatum?
								</p>
							</div>
						</div>
					</div>

					<ClientsCard />

					{/* beneficios da energia solar */}
					<div className="container mx-auto px-4 md:px-12 lg:px-16">
						<h2 className="text-center font-bold text-4xl pb-16 text-[#3C3B3B]">
							Porque adquirir Energia Solar?
						</h2>
						<div className="flex flex-col gap-12">
							<div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12">
								<div className="flex-1 w-full md:w-[500px] lg:w-[600px] h-[300px] lg:h-[350px] flex justify-center items-center bg-gray-200 rounded-2xl">
									<img
										src={solarCasa}
										alt="Solar Panel"
										className="w-full h-full object-cover rounded-2xl"
									/>
								</div>
								<div className="flex-1 flex flex-col gap-4 p-4 lg:p-6">
									<span className="font-bold text-[#009C39] text-lg md:text-[18px]">
										01
									</span>
									<h3 className="text-2xl md:text-4xl lg:text-5xl text-[#3C3B3B] font-bold">
										Painel Solar para casas.
									</h3>
									<p className="text-[#737171]">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Quos eveniet, rerum sequi animi quisquam ipsa amet
										perspiciatis molestiae atque ut praesentium porro architecto
										a? Cum ab aliquam repellendus vero!
									</p>
								</div>
							</div>

							<div className="flex flex-col md:flex-row-reverse items-center gap-8 lg:gap-12">
								<div className="flex-1 w-full md:w-[500px] lg:w-[600px] h-[300px] lg:h-[350px] flex justify-center items-center bg-gray-200 rounded-2xl">
									<img
										src={solarComercio}
										alt="Solar Panel"
										className="w-full h-full object-cover rounded-2xl"
									/>
								</div>
								<div className="flex-1 flex flex-col gap-4 p-4 lg:p-6">
									<span className="font-bold text-[#009C39] text-lg md:text-[18px]">
										02
									</span>
									<h3 className="text-2xl md:text-4xl lg:text-5xl text-[#3C3B3B] font-bold">
										Painel Solar para comércios.
									</h3>
									<p className="text-[#737171]">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Quos eveniet, rerum sequi animi quisquam ipsa amet
										perspiciatis molestiae atque ut praesentium porro architecto
										a? Cum ab aliquam repellendus vero!
									</p>
								</div>
							</div>

							<div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12">
								<div className="flex-1 w-full md:w-[500px] lg:w-[600px] h-[300px] lg:h-[350px] flex justify-center items-center bg-gray-200 rounded-2xl">
									<img
										src={solarZonaRural}
										alt="Solar Panel"
										className="w-full h-full object-cover rounded-2xl"
									/>
								</div>
								<div className="flex-1 flex flex-col gap-4 p-4 lg:p-6">
									<span className="font-bold text-[#009C39] text-lg md:text-[18px]">
										03
									</span>
									<h3 className="text-2xl md:text-4xl lg:text-5xl text-[#3C3B3B] font-bold">
										Painéis Solares para Zona Rural
									</h3>
									<p className="text-[#737171]">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Quos eveniet, rerum sequi animi quisquam ipsa amet
										perspiciatis molestiae atque ut praesentium porro architecto
										a? Cum ab aliquam repellendus vero!
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<ProductsSection />

				{/* Location Section */}
				<section
					id="location-section"
					className="py-16 text-[#3C3B3B] mb-12 md:mb-32 lg:mb-40 bg-gradient-to-b from-white to-gray-50"
				>
					<div className="container mx-auto flex flex-col space-y-10 md:space-y-16 lg:space-y-20 px-4 md:px-12 lg:px-16">
						<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-[#2C3E50]">
							Sobre a <span className="text-[#01AB55]">TS3</span>
						</h2>
						<div className="w-full h-[300px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
							<img
								src={frenteTS3}
								alt="Frente TS3"
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="flex flex-col md:flex-row gap-10 md:gap-16 lg:gap-20">
							<div className="flex-1 space-y-8">
								<p className="text-justify text-base md:text-lg lg:text-xl leading-relaxed text-[#555]">
									Fundada em 2021, a{" "}
									<strong className="text-[#01AB55]">TS3 SOLAR</strong> leva
									energia solar para toda a região com projetos completos - da
									instalação à manutenção. Como{" "}
									<span className="font-bold text-[#01AB55]">
										revenda autorizada Intelbras
									</span>
									, garantimos tecnologia de ponta e equipe certificada para
									máxima eficiência e satisfação dos clientes.
								</p>
								<p className="text-justify text-base md:text-lg lg:text-xl leading-relaxed text-[#555]">
									Nossa missão vai além de instalar placas solares: queremos
									revolucionar o acesso à energia limpa, reduzindo a dependência
									de fontes não renováveis e impactando positivamente o meio
									ambiente.
								</p>
								<p className="text-justify text-base md:text-lg lg:text-xl leading-relaxed text-[#555]">
									Cada projeto é calculado para trazer economia imediata na
									conta de luz e retorno financeiro garantido em médio prazo,
									melhorando a qualidade de vida através de energia sustentável
									e acessível.
								</p>
							</div>
							<div className="flex-1 space-y-8">
								<div className="w-full h-[250px] md:h-[350px] lg:h-[400px] overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
									<iframe
										title="Localização TS3"
										src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.327347317312!2d-35.2094856852315!3d-5.812295395785292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b255b1b3a9b6b5%3A0x9c8b4b8b8b8b8b8b!2sTS3%20Tecnologia!5e0!3m2!1spt-BR!2sbr!4v1629999999999!5m2!1spt-BR!2sbr"
										width="100%"
										height="100%"
										style={{ border: 0 }}
										allowFullScreen
										loading="lazy"
									/>
								</div>
								<p className="text-right text-sm text-[#555] mt-2">
									📍 Rua João Feliciano Filho, 370
								</p>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div className="bg-gradient-to-br from-[#01AB55]/10 to-[#01AB55]/5 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
										<div className="flex items-center gap-3">
											<i className="bx bx-check-circle text-3xl text-[#01AB55]" />
											<p className="font-bold text-xl text-[#2C3E50]">
												+ de 100 projetos
											</p>
										</div>
										<p className="text-sm text-[#555] mt-2">
											Instalados com sucesso em toda a região.
										</p>
									</div>

									<div className="bg-gradient-to-br from-[#01AB55]/10 to-[#01AB55]/5 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
										<div className="flex items-center gap-3">
											<i className="bx bx-map text-3xl text-[#01AB55]" />
											<p className="font-bold text-xl text-[#2C3E50]">
												Atendemos em 3 estados
											</p>
										</div>
										<p className="text-sm text-[#555] mt-2">
											Paraíba, Recife, Rio Grande do Norte e região.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<footer>
					<div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-10 px-4 md:px-8 lg:px-12">
						<div>
							<img
								src="./img/ts3-solar-logo.svg"
								alt="ts3 solar logo"
								className="w-32 md:w-56 lg:w-64"
							/>
						</div>
						<div className="flex flex-col space-y-4">
							<div className="flex flex-col md:flex-row gap-8 lg:gap-12">
								<ul className="flex flex-col gap-2">
									<li className="text-sm text-white font-bold">PRODUTO</li>
									<li className="text-[#3C3B3B] cursor-pointer">
										<a className="font-medium" href="#solar-plate-section">
											Sobre e Preços
										</a>
									</li>
								</ul>
								<ul className="flex flex-col gap-2">
									<li className="text-sm text-white font-bold">EMPRESA</li>
									<li className="text-[#3C3B3B] cursor-pointer">
										<a className="font-medium" href="#location-section">
											Sobre nós
										</a>
									</li>
								</ul>
								<ul className="flex flex-col gap-2">
									<li className="text-sm text-white font-bold">CONTATO</li>
									<li className="text-[#3C3B3B] cursor-pointer">
										<a className="font-medium" href="#hero-section">
											Contate-nos
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</footer>
			</main>
		</div>
	);
}
