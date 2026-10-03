---
slug: stegoshield
title: "StegoShield"
description: "An explainable steganalysis tool that estimates whether an image carries LSB-embedded data, using bit-plane statistics and classical ML, with honest reporting of where it fails."
tech: ["Python", "scikit-learn", "FastAPI", "Next.js", "TypeScript"]
category: ai
featured: true
github: "https://github.com/Arjun13-git/StegoShield"
date: "2026-09-22"
highlights:
  - "22 pixel and bit-plane features; Logistic Regression, SVM and Random Forest compared on BOSSBase"
  - "Tested for robustness to JPEG, noise, crops and resizing, and against ALASKA2 for generalization"
  - "Shows which feature groups drove each score instead of a bare verdict"
---

## Overview

StegoShield looks for hidden data in images, focusing on LSB (least significant bit) steganography. It extracts statistical features from pixel bit-planes, scores the image with a Random Forest, and explains which feature groups influenced the score.

The evaluation is deliberately candid: the detector is weak at low payloads and does not transfer to DCT-domain methods like J-UNIWARD, and the README documents those negative results. The model sits behind a FastAPI service with input validation, and a Next.js dashboard has Analyze, Encode and Research pages.
