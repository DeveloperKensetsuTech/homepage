export type FeatureIconName =
  | 'document'
  | 'cart'
  | 'calculator'
  | 'template'
  | 'refresh'
  | 'clipboard';

export default function FeatureIcon({ name }: { name: FeatureIconName }) {
  switch (name) {
    case 'document':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 3h8l4 4v14H7V3z" />
          <path d="M15 3v4h4" />
          <path d="M9 13h6M9 17h6" />
        </svg>
      );
    case 'cart':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 4h2l2 11h12l2-8H6" />
          <circle cx="9" cy="19" r="1.4" />
          <circle cx="17" cy="19" r="1.4" />
        </svg>
      );
    case 'calculator':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="3" width="14" height="18" rx="1.5" />
          <rect x="7" y="5" width="10" height="4" />
          <circle cx="9" cy="13" r="0.7" fill="currentColor" />
          <circle cx="12" cy="13" r="0.7" fill="currentColor" />
          <circle cx="15" cy="13" r="0.7" fill="currentColor" />
          <circle cx="9" cy="16" r="0.7" fill="currentColor" />
          <circle cx="12" cy="16" r="0.7" fill="currentColor" />
          <circle cx="15" cy="16" r="0.7" fill="currentColor" />
        </svg>
      );
    case 'template':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="6" width="13" height="15" rx="1" />
          <path d="M8 3h11v15" />
          <path d="M7 11h7M7 15h7" />
        </svg>
      );
    case 'refresh':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 12a8 8 0 0 1-14.93 3.93" />
          <path d="M4 12a8 8 0 0 1 14.93-3.93" />
          <path d="M20 4v5h-5" />
          <path d="M4 20v-5h5" />
        </svg>
      );
    case 'clipboard':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="6" y="4" width="12" height="17" rx="1.5" />
          <path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
  }
}
