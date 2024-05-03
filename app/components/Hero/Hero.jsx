import React from 'react';
import Button from '../Button/Button';

export default function Hero(props) {

	return (
		<section className="w-full flex flex-col mt-64 pb-64">
			<h1 className="text-7xl lg:text-hero-title font-normal font-Rozha m-0 leading-none lg:leading-normal">
				{props.heroTitle}
			</h1>
				<p className="w-9/12 text-4xl font-semibold mt-4">
					{props.heroDescription}
				</p>
				<Button 
					className="mt-16"
					name="Read More" 
					url="https://www.marvel.com/articles/comics/marvel-celebrates-spider-man-s-60th-anniversary-at-d23-expo-2022-with-a-very-special-comic-giveaway"
				/>
		</section>
	);
};