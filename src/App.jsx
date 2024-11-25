import IconFeatures from './components/IconFeatures';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Especialistas from './components/Especialistas';
import Call from './components/Call';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import Faq from './components/Faq';
import { useEffect } from 'react';

function App() {
	useEffect(() => {
		const sr = window.ScrollReveal({
			origin: 'top',
			distance: '10px',
			duration: '2500',
			delay: 400,
			reset: true
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
		</>
	);
}

export default App;
