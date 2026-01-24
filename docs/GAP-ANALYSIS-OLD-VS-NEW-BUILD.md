# Gap Analysis: Old Build vs Current Build

**Source:** Old build lives in **`/old`** (content in `old/content/`, OLD PAGES in `old/OLD PAGES/`, site plan in `old/content/00-SITE-PLAN.md`).

**Purpose:** Identify missing content (FAQs, definitions, forms) and add it systematically. **We ask before adding each item.**

---

## 1. Old Build — What Exists (from `/old`)

### Content files (`old/content/`)
- **00-SITE-PLAN.md** — IA, utility pages (/good-faith-estimate, /cookies, service-finder), FAQ categories (General, Therapy, **Wellness**, **Insurance and payment**, Scheduling)
- **01-homepage.md** — 360° approach, services overview, insurance section, crisis (988, Crisis Text Line, **Spanish Presione 2**)
- **02-about.md**, **03-services-landing.md**, **04-team.md**, **05-locations.md**
- **06-faq.md** — General, Scheduling, Telehealth, Therapy; **extra Q**: "What happens if I have to miss a session or I forget?"; crisis: **NYC Well**, **Emergency 911**, **Spanish Presione 2**; CTA "Still have questions?"
- **07-contact.md** — Form with **How did you hear about us?** (Google, social, referral, provider, insurance, Other); **Preferred location** includes **Not sure yet**; **Optional**: SMS consent, email marketing consent; **What happens next?** section; **Good Faith Estimate** notice
- **services/therapy/** — individual, child, teen, couples, trauma, EMDR, somatic, hypnotherapy, veterans, weight-loss-surgery, etc. (each with meta, hero, body, **FAQ section**)
- **services/wellness/** — massage, acupuncture, skincare, hydrafacial, injectables, iv-vitamin-infusion, energy-work, pain-management, etc. (each with **FAQ section** e.g. "How long?", "How often?", "Is massage safe?", "What to expect?")

### OLD PAGES (`old/OLD PAGES/`)
- Extracted legacy site text (therapy + wellness). **Definitions** embedded in copy (CBT, Gottman, EMDR, play therapy, etc.). No standalone glossary.

### Site plan utilities (`00-SITE-PLAN.md`)
- **/good-faith-estimate** — Good Faith Estimate notice
- **/cookies** — Cookie policy
- **/accessibility** — Accessibility statement
- **service-finder** — Interactive quiz (future)

---

## 2. Current Build — What Exists

### Pages & routes
| Route | Purpose |
|-------|---------|
| `/`, `/about`, `/locations`, `/start`, `/contact`, `/faq` | Main marketing |
| `/client-intake` | New Client form (no API; not linked from nav/footer/Start/Contact) |
| `/business-intake` | Staff online-presence inventory |
| `/privacy`, `/terms`, `/accessibility` | Legal (placeholders except accessibility) |
| `/wellness`, `/wisdom` | Hubs + services, conditions, team |

### FAQ (`src/data/faq.ts`)
- **4 categories:** General, Scheduling, Telehealth, Therapy. **16 questions** total.
- **Missing vs old:** Longer/richer answers (IvyPay, “What happens if I miss”), **extra Q** "What happens if I have to miss…?", **Wellness FAQs**, **Insurance/payment** category, crisis **NYC Well**, **911**, **Spanish Presione 2**, CTA "Still have questions?"

### Contact form (`/contact`)
- **Has:** First/last name, email, phone, interest, location, message, privacy+terms consent. API validates but **does not send email**.
- **Missing vs old:** **How did you hear about us?**; location **Not sure yet**; **optional SMS** consent; **optional email marketing** consent; **What happens next?** section; **Good Faith Estimate** notice/link.

### Definitions
- **None** as dedicated page. Old uses definitions **inside** service pages (CBT, Gottman, etc.).

---

## 3. Prioritized Checklist — Add Only After You Say Yes

We will **ask before implementing** each item. Reply with the **item #** (or "skip") to proceed.

### A. FAQ

| # | Item | Source | Action |
|---|------|--------|--------|
| A1 | **FAQ: "What happens if I have to miss a session or I forget?"** | `old/content/06-faq.md` | Add to Scheduling category in `faq.ts` |
| A2 | **FAQ: Richer answers** (IvyPay, credit card on file, “What happens if I miss” etc.) | `06-faq.md` | Expand existing FAQ answers in `faq.ts` to match old |
| A3 | **FAQ: Wellness category** (e.g. massage length, how often, safety, first visit) | `old/content/services/wellness/massage.md` etc. | Add Wellness category + questions to `faq.ts` |
| A4 | **FAQ: Insurance & payment category** | Site plan, `06-faq.md` | Add category + questions (superbill, HSA/FSA, Cherry, etc.) |
| A5 | **FAQ page: Crisis resources** — NYC Well, 911, Spanish Presione 2 | `06-faq.md` | Add to FAQ crisis section |
| A6 | **FAQ page: CTA "Still have questions?"** + Contact / Call | `06-faq.md` | Add or adjust CTA section on FAQ page |

### B. Contact form

| # | Item | Source | Action |
|---|------|--------|--------|
| B1 | **"How did you hear about us?"** dropdown | `07-contact.md` | Add optional field to contact form |
| B2 | **Preferred location: "Not sure yet"** | `07-contact.md` | Add option to location dropdown |
| B3 | **Optional SMS consent** (reminders, etc.) | `07-contact.md` | Add optional checkbox; ensure TCPA-friendly |
| B4 | **Optional email marketing consent** | `07-contact.md` | Add optional checkbox |
| B5 | **"What happens next?"** section on Contact | `07-contact.md` | Add section below form (1–4 steps) |
| B6 | **Good Faith Estimate** notice/link on Contact | `07-contact.md`, site plan | Add short notice + link to /good-faith-estimate |

### C. Pages

| # | Item | Source | Action |
|---|------|--------|--------|
| C1 | **/good-faith-estimate** page | Site plan, `07-contact.md` | Create page; add to footer legal / Contact |
| C2 | **/cookies** (cookie policy) | Site plan | Create page; add to footer legal |
| C3 | **Link Client Intake** from Start, Contact, FAQ, footer | Gap analysis | Add links so clients can find intake form |

### D. Service-level content (definitions, FAQs)

| # | Item | Source | Action |
|---|------|--------|--------|
| D1 | **Service-specific FAQs** (e.g. massage, individual therapy) | `old/content/services/*` | Add per-service FAQs to wellness/wisdom service pages or data |
| D2 | **Definitions/glossary** (CBT, Gottman, EMDR, etc.) | OLD PAGES, service copy | Either glossary page **or** keep definitions in service copy only |

### E. Other

| # | Item | Source | Action |
|---|------|--------|--------|
| E1 | **Contact form email delivery** | Current API | Wire `/api/contact` to Resend (or chosen provider) |
| E2 | **Client Intake API** | `CLIENT-INTAKE-SETUP.md` | Add `/api/client-intake`, wire form to Resend |
| E3 | **FAQ in main nav** | Site plan | Add FAQ link to main navigation |

---

## 4. Next Steps

1. **Pick the first item** from the checklist (e.g. **A1** or **B1**).
2. **Reply** with the # and any preferences (e.g. "A1, use the exact old copy").
3. We **implement only that item** and confirm.
4. Repeat for the next item.

---

*Last updated: January 2026. Old build: `/old`.*
