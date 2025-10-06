import Benefits from "@/components/benefits";
import Footer from "@/components/footer";
import MainAbout from "@/components/main-about";
import MainHeader from "@/components/main-header";
import MainHero from "@/components/main-hero";
import Offerings from "@/components/offerings";
import StartSection from "@/components/startsection";
import { EmblaOptionsType } from 'embla-carousel'

const OPTIONS: EmblaOptionsType = { containScroll: false, loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function Home() {
  return (
    <>
    <div className="container-xl">
      <MainHeader />
      <MainHero />
      <MainAbout slides={SLIDES} options={OPTIONS} />
      <Benefits />
      <Offerings />
      <StartSection />
      <Footer />
    </div>
    </>
  );
}
