// ============================================================
// SINGLE SOURCE OF TRUTH — Edit here, reflects everywhere
// ============================================================

export const personal = {
  name: "Vaibhav Kumar",
  firstName: "Vaibhav",
  lastName: "Kumar",
  role: "Senior Software Engineer",
  tagline: "Building interfaces that scale",
  bio: "I architect enterprise-grade web applications with a focus on performance, accessibility, and developer experience. Currently leading frontend initiatives at Kfintech.",
  location: "Hyderabad, India",
  yearsExp: "4+",
  email: "vaibhavkumarswe@gmail.com",
  github: "https://github.com/vaibhavkumarswe",
  linkedin: "https://linkedin.com/in/vaibhavkumarswe",
  leetcode: "https://leetcode.com/u/vaibhavkumarswe",
  website: "https://vaibhavkumar.in",
  availableStatus: "Open to Opportunities",
  year: 2026,
};

export const stats = [
  { value: "4+", label: "Years" },
  { value: "50+", label: "Projects" },
  { value: "100K+", label: "Users" },
];

export const experiences = [
  {
    role: "Senior Software Engineer",
    company: "WebileApps (Kfintech)",
    domain: "Fintech",
    location: "Hyderabad, India",
    period: "Mar 2025 – Present",
    isCurrent: true,
    highlights: [
      "Led frontend architecture using React.js, TypeScript, Redux, and MUI for a Wealth Management System serving 100,000+ users.",
      "Built role-based access control (RBAC) for 4+ user roles.",
      "Developed 15+ reusable, prop-driven UI components, improving development speed and maintainability.",
      "Improved Core Web Vitals (LCP, INP) by 15% through performance optimization.",
      "Mentored 4 junior engineers, resulting in a 30% reduction in post-release defects.",
    ],
    techStack: ["React.js", "TypeScript", "Redux", "MUI"],
  },
  {
    role: "Senior Frontend Developer",
    company: "Swift Security (Concentric AI)",
    domain: "AI SaaS",
    location: "US, Remote",
    period: "Oct 2024 – Mar 2025",
    isCurrent: false,
    highlights: [
      "Engineered a secure browser extension using Plasmo, React.js, TypeScript.",
      "Implemented content script injection to track 100% of LLM interactions.",
      "Intercepted and controlled events across ChatGPT, Claude, and Gemini.",
      "Built data protection features including data masking and screenshot capture.",
    ],
    techStack: ["React.js", "TypeScript", "Plasmo", "Chrome APIs"],
  },
  {
    role: "Software Developer",
    company: "TCS (Client: Pfizer Inc.)",
    domain: "Healthcare",
    location: "Kolkata, India",
    period: "Jan 2022 – Sep 2024",
    isCurrent: false,
    highlights: [
      "Spearheaded a modular UI library of 30+ reusable React components for a Healthcare DMP.",
      "Implemented pagination, filtering, and search using query-based REST APIs.",
      "Increased feature delivery velocity by 20% through optimized Agile sprint workflows.",
    ],
    techStack: ["React.js", "Tailwind CSS", "REST APIs"],
  },
  {
    role: "Frontend Developer (Intern)",
    company: "Ayushya Healthcare",
    domain: "Healthcare",
    location: "Mumbai, India",
    period: "Jun 2021 – Dec 2021",
    isCurrent: false,
    highlights: [
      "Advanced website SEO through HTML and CSS optimizations, achieving top Google search rankings.",
      "Refined UI/UX using HTML5 and CSS3, enhancing page responsiveness and accessibility.",
    ],
    techStack: ["HTML5", "CSS3", "JavaScript"],
  },
];

