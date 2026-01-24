# Decision Log

This log tracks architectural and behavioral decisions for the Pathways Within project.

---

## DL-001: Typography Font Assignment Change

**Date:** 2026-01-15  
**Decision Maker:** Client  
**Status:** Implemented

### Context
Original design-system.mdc specified Clarendon for H1/H2 headings and Raleway for body text.

### Decision
Reverse the font assignments:
- **Raleway (font-sans)** → Headings (H1, H2, H3, H4)
- **Clarendon (font-serif)** → Body text

### Rationale
Client preference for the visual hierarchy and readability.

### Consequences
- Updated tailwind.config.ts font comments
- Updated globals.css typography rules
- Updated all 15+ component files with explicit font classes
- Updated design-system.mdc type scale documentation

---

## DL-002: Compliance Audit and SEO/AI Readability Implementation

**Date:** 2026-01-15  
**Decision Maker:** Developer (in response to client audit request)  
**Status:** Implemented

### Context
Client identified gaps in compliance with cursor-constitution rules:
1. AI Change Logs not being generated
2. Meta keywords tag used (FORBIDDEN per project-pathways-within.mdc)
3. Missing SEO/AI readability features (JSON-LD, robots.txt, sitemap)

### Decision
Implement full compliance:
1. Remove forbidden meta keywords tag
2. Add JSON-LD structured data (Organization, LocalBusiness, MedicalBusiness schemas)
3. Add robots.txt with AI crawler permissions
4. Add dynamic sitemap.ts
5. Include AI Change Logs in all future code changes

### Rationale
- cursor-constitution rules are enforceable constraints, not optional
- SEO and AI readability are essential for discoverability
- Structured data improves search engine and AI comprehension

### Consequences
- New files: robots.txt, sitemap.ts, structured-data.ts, json-ld.tsx
- Modified: layout.tsx (removed keywords, added JSON-LD injection)
- All future changes must include AI Change Log

---

## DL-003: Content Max-Width Constraint (1440px)

**Date:** 2026-01-15  
**Decision Maker:** cursor-constitution (design-system.mdc)  
**Status:** Verified Compliant

### Context
Rule: "Content width exceeding 1440px" is FORBIDDEN.

### Decision
Implement via Tailwind:
- `max-w-site: 1440px` token
- `.container-site` class with max-width and responsive padding
- Sections may have full-bleed backgrounds but content constrained

### Verification
- tailwind.config.ts: `maxWidth: { 'site': '1440px' }`
- globals.css: `.container-site { @apply mx-auto w-full max-w-site px-md sm:px-lg lg:px-xl; }`

### Status
Compliant. All section components use `container-site` class.

---

## DL-004: Design Philosophy Document Creation

**Date:** 2026-01-15  
**Decision Maker:** Client (30+ year designer/developer)  
**Status:** Implemented

### Context
The cursor-constitution system was encoding compliance and structure, but not design *taste*. The design-system.mdc provided specifications (colors, fonts, spacing) but not the judgment needed to apply them well. This resulted in "AI slop" output despite following the technical specs.

### Decision
Create `design-philosophy.mdc` that encodes:
- Design principles, not just specifications
- Anti-patterns to avoid
- Quality bar and checks
- Reference aesthetics
- Decision-making hierarchy
- The "why" behind design choices

### Key Principles Documented
1. **Restraint is sophistication** — Subtract, don't add
2. **2 font weights maximum** — 400 and 600 only
3. **Color dominance** — Navy anchors, accents at 5% max
4. **Whitespace is design** — More space is almost always the answer
5. **Quality bar** — If it looks like "AI generated wellness website," start over

### Consequences
- Added to mandatory reading order in READ_THIS_FIRST.mdc
- design-system.mdc updated to reference philosophy document
- All future design work must pass philosophy checks before technical specs

### Learning
Specifications tell you *what* to use. Philosophy teaches you *how* to use it. Both are required to transfer design expertise.
