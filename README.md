# CampusVerse — Trusted Student Learning Network

CampusVerse is a Next.js + React landing page for a scalable student community platform where students can discover and review trusted notes, question papers, cheat sheets, YouTube channels, Udemy courses, GitHub repositories, research papers, professor notes, events, and open-source project ideas.

## What is fixed in this version?

The previous version had build issues caused by:

1. Tailwind CSS plugin mismatch with newer Next.js versions.
2. Invalid / unstable external icon imports.
3. Too much dependency complexity for a simple landing-page MVP.

This fixed version uses clean CSS instead of Tailwind and removes icon-package dependency problems. It is easier to understand, edit, and deploy.

## Tech used in this codebase

- Next.js 16
- React 19
- TypeScript
- Plain CSS in `app/globals.css`
- App Router structure
- No Tailwind dependency
- No icon library dependency

## Run locally

```bash
npm install
npm run dev
```

Open:

```bash
http://localhost:3000
```

## Build for production

```bash
npm run build
npm run start
```

## Project structure

```text
campusverse-fixed/
├── app/
│   ├── globals.css      # All styling
│   ├── layout.tsx       # Metadata and root layout
│   └── page.tsx         # Landing page sections
├── next.config.js
├── package.json
├── tsconfig.json
└── README.md
```

## Website sections included

- Hero section
- Product preview dashboard
- Trust graph visual
- Notes and previous-year question papers
- Cheat sheets feature
- YouTube / Udemy / GitHub review system
- Friend and senior recommendation system
- Feedback and comments
- Events and open-source projects
- Launch strategy
- Free-tier technology plan
- CampusVerse naming explanation

## Suggested MVP product stack

For the actual application after this landing page:

| Layer | Recommended Tool | Why |
|---|---|---|
| Frontend | Next.js + React | SEO, fast UI, easy deployment |
| Styling | Tailwind CSS or plain CSS | Tailwind later if the team is comfortable |
| Database | Supabase PostgreSQL or Neon | Free tier, SQL, scalable |
| File Storage | Supabase Storage or Cloudflare R2 | Notes, PDFs, cheat sheets, papers |
| Authentication | Supabase Auth or Auth.js | Student login, Google login |
| Search | PostgreSQL full-text first | Simple and free for MVP |
| Advanced Search | Meilisearch later | Better search after growth |
| Backend | Next.js API routes first | Avoid separate backend in MVP |
| Deployment | Vercel | Easiest Next.js deployment |
| Analytics | Vercel Analytics or PostHog | Track signups and usage |

## Suggested database tables for real product

```text
users
universities
colleges
departments
courses
semesters
subjects
topics
resources
resource_reviews
cheat_sheets
question_papers
professors
comments
votes
bookmarks
events
clubs
projects
```

## Suggested launch plan

1. Start with one university or one department.
2. Upload useful notes, question papers and cheat sheets manually.
3. Invite seniors and student ambassadors.
4. Add ratings and comments to each resource.
5. Expand into YouTube/Udemy reviews.
6. Add events, hackathons and open-source project collaboration.
7. Scale to other universities after the first community becomes active.

## Best name

Recommended name: **CampusVerse**

Why it works:

- Not limited to notes.
- Can scale to courses, creators, events, projects, internships and alumni.
- Sounds like a community, not only a tool.
- Easy to brand globally.

Tagline:

> The trusted knowledge network for every campus.
