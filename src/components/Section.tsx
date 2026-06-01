import type { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  /** Container max width; defaults to 6xl. */
  contained?: boolean;
}

export default function Section({
  id,
  children,
  className = '',
  contained = true,
}: SectionProps) {
  return (
    <section id={id} className={`relative py-20 md:py-28 px-6 md:px-10 ${className}`}>
      {contained ? (
        <div className="relative max-w-6xl mx-auto">{children}</div>
      ) : (
        children
      )}
    </section>
  );
}
