# CLAUDE.md - Core Project Conventions & Commands

## Global Development Commands
- Dev Server (Next.js): `npm run dev`
- Dev Server (Nuxt.js): `npm run dev -- -o`
- Build Project: `npm run build`
- Run Linter: `npm run lint` or `npx eslint . --fix`

## Stack Architecture Guidelines

### Core Web Frameworks (Next.js / Nuxt.js / React)
- **SSR Safety First:** Never touch the global DOM matrix (`window`, `document`, `navigator`) in top-level code. Wrap it securely in a React `useEffect` or Vue `onMounted` lifecycle hook.
- **Component Pattern:** Define React components using the standard `function` keyword rather than arrow functions.
- **Data Hydration:** Always preserve explicit server/client boundaries. Minimize `'use client'` tags to pure user-interactive components.

### Canvas, WebGL & Immersive Systems (Three.js)
- **Strict Memory Management:** Always execute full garbage collection routines on component unmounting. Traverse scene hierarchies and run `.dispose()` explicitly on all geometries, textures, and materials.
- **Hardware Acceleration:** Ensure CSS target containers have hardware acceleration optimization flags set: `will-change: transform; transform-style: preserve-3d;`.
- **Fluid Animation Loops:** Bind rendering loop calculations using a delta variable via `THREE.Clock` to handle uneven monitor refresh rates cleanly.

### Hybrid Scripting & Tooling (jQuery / JavaScript ES6+ / HTML5)
- **SSR-Safe jQuery Ingestion:** In SSR setups, dynamically load jQuery locally inside your frontend mounts to block server-side crash triggers:
  ```ts
  useEffect(() => {
    const initJQ = async () => {
      const $ = (await import('jquery')).default;
      // Initialize layout selectors or plugins here safely
    };
    initJQ();
  }, []);