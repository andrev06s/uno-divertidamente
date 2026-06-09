import { motion } from 'framer-motion';

const EMOTIONS = [
  { label: 'Alegría', color: '#FFD93D' },
  { label: 'Rabia', color: '#FF6B6B' },
  { label: 'Tristeza', color: '#4D96FF' },
  { label: 'Asco', color: '#6BCB77' },
  { label: 'Ansiedad', color: '#9D4EDD' },
];

/**
 * Floating row of emotion bubbles + labels. Each dot has its own
 * gentle floaty loop with a staggered delay so the row feels alive.
 */
export default function EmotionDots() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 mt-2">
      {EMOTIONS.map((e, i) => (
        <motion.div
          key={e.label}
          className="flex items-center gap-2"
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 4 + i * 0.3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.25,
          }}
        >
          <span
            aria-hidden
            className="w-4 h-4 md:w-5 md:h-5 rounded-full shadow-md"
            style={{
              backgroundColor: e.color,
              boxShadow: `0 6px 20px -4px ${e.color}88`,
            }}
          />
          <span className="text-sm md:text-base font-medium text-slate-700">
            {e.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
