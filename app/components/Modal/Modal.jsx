import React, {useMemo, useEffect} from 'react';

export default function Modal(props) {

	return (
		<div
			className={`modal-bg absolute z-10 top-0 right-0 bottom-0 left-0 bg-gradient-radial from-black to-transparent cursor-pointer  ${props.show ? 'flex items-center justify-center' : 'hidden'}`}
			onClick={() => props.closeModal()}
		>
			<div
				className="modal-card w-full xl:w-1/2 p8 bg-dark-grey rounded-lg border mx-auto relative p-8"
			>
				<button
					className="close rounded-sm border"
						onClick={() => props.closeModal()}
				>x</button>
				{props.children}
			</div>
		</div>
	);
}