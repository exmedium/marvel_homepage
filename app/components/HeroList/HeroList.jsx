'use client'
import React, { useMemo, useState, useEffect } from 'react';
import HeroCard from '../HeroCard/HeroCard';

/* 
	This commented code below is untested due to rate limits being hit
	on the comic request to the marevel api, but could replace the hardcoded version
	that is below. Thought I didn't see anywhere where real name was returning,
	so it would likely need to be parsed from the characters name.
	Nor did there seem to be a first appearance date, so that would also reauire som extra work.
*/

/*
	export default function HeroList() {
		const md5 = require('md5');
		const privateKey = process.env.NEXT_PUBLIC_MARVEL_PRIVATE_KEY;
		const publicKey = process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY;
		const ts = Date.now();
		const hash = md5(ts + privateKey + publicKey);
		const characterUrl = 'https://gateway.marvel.com/v1/public/characters/';

		const characters = ['Iron Man', 'Scarlet Witch', 'Thor', 'Hulk', 'Captian Marvel', 'Gmora', 'Wasp', 'Spider-Man'];

		const [cardImage, setCardImage] = useState('');
		const [hero, setHero] = useState([]);
		const [character, setCharacter] = useState('');

		useEffect(() => {
			const fetchComics = async (character) => {
				try {
					const response = await fetch(`${characterUrl}name=${character}?ts=${ts}&apikey=${publicKey}&hash=${hash}`);
						const data = await response.json();
						setsetHero(data);
				} catch (error) {
					console.error('Failed to fetch hero:', error);
				}
		};

			fetchComics();
		}, [character]);

		return (
			<div className="hero-list flex flex-row flex-wrap justify-between mt-12 relative">
				{characters.map((character, index) => (
					<HeroCard	
						key={index}
						name={character}
						SecretIdentity={hero.data.results[index].name}
						image={`/${character?.replace(' ', '') || ''}.jpg`}
						year={hero.data.results[index].first_appearance}
					/>
				))}
		)
	}
*/


export default function HeroListComponent() {

	const characters = ['Iron Man', 'Scarlet Witch', 'Thor', 'Hulk', 'Captian Marvel', 'Gamora', 'Wasp', 'Spider-Man'];
	const secretIdentities = ['Tony Stark', 'Wanda Maximoff', 'Thor Odenson', 'Bruce Banner', 'Carol Danvers', 'Gamora', 'Janet Van Dyne', 'Peter Parker'];
	const yearCreated = ['1963', '1964', '1962', '1962', '1968', '1975', '1963', '1962']

	return (
		<div className="hero-list flex flex-row flex-wrap justify-between mt-12 relative">
			{characters.map((character, index) => (
				<HeroCard
					key={index}
					name={character}
					SecretIdentity={secretIdentities[index]}
					image={`/${character?.replace(' ', '') || ''}.jpg`}
					year={yearCreated[index]}
				/>
			))}

		</div>
	)
}