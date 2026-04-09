# Architecture Overview

This document outlines the architectural decisions and directory structure of the RoseCycle frontend application.

## High-Level Architecture

RoseCycle is a Single Page Application (SPA) built with React and Vite, structured to act as a Progressive Web App (PWA). The primary goal of the architecture is to maintain a scalable, modular, and maintainable codebase.

### Key Technologies

- **React & Vite**: Chosen for rapid development, optimized build times, and an extensive ecosystem.
- **Tailwind CSS**: Utility-first CSS framework adopted for rapid UI development and consistent design language across the application.
- **React Router**: Managing client-side routing, enabling fluid transitions between application states without full page reloads.
- **vite-plugin-pwa**: Handling service worker generation and manifest configuration for offline support and installability.

## Directory Structure

The `frontend` directory is organized as follows:

```text
frontend/
├── public/                 # Static assets copied directly to the build output
│   ├── favicon.svg         # Application favicon
│   └── icons.svg           # Shared SVG icons or sprites
├── src/                    # Source code directory
│   ├── assets/             # Internal static assets (images, localized svgs)
│   ├── components/         # Reusable UI components (buttons, layout wrappers)
│   ├── pages/              # Top-level route components
│   ├── App.jsx             # Root application component and router configuration
│   ├── index.css           # Global CSS definitions and Tailwind directives
│   └── main.jsx            # Application entry point
├── eslint.config.js        # ESLint configuration
├── package.json            # Project metadata and dependencies
└── vite.config.js          # Vite build and plugin configurations
```

## State Management

Currently, the application relies on React's built-in state management primitives (`useState`, `useContext`) combined with React Router for URL-driven state. As the application complexity grows, a dedicated state management library may be introduced.

## Routing Strategy

Routes are defined declaratively in `App.jsx`. The application utilizes code splitting where appropriate to ensure initial bundle sizes remain small and performant.
