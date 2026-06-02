/**
 * Appends the current page's query string (window.location.search) to a
 * target URL. Used to forward UTM / fbclid / etc. parameters to every
 * external redirect (checkout, upsell) so attribution survives the jump.
 *
 * Examples:
 *   withQuery("https://x.com/checkout")
 *     // -> "https://x.com/checkout?utm_source=fb"
 *   withQuery("https://x.com/go.php?offer=abc")
 *     // -> "https://x.com/go.php?offer=abc&utm_source=fb"
 */
export function withQuery(baseUrl: string): string {
  if (typeof window === 'undefined') return baseUrl;

  const search = window.location.search;
  if (!search || search.length <= 1) return baseUrl;

  const params = search.startsWith('?') ? search.slice(1) : search;
  const joiner = baseUrl.includes('?') ? '&' : '?';

  return `${baseUrl}${joiner}${params}`;
}
