import undrawPc from "./assets/undraw-pc.svg";
import intelbrasLogo from "./assets/intelbras-logo.svg";
import ts3Logo01 from "./assets/ts3-images/ts3-solar-logo-01.png";
import skyLogo from "./assets/sky-logo.svg";
import vivensisLogo from "./assets/traced-vivensis-logo.svg";
import frenteTS3 from "./assets/ts3-images/frente-ts3.jpg";
import { ProductsSection } from "./components/products-section";
import { ClientsCard } from "./components/clients-card";

export function App() {
	const handleRedirectWhatsapp = () => {
		const number = "83991303948";
		const message = encodeURIComponent(
			"Olá, gostaria de entrar em contato com alexsa!",
		);
		const whatsappLink = `https://wa.me/${number}?text=${message}`;

		window.open(whatsappLink); //redirect to whatsapp
	};

	return (
		<div className="overflow-x-hidden">
			<header className="w-full bg-white fixed border-b border-b-gray-300 z-20">
				<nav className="w-full flex justify-between items-center rounded-xl px-8 py-2">
					<img src={ts3Logo01} alt="logo TS3" className="w-36" />
					<div className="flex space-x-6 items-center">
						<a href="instagram">
							<button
								className="items-center gap-2 border-2 border-[#3C3B3B] px-4 py-2 rounded-xl flex"
								type="button"
							>
								<span className="font-bold text-sm text-[#3C3B3B]">
									ts3tecnologia
								</span>
								<i className="bx bxl-instagram text-2xl font-bold text-[#3C3B3B]" />
							</button>
						</a>
						<span className="font-bold text-sm text-[#737171]">OU</span>
						<button
							className="text-white bg-[#01AB55] px-4 py-2 rounded-xl font-bold text-base flex gap-2 items-center cursor-pointer"
							type="button"
							onClick={handleRedirectWhatsapp}
						>
							Contate-nos
							<i className="bx bxl-whatsapp text-2xl font-bold" />
						</button>
					</div>
				</nav>
			</header>
			<main className="w-[full] mx-auto">
				<section id="hero-section" className="w-full px-12">
					<div className="w-[1280px] mt-32 mx-auto flex gap-12">
						<div className="w-full flex flex-col space-y-12 justify-center">
							<h1 className="w-[600px] text-5xl font-bold text-[#3C3B3B] leading-14">
								Cansado de pagar contas altíssimas de energia?
							</h1>
							<p className="w-[600px] text-base text-[#737171] leading-6">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
								esse nosXtrum voluptatem repudiandae pariatur nemo sed,
								voluptatum similique quam distinctio vero illum nesciunt eius
								dignissimos blanditiis, animi voluptates
							</p>
							<div className="flex gap-4">
								<button
									className=" flex gap-2 text-sm font-bold justify-center items-center bg-[#01AB55] text-white w-[230px] py-2 rounded-3xl cursor-pointer"
									type="button"
									onClick={handleRedirectWhatsapp}
								>
									CONTATE-NOS
									<i className="bx bxl-whatsapp text-2xl font-bold" />
								</button>
								<a href="#solar-plate-section">
									<button
										className="cursor-pointer border-2 border-[#3C3B3B] text-[#3C3B3B] bg-transparent rounded-3xl w-[230px] text-center py-2 font-bold text-sm"
										type="button"
									>
										LER MAIS
									</button>
								</a>
							</div>
						</div>
						<img
							src={undrawPc}
							className="object-cover w-[500px] rounded-md"
							alt=""
						/>
					</div>
					<div
						id="brand-div"
						className="py-12 mt-32 w-full border-t border-b border-[#e2e2e2] mb-56 h-[300px]"
					>
						<div className="w-[1280px] flex items-center justify-around mx-auto gap-16">
							<img
								src={vivensisLogo}
								alt="vivensis tecnology"
								className="w-fit h-fit"
							/>
							<img src={skyLogo} alt="sky tv" />
							<img src={intelbrasLogo} alt="intelbras" />
						</div>
					</div>
				</section>

				<section
					id="about-section"
					className="bg-gray-100 w-full py-12 px-12 pb-56 flex flex-col space-y-12"
				>
					<div className="flex flex-col space-y-20">
						<h2 className="text-5xl font-bold text-[#3C3B3B]">Lorem ipsum</h2>
						<h2 className="text-center text-4xl font-semibold text-[#3C3B3B]">
							Porque adquirir energia solar?
						</h2>

						<div id="cards" className="flex gap-16 justify-center">
							{/* fazer esquema de cards ou nessa seção, ou na do carrossel */}
							<div className="w-[350px] min-h-[350px] bg-white p-8 shadow flex flex-col space-y-16">
								<div className="flex gap-6 items-center">
									<div className="px-2 py-1 rounded-md text-xl font-bold bg=[#3C3B3B] bg-[#E1FFEE]">
										<i class="bx bx-sun" />
									</div>
									<h2 className="text-2xl font-bold text-[#3C3B3B]">title</h2>
								</div>
								<p className="text-sm text-[#737171]">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Quaerat eum quia cum ratione temporibus repudiandae
									doloremque, cumque vitae corrupti asperiores ipsam corporis
									sequi architecto nisi aliquam, iste possimus ut voluptatum?
								</p>
							</div>

							<div className="w-[350px] min-h-[350px] bg-white p-8 shadow flex flex-col space-y-16">
								<div className="flex gap-6 items-center">
									<div className="px-2 py-1 rounded-md text-xl font-bold bg-[#E1FFEE]">
										<i class="bx bx-money" />
									</div>
									<h2 className="text-2xl font-bold text-[#3C3B3B]">title</h2>
								</div>
								<p className="text-sm text-[#737171]">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Quaerat eum quia cum ratione temporibus repudiandae
									doloremque, cumque vitae corrupti asperiores ipsam corporis
									sequi architecto nisi aliquam, iste possimus ut voluptatum?
								</p>
							</div>

							<div className="w-[350px] min-h-[350px] bg-white p-8 shadow flex flex-col space-y-16">
								<div className="flex gap-6 items-center">
									<div className="p-2 py-1 rounded-md text-xl font-bold bg-[#E1FFEE]">
										<i class="bx bx-sun" />
									</div>
									<h2 className="text-2xl font-bold text-[#3C3B3B]">title</h2>
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

					{/* mexer nessa seção inteira */}

					<div className="w-[1280px] mx-auto">
						<div className="flex flex-col gap-24 px-4">
							<div className="w-full flex items-center gap-8">
								<div className="flex-1 w-[500px] h-[300px] flex justify-center items-center bg-gray-200 rounded-2xl">
									<p>foto placa</p>
								</div>

								<div className="flex-1 flex flex-col gap-8 p-8">
									<span className="font-bold text-[#009C39] text-[18px]">
										01
									</span>
									<h3 className="text-4xl text-[#3C3B3B]">
										Solar panel for home.
									</h3>
									<p className="text-[#737171]">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Quos eveniet, rerum sequi animi quisquam ipsa amet
										perspiciatis molestiae atque quod ut praesentium porro
										architecto a? Cum ab aliquam repellendus vero!
									</p>
								</div>
							</div>

							<div className="w-full flex items-center gap-8">
								<div className="flex-1 flex flex-col gap-8 p-8">
									<span className="font-bold text-[#009C39] text-[18px]">
										01
									</span>
									<h3 className="text-4xl text-[#3C3B3B]">
										Solar panel for home.
									</h3>
									<p className="text-[#737171]">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Quos eveniet, rerum sequi animi quisquam ipsa amet
										perspiciatis molestiae atque quod ut praesentium porro
										architecto a? Cum ab aliquam repellendus vero!
									</p>
								</div>

								<div className="flex-1 w-[500px] h-[300px] flex justify-center items-center bg-gray-200 rounded-2xl">
									<p>foto placa</p>
								</div>
							</div>

							<div className="w-full flex items-center gap-8">
								<div className="flex-1 w-[500px] h-[300px] flex justify-center items-center bg-gray-200 rounded-2xl">
									<p>foto placa</p>
								</div>

								<div className="flex-1 flex flex-col gap-8 p-8">
									<span className="font-bold text-[#009C39] text-[18px]">
										01
									</span>
									<h3 className="text-4xl text-[#3C3B3B]">
										Solar panel for home.
									</h3>
									<p className="text-[#737171]">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Quos eveniet, rerum sequi animi quisquam ipsa amet
										perspiciatis molestiae atque quod ut praesentium porro
										architecto a? Cum ab aliquam repellendus vero!
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<ProductsSection />

				<section id="location-section" className="py-12  text-[#3C3B3B] mb-32">
					<div className="flex flex-col w-[1280px] mx-auto space-y-12">
						<h2 className="text-5xl font-bold mb-4">Sobre a TS3</h2>
						<p className="w-[800px] text-justify">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
							quibusdam, recusandae suscipit alias, est eum iusto ullam
							excepturi nobis debitis iste! Voluptatibus, laboriosam voluptatum!
							Fuga odio enim corrupti facere repellat.
						</p>

						<div className="w-full flex justify-around">
							<div className="h-[500px] overflow-hidden w-full">
								<img
									src={frenteTS3}
									className="w-full h-full object-fill rounded-2xl "
									alt=""
								/>
							</div>
						</div>

						<div className="flex space-y-8 gap-16 mt-16">
							<div className="flex flex-col space-y-10">
								<p className="w-[650px] text-justify">
									A TS3 SOLAR é uma empresa fundada em 2021 e que tem o objetivo
									de ofertar a energia solar para a população da região em que
									está inserida, com o compromisso de prestar todos os serviços
									necessários ao perfeito funcionamento de todo o sistema, desde
									a elaboração de projetos, instalação, homologação e manutenção
									de sistemas fotovoltaicos.
								</p>
								<p className="w-[650px] text-justify">
									Nos orgulhamos de ser uma{" "}
									<span className="font-bold text-[#79CE9F] capitalize">
										revenda autorizada intelbras
									</span>
									, um dos maiores fabricantes de gerador solar da América
									Latina. Além de mantermos uma equipe técnica qualificada,
									possuindo todas as certificações necessárias para a atuação
									neste segmento. Toda essa qualificação tem a finalidade de
									garantirmos a satisfação de todos os nossos clientes.
								</p>
								<p className="w-[650px] text-justify">
									Nossa missão é contribuir para a redução da dependência
									energéticas de fontes de energia não renováveis, minimizando o
									impacto ambiental. Além disso, fornecemos soluções de energia
									solar que contribuam para a melhoria da qualidade de vida da
									população, através de melhoria da realidade financeira de
									nossos clientes, tendo em vista a rentabilidade do
									investimento realizado em médio e longo prazo.
								</p>
							</div>
							<div className="flex-1 bg-gray-200 rounded-xl flex justify-center items-center">
								{/* <img src="./img/hero-image-2.svg" alt="" className="object-cover w-full rounded-[10px]" /> */}
								foto do mapa
							</div>
						</div>
					</div>
				</section>
				<footer>
					<div className="w-[1280px] mx-auto flex items-center justify-between py-20">
						<div>
							<img
								src="./img/ts3-solar-logo.svg"
								alt="ts3 solar logo"
								className="w-56 "
							/>
						</div>
						<div className="flex flex-col space-y-4">
							<i className="bx bxl-instagram text-2xl font-bold text-[#3C3B3B]" />
							<div className="flex gap-8 space-y-8">
								<ul className="flex flex-col gap-4">
									<li className="text-sm text-white font-bold">PRODUTO</li>
									<li className="text-[#3C3B3B] cursor-pointer">
										<a className="font-medium" href="#solar-plate-section">
											Sobre e Preços
										</a>
									</li>
								</ul>
								<ul className="flex flex-col gap-4">
									<li className="text-sm text-white font-bold">EMPRESA</li>
									<li className="text-[#3C3B3B] cursor-pointer">
										<a className="font-medium" href="#location-section">
											Sobre nós
										</a>
									</li>
								</ul>
								<ul className="flex flex-col gap-4">
									<li className="text-sm text-white font-bold">CONTATO</li>
									<li className="text-[#3C3B3B] cursor-pointer ">
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
