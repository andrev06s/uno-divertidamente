import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface CtaButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline';
  size?: 'md' | 'lg';
  ariaLabel?: string;
}

/**
 * Main call-to-action button. Animated emotion-gradient pill with hover
 * scale + glow. Defaults to anchoring to #oferta (the Pricing section)
 * when no href or onClick is provided.
 *
 * Mobile-friendly: tighter paddings on small screens, text can wrap so a
 * long label like "QUERO O MEU UNO DAS EMOÇÕES" never overflows a 360px
 * viewport.
 */
export default function CtaButton({
  children,
  href = '#oferta',
  onClick,
  variant = 'primary',
  size = 'lg',
  ariaLabel,
}: CtaButtonProps) {
  const sizeClasses =
    size === 'lg'
      ? 'px-5 py-3.5 text-sm sm:px-7 sm:py-4 sm:text-base md:px-8 md:py-5 md:text-lg'
      : 'px-5 py-3 text-sm sm:px-6 sm:py-3.5 sm:text-base';

  const base =
    'relative inline-flex items-center justify-center gap-2 font-semibold rounded-full ' +
    'transition-shadow duration-300 select-none text-center leading-tight max-w-full';

  const variants = {
    primary:
      'text-white bg-emotion-gradient shadow-[0_10px_30px_-8px_rgba(157,78,221,0.55)] ' +
      'hover:shadow-[0_18px_40px_-8px_rgba(255,107,107,0.55)]',
    outline:
      'text-slate-800 bg-white border-2 border-slate-200 hover:border-anxiety/60 shadow-soft',
  } as const;

  const content = (
    <motion.span
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 320, damping: 18 }}
      className={`${base} ${sizeClasses} ${variants[variant]}`}
    >
      {/* soft animated glow ring on hover */}
      {variant === 'primary' && (
        <motion.span
          aria-hidden
          className="absolute inset-0 rounded-full bg-emotion-gradient opacity-0"
          whileHover={{ opacity: 0.35, scale: 1.08 }}
          transition={{ duration: 0.4 }}
          style={{ filter: 'blur(18px)', zIndex: -1 }}
        />
      )}
      {children}
    </motion.span>
  );

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        aria-label={ariaLabel}
        className="inline-block max-w-full"
      >
        {content}
      </button>
    );
  }

  return (
    <a href={href} aria-label={ariaLabel} className="inline-block max-w-full">
      {content}
    </a>
  );
}
