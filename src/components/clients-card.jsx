import Marquee from "react-fast-marquee";
import isabelCliente01 from "../assets/ts3-images/isabel-cliente-01.png";
import isabelCliente02 from "../assets/ts3-images/isabel-cliente-02.png";
import isabelCliente03 from "../assets/ts3-images/isabel-cliente-03.png";
// import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";

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
						className="object-cover flex-1 h-[300px] rounded-2xl px px-4"
						alt=""
					/>
					<img
						src={isabelCliente02}
						className="object-cover flex-1 h-[300px] rounded-2xl px-4"
						alt=""
					/>
					<img
						src={isabelCliente03}
						className="object-cover flex-1 h-[300px] rounded-2xl px-4"
						alt=""
					/>
				</div>
			</Marquee>
		</div>
	);
}

// ANOTAR SOBRE A TAG MARQUEE

{
	/* <div className="w-[1280px] mx-auto">
<h2 className="text-4xl font-bold w-[550px] mx-auto text-center leading-12 text-[#3C3B3B]">
    Trusted service,{" "}
    <span className="text-[#009C39]">for your various needs</span>
</h2>
</div>
<div className="flex gap-12 transition-all animate-none clients-container">
<div className="flex-1 clients-card">
    <img src="" className="rounded-xl shadow" alt="" />
</div>
<div className="flex-1 clients-card">
    <img src={isabelCliente01} className="rounded-xl" alt="" />
</div>
<div className="clients-card">
    <img src={isabelCliente02} className="rounded-xl shadow" alt="" />
</div>
<div className="clients-card">
    <img src={isabelCliente03} className="rounded-xl shadow" alt="" />
</div>
<div className="clients-card">
    <img src={imagemTeto} className="rounded-xl shadow" alt="" />
</div>
</div> */
}
