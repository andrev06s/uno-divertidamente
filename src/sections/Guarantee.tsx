import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import Section from '../components/Section';
import Reveal from '../components/Reveal';

export default function Guarantee() {
  return (
    <Section className="bg-white">
      <Reveal>
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-disgust/15 mb-6"
            animate={{ rotate: [0, -4, 4, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ShieldCheck
              className="w-14 h-14 text-disgust"
              strokeWidth={1.8}
              aria-hidden
            />
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-5">
            Garantía incondicional de{' '}
            <span className="text-disgust">7 días</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed">
            Si por cualquier motivo no quedas satisfecho(a), solo envíanos un
            mensaje en hasta 7 días y te devolvemos{' '}
            <span className="font-semibold text-slate-900">100% del valor</span>.{' '}
            Sin preguntas, sin burocracia.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
