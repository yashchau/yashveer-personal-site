# Supabase Integration Guide

## Overview
This guide explains how to integrate Supabase with your personal website for dynamic content management.

## Current Status
- **Organization:** Betwise
- **Project:** yashchau's Project (eelpigsqrlocteglfthc)
- **Status:** Inactive (needs to be restored)
- **Region:** us-west-1

## Setup Steps

### 1. Restore Supabase Project
Your existing project is currently inactive. You can restore it using:
```bash
# Using Supabase CLI or Dashboard
# Navigate to https://supabase.com/dashboard/project/eelpigsqrlocteglfthc
# Click "Restore" to reactivate the project
```

### 2. Environment Variables
Create a `.env.local` file in your project root:
```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://eelpigsqrlocteglfthc.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

### 3. Database Schema
The following tables will be created for content management:

#### Projects Table
```sql
create table projects (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  pitch text,
  role text,
  stack text[],
  tags text[],
  timeframe text,
  outcomes text[],
  repo text,
  link text,
  published boolean default true,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);
```

#### Ventures Table
```sql
create table ventures (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  mission text,
  what_it_does text,
  traction text[],
  roadmap text[],
  contact text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);
```

#### Lessons Table
```sql
create table lessons (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  difficulty text check (difficulty in ('Beginner','Intermediate','Advanced')),
  outcomes text[],
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);
```

#### Blog Posts Table
```sql
create table posts (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  tldr text,
  channel text,
  date date,
  reading_time int,
  content text,
  published boolean default true,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);
```

### 4. Supabase Client Setup
Install the Supabase client:
```bash
pnpm add @supabase/supabase-js
```

Create `src/lib/supabase.ts`:
```typescript
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
```

### 5. Data Provider Pattern
Create a data provider that falls back to local files when Supabase is not available:

```typescript
// src/lib/data-provider.ts
import { supabase } from './supabase'
import projects from '@/data/projects'
import ventures from '@/data/ventures'
import lessons from '@/data/lessons'

export async function getProjects() {
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('published', true)
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data || projects
  } catch (error) {
    console.warn('Falling back to local data:', error)
    return projects
  }
}

export async function getVentures() {
  try {
    const { data, error } = await supabase
      .from('ventures')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data || ventures
  } catch (error) {
    console.warn('Falling back to local data:', error)
    return ventures
  }
}

export async function getLessons() {
  try {
    const { data, error } = await supabase
      .from('lessons')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data || lessons
  } catch (error) {
    console.warn('Falling back to local data:', error)
    return lessons
  }
}
```

### 6. Row Level Security (RLS)
Enable RLS for content tables:
```sql
-- Enable RLS
alter table projects enable row level security;
alter table ventures enable row level security;
alter table lessons enable row level security;
alter table posts enable row level security;

-- Public read access
create policy "Public read access" on projects for select using (published = true);
create policy "Public read access" on ventures for select using (true);
create policy "Public read access" on lessons for select using (true);
create policy "Public read access" on posts for select using (published = true);
```

## Usage

### In Components
```typescript
import { getProjects } from '@/lib/data-provider'

export default async function ProjectsPage() {
  const projects = await getProjects()
  
  return (
    <div>
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}
```

## Benefits
- **Dynamic Content:** Update content without code changes
- **Real-time Updates:** Live content updates
- **Backup:** Automatic data backup
- **Scalability:** Handle growing content needs
- **Analytics:** Built-in usage analytics

## Next Steps
1. Restore your Supabase project
2. Set up environment variables
3. Create database schema
4. Install Supabase client
5. Implement data provider pattern
6. Test integration
7. Deploy with environment variables

## Resources
- [Supabase Documentation](https://supabase.com/docs)
- [Next.js with Supabase](https://supabase.com/docs/guides/getting-started/tutorials/with-nextjs)
- [Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)
