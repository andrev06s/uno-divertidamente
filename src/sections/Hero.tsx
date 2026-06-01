import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import CtaButton from '../components/CtaButton';
import EmotionDots from '../components/EmotionDots';

const EMOTION_COLORS = ['#FFD93D', '#FF6B6B', '#4D96FF', '#6BCB77', '#9D4EDD'];

/**
 * Hero section — first impression. Staggered title entry, floating
 * emotion cards on the right, badge + CTA.
 */
export default function Hero() {
  const titleContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };
  const titleItem = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-32 md:pb-24 px-6 md:px-10">
      {/* Decorative background blobs */}
      <div className="blob bg-joy/40 w-[420px] h-[420px] -top-32 -left-24" />
      <div className="blob bg-anxiety/30 w-[360px] h-[360px] top-40 -right-20" />
      <div className="blob bg-sadness/20 w-[300px] h-[300px] bottom-0 left-1/3" />

      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
        {/* LEFT: copy */}
        <motion.div variants={titleContainer} initial="hidden" animate="show">
          <motion.div variants={titleItem}>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-4 py-2 text-sm font-medium text-slate-700 shadow-soft border border-slate-100">
              <Sparkles className="w-4 h-4 text-anxiety" />
              Novidade para Psicólogas, Educadoras e Famílias
            </span>
          </motion.div>

          <motion.h1
            variants={titleItem}
            className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]"
          >
            <span className="text-gradient-emotions">UNO</span>{' '}
            <span className="text-slate-900">das</span>{' '}
            <span className="text-gradient-emotions">Emoções</span>
          </motion.h1>

          <motion.p
            variants={titleItem}
            className="mt-5 text-xl md:text-2xl text-slate-700 font-medium leading-snug max-w-xl"
          >
            O jogo de cartas que faz qualquer criança falar o que sente —{' '}
            <span className="text-anger font-semibold">brincando.</span>
          </motion.p>

          <motion.p
            variants={titleItem}
            className="mt-5 text-base md:text-lg text-slate-600 leading-relaxed max-w-xl"
          >
            Transforme a avaliação psicológica, a intervenção escolar e a rotina em
            casa em um momento real de conexão. Usando uma dinâmica de cartas que as
            crianças já amam, você acessa o mundo emocional delas sem o clima de
            interrogatório.
          </motion.p>

          <motion.div variants={titleItem} className="mt-8">
            <EmotionDots />
          </motion.div>

          <motion.div variants={titleItem} className="mt-10">
            <CtaButton ariaLabel="Ir para a seção de oferta">
              🎴 QUERO O MEU UNO DAS EMOÇÕES
            </CtaButton>
            <p className="mt-3 text-sm text-slate-500">
              Acesso imediato · Pagamento seguro · Garantia de 7 dias
            </p>
          </motion.div>
        </motion.div>

        {/* RIGHT: floating emotion cards visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[440px] md:h-[520px] flex items-center justify-center"
        >
          {EMOTION_COLORS.map((color, i) => {
            const offsetX = (i - 2) * 60;
            const offsetY = Math.abs(i - 2) * 12;
            const rotate = (i - 2) * 8;
            return (
              <motion.div
                key={color}
                className="absolute w-32 h-44 md:w-40 md:h-56 rounded-3xl shadow-2xl border-4 border-white"
                style={{
                  backgroundColor: color,
                  zIndex: 10 - Math.abs(i - 2),
                  left: `calc(50% + ${offsetX}px)`,
                  top: `calc(50% + ${offsetY}px)`,
                  translateX: '-50%',
                  translateY: '-50%',
                }}
                initial={{ y: 0, rotate }}
                animate={{
                  y: [0, -14, 0],
                  rotate: [rotate, rotate + 2, rotate],
                }}
                transition={{
                  duration: 5 + i * 0.4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.3,
                }}
              >
                <div className="absolute inset-3 rounded-2xl bg-white/25 backdrop-blur-sm flex items-center justify-center">
                  <div
                    className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/90 shadow-inner flex items-center justify-center text-2xl md:text-3xl font-bold"
                    style={{ color }}
                  >
                    {['☺', '✕', '~', '✗', '?'][i]}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
