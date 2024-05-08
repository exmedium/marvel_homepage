import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Hero(props) {

	const md5 = require('md5');
	const privateKey = process.env.NEXT_PUBLIC_MARVEL_PRIVATE_KEY;
	const publicKey = process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY;
	const ts = Date.now();
	const hash = md5(ts + privateKey + publicKey);

	const [comic, setComic] = useState({
			url: '',
			title: '',
			thumbnail: '',
	});

	const comics = useEffect(() => {
		fetch(`${props.url}?ts=${ts}&apikey=${publicKey}&hash=${hash}`)
				.then((res) => {
					return res.json();
				})
				.then((data) => {
					setComic({
						title: data.data.results[0].title,
						thumbnail: data.data.results[0].thumbnail.path + '.' + data.data.results[0].thumbnail.extension
					});
	}, []);
});

	return (
		<a 
			href={props.url}
			className="comicbook w-full md:w-1/3 flex flex-col mt-16 px-4 hover:opacity-70"
		>
			<Image 
				src={comic.thumbnail}
				alt={comic.title}
				width={0}
				height={0}
				sizes="100vw"
				style={{ width: '100%', height: 'auto' }}
			/>
			<p className="text-3xl mt-4">
				{comic.title}
			</p>
		</a>
	)

	{/* 
		Dummy Data for testing layout (uses dummy props passed from ComicList
		This was necessary due to hitting the API rate limit while developing.
	*/}
	{/*
		return (
			<a 
				href={props.url}
				className="comicbook w-full md:w-1/3 flex flex-col mt-16 px-4 hover:opacity-70"
			>
				<Image 
					src={props.thumbnail}
					alt={props.title}
					width={0}
					height={0}
					sizes="100vw"
					style={{ width: '100%', height: 'auto' }}
				/>
				<p className="text-3xl mt-4">
					{props.title}
				</p> 
			</a>
		)
	*/}

	
}