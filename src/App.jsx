import IconFeatures from './components/IconFeatures';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Especialistas from './components/Especialistas';
import Call from './components/Call';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import Faq from './components/Faq';
import WhatsAppFloat from './components/WhatsAppFloat';
import { useEffect } from 'react';

function App() {
	useEffect(() => {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

		const sr = window.ScrollReveal({
			origin: 'top',
			distance: '10px',
			duration: 800,
			delay: 100,
			reset: false
		});
		sr.reveal('.hero__data, .especialista__caroline', { origin: 'left' });
		sr.reveal('.hero__img, .especialista__flavio', { origin: 'right' });
		sr.reveal('.icon__features, .direito__previdenciario, .direito__trabalhista');
		sr.reveal('.call', { interval: 100 });

	}, []);

	return (
		<>
			<Header />
			<Hero />
			<IconFeatures />
			<Features />
			<Especialistas />
			<Call />
			<Contacts />
			<Faq />
			<Footer />
			<WhatsAppFloat />
		</>
	);
}

export default App;
