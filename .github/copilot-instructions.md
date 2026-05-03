# VestezenGames Site - AI Coding Agent Instructions

## Architecture Overview
This is a **React 19 + TypeScript + Vite marketing website** for VestezenGames. It uses:
- **Router**: React Router v7 (SPA with 4 pages: Home, About, Privacy Policy, Terms of Service)
- **Styling**: Plain CSS in separate files per component/page (not CSS-in-JS)
- **Build**: Vite + TypeScript compilation, SWC for Fast Refresh
- **Icons**: react-icons library for UI elements

## Key Directory Structure
```
src/
├── pages/          # Route pages (Home.tsx, About.tsx, PrivacyPolicy.tsx, TermsOfService.tsx)
├── components/     # Reusable UI components (FeatureCard, FeatureGrid, Hero, PhoneMockup, etc.)
├── layout/         # Layout wrapper (Navbar - main navigation)
├── styles/         # Global CSS (global.css, navbar.css, home.css)
├── App.tsx         # Routes definition & main app wrapper
└── main.tsx        # React DOM entry point with BrowserRouter
```

## Component Patterns

### Props & Types
- **Always use React.FC<Props>** for functional components
- Define interfaces for all component props (e.g., FeatureCardProps in [src/components/FeatureCard.tsx](src/components/FeatureCard.tsx))
- Example: Props like `title`, `description`, `tagline` are optional when marked with `?`

### Styling Approach
- Each component/page has a corresponding `.css` file in [src/styles/](src/styles/)
- CSS classes use kebab-case (e.g., `.feature-item`, `.nav-toggle`)
- Mobile-responsive nav pattern: see [src/layout/Navbar.tsx](src/layout/Navbar.tsx) for toggle state + className switching
- Global styles in [src/styles/global.css](src/styles/global.css)

### Navigation
- Use `<NavLink>` from react-router-dom (not plain `<a>` tags)
- Set `end` prop on exact match routes (e.g., `<NavLink to="/" end>`)
- Mobile menu closes with `onClick={closeMenu}` callback

## Build & Development Commands
```bash
npm run dev      # Start Vite dev server (HMR enabled)
npm run build    # TypeScript check + Vite production build
npm run lint     # Run ESLint (check for violations, no auto-fix configured)
npm run preview  # Preview production build locally
```

## TypeScript & Linting Config
- **tsconfig.json**: References tsconfig.app.json (source) and tsconfig.node.json (build tools)
- **ESLint** (eslint.config.js): Uses flat config format with:
  - typescript-eslint recommended rules
  - react-hooks/recommended
  - react-refresh/vite rules
  - Enforces React Hook conventions
- **No auto-fix on save**: Developers must run `npm run lint` manually

## External Dependencies
- **react-router-dom**: Client-side routing with `<Routes>` and `<NavLink>`
- **react-icons**: Icon components (used in UI elements)
- **react-mobile-app-button**: Mobile app button component

## Common Patterns & Conventions

### Creating New Pages
1. Create file in [src/pages/](src/pages/) (e.g., NewPage.tsx)
2. Define typed component with `React.FC` and optional props interface
3. Create matching CSS in [src/styles/](src/styles/)
4. Add route in [src/App.tsx](src/App.tsx) Routes

### Creating New Components
1. Place in [src/components/](src/components/) as functional component
2. Define props interface above component
3. Use `React.FC<Props>` type signature
4. Add CSS file to [src/styles/](src/styles/)
5. Import and use in pages or other components

### State Management
- Use React hooks only (`useState` for toggle states, e.g., mobile menu)
- No global state library; keep state local unless truly needed site-wide
- Props drilling is acceptable for this small project

## Build Output
- Production build outputs to `dist/` directory
- dist/ is gitignored; Vite handles optimization
- SWC provides Fast Refresh for dev experience

## Important Notes
- TypeScript strict mode is configured; always provide explicit types
- React.StrictMode enabled in main.tsx for dev warnings
- No tailwind/utility CSS; maintain semantic CSS conventions
- Mobile-first design pattern: see Navbar responsive behavior
