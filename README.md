# valentine.michael_ — Portfolio (React)

Terminal-themed developer portfolio built with React + Vite. Plain CSS (no Tailwind build step needed), scroll-reveal animations via `IntersectionObserver`, animated hero terminal typing effect, and working project filters.

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

Outputs a static site to `dist/`, deployable to Vercel, Netlify, GitHub Pages, etc.

## Structure

```
src/
  App.jsx              # assembles all sections
  data.js              # your projects, experience, stats — edit this to update content
  index.css            # all styling (CSS variables at the top control the theme)
  components/
    Header.jsx
    Hero.jsx           # typing terminal effect
    Stats.jsx          # count-up on scroll
    TechStack.jsx
    Projects.jsx       # filterable project grid
    Experience.jsx
    Contributions.jsx  # GitHub-style contribution grid
    Contact.jsx        # opens a pre-filled mailto on submit
    Footer.jsx
    Reveal.jsx          # shared scroll-reveal wrapper
```

To update your info (new job, new project, new stats), edit `src/data.js` — nothing else needs to change.
