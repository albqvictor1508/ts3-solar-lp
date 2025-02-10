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
					<img
						src={isabelCliente01}
						className="object-contain flex-1 h-[300px] rounded-2xl px px-4 "
						alt=""
					/>
					<img
						src={isabelCliente02}
						className="object-contain flex-1 h-[300px] rounded-2xl px-4"
						alt=""
					/>
					<img
						src={isabelCliente03}
						className="object-contain flex-1 h-[300px] rounded-md px-4"
						alt=""
					/>
				</div>
			</Marquee>
		</div>
	);
}

// ANOTAR SOBRE A TAG MARQUEE
