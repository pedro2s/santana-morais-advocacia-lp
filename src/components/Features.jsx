import { useEffect } from 'react';
import check from '../assets/check.svg';

const Features = () => {
	useEffect(() => {
		const sr = window.ScrollReveal({
			origin: 'top',
			distance: '60px',
			duration: '2500',
			delay: 400,
			// reset: true
		});
		sr.reveal('.direito__previdenciario, .direito__trabalhista');
	}, []);

	return (
		<section className="w-full bg-primary">
			<div className="2xl:max-w-[1440px] mx-auto">
				<div className="w-full flex flex-col md:flex-row justify-between items-center gap-14 px-3 md:px-8 py-8">
					<div className="direito__previdenciario flex flex-col gap-6 text-white">
						<div className="flex flex-col gap-3">
							<h5 className="headline-5">Defesa</h5>
							<h2 className="headline-2">Dos Direitos Previdenciários</h2>
							<p className="text-[18px] leading-6 text-justify">
								A luta pelos seus direitos previdenciários não precisa ser solitária. Com nossa experiência,
								ajudamos você a conquistar o benefício que lhe é devido, seja na aposentadoria ou em outros
								auxílios garantidos por lei
							</p>
						</div>
						<ul className="flex flex-col gap-3">
							<li className="flex items-center gap-4">
								<img src={check} alt="" />
								<span className="text-[16px] leading-5 font-bold uppercase">
									Aposentadoria por idade, tempo de contribuição e invalidez
								</span>
							</li>
							<li className="flex items-center gap-4">
								<img src={check} alt="" />
								<span className="text-[16px] leading-5 font-bold uppercase">
									benefícios assistenciais (loas e auxílio-doença)
								</span>
							</li>
							<li className="flex items-center gap-4">
								<img src={check} alt="" />
								<span className="text-[16px] leading-5 font-bold uppercase">
									revisão de aposentadoria e benefícios
								</span>
							</li>
							<li className="flex items-center gap-4">
								<img src={check} alt="" />
								<span className="text-[16px] leading-5 font-bold uppercase">pensão por morte</span>
							</li>
							<li className="flex items-center gap-4">
								<img src={check} alt="" />
								<span className="text-[16px] leading-5 font-bold uppercase">
									planejamento previdenciário
								</span>
							</li>
						</ul>
					</div>

					<div className="direito__trabalhista flex flex-col gap-6 text-white">
						<div className="flex flex-col gap-3">
							<h5 className="headline-5">Defesa</h5>
							<h2 className="headline-2">Dos Trabalhadores</h2>
							<p className="text-[18px] leading-6 text-justify">
								Seus direitos como trabalhador são nossa prioridade. Atuamos em defesa de empregados que
								enfrentam desafios com seus empregadores, garantindo que seus direitos sejam reconhecidos e
								respeitados
							</p>
						</div>
						<ul className="flex flex-col gap-3">
							<li className="flex items-center gap-4">
								<img src={check} alt="" />
								<span className="text-[16px] leading-5 font-bold uppercase">
									rescisão contratual e verbas rescisórias não pagas
								</span>
							</li>
							<li className="flex items-center gap-4">
								<img src={check} alt="" />
								<span className="text-[16px] leading-5 font-bold uppercase">
									adicional de insalubridade e periculosidade
								</span>
							</li>
							<li className="flex items-center gap-4">
								<img src={check} alt="" />
								<span className="text-[16px] leading-5 font-bold uppercase">
									equiparação salarial e reconhecimento de vínculo empregatício
								</span>
							</li>
							<li className="flex items-center gap-4">
								<img src={check} alt="" />
								<span className="text-[16px] leading-5 font-bold uppercase">
									acidente de trabalho e doenças ocupacionais
								</span>
							</li>
							<li className="flex items-center gap-4">
								<img src={check} alt="" />
								<span className="text-[16px] leading-5 font-bold uppercase">
									rescisão indireta do contrato de trabalho
								</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Features;
