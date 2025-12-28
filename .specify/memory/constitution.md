<!--
Sync Impact Report:
- Version: 0.0.0 -> 1.0.0 (Initial Ratification based on PRD)
- Added Principles:
  - I. Atomic Design Methodology (Strict component hierarchy)
  - II. Mobile-First Responsive Design (320px base)
  - III. Component-Driven Development (Storybook first)
  - IV. Performance & Accessibility (Lighthouse >90, WCAG 2.1 AA)
  - V. Type Safety & Clean Code (Strict TS, Linting)
- Templates Checked:
  - plan-template.md: ✅ Compatible (Constitution Check will use these principles)
  - spec-template.md: ✅ Compatible
  - tasks-template.md: ✅ Compatible (Supports component-based tasks)
-->

# Arjun Sharma's Professional Portfolio Constitution

## Core Principles

### I. Atomic Design Methodology
**Strict adherence to Brad Frost's Atomic Design hierarchy is mandatory.**
*   **Atoms**: Indivisible elements (Buttons, Inputs, Icons). No business logic.
*   **Molecules**: Combinations of atoms (Search box, Nav item). Simple UI logic only.
*   **Organisms**: Complex sections (Navbar, Hero, Grid). Handles business logic/state.
*   **Templates**: Page layouts with placeholders. No data fetching.
*   **Pages**: Instances of templates with real data.
*   **Rule**: A component can only import components from lower levels (e.g., Molecules can import Atoms, but not Organisms).

### II. Mobile-First Responsive Design
**All UI development must start from the smallest screen size (320px).**
*   **Breakpoints**: Mobile (320px) -> Tablet (641px) -> Desktop (1025px) -> Wide (1537px).
*   **Constraint**: Never use `max-width` media queries for responsiveness; always use `min-width` to layer complexity.
*   **Verification**: Every feature must be verified on a mobile viewport before desktop.

### III. Component-Driven Development
**Components are the primary unit of development and documentation.**
*   **Storybook First**: Atoms and Molecules must be built and verified in Storybook in isolation before integration.
*   **Documentation**: Every component must have a corresponding Storybook story demonstrating its variants and states.
*   **Independence**: Components should not rely on global application state (like Redux/Context) unless absolutely necessary (prefer prop injection).

### IV. Performance & Accessibility
**Non-negotiable quality standards for a professional portfolio.**
*   **Performance**: Lighthouse Performance score > 90. (Core Web Vitals: LCP < 2.5s, CLS < 0.1).
*   **Accessibility**: WCAG 2.1 AA compliance. Semantic HTML is required (use `<button>` not `<div>`).
*   **Assets**: Images must be optimized (WebP) and lazy-loaded where appropriate.

### V. Type Safety & Clean Code
**Maintainable codebase through strict standards.**
*   **TypeScript**: Strict mode enabled. `any` type is forbidden unless explicitly justified in comments.
*   **Linter**: ESLint + Prettier must pass with 0 warnings before commit.
*   **Naming**: PascalCase for components/interfaces, camelCase for variables/functions.

## Implementation Constraints

### Tech Stack Adherence
*   **Framework**: React 19 + TypeScript 5.7.
*   **Styling**: TailwindCSS 4.1 + DaisyUI 5. (No raw CSS unless for complex animations not possible with utility classes).
*   **Animation**: GSAP for complex sequences; CSS transitions for simple hover states.
*   **State**: Local state preferred; React Context for global themes/auth only.

### File Structure
*   **Strict Pathing**: All components must reside in `src/components/[level]/[Name]/`.
*   **Colocation**: Component files (`.tsx`), stories (`.stories.tsx`), and tests (`.test.tsx`) must be colocated in the same directory.

## Governance

### Amendment Process
*   Changes to this constitution (e.g., adding a new library, changing the design system) require a MAJOR version bump and explicit rationale in the PR.
*   **Compliance**: All Pull Requests must verify adherence to Atomic Design levels and Performance metrics.

### Versioning
*   **Constitution Versioning**: Follows Semantic Versioning (MAJOR.MINOR.PATCH).
*   **Project Versioning**: Tied to the `package.json` version.

**Version**: 1.0.0 | **Ratified**: 2025-12-28 | **Last Amended**: 2025-12-28
