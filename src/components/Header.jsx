import Logo from '/Logo.svg';

const Header = () => {
	return (
		<header className="w-full bg-primary">
			<div className="2xl:max-w-[1440px] mx-auto">
				<div className="w-full h-[90px] flex justify-center sm:justify-between items-center px-3 md:px-8">
					<img src={Logo} alt="logo" />
				</div>
			</div>
		</header>
	);
};

export default Header;
