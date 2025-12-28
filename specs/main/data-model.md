# Data Model: Atomic Component Props

## Atoms

### Button
```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'link' | 'outline';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  wide?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}
```

### Typography
```typescript
interface TypographyProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'code';
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
  color?: 'primary' | 'secondary' | 'accent' | 'neutral' | 'base-content';
  className?: string;
  children: React.ReactNode;
}
```

### Icon
```typescript
interface IconProps {
  name: string; // Key mapping to ReactIcons
  size?: number | string;
  color?: string;
  className?: string;
}
```

### Badge
```typescript
interface BadgeProps {
  variant?: 'primary' | 'secondary' | 'accent' | 'neutral' | 'info' | 'success' | 'warning' | 'error';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  outline?: boolean;
  children: React.ReactNode;
}
```

### Card
```typescript
interface CardProps {
  variant?: 'base' | 'bordered' | 'compact';
  image?: string;
  title?: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
}
```

### Input
```typescript
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  bordered?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  leftIcon?: React.ReactNode;
}
```

## Molecules

### SkillCard
```typescript
interface SkillCardProps {
  name: string;
  icon: React.ReactNode;
  proficiency: 'Beginner' | 'Intermediate' | 'Advanced';
  category: 'Frontend' | 'Backend' | 'Tools' | 'Language';
}
```

### ProjectTag
```typescript
interface ProjectTagProps {
  label: string;
  color?: 'primary' | 'secondary' | 'accent' | 'neutral'; // Defaults based on predefined map
}
```
