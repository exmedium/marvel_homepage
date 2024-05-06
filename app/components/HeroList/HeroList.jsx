'use client'
import React, { useMemo, useState, useEffect } from 'react';
import HeroCard from '../HeroCard/HeroCard';

// This is Untested as I hit an issue with the number of requsts of the marvel API
// export default function HeroList() {
//   const md5 = require('md5');
//   const privateKey = process.env.NEXT_PUBLIC_MARVEL_PRIVATE_KEY;
//   const publicKey = process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY;
//   const ts = Date.now();
//   const hash = md5(ts + privateKey + publicKey);
//   const characterUrl = 'https://gateway.marvel.com/v1/public/characters/';

// 	const characters = ['Iron Man', 'Scarlet Witch', 'Thor', 'Hulk', 'Captian Marvel', 'Gmora', 'Wasp', 'Spider-Man'];

// 	const [cardImage, setCardImage] = useState('');
//   // const [hero, setHero] = useState([]);
// 	// const [character, setCharacter] = useState('');

//   // useEffect(() => {
//   //   const fetchComics = async (character) => {
//   //     try {
//   //       const response = await fetch(`${characterUrl}name=${character}?ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=20&offset=${offset}`);
//   //       const data = await response.json();
// 	// 			console.log('data:', data);
//   //       setsetHero(data);
        
//   //     } catch (error) {
//   //       console.error('Failed to fetch hero:', error);
//   //     }
//   //   };

//   //   fetchComics();
//   // }, [offset, character]);
// }

// This is a workaround for an issue with the number of requests of the marvel API

export default function HeroListComponent() {

	const characters = ['Iron Man', 'Scarlet Witch', 'Thor', 'Hulk', 'Captian Marvel', 'Gamora', 'Wasp', 'Spider-Man'];
	const SecretIdentities = ['Tony Stark', 'Wanda Maximoff', 'Thor Odenson', 'Bruce Banner', 'Carol Danvers', 'Gamora', 'Janet Van Dyne', 'Peter Parker'];
	const yearCreated = ['1963', '1964', '1962', '1962', '1968', '1975', '1963', '1962']

	return (
		<div className="hero-list flex flex-row flex-wrap justify-between mt-12">
			{characters.map((character, index) => (
				<HeroCard
					key={index}
					name={character}
					SecretIdentity={SecretIdentities[index]}
					image={`/${character?.replace(' ', '') || ''}.jpg`}
					year={yearCreated[index]}
				/>
			))}

		</div>
	)
}