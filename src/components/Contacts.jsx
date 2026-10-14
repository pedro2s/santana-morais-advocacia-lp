const iconProps = {
	'aria-hidden': true,
	className: 'shrink-0 w-6 h-6 mt-1 text-primary',
	viewBox: '0 0 24 24',
	fill: 'none',
	stroke: 'currentColor',
	strokeWidth: 2,
	strokeLinecap: 'round',
	strokeLinejoin: 'round',
};

const PinIcon = () => (
	<svg {...iconProps}>
		<path d="M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11z" />
		<circle cx="12" cy="10" r="2.5" />
	</svg>
);

const PhoneIcon = () => (
	<svg {...iconProps}>
		<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
	</svg>
);

const MailIcon = () => (
	<svg {...iconProps}>
		<rect x="3" y="5" width="18" height="14" rx="2" />
		<path d="M3 7l9 6 9-6" />
	</svg>
);

const Contacts = () => {
	return (
		<section id="contato" className="w-full bg-white">
			<div className="2xl:max-w-[1440px] mx-auto">
				<div className="w-full flex justify-between px-3 md:px-8 py-16 gap-8">
					<div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
						<div className="relative w-full h-[474px] rounded-2xl overflow-hidden bg-secondary/20">
							<iframe
								title="Mapa do escritório Santana Morais Advocacia"
								className="w-full h-full"
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1293.4065280738719!2d-46.83742719922418!3d-23.52149023269583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf01e810adf9ab%3A0xa42555c059593327!2sAv.%20Inoc%C3%AAncio%20Ser%C3%A1fico%2C%2022%20-%20Vila%20Dirce%2C%20Carapicu%C3%ADba%20-%20SP%2C%2006320-290!5e0!3m2!1spt-BR!2sbr!4v1731974455926!5m2!1spt-BR!2sbr"
								style={{ border: 0 }}
								allowFullScreen=""
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
							></iframe>
						</div>
						<div className="flex flex-col gap-8">
							<div className="flex flex-col gap-3 text-primary">
								<h2 className="headline-2">fale conosco</h2>
								<p className="paragraph text-left">
									Não deixe seus direitos para depois! Seja você um trabalhador em busca de justiça ou um
									cidadão que deseja acessar seus direitos previdenciários, estamos prontos para ajudar.
									Agende sua consulta gratuita hoje.
								</p>
							</div>
							<ul className="flex flex-col gap-4 text-primary">
								<li className="flex items-start gap-3">
									<PinIcon />
									<a
										href="https://www.google.com/maps/search/?api=1&query=Avenida+Inoc%C3%AAncio+Ser%C3%A1fico+22+Carapicu%C3%ADba+SP"
										target="_blank"
										rel="noopener noreferrer"
										className="lead-paragraph text-[20px] md:text-[24px] text-primary hover:text-muted underline-offset-4 hover:underline"
									>
										Endereço: Avenida Inocêncio Seráfico, n° 22, sala 04, Centro, Carapicuíba/SP
									</a>
								</li>
								<li className="flex items-start gap-3">
									<PhoneIcon />
									<p className="lead-paragraph text-[20px] md:text-[24px] text-primary">
										Telefone:{' '}
										<a href="tel:+5511933080214" className="hover:text-muted hover:underline underline-offset-4">
											(11) 93308-0214
										</a>{' '}
										/{' '}
										<a href="tel:+5511913584027" className="hover:text-muted hover:underline underline-offset-4">
											(11) 91358-4027
										</a>
									</p>
								</li>
								<li className="flex items-start gap-3">
									<MailIcon />
									<p className="lead-paragraph text-[20px] md:text-[24px] text-primary break-all">
										E-mail:{' '}
										<a
											href="mailto:santanamoraisadvocacia@gmail.com"
											className="hover:text-muted hover:underline underline-offset-4"
										>
											santanamoraisadvocacia@gmail.com
										</a>
									</p>
								</li>
							</ul>
							<div className="flex flex-col gap-3 text-primary">
								<h3 className="headline-3">ATENDIMENTO PRESENCIAL E ONLINE</h3>
								<p className="paragraph text-left">
									Atendemos em todo o Brasil, com opções de consulta por videoconferência ou
									presencialmente em nosso escritório. Garanta já seus direitos trabalhistas e
									previdenciários com o suporte especializado do SANTANA MORAIS ADVOCACIA
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contacts;
