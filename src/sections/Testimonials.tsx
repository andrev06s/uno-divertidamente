import { motion } from 'framer-motion';
import Section from '../components/Section';
import Reveal from '../components/Reveal';

/**
 * Social proof. Single image collage of real testimonials, framed and
 * lazy-loaded.
 */
export default function Testimonials() {
  return (
    <Section className="bg-white">
      <Reveal>
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 text-center mb-10 md:mb-14">
          💬 Quien lo usó, ya no lo suelta
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
              src="https://i.postimg.cc/k4ypnryy/instagram-comments-(2).png"
              alt="Comentarios reales de psicólogas, educadoras y mamás que usaron el UNO de las Emociones"
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
