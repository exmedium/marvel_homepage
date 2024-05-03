import React from 'react';
import Image from 'next/image';

export default function Hero(props) {
	return (
		<div className="comicbook w-1/3 flex flex-col mt-64 pb-64">
			<Image 
				src={props.thumbnail}
				alt={props.title}
				width="276"
				height="425"
			/>
			<p>
				{props.title}
			</p>
		</div>
	);
};