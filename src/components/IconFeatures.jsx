import trabalhoIcon from '../assets/icon-feature-trabalho.svg';
import previdenciarioIcon from '../assets/icon-feature-previdenciario.svg';

const IconFeatures = () => {
	return (
		<section className="w-full bg-primary">
			<div className="2xl:max-w-[1440px] mx-auto">
				<div className="icon__features w-full flex flex-col md:flex-row justify-between items-center gap-6 px-3 md:px-8 py-8">
					<h2 className="headline-4 md:headline-3 text-white">ÁREAS DE ATUAÇÃO</h2>

					<div className="w-full flex justify-around flex-wrap gap-4">
						<div className="flex items-center gap-2">
							<img src={trabalhoIcon} alt="" className="w-8 h-8" />
							<div>
								<h3 className="headline-5 md:headline-4 text-white">DIREITO DO</h3>
								<h2 className="headline-4 md:headline-3 text-white text-nowrap">TRABALHADOR</h2>
							</div>
						</div>
						<div className="flex items-center gap-2">
							<img src={previdenciarioIcon} alt="" className="w-8 h-8" />
							<div>
								<h3 className="headline-5 md:headline-4 text-white">DIREITO</h3>
								<h2 className="headline-4 md:headline-3 text-white">PREVIDENCIÁRIO</h2>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default IconFeatures;
