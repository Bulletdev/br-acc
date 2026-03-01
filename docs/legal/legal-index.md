# Legal and Ethics Index — WTG / Icarus

Policy-Version: v1.0.0  
Effective-Date: 2026-02-28  
Owner: WTG Governance Team

## Core policies

- [ETHICS.md](../../ETHICS.md)
- [LGPD.md](../../LGPD.md)
- [PRIVACY.md](../../PRIVACY.md)
- [TERMS.md](../../TERMS.md)
- [DISCLAIMER.md](../../DISCLAIMER.md)
- [SECURITY.md](../../SECURITY.md)
- [ABUSE_RESPONSE.md](../../ABUSE_RESPONSE.md)
- [public-compliance-pack.md](./public-compliance-pack.md)

## Applicability by deployment model

### WTG Open (public-safe deployment)

Applies directly:

- ETHICS
- LGPD baseline
- PRIVACY
- TERMS
- DISCLAIMER
- SECURITY
- ABUSE_RESPONSE

Additional operational constraints:

- `PUBLIC_MODE=true`
- person-level entities blocked by default
- public privacy gate mandatory in CI

### Icarus Advanced (internal deployment)

Applies directly:

- ETHICS
- LGPD baseline
- PRIVACY
- TERMS
- SECURITY
- ABUSE_RESPONSE

Additional private controls:

- internal runbooks
- restricted infrastructure details
- advanced investigation workflows

## Change log policy

Any policy change must:

1. Update Policy-Version and Effective-Date.
2. Include changelog note in PR description.
3. Pass `Compliance Pack Gate`.
