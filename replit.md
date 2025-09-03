# Vincent V. Vila Portfolio

## Overview

This is a full-stack portfolio application for Vincent V. Vila, a freelance software developer and traditional/digital artist. The application showcases his work across multiple categories including web applications, digital designs, portraits, murals, and 3D models. Built as a modern single-page application with a Node.js backend, it features an interactive 3D background, responsive design, and a comprehensive project gallery system.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Styling**: Tailwind CSS with a dark theme design system featuring cyan/teal accents
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible interface elements
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Routing**: Wouter for lightweight client-side routing
- **3D Graphics**: Three.js integration for an animated background with floating geometric shapes and particles
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API endpoints for project data retrieval
- **File System**: Local file storage for project assets with category-based organization
- **Development**: Hot module replacement and development middleware via Vite integration

### Data Management
- **Database**: Drizzle ORM configured for PostgreSQL with Neon Database serverless connection
- **Schema Validation**: Zod for runtime type checking and data validation
- **File Organization**: Asset files organized by category (web-applications, digital-designs, portraits, murals, 3d-models)
- **API Response Format**: JSON with structured project data including file metadata

### UI/UX Design Patterns
- **Design System**: Dark theme with custom CSS variables for consistent theming
- **Layout**: Single-page application with smooth scroll navigation between sections
- **Responsive Design**: Mobile-first approach with breakpoint-specific layouts
- **Interactive Elements**: Floating navigation dots, animated skill progress bars, and hover effects
- **Typography**: Multiple font families (Inter, Fira Code, DM Sans) for different content types

### Development Environment
- **Replit Integration**: Configured for Replit development environment with runtime error overlay
- **TypeScript Configuration**: Strict type checking with path mapping for clean imports
- **Code Organization**: Monorepo structure with shared schemas between client and server
- **Asset Management**: Centralized asset handling with proper path resolution

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Router (Wouter)
- **TypeScript**: Full TypeScript support across client and server
- **Build Tools**: Vite with React plugin and development middleware

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework with PostCSS processing
- **Radix UI**: Comprehensive primitive component library for accessibility
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Utility for building variant-based component APIs

### Backend Infrastructure
- **Express.js**: Web application framework for Node.js
- **Drizzle ORM**: Type-safe database toolkit with PostgreSQL support
- **Neon Database**: Serverless PostgreSQL database platform
- **Connect PG Simple**: PostgreSQL session store for Express sessions

### Development and Utilities
- **TanStack Query**: Server state management and data fetching
- **Zod**: Schema validation and type inference
- **Date-fns**: Date manipulation and formatting utilities
- **Three.js**: 3D graphics library for animated backgrounds
- **Nanoid**: URL-safe unique string ID generator

### Form and Interaction
- **React Hook Form**: Form state management and validation
- **Hookform Resolvers**: Integration between React Hook Form and validation libraries
- **CMDK**: Command palette and search interface primitives