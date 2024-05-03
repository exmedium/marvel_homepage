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

	const [comicList, setComicList] = useState([]);
	const [offset, setOffset] = useState(0);

	//character appearances data
  useEffect(() => { // using magic number 1009610
    fetch(`${characterUrl}/1009610?ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=20&offset=${offset}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log('comic:', data);
        setComicList(data);
      });
  }, [offset]);

	const comics = useMemo(() => {
		return comicList?.data?.results?.[0]?.comics?.items?.map(item => {
			const comicId = item.resourceURI.split('/').pop();
			return fetch(`https://gateway.marvel.com/v1/public/comics/${comicId}?ts=${ts}&apikey=${publicKey}&hash=${hash}`)
				.then((res) => {
					return res.json();
				})
				.then((data) => {
					const comic = {
						id: comicId,
						title: data.data.results[0].title,
						thumbnail: data.data.results[0].thumbnail.path + '.' + data.data.results[0].thumbnail.extension,
						link: data.data.results[0].urls[0].url
					}
					console.log('comic:', comic);
					return comic;
				});
		});
	}, [comicList]);

  return (
		<div 
			className="comics-list w-full flex flex-row flex-wrap justify-between mt-12 mx-auto"
		>
			{
				comics ? 
					Promise.all(comics).then(comics => {
						return comics.map(comic => {
							return <Comic key={comic.id} title={comic.title} thumbnail={comic.thumbnail} link={comic.link} />;
						});
					})
				: null
			}
			<div 
				className="pagination w-60 mt-12 flex flex-row justify-between mx-auto mb-12">
				<button 
					className="bg-marvel-red hover:bg-marvel-hover text-white text-2xl self-start mt-4 rounded-lg py-4 px-6"
					onClick={() => offset > 19 ? setOffset(offset - 20) : 0}
				>
					Prev
				</button>
				<button 
					className="bg-marvel-red hover:bg-marvel-hover text-white text-2xl self-start mt-4 rounded-lg py-4 px-6"
					onClick={() => setOffset(offset + 20)}
				>
					Next
				</button>
			</div>
		</div>
	);
};


