"use client"

import { useState, useEffect } from "react";

export default function Navigation() {

	const Links = ['Home', 'Movies', 'Games', 'Comics', 'Characters', 'News', 'More'];

	const [menuState, setMenuState] = useState(false);
	
	//make sure the menu is always visible
	const handleResize = () => {
		if (window.innerWidth < 1023) {
			setMenuState(true);
		} else {
			setMenuState(false);
		}
	}

	const handleToggle = () => {
		setMenuState(!menuState);
	};

	useEffect(() => {
		window.addEventListener("resize", handleResize);
	})
	
	
	return (
		<>
			<button
				aria-label="Expand Menu" 
				onClick={handleToggle}
				className="menu-toggle group h-20 w-20 rounded-lg border-2 border-white lg:hidden"
			>
				<div className="grid justify-items-center gap-1.5">
					<span className={`h-1 w-8 rounded-full bg-white ${!menuState ? 'transition rotate-45 translate-y-2.5' : null}`}></span>
					<span 
						className={`h-1 w-8 rounded-full bg-white ${!menuState ? 'scale-x-0 transition' : null}`}
					></span>
					<span className={`h-1 w-8 rounded-full bg-white  ${!menuState ? '-rotate-45 -translate-y-2.5' : null}`}></span>
				</div>
			</button>
			<nav
				className={`w-full lg:w-auto ${menuState ? 'hidden' : null}  bg-black bg-opacity-75 lg:bg-transparent lg:relative`}
			>
				<ul 
					className="flex z-10 mt-4 space-x-0 lg:space-x-4 text-2xl flex-col lg:flex-row "
				>
						{Links.map((link, index) => {
								return (
										<li 
											key={index}
											className="text-center hover:bg-black py-2"
										>
												<a href="#" name={link} className="hover:text-marvel-red">{link}</a>
										</li>
								);
						})}
				</ul>
			</nav>
		</>
	);
};