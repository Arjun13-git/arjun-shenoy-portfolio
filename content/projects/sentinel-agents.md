---
slug: sentinel-agents
title: "Sentinel Agents"
description: "A team hackathon project: a pipeline of LLM agents that scans Python code for vulnerabilities, writes proof-of-concept exploits, runs them in a Docker sandbox and proposes patches. Built at VexStorm '26."
tech: ["Python", "AI Agents", "FastAPI", "LangChain", "Security APIs"]
category: ai
featured: true
github: "https://github.com/aniprogramer/sentinel-agents"
date: "2026-02-21"
highlights:
  - "Tree-sitter AST parsing to find candidate vulnerabilities before the LLM steps"
  - "Generated exploits run in isolated Docker containers, then again against the patched code"
  - "Next.js dashboard streams the analysis logs over SSE"
---

## Overview

Sentinel Agents splits a security review into steps: an auditor for surface issues like hard-coded secrets, a "red team" agent that writes exploit scripts, a sandbox runner, a "blue team" agent that writes patches, and a verifier that re-runs the exploit. The patch–verify loop runs up to three times.
