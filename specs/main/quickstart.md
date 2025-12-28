# Quickstart: Creating an Atomic Component

## 1. Create Files
Navigate to `src/components/[level]/[Name]/` and create:
- `[Name].tsx` (Implementation)
- `[Name].stories.tsx` (Documentation/Test)
- `index.ts` (Export)

## 2. Implementation Template
```typescript
// src/components/atoms/MyAtom/MyAtom.tsx
import React from 'react';
import { clsx } from 'clsx'; // Optional util for cleaner classes

interface MyAtomProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export const MyAtom: React.FC<MyAtomProps> = ({ variant = 'primary', children }) => {
  return (
    <div className={clsx('base-class', {
      'variant-primary': variant === 'primary',
      'variant-secondary': variant === 'secondary',
    })}>
      {children}
    </div>
  );
};
```

## 3. Storybook Template
```typescript
// src/components/atoms/MyAtom/MyAtom.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { MyAtom } from './MyAtom';

const meta: Meta<typeof MyAtom> = {
  title: 'Atoms/MyAtom',
  component: MyAtom,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MyAtom>;

export const Default: Story = {
  args: {
    variant: 'primary',
    children: 'Hello World',
  },
};
```

## 4. Verify
Run `npm run storybook` and check your new component.
