---
slug: cardiomamba
title: "CardioMamba"
description: "A bidirectional Mamba (selective state-space) model for multi-label classification of 12-lead ECGs from PTB-XL, with an inference API and a small research demo."
tech: ["Python", "PyTorch", "FastAPI", "Next.js", "TypeScript"]
category: research
featured: true
github: "https://github.com/Arjun13-git/CardioMamba"
date: "2026-09-27"
highlights:
  - "Mamba-1 selective scan written directly in PyTorch, with five independent outputs for the PTB-XL diagnostic superclasses"
  - "Trained on folds 1–8, thresholds tuned on fold 9, evaluated once on held-out fold 10 (macro AUROC 0.92)"
  - "Research prototype only — not a diagnostic tool"
---

## Overview

CardioMamba classifies 10-second, 12-lead ECG recordings from PTB-XL 1.0.3 into five diagnostic superclasses (NORM, MI, STTC, CD, HYP). A record can carry several labels at once, so the model predicts each class independently.

The model is a Conv1D patch stem followed by four bidirectional Mamba-1 blocks, implemented in plain PyTorch without the `mamba-ssm` package. A FastAPI service runs the frozen checkpoint, and a Next.js demo shows the 12-lead signal next to the predicted probabilities.
