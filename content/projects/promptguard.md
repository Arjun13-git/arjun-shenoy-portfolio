---
slug: promptguard
title: "PromptGuard"
description: "Intelligent middleware protecting LLMs against prompt injection, jailbreak attempts, and malicious prompts — built at AMD Slingshot 2026 with multi-layer adaptive filtering."
tech: ["Python", "LLM APIs", "FastAPI"]
category: ai
featured: true
github: "https://github.com/Arjun13-git/PromptGuard"
date: "2026-02-26"
highlights:
  - "Multi-layer validation: pattern matching, semantic analysis, and adaptive filtering"
  - "Drop-in middleware architecture with zero latency overhead for safe inputs"
  - "Adaptive rule engine that evolves with new prompt injection patterns"
  - "Built at AMD Slingshot 2026 Hackathon"
---

## Problem

As LLMs become embedded in production systems, prompt injection represents a critical security risk. PromptGuard acts as an intelligent middleware layer between user inputs and LLM backends — protecting against injection, jailbreaks, and unsafe interactions.

## Approach

Multi-layer validation: pattern matching for known signatures, semantic AI-based intent detection, and an adaptive filtering engine that learns from emerging attack patterns.
