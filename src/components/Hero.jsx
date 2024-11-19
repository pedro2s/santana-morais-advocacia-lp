import { useEffect } from 'react';
import heroImg from '../assets/hero.png';
import ChevronRight from '../assets/ic_baseline-chevron-right.svg?react';

const Hero = () => {
	useEffect(() => {
		const sr = window.ScrollReveal({
			origin: 'top',
			distance: '60px',
			duration: '2500',
			delay: 400,
			// reset: true
		});
		sr.reveal('.hero__data', { origin: 'left' });
		sr.reveal('.hero__img', { origin: 'right' });
	}, []);

	return (
		<section className="w-fful bg-white mt-16">
			<div className="2xl:max-w-[1440px] mx-auto">
				<div className="w-full flex flex-col md:flex-row md:justify-between px-3 md:px-8 gap-8">
					<div className="hero__data md:max-w-[650px] flex flex-col items-center md:items-start gap-8 text-primary pb-3">
						<div className="flex flex-col gap-4 text-center md:text-start">
							<h4 className="headline-5 lg:headline-4">RECEBA O QUE É SEU POR DIREITO</h4>
							<h1 className="headline-2 lg:headline-1">Especialistas em direito do trabalho</h1>
							<p className="lead-paragraph text-center md:text-start">
								Atuamos na defesa dos trabalhadores e na garantia dos direitos previdenciários.
							</p>
						</div>
						<a href="https://wa.me/message/KUPNLGIU4BW2G1" className="button hover:bg-secondary">
							<span>FALE COM UM ESPECIALISTA</span>
							<ChevronRight />
						</a>
					</div>
					<div className="hero__img items-end">
						<img src={heroImg} alt="" className="w-full md:h-full md:min-w-[382px] object-cover" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;