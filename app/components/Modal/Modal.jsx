import React, {useMemo, useEffect} from 'react';

export default function Modal(props) {

	return (
		<div
			className={`modal-bg absolute z-10 top-0 right-0 bottom-0 left-0 bg-gradient-radial from-black to-transparent cursor-pointer  ${props.show ? 'flex items-center justify-center' : 'hidden'}`}
			onClick={() => props.closeModal()}
		>
			<div
				className="modal-card w-full xl:w-1/2 p8 bg-dark-grey rounded-lg mx-auto relative p-8 flex flex-row flex-wrap"
			>
				<button
					className="text-neutral-800  bg-black close text-3xl font-bold rounded  px-2 absolute top-4 right-4 leading-none pb-1"
						onClick={() => props.closeModal()}
				>x</button>
				{props.children}
			</div>
		</div>
	);
}