export const projects = [
  {
    tag: "saas",
    title: "AcadEx",
    description:
      "Academy Management System with RBAC for 6+ roles, payment processing, and AI-driven features.",
    longDescription:
      "Full-stack Academy Management System featuring role-based access control for 6+ user types (admin, teacher, student, parent, accountant, librarian). Includes automated payment processing, AI-powered analytics, attendance tracking, and a comprehensive dashboard for institutional management.",
    techStack: ["React.js", "TypeScript", "Redux Toolkit", "React Router"],
    github: "https://github.com/vaibhavkumarswe/acadex",
    featured: true,
    metrics: ["6+ RBAC roles", "AI-driven features", "Payment processing"],
  },
  {
    tag: "web",
    title: "InspectCode",
    description:
      "Centralized developer resource platform with 30+ code snippets, blogs, and AI solutions.",
    longDescription:
      "A comprehensive developer resource hub featuring curated code snippets, technical blog posts, and AI-powered coding solutions. Built with a focus on searchability and developer experience, serving as a go-to reference for engineering teams.",
    techStack: ["React.js", "TypeScript", "shadcn/ui"],
    github: "https://github.com/vaibhavkumarswe/inspectcode",
    featured: true,
    metrics: ["30+ snippets", "Blog platform", "AI solutions"],
  },
  {
    tag: "extension",
    title: "HMR Extension",
    description:
      "Chrome extension with payload encryption/decryption, secure credential storage, and embedded chat used by 10+ engineering teams.",
    longDescription:
      "Enterprise-grade Chrome extension providing payload encryption/decryption, secure credential management, and real-time embedded chat. Adopted by 10+ engineering teams for secure development workflows with zero-trust security architecture.",
    techStack: ["HTML", "CSS", "JavaScript", "Node.js"],
    github: "https://github.com/vaibhavkumarswe/hmr-extension",
    featured: true,
    metrics: ["10+ teams", "E2E encryption", "Embedded chat"],
  },
  {
    tag: "npm",
    title: "StateMorph",
    description:
      "Zero-dependency React wrapper that eliminates loading/error/empty/success ternary hell. Published on NPM.",
    longDescription:
      "A lightweight, zero-dependency React component library that simplifies complex state rendering. Eliminates nested ternary operators for loading, error, empty, and success states. Published on NPM with comprehensive documentation and TypeScript support.",
    techStack: ["React.js", "CSS", "NPM"],
    github: "https://github.com/vaibhavkumarswe/StateMorph",
    featured: false,
    metrics: ["Zero dependencies", "NPM published", "TypeScript support"],
  },
  {
    tag: "saas",
    title: "OrderPro",
    description:
      "Full-stack B2C SaaS with automated merchant onboarding, SEO-optimized catalogs, integrated Razorpay and ShipRocket APIs.",
    longDescription:
      "End-to-end B2C e-commerce SaaS platform with automated merchant onboarding, SEO-optimized product catalogs, and seamless integration with Razorpay payment gateway and ShipRocket logistics. Features multi-tenant architecture and real-time order tracking.",
    techStack: ["React.js", "TypeScript", "MUI", "Tailwind CSS"],
    github: "#",
    featured: true,
    metrics: ["Multi-tenant", "Razorpay integration", "ShipRocket APIs"],
  },
];

export const leadership = [
  { value: "4+", label: "Engineers Mentored", description: "Guided junior developers through code reviews and pair programming" },
  { value: "500+", label: "PRs Reviewed", description: "Ensuring code quality and best practices across the team" },
  { value: "30%", label: "Defects Reduced", description: "Through improved testing and code review processes" },
  { value: "45%", label: "Team Velocity", description: "Increased through better tooling and processes" },
];

export const capabilities = [
  {
    title: "Frontend",
    description: "React.js, TypeScript, Redux, Tailwind CSS, MUI. Component-driven architecture with design systems.",
    detail: "15+ production apps",
  },
  {
    title: "Performance",
    description: "Core Web Vitals optimization, code splitting, lazy loading, memoization, and caching strategies.",
    detail: "90+ Lighthouse",
  },
  {
    title: "Backend",
    description: "Node.js, Express.js, MongoDB, REST APIs. Serverless and edge computing.",
    detail: "99.9% uptime",
  },
  {
    title: "Architecture",
    description: "RBAC systems, browser extensions, CI/CD pipelines, Docker, Kubernetes, and scalable SaaS platforms.",
    detail: "100K+ users served",
  },
];

