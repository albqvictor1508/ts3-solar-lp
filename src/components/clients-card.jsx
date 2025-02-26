import Marquee from "react-fast-marquee";
import isabelCliente01 from "../assets/ts3-images/isabel-cliente-01.png";
import isabelCliente02 from "../assets/ts3-images/isabel-cliente-02.png";
import isabelCliente03 from "../assets/ts3-images/isabel-cliente-03.png";
import isabelCliente04 from "../assets/ts3-images/isabel-cliente-4.jpeg";

export function ClientsCard() {
	return (
		<div className="w-full h-full py-10 md:py-20">
			<Marquee speed={100} autoFill pauseOnHover>
				{/* 
          A div abaixo abriga todos os slides/imagens. 
          Mantemos 'flex' para exibir lado a lado, 
          pois o próprio Marquee faz a rolagem horizontal.
        */}
				<div className="w-full flex">
					{/* 
            Em telas menores que 'md': 
            - min-w-[200px], h-[200px], mx-2
            Em telas a partir de 'md': 
            - min-w-[300px], h-[300px], mx-4
          */}
					<div className="min-w-[200px] md:min-w-[300px] h-[200px] md:h-[300px] overflow-hidden rounded-2xl mx-2 md:mx-4">
						<img
							src={isabelCliente01}
							alt=""
							className="object-cover w-full h-full"
						/>
					</div>

					<div className="min-w-[200px] md:min-w-[300px] h-[200px] md:h-[300px] overflow-hidden rounded-2xl mx-2 md:mx-4">
						<img
							src={isabelCliente02}
							alt=""
							className="object-cover w-full h-full"
						/>
					</div>

					<div className="min-w-[200px] md:min-w-[300px] h-[200px] md:h-[300px] overflow-hidden rounded-2xl mx-2 md:mx-4">
						<img
							src={isabelCliente03}
							alt=""
							className="object-cover w-full h-full"
						/>
					</div>
					<div className="min-w-[200px] md:min-w-[300px] h-[200px] md:h-[300px] overflow-hidden rounded-2xl mx-2 md:mx-4">
						<img
							src={isabelCliente04}
							alt=""
							className="object-cover w-full h-full"
						/>
					</div>
				</div>
			</Marquee>
		</div>
	);
}
