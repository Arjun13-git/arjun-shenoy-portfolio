---
slug: aether-geoint
title: "Project Aether — GEOINT Platform"
description: "A Streamlit app for analysing satellite imagery with computer vision: object detection with YOLOv8, change detection between two images, and vegetation-index band maths. Built at Google DeepMind's Vibe Code with Gemini 3 Pro."
tech: ["Python", "Streamlit", "YOLOv8", "OpenCV", "NumPy"]
category: ai
featured: false
github: "https://github.com/Arjun13-git/Project-Aether"
date: "2025-12-12"
highlights:
  - "YOLOv8 model trained to detect and classify aircraft in aerial imagery"
  - "SSIM-based change detection between images taken at two different times"
  - "Building-height estimates from shadow length and sun elevation"
---

## Overview

Project Aether is a simulation of a geospatial-analysis workflow. It combines several classic computer-vision techniques in one Streamlit interface: object detection, structural-similarity change detection, NDVI band maths, and simple geometry for estimating heights from shadows.
