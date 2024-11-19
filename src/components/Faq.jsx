import { useRef, useState } from 'react';
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

const AccordionItem = (props) => {
	const contentEl = useRef();
	const { handleToggle, active, faq } = props;
	const { header, id, text } = faq;

	return (
		<div className="relative w-full flex flex-col gap-3 border-b py-3 my-2 text-white">
			<div
				className={`w-full flex justify-between items-center ${active === id ? 'active' : ''}`}
				onClick={() => handleToggle(id)}
			>
				<h5 className="headline-5">{header}</h5>
				<ChevronDown className={`w-5 h-5 text-gray-500 ${active === id && 'transform rotate-180'}`} />
			</div>
			<div ref={contentEl} className={`w-full ${active === id ? 'flex' : 'hidden'}`}>
				<div className="">
					<p className="mb-0">{text}</p>
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
			<section className="w-fful bg-primary mt-16">
				<div className="2xl:max-w-[1440px] mx-auto">
					<div className="w-full flex flex-col items-center px-3 md:px-8 py-16 gap-8">
						{faqs.map((faq, index) => {
							return <AccordionItem key={index} active={active} handleToggle={handleToggle} faq={faq} />;
						})}
					</div>
				</div>
			</section>
		</>
	);
};

export default Faq;
