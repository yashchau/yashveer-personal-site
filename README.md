# Yashveer Chauhan - Personal Website

A modern, story-first portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a "Liquid" design aesthetic inspired by Apple's design language with glass morphism, depth, and translucency.

## 🎯 Project Overview

**Primary Audience:** Recruiters & funders → fast proof of capabilities
**Secondary Audience:** Collaborators and learners

**Design DNA:** Apple "Liquid" feel (depth, translucency, gentle gloss) + personal story (military moves → adaptability)
- **Indigo tech core** - Primary brand color
- **Cyan/plum glow** - Secondary accents  
- **Warm amber highlights** - Call-to-action elements

## 🏗️ Tech Stack

- **Framework:** Next.js 15.4.6 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v3 + CSS Variables
- **UI Components:** shadcn/ui
- **Content:** MDX for blog/teaching content
- **Database:** Supabase (auth/db/storage) - Ready for integration
- **Deployment:** Vercel (recommended)
- **Package Manager:** pnpm

## 🚀 Quick Start

### Prerequisites

- Node.js 20+
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yashchau/yashveer-personal-site.git
   cd yashveer-personal-site
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with theme provider
│   ├── page.tsx           # Homepage
│   ├── projects/          # Projects listing & details
│   └── globals.css        # Design system & liquid surfaces
├── components/            # Reusable UI components
│   ├── ui/               # shadcn/ui components
│   ├── Hero.tsx          # Hero section
│   ├── ProjectCard.tsx   # Project display
│   └── ...
├── data/                 # Sample content files
├── types/                # TypeScript interfaces
└── lib/                  # Utility functions
```

## 🎨 Design System

### Color Tokens

**Light Theme:**
- `bg`: #F8FAFC (Background)
- `surface`: #FFFFFF (Surface elements)
- `text`: #0B1220 (Primary text)
- `muted`: #334155 (Muted text)
- `primary`: #2F3C7E (Indigo tech core)
- `secondary`: #0FB5FF (Cyan glow)
- `accent`: #6E44FF (Plum glow)
- `highlight`: #FFB400 (Warm amber)

**Dark Theme:**
- `bg`: #0B1220 (Background)
- `surface`: #0F172A (Surface elements)
- `text`: #E5EDF8 (Primary text)
- `muted`: #A3B1C6 (Muted text)
- `primary`: #9FB3FF (Indigo tech core)
- `secondary`: #5BD7FF (Cyan glow)
- `accent`: #C3B6FF (Plum glow)
- `highlight`: #FFD166 (Warm amber)

### Components

- App Shell (sticky nav, glass morphism)
- Hero Section
- Timeline Map (cities lived)
- Project Card + Case Study
- Venture Tile (BetWise, AI Investor Platform)
- Blog Card (with TL;DR)
- Teaching Module (lesson card)
- CTA Bar, Testimonial, Contact Card

## 🎯 Current Features

### ✅ Working Pages
1. **Homepage** (`/`) - Complete with hero, stats, projects, ventures, testimonials, and CTA
2. **Projects** (`/projects`) - Filterable and sortable project grid
3. **Project Details** (`/projects/[slug]`) - Individual project case studies
4. **Navigation** - Working navigation between pages

### ✅ Interactive Features
- Dark/light theme toggle (system preference detection)
- Project filtering by tags (AI, Software, Data, Mobile, Research)
- Project sorting (Recency, Impact)
- Interactive timeline map with city selection
- Responsive design for mobile and desktop

### ✅ Data & Content
- 3 sample projects with full details
- 2 ventures (BetWise, AI Investor Platform)
- 3 teaching lessons
- 2 testimonials
- 10 timeline stops (cities lived)
- 4 stat chips (key metrics)

## 🔧 Technical Implementation

### ✅ Code Quality
- TypeScript strict mode
- ESLint configuration
- Prettier formatting
- Proper component structure
- Semantic HTML
- Accessibility considerations

### ✅ Performance
- Next.js App Router
- Static generation where possible
- Optimized builds
- Efficient component rendering

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your GitHub repository**
   - Go to [Vercel](https://vercel.com)
   - Import your GitHub repository: `yashchau/yashveer-personal-site`

2. **Configure environment variables** (optional)
   - Add Supabase environment variables if using database integration

3. **Deploy**
   - Vercel will automatically deploy on push to `main`

### Manual Deployment

```bash
pnpm build
pnpm start
```

## 📚 Documentation

- **[Design Specifications](./docs/design-spec.md)** - Detailed design system and component guidelines
- **[Agent Rules](./docs/agent-rules.md)** - Development guidelines and best practices
- **[Supabase Setup](./docs/supabase-setup.md)** - Database integration guide
- **[Development Plan](./DEVELOPMENT_PLAN.md)** - Step-by-step development roadmap
- **[Current Status](./CURRENT_STATUS.md)** - Feature completion status

## 🎯 Next Steps

### Phase 2: Additional Pages
- [ ] Ventures page (`/ventures`)
- [ ] Blog system (`/blog`)
- [ ] Teaching page (`/teaching`)
- [ ] Story/Timeline page (`/story`)
- [ ] Résumé page (`/resume`)

### Phase 3: Advanced Features
- [ ] Supabase integration
- [ ] Search functionality
- [ ] Advanced filtering
- [ ] Performance optimization
- [ ] SEO optimization

## 🤝 Contributing

This is a personal portfolio website, but suggestions and improvements are welcome!

## 📄 License

This project is private and proprietary.

---

**Built with ❤️ by Yashveer Chauhan**

**Repository:** [https://github.com/yashchau/yashveer-personal-site](https://github.com/yashchau/yashveer-personal-site)
