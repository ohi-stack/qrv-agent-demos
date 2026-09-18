# QR-V™ Agent Interoperability and Conformance Contract

**Tracking:** qrv-agent-demos#2  
**API dependency:** ohi-stack/qrv-api#16  
**SDK dependency:** ohi-stack/qrv-sdk#1

## Purpose

Define reference behavior for approved automated clients using QR-V.

Agents consume QR-V trust results; they do not redefine them.

## Required reference clients

1. Public verifier agent
2. Issuer automation agent
3. Bounded-concurrency batch verifier
4. Signed webhook consumer
5. Policy decision client
6. Enterprise integration example

## Decision semantics

Reference implementations must preserve:

- `VERIFIED` — may be eligible for local policy acceptance
- `REVOKED` — reject
- `EXPIRED` — reject or review according to local policy
- `NOT_FOUND` — not verified
- integrity/signature failure — reject and flag
- suspended issuer — reject/review
- `UNAVAILABLE` / timeout / 5xx — unknown; never convert to VERIFIED or NOT_FOUND

## Authentication

Mutation demos must use scoped service identities from the production API model.

Credentials are supplied only by environment configuration. Live keys must never be committed.

## Required conformance fixtures

- known VERIFIED
- REVOKED
- EXPIRED
- NOT_FOUND
- malformed QRVID
- invalid hash/signature
- suspended issuer
- compromised or unknown signing key
- unauthorized mutation
- cross-tenant mutation
- duplicate idempotency key
- webhook replay
- API unavailable
- database unavailable
- rate limited

## Machine-readable output

The harness should emit structured JSON with:

- test/fixture identifier
- client identity type
- request ID
- expected status
- actual status
- pass/fail
- latency metadata
- retry count where applicable
- error code where applicable

A concise human-readable CI summary should be generated from the same result set.

## Safety invariant

Automated issuance does not create authority an issuer does not possess.

Agent automation must remain limited to the issuer's permitted scope and all mutations must be attributable in QR-V audit history.
