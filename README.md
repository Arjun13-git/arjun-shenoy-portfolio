# Arjun Shenoy R — Portfolio

Personal portfolio of **Arjun Shenoy R**, a Computer Science Engineering student at Sahyadri College of Engineering & Management.

**AI/ML Enthusiast · Software Engineering · Research**

**Live site:** [arjun-shenoy-portfolio.vercel.app](https://arjun-shenoy-portfolio.vercel.app)

## About

A single-page portfolio presenting my projects, research work, internship experience and hackathon history. It has a dark and a light theme, works on mobile and desktop, and keeps portfolio content in Markdown and TypeScript data files so it can be updated without changing the section components.

### Sections

- **About** — background, education and interests
- **Skills** — technologies grouped by how I use them
- **Experience** — software engineering internship at Datavex.ai Private Limited
- **Projects** — featured and other projects, filterable by category, with GitHub links
- **Research** — academic and independent research work
- **Competitions** — hackathons and competitions
- **Contact** — email, GitHub, LinkedIn and resume download

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router, statically rendered) with React 19
- TypeScript
- Tailwind CSS v4 with shadcn/ui (Base UI) components
- Framer Motion for reveal and interface animations
- next-themes for dark/light theme switching
- gray-matter for Markdown content
- lucide-react icons

## Getting started

Requires Node.js 20.9 or later (needed by Next.js 16).

```bash
# Install dependencies
npm install

# Start the development server at http://localhost:3000
npm run dev
```

### Production build

```bash
npm run build   # create an optimized production build
npm run start   # serve the production build
npm run lint    # run ESLint
```

## Project structure

```text
app/              Page, layout, metadata, sitemap, robots, icons and OG image
components/
  layout/         Navbar, footer, logo
  sections/       One folder per page section (hero, about, projects, …)
  shared/         Reusable section and list components
config/           Site details (name, links, URL) and navigation
constants/        Skills and competitions data
content/          Markdown content: projects, research, experience
lib/              Content loading and animation helpers
public/           Profile photo and resume PDF
```

### Updating content

- **Projects:** add or edit a Markdown file in `content/projects/`. Frontmatter sets the title, description, tech stack, category, links, date and whether the project is featured.
- **Research:** add a Markdown file in `content/research/`, or set `showInResearch: true` on a project.
- **Experience:** edit `content/experience/`.
- **Skills / competitions:** edit `constants/skills.ts` and `constants/competitions.ts`.
- **Site details:** edit `config/site.ts`.

## Repository

[github.com/Arjun13-git/arjun-shenoy-portfolio](https://github.com/Arjun13-git/arjun-shenoy-portfolio)
