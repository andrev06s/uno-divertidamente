import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import CtaButton from '../components/CtaButton';
import EmotionDots from '../components/EmotionDots';

/**
 * Hero section. Fully centered, single-column layout.
 * Order: badge, title, VSL (9:16 portrait), subtitle, paragraph,
 * emotion dots, CTA.
 */
export default function Hero() {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="relative overflow-hidden pt-20 pb-16 sm:pt-24 sm:pb-20 md:pt-28 md:pb-24 px-5 sm:px-6 md:px-10">
      {/* Decorative background blobs */}
      <div className="blob bg-joy/40 w-[280px] h-[280px] sm:w-[420px] sm:h-[420px] -top-20 sm:-top-32 -left-16 sm:-left-24" />
      <div className="blob bg-anxiety/30 w-[240px] h-[240px] sm:w-[360px] sm:h-[360px] top-40 -right-16 sm:-right-20" />
      <div className="blob bg-sadness/20 w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] bottom-0 left-1/3" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative max-w-3xl mx-auto text-center flex flex-col items-center"
      >
        {/* Badge */}
        <motion.div variants={item}>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-slate-700 shadow-soft border border-slate-100">
            <Sparkles className="w-4 h-4 text-anxiety flex-shrink-0" />
            <span>Novedad para Psicólogas, Educadoras y Familias</span>
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={item}
          className="mt-5 sm:mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]"
        >
          <span className="text-gradient-emotions">UNO</span>{' '}
          <span className="text-slate-900">de las</span>{' '}
          <span className="text-gradient-emotions">Emociones</span>
        </motion.h1>

        {/* VSL — portrait 9:16, capped at a reasonable width on desktop */}
        <motion.div
          variants={item}
          className="mt-8 sm:mt-10 w-full max-w-[320px] sm:max-w-[360px] md:max-w-[400px] mx-auto"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-900 ring-4 ring-white">
            {/* aspect-ratio 9:16 wrapper — keeps the embed responsive */}
            <div className="relative w-full" style={{ aspectRatio: '9 / 16' }}>
              <lt-v2
                v="37ace59a-9749-49b1-a3bc-ee9ed1487369"
                ar="9:16"
                sc="0"
                st="0"
                ap="1"
                lp="0"
                ph="7"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  display: 'block',
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={item}
          className="mt-8 sm:mt-10 text-lg sm:text-xl md:text-2xl text-slate-700 font-medium leading-snug max-w-xl mx-auto"
        >
          El juego de cartas que hace que cualquier niño hable de lo que siente.{' '}
          <span className="text-anger font-semibold">Jugando.</span>
        </motion.p>

        {/* Paragraph */}
        <motion.p
          variants={item}
          className="mt-4 sm:mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto"
        >
          Transforma la evaluación psicológica, la intervención escolar y la
          rutina en casa en un momento real de conexión. Usando una dinámica de
          cartas que los niños ya aman, accedes a su mundo emocional sin el
          clima de interrogatorio.
        </motion.p>

        {/* Emotion dots */}
        <motion.div variants={item} className="mt-7 sm:mt-8 w-full">
          <EmotionDots />
        </motion.div>

        {/* CTA */}
        <motion.div variants={item} className="mt-8 sm:mt-10">
          <CtaButton ariaLabel="Ir a la sección de oferta">
            🎴 QUIERO MI UNO DE LAS EMOCIONES
          </CtaButton>
          <p className="mt-3 text-xs sm:text-sm text-slate-500">
            Acceso inmediato · Pago seguro · Garantía de 7 días
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
