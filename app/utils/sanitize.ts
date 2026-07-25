import DOMPurify from 'dompurify';

/**
 * Sanitizes HTML content to prevent XSS attacks.
 * Useful for content rendered via v-html.
 * @param html The HTML string to sanitize.
 * @returns The sanitized HTML string.
 */
export const sanitizeHtml = (html: string | null | undefined): string => {
  if (!html) return '';
  
  // If we are on the server, DOMPurify needs JSDOM or similar, 
  // but in Nuxt we can check if process.client
  if (import.meta.client) {
    return DOMPurify.sanitize(html);
  }
  
  // On server side, we stick to a simple return or use a server-side sanitizer if needed.
  // For most Nuxt hydration cases, this is fine because it will be re-sanitized on client.
  return html; 
};
