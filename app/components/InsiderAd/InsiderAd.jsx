import React from 'react';
import Image from 'next/image';
import Button from '../Button/Button';

export default function InsiderAd(props) {
	return (
		<div className="insider-ad flex flex-row flex-wrap mt-16 -mx-10 2xl:-mx-20">
			<div className="w-full xl:w-1/2">
				<Image 
					src='/insider.jpg'
					alt='Marvel Insider'
					width={0}
					height={0}
					sizes="100vw"
					style={{ width: '100%', height: 'auto' }}
				/>
			</div>
			<div className="w-full xl:w-1/2 text-center bg-black flex flex-wrap items-center content-center py-10 lg:px-0">
				<h4
					className="text-marvel-red font-bold text-3xl w-full"
				>MARVEL INSIDER</h4>
				<h5
					className=" text-5xl w-full mt-10 mb-8"
				>
					watch, earn, redeem!</h5>
				<p
					className="text-2xl w-full"
				>
					Get a reward for what you already do for fun
				</p>
				<div className="mx-auto mt-12">
					<Button 
						className="mt-16"
						name="Join Now" 
						url="https://www.marvel.com/insider"
					/>
				</div>
			</div>
		</div>
	);
};