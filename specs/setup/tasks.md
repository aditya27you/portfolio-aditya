---
description: "Task list for Arjun Sharma's Portfolio Website"
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

- [ ] T006 [P] [US1] Create Button atom in src/components/atoms/Button/Button.tsx
- [ ] T007 [P] [US1] Create Typography atom in src/components/atoms/Typography/Typography.tsx
- [ ] T008 [P] [US1] Create Icon atom in src/components/atoms/Icon/Icon.tsx
- [ ] T009 [P] [US1] Create Badge atom in src/components/atoms/Badge/Badge.tsx
- [ ] T010 [P] [US1] Create Avatar atom in src/components/atoms/Avatar/Avatar.tsx
- [ ] T011 [P] [US1] Create Input atom in src/components/atoms/Input/Input.tsx
- [ ] T012 [P] [US1] Create Textarea atom in src/components/atoms/Textarea/Textarea.tsx
- [ ] T013 [P] [US1] Create Label atom in src/components/atoms/Label/Label.tsx
- [ ] T014 [P] [US1] Create Switch atom in src/components/atoms/Switch/Switch.tsx
- [ ] T015 [P] [US1] Create Card atom in src/components/atoms/Card/Card.tsx
- [ ] T016 [P] [US1] Create Divider atom in src/components/atoms/Divider/Divider.tsx
- [ ] T017 [P] [US1] Create Link atom in src/components/atoms/Link/Link.tsx
- [ ] T018 [P] [US1] Create Progress atom in src/components/atoms/Progress/Progress.tsx
- [ ] T019 [P] [US1] Create Spinner atom in src/components/atoms/Spinner/Spinner.tsx

## Phase 3: Molecules (Simple Component Groups)

**Goal**: Combine atoms into functional molecules.

- [ ] T020 [P] [US2] Create SkillCard molecule in src/components/molecules/SkillCard/SkillCard.tsx
- [ ] T021 [P] [US2] Create SocialLinks molecule in src/components/molecules/SocialLinks/SocialLinks.tsx
- [ ] T022 [P] [US2] Create ProjectTag molecule in src/components/molecules/ProjectTag/ProjectTag.tsx
- [ ] T023 [P] [US2] Create FormField molecule in src/components/molecules/FormField/FormField.tsx
- [ ] T024 [P] [US2] Create NavItem molecule in src/components/molecules/NavItem/NavItem.tsx
- [ ] T025 [P] [US2] Create ThemeToggle molecule in src/components/molecules/ThemeToggle/ThemeToggle.tsx
- [ ] T026 [P] [US2] Create BlogCard molecule in src/components/molecules/BlogCard/BlogCard.tsx
- [ ] T027 [P] [US2] Create CertificationBadge molecule in src/components/molecules/CertificationBadge/CertificationBadge.tsx
- [ ] T028 [P] [US2] Create StatCard molecule in src/components/molecules/StatCard/StatCard.tsx
- [ ] T029 [P] [US2] Create CTAButton molecule in src/components/molecules/CTAButton/CTAButton.tsx

## Phase 4: Organisms (Complex Sections)

**Goal**: Assemble molecules into major page sections.

- [ ] T030 [US3] Create Navbar organism in src/components/organisms/Navbar/Navbar.tsx
- [ ] T031 [US3] Create Hero organism in src/components/organisms/Hero/Hero.tsx
- [ ] T032 [US3] Create About organism in src/components/organisms/About/About.tsx
- [ ] T033 [US3] Create SkillsGrid organism in src/components/organisms/SkillsGrid/SkillsGrid.tsx
- [ ] T034 [US3] Create ProjectCard organism in src/components/organisms/ProjectCard/ProjectCard.tsx
- [ ] T035 [US3] Create Timeline organism in src/components/organisms/Timeline/Timeline.tsx
- [ ] T036 [US3] Create BlogSection organism in src/components/organisms/BlogSection/BlogSection.tsx
- [ ] T037 [US3] Create ContactForm organism in src/components/organisms/ContactForm/ContactForm.tsx
- [ ] T038 [US3] Create Footer organism in src/components/organisms/Footer/Footer.tsx

## Phase 5: Templates & Pages

**Goal**: Final page assembly.

- [ ] T039 [US4] Create HomeTemplate in src/components/templates/HomeTemplate/HomeTemplate.tsx
- [ ] T040 [US4] Create HomePage in src/pages/HomePage/HomePage.tsx
- [ ] T041 [US4] Assemble App.tsx with routing and layout

## Phase 6: Content & Polish

- [ ] T042 Populate data/projects.ts with real project data
- [ ] T043 Populate data/skills.ts with real skills data
- [ ] T044 Verify mobile responsiveness (320px check)
- [ ] T045 Run Lighthouse performance audit

## Implementation Strategy

1. **Atoms First**: We cannot build molecules without atoms.
2. **Parallel Execution**: All atoms can be built in parallel.
3. **Storybook Verification**: Verify each component visually before moving to the next.
