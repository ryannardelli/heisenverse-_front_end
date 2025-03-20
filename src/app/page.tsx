import { CharactersPreview } from "./components/CharactersPreview";
import { EpisodesGallery } from "./components/EpisodesGallery";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HeroAbout } from "./components/HeroAbout";
import { HeroPrinciple } from "./components/HeroPrinciple";
import { QuizSection } from "./components/QuizSection";

export default function Home() {
  return (
    <>
      <Header />
      <HeroPrinciple />
      <HeroAbout />
      <CharactersPreview />
      <EpisodesGallery />
      <QuizSection />
      <Footer />
    </>
  );
}
