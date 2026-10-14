import flavioImg from '../assets/especialista_flavio.webp';
import carolineImg from '../assets/especialista_caroline.webp';

const Especialistas = () => {
	return (
		<section id="especialistas" className="w-full bg-white py-8 md:py-16">
			<div className="2xl:max-w-[1440px] mx-auto">
				<div className="w-full flex flex-col justify-between items-center gap-14 px-3 md:px-8 py-8">
					<div className="especialista__flavio flex flex-col md:flex-row justify-between items-center gap-14 text-primary">
						<img
								src={flavioImg}
								alt="Flávio Santana"
								width={280}
								height={350}
								loading="lazy"
								className="shrink-0 w-[280px] h-[350px] object-cover object-top rounded-2xl border-4 border-accent"
							/>
						<div className="flex flex-col gap-5">
							<div className="flex flex-col gap-3">
								<h5 className="headline-5">Especialista</h5>
								<h2 className="headline-2">Flávio Santana</h2>
							</div>
							<div className="flex flex-col gap-3">
								<p className="paragraph text-left">
									Bacharel em Direito pela Universidade Anhanguera de São Paulo, pós-graduado em Direito do
									Trabalho e Processo do Trabalho e especialização em Direito Previdenciário, Flávio alia
									conhecimento técnico e dedicação para oferecer uma atuação jurídica estratégica, ética e
									personalizada.
								</p>
								<p className="paragraph text-left">
									Seu trabalho é pautado pela análise cuidadosa de cada caso, pela transparência na
									orientação jurídica e pelo compromisso em buscar as melhores soluções legais para cada
									cliente. Com atendimento humanizado e atenção individualizada, conduz cada demanda com
									responsabilidade, seriedade e respeito aos direitos de quem confia em seu trabalho.
								</p>
							</div>
						</div>
					</div>
					<div className="especialista__caroline flex flex-col md:flex-row-reverse justify-between items-center gap-14 text-primary">
						<img
								src={carolineImg}
								alt="Carolina Morais"
								width={280}
								height={350}
								loading="lazy"
								className="shrink-0 w-[280px] h-[350px] object-cover object-top rounded-2xl border-4 border-accent"
							/>
						<div className="flex flex-col gap-5">
							<div className="flex flex-col gap-3">
								<h5 className="headline-5">Especialista</h5>
								<h2 className="headline-2">CAROLINA MORAIS</h2>
							</div>
							<div className="flex flex-col gap-3">
								<p className="paragraph text-left">
									Bacharel em Direito pela Universidade Nove de Julho e pós-graduada em Direito e Processo do
									Trabalho, Carolina reúne conhecimento jurídico e vivência nos setores público e privado,
									ampliando sua compreensão sobre os desafios e as necessidades de cada demanda.
								</p>
								<p className="paragraph text-left">
									Com forte aptidão para a oratória e a argumentação jurídica, encontrou na advocacia sua
									verdadeira vocação: defender direitos, buscar soluções jurídicas adequadas e contribuir
									para o acesso à Justiça. Sua atuação é pautada pela ética, pela responsabilidade e pelo
									atendimento personalizado, com análise criteriosa de cada caso e compromisso com os
									interesses de seus clientes.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Especialistas;
