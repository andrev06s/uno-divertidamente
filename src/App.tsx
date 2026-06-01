import Hero from './sections/Hero';
import PainPoint from './sections/PainPoint';
import Benefits from './sections/Benefits';
import WhatsIncluded from './sections/WhatsIncluded';
import ForWho from './sections/ForWho';
import Testimonials from './sections/Testimonials';
import Pricing from './sections/Pricing';
import Guarantee from './sections/Guarantee';
import FAQ from './sections/FAQ';
import FinalCTA from './sections/FinalCTA';
import Footer from './sections/Footer';

/**
 * Single-page landing for "UNO das Emoções".
 * Each section is a self-contained component and rendered in narrative order.
 */
export default function App() {
  return (
    <main className="relative bg-cream text-slate-800 font-body">
      <Hero />
      <PainPoint />
      <Benefits />
      <WhatsIncluded />
      <ForWho />
      <Testimonials />
      <Pricing />
      <Guarantee />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