export const skills = {
  languages: ["TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Python"],
  frameworks: ["React.js", "Next.js", "Redux Toolkit", "Tailwind CSS", "MUI", "shadcn/ui"],
  tools: ["Git", "Docker", "Kubernetes", "Webpack", "Vite", "Plasmo"],
  practices: ["CI/CD", "Agile/Scrum", "TDD", "Code Reviews", "Design Systems", "RBAC"],
  databases: ["MongoDB", "PostgreSQL", "Firebase", "Supabase"],
  cloud: ["AWS", "Vercel", "Netlify", "Cloudflare"],
};

export const processSteps = [
  { num: "01", title: "Discover", description: "Understanding vision and requirements." },
  { num: "02", title: "Design", description: "Crafting the technical approach." },
  { num: "03", title: "Build", description: "Clean, scalable implementation." },
  { num: "04", title: "Ship", description: "Deploy and iterate." },
];

export const education = [
  {
    degree: "Bachelor of Technology",
    field: "Computer Science & Engineering",
    institution: "University",
    period: "2018 – 2022",
  },
];

export const navLinks = [
  { label: "Home", path: "/" },
  { label: "Experience", path: "/experience" },
  { label: "Projects", path: "/projects" },
  { label: "Blog", path: "/blog" },
  { label: "Skills", path: "/skills" },
  { label: "Contact", path: "/contact" },
];

