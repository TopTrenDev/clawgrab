# ClawGrab

A claw-machine style NFT collectibles web app. Drop the claw, grab packs, and reveal rare Pokémon-style NFT collectibles on Solana. Trade, hold, or sell — your luck, your call.

## Features

- **Home** — Hero, featured packs, how it works, and recent pulls
- **Packs** — Buy Starter, Gold Rush, and Legendary packs (priced in SOL) with different rarity odds
- **Marketplace** — Browse, filter, and trade NFTs won from the claw machine (rarity, price, search)
- **Leaderboard** — Top players ranked by total winnings and NFTs collected

## Tech Stack

- **Runtime** — [Vite](https://vitejs.dev/) 5, [React](https://react.dev/) 18, [TypeScript](https://www.typescriptlang.org/)
- **UI** — [shadcn/ui](https://ui.shadcn.com/) (Radix), [Tailwind CSS](https://tailwindcss.com/), [Framer Motion](https://www.framer.com/motion/), [Lucide](https://lucide.dev/) icons
- **Data & routing** — [TanStack Query](https://tanstack.com/query/latest), [React Router](https://reactrouter.com/) v6
- **Forms & validation** — [React Hook Form](https://react-hook-form.com/), [Zod](https://zod.dev/)

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm (or pnpm/yarn)

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (with HMR)
npm run dev
```

Dev server runs at **http://localhost:8080** (or the port shown in the terminal).

## Scripts

| Command | Description |
|--------|-------------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Production build |
| `npm run build:dev` | Build in development mode |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |
| `npm run test` | Run Vitest once |
| `npm run test:watch` | Run Vitest in watch mode |

## Project Structure

```
src/
├── main.tsx           # Entry, React root
├── App.tsx            # Routes, providers (Query, Router, Toaster)
├── index.css          # Global styles, Tailwind
├── pages/             # Route pages
│   ├── Index.tsx      # Home
│   ├── Packs.tsx      # Pack store
│   ├── Marketplace.tsx
│   ├── Leaderboard.tsx
│   └── NotFound.tsx
├── components/        # Shared & page-specific components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── PacksSection.tsx
│   ├── HowItWorks.tsx
│   ├── RecentPulls.tsx
│   └── ui/            # shadcn/ui primitives
├── hooks/             # Custom hooks
└── lib/               # Utilities (e.g. cn)
```

## License

Private project.
