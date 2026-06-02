/// <reference types="vite/client" />

import type { DetailedHTMLProps, HTMLAttributes } from 'react';

/**
 * Declare the <lt-v2> custom element used by the LiteVideo VSL player,
 * so TSX type-checking accepts it as a regular host element.
 */
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lt-v2': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
        v?: string;
        ar?: string;
        sc?: string;
        st?: string;
        ap?: string;
        lp?: string;
        ps?: string;
        ph?: string;
      };
    }
  }
}

export {};
