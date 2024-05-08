import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import ComicList from "./components/ComicList/ComicList";
import InsiderAd from "./components/InsiderAd/InsiderAd";
import HeroList from "./components/HeroList/HeroList";


export default function Home() {
	
  return (
    <main className="outer-container flex min-h-screen flex-col items-center justify-between lg:p-12 xl:p-24 border-white bg-neutral-950">
      <div className="inner-container flex flex-col items-left border-white bg-black w-full max-w-screen-2xl rounded-3xl px-10 lg:px-20 pt-12 bg-[linear-gradient(180deg,rgba(3,3,3,0.00),rgba(3,3,3,1)),url('/Spiderman_Background_Fade.jpg')] mx-auto bg-contain bg-top bg-no-repeat">
				<Header />
				<Hero 
					heroTitle="Spider-Man’s 60th"
					heroDescription="Celebrate Spidys 60th annivessary with most of is most iconic stories!" 
				/>
				<hr className="w-full h-1.5 rounded bg-gradient-to-r from-marvel-red border-none" />
				<ComicList />
				<HeroList />
				<InsiderAd />
				<Footer />
      </div>
    </main>
  );
}
