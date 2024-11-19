import InstagramIcon from '../assets/instagram.svg?react';
import WhatsAppIcon from '../assets/whatsapp.svg?react';

const Footer = () => {
	return (
		<footer className="w-fful bg-primary">
			<div className="2xl:max-w-[1440px] mx-auto">
				<div className="w-full flex flex-col items-center px-3 md:px-8 py-16 gap-8">
					<p className="lead-paragraph text-white text-center">
						© {new Intl.DateTimeFormat('pt-BR', { year: 'numeric' }).format(new Date())} TODOS OS DIREITOS
						RESERVADOS
					</p>

					<ul className="flex gap-3">
						<li>
							<InstagramIcon />
						</li>
						<li>
							<a href="https://wa.me/message/KUPNLGIU4BW2G1">
								<WhatsAppIcon />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
