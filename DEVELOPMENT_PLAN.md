# Development Plan - Yashveer Personal Website

## 🎯 Overview
This document outlines the step-by-step development plan for building Yashveer's personal website. Each step should be completed, tested, and committed to GitHub before moving to the next.

## 📋 Phase 1: Foundation & Core Pages

### Step 1: Project Setup & Types ✅ COMPLETED
- [x] Next.js project with TypeScript
- [x] Tailwind CSS v3 with design system
- [x] shadcn/ui components
- [x] Theme provider (dark/light)
- [x] Liquid design aesthetic (glass morphism)
- [x] Basic layout with navigation
- [x] Hero component
- [x] Homepage with project cards

### Step 2: Content Types & Data Structure
- [ ] Create `src/types/content.ts` with all interfaces
- [ ] Create `src/data/` directory
- [ ] Add sample data files (projects, ventures, lessons, timeline, testimonials)
- [ ] Test data imports and types

### Step 3: Core Components
- [ ] `ProjectCard.tsx` - Reusable project display component
- [ ] `VentureTile.tsx` - Venture showcase component
- [ ] `TimelineMap.tsx` - Interactive timeline component
- [ ] `StatChips.tsx` - Statistics display component
- [ ] `CTABar.tsx` - Call-to-action component
- [ ] `LessonCard.tsx` - Teaching lesson component
- [ ] `Testimonial.tsx` - Testimonial display component

### Step 4: Projects Page
- [ ] `src/app/projects/page.tsx` - Projects listing with filters
- [ ] Filter chips (AI, Software, Data, Mobile, Research)
- [ ] Sort dropdown (Impact, Recency)
- [ ] Grid layout with ProjectCard components
- [ ] Responsive design and accessibility

### Step 5: Project Case Study Pages
- [ ] `src/app/projects/[slug]/page.tsx` - Dynamic project pages
- [ ] Project data fetching by slug
- [ ] Layout: Hero → Problem → Constraints → Process → Results → Lessons
- [ ] QuickFacts sidebar
- [ ] "See code" CTA if repo present

### Step 6: Ventures Page
- [ ] `src/app/ventures/page.tsx` - Ventures showcase
- [ ] VentureTile components for BetWise and AI Investor Platform
- [ ] Mission, traction metrics, roadmap
- [ ] "Get involved" CTAs

### Step 7: Blog System
- [ ] `src/app/blog/page.tsx` - Blog index with channel tabs
- [ ] Channel tabs (AI, Quantum, Investing, Build Logs)
- [ ] Blog card components with TL;DR
- [ ] `src/app/blog/[slug]/page.tsx` - Individual blog posts
- [ ] Frontmatter parsing for blog metadata

### Step 8: Teaching Page
- [ ] `src/app/teaching/page.tsx` - Teaching lessons index
- [ ] LessonCard components with difficulty badges
- [ ] `src/app/teaching/[slug]/page.tsx` - Individual lesson pages
- [ ] Video/code embed support

### Step 9: Story/Timeline Page
- [ ] `src/app/story/page.tsx` - Personal story with timeline
- [ ] TimelineMap component with horizontal scroll
- [ ] City selection with map cards
- [ ] "Lessons learned" display

### Step 10: Résumé Page
- [ ] `src/app/resume/page.tsx` - Résumé display
- [ ] PDF embed with download button
- [ ] Plaintext fallback for accessibility
- [ ] Contact information

## 📋 Phase 2: Advanced Features

### Step 11: Supabase Integration
- [ ] Set up Supabase project
- [ ] Database schema (projects, ventures, lessons, posts)
- [ ] Data provider with fallback to local files
- [ ] Environment variables setup

### Step 12: Enhanced Components
- [ ] Search functionality
- [ ] Advanced filtering
- [ ] Pagination for large lists
- [ ] Loading states and error boundaries

### Step 13: Performance & SEO
- [ ] Image optimization
- [ ] Meta tags and Open Graph
- [ ] Sitemap generation
- [ ] Performance monitoring

### Step 14: Testing
- [ ] Unit tests for components
- [ ] Integration tests for pages
- [ ] E2E tests for critical flows
- [ ] Accessibility testing

## 📋 Phase 3: Polish & Launch

### Step 15: Content & Copy
- [ ] Finalize all content
- [ ] SEO optimization
- [ ] Meta descriptions
- [ ] Social media assets

### Step 16: Deployment
- [ ] Vercel deployment setup
- [ ] Environment variables
- [ ] Domain configuration
- [ ] Analytics setup

### Step 17: Final Testing
- [ ] Cross-browser testing
- [ ] Mobile responsiveness
- [ ] Performance audit
- [ ] Security review

## 🚀 Development Workflow

### For Each Step:
1. **Plan**: Review requirements and design
2. **Implement**: Build the feature
3. **Test**: Ensure functionality works
4. **Commit**: Push to GitHub with descriptive message
5. **Document**: Update README if needed

### Git Commit Convention:
- `feat: add projects page with filtering`
- `feat: implement project case study pages`
- `feat: add ventures showcase`
- `feat: create blog system with MDX`
- `feat: add teaching lessons page`
- `feat: implement timeline/story page`
- `feat: add résumé page with PDF embed`
- `feat: integrate Supabase database`
- `test: add component tests`
- `fix: resolve accessibility issues`
- `docs: update README and documentation`

## 🎨 Design System Checklist

### Colors (CSS Variables):
- [x] Light theme tokens
- [x] Dark theme tokens
- [x] Semantic color usage

### Components:
- [x] Glass morphism surfaces
- [x] Liquid design aesthetic
- [x] Consistent spacing
- [x] Typography scale
- [x] Focus states

### Accessibility:
- [ ] Keyboard navigation
- [ ] Screen reader support
- [ ] Color contrast (AA)
- [ ] Focus indicators
- [ ] Semantic HTML

## 📊 Success Metrics

### Technical:
- [ ] Lighthouse score > 90
- [ ] Core Web Vitals optimized
- [ ] 100% TypeScript coverage
- [ ] All tests passing
- [ ] No console errors

### User Experience:
- [ ] Fast loading times (< 3s)
- [ ] Mobile responsive
- [ ] Intuitive navigation
- [ ] Clear call-to-actions
- [ ] Professional appearance

### Content:
- [ ] All pages populated
- [ ] SEO optimized
- [ ] Social sharing ready
- [ ] Contact information accessible
- [ ] Portfolio showcases work effectively

---

**Next Step**: Step 2 - Content Types & Data Structure
