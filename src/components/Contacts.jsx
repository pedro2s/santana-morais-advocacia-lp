// import { useEffect, useRef } from 'react';

const Contacts = () => {
	// const mapRef = useRef();

	/* useEffect(() => {
		// const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as window.google.maps.MarkerLibrary;
		const map = new window.google.maps.Map(mapRef.current, {
			center: { lat: -23.521474838256836, lng: -46.83589172363281 },
			zoom: 17,
			mapId: 'DEMO_MAP_ID',
		});
		new window.google.maps.marker.AdvancedMarkerElement({
			map,
			position: { lat: -23.521474838256836, lng: -46.83589172363281 },
		});
	}, []); */

	return (
		<section className="w-fful bg-white mt-16">
			<div className="2xl:max-w-[1440px] mx-auto">
				<div className="w-full flex justify-between px-3 md:px-8 py-16 gap-8">
					<div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
						{/* <div ref={mapRef} className="w-full h-[474px]"></div> */}
						<div className="relative w-full h-[474px]">
							<iframe
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
								<p className="paragraph text-justify">
									Não deixe seus direitos para depois! Seja você um trabalhador em busca de justiça ou um
									cidadão que deseja acessar seus direitos previdenciários, estamos prontos para ajudar.
									Agende sua consulta gratuita hoje.
								</p>
							</div>
							<p className="lead-paragraph text-[20px] md:text-[24px] text-primary">
								Endereço: Avenida Inocêncio Seráfico, n° 22, sala 04, Centro, Carapicuíba/SP Telefone: (11)
								93308-0214 / (11) 91358-4027 E-mail: santanamoraisadvocacia@gmail.com
							</p>
							<div className="flex flex-col gap-3 text-primary">
								<h3 className="headline-3">ATENDIMENTO PRESENCIAL E ONLINE</h3>
								<p className="paragraph text-justify">
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
