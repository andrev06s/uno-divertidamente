import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Zap, Check } from 'lucide-react';

interface UpsellModalProps {
  open: boolean;
  onClose: () => void;
  /** Where to send the user if they accept the $9,90 upgrade. */
  upgradeHref: string;
  /** Where to send the user if they decline and want only the basic UNO ($4,90). */
  declineHref: string;
}

/**
 * Items the user gets at the $9,90 popup tier. Mirrors the full Kit
 * Completo extras (positioned as a discounted version of the $17,90 best-
 * seller offered exclusively to people who clicked the basic plan).
 */
const KIT_PERKS = [
  'Cuaderno de Educación Emocional',
  'Cuentos para Mejorar el Comportamiento',
  'Contrato Conductual',
  'Registro de Comportamiento',
  'Técnicas de Comportamiento',
];

/**
 * Order-bump modal. Shown when the user clicks the $4,90 basic-plan CTA.
 * Mobile-first: total height stays under ~470px so it fits in a 568px
 * viewport (iPhone SE 1st gen) without scrolling. Layout is intentionally
 * stripped of decorative blobs and long paragraphs for a clean look.
 */
export default function UpsellModal({
  open,
  onClose,
  upgradeHref,
  declineHref,
}: UpsellModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // ESC closes, body scroll locks, initial focus on close button
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);

    const t = setTimeout(() => closeButtonRef.current?.focus(), 50);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKey);
      clearTimeout(t);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="upsell-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {/* Backdrop */}
          <button
            type="button"
            aria-label="Cerrar"
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm cursor-default"
          />

          {/* Dialog card. max-h kept as safety net; design target is ~470px. */}
          <motion.div
            initial={{ y: 30, scale: 0.96, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 20, scale: 0.97, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 280, damping: 24 }}
            className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-5 sm:p-7 max-h-[95vh] overflow-y-auto"
          >
            {/* Close button */}
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Cerrar oferta"
              className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors z-10"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Badge */}
            <span className="inline-flex items-center gap-1.5 bg-emotion-gradient text-white text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-md">
              <Zap className="w-3 h-3 fill-white" />
              Oferta especial solo ahora
            </span>

            {/* Heading */}
            <h3
              id="upsell-title"
              className="mt-3 text-lg sm:text-2xl font-bold text-slate-900 leading-tight pr-7"
            >
              ¡Espera! Por solo{' '}
              <span className="text-gradient-emotions">$5 más</span>, llévate el
              Kit Completo.
            </h3>

            {/* Perks list — 5 items from the Kit Completo, compact */}
            <ul className="mt-4 space-y-1.5">
              {KIT_PERKS.map((perk) => (
                <li
                  key={perk}
                  className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 leading-snug"
                >
                  <span
                    aria-hidden
                    className="flex-shrink-0 w-4 h-4 rounded-full bg-emotion-gradient flex items-center justify-center"
                  >
                    <Check className="w-2.5 h-2.5 text-white" strokeWidth={4} />
                  </span>
                  <span>{perk}</span>
                </li>
              ))}
            </ul>

            {/* Price comparison */}
            <div className="mt-4 rounded-xl bg-cream p-3 border border-slate-100">
              <div className="flex items-baseline justify-between gap-3">
                <span className="text-xs text-slate-500">UNO solo</span>
                <span className="text-sm font-semibold text-slate-400 line-through">
                  $4,90
                </span>
              </div>
              <div className="flex items-baseline justify-between gap-3 mt-1">
                <span className="text-xs sm:text-sm font-semibold text-anxiety">
                  UNO + Kit Completo
                </span>
                <span className="text-xl sm:text-2xl font-bold text-gradient-emotions">
                  $9,90
                </span>
              </div>
            </div>

            {/* CTAs — primary gradient, secondary outline (no longer a tiny
                text link; sits visibly but clearly subordinate) */}
            <div className="mt-4 flex flex-col gap-2">
              <a
                href={upgradeHref}
                className="block w-full text-center bg-emotion-gradient text-white font-bold text-sm sm:text-base px-4 py-3 sm:px-5 sm:py-3.5 rounded-full shadow-[0_10px_30px_-8px_rgba(157,78,221,0.55)] hover:shadow-[0_18px_40px_-8px_rgba(255,107,107,0.55)] transition-shadow leading-tight"
              >
                🎯 SÍ, QUIERO POR $9,90
              </a>
              <a
                href={declineHref}
                className="block w-full text-center bg-white border-2 border-slate-200 text-slate-600 font-semibold text-xs sm:text-sm px-4 py-2.5 sm:px-5 sm:py-3 rounded-full hover:border-slate-300 hover:bg-slate-50 transition-colors leading-tight"
              >
                No, gracias — solo el UNO por $4,90
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
