# Content Architecture

Version: 1.0

---

# Philosophy

Content should be completely independent from presentation.

Changing content should never require modifying React components.

---

# Structure

content/

profile/

projects/

research/

blog/

experience/

achievements/

certifications/

---

# Profile

profile.md

Contains

- Personal Information
- Bio
- Skills
- Interests
- Social Links
- Contact
- Current Focus

---

# Projects

Each project lives inside its own markdown file.

Example

projects/

galaxy-classification.md

sentinel-agents.md

project-aether.md

---

# Project Schema

Title

Description

Problem

Solution

Architecture

Technologies

Gallery

GitHub

Demo

Timeline

Future Work

---

# Research

Each publication or paper should be independent.

---

# Blog

Each article should use MDX.

Allows

Code

Images

Videos

Interactive components

---

# Achievements

Independent markdown entries.

---

# Certifications

Independent markdown entries.

---

# Advantages

Easy editing.

Git friendly.

Scalable.

CMS independent.

Future proof.