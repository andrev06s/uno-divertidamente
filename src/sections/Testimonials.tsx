import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import Section from '../components/Section';
import Reveal from '../components/Reveal';

const FEATURED = {
  text: 'Depois que apresentei o Uno das Emoções, minha filha nunca mais teve aquelas crises de raiva e choro sem que a gente conseguisse conversar. Agora ela mesma me chama pra jogar e usa as cores das cartas pra me dizer exatamente o que está sentindo.',
  author: 'Marina',
  role: 'mãe da Helena (6 anos)',
  avatarColor: '#FF6B6B',
};

const SECONDARY = [
  {
    text: '[PLACEHOLDER — depoimento de uma psicóloga sobre o uso clínico do material nas primeiras sessões com crianças.]',
    author: '[PLACEHOLDER]',
    role: 'Psicóloga infantil',
    avatarColor: '#9D4EDD',
  },
  {
    text: '[PLACEHOLDER — depoimento de uma educadora sobre o uso em sala de aula e o impacto na regulação emocional do grupo.]',
    author: '[PLACEHOLDER]',
    role: 'Educadora / Pedagoga',
    avatarColor: '#6BCB77',
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-joy text-joy" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <Section className="bg-white">
      <Reveal>
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 text-center mb-14">
          💬 Quem usou, não larga mais
        </h2>
      </Reveal>

      {/* Featured testimonial */}
      <Reveal delay={0.1}>
        <motion.figure
          whileHover={{ y: -4 }}
          className="relative max-w-3xl mx-auto rounded-3xl p-8 md:p-10 mb-10 bg-gradient-to-br from-anxiety/10 via-white to-anger/10 border-2 border-anxiety/20 shadow-2xl"
        >
          <Quote
            className="absolute -top-5 -left-3 w-14 h-14 text-anxiety/30"
            aria-hidden
          />
          <Stars />
          <blockquote className="mt-4 text-lg md:text-xl text-slate-800 leading-relaxed italic">
            “{FEATURED.text}”
          </blockquote>
          <figcaption className="mt-6 flex items-center gap-4">
            <span
              aria-hidden
              className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md"
              style={{
                background: `linear-gradient(135deg, ${FEATURED.avatarColor}, ${FEATURED.avatarColor}cc)`,
              }}
            >
              {FEATURED.author.charAt(0)}
            </span>
            <div>
              <p className="font-semibold text-slate-900">{FEATURED.author}</p>
              <p className="text-sm text-slate-500">{FEATURED.role}</p>
            </div>
          </figcaption>
        </motion.figure>
      </Reveal>

      {/* Secondary placeholders */}
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {SECONDARY.map((t, i) => (
          <Reveal key={i} delay={0.2 + i * 0.1}>
            <motion.figure
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              className="h-full bg-cream/60 rounded-3xl p-6 md:p-7 border-2 border-dashed border-slate-200 shadow-soft"
            >
              <Stars />
              <blockquote className="mt-3 text-slate-600 leading-relaxed text-sm md:text-base italic">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span
                  aria-hidden
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shadow"
                  style={{
                    background: `linear-gradient(135deg, ${t.avatarColor}, ${t.avatarColor}cc)`,
                  }}
                >
                  ?
                </span>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">
                    {t.author}
                  </p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </figcaption>
            </motion.figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
