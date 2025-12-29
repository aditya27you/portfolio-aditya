---
description: "Task list for Aditya Shah's Portfolio Website"
---

# Tasks: Setup & Atomic Components

**Input**: PRD.md
**Status**: In Progress

## Phase 1: Setup & Configuration (Completed)

- [x] T001 Create project structure per implementation plan
- [x] T002 Initialize Vite React TypeScript project with dependencies
- [x] T003 Configure TailwindCSS 4.1 & DaisyUI 5
- [x] T004 Setup TypeScript path aliases (@/*)
- [x] T005 Configure global styles and fonts (Inter, Fira Code)

## Phase 2: Atoms (Basic Building Blocks)

**Goal**: Build all atomic components in isolation with Storybook support.

- [x] T006 [P] [US1] Create Button atom in src/components/atoms/Button/Button.tsx
- [x] T007 [P] [US1] Create Typography atom in src/components/atoms/Typography/Typography.tsx
- [x] T008 [P] [US1] Create Icon atom in src/components/atoms/Icon/Icon.tsx
- [x] T009 [P] [US1] Create Badge atom in src/components/atoms/Badge/Badge.tsx
- [x] T010 [P] [US1] Create Avatar atom in src/components/atoms/Avatar/Avatar.tsx
- [x] T011 [P] [US1] Create Input atom in src/components/atoms/Input/Input.tsx
- [x] T012 [P] [US1] Create Textarea atom in src/components/atoms/Textarea/Textarea.tsx
- [x] T013 [P] [US1] Create Label atom in src/components/atoms/Label/Label.tsx
- [x] T014 [P] [US1] Create Switch atom in src/components/atoms/Switch/Switch.tsx
- [x] T015 [P] [US1] Create Card atom in src/components/atoms/Card/Card.tsx
- [x] T016 [P] [US1] Create Divider atom in src/components/atoms/Divider/Divider.tsx
- [x] T017 [P] [US1] Create Link atom in src/components/atoms/Link/Link.tsx
- [x] T018 [P] [US1] Create Progress atom in src/components/atoms/Progress/Progress.tsx
- [x] T019 [P] [US1] Create Spinner atom in src/components/atoms/Spinner/Spinner.tsx

## Phase 3: Molecules (Simple Component Groups)

**Goal**: Combine atoms into functional molecules.

- [x] T020 [P] [US2] Create SkillCard molecule in src/components/molecules/SkillCard/SkillCard.tsx
- [x] T021 [P] [US2] Create SocialLinks molecule in src/components/molecules/SocialLinks/SocialLinks.tsx
- [x] T022 [P] [US2] Create ProjectTag molecule in src/components/molecules/ProjectTag/ProjectTag.tsx
- [x] T023 [P] [US2] Create FormField molecule in src/components/molecules/FormField/FormField.tsx
- [x] T024 [P] [US2] Create NavItem molecule in src/components/molecules/NavItem/NavItem.tsx
- [x] T025 [P] [US2] Create ThemeToggle molecule in src/components/molecules/ThemeToggle/ThemeToggle.tsx
- [x] T026 [P] [US2] Create BlogCard molecule in src/components/molecules/BlogCard/BlogCard.tsx
- [x] T027 [P] [US2] Create CertificationBadge molecule in src/components/molecules/CertificationBadge/CertificationBadge.tsx
- [x] T028 [P] [US2] Create StatCard molecule in src/components/molecules/StatCard/StatCard.tsx
- [x] T029 [P] [US2] Create CTAButton molecule in src/components/molecules/CTAButton/CTAButton.tsx

## Phase 4: Organisms (Complex Sections)

**Goal**: Assemble molecules into major page sections.

- [x] T030 [US3] Create Navbar organism in src/components/organisms/Navbar/Navbar.tsx
- [x] T031 [US3] Create Hero organism in src/components/organisms/Hero/Hero.tsx
- [x] T032 [US3] Create About organism in src/components/organisms/About/About.tsx
- [x] T033 [US3] Create SkillsGrid organism in src/components/organisms/SkillsGrid/SkillsGrid.tsx
- [x] T034 [US3] Create ProjectCard organism in src/components/organisms/ProjectCard/ProjectCard.tsx
- [x] T035 [US3] Create Timeline organism in src/components/organisms/Timeline/Timeline.tsx
- [x] T036 [US3] Create BlogSection organism in src/components/organisms/BlogSection/BlogSection.tsx
- [x] T037 [US3] Create ContactForm organism in src/components/organisms/ContactForm/ContactForm.tsx
- [x] T038 [US3] Create Footer organism in src/components/organisms/Footer/Footer.tsx

## Phase 5: Templates & Pages

**Goal**: Final page assembly.

- [x] T039 [US4] Create HomeTemplate in src/components/templates/HomeTemplate/HomeTemplate.tsx
- [x] T040 [US4] Create HomePage in src/pages/HomePage/HomePage.tsx
- [x] T041 [US4] Assemble App.tsx with routing and layout

## Phase 6: Content & Polish

- [x] T042 Populate data/projects.ts with real project data
- [x] T043 Populate data/skills.ts with real skills data
- [ ] T044 Verify mobile responsiveness (320px check)
- [ ] T045 Run Lighthouse performance audit

## Implementation Strategy

1. **Atoms First**: We cannot build molecules without atoms.
2. **Parallel Execution**: All atoms can be built in parallel.
3. **Storybook Verification**: Verify each component visually before moving to the next.