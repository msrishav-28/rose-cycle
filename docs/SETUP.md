# Setup Guide

This guide details the complete local environment setup process for the RoseCycle frontend application.

## Prerequisites

- Node.js (v18.0.0 or higher recommended)
- npm (v9.0.0 or higher)

## Local Development Environment

1. **Clone the repository**

```bash
git clone https://github.com/msrishav-28/rose-cycle.git
cd rose-cycle/frontend
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

The application will be available at `http://localhost:5173` by default.

## Production Build

To build the application for production deployment:

```bash
npm run build
```

The compiled assets will be output to the `frontend/dist` directory. You can preview the production build locally using:

```bash
npm run preview
```

## Code Quality Tools

The project utilizes ESLint for static code analysis. To run the linter:

```bash
npm run lint
```
