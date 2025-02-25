import undrawPc from "./assets/undraw-pc.svg";
import intelbrasLogo from "./assets/intelbras-logo.svg";
import ts3Logo01 from "./assets/ts3-images/ts3-solar-logo-01.png";
import skyLogo from "./assets/sky-logo.svg";
import vivensisLogo from "./assets/traced-vivensis-logo.svg";
import frenteTS3 from "./assets/ts3-images/frente-ts3-solar.jpg";
import { ProductsSection } from "./components/products-section";
import { ClientsCard } from "./components/clients-card";
import SolarPhoto1 from "./assets/solar-photo-1.svg";
import SolarPhoto2 from "./assets/solar-photo-2.svg";
import SolarPhoto3 from "./assets/solar-photo-3.svg";

export function App() {
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
			{/* Cabeçalho */}
			<header className="w-full bg-white fixed border-b border-gray-300 z-20">
				<nav className="w-full flex justify-between items-center rounded-xl px-4 md:px-8 py-2">
					<img src={ts3Logo01} alt="logo TS3" className="w-28 md:w-36" />
					<div className="flex space-x-4 md:space-x-6 items-center">
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
				</nav>
			</header>

			<main className="mx-auto">
				{/* Seção Hero */}
				<section id="hero-section" className="w-full px-4 md:px-12">
					<div className="container mx-auto mt-32 flex flex-col md:flex-row gap-8 md:gap-12 items-center">
						<div className="flex flex-col space-y-6 md:space-y-12 flex-1">
							<h1 className="text-4xl md:text-5xl font-bold text-[#3C3B3B] leading-tight max-w-full md:max-w-[600px]">
								Cansado de pagar contas altíssimas de energia?
							</h1>
							<p className="text-base text-[#737171] leading-6 max-w-full md:max-w-[600px]">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
								esse nostrum voluptatem repudiandae pariatur nemo sed,
								voluptatum similique quam distinctio vero illum nesciunt eius
								dignissimos blanditiis, animi voluptates.
							</p>
							<div className="flex gap-4">
								<button
									className="flex gap-2 items-center justify-center bg-[#01AB55] text-white w-40 md:w-[230px] py-2 rounded-3xl text-sm font-bold"
									type="button"
									onClick={handleRedirectWhatsapp}
								>
									CONTATE-NOS
									<i className="bx bxl-whatsapp text-2xl font-bold" />
								</button>
								<a href="#solar-plate-section">
									<button
										className="border-2 border-[#3C3B3B] text-[#3C3B3B] bg-transparent rounded-3xl w-40 md:w-[230px] text-center py-2 font-bold text-sm"
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
							className="w-full md:w-[500px] rounded-md object-cover"
						/>
					</div>
					<div
						id="brand-div"
						className="py-12 mt-32 w-full border-t border-b border-[#e2e2e2] mb-12 md:mb-56"
					>
						<div className="container mx-auto flex flex-wrap items-center justify-around gap-8">
							<img
								src={vivensisLogo}
								alt="vivensis tecnology"
								className="w-24 md:w-fit"
							/>
							<img src={skyLogo} alt="sky tv" className="w-24 md:w-auto" />
							<img
								src={intelbrasLogo}
								alt="intelbras"
								className="w-24 md:w-auto"
							/>
						</div>
					</div>
				</section>

				<section
					id="about-section"
					className="bg-gray-100 w-full py-12 px-4 md:px-12 pb-12 md:pb-56 flex flex-col space-y-12"
				>
					<div className="flex flex-col space-y-6 md:space-y-20">
						<h2 className="text-3xl md:text-5xl font-bold text-[#3C3B3B] text-center">
							Lorem ipsum
						</h2>
						<h2 className="text-2xl md:text-4xl font-semibold text-[#3C3B3B] text-center">
							Porque adquirir energia solar?
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
									<h2 className="text-2xl font-bold text-[#3C3B3B]">Title</h2>
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
									<h2 className="text-2xl font-bold text-[#3C3B3B]">Title</h2>
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
									<h2 className="text-2xl font-bold text-[#3C3B3B]">Title</h2>
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

					<div className="container mx-auto px-4">
						<div className="flex flex-col gap-12">
							<div className="flex flex-col md:flex-row items-center gap-8">
								<div className="flex-1 w-full md:w-[500px] h-[300px] flex justify-center items-center bg-gray-200 rounded-2xl">
									<img
										src={SolarPhoto1}
										alt="Solar Panel"
										className="w-full h-full object-cover rounded-2xl"
									/>
								</div>
								<div className="flex-1 flex flex-col gap-4 p-4">
									<span className="font-bold text-[#009C39] text-lg md:text-[18px]">
										01
									</span>
									<h3 className="text-2xl md:text-4xl text-[#3C3B3B]">
										Solar panel for home.
									</h3>
									<p className="text-[#737171]">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Quos eveniet, rerum sequi animi quisquam ipsa amet
										perspiciatis molestiae atque ut praesentium porro architecto
										a? Cum ab aliquam repellendus vero!
									</p>
								</div>
							</div>

							<div className="flex flex-col md:flex-row-reverse	 items-center gap-8">
								<div className="flex-1 w-full md:w-[500px] h-[300px] flex justify-center items-center bg-gray-200 rounded-2xl">
									<img
										src={SolarPhoto2}
										alt="Solar Panel"
										className="w-full h-full object-cover rounded-2xl"
									/>
								</div>
								<div className="flex-1 flex flex-col gap-4 p-4">
									<span className="font-bold text-[#009C39] text-lg md:text-[18px]">
										02
									</span>
									<h3 className="text-2xl md:text-4xl text-[#3C3B3B]">
										Solar panel for home.
									</h3>
									<p className="text-[#737171]">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Quos eveniet, rerum sequi animi quisquam ipsa amet
										perspiciatis molestiae atque ut praesentium porro architecto
										a? Cum ab aliquam repellendus vero!
									</p>
								</div>
							</div>

							<div className="flex flex-col md:flex-row items-center gap-8">
								<div className="flex-1 w-full md:w-[500px] h-[300px] flex justify-center items-center bg-gray-200 rounded-2xl">
									<img
										src={SolarPhoto3}
										alt="Solar Panel"
										className="w-full h-full object-cover rounded-2xl"
									/>
								</div>
								<div className="flex-1 flex flex-col gap-4 p-4">
									<span className="font-bold text-[#009C39] text-lg md:text-[18px]">
										03
									</span>
									<h3 className="text-2xl md:text-4xl text-[#3C3B3B]">
										Solar panel for home.
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

				<section
					id="location-section"
					className="py-12 text-[#3C3B3B] mb-12 md:mb-32"
				>
					<div className="container mx-auto flex flex-col space-y-6 md:space-y-14 px-4">
						<h2 className="text-3xl md:text-5xl font-bold text-center">
							Sobre a TS3
						</h2>

						<div className="flex justify-center">
							<div className="w-full h-[300px] md:h-[500px] overflow-hidden">
								<img
									src={frenteTS3}
									alt="Frente TS3"
									className="w-full h-full object-cover rounded-2xl"
								/>
							</div>
						</div>

						<div className="flex flex-col md:flex-row gap-8 items-start">
							<div className="flex-1 space-y-4 md:space-y-10">
								<p className="text-justify">
									Fundada em 2021, a TS3 SOLAR leva energia solar para toda a
									região com projetos completos - da instalação à manutenção.
									Como{" "}
									<span className="font-bold text-[#79CE9F]">
										revenda autorizada Intelbras
									</span>
									, garantimos tecnologia de ponta e equipe certificada para
									máxima eficiência e satisfação dos clientes.
								</p>

								<div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
									<p className="text-justify">
										Nossa missão vai além de instalar placas solares: queremos
										revolucionar o acesso à energia limpa, reduzindo a
										dependência de fontes não renováveis e impactando
										positivamente o meio ambiente.
									</p>

									<p className="text-justify">
										Cada projeto é calculado para trazer economia imediata na
										conta de luz e retorno financeiro garantido em médio prazo,
										melhorando a qualidade de vida através de energia
										sustentável e acessível.
									</p>
								</div>
							</div>

							<div className="flex-1">
								<img
									src={frenteTS3}
									alt="Localização TS3"
									className="w-full h-full object-cover rounded-2xl"
								/>
								<p className="text-right text-sm font-normal w-full mb-4 mt-1.5">
									Rua João Feliciano Filho, 370
								</p>
								<div className="w-full border flex gap-4">
									<div className="bg-[#79CE9F]/10 p-6 rounded-xl flex-1">
										<p className="font-bold text-sm md:text-xl mb-2">
											+ de 100 projetos instalados
										</p>
									</div>

									<div className="bg-[#79CE9F]/10 p-6 rounded-xl flex-1">
										<p className="font-bold text-sm md:text-xl mb-2">
											Atendemos na Paraíba, Recife, Rio Grande do Norte e região{" "}
										</p>
									</div>

									<div className="bg-[#79CE9F]/10 p-6 rounded-xl flex-1">
										<p className="font-bold text-sm md:text-xl mb-2">
											+ de 100 projetos instalados
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Rodapé */}
				<footer>
					<div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-10 px-4">
						<div>
							<img
								src="./img/ts3-solar-logo.svg"
								alt="ts3 solar logo"
								className="w-32 md:w-56"
							/>
						</div>
						<div className="flex flex-col space-y-4">
							<div className="flex flex-col md:flex-row gap-8">
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
