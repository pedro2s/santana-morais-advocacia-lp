import heroImg from '../assets/hero.png';
import chevronRight from '../assets/ic_baseline-chevron-right.svg';

const Hero = () => {
	return (
		<section className="w-fful bg-white mt-16">
			<div className="2xl:max-w-[1440px] mx-auto">
				<div className="w-full flex flex-col md:flex-row md:justify-between px-3 md:px-8 gap-8 overflow-x-hidden">
					<div className="md:max-w-[540px] flex flex-col items-start gap-8 text-primary pb-3">
						<div className="flex flex-col gap-4">
							<h4 className="headline-4 md:headline-5 lg:headline-4">RECEBA O QUE É SEU POR DIREITO</h4>
							<h1 className="headline-1 md:headline-2 lg:headline-1">especialistas em direito do trabalho</h1>
							<p className="lead-paragraph">
								Atuamos na defesa dos trabalhadores, e em Direito Previdenciário, ajudando você a conquistar
								seus benefícios de forma ágil e segura.
							</p>
						</div>
						<a href="#" className="button hover:bg-secondary">
							<span>FALE COM UM ESPECIALISTA</span>
							<img src={chevronRight} alt="" />
						</a>
					</div>
					<div className="items-end">
						<img src={heroImg} alt="" className="w-full md:h-full md:min-w-[382px] object-cover" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
