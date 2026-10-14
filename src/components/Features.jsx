import check from '../assets/check.svg';

const areas = [
	{
		className: 'direito__previdenciario',
		title: 'Dos Direitos Previdenciários',
		text: 'A luta pelos seus direitos previdenciários não precisa ser solitária. Com nossa experiência, ajudamos você a conquistar o benefício que lhe é devido, seja na aposentadoria ou em outros auxílios garantidos por lei',
		items: [
			'Aposentadoria por idade, tempo de contribuição e invalidez',
			'benefícios assistenciais (loas e auxílio-doença)',
			'revisão de aposentadoria e benefícios',
			'pensão por morte',
			'planejamento previdenciário',
		],
	},
	{
		className: 'direito__trabalhista',
		title: 'Dos Trabalhadores',
		text: 'Seus direitos como trabalhador são nossa prioridade. Atuamos em defesa de empregados que enfrentam desafios com seus empregadores, garantindo que seus direitos sejam reconhecidos e respeitados',
		items: [
			'rescisão contratual e verbas rescisórias não pagas',
			'adicional de insalubridade e periculosidade',
			'equiparação salarial e reconhecimento de vínculo empregatício',
			'acidente de trabalho e doenças ocupacionais',
			'rescisão indireta do contrato de trabalho',
		],
	},
];

const Features = () => {
	return (
		<section className="w-full bg-primary">
			<div className="2xl:max-w-[1440px] mx-auto">
				<div className="w-full flex flex-col md:flex-row md:items-stretch justify-between gap-6 px-3 md:px-8 py-8 md:py-16">
					{areas.map(({ className, title, text, items }) => (
						<div
							key={className}
							className={`${className} flex-1 flex flex-col gap-6 text-white rounded-2xl border border-accent/30 bg-white/5 p-6 md:p-8`}
						>
							<div className="flex flex-col gap-3">
								<h5 className="headline-5 text-accent">Defesa</h5>
								<h2 className="headline-2">{title}</h2>
								<p className="text-[18px] leading-6 text-left">{text}</p>
							</div>
							<ul className="flex flex-col gap-3">
								{items.map((item) => (
									<li key={item} className="flex items-center gap-4">
										<img src={check} alt="" />
										<span className="text-[16px] leading-5 font-bold uppercase">{item}</span>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Features;
