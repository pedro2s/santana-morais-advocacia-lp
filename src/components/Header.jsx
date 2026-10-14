import Logo from '/Logo.svg';
import ChevronRight from '../assets/ic_baseline-chevron-right.svg?react';
import { WHATSAPP_URL } from '../constants';

const links = [
	{ href: '#areas', label: 'Áreas de atuação' },
	{ href: '#especialistas', label: 'Especialistas' },
	{ href: '#contato', label: 'Fale conosco' },
];

const Header = () => {
	return (
		<header className="sticky top-0 z-40 w-full bg-primary shadow-md">
			<div className="2xl:max-w-[1440px] mx-auto">
				<div className="w-full h-[90px] flex justify-center md:justify-between items-center gap-6 px-3 md:px-8">
					<a href="#" aria-label="Santana Morais Advocacia" className="outline-none focus-visible:ring-4 focus-visible:ring-accent rounded-md">
						<img src={Logo} alt="" />
					</a>
					<nav aria-label="Principal" className="hidden md:flex items-center gap-8">
						{links.map(({ href, label }) => (
							<a
								key={href}
								href={href}
								className="headline-5 text-white hover:text-accent transition-colors duration-200 outline-none focus-visible:ring-4 focus-visible:ring-accent rounded-md"
							>
								{label}
							</a>
						))}
						<a href={WHATSAPP_URL} className="button p-3 bg-accent text-primary hover:bg-white">
							<span>Fale com um Especialista</span>
							<ChevronRight />
						</a>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
