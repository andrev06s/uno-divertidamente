import { motion } from 'framer-motion';
import { Snowflake, Brain, Zap, Target } from 'lucide-react';
import Section from '../components/Section';
import Reveal from '../components/Reveal';
import CtaButton from '../components/CtaButton';

const BENEFITS = [
  {
    icon: Snowflake,
    emoji: '🧊',
    title: 'Rompehielos inmediato',
    text: 'Crea conexión con el niño desde el primer minuto de la sesión.',
    color: '#4D96FF',
  },
  {
    icon: Brain,
    emoji: '🧠',
    title: 'Regulación emocional en la práctica',
    text: 'Las cartas guían al niño a identificar y expresar lo que siente, de forma lúdica.',
    color: '#9D4EDD',
  },
  {
    icon: Zap,
    emoji: '⚡',
    title: 'Aplicación rápida',
    text: 'Sin preparación compleja. Imprime, recorta y empieza a usarlo en minutos.',
    color: '#FFD93D',
  },
  {
    icon: Target,
    emoji: '🎯',
    title: 'Participación natural',
    text: 'El niño no se resiste a un juego de cartas. La participación es espontánea, y el desarrollo sucede sin que se dé cuenta.',
    color: '#FF6B6B',
  },
];

export default function Benefits() {
  return (
    <Section id="beneficios" className="bg-cream">
      <div className="text-center mb-10 sm:mb-14">
        <Reveal>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-slate-900">
            🧰 La herramienta que faltaba en tu kit
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Por qué todo niño adora jugar, y por qué eso lo cambia todo:
          </p>
        </Reveal>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {BENEFITS.map((b, i) => {
          const Icon = b.icon;
          return (
            <Reveal key={b.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6, scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 280, damping: 20 }}
                className="h-full bg-white rounded-3xl p-6 md:p-7 shadow-soft border border-slate-100 hover:shadow-2xl transition-shadow duration-300"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{
                    backgroundColor: `${b.color}1A`,
                    color: b.color,
                  }}
                  aria-hidden
                >
                  <Icon className="w-7 h-7" strokeWidth={2.2} />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 leading-snug">
                  <span aria-hidden className="mr-1">{b.emoji}</span> {b.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  {b.text}
                </p>
              </motion.div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.3}>
        <div className="mt-10 sm:mt-14 text-center">
          <CtaButton>🎴 QUIERO ASEGURAR MI UNO</CtaButton>
        </div>
      </Reveal>
    </Section>
  );
}
