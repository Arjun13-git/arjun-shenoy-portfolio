# Performance Strategy

Version: 1.0

---

# Vision

The portfolio should feel instant.

Visitors should never think about loading times, animations, or rendering.
Everything should appear smooth, responsive, and effortless.

Performance is a feature—not an afterthought.

---

# Performance Principles

- Performance First
- Progressive Enhancement
- Mobile First
- Lazy Everything
- GPU Friendly
- Minimal JavaScript
- Static by Default

---

# Lighthouse Targets

Performance: 95+

Accessibility: 100

SEO: 100

Best Practices: 100

---

# Core Web Vitals

Largest Contentful Paint (LCP)

< 2 seconds

Interaction to Next Paint (INP)

< 200ms

Cumulative Layout Shift (CLS)

< 0.1

First Contentful Paint (FCP)

< 1.5s

Time To Interactive (TTI)

< 2.5s

---

# Rendering Strategy

Prefer Server Components.

Use Client Components only where interaction is required.

Keep hydration minimal.

---

# JavaScript Budget

Initial JavaScript

< 200 KB

Critical Path

< 100 KB

---

# Image Strategy

Use AVIF

Fallback to WebP

Responsive Images

Lazy Load

Blur Placeholder

Next/Image

---

# Animation Strategy

Use CSS where possible.

Use Framer Motion only for UI interactions.

Use React Three Fiber only in the Hero.

Avoid continuous re-renders.

---

# Three.js Budget

Maximum Draw Calls

<100

Geometry

Simple

Texture Resolution

Optimized

Target

60 FPS Desktop

30 FPS Mobile Minimum

---

# Fonts

Self-host

Subset

Preload Primary Fonts

Maximum Fonts

3

---

# Network

Preconnect External Domains

Compress Assets

Enable HTTP/2

Use Brotli Compression

---

# Code Splitting

Dynamic Imports

Route Based Splitting

Lazy Load Heavy Components

---

# Caching

Static Assets

1 Year

Images

Immutable

Markdown Content

Static Generation

---

# Monitoring

Lighthouse

PageSpeed Insights

Web Vitals

Vercel Analytics

Plausible Analytics

---

# Performance Rule

Every feature must justify its performance cost.

If an animation or dependency does not improve usability,
it should be removed.