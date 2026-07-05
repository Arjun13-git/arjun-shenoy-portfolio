# System Design

Version: 1.0

---

# High Level Architecture

                User

                  │

            Next.js App

                  │

      ┌───────────┼───────────┐

      │           │           │

 Content      Components     Services

      │           │           │

      └───────────┼───────────┘

                  │

           Rendered UI

---

# Layers

Presentation

↓

Content

↓

Utilities

↓

Configuration

↓

External Services

---

# Rendering Strategy

Server Components by default.

Client Components only when interaction is required.

---

# Theme

Global Provider

---

# State

Minimal.

Prefer URL and Server State.

---

# Search

Static Index

Client Filter

---

# Blog

Static

SEO Friendly

---

# Projects

Markdown Driven

Dynamic Routes

---

# Future

AI Concierge

GitHub Integration

CMS Support

Research Dashboard