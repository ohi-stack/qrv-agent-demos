# QR-V™ Agent Demos

Example external agent integrations for QR-V™, showing how agents and systems verify, create, and act on registry-backed records through the public API and deterministic verification workflows.

This repository demonstrates how external systems consume QR-V as verification infrastructure rather than as a simple QR redirect model. QR-V is designed around identifiers, resolvers, registries, and verification responses.

## First Demo

### External Hiring Agent — Credential Verification

This demo verifies the first live QR-V identifier:

`QRV-0001-TEST-0001`

It calls the public verification API and makes a machine-readable decision based on the returned verification state.

## Why This Matters

This repository proves that:

- external agents can consume QR-V verification results
- QR-V identifiers resolve into registry-backed trust decisions
- a third-party system can act on `VERIFIED`, `REVOKED`, `EXPIRED`, or `NOT_FOUND`

## Current Demo

### `hiring-agent-demo/`

This demo simulates an external hiring or credential-screening agent.

It verifies:

`QRV-0001-TEST-0001`

against the public verification API and then decides whether to accept or reject the credential based on the verification state.

## Run

```bash
node hiring-agent-demo/index.js
