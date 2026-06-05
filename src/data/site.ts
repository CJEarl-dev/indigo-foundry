import heroDashboard from '../images/hero-dashboard.png';

export const site = {
  name: 'Indigo Foundry, LLC',
  title: 'Indigo Foundry',
  description: 'Boutique web development studio based in metro Atlanta, GA. Built with intention, built to last.',
  url: 'https://www.indigo-foundry.com',
  locale: 'en',
  author: 'Christopher Earl',
  email: 'hello@indigofoundry.com',
  // phone: '+1 (555) 123-4567',
  // address: '123 Main Street, Suite 400, San Francisco, CA 94105',
  // hours: 'Mon – Fri, 9:00 – 18:00',
  // coordinates: { lat: 37.7749, lng: -122.4194 },
  social: {
    // x: 'https://x.com',
    linkedin: 'https://www.linkedin.com/in/chris-j-earl/',
    instagram: 'https://www.instagram.com/indigofoundry',
    github: 'https://github.com/CJEarl-dev',
    // dribbble: 'https://dribbble.com',
  },
  ogImage: '/images/og-default.jpg',
  /**
   * Hero image on the homepage. Import from src/images/ so astro:assets
   * can convert to WebP and generate a responsive srcset automatically.
   * Set to null to show the default gradient placeholder.
   */
  heroImage: heroDashboard,
  heroImageAlt: 'A preview of our work',
} as const;

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Resources', href: '/resources' },      // New Resources page added
  { label: 'Accessibility', href: '/accessibility' }, // New Accessibility page added
  { label: 'Contact', href: '/contact' },
];

export const footerNav = {
  company: [
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
   
    { label: 'Contact', href: '/contact' },
  ],
  resources: [
 
    { label: 'Projects', href: '/projects' },
    { label: 'Resources', href: '/resources' },       // Link to new Resources page
    { label: 'Accessibility', href: '/accessibility' }, // Link to new Accessibility page
,
  ],
  legal: [
    { label: 'Privacy policy', href: '/privacy' },
    { label: 'Terms of service', href: '/terms' },
  ],
};
