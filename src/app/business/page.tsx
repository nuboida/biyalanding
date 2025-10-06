import About from "@/components/business/about";
import Hero from "@/components/business/hero";
import BusinessStartSection from "@/components/business/startsection";
import Footer from "@/components/footer";
import MainHeader from "@/components/main-header";

const BusinessPage = () => {
  return (
    <>
      <MainHeader />
      <Hero />
      <About />
      <BusinessStartSection />
      <Footer />
    </>
  )
}

export default BusinessPage;
