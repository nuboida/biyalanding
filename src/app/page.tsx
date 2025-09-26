import Benefits from "@/components/benefits";
import Footer from "@/components/footer";
import MainAbout from "@/components/main-about";
import MainHeader from "@/components/main-header";
import MainHero from "@/components/main-hero";
import Offerings from "@/components/offerings";
import StartSection from "@/components/startsection";

export default function Home() {
  return (
    <>
      <MainHeader />
      <MainHero />
      <MainAbout />
      <Benefits />
      <Offerings />
      <StartSection />
      <Footer />
    </>
  );
}
