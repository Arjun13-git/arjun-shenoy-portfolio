# State Management

Version: 1.0

---

# Philosophy

Use as little global state as possible.

Prefer Server Components and URL state over client-side state.

State should exist only where necessary.

---

# State Categories

Global

↓

Page

↓

Component

---

# Global State

Theme

Command Palette

Navigation Drawer

Reduced Motion Preference

---

# Local State

Accordion

Tabs

Dropdown

Modal

Carousel

Project Filters

Search Input

---

# Server State

Markdown Content

Projects

Research

Blog Posts

Experience

Loaded at build time whenever possible.

---

# Client State

Theme Toggle

Search

Filters

Animations

Form Input

---

# Libraries

React Context

Theme

Command Menu

No Redux

No MobX

No Zustand (unless future complexity justifies it)

---

# URL State

Search Query

Category Filter

Project Tags

Blog Categories

---

# Form State

React Hook Form

Zod Validation

---

# Rule

Global state should remain extremely small.

The majority of the application should remain stateless.