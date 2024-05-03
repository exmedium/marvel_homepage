import Image from 'next/image'
import Navigation from '../Navigation/Navigation';

export default function Header() {
		return (
				<header className="flex flex-wrap w-full justify-between">
						<a href="#" name="Homepage">
								<Image 
									src="Marvel_Logo.svg" 
									alt="Marvel Logo"
									width="192"
									height="71"
								/>
						</a>
						<Navigation />
				</header>
		);
};