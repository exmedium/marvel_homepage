import React from 'react';

export default function Modal(props) {

	return (
		<div
			className={`modal-bg fixed z-10 top-0 right-0 bottom-0 left-0 bg-black bg-opacity-75 cursor-pointer  ${props.show ? 'flex items-center justify-center' : 'hidden'}`}
			onClick={() => props.closeModal()}
		>
			<div
				className="modal-card w-11/12 xl:w-1/2 p8 bg-dark-grey mx-auto relative p-8 flex flex-row flex-wrap bg-opacity-90 rounded-tl-2xl rounded-tr-none rounded-br-2xl rounded-bl-none border-marvel-red border-4"
			>
				<button
					className="text-black  bg-marvel-red close text-3xl font-bold rounded-tl-lg rounded-tr-none rounded-br-lg rounded-bl-none px-2 absolute top-4 right-4 leading-none pb-1 "
						onClick={() => props.closeModal()}
				>x</button>
				{props.children}
			</div>
		</div>
	);
}