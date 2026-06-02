import type { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  /** Container max width; defaults to 6xl. */
  contained?: boolean;
}

/**
 * Standard section wrapper. Mobile-first paddings — tighter on small
 * screens, generous on desktop.
 */
export default function Section({
  id,
  children,
  className = '',
  contained = true,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative py-14 px-5 sm:py-20 sm:px-6 md:py-24 md:px-10 lg:py-28 ${className}`}
    >
      {contained ? (
        <div className="relative max-w-6xl mx-auto">{children}</div>
      ) : (
        children
      )}
    </section>
  );
}
