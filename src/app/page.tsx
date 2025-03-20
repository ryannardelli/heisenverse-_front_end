import { CharactersPreview } from "./components/CharactersPreview";
import { EpisodesGallery } from "./components/EpisodesGallery";
import { Header } from "./components/Header";
import { HeroAbout } from "./components/HeroAbout";
import { HeroPrinciple } from "./components/HeroPrinciple";

export default function Home() {
  return (
    <>
      <Header />
      <HeroPrinciple />
      <HeroAbout />
      <CharactersPreview />
      <EpisodesGallery />
    </>
  )
}
