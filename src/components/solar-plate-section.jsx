export function solarPlateSection() {
	const data = [
		{ id: "1", text: "random text", img: "" },
		{ id: "2", text: "random text", img: "" },
		{ id: "3", text: "random text", img: "" },
		{ id: "4", text: "random text", img: "" },
		{ id: "5", text: "random text", img: "" },
		{ id: "1", text: "random text", img: "" },
	];
	return (
		<div>
			<section id="solar-plate-section">
				<div className="w-[1400px] mx-auto flex justify-between text-[#3C3B3B] py-16">
					<div className="flex-1">
						<h2 className="text-5xl font-semibold mb-6">Lorem Ipsum</h2>
						<div className="space-y-6">
							<p className="w-[600px]">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
								enim vitae natus nam possimus non dicta at, eos quos eum maiores
								eveniet est asperiores temporibus. Nam reiciendis nihil vel
								quia?
							</p>
							<p className="w-[600px]">
								Lorem, ipsum dolor sit amet consectetur adipisicing elit.
								Impedit reiciendis ipsam odio ratione ab? Alias, doloremque!
								Quidem cumque numquam fugiat ut repellat porro cupiditate nam
								nihil doloribus, mollitia a quaerat? Lorem ipsum dolor sit amet
								consectetur adipisicing elit. Fugit culpa consequatur dolore ad.
								Libero dolorem repellat eos impedit perferendis neque a sapiente
								molestias omnis quaerat, blanditiis, assumenda itaque quisquam.
								Quas?
							</p>
							<p className="w-[600px]">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
								quisquam ullam praesentium velit in nulla corrupti magnam non
								minima. Fugit quas voluptatibus nam nesciunt esse distinctio eum
								consequatur assumenda dolor?
							</p>
						</div>
						<div className="w-[600px] grid grid-cols-2 gap-8 mt-[48px]">
							<div className="flex flex-col justify-between border border-[#3C3B3B] rounded-[10px] h-[220px]">
								<img
									src="public/img/sky-logo.svg"
									alt="produto"
									className="w-full rounded-t-[10px]"
								/>
								<div className="w-full h-8 flex items-center text-dark-green font-bold px-2.5 bg-[#3C3B3B] rounded-b-[10px]">
									<span className="text-[#79CE9F]">R$ 20,00</span>
								</div>
							</div>
							<div className="flex flex-col justify-between border border-[#3C3B3B] rounded-[10px] h-[220px]">
								<img
									src="public/img/sky-logo.svg"
									alt="produto"
									className="w-full rounded-t-[10px]"
								/>
								<div className="w-full h-8 flex items-center text-dark-green font-bold px-2.5 bg-[#3C3B3B] rounded-b-[10px]">
									<span className="text-[#79CE9F]">R$ 20,00</span>
								</div>
							</div>
							<div className="flex flex-col justify-between border border-[#3C3B3B] rounded-[10px] h-[220px]">
								<img
									src="public/img/sky-logo.svg"
									alt="produto"
									className="w-full rounded-t-[10px]"
								/>
								<div className="w-full h-8 flex items-center text-dark-green font-bold px-2.5 bg-[#3C3B3B] rounded-b-[10px]">
									<span className="text-[#79CE9F]">R$ 20,00</span>
								</div>
							</div>
							<div className="flex flex-col justify-between border border-[#3C3B3B] rounded-[10px] h-[220px]">
								<img
									src="public/img/sky-logo.svg"
									alt="produto"
									className="w-full rounded-t-[10px]"
								/>
								<div className="w-full h-8 flex items-center text-dark-green font-bold px-2.5 bg-[#3C3B3B] rounded-b-[10px]">
									<span className="text-[#79CE9F]">R$ 20,00</span>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-1 items-center">
						<img
							src={solarPlatePhoto}
							className="w-[650px] mx-auto"
							alt="placa solar"
						/>
					</div>
				</div>
			</section>
		</div>
	);
}
