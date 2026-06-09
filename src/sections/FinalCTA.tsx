import { motion } from 'framer-motion';
import Section from '../components/Section';
import Reveal from '../components/Reveal';
import CtaButton from '../components/CtaButton';

const COLORS = ['#FFD93D', '#FF6B6B', '#4D96FF', '#6BCB77', '#9D4EDD'];

export default function FinalCTA() {
  return (
    <Section className="relative bg-white overflow-hidden">
      {/* floating colored dots in the background */}
      {COLORS.map((c, i) => (
        <motion.span
          key={c}
          aria-hidden
          className="absolute rounded-full"
          style={{
            backgroundColor: c,
            width: 18 + i * 4,
            height: 18 + i * 4,
            left: `${10 + i * 18}%`,
            top: `${15 + (i % 2) * 60}%`,
            filter: 'blur(0.5px)',
            opacity: 0.7,
          }}
          animate={{ y: [0, -16, 0] }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.4,
          }}
        />
      ))}

      <Reveal>
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-8 sm:mb-10">
            Dale a tus niños la forma más ligera de{' '}
            <span className="text-gradient-emotions">decir lo que sienten.</span>
          </h2>

          <CtaButton>🎴 QUIERO ASEGURAR MI UNO</CtaButton>

          <p className="mt-6 text-xs sm:text-sm text-slate-500">
            Acceso inmediato · Pago seguro · Garantía de 7 días
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