export const blogPosts = [
  {
    date: "Mar 2026",
    title: "Building Scalable Design Systems with React & TypeScript",
    excerpt: "How I architected a component library serving 100K+ users with zero-config theming, accessibility baked in, and tree-shaking support.",
    slug: "scalable-design-systems",
    tags: ["React", "TypeScript", "Design Systems"],
    readTime: "8 min",
    content: [
      { type: "paragraph" as const, text: "Design systems are the backbone of any serious frontend operation. After building and maintaining component libraries across three companies, I've learned that the difference between a design system that gets adopted and one that gets ignored comes down to developer experience." },
      { type: "heading" as const, text: "The Problem with Most Design Systems" },
      { type: "paragraph" as const, text: "Most design systems fail because they prioritize pixel-perfect consistency over developer ergonomics. Engineers don't want to read 40 pages of documentation to use a button component. They want to import it, pass some props, and move on." },
      { type: "paragraph" as const, text: "At Kfintech, we serve 100K+ users across a wealth management platform. Our design system needed to handle complex form layouts, data tables with millions of rows, and real-time dashboards — all while maintaining consistent theming across 15+ micro-applications." },
      { type: "heading" as const, text: "Architecture Decisions That Mattered" },
      { type: "paragraph" as const, text: "We chose a compound component pattern with TypeScript generics for type-safe composition. Each component exposes a clean public API while keeping internal state management hidden. This lets teams compose complex UIs without understanding the implementation details." },
      { type: "code" as const, text: "// Compound component pattern\n<DataTable<User> data={users} columns={columns}>\n  <DataTable.Header sticky />\n  <DataTable.Body virtualized />\n  <DataTable.Pagination pageSize={50} />\n</DataTable>" },
      { type: "paragraph" as const, text: "For theming, we used CSS custom properties with a TypeScript token system. Themes are just JSON objects that get validated at build time — no runtime errors from typos in color names." },
      { type: "heading" as const, text: "Results" },
      { type: "paragraph" as const, text: "After 6 months, our design system reduced new feature development time by 35%. The component library has 15+ production components, each with full accessibility support (WCAG 2.1 AA), comprehensive Storybook documentation, and zero-config dark mode." },
      { type: "paragraph" as const, text: "The key takeaway: build for the developer who will use your system at 2 AM during an incident. Make it obvious, make it fast, make it hard to misuse." },
    ],
  },
  {
    date: "Feb 2026",
    title: "The Art of Performance: Core Web Vitals in Production",
    excerpt: "Practical strategies that improved LCP by 40% and INP by 60% across a fintech platform — code splitting, lazy hydration, and beyond.",
    slug: "core-web-vitals-production",
    tags: ["Performance", "Web Vitals", "React"],
    readTime: "12 min",
    content: [
      { type: "paragraph" as const, text: "Performance isn't a feature — it's a prerequisite. When your fintech platform processes real money for real people, every millisecond of delay erodes trust. Here's how we systematically improved Core Web Vitals across our wealth management platform." },
      { type: "heading" as const, text: "Measuring What Matters" },
      { type: "paragraph" as const, text: "Before optimizing anything, we instrumented our application with real user monitoring (RUM). Lab metrics lie — they tell you how fast your app could be on a developer's MacBook Pro. Field data tells you how fast it actually is for a user on a 3-year-old Android phone in Tier 2 India." },
      { type: "paragraph" as const, text: "Our baseline was painful: LCP at 4.2s (should be <2.5s), INP at 380ms (should be <200ms), and CLS at 0.18 (should be <0.1). We were failing on all three." },
      { type: "heading" as const, text: "The LCP Fix: Route-Level Code Splitting" },
      { type: "paragraph" as const, text: "Our biggest LCP win came from aggressive route-level code splitting with React.lazy and Suspense. We went from a 2.1MB initial bundle to 380KB. The trick was identifying which components were truly needed for the initial render versus which could be deferred." },
      { type: "code" as const, text: "// Before: Everything loaded upfront\nimport Dashboard from './Dashboard';\nimport Analytics from './Analytics';\n\n// After: Load on demand\nconst Dashboard = lazy(() => import('./Dashboard'));\nconst Analytics = lazy(() => import(\n  /* webpackPrefetch: true */ './Analytics'\n));" },
      { type: "heading" as const, text: "INP: Death by a Thousand Event Handlers" },
      { type: "paragraph" as const, text: "INP was our hardest problem. It turned out that our data tables were re-rendering 200+ rows on every keystroke in the search input. We fixed this with virtualization (react-window), debounced search, and moving expensive computations to Web Workers." },
      { type: "paragraph" as const, text: "The result: LCP dropped to 1.8s (-57%), INP to 150ms (-60%), and CLS to 0.04 (-78%). Our Lighthouse score went from 62 to 94." },
      { type: "heading" as const, text: "Lessons Learned" },
      { type: "paragraph" as const, text: "Performance optimization is not a one-time project — it's a culture. We added performance budgets to our CI pipeline, automated Lighthouse checks on every PR, and created a 'performance champion' rotation where one engineer per sprint focuses exclusively on metrics." },
    ],
  },
  {
    date: "Jan 2026",
    title: "RBAC Done Right: Role-Based Access in Modern SPAs",
    excerpt: "A deep dive into implementing secure, scalable role-based access control for React applications with 6+ user roles.",
    slug: "rbac-modern-spas",
    tags: ["Security", "RBAC", "Architecture"],
    readTime: "10 min",
    content: [
      { type: "paragraph" as const, text: "Role-based access control sounds simple until you have 6 user roles, 40+ permissions, and a React SPA that needs to hide/show UI elements, protect routes, and validate API calls — all without becoming a maintenance nightmare." },
      { type: "heading" as const, text: "The Naive Approach (And Why It Fails)" },
      { type: "paragraph" as const, text: "Most tutorials show you something like `if (user.role === 'admin')`. This breaks down immediately when roles overlap, permissions are granular, or business rules change. You end up with role checks scattered across 200 components." },
      { type: "heading" as const, text: "Permission-Based Architecture" },
      { type: "paragraph" as const, text: "Instead of checking roles directly, we created a permission system. Roles map to permission sets. Components check permissions, not roles. This means adding a new role is a configuration change, not a code change." },
      { type: "code" as const, text: "// Permission-based approach\nconst permissions = {\n  admin: ['read', 'write', 'delete', 'manage_users'],\n  teacher: ['read', 'write', 'manage_students'],\n  student: ['read', 'submit_assignments'],\n};\n\n// In components\n<Can permission=\"manage_users\">\n  <UserManagement />\n</Can>" },
      { type: "paragraph" as const, text: "We built a custom `Can` component and `usePermission` hook that checks the current user's permissions against required permissions. The permission context is populated once on login and cached — no repeated API calls." },
      { type: "heading" as const, text: "Server-Side Validation is Non-Negotiable" },
      { type: "paragraph" as const, text: "Client-side RBAC is for UX, not security. Every API endpoint validates permissions independently. The frontend hides the 'Delete' button from non-admins, but the backend rejects the request even if someone crafts it manually. Never trust the client." },
      { type: "paragraph" as const, text: "This architecture has scaled cleanly from 3 roles to 6+ roles across our academy management system (AcadEx) without any structural changes to the permission layer." },
    ],
  },
  {
    date: "Dec 2025",
    title: "Browser Extensions with Plasmo: A Senior Engineer's Guide",
    excerpt: "Lessons learned building enterprise Chrome extensions — content script injection, payload encryption, and cross-origin communication.",
    slug: "browser-extensions-plasmo",
    tags: ["Chrome Extensions", "Plasmo", "Security"],
    readTime: "15 min",
    content: [
      { type: "paragraph" as const, text: "Building a Chrome extension that intercepts LLM interactions across ChatGPT, Claude, and Gemini taught me more about browser security than any textbook. Here's a practical guide from the trenches." },
      { type: "heading" as const, text: "Why Plasmo?" },
      { type: "paragraph" as const, text: "Plasmo is to Chrome extensions what Next.js is to React apps. It handles the manifest generation, hot reloading, and build pipeline so you can focus on the actual extension logic. We went from a raw Webpack setup (painful) to Plasmo and cut our build configuration by 80%." },
      { type: "heading" as const, text: "Content Script Injection: The Hard Part" },
      { type: "paragraph" as const, text: "Our extension needed to monitor LLM interactions in real-time. This meant injecting content scripts into ChatGPT, Claude, and Gemini — each with different DOM structures, event systems, and content security policies." },
      { type: "code" as const, text: "// Intercepting fetch requests in content scripts\nconst originalFetch = window.fetch;\nwindow.fetch = async (...args) => {\n  const response = await originalFetch(...args);\n  const clone = response.clone();\n  // Process the response without blocking\n  processLLMResponse(clone, args[0]);\n  return response;\n};" },
      { type: "paragraph" as const, text: "The biggest challenge was handling streaming responses. ChatGPT uses Server-Sent Events, Claude uses their own streaming format, and Gemini has yet another approach. We built an adapter pattern that normalizes all three into a unified stream interface." },
      { type: "heading" as const, text: "Payload Encryption" },
      { type: "paragraph" as const, text: "All intercepted data is encrypted before leaving the extension. We use AES-256-GCM for payload encryption with keys derived from the user's credentials via PBKDF2. The extension never stores plaintext data — even in chrome.storage.local." },
      { type: "paragraph" as const, text: "The extension is now used by 10+ engineering teams for secure development workflows. The key insight: treat browser extensions like backend services — they handle sensitive data and need the same security rigor." },
    ],
  },
  {
    date: "Nov 2025",
    title: "Why I Stopped Using Redux (And When I Still Do)",
    excerpt: "After 4 years of Redux, here's my honest take on state management in 2025 — Zustand, Jotai, React Query, and when Redux Toolkit still wins.",
    slug: "redux-state-management-2025",
    tags: ["Redux", "State Management", "React"],
    readTime: "7 min",
    content: [
      { type: "paragraph" as const, text: "I've been a Redux power user for 4 years. I've built entire applications on Redux Toolkit, written custom middleware, and debugged time-travel replays at 3 AM. And yet, for my last three projects, I didn't use Redux at all." },
      { type: "heading" as const, text: "The Redux Tax" },
      { type: "paragraph" as const, text: "Redux isn't bad — it's expensive. Every feature requires a slice, selectors, actions, and often thunks or sagas. For a CRUD app, that's a lot of boilerplate for what amounts to 'fetch data, show data, update data'." },
      { type: "paragraph" as const, text: "React Query (now TanStack Query) eliminated 70% of our Redux usage overnight. Server state doesn't belong in a client-side store — it belongs in a cache with automatic invalidation, background refetching, and optimistic updates." },
      { type: "heading" as const, text: "When Redux Still Wins" },
      { type: "paragraph" as const, text: "Redux excels at complex client-side state with many interdependencies. Our wealth management dashboard has interconnected filters, real-time portfolio calculations, and undo/redo for trade simulations. This is genuinely complex client state that benefits from Redux's predictable update model." },
      { type: "code" as const, text: "// Redux still wins here\ndispatch(simulateTrade({ symbol: 'AAPL', qty: 100 }));\n// Updates: portfolio value, risk metrics, tax implications,\n// margin requirements, and 12 dependent UI components\n// All predictable. All debuggable. All replayable." },
      { type: "heading" as const, text: "My Current Stack" },
      { type: "paragraph" as const, text: "For most projects: React Query for server state, Zustand for simple client state, and Redux Toolkit only when I need middleware, time-travel debugging, or complex state machines. The right tool for the right job — not one tool for every job." },
    ],
  },
  {
    date: "Oct 2025",
    title: "From TCS to FAANG-Ready: My Frontend Engineering Journey",
    excerpt: "How I went from building HTML pages at an internship to leading frontend architecture at a fintech serving 100K+ users.",
    slug: "frontend-engineering-journey",
    tags: ["Career", "Growth", "Engineering"],
    readTime: "6 min",
    content: [
      { type: "paragraph" as const, text: "Four years ago, I was optimizing meta tags and fixing CSS layout issues at a healthcare startup in Mumbai. Today, I lead frontend architecture for a wealth management platform serving 100,000+ users. Here's what I learned along the way." },
      { type: "heading" as const, text: "Phase 1: The Foundation (Internship)" },
      { type: "paragraph" as const, text: "My internship at Ayushya Healthcare taught me something most coding bootcamps skip: the fundamentals matter. I spent 6 months doing 'boring' work — semantic HTML, CSS specificity battles, basic JavaScript DOM manipulation. It felt unglamorous, but it built intuition that still serves me today." },
      { type: "heading" as const, text: "Phase 2: The Enterprise (TCS/Pfizer)" },
      { type: "paragraph" as const, text: "At TCS, working on Pfizer's healthcare data management platform, I learned what 'production' really means. It's not about making things work — it's about making things work reliably, at scale, with proper error handling, logging, and monitoring. I built 30+ reusable React components and learned that code review is where the real learning happens." },
      { type: "heading" as const, text: "Phase 3: The Deep End (Concentric AI)" },
      { type: "paragraph" as const, text: "Moving to a US-based AI security startup was terrifying and transformative. I was building Chrome extensions that intercept LLM interactions — a domain with almost no Stack Overflow answers. I learned to read source code, browser APIs documentation, and Chrome extension manifests like novels." },
      { type: "heading" as const, text: "Phase 4: The Leadership (Kfintech)" },
      { type: "paragraph" as const, text: "Now at Kfintech, I mentor 4 junior engineers, review 500+ PRs, and make architecture decisions that affect 100K+ users. The technical skills got me here, but the soft skills — communication, mentorship, knowing when to say 'no' to tech debt — are what make the role sustainable." },
      { type: "paragraph" as const, text: "The biggest lesson: your career isn't a sprint. Every 'boring' project, every CSS bug, every code review builds the foundation for what comes next." },
    ],
  },
  {
    date: "Sep 2025",
    title: "Micro-Frontends: When Monoliths Fight Back",
    excerpt: "A practical breakdown of micro-frontend architecture — module federation, shared dependencies, and the hidden costs nobody talks about.",
    slug: "micro-frontends-practical-guide",
    tags: ["Architecture", "Micro-Frontends", "Webpack"],
    readTime: "11 min",
    content: [
      { type: "paragraph" as const, text: "Everyone loves the idea of micro-frontends. Independent deployments! Team autonomy! Technology diversity! But after implementing micro-frontend architecture for a multi-tenant SaaS platform, I have opinions. Strong ones." },
      { type: "heading" as const, text: "The Promise" },
      { type: "paragraph" as const, text: "Micro-frontends promise to solve organizational scaling problems. When you have 5 teams working on the same frontend, merge conflicts and coordination overhead become the bottleneck — not the code itself. Micro-frontends let each team own their slice of the UI independently." },
      { type: "heading" as const, text: "The Reality" },
      { type: "paragraph" as const, text: "What nobody tells you: shared dependencies are a nightmare. When App A uses React 18.2 and App B uses React 18.3, you either ship two versions of React (bloat) or force everyone to upgrade simultaneously (defeats the purpose). We solved this with Webpack Module Federation's shared scope, but it required careful version pinning and extensive testing." },
      { type: "code" as const, text: "// Module Federation config\nnew ModuleFederationPlugin({\n  name: 'dashboard',\n  shared: {\n    react: { singleton: true, requiredVersion: '^18.2.0' },\n    'react-dom': { singleton: true, requiredVersion: '^18.2.0' },\n    // Shared design system — the glue\n    '@company/ui': { singleton: true, eager: true },\n  },\n});" },
      { type: "heading" as const, text: "When to Actually Use Them" },
      { type: "paragraph" as const, text: "Use micro-frontends when: you have 4+ teams, different release cadences, and genuinely independent features. Don't use them when: you have a small team, tightly coupled features, or you're just trying to be 'modern'. A well-structured monolith with module boundaries beats a poorly implemented micro-frontend every time." },
      { type: "paragraph" as const, text: "The meta-lesson: architecture decisions should be driven by organizational needs, not technology trends. Conway's Law is real." },
    ],
  },
  {
    date: "Aug 2025",
    title: "Zero-Dependency React Components: The StateMorph Story",
    excerpt: "How I built and published an NPM package that eliminates loading/error/empty state ternary hell — design decisions and trade-offs.",
    slug: "zero-dependency-statemorph",
    tags: ["NPM", "Open Source", "React"],
    readTime: "9 min",
    content: [
      { type: "paragraph" as const, text: "Every React developer has written this code: `isLoading ? <Spinner /> : error ? <Error /> : data.length === 0 ? <Empty /> : <Content />`. It's ugly, error-prone, and gets worse with every new state. StateMorph eliminates this pattern entirely." },
      { type: "heading" as const, text: "The Problem" },
      { type: "paragraph" as const, text: "Conditional rendering in React is deceptively complex. A simple data fetch has at least 4 states: loading, error, empty, and success. Add pagination, filtering, and optimistic updates, and you're looking at a ternary tree that would make a computer science professor weep." },
      { type: "code" as const, text: "// Before StateMorph — the ternary nightmare\n{isLoading ? (\n  <Skeleton />\n) : error ? (\n  <Error message={error} retry={refetch} />\n) : !data?.length ? (\n  <Empty action={openCreateModal} />\n) : (\n  <DataGrid data={data} />\n)}\n\n// After StateMorph — declarative and clean\n<StateMorph\n  loading={isLoading}\n  error={error}\n  empty={!data?.length}\n  onLoading={<Skeleton />}\n  onError={(e) => <Error message={e} />}\n  onEmpty={<Empty />}\n>\n  <DataGrid data={data} />\n</StateMorph>" },
      { type: "heading" as const, text: "Design Decisions" },
      { type: "paragraph" as const, text: "Zero dependencies was non-negotiable. Every dependency is a liability — a potential breaking change, a security vulnerability, a bundle size increase. StateMorph is pure React with TypeScript generics for type-safe error handling." },
      { type: "paragraph" as const, text: "We chose a component API over a hook API because state rendering is inherently visual — it maps naturally to JSX composition rather than imperative logic." },
      { type: "heading" as const, text: "Publishing on NPM" },
      { type: "paragraph" as const, text: "Publishing an NPM package taught me more about build tooling than any project. ESM and CJS dual builds, proper TypeScript declaration files, tree-shaking support, semantic versioning, and comprehensive README documentation. The code is 20% of the work — the ecosystem integration is the other 80%." },
      { type: "paragraph" as const, text: "StateMorph is open source on GitHub. If you're tired of ternary hell, give it a try." },
    ],
  },
];

export const commandActions = [
  { label: "Send Email", shortcut: "E", href: `mailto:${personal.email}` },
  { label: "View GitHub", shortcut: "G", href: personal.github },
  { label: "LinkedIn", shortcut: "L", href: personal.linkedin },
  { label: "Download CV", shortcut: "D", href: "#" },
];
