import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import EasyPayments from "@/components/EasyPayments";
import ProductsSection from "@/components/ProductsSection";
import WhyAbans from "@/components/WhyAbans";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div id="top" className="flex flex-1 flex-col overflow-x-hidden">
      <Header />
      <Hero />
      <Intro />
      <EasyPayments />
      <ProductsSection />
      <WhyAbans />
      <FinalCta />
      <Footer />
    </div>
  );
}
