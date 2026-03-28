/**
 * quakefyi-embed — TypeScript declarations
 *
 * The embed script is self-executing. Simply import it to activate widgets.
 * All configuration is provided via data-* attributes on DOM elements.
 */

export {};

declare global {
  interface HTMLElement {
    dataset: DOMStringMap & {
      /** Widget type for QuakeFYI */
      'quakefyi'?: 'entity' | 'glossary' | 'faq' | 'search' | 'magnitude-viz' | 'guide' | 'magnitude-badge' | 'tsunami-badge';
      /** Entity slug (e.g. "earthquakes") */
      slug?: string;
      /** Visual theme */
      theme?: 'light' | 'dark' | 'sepia' | 'auto';
      /** Widget design style */
      style?: 'modern' | 'clean';
      /** Widget size */
      size?: 'default' | 'compact' | 'large';
      /** Search box placeholder text */
      placeholder?: string;
    };
  }
}
