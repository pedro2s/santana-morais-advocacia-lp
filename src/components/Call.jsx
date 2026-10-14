import ChevronRight from '../assets/ic_baseline-chevron-right.svg?react';
import { WHATSAPP_URL } from '../constants';

const Call = () => {
	return (
		<section className="w-full bg-primary">
			<div className="2xl:max-w-[1440px] mx-auto">
				<div className="w-full flex justify-center text-center px-3 py-16 md:px-8">
					<div className="call w-full max-w-[500px] flex flex-col items-center gap-8">
						<h4 className="headline-4 text-white">Por que escolher o Santana Morais Advocacia?</h4>
						<h1 className="headline-1 text-white">Experiência Comprovada</h1>
						<p className="lead-paragraph text-soft text-center">
							Mais de 5 anos de atuação nas áreas trabalhista e previdenciária, lidando com vários casos
							semelhantes ao seu e por isso conhecemos as melhores estratégias para executar a defesa dos seus
							interesses.
						</p>

						<a href={WHATSAPP_URL} className="button bg-accent hover:bg-white text-primary">
							<span>Fale com um Especialista</span>
							<ChevronRight />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Call;
