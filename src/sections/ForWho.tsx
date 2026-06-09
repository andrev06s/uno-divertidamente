import { Check } from 'lucide-react';
import Section from '../components/Section';
import Reveal from '../components/Reveal';

const ITEMS = [
  {
    text: 'Eres psicóloga, psicopedagoga o educadora y quieres acceder al mundo interno del niño desde las primeras sesiones.',
    color: '#9D4EDD',
  },
  {
    text: 'Eres mamá o papá y quieres una forma ligera de conversar con tu hijo, sobre todo después de las crisis.',
    color: '#FF6B6B',
  },
  {
    text: 'Quieres transformar el desarrollo emocional en un juego que el niño pide repetir.',
    color: '#4D96FF',
  },
];

export default function ForWho() {
  return (
    <Section className="bg-cream">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-slate-900 text-center mb-10 sm:mb-12">
            Hecho para ti que:
          </h2>
        </Reveal>

        <ul className="space-y-4">
          {ITEMS.map((it, i) => (
            <Reveal key={it.text} delay={i * 0.1}>
              <li className="flex items-start gap-4 bg-white rounded-2xl p-5 md:p-6 shadow-soft border border-slate-100">
                <span
                  aria-hidden
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mt-0.5 shadow-md"
                  style={{
                    background: `linear-gradient(135deg, ${it.color}, ${it.color}cc)`,
                  }}
                >
                  <Check className="w-5 h-5 text-white" strokeWidth={3} />
                </span>
                <p className="text-base md:text-lg text-slate-700 leading-relaxed pt-1">
                  {it.text}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
