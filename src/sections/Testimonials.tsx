import { motion } from 'framer-motion';
import Section from '../components/Section';
import Reveal from '../components/Reveal';

/**
 * Social proof. The full body is a single image grid of real testimonials
 * (provided externally), so we just frame it nicely and keep it responsive.
 */
export default function Testimonials() {
  return (
    <Section className="bg-white">
      <Reveal>
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 text-center mb-10 md:mb-14">
          💬 Quem usou, não larga mais
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl bg-white ring-1 ring-slate-100">
            <img
              src="https://i.postimg.cc/vZDp0zFD/image.png"
              alt="Depoimentos reais de psicólogas, educadoras e mães que usaram o UNO das Emoções"
              loading="lazy"
              decoding="async"
              className="block w-full h-auto"
            />
          </div>
        </motion.div>
      </Reveal>
    </Section>
  );
}
