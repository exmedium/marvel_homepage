import Image from 'next/image'

export default function Social() {

	return (
		<section className="flex flex-wrap footer-social m-auto lg:m-0 w-52 uppercase self-start mt-12 lg:mt-0">
			<h4 className="text-2xl font-normal m-0">
				Follow Marvel
			</h4>
				<div className="social-icons flex flex-wrap w-full place-content-between mt-8">
					<a href="https://www.facebook.com/Marvel/"	name="Facebook" target="_blank" 
						className="self-start min-w-12 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20"
						aria-label="Facebook Link"
					>
						<Image 
							src="Facebook.svg" 
							alt="Facebook Logo"
							width="50"
							height="50"
						/>
					</a>
					<a href="https://www.instagram.com/marvel/?hl=en" name="Instagram" target="_blank"
						className="self-start min-w-12 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20"
						aria-label="Instagram Link"
					>
						<Image 
							src="Instagram.svg" 
							alt="Instagram Logo"
							width="50"
							height="50"
						/>
					</a>

					<a href="https://twitter.com/Marvel" name="Twitter" target="_blank"
						className="self-start min-w-12 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20"
						aria-label="Twitter Link"
					>
						<Image 
							src="Twitter.svg" 
							alt="Twitter Logo"
							width="50"
							height="50"
						/>
					</a>
					
				</div>
		</section>
	);
};