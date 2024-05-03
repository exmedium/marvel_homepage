import Image from 'next/image';
import Social from '../Social/Social';

const Links = ['About Marvel', 'Advertising', 'Help/Faqs', 'Disney+', 'Internships', 'MarvelHQ.com', 'Careers', 'Redeem Digital Comics'];

export default function Footer() {
		return (
				<footer 
					className="flex flex-wrap justify-center rounded-br-3xl rounded-bl-3xl py-12 -mx-10 2xl:-mx-20 px-6 2xl:px-6 pt-14 bg-dark-grey"
				>
					<div className="w-full flex justify-center pb-14">
						<a href="#" name="Homepage">
								<Image 
									src="Marvel_Logo.svg" 
									alt="Marvel Logo"
									width="246"
									height="101"
								/>
						</a>
					</div>
					<nav className="footer-nav flex flex-wrap w-full  2xl:w-4/12 justify-between uppercase">
							<ul className="flex w-full text-2xl flex-row flex-wrap">
									{Links.map((link, index) => {
											return (
													<li 
														key={index}
														className="text-center 2xl:text-left py-2 w-full md:w-1/2"
													>
															<a href="#" 
																name={link} 
																className="text-white hover:text-marvel-red"
															>
																{link}
															</a>
													</li>
											);
									})}
							</ul>
					</nav>

					<div className="footer-big-links w-full 2xl:w-4/12 flex flex-col mt-12 2xl:mt-0">
						<div className="container sm:w-[480px] mx-auto 2xl:mx-0">
							<a href="https://www.marvel.com/insider" target="_blank" rel="noreferrer"
								className="insider flex flex-wrap justify-between"
							>
								<div className="w-1/3 hidden md:flex justify-center">
									<Image 
										src="/insider_logo.png" 
										alt="Marvel Insider Logo"
										width="123"
										height="44"
									/>
								</div>
								<p
									className="flex flex-col w-2/3 mx-auto"
								>
									<span className="text-2xl w-full">Marvel Insider</span>
									<span className="opacity-50 w-full">Get Rewarded for Being a Marvel Fan</span>
								</p>
							</a>
							<a href="https://www.marvel.com/unlimited" target="_blank" rel="noreferrer"
								className="unlimited flex flex-wrap justify-between mt-4"
							>
								<div className="w-1/3 hidden md:flex justify-center">
									<Image 
										src="/marvel_u_logo.png" 
										alt="Marvel Unlimited Logo"
										width="73"
										height="65"
									/>
								</div>
								<p
									className="flex flex-col w-2/3 mx-auto"
								>
									<span className="text-2xl w-full">Marvel Unlimited</span>
									<span className="opacity-50 w-full">Access Over 30,000 digital comics</span>
								</p>
							</a>
						</div>
					</div>
					<Social />
				</footer>
		);
};