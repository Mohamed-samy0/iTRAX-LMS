# iTRAX LMS - Enterprise Learning Management System

A production-grade Learning Management System built with Next.js 16, React 19, and TypeScript.

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Components**: Shadcn/ui (Radix Nova preset)
- **State Management**: 
  - TanStack Query (server state)
  - Zustand (client state)
- **Forms**: React Hook Form + Zod
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router (routes only)
│   ├── layout.tsx         # Root layout with providers
│   └── page.tsx           # Home page
├── features/              # Feature-based modules
│   ├── auth/             # Authentication feature
│   ├── courses/          # Course management
│   ├── dashboard/        # Dashboard views
│   └── user/             # User profile
├── components/           # Shared components
│   ├── ui/              # Shadcn components
│   └── layout/          # Layout components
├── lib/                  # Utilities & configurations
│   ├── api/             # API client setup
│   ├── hooks/           # Shared hooks
│   └── utils.ts         # Helper functions
├── types/                # TypeScript types
└── config/               # App configuration
    ├── site.ts          # Site metadata
    └── constants.ts     # App constants
```

## 🏗️ Architecture Decisions

### Feature-Based Structure
We use feature-based architecture instead of type-based (components/, pages/) because:
- **Scalability**: Each feature is self-contained
- **Team Collaboration**: Multiple developers can work without conflicts
- **Code Splitting**: Easier to lazy-load entire features
- **Maintainability**: Related code stays together

### Server vs Client Components
- **Default to Server Components** for better performance
- Use Client Components only when needed:
  - Interactive elements (onClick, onChange)
  - React hooks (useState, useEffect)
  - Browser APIs
  - Third-party libraries requiring client-side

## 🛠️ Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Format code
npm run format

# Type check
npm run type-check
```

## 📝 Code Quality

- **ESLint**: Configured with Next.js recommended rules
- **Prettier**: Enforces consistent code formatting
- **TypeScript**: Strict mode enabled for type safety

## 🎨 Styling

- **Tailwind CSS v4**: Latest version with new features
- **Shadcn/ui**: Copy-paste component system (Radix Nova preset)
- **CSS Variables**: For theming support
- **Dark Mode**: Built-in support

## 🔐 Environment Variables

Copy `.env.example` to `.env.local` and configure:

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

## 📚 Next Steps

See [CLAUDE.md](./CLAUDE.md) for the full implementation roadmap.

---

Built with ❤️ using modern web technologies
