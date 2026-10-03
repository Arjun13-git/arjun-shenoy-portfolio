---
slug: amazon-entity-resolution
title: "Amazon Entity Resolution"
description: "My pipeline for the Amazon ML Challenge 2026 entity-resolution task: for each business record in one source, find the records in two other sources that describe the same real-world business."
tech: ["Python", "XGBoost", "Pandas", "scikit-learn", "RapidFuzz"]
category: ai
featured: false
github: "https://github.com/Arjun13-git/amazon-entity-resolution"
date: "2026-09-26"
highlights:
  - "Multilingual name and address normalization, then candidate blocking to avoid comparing every pair of records"
  - "XGBoost pairwise matcher with a second-stage decision model, tuned for macro F0.5"
  - "Validation macro F0.5 of 0.925 on a held-out sample; the full test set passed the official submission validator"
---

## Overview

The challenge data covers business records from the US, India and France across three sources. Comparing every pair would mean trillions of comparisons, so the pipeline first narrows each record to a few hundred candidates through four retrieval channels, extracts pairwise features, and scores them with an XGBoost matcher. A second model then decides which candidates to keep for each source record.
