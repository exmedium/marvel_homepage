import React, { useState } from 'react';
import Image from 'next/image';
import Bios from './bios';
import Modal from '../Modal/Modal';

export default function HeroCard(props) {

	const [showModal, setShowModal] = useState(false);
	const [modalContents, setModalContents] = useState({
			name: '',
			bio: '',
			height: '',
			weight: '',
			gender: ''
	});

	const handleClick = (name) => {
		Bios.map((bio, index) => {
			if(bio.name === name) {
				console.log(bio);
				console.log(showModal);

				setModalContents({
					name: bio.name,
					bio: bio.bio,
					height: bio.height,
					weight: bio.weight,
					gender: bio.gender
				})
			}
			setShowModal(true);
		})
	}


	return (
		<>
			<div
				className="Hero-card w-full md:w-5/12 xl:w-1/5 flex flex-col flex-wrap pb-8 mx-2.5 hover:opacity-75 cursor-pointer"
				onClick={() => handleClick(props.name)}
			>
				<div className="w-full  hero-image overflow-hidden" >
					<Image 
						src={props.image}
						alt={props.name}
						width={0}
						height={0}
						sizes="100vw"
						style={{ width: '100%', height: 'auto' }}
					/>
				</div>
				<p
					className="w-full flex justify-between mt-4"
				>
					<span className="font-bold text-4xl">
						{props.name}
					</span>
					<span className="text-marvel-red text-2xl">
						{props.year}
					</span>
				</p>
				<p
					className="w-full text-2xl mt-4"
				>
				{props.SecretIdentity}
				</p>
			</div>
			<Modal 
				show = {showModal}
				closeModal = {() => setShowModal(false)}
			>
				<h1>Name: {modalContents.name}</h1>
				<p>Bio: {modalContents.bio}</p>
				<p>height: {modalContents.height}</p>
				<p>weight: {modalContents.weight}</p>
				<p>gender: {modalContents.gender}</p>
			</Modal>
		</>
	);
};

