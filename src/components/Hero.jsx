import heroImg from "../assets/hero.png";
import ChevronRight from "../assets/ic_baseline-chevron-right.svg?react";
import { WHATSAPP_URL } from "../constants";

const Hero = () => {
	return (
		<section className="w-full bg-white pt-8 md:pt-12">
			<div className="2xl:max-w-[1440px] mx-auto">
				<div className="w-full flex flex-col md:flex-row md:justify-between px-3 md:px-8 gap-8">
					<div className="hero__data md:max-w-[650px] flex flex-col items-center md:items-start gap-8 text-primary pb-3">
						<div className="flex flex-col gap-4 text-center md:text-start">
							<h4 className="headline-5 lg:headline-4">
								RECEBA O QUE É SEU POR DIREITO
							</h4>
							<h1 className="headline-2 lg:headline-1">
								Especialistas em Direito do Trabalho e Direito
								Previdenciário
							</h1>
							<p className="lead-paragraph text-center md:text-start">
								Atuamos na defesa dos trabalhadores e na
								garantia dos direitos previdenciários, ajudando
								você a conquistar seus benefícios de forma ágil
								e segura
							</p>
						</div>
						<a
							href={WHATSAPP_URL}
							className="button hover:bg-muted"
						>
							<span>FALE COM UM ESPECIALISTA</span>
							<ChevronRight />
						</a>
					</div>
					<div className="hero__img items-end">
						<img
							src={heroImg}
							alt="Flávio Santana e Carolina Morais"
							width={540}
							height={601}
							fetchPriority="high"
							className="w-full md:h-full md:min-w-[382px] object-cover"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
