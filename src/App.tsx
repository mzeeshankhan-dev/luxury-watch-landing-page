import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Collection from "./components/Collection";
import Craftsmanship from "./components/Craftsmanship";
import AtelierBand from "./components/AtelierBand";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Feature from "./components/Feature";
import MaterialDetails from "./components/MaterialDetails";

export default function App() {
  return (
    <div className="overflow-x-hidden" style={{ backgroundColor: "#15130F" }}>
      <Header />
      <Hero />
      <Marquee />
      <Craftsmanship />
      <Collection />
      <Feature />
      <MaterialDetails />
      <AtelierBand />
      <CTA />
      <Footer />
    </div>
  );
}
