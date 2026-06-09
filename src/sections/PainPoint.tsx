import { motion } from 'framer-motion';
import Section from '../components/Section';
import Reveal from '../components/Reveal';

/**
 * The "pain" section. Names the problem the reader recognizes, then
 * shows the product as the answer.
 */
export default function PainPoint() {
  // Decorative emotion dots that orbit the product photo.
  const ORBIT_DOTS = [
    { color: '#FFD93D', size: 22, top: '-4%', left: '-6%', dur: 4.2 },
    { color: '#FF6B6B', size: 16, top: '-2%', right: '-4%', dur: 3.6 },
    { color: '#4D96FF', size: 18, bottom: '-3%', left: '-5%', dur: 5.0 },
    { color: '#6BCB77', size: 14, top: '40%', right: '-7%', dur: 4.4 },
    { color: '#9D4EDD', size: 20, bottom: '-4%', right: '8%', dur: 3.8 },
  ];

  return (
    <Section className="bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <Reveal>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
            “¿Cómo te estás sintiendo?” …{' '}
            <span className="text-slate-500">y el silencio que viene después.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed">
            La mirada al suelo. El “no sé”. Sea en el consultorio o en casa,
            acceder a lo que pasa en la cabeza de un niño parece chocar con una
            pared invisible.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10 sm:mt-12 relative">
            <div className="absolute inset-0 bg-emotion-gradient opacity-20 blur-3xl rounded-full" />
            <p className="relative text-xl sm:text-2xl md:text-4xl font-bold leading-snug">
              <span className="text-anger">
                El niño no se abre en el interrogatorio.
              </span>
              <br />
              <span className="text-anxiety">Se abre en el juego.</span>
            </p>
          </div>
        </Reveal>

        {/* Product hero shot — polaroid-style gradient frame with floating
            dots, gentle float + tilt loop, animated glow. */}
        <Reveal delay={0.45}>
          <div className="mt-12 sm:mt-16 relative mx-auto max-w-md sm:max-w-lg">
            {/* Pulsing colored glow behind everything */}
            <motion.div
              aria-hidden
              className="absolute -inset-10 bg-emotion-gradient blur-3xl rounded-full pointer-events-none"
              animate={{ opacity: [0.22, 0.38, 0.22], scale: [0.95, 1.05, 0.95] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* The framed product — floats + tilts gently */}
            <motion.div
              className="relative"
              animate={{ y: [0, -12, 0], rotate: [-0.8, 0.8, -0.8] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            >
              {/* Gradient ring (outer). Padding creates the 4px border;
                  the gradient slowly shifts color positions for a lively feel. */}
              <div
                className="relative rounded-[2rem] p-[4px] shadow-2xl animate-gradient-shift"
                style={{
                  backgroundImage:
                    'linear-gradient(135deg, #FFD93D 0%, #FF6B6B 25%, #9D4EDD 55%, #4D96FF 80%, #6BCB77 100%)',
                  backgroundSize: '200% 200%',
                }}
              >
                {/* White inner card holds the image with a bit of breathing room */}
                <div className="rounded-[1.75rem] bg-white p-3 sm:p-4 overflow-hidden">
                  <img
                    src="https://i.postimg.cc/fL0RFK7G/Design-sem-nome-2026-06-09T153710-792.png"
                    alt="UNO de las Emociones, kit con cartas de las cinco emociones"
                    loading="lazy"
                    decoding="async"
                    className="block w-full h-auto rounded-[1.35rem]"
                  />
                </div>
              </div>

              {/* Orbiting emotion dots */}
              {ORBIT_DOTS.map((d, i) => (
                <motion.span
                  key={i}
                  aria-hidden
                  className="absolute rounded-full shadow-lg"
                  style={{
                    width: d.size,
                    height: d.size,
                    backgroundColor: d.color,
                    boxShadow: `0 6px 20px -4px ${d.color}aa`,
                    top: d.top,
                    bottom: d.bottom,
                    left: d.left,
                    right: d.right,
                  }}
                  animate={{ y: [0, -10, 0], scale: [1, 1.15, 1] }}
                  transition={{
                    duration: d.dur,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.25,
                  }}
                />
              ))}
            </motion.div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
