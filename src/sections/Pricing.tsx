import { motion } from 'framer-motion';
import { Check, Star, Lock, Zap } from 'lucide-react';
import Section from '../components/Section';
import Reveal from '../components/Reveal';
import CtaButton from '../components/CtaButton';

const PLAN_BASIC_FEATURES = [
  'UNO das Emoções',
  'Acesso vitalício',
  'Impressões ilimitadas',
  'Acesso imediato',
];

const PLAN_KIT_EXTRAS = [
  'Caderno de Educação Emocional',
  'Contos para Melhorar o Comportamento',
  'Contrato Comportamental',
  'Registro de Comportamento',
  'Técnicas de Comportamento',
];

function Stars() {
  return (
    <div className="flex gap-0.5 mb-4" aria-label="5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-joy text-joy" />
      ))}
    </div>
  );
}

export default function Pricing() {
  return (
    <Section id="oferta" className="bg-cream overflow-hidden">
      {/* Decorative background */}
      <div className="blob bg-anxiety/20 w-[400px] h-[400px] top-10 -left-20" />
      <div className="blob bg-joy/30 w-[400px] h-[400px] bottom-0 -right-20" />

      <Reveal>
        <h2 className="relative text-3xl md:text-5xl font-bold text-slate-900 text-center mb-4">
          🎉 Leve o Jogo das Emoções agora mesmo
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="relative text-center text-slate-600 mb-14 max-w-2xl mx-auto">
          Escolha o plano ideal para você. Acesso imediato, pagamento único.
        </p>
      </Reveal>

      <div className="relative grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
        {/* PLAN 1 — BASIC */}
        <Reveal delay={0.2}>
          <motion.article
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            className="h-full bg-white rounded-3xl p-8 md:p-10 shadow-soft border border-slate-200 flex flex-col"
          >
            <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">
              Ideal para começar
            </p>
            <Stars />
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
              UNO das Emoções
            </h3>
            <p className="text-slate-500 mb-6">O jogo principal, completo.</p>

            <div className="mb-6">
              <p className="text-4xl md:text-5xl font-bold text-slate-900">
                [INSERIR PREÇO]
              </p>
              <p className="text-sm text-slate-500 mt-1">pagamento único</p>
            </div>

            <ul className="space-y-3 mb-8 flex-grow">
              {PLAN_BASIC_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-3 text-slate-700">
                  <Check
                    className="w-5 h-5 text-disgust flex-shrink-0 mt-0.5"
                    strokeWidth={3}
                  />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <CtaButton variant="outline" size="md">
                🎴 QUERO O UNO
              </CtaButton>
              <p className="mt-4 flex items-center gap-2 text-xs text-slate-500">
                <Lock className="w-3.5 h-3.5" />
                Pagamento seguro
              </p>
            </div>
          </motion.article>
        </Reveal>

        {/* PLAN 2 — KIT COMPLETO (featured) */}
        <Reveal delay={0.3}>
          <motion.article
            whileHover={{ y: -8 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            className="relative h-full rounded-3xl p-8 md:p-10 shadow-2xl flex flex-col bg-white border-4 lg:scale-[1.04] lg:-translate-y-2"
            style={{
              borderImage: 'linear-gradient(135deg, #FFD93D, #FF6B6B, #9D4EDD) 1',
              borderImageSlice: 1,
            }}
          >
            {/* Fallback for borderImage radius (browsers handle this differently)  */}
            <div
              aria-hidden
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                background:
                  'linear-gradient(135deg, rgba(255,217,61,0.06), rgba(157,78,221,0.06))',
              }}
            />

            {/* "Mais vendido" badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <motion.span
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="inline-flex items-center gap-1.5 bg-emotion-gradient text-white text-xs md:text-sm font-bold px-4 py-1.5 rounded-full shadow-lg uppercase tracking-wider"
              >
                <Zap className="w-3.5 h-3.5 fill-white" />
                Mais vendido
              </motion.span>
            </div>

            <div className="relative">
              <p className="text-sm font-semibold text-anxiety uppercase tracking-wider mb-2">
                Kit Completo
              </p>
              <Stars />
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                UNO + Kit Educação Emocional
              </h3>
              <p className="text-slate-500 mb-6">Tudo que você precisa, num único pacote.</p>

              <div className="mb-6">
                <p className="text-4xl md:text-5xl font-bold text-gradient-emotions inline-block">
                  [INSERIR PREÇO]
                </p>
                <p className="text-sm text-slate-500 mt-1">pagamento único</p>
              </div>

              <p className="text-sm font-semibold text-slate-700 mb-3">
                Tudo do plano anterior, mais:
              </p>
              <ul className="space-y-3 mb-8">
                {PLAN_KIT_EXTRAS.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-slate-700">
                    <span
                      className="flex-shrink-0 w-5 h-5 rounded-full bg-emotion-gradient flex items-center justify-center mt-0.5"
                      aria-hidden
                    >
                      <Check className="w-3 h-3 text-white" strokeWidth={4} />
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <CtaButton href="[INSERIR LINK CHECKOUT]" size="lg">
                  🎯 QUERO O KIT COMPLETO
                </CtaButton>
                <p className="mt-4 flex items-center gap-2 text-xs text-slate-500">
                  <Lock className="w-3.5 h-3.5" />
                  Pagamento seguro · Entrega instantânea
                </p>
              </div>
            </div>
          </motion.article>
        </Reveal>
      </div>
    </Section>
  );
}
