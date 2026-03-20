# QR-V™ Agent Demos

Example external agent integrations for QR-V™, showing how agents and systems verify, create, and act on registry-backed records through the public API and deterministic verification workflows.

This repository demonstrates how external systems consume QR-V as verification infrastructure rather than as a simple QR redirect model. That matches the QRVP-1 protocol’s registry-backed verification flow and the broader QR-V architecture built around identifiers, resolvers, registries, and verification responses  [oai_citation:1‡QR-V™ Internet Protocol (QRVP-1) Developer Specification.pdf](sediment://file_00000000a9cc71f8b8f2a67895709d2c)  [oai_citation:2‡About QR-V™ — Global QR Verification Network.pdf](sediment://file_00000000e52871f5a86e3b6cd41cbaf0)

## First Demo

### External Hiring Agent — Credential Verification

The first demo verifies the first live QR-V identifier:

`QRV-0001-TEST-0001`

It calls the verification API, receives a deterministic verification result, and makes a machine-readable trust decision from the returned state. This is aligned with the QR-V verification workflow and the certificate-first product strategy identified as the fastest path to adoption  [oai_citation:3‡The Product That Can Get the First 10,000 QR-V Users.pdf](sediment://file_00000000903c71fda06131266235f6d9)  [oai_citation:4‡Building certificate issuance and verification as the first implementation of the QR-V™ Issuer Portal.pdf](sediment://file_00000000420c71f5be6a51ada0f4713e)

## Demo Purpose

This repository exists to prove that:

- external agents can consume QR-V verification results
- QR-V identifiers resolve into registry-backed trust decisions
- a third-party system can act on `VERIFIED`, `REVOKED`, `EXPIRED`, or `NOT_FOUND`

This follows the QR-V standard’s deterministic verification model and the system directive that QR-V becomes real when a scan or verification request returns a trusted result  [oai_citation:5‡QR-V™ Global Verification Standard QVS-1.0.pdf](sediment://file_00000000f57071fd9e501ff3a10de350)  [oai_citation:6‡System-Development.txt](sediment://file_000000004ebc722f9f50c2a22d28291e)

## Current Demo

### `hiring-agent-demo/`

This demo simulates an external hiring or credential-screening agent.

It verifies:

`QRV-0001-TEST-0001`

against the public verification API and then decides whether to accept or reject the credential based on the verification state.

## Run

```bash
node hiring-agent-demo/index.js
