# Cursor Constitution Pack

Drop these files into the **root** of a repo to make Cursor/AI follow your standard build rules without repetition.

## Where to put things

- Put `READ_THIS_FIRST.mdc` in the repo root (highest priority).
- Keep all enforceable rule modules in `/rules`.
- Keep persistent learning logs in `/docs`.

## Recommended structure

```
/
  READ_THIS_FIRST.mdc
  README.md
  rules/
    core-stack.mdc
    coding-style.mdc
    privacy-compliance.mdc
    accessibility.mdc
    security.mdc
    testing-release.mdc
    observability.mdc
  docs/
    AI_CHANGELOG_TEMPLATE.mdc
    DECISION_LOG.mdc
    decision-log.md
```

## How you use it

1. Tell Cursor: **"Read READ_THIS_FIRST.mdc, then read all .mdc files, then proceed."**
2. Ask for work normally. The rules enforce:
   - Next.js first (Angular only if truly necessary)
   - privacy/consent gating
   - security headers
   - accessibility gates
   - definition-of-done checks
   - required AI Change Log in every response

## Notes

- This pack is intentionally strict and designed to prevent regression.
- If your org has specific legal language, add it under `rules/privacy-compliance.mdc`.
