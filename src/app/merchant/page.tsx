import Footer from "@/components/footer";
import MainHeader from "@/components/main-header";
import About from "@/components/merchant/about";
import Hero from "@/components/merchant/hero";
import MerchantStartSection from "@/components/merchant/startSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Biya - Merchant",
  description: "Automate airtime and data recharges with ease",
};

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
