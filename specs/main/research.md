# Research: Atomic Components & Tech Stack

## Topic 1: DaisyUI 5 Integration

**Decision**: Use standard DaisyUI class names (`btn`, `card`, `input`) but customize colors via `tailwind.config.js`.
**Rationale**: DaisyUI provides semantic component classes that speed up development while allowing full visual customization via Tailwind utility classes and CSS variables.
**Implementation Detail**:
- Theme switching handled by toggling `data-theme="light"` / `data-theme="dark"` on the `<html>` element.
- Custom colors (`primary`, `secondary`) defined in `tailwind.config.js` map to DaisyUI's internal variables.

## Topic 2: GSAP in React 19

**Decision**: Use `@gsap/react` and the `useGSAP` hook.
**Rationale**: React 18/19 Strict Mode mounts components twice in development. The standard `useEffect` approach often leads to duplicate animations or broken timelines. `useGSAP` handles scope cleanup and Strict Mode automatically.
**Pattern**:
```typescript
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

useGSAP(() => {
  gsap.to('.box', { x: 100 });
}, { scope: containerRef });
```

## Topic 3: React 19 Considerations

**Decision**: Use standard Functional Components.
**Note**: React 19 introduces the `use` API and Server Components, but for this Client-Side SPA (Vite), we will stick to standard `useState`/`useEffect`/`useRef` hooks to ensure maximum compatibility with the current ecosystem (DaisyUI, GSAP).
