import Link from 'next/link'

export default function Button(props) {
	return (
		<Link href={props.url} className={`bg-marvel-red hover:bg-marvel-hover text-white text-2xl self-start mt-4 rounded-lg py-4 px-6 ${props.className}`}>
			{props.name}
		</Link>
	);
};