import InstagramIcon from '../assets/instagram.svg?react';
import WhatsAppIcon from '../assets/whatsapp.svg?react';
import { WHATSAPP_URL } from '../constants';

const Footer = () => {
	return (
		<footer className="w-full bg-primary border-t border-white/15">
			<div className="2xl:max-w-[1440px] mx-auto">
				<div className="w-full flex flex-col items-center px-3 md:px-8 py-16 gap-8">
					<p className="paragraph text-white text-center">
						© {new Intl.DateTimeFormat('pt-BR', { year: 'numeric' }).format(new Date())} TODOS OS DIREITOS
						RESERVADOS
					</p>

					<ul className="flex gap-3">
						<li>
							<InstagramIcon className="w-8 h-8" />
						</li>
						<li>
							<a
								href={WHATSAPP_URL}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="WhatsApp"
								className="block transition-opacity hover:opacity-70 rounded-md outline-none focus-visible:ring-4 focus-visible:ring-accent"
							>
								<WhatsAppIcon className="w-8 h-8" />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
