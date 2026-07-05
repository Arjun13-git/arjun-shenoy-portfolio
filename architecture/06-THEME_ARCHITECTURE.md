# Theme Architecture

Version: 1.0

---

# Philosophy

The theme system should be modular, scalable, and independent from individual components.

Every component should consume design tokens rather than hardcoded colors.

The portfolio should support seamless switching between Light and Dark modes while preserving a consistent brand identity.

---

# Theme Identity

Codename

Neural Horizon

Visual Inspiration

- AI Research Laboratory
- Ocean of Knowledge
- Neural Networks
- Scientific Exploration

---

# Theme Layers

Brand Identity

↓

Design Tokens

↓

CSS Variables

↓

Tailwind Theme

↓

Components

↓

Pages

---

# Design Tokens

## Colors

Primary

Secondary

Accent

Success

Warning

Danger

Background

Surface

Card

Border

Text

Muted

---

## Typography

Heading

Body

Monospace

---

## Spacing

4

8

12

16

24

32

48

64

96

128

---

## Radius

Small

Medium

Large

Full

---

## Shadows

Subtle

Medium

Large

Glass

---

## Motion

Fast

Medium

Slow

Background

---

# Theme Provider

Global

Persistent

System Theme Detection

Manual Toggle

---

# Theme Rules

Never hardcode colors.

Always reference CSS Variables.

Every component should automatically adapt to theme changes.

---

# Future Themes

Default

Neural Horizon

Potential Seasonal Themes

- Deep Ocean
- Aurora
- Midnight Research
- Polar Night

Future themes should only override design tokens, never component logic.