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
 * Items included in the $9,90 upsell tier.
 *
 * NOTE: This tier sits BETWEEN the $4,90 basic plan and the $17,90 full Kit
 * Completo. The exact contents of this intermediate offer were not specified,
 * so the entries below are PLACEHOLDERS — replace them with the actual bonus
 * delivered at the $9,90 price point before publishing.
 */
const UPGRADE_PERKS = [
  '[PLACEHOLDER — INSERTAR NOMBRE DEL BONO 1 INCLUIDO EN EL $9,90]',
  '[PLACEHOLDER — INSERTAR NOMBRE DEL BONO 2 (si lo hay)]',
];

/**
 * Order-bump modal. Shown when the user clicks the $4,90 basic-plan CTA.
 * Offers an intermediate $9,90 upgrade before letting them proceed to the
 * basic checkout.
 */
export default function UpsellModal({
  open,
  onClose,
  upgradeHref,
  declineHref,
}: UpsellModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // ESC to close, lock body scroll while open, initial focus on close button
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
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

          {/* Dialog card */}
          <motion.div
            initial={{ y: 30, scale: 0.96, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 20, scale: 0.97, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 280, damping: 24 }}
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-6 sm:p-8 overflow-hidden max-h-[90vh] overflow-y-auto"
          >
            {/* Decorative gradient blob */}
            <div
              aria-hidden
              className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-emotion-gradient opacity-20 blur-3xl pointer-events-none"
            />

            {/* Close button */}
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Cerrar oferta"
              className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative">
              {/* Badge */}
              <span className="inline-flex items-center gap-1.5 bg-emotion-gradient text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                <Zap className="w-3 h-3 fill-white" />
                Oferta especial solo ahora
              </span>

              <h3
                id="upsell-title"
                className="mt-4 text-2xl sm:text-3xl font-bold text-slate-900 leading-tight pr-8"
              >
                ¡Espera! Por solo{' '}
                <span className="text-gradient-emotions">$5 más</span>,
                te llevas un bono exclusivo.
              </h3>

              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                Aprovecha esta oportunidad única y potencia tu UNO de las
                Emociones con un material extra de educación emocional. Solo
                verás esta oferta una vez.
              </p>

              {/* Perks */}
              <ul className="mt-5 space-y-2.5">
                {UPGRADE_PERKS.map((perk) => (
                  <li
                    key={perk}
                    className="flex items-start gap-3 text-sm sm:text-base text-slate-700"
                  >
                    <span
                      aria-hidden
                      className="flex-shrink-0 w-5 h-5 rounded-full bg-emotion-gradient flex items-center justify-center mt-0.5"
                    >
                      <Check className="w-3 h-3 text-white" strokeWidth={4} />
                    </span>
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>

              {/* Price comparison */}
              <div className="mt-6 rounded-2xl bg-cream p-4 border border-slate-100">
                <div className="flex items-baseline justify-between gap-3 flex-wrap">
                  <span className="text-sm text-slate-500">UNO solo</span>
                  <span className="text-base font-semibold text-slate-400 line-through">
                    $4,90
                  </span>
                </div>
                <div className="flex items-baseline justify-between gap-3 mt-2 flex-wrap">
                  <span className="text-sm font-semibold text-anxiety">
                    UNO + Bono (recomendado)
                  </span>
                  <span className="text-2xl font-bold text-gradient-emotions">
                    $9,90
                  </span>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={upgradeHref}
                  className="relative block w-full text-center bg-emotion-gradient text-white font-bold text-sm sm:text-base px-5 py-3.5 sm:px-6 sm:py-4 rounded-full shadow-[0_10px_30px_-8px_rgba(157,78,221,0.55)] hover:shadow-[0_18px_40px_-8px_rgba(255,107,107,0.55)] transition-shadow leading-tight"
                >
                  🎯 SÍ, QUIERO AGREGAR EL BONO POR $9,90
                </a>
                <a
                  href={declineHref}
                  className="block w-full text-center text-xs sm:text-sm text-slate-500 hover:text-slate-800 underline underline-offset-4 transition-colors py-2"
                >
                  No, prefiero continuar solo con el UNO por $4,90
                </a>
              </div>

              <p className="mt-4 text-center text-xs text-slate-400">
                🔒 Pago seguro · Entrega instantánea
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
