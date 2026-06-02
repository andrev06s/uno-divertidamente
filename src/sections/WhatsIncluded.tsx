import { motion } from 'framer-motion';
import { Printer, Sparkles, BookOpen, CheckCircle2 } from 'lucide-react';
import Section from '../components/Section';
import Reveal from '../components/Reveal';

const ITEMS = [
  {
    icon: Printer,
    emoji: '🖨️',
    title: 'Arquivo em alta resolução',
    text: 'PDF pronto para impressão em qualquer impressora, doméstica ou profissional.',
    color: '#4D96FF',
  },
  {
    icon: Sparkles,
    emoji: '🃏',
    title: 'Cartas de ação e emoção',
    text: 'Cartas temáticas baseadas nas emoções que as crianças reconhecem na hora.',
    color: '#FF6B6B',
  },
  {
    icon: BookOpen,
    emoji: '📖',
    title: 'Instruções de uso',
    text: 'Guia completo com regras e sugestões de aplicação clínica, escolar e familiar.',
    color: '#6BCB77',
  },
  {
    icon: CheckCircle2,
    emoji: '✅',
    title: 'Acesso imediato',
    text: 'Receba no seu e-mail em segundos após a compra.',
    color: '#9D4EDD',
  },
];

export default function WhatsIncluded() {
  return (
    <Section id="material" className="bg-white">
      <div className="text-center mb-10 sm:mb-14">
        <Reveal>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-slate-900">
            ⭐ Material prático, testado e de alta qualidade
          </h2>
        </Reveal>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {ITEMS.map((it, i) => {
          const Icon = it.icon;
          return (
            <Reveal key={it.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6, scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 280, damping: 20 }}
                className="h-full rounded-3xl p-6 md:p-7 border-2 border-slate-100 bg-cream/40 hover:shadow-2xl hover:border-white transition-all duration-300"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-md"
                  style={{
                    background: `linear-gradient(135deg, ${it.color}, ${it.color}cc)`,
                    color: 'white',
                  }}
                  aria-hidden
                >
                  <Icon className="w-7 h-7" strokeWidth={2.2} />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 leading-snug">
                  <span aria-hidden className="mr-1">{it.emoji}</span> {it.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  {it.text}
                </p>
              </motion.div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
