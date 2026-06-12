import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Lock, Zap } from 'lucide-react';
import Section from '../components/Section';
import Reveal from '../components/Reveal';
import CtaButton from '../components/CtaButton';
import UpsellModal from '../components/UpsellModal';
import { withQuery } from '../utils/url';

const PLAN_BASIC_FEATURES = [
  'UNO de las Emociones',
  'Acceso vitalicio',
  'Impresiones ilimitadas',
  'Acceso inmediato',
];

const PLAN_KIT_EXTRAS = [
  'Cuaderno de Educación Emocional',
  'Cuentos para Mejorar el Comportamiento',
  'Contrato Conductual',
  'Registro de Comportamiento',
  'Técnicas de Comportamiento',
];

// Checkout links (Hotmart). URL params from the landing page (utm_*,
// fbclid, etc.) are forwarded automatically via withQuery() at click time.
const CHECKOUT_UNO_BASICO = 'https://pay.hotmart.com/G106232767C?off=o0l2lq0g&checkoutMode=10';  // $5
const CHECKOUT_UPSELL_R10 = 'https://pay.hotmart.com/H106233515L?off=1vxv4jpa&checkoutMode=10';  // $9,90 (popup)
const CHECKOUT_KIT_COMPLETO = 'https://pay.hotmart.com/H106233515L?checkoutMode=10';             // $17,90

function Stars() {
  return (
    <div className="flex gap-0.5 mb-4" aria-label="5 estrellas">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-joy text-joy" />
      ))}
    </div>
  );
}

export default function Pricing() {
  const [upsellOpen, setUpsellOpen] = useState(false);

  return (
    <Section id="oferta" className="bg-cream overflow-hidden">
      {/* Decorative background */}
      <div className="blob bg-anxiety/20 w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] top-10 -left-16 sm:-left-20" />
      <div className="blob bg-joy/30 w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] bottom-0 -right-16 sm:-right-20" />

      <Reveal>
        <h2 className="relative text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 text-center mb-4">
          🎉 Lleva el Juego de las Emociones ahora mismo
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="relative text-center text-slate-600 mb-12 sm:mb-14 max-w-2xl mx-auto px-2">
          Elige el plan ideal para ti. Acceso inmediato, pago único.
        </p>
      </Reveal>

      <div className="relative grid lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto items-stretch">
        {/* PLAN 1 / BASIC */}
        <Reveal delay={0.2}>
          <motion.article
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            className="h-full bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-soft border border-slate-200 flex flex-col"
          >
            <p className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">
              Ideal para empezar
            </p>
            <Stars />
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
              UNO de las Emociones
            </h3>
            <p className="text-slate-500 mb-6">El juego principal, completo.</p>

            <div className="mb-6">
              <p className="text-4xl md:text-5xl font-bold text-slate-900">
                $5
              </p>
              <p className="text-sm text-slate-500 mt-1">pago único</p>
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
              <CtaButton
                variant="outline"
                size="md"
                onClick={() => setUpsellOpen(true)}
                ariaLabel="Quiero el UNO básico por $5"
              >
                🎴 QUIERO EL UNO
              </CtaButton>
              <p className="mt-4 flex items-center gap-2 text-xs text-slate-500">
                <Lock className="w-3.5 h-3.5" />
                Pago seguro
              </p>
            </div>
          </motion.article>
        </Reveal>

        {/* PLAN 2 / KIT COMPLETO (featured) */}
        <Reveal delay={0.3}>
          {/* Outer wrapper = gradient ring; inner = white card. This is the
              trick used so the gradient border respects rounded corners
              (border-image doesn't combine with border-radius reliably). */}
          <motion.article
            whileHover={{ y: -8 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            className="relative h-full rounded-3xl p-[3px] bg-emotion-gradient shadow-2xl lg:scale-[1.04] lg:-translate-y-2"
          >
            {/* "Más vendido" badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
              <motion.span
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="inline-flex items-center gap-1.5 bg-emotion-gradient text-white text-xs md:text-sm font-bold px-4 py-1.5 rounded-full shadow-lg uppercase tracking-wider ring-4 ring-cream"
              >
                <Zap className="w-3.5 h-3.5 fill-white" />
                Más vendido
              </motion.span>
            </div>

            <div className="h-full rounded-[1.35rem] bg-white p-6 sm:p-8 md:p-10 flex flex-col">
              <p className="text-xs sm:text-sm font-semibold text-anxiety uppercase tracking-wider mb-2 mt-2">
                Kit Completo
              </p>
              <Stars />
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                UNO + Kit Educación Emocional
              </h3>
              <p className="text-slate-500 mb-6">
                Todo lo que necesitas, en un solo paquete.
              </p>

              <div className="mb-6">
                <p className="text-4xl md:text-5xl font-bold text-gradient-emotions inline-block">
                  $17,90
                </p>
                <p className="text-sm text-slate-500 mt-1">pago único</p>
              </div>

              <p className="text-sm font-semibold text-slate-700 mb-3">
                Todo del plan anterior, más:
              </p>
              <ul className="space-y-3 mb-8 flex-grow">
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
                <CtaButton href={withQuery(CHECKOUT_KIT_COMPLETO)} size="lg">
                  🎯 QUIERO EL KIT COMPLETO
                </CtaButton>
                <p className="mt-4 flex items-center gap-2 text-xs text-slate-500">
                  <Lock className="w-3.5 h-3.5" />
                  Pago seguro · Entrega instantánea
                </p>
              </div>
            </div>
          </motion.article>
        </Reveal>
      </div>

      {/* Upsell popup. Fires from the $5 button and offers the $9,90
          intermediate tier (declining proceeds to the $5 checkout). */}
      <UpsellModal
        open={upsellOpen}
        onClose={() => setUpsellOpen(false)}
        upgradeHref={withQuery(CHECKOUT_UPSELL_R10)}
        declineHref={withQuery(CHECKOUT_UNO_BASICO)}
      />
    </Section>
  );
}
