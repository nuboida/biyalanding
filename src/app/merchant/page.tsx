import Footer from "@/components/footer";
import MainHeader from "@/components/main-header";
import About from "@/components/merchant/about";
import Hero from "@/components/merchant/hero";
import MerchantStartSection from "@/components/merchant/startSection";

const MerchantPage = () => {
  return (
    <>
      <MainHeader />
      <Hero />
      <About />
      <MerchantStartSection />
      <Footer />
    </>
  );
}

export default MerchantPage;
