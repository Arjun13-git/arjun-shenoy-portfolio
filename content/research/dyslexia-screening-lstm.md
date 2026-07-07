---
slug: dyslexia-screening-lstm
title: "Deep Learning-Based Dyslexia Risk Screening via Handwriting Analysis"
abstract: "A deep learning screening methodology using Long Short-Term Memory (LSTM) networks to analyze handwriting sequences for dyslexia risk detection. The study investigates whether temporal patterns in handwriting strokes — including letter formation order, spacing consistency, and reversal frequency — can serve as reliable biomarkers for early dyslexia identification. An image preprocessing pipeline (scaling, binarization, noise reduction) improved model accuracy by 15% over baseline, demonstrating the value of input normalization in handwriting-based ML systems."
domain: "Deep Learning · Educational Technology"
status: completed
tech: ["Python", "TensorFlow", "Keras", "LSTM", "OpenCV", "NumPy"]
github: "https://github.com/AjithGoveas/mini-project-dyslexia"
date: "2025-12-01"
collaborators: []
---

## Background

Dyslexia affects an estimated 10–20% of the global population, yet early identification remains heavily dependent on specialist evaluation — a resource-constrained process. This research explores whether computational analysis of handwriting can serve as a low-cost, accessible pre-screening tool for educators.

## Methodology

Handwriting samples were collected as image sequences, converted to stroke-order temporal representations, and fed into an LSTM architecture trained to classify risk levels. The sequential nature of LSTM networks is well-suited to modeling the temporal dynamics of handwriting — capturing not just letter shapes but the order and timing in which strokes are produced.

## Preprocessing Pipeline

A key finding was the impact of input quality on model performance. Applying binarization, contrast normalization, and Gaussian noise reduction before LSTM ingestion improved accuracy by **15%** compared to raw image inputs, underscoring the importance of domain-aware preprocessing in handwriting ML systems.

## Outcomes

The system achieved reliable risk stratification across three tiers (low, moderate, high risk) and was validated against educator assessments. The educator interface was designed for non-technical users, presenting scores and intervention recommendations in plain language.
