import flavioImg from '../assets/flavio.png';
import carolineImg from '../assets/caroline.png';

const Especialistas = () => {
	return (
		<section className="w-full bg-white my-14">
			<div className="2xl:max-w-[1440px] mx-auto">
				<div className="w-full flex flex-col justify-between items-center gap-14 px-3 md:px-8 py-8">
					<div className="flex flex-col md:flex-row justify-between items-center gap-14 text-primary">
						<img src={flavioImg} alt="" className="max-w-[250px] max-h-[250px] object-cover" />
						<div className="flex flex-col gap-5">
							<div className="flex flex-col gap-3">
								<h5 className="headline-5">Especialista</h5>
								<h2 className="headline-2">Flávio Santana</h2>
							</div>
							<p className="paragraph text-justify">
								Formado em Direito pela Universidade Anhanguera de São Paulo e pós-graduado em Direito do
								Trabalho e Processo do Trabalho, Curso de Especialização em Direito Previdenciário, com mais
								de 5 anos de experiência na advocacia. Flávio busca constantemente oferecer um atendimento
								focado em resultados e no bem-estar de seus clientes, ele conduz cada caso com o máximo de
								cuidado e atenção, sempre comprometido com as necessidades daqueles que confiam em seu
								trabalho.
							</p>
						</div>
					</div>
					<div className="flex flex-col md:flex-row-reverse justify-between items-center gap-14 text-primary">
						<img src={carolineImg} alt="" className="max-w-[250px] max-h-[250px] object-cover" />
						<div className="flex flex-col gap-5">
							<div className="flex flex-col gap-3">
								<h5 className="headline-5">Especialista</h5>
								<h2 className="headline-2">CAROLINA MORAIS</h2>
							</div>
							<p className="paragraph text-justify">
								Formada em Direito pela Universidade Nove de Julho, possui mais de 5 anos de experiência na
								advocacia, atuando tanto no setor público quanto privado. Com uma paixão nata pela oratória e
								persuasão, Carolina descobriu na advocacia uma verdadeira vocação: defender direitos e
								promover o acesso à Justiça. Pós-graduada em Direito e Processo do Trabalho, Carolina oferece
								um atendimento personalizado e focado em soluções eficazes para cada cliente.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Especialistas;
