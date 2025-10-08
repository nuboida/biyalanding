import About from "@/components/business/about";
import Hero from "@/components/business/hero";
import BusinessStartSection from "@/components/business/startsection";
import Footer from "@/components/footer";
import MainHeader from "@/components/main-header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Biya - Business",
  description: "Automate airtime and data recharges with ease",
};

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
