import Marquee from "react-fast-marquee";
import isabelCliente01 from "../assets/ts3-images/isabel-cliente-01.png";
import isabelCliente02 from "../assets/ts3-images/isabel-cliente-02.png";
import isabelCliente03 from "../assets/ts3-images/isabel-cliente-03.png";

export function ClientsCard() {
	return (
		<div className="w-full h-full py-20">
			<Marquee
				speed={100}
				autoFill
				pauseOnHover
				// biome-ignore lint/correctness/noChildrenProp: <explanation>
				children
			>
				<div className="w-full flex">
						<div className="min-w-[300px] h-[300px] overflow-hidden rounded-2xl mx-4">
							<img
								src={isabelCliente01}
								className="object-cover w-full h-full"
								alt=""
							/>
						</div>
						<div className="min-w-[300px] h-[300px] overflow-hidden rounded-2xl mx-4">
							<img
								src={isabelCliente02}
								className="object-cover w-full h-full"
								alt=""
							/>
						</div>
						<div className="min-w-[300px] h-[300px] overflow-hidden rounded-2xl mx-4">
							<img
								src={isabelCliente03}
								className="object-cover w-full h-full"
								alt=""
							/>
						</div>
				</div>
			</Marquee>
		</div>
	);
}

// ANOTAR SOBRE A TAG MARQUEE
