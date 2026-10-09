export const projects = [
  { name: 'ESWAMA Landing Redesign', tag: 'GOVTECH', cat: 'web', desc: 'New landing page design for the Enugu State Waste Management Authority, putting bill checks, collection services and public education front and center.', tech: '#React #Vite #ResponsiveUI', url: 'https://eswama-landing.vercel.app/', img: 'projects/eswama.jpg' },
  { name: 'Klar Water Redesign', tag: 'UTILITIES', cat: 'web', desc: 'New website design for Klar Water Enugu, a water management company, presenting its services, projects and sustainability focus.', tech: '#React #Vite #ResponsiveUI', url: 'https://klar2.vercel.app/', img: 'projects/klar.jpg' },
  { name: 'Maliroso Digital Redesign', tag: 'AGENCY', cat: 'web', desc: 'New website design for Maliroso Digital, an Austrian-Nigerian tech partner, covering services, focus topics and careers.', tech: '#React #Vite #ResponsiveUI', url: 'https://maliroso-five.vercel.app/', img: 'projects/maliroso.jpg' },
  { name: 'de-crapify', tag: 'OPEN SOURCE', cat: 'oss', desc: 'npm CLI that cleans up the messy patterns AI coding assistants leave in JS/TS code: unused imports, stray console.logs, narrating comments, if pyramids and imports of packages that do not exist. Runs locally, with optional local-LLM help.', tech: '#NodeJS #Babel #CLI #LocalAI', url: 'https://www.npmjs.com/package/de-crapify', img: 'projects/decrapify.jpg' },
  { name: 'Kingsway Diagnostics', tag: 'HEALTHTECH', cat: 'web', desc: 'Multi-department hospital operational dashboards spanning pharmacy, lab workflows and POS counters, with strict role-based access control.', tech: '#React #NodeJS #MySQL #Sequelize', url: 'https://kingswaydiagnostics.com', img: 'projects/kingsway.jpg' },
  { name: 'Soothfy: AI Daily Routines', tag: 'MOBILE', cat: 'mobile', desc: 'AI-powered mental health app shipped to iOS and Android, giving users guided daily routines for wellbeing.', tech: '#ReactNative #NodeJS #Prisma #Gemini', url: 'https://play.google.com/store/apps/details?id=com.soothfy', img: 'projects/soothfy.jpg' },
  { name: 'Questunit', tag: 'MOBILE', cat: 'mobile', desc: 'Two-sided services marketplace: a Request app for booking and a Render app for providers to accept jobs, chat and get paid.', tech: '#ReactNative #Socket.IO #GoogleMapsSDK', url: 'https://questunit.com', img: 'projects/questunit.jpg' },
  { name: 'Schöps Property Mgmt.', tag: 'PROPTECH', cat: 'web', desc: 'Financial decision workflows and interactive dashboards for AI-powered property investment feasibility analysis.', tech: '#React #Zustand #PostgreSQL #Drizzle', url: 'https://scheops.vercel.app', img: 'projects/scheops.jpg' },
]

export const experience = [
  { role: 'Full-Stack Mobile Engineer (Frontend Lead)', co: '@ Harmony Kloud — Remote (Houston, TX)', when: 'Mar 2025 — Present', desc: "Own frontend architecture for a healthcare (ABA therapy) platform end to end across React Native, Expo and TypeScript. Designed client-side auth (JWT/OAuth, RBAC) in a monorepo and built a dynamic file-tree UI for complex nested uploads under strict healthcare data rules." },
  { role: 'Fullstack Engineer (Senior Frontend Lead)', co: '@ Maliroso Digital — Enugu', when: 'Jul 2023 — Feb 2025', desc: "Led frontend delivery for the company's primary international engagement in Austria. Set the design system and architecture (Next.js, React, Tailwind, Zustand) for government and enterprise dashboards, and directed PR review and mentoring for the frontend team." },
  { role: 'Full-Stack Software Engineer', co: '@ Digital Dreams Ltd — Enugu', when: 'Oct 2020 — Jun 2023', desc: 'Built responsive, accessible React applications and dashboards for healthcare, finance and logistics clients. Established Git branching and deployment strategy, and led structured mentoring for 200+ developers on engineering fundamentals.' },
]

export const skillGroups = [
  { title: 'Frontend', icon: 'monitor', path: '~/skills/frontend', skills: [
    { name: 'React / React Native', pct: 96 },
    { name: 'Next.js', pct: 88 },
    { name: 'TypeScript', pct: 90 },
    { name: 'Tailwind CSS', pct: 92 },
    { name: 'Zustand / React Query', pct: 85 },
  ]},
  { title: 'Backend', icon: 'server', path: '~/skills/backend', skills: [
    { name: 'Node.js / Express', pct: 88 },
    { name: 'NestJS', pct: 72 },
    { name: 'PostgreSQL / MySQL', pct: 84 },
    { name: 'MongoDB', pct: 76 },
    { name: 'REST / Socket.IO', pct: 90 },
  ]},
  { title: 'Mobile & Cloud', icon: 'smartphone', path: '~/skills/mobile-cloud', skills: [
    { name: 'React Native / Expo', pct: 94 },
    { name: 'Firebase', pct: 80 },
    { name: 'Docker', pct: 70 },
    { name: 'GitHub Actions (CI/CD)', pct: 78 },
    { name: 'JWT / OAuth / RBAC', pct: 88 },
  ]},
]

export const stats = [
  { count: 8, label: 'Years experience', icon: 'briefcase' },
  { count: 50, label: 'Projects completed', icon: 'layers' },
  { count: 200, label: 'Developers mentored', icon: 'users' },
  { count: 5, label: 'Companies', icon: 'globe' },
]

export const heroLines = [
  '$ cat about.json',
  '{',
  '  "name": "Valentine Michael",',
  '  "role": "Senior Fullstack Developer",',
  '  "location": "Lagos, Nigeria (Remote)",',
  '  "stack": ["React", "React Native", "Next.js",',
  '            "TypeScript", "Node.js", "PostgreSQL"],',
  '  "mentored": "200+ developers",',
  '  "available": true',
  '}',
]

// Scroll-revealed about statement; `hl` segments get the accent gradient.
export const statement = [
  { text: 'Eight years shipping' },
  { text: 'healthcare, fintech and proptech', hl: true },
  { text: 'products with' },
  { text: 'React, React Native and Node.js,', hl: true },
  { text: 'leading frontend teams and mentoring' },
  { text: '200+ developers', hl: true },
  { text: 'along the way.' },
]

export const marquee = ['React', 'React Native', 'Next.js', 'TypeScript', 'Node.js', 'NestJS', 'PostgreSQL', 'MongoDB', 'Expo', 'Firebase', 'Socket.IO', 'Tailwind CSS', 'Docker', 'GitHub Actions']

export const logEntries = [
  'Shipped v2.4.0 to production for Kingsway Diagnostics.',
  'Mentored 12 new engineers at Enugu Tech Hub graduation.',
  'Merged 14 pull requests in Questunit repository.',
  'Started architectural redesign of Soothfy AI backend.',
  'Published article: "Scaling React Apps with TypeScript".',
]
