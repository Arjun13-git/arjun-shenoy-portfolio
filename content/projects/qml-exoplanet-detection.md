---
slug: qml-exoplanet-detection
title: "Quantum ML for Exoplanet Detection"
description: "A benchmark comparing classical time-series deep learning models with hybrid quantum neural networks for detecting exoplanet transits in NASA Kepler and TESS light curves."
tech: ["Python", "PyTorch", "TensorFlow", "PennyLane", "Qiskit"]
category: research
featured: false
status: completed
github: "https://github.com/Arjun13-git/qml-exoplanet-detection"
date: "2026-07-12"
highlights:
  - "Classical baselines ranging from 1D CNNs to Transformer and state-space models, plus a custom XenoPulse-Net"
  - "Hybrid quantum models (VQC, QCNN, Res-QNN) at 4, 8 and 16 qubits, comparing autoencoder and PCA feature compression"
  - "Light-curve preprocessing with detrending, normalization, phase folding and binning"
---

## Overview

Binary classification of stellar light curves into transit and non-transit events, used to compare how classical and hybrid quantum-classical architectures perform on the same data.
