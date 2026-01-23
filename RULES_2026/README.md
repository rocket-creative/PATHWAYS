# RULES_2026
## Universal AI-Assisted Development Rules

**Version:** 2026.1  
**Last Updated:** January 2026

---

## What Is This?

This is a comprehensive ruleset for AI-assisted web development. Copy this entire folder into any new project to ensure consistent, high-quality output from AI assistants like Cursor, Copilot, or Claude.

These rules encode:
- **Design philosophy** (not just specs, but taste)
- **SEO & AI readability** standards
- **Accessibility** requirements
- **Privacy & security** compliance
- **Error prevention** through documented patterns
- **Deployment** checklists

---

## Quick Start

### For New Projects

1. Copy the entire `RULES_2026` folder to your project root
2. Rename it to `cursor-rules` or keep as `RULES_2026`
3. Create a project-specific design system file (see template in `rules/design-system.mdc`)
4. Update `docs/ENV_REGISTRY.mdc` with your project's environment variables

### For AI Assistants

Point your AI to `READ_THIS_FIRST.mdc` at the start of every session. This file:
- Establishes rule hierarchy
- Lists mandatory reading order
- Defines the "Definition of Done"
- Contains pre-flight checklists

---

## Folder Structure

```
RULES_2026/
├── READ_THIS_FIRST.mdc      # Master control document (READ FIRST)
├── README.md                 # This file
├── docs/
│   ├── BUILD_ERRORS.mdc     # Runtime/build error log with solutions
│   ├── DEPLOYMENT_CHECKLIST.mdc  # Pre-deployment verification
│   ├── ENV_REGISTRY.mdc     # Environment variables template
│   ├── ERROR_PATTERNS.mdc   # Code pattern errors to avoid
│   └── SECURITY_CHECKLIST.mdc # Security verification checklist (CRITICAL)
└── rules/
    ├── accessibility.mdc     # WCAG compliance
    ├── api-patterns.mdc      # API design patterns
    ├── assets-images.mdc     # Image & asset management
    ├── coding-style.mdc      # Code style conventions
    ├── component-standards.mdc # Component architecture
    ├── content-copy.mdc      # Content writing rules
    ├── core-stack.mdc        # Technology stack
    ├── design-philosophy.mdc # Design taste & principles
    ├── design-system.mdc     # Design system template
    ├── git-workflow.mdc      # Git conventions
    ├── observability.mdc     # Logging & monitoring
    ├── performance.mdc       # Performance requirements
    ├── privacy-compliance.mdc # GDPR/CCPA compliance
    ├── refactoring.mdc       # LLM-assisted code refactoring process
    ├── security.mdc          # Security baseline requirements
    ├── security-hardening.mdc # Detailed vulnerability patterns & fixes (CRITICAL)
    ├── seo-ai-readability.mdc # SEO & AI optimization
    ├── testing-release.mdc   # Testing requirements
    └── testing-strategy.mdc  # Testing guide
```

---

## What's Generic vs Project-Specific

### Generic (Works for Any Project)
- `READ_THIS_FIRST.mdc` - Core rules and workflow
- `rules/design-philosophy.mdc` - Design taste (applies everywhere)
- `rules/seo-ai-readability.mdc` - SEO standards
- `rules/accessibility.mdc` - WCAG compliance
- `rules/privacy-compliance.mdc` - Privacy requirements
- `rules/refactoring.mdc` - LLM-assisted refactoring process
- `rules/security.mdc` - Security requirements
- `rules/performance.mdc` - Performance targets
- `docs/ERROR_PATTERNS.mdc` - Common errors
- `docs/BUILD_ERRORS.mdc` - Build error solutions
- `docs/DEPLOYMENT_CHECKLIST.mdc` - Deployment verification

### Project-Specific (Customize Per Project)
- `rules/design-system.mdc` - Create project-specific version with actual colors, fonts
- `docs/ENV_REGISTRY.mdc` - Add your project's environment variables
- Brand colors, typography, specific component patterns

---

## Key Principles

### 1. Rules Over Prompts
`.mdc` files are enforceable constraints, not suggestions. The AI must follow them.

### 2. Stricter Rule Wins
When rules conflict, the stricter one takes precedence. Security, accessibility, and compliance override convenience.

### 3. Learn From Errors
When errors occur, they get logged in `ERROR_PATTERNS.mdc` or `BUILD_ERRORS.mdc` so they never repeat.

### 4. Definition of Done
Work isn't complete until:
- Build passes
- Lint passes
- Tests pass
- Accessibility checks pass
- SEO requirements met
- Security headers verified

### 5. Change Log Required
Every AI response that changes code must include a Change Log explaining what, why, and how to verify.

---

## Customization Guide

### Adding Project Colors

1. Open `rules/design-system.mdc`
2. Follow the template to define your brand colors
3. List allowed and banned colors explicitly

### Adding Environment Variables

1. Open `docs/ENV_REGISTRY.mdc`
2. Add your variables with:
   - Name
   - Purpose
   - Format
   - Required/Optional
   - Public/Private

### Adding New Rules

1. Create a new `.mdc` file in `rules/`
2. Follow the format of existing rules
3. Add reference to `READ_THIS_FIRST.mdc` if critical

### Logging New Errors

**Code Pattern Errors** → Add to `docs/ERROR_PATTERNS.mdc`
**Build/Runtime Errors** → Add to `docs/BUILD_ERRORS.mdc`

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 2026.1 | Jan 2026 | Initial release with comprehensive SEO, error logging, deployment checklists |

---

## License

Use freely. Attribution appreciated but not required.

---

## Questions?

These rules are designed to be self-documenting. If something is unclear:
1. Check `READ_THIS_FIRST.mdc` for the master rules
2. Check the specific `.mdc` file for that topic
3. If still unclear, the rule should be clarified (update the file!)

---

END OF FILE
