import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Section from '../components/Section';
import Reveal from '../components/Reveal';

const FAQS = [
  {
    q: '¿El material es físico o digital?',
    a: 'Digital. Recibes el PDF por correo e imprimes donde quieras, las veces que quieras.',
  },
  {
    q: '¿Para qué edad está recomendado?',
    a: 'A partir de los 4-5 años, adaptable según el desarrollo del niño.',
  },
  {
    q: 'Soy mamá, ¿puedo usarlo con mis hijos?',
    a: 'Por supuesto. El material fue pensado tanto para profesionales como para que las familias lo usen en casa.',
  },
  {
    q: '¿Cómo recibo el acceso?',
    a: 'Al instante. Después de la confirmación del pago, el material llega directo a tu correo.',
  },
];

interface ItemProps {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

function FAQItem({ q, a, isOpen, onToggle, index }: ItemProps) {
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <div className="bg-white rounded-2xl shadow-soft border border-slate-100 overflow-hidden">
      <h3>
        <button
          id={buttonId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="w-full flex items-center justify-between gap-3 sm:gap-4 text-left px-5 py-4 sm:px-6 sm:py-5 md:px-7 md:py-6 font-semibold text-slate-900 hover:bg-cream/40 transition-colors"
        >
          <span className="text-sm sm:text-base md:text-lg">{q}</span>
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0 w-9 h-9 rounded-full bg-anxiety/10 text-anxiety flex items-center justify-center"
            aria-hidden
          >
            <ChevronDown className="w-5 h-5" strokeWidth={2.5} />
          </motion.span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 sm:px-6 sm:pb-6 md:px-7 md:pb-7 text-sm sm:text-base text-slate-600 leading-relaxed">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" className="bg-cream">
      <Reveal>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-slate-900 text-center mb-10 sm:mb-12">
          ❓ Preguntas Frecuentes
        </h2>
      </Reveal>

      <div className="max-w-3xl mx-auto space-y-4">
        {FAQS.map((item, i) => (
          <Reveal key={item.q} delay={i * 0.08}>
            <FAQItem
              q={item.q}
              a={item.a}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
