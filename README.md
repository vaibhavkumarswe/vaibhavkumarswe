# Portfolio App

A modern portfolio website built with React, TypeScript, and Vite. This project showcases a personal brand with project case studies, work experience, skills, blog posts, and contact information.

## Overview

This app includes:

- Landing / Home page with hero section and featured content
- Projects page with portfolio case studies and tech stack details
- Experience page summarizing work history and achievements
- Skills page presenting technical competencies and tools
- Blog page with articles and individual post detail pages
- Contact page with a clear call-to-action and outreach section
- Smooth page transitions and animated UI components

## Features

- Responsive layout for mobile, tablet, and desktop
- Client-side routing with animated transitions using `react-router-dom` and `framer-motion`
- SEO metadata management using `react-helmet-async`
- Custom UI primitives built with Radix UI and Tailwind CSS
- Reusable component library and page layout structure
- Theme-aware styling and polished interactive elements
- Accessible navigation, keyboard focus support, and semantic markup

## Tech Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- React Router DOM
- Framer Motion
- React Helmet Async
- Radix UI primitives
- Lucide Icons
- React Query
- Sonner toast notifications
- Recharts

## Project Structure

- `src/App.tsx` — app routing, providers, and page layout
- `src/main.tsx` — app entry point
- `src/pages/` — route page components
- `src/components/` — reusable sections and layout primitives
- `src/components/ui/` — shared UI components and Radix-based primitives
- `src/data/portfolio.ts` — content data for projects, blog posts, and experience

## Getting Started

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

Open the app at `http://localhost:8080`.

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Run linting

```bash
npm run lint
```

### Run tests

```bash
npm run test
```

## Notes

This project uses Vite instead of Webpack/Babel, and it is configured for a modern React + TypeScript development workflow.
