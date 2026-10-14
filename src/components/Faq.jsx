import { useState } from 'react';
import ChevronDown from '../assets/chevron-down.svg?react';

const faqs = [
	{
		id: 1,
		header: 'Como agendar uma consulta com a Santana Morais Advocacia?',
		text: `Entre em contato conosco através dos nossos canais de atendimento. Nossa equipe estará pronta para agendar sua consulta de forma rápida e prática, seja ela presencial ou online.`,
	},
	{
		id: 2,
		header: 'O que está incluído na análise do caso?',
		text: `Realizamos uma análise detalhada do seu caso trabalhista ou previdenciário, considerando todos os detalhes fornecidos. Após essa avaliação, identificamos as melhores estratégias jurídicas para resolver sua situação.`,
	},
	{
		id: 3,
		header: 'Existe algum custo inicial para iniciar meu caso?',
		text: `Não. Trabalhamos com uma política de honorários condicionados ao êxito do caso. Você só terá custos ao final, caso o resultado seja positivo para você.`,
	},
	{
		id: 4,
		header: 'Como serei informado sobre o andamento do meu processo?',
		text: `Mantemos nossos clientes informados a cada etapa do processo por meio de uma comunicação clara e constante. Estamos sempre à disposição para esclarecer dúvidas e garantir transparência total.`,
	},
];

const AccordionItem = ({ handleToggle, active, faq }) => {
	const { header, id, text } = faq;
	const open = active === id;

	return (
		<div className="w-full border-b border-white/30 py-3 text-white">
			<h5>
				<button
					type="button"
					id={`faq-btn-${id}`}
					aria-expanded={open}
					aria-controls={`faq-panel-${id}`}
					onClick={() => handleToggle(id)}
					className="headline-5 w-full flex justify-between items-center gap-4 py-2 text-left rounded-md outline-none focus-visible:ring-4 focus-visible:ring-accent"
				>
					<span>{header}</span>
					<ChevronDown
						aria-hidden="true"
						className={`shrink-0 w-5 h-5 text-accent transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
					/>
				</button>
			</h5>
			<div
				id={`faq-panel-${id}`}
				role="region"
				aria-labelledby={`faq-btn-${id}`}
				aria-hidden={!open}
				className={`grid transition-[grid-template-rows] duration-300 ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
			>
				<div className="overflow-hidden">
					<p className="pt-3 pb-2 text-soft">{text}</p>
				</div>
			</div>
		</div>
	);
};

const Faq = () => {
	const [active, setActive] = useState(null);

	const handleToggle = (index) => {
		if (active === index) {
			setActive(null);
		} else {
			setActive(index);
		}
	};

	return (
		<>
			<section className="w-full bg-primary border-t border-white/15">
				<div className="2xl:max-w-[1440px] mx-auto">
					<div className="w-full max-w-[900px] mx-auto flex flex-col items-center px-3 md:px-8 py-16 gap-2">
						{faqs.map((faq) => {
							return <AccordionItem key={faq.id} active={active} handleToggle={handleToggle} faq={faq} />;
						})}
					</div>
				</div>
			</section>
		</>
	);
};

export default Faq;
