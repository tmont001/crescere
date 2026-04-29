import type { Testimonial } from '@/types';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: 'I finally stopped being the person who "took French in school." Ten weeks, real conversations, zero apps.',
    name: 'Ana Ribeiro',
    role: 'Product Manager',
    featured: false,
  },
  {
    id: 't2',
    quote:
      'What worked for me was the structure. Two sessions a week, a small group, and a real teacher holding us accountable. I had tried Duolingo for two years and learned less than I did in the first month here. The difference is the people — both the instructor and the other students. You cannot ghost a cohort the way you can ghost an app.',
    name: 'Marcus Chen',
    role: 'Software Engineer',
    featured: true,
  },
  {
    id: 't3',
    quote: 'Small groups made the difference. I actually spoke every session.',
    name: 'Priya Natarajan',
    role: 'Physician',
    featured: false,
  },
  {
    id: 't4',
    quote:
      'I travel to Mexico City for work four times a year. Before this, I relied on translation apps in every meeting. After ten weeks of Spanish A2, I led a client kickoff entirely in Spanish. The cohort format forces you to show up prepared — which is the exact thing I needed.',
    name: 'Jordan Whitfield',
    role: 'Operations Director',
    featured: true,
  },
  {
    id: 't5',
    quote: 'Best investment I have made in myself in years. The accountability alone was worth it.',
    name: 'Leah Okonkwo',
    role: 'Consultant',
    featured: false,
  },
];
