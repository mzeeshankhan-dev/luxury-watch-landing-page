import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Collection from './components/Collection';
import Craftsmanship from './components/Craftsmanship';
import AtelierBand from './components/AtelierBand';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ backgroundColor: '#15130F' }}>
      <Header />
      <Hero />
      <Marquee />
      <Collection />
      <Craftsmanship />
      <AtelierBand />
      <CTA />
      <Footer />
    </div>
  );
}
