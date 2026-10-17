---
# CSL-compatible fields
title: "Deep Learning-Based Anomaly Detection in Spacecraft Telemetry on Edge Devices"
author:
  - literal: "Christopher Goetze"
  - literal: "Tim Schlippe"
  - literal: "Daniel Lakey"
issued:
  date-parts:
    - [2026, 3, 31]
url: "https://arxiv.org/abs/2603.29375"

# Custom fields
paper_id: "2603.29375"
paper_source: "arxiv"
domain: "computer-vision"
tags:
  []
architectures:
  []
datasets:
  - "european-space-agency-anomaly-dataset"
concept_slugs:
  []
dataset_slugs:
  - "european-space-agency-anomaly-dataset"
skill: "GeneralMLSkill"
processed_at: "2026-04-02T05:40:54Z"
created_at: "2026-04-02T05:40:54Z"
---

# Deep Learning-Based Anomaly Detection in Spacecraft Telemetry on Edge Devices

**Authors**: Christopher Goetze, Tim Schlippe, Daniel Lakey
**Date**: 2026-03-31
**Paper ID**: [arxiv:2603.29375](https://arxiv.org/abs/2603.29375)

## Summary

This paper addresses the challenge of deploying anomaly detection models on resource-constrained spacecraft hardware. By benchmarking three distinct detection architectures, the authors identify forecasting and thresholding as the most effective approach. They further utilize multi-objective neural architecture optimization to drastically reduce the model's memory and computational footprint, enabling practical, real-time edge deployment on CubeSat platforms.

## Key Contributions

- Systematic evaluation of three spacecraft anomaly detection paradigms (forecasting-based, direct classification, and image-based) on constrained edge hardware.
- Application of multi-objective neural architecture optimization to achieve Pareto-optimal trade-offs between detection performance and hardware resource usage.
- Deployment-ready models capable of running on CubeSat systems with RAM requirements reduced by up to 97.1%, occupying as little as 59 KB.

## Open Questions & Future Work

- [[optimizing-ensemble-anomaly-detection-for-spacecraft-edge-devices]]

## Archivist Review

The paper provides a valuable evaluation of deployment strategies on highly constrained hardware, but the proposed methods are applications of existing neural architecture search paradigms rather than new conceptual contributions. I have approved the ESA dataset and the open question regarding ensemble methods for edge-based anomaly detection, as these address the specific constraints and future research directions relevant to space-borne AI.

### Approved Open Questions
- Optimizing Ensemble Anomaly Detection for Spacecraft Edge Devices: Spacecraft anomaly detection is highly sensitive to the trade-offs between precision, recall, and hardware resource usage; integrating additional mission-critical objectives into the optimization loop is essential for reliable autonomous operations.

### Rejected Candidates
- [concept] multi-objective-neural-architecture-optimization (`multi-objective-neural-architecture-optimization`) - not_novel: Multi-objective neural architecture optimization is a well-established field in machine learning and is not specific enough to the innovations of this paper to warrant a new entry.

## Datasets

- [[european-space-agency-anomaly-dataset]]

## Links

- [Abstract](https://arxiv.org/abs/2603.29375)
- [PDF](https://arxiv.org/pdf/2603.29375)

