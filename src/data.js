export const projects = [
  { name: 'Kingsway Diagnostics', tag: 'HEALTHTECH', cat: 'web', desc: 'Multi-department hospital operational dashboards spanning pharmacy, lab workflows and POS counters, with strict role-based access control.', tech: '#React #NodeJS #MySQL #Sequelize', url: 'https://kingswaydiagnostics.com' },
  { name: 'Soothfy: AI Daily Routines', tag: 'MOBILE', cat: 'mobile', desc: 'AI-powered mental health app shipped to iOS and Android, giving users guided daily routines for wellbeing.', tech: '#ReactNative #NodeJS #Prisma #Gemini', url: 'https://play.google.com/store/apps/details?id=com.soothfy' },
  { name: 'Questunit', tag: 'MOBILE', cat: 'mobile', desc: 'Two-sided services marketplace: a Request app for booking and a Render app for providers to accept jobs, chat and get paid.', tech: '#ReactNative #Socket.IO #GoogleMapsSDK', url: 'https://questunit.com' },
  { name: 'Tilstand Web App', tag: 'PROPTECH', cat: 'web', desc: 'Responsive operational dashboards and API-driven workflows for property management operations.', tech: '#NextJS #ShadcnUI #PostgreSQL #Drizzle', url: 'https://tilstand.al' },
  { name: 'Schöps Property Mgmt.', tag: 'PROPTECH', cat: 'web', desc: 'Financial decision workflows and interactive dashboards for AI-powered property investment feasibility analysis.', tech: '#React #Zustand #PostgreSQL #Drizzle', url: 'https://scheops.vercel.app' },
  { name: 'Anyibugo Cooperative', tag: 'FINTECH', cat: 'web', desc: 'Transactional backend for member contributions, loan issuing, automated interest and repayment reconciliation.', tech: '#React #NodeJS #MySQL #Sequelize', url: 'https://anyibugocooperativesociety.com' },
]

export const experience = [
  { role: 'Full-Stack Mobile Engineer (Frontend Lead)', co: '@ Harmony Kloud — Remote (Houston, TX)', when: 'Mar 2025 — Present', desc: "Own frontend architecture for a healthcare (ABA therapy) platform end to end across React Native, Expo and TypeScript. Designed client-side auth (JWT/OAuth, RBAC) in a monorepo and built a dynamic file-tree UI for complex nested uploads under strict healthcare data rules." },
  { role: 'Fullstack Engineer (Senior Frontend Lead)', co: '@ Maliroso Digital — Enugu', when: 'Jul 2023 — Feb 2025', desc: "Led frontend delivery for the company's primary international engagement in Austria. Set the design system and architecture (Next.js, React, Tailwind, Zustand) for government and enterprise dashboards, and directed PR review and mentoring for the frontend team." },
  { role: 'Full-Stack Software Engineer', co: '@ Digital Dreams Ltd — Enugu', when: 'Oct 2020 — Jun 2023', desc: 'Built responsive, accessible React applications and dashboards for healthcare, finance and logistics clients. Established Git branching and deployment strategy, and led structured mentoring for 200+ developers on engineering fundamentals.' },
]

export const skillGroups = [
  { path: '~/skills/frontend', skills: [
    { name: 'React / React Native', pct: 96 },
    { name: 'Next.js', pct: 88 },
    { name: 'TypeScript', pct: 90 },
    { name: 'Tailwind CSS', pct: 92 },
    { name: 'Zustand / React Query', pct: 85 },
  ]},
  { path: '~/skills/backend', skills: [
    { name: 'Node.js / Express', pct: 88 },
    { name: 'NestJS', pct: 72 },
    { name: 'PostgreSQL / MySQL', pct: 84 },
    { name: 'MongoDB', pct: 76 },
    { name: 'REST / Socket.IO', pct: 90 },
  ]},
  { path: '~/skills/mobile-cloud', skills: [
    { name: 'React Native / Expo', pct: 94 },
    { name: 'Firebase', pct: 80 },
    { name: 'Docker', pct: 70 },
    { name: 'GitHub Actions (CI/CD)', pct: 78 },
    { name: 'JWT / OAuth / RBAC', pct: 88 },
  ]},
]

export const stats = [
  { count: 8, label: 'YEARS EXPERIENCE' },
  { count: 50, label: 'PROJECTS COMPLETED' },
  { count: 200, label: 'DEVELOPERS MENTORED' },
  { count: 5, label: 'JOB COMPANIES' },
]

export const heroLines = [
  '$ cat about.json',
  '{',
  '  "name": "Valentine Michael",',
  '  "role": "Senior Fullstack Developer",',
  '  "location": "Lagos, Nigeria (Remote)",',
  '  "email": "michael.chionye@gmail.com",',
  '  "skills": ["React","React Native","Next.js","TypeScript","Node.js","PostgreSQL"],',
  '  "available": "immediate"',
  '}',
]

export const logEntries = [
  'Shipped v2.4.0 to production for Kingsway Diagnostics.',
  'Mentored 12 new engineers at Enugu Tech Hub graduation.',
  'Merged 14 pull requests in Questunit repository.',
  'Started architectural redesign of Soothfy AI backend.',
  'Published article: "Scaling React Apps with TypeScript".',
]
