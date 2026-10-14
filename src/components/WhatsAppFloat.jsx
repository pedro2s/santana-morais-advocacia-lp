import WhatsAppIcon from '../assets/whatsapp.svg?react';
import { WHATSAPP_URL } from '../constants';

const WhatsAppFloat = () => {
	return (
		<a
			href={WHATSAPP_URL}
			target="_blank"
			rel="noopener noreferrer"
			aria-label="Fale conosco pelo WhatsApp"
			className="fixed bottom-4 right-4 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-primary border-2 border-accent shadow-lg transition-transform duration-200 hover:scale-110 outline-none focus-visible:ring-4 focus-visible:ring-accent focus-visible:ring-offset-2"
		>
			<WhatsAppIcon className="w-8 h-8" />
		</a>
	);
};

export default WhatsAppFloat;
