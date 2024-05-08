'use client'
import React, { useMemo, useState, useEffect } from 'react';
import Comic from '../Comic/Comic';

export default function ComicHero() {
	const md5 = require('md5');
	const privateKey = process.env.NEXT_PUBLIC_MARVEL_PRIVATE_KEY;
	const publicKey = process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY;
	const ts = Date.now();
	const hash = md5(ts + privateKey + publicKey);
	const characterUrl = 'https://gateway.marvel.com/v1/public/characters';
	const startDate = '2022-01-01';
	const dateObj = new Date();
	const month = dateObj.getUTCMonth() + 1; // months from 1-12
	const day	= dateObj.getUTCDate();
	const year	= dateObj.getUTCFullYear();
	const today	= `${year}-${month}-${day}`;

	const [comicList, setComicList] = useState([]);
	const [offset, setOffset] = useState(0);

	/*
		Character appearances:
		This will return the list of comic book appearances for the specified character.
	*/
  useEffect(() => { // using magic number 1009610 for "Spider-man Peter Parker"
    fetch(`${characterUrl}/1009610?ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=20&offset=${offset}dateRange=${startDate},${today}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setComicList(data);
      });
  }, [offset]);

  return (
		<div 
			className="comics-list w-full flex flex-row flex-wrap justify-between mx-auto pb-16"
		>

			{
				comicList ?
					comicList?.data?.results?.[0]?.comics?.items?.map((item, comicId) => {
						return (
							<Comic
								key={comicId}
								url={item.resourceURI}
							/>
						)
					})
				: null
			}

			<div 
				className={`flex justify-center w-full p-0 ${comicList.length > 0 ? '' : 'hidden'}`}
			>
				<div 
					className="pagination w-60  flex flex-row justify-between mx-auto my-12">
					<button 
						className="bg-marvel-red hover:bg-marvel-hover text-white text-2xl self-start rounded-lg py-4 px-6 m-0"
						onClick={() => offset > 19 ? setOffset(offset - 20) : 0}
					>
						Prev
					</button>
					<button 
						className="bg-marvel-red hover:bg-marvel-hover text-white text-2xl self-start rounded-lg py-4 px-6 m-0"
						onClick={() => setOffset(offset + 20)}
					>
						Next
					</button>
				</div>
			</div>
		</div>
	);
};


