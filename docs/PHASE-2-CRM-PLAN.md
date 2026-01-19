# Phase 2: HIPAA-Compliant CRM & Unified Booking System

## Pathways Within — Wisdom and Wellness Collaborative

**Document Version:** 1.1  
**Created:** January 18, 2026  
**Updated:** January 18, 2026  
**Status:** Planning

---

## Executive Summary

Phase 2 transforms Pathways Within from a marketing website into a fully integrated practice management ecosystem — and lays the foundation for a **productized SaaS platform** that can be sold to other healthcare and wellness practices.

### The Vision

**Phase 2A-F:** Build for Pathways Within (internal use)  
**Phase 3:** Productize and sell to the industry

### What We're Building

1. **HIPAA-Compliant CRM** — Patient relationship management with proper PHI handling
2. **Jane Integration** — Leveraging existing Jane EHR for scheduling, records, and insurance billing
3. **Aesthetic/Wellness Scheduling** — Seamless booking for non-medical spa services
4. **Cash Payment Handling** — Compliant cash transactions for wellness services
5. **Unified Experience** — Single patient journey across therapy and wellness
6. **Beautiful, Fast UI** — Editorial design quality applied to healthcare software

### The Challenge

Pathways Within operates as a hybrid practice:
- **Therapy services** → Insurance billing, HIPAA-regulated clinical records
- **Wellness services** → Mix of insurance-eligible and cash-pay aesthetic services

These two worlds must coexist in one seamless patient experience while maintaining strict compliance boundaries.

---

## Competitive Analysis: Why We're Building This

### Current Solution: TrustDrivenCare

Pathways Within currently uses [TrustDrivenCare](https://trustdrivencare.com/) for patient communication and Jane App sync. 

**What TrustDrivenCare claims:**
- HIPAA compliant
- Jane App sync (they claim "exclusive" connection)
- All-in-one communication (SMS, email, social)
- Automated appointment reminders
- Patient reactivation pipelines
- Daily clinic reporting

**The reality (based on your experience):**
| Claim | Reality |
|-------|---------|
| HIPAA compliant | Unverified — no public BAA documentation, no SOC 2, no third-party audit visible |
| Fast & easy to use | Slow, difficult, confusing UX |
| Beautiful interface | Dated, cluttered, template-driven design |
| Jane sync | Works but limited, polling-based |
| Reliable | "Generally a mess" |

**Red flags on their HIPAA claims:**
- No visible BAA signing process in their sales flow
- No SOC 2 Type II certification displayed
- No security/compliance page with technical details
- Built on generic CRM platform (likely GoHighLevel white-label)
- "HIPAA compliant" stated without audit evidence

### The Opportunity

TrustDrivenCare represents the **current state of healthcare CRM** in this market:
- Generic platforms white-labeled for healthcare
- HIPAA compliance as marketing checkbox, not engineering priority
- Ugly, slow, template-driven UX
- Education/training used to compensate for bad software

**What the market actually needs:**
- Purpose-built for hybrid therapy/wellness practices
- Real HIPAA compliance (audited, documented, enforced)
- Beautiful, fast, intuitive interfaces
- Jane integration that actually works
- Cash + insurance payment handling in one system

### Competitive Positioning

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        MARKET POSITIONING                                    │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│                        COMPLIANCE RIGOR                                      │
│                              ▲                                               │
│                              │                                               │
│            Salesforce        │         ┌──────────────────┐                 │
│            Health Cloud      │         │  OUR PRODUCT     │                 │
│                 ●            │         │  (Target Zone)   │                 │
│                              │         └──────────────────┘                 │
│                              │                                               │
│         NexHealth ●          │                  ● Jane App                  │
│                              │                    (EHR only)                │
│                              │                                               │
│   TrustDrivenCare ●          │                                               │
│   (claims compliance)        │                                               │
│                              │                                               │
│   Generic CRMs ●             │                                               │
│   (HubSpot, etc)             │                                               │
│                              │                                               │
│ ─────────────────────────────┼──────────────────────────────────────────▶   │
│  BASIC                       │                              BEAUTIFUL        │
│  TEMPLATE UI                 │                              EDITORIAL UI     │
│                                                                              │
│  We're targeting: High compliance + Beautiful design                         │
│  This quadrant is EMPTY in the market                                        │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Why We Can Win

1. **Design DNA** — Your design philosophy (restraint, editorial, warmth) applied to healthcare software is differentiated
2. **Practitioner-first** — Built by a practice for practices, not by enterprise software people
3. **Real compliance** — Actual BAAs, actual encryption, actual audits
4. **Hybrid model expertise** — Therapy + wellness in one system is rare
5. **Jane integration done right** — Not a hack, proper API integration

---

---

## Product Vision: From Internal Tool to SaaS

### Phase 2 → Phase 3 Evolution

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           PRODUCT ROADMAP                                    │
└─────────────────────────────────────────────────────────────────────────────┘

PHASE 2 (This Document)                    PHASE 3 (Future)
─────────────────────────                  ─────────────────────────
                                           
┌─────────────────────────┐                ┌─────────────────────────┐
│  PATHWAYS WITHIN        │                │  MULTI-TENANT SaaS      │
│  Internal CRM           │ ───────────▶   │  Product                │
│                         │                │                         │
│  • Single tenant        │                │  • Multi-tenant         │
│  • 5 locations          │                │  • White-label option   │
│  • Pathways branding    │                │  • Self-serve onboard   │
│  • Custom integrations  │                │  • Subscription billing │
│                         │                │  • API for partners     │
└─────────────────────────┘                └─────────────────────────┘
                                           
Timeline: Months 1-6                       Timeline: Months 7-12+
                                           
Outcome: Working product                   Outcome: Revenue-generating
for Pathways Within                        SaaS business
```

### Why Build for Productization from Day 1

Even though Phase 2 is for internal use, we architect for multi-tenancy now because:

1. **Cheaper to build right once** than refactor later
2. **Pathways becomes the first customer** — real-world testing
3. **Design system is transferable** — editorial quality at scale
4. **Compliance infrastructure is reusable** — BAAs, audits, encryption
5. **Jane integration is valuable** — other practices need this

### Target Market for Phase 3

| Segment | Description | Size | Willingness to Pay |
|---------|-------------|------|-------------------|
| **Hybrid practices** | Therapy + wellness (like Pathways) | ~5,000 US | High — underserved |
| **Medical spas** | Aesthetic-focused with some clinical | ~8,000 US | Medium-High |
| **Integrative clinics** | Acupuncture, naturopathy, PT | ~15,000 US | Medium |
| **Mental health groups** | Group therapy practices | ~20,000 US | Medium |

**Initial target:** Hybrid practices using Jane App (direct competitors to TrustDrivenCare)

### Productization Architecture Decisions

These decisions affect Phase 2 implementation:

| Decision | Phase 2 (Pathways) | Phase 3 (SaaS) |
|----------|-------------------|----------------|
| **Database** | Single Supabase project | Schema-based multi-tenancy |
| **Auth** | Pathways staff only | Organization-scoped auth |
| **Branding** | Pathways colors/logo | Configurable per tenant |
| **Jane Integration** | Single clinic connection | Multi-clinic OAuth |
| **Billing** | N/A (internal) | Stripe subscription |
| **Support** | Internal team | Tiered support model |

### Revenue Model (Phase 3)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           PRICING TIERS (Concept)                            │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ESSENTIAL                    PROFESSIONAL                ENTERPRISE        │
│  $199/mo                      $399/mo                     Custom             │
│                                                                              │
│  • 1 location                 • Up to 5 locations         • Unlimited        │
│  • Jane sync                  • Jane sync                 • Jane sync        │
│  • Aesthetic booking          • Aesthetic booking         • Custom booking   │
│  • Basic CRM                  • Full CRM                  • Full CRM         │
│  • Email reminders            • SMS + Email               • All channels     │
│  • Standard support           • Priority support          • Dedicated CSM    │
│                               • Cash reconciliation       • Custom reports   │
│                               • Analytics dashboard       • API access       │
│                               • Patient portal            • White-label      │
│                                                           • On-premise opt   │
│                                                                              │
│  Target: Solo/small           Target: Multi-location      Target: Enterprise │
│  practices                    like Pathways               health systems     │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Competitive Pricing Analysis

| Competitor | Price | What You Get |
|------------|-------|--------------|
| TrustDrivenCare | ~$300-500/mo | CRM + education, Jane sync |
| NexHealth | $400-800/mo | Patient engagement, no Jane |
| Salesforce Health Cloud | $300/user/mo | Enterprise CRM, complex setup |
| **Our Product** | $199-399/mo | Full CRM + Jane + aesthetic booking |

**Positioning:** More capable than TrustDrivenCare, easier than Salesforce, purpose-built for hybrid practices.

---

## Current State Assessment

### Existing Technical Stack

| System | Purpose | Status |
|--------|---------|--------|
| **Jane EHR** | Booking, scheduling, patient records | Active |
| **SimplePractice** | Telehealth (NY, NJ, NC, FL) | Active |
| **IvyPay** | Payment processing | Active |
| **Cherry** | Financing for wellness services | Active |
| **Website** | Next.js marketing site | Phase 1 |

### Existing Compliance Posture

- SimplePractice is HIPAA-compliant (telehealth)
- Jane provides HIPAA-compliant scheduling and records
- IvyPay is HIPAA-compliant payment processing
- No unified CRM layer for patient relationship management

### Gap Analysis

| Requirement | Current State | Gap |
|-------------|---------------|-----|
| Unified patient profiles | Fragmented across systems | Need central CRM |
| Lead/intake management | Manual process | Need automated pipeline |
| Wellness-specific scheduling | Using Jane (designed for clinical) | Need aesthetic booking layer |
| Cash payment tracking | Ad-hoc | Need compliant cash handling |
| Marketing automation | Mailchimp (limited PHI controls) | Need HIPAA-compliant marketing |
| Patient communication | Multiple systems | Need unified, compliant messaging |
| Reporting/analytics | Siloed in each system | Need unified dashboard |

---

## Design Philosophy Applied to Healthcare Software

### The Problem with Healthcare Software Design

Most healthcare CRMs look like this:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  TYPICAL HEALTHCARE CRM (What TrustDrivenCare looks like)                    │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ❌ Corporate blue everywhere                                                │
│  ❌ 47 different font sizes                                                  │
│  ❌ Buttons in every color of the rainbow                                    │
│  ❌ Dense tables with tiny text                                              │
│  ❌ Sidebars with 30+ menu items                                             │
│  ❌ Modal windows inside modal windows                                       │
│  ❌ "Dashboard" with 15 widgets fighting for attention                       │
│  ❌ Stock photos of people shaking hands                                     │
│  ❌ Gradients, shadows, and "enterprise" styling                             │
│                                                                              │
│  Result: Cognitive overload, slow workflows, staff frustration               │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Our Design Approach (from design-philosophy.mdc)

We apply the same editorial principles to software that we apply to the marketing site:

| Principle | Marketing Site | CRM Application |
|-----------|---------------|-----------------|
| **Restraint is sophistication** | Limited color palette | Limited UI elements per screen |
| **2 font weights only** | 400 + 600 | Same — no font soup in tables |
| **Color as architecture** | Hero sections 25-35% | Primary actions only, not decoration |
| **Whitespace is design** | Generous padding | Breathing room in data views |
| **Editorial, not template** | Magazine-feel layout | Purposeful, calm interfaces |
| **Warm over cool** | Olive, sage, cream | Warm neutrals, not corporate blue |

### CRM Design System

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  OUR CRM DESIGN (Editorial approach)                                         │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  COLOR USAGE                                                                 │
│  ────────────────────────────────────────────────────                        │
│  • Background: Warm white (#FEFDFB) or subtle cream                          │
│  • Text: Deep navy or warm charcoal (not pure black)                         │
│  • Primary action: ONE accent color (sage green from Pathways)               │
│  • Secondary: Subtle borders, not colored backgrounds                        │
│  • Status colors: Muted versions (not screaming red/green)                   │
│                                                                              │
│  TYPOGRAPHY                                                                  │
│  ────────────────────────────────────────────────────                        │
│  • Headings: Semibold (600) — Clarendon or system serif                      │
│  • Body/Data: Regular (400) — Clean sans-serif                               │
│  • NO light (300), medium (500), or bold (700)                               │
│  • Tables: Consistent size, generous row height                              │
│                                                                              │
│  LAYOUT                                                                      │
│  ────────────────────────────────────────────────────                        │
│  • Maximum 3 columns of information                                          │
│  • One primary action per view                                               │
│  • Progressive disclosure (don't show everything)                            │
│  • Calm empty states (not desperate upsells)                                 │
│                                                                              │
│  INTERACTIONS                                                                │
│  ────────────────────────────────────────────────────                        │
│  • Subtle hover states (not jarring color changes)                           │
│  • Smooth transitions (0.2-0.3s)                                             │
│  • Respect prefers-reduced-motion                                            │
│  • Loading states that feel calm, not anxious                                │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Visual Comparison

**TrustDrivenCare Dashboard (Typical)**
```
┌─────────────────────────────────────────────────────────────────────────────┐
│ ☰ MENU │ Dashboard │ Contacts │ Conversations │ ... │ 🔔 │ 👤            │
├─────────┬───────────────────────────────────────────────────────────────────┤
│ Dashboard│                                                                  │
│ Contacts │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐           │
│ Calendar │  │ 📊 142   │ │ 📈 +23%  │ │ 💬 47    │ │ 📅 12    │           │
│ Campaigns│  │ Contacts │ │ Growth   │ │ Messages │ │ Appts    │           │
│ Automati │  └──────────┘ └──────────┘ └──────────┘ └──────────┘           │
│ Settings │                                                                  │
│ Reports  │  ┌─────────────────────────────────────────────────────────┐    │
│ Integrat │  │ RECENT ACTIVITY              [Filter ▼] [Export] [+Add] │    │
│ ...      │  ├─────────────────────────────────────────────────────────┤    │
│ ...      │  │ ● Jane S. │ Appt confirmed │ 2m ago  │ [View] [Edit]    │    │
│ ...      │  │ ● Tom W.  │ Form submitted │ 5m ago  │ [View] [Edit]    │    │
│          │  │ ● Mary J. │ Payment failed │ 12m ago │ [View] [Edit]    │    │
│          │  └─────────────────────────────────────────────────────────┘    │
│          │                                                                  │
│          │  [BLUE BUTTON] [BLUE BUTTON] [BLUE BUTTON] [BLUE BUTTON]        │
└──────────┴──────────────────────────────────────────────────────────────────┘
Dense, cluttered, everything competing for attention
```

**Our CRM Dashboard (Editorial)**
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                              │
│     PATHWAYS WITHIN                                    Garden City │ Sarah ▾│
│                                                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│                                                                              │
│     Good morning, Sarah                                                      │
│                                                                              │
│     Tuesday, January 20                                                      │
│     7 appointments today · 2 need attention                                  │
│                                                                              │
│                                                                              │
│     ──────────────────────────────────────────────────────────────────      │
│                                                                              │
│                                                                              │
│      9:00    Jane Smith           HydraFacial            ● Confirmed        │
│                                                                              │
│     10:30    Tom Wilson           Laser Hair (2/6)       ○ Needs review     │
│                                   Insurance verification failed              │
│                                                                              │
│     11:00    New Patient          Cryotherapy            ● Confirmed        │
│              Sarah Chen           First visit                                │
│                                                                              │
│                                                                              │
│     ──────────────────────────────────────────────────────────────────      │
│                                                                              │
│                                                                              │
│                                            + Add appointment                 │
│                                                                              │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
Calm, focused, information hierarchy clear, one primary action
```

### Design as Competitive Advantage

This isn't just aesthetics — it's **workflow efficiency**:

| Metric | Typical CRM | Editorial CRM |
|--------|-------------|---------------|
| Time to find info | Scanning multiple panels | Immediate hierarchy |
| Clicks to complete task | 5-8 clicks average | 2-3 clicks |
| Training time | Days/weeks | Hours |
| Staff satisfaction | "It's fine, I guess" | "I actually like using this" |
| Error rate | Higher (cognitive overload) | Lower (clear UI) |

**Staff who like their tools use them correctly.** Compliance improves when the software isn't fighting against the user.

---

## Architecture Overview

### System Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        PATIENT-FACING LAYER                                  │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│   ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐        │
│   │  Website        │    │  Patient Portal │    │  Booking Widget │        │
│   │  (Next.js)      │    │  (Authenticated)│    │  (Embedded)     │        │
│   └────────┬────────┘    └────────┬────────┘    └────────┬────────┘        │
│            │                      │                      │                  │
└────────────┼──────────────────────┼──────────────────────┼──────────────────┘
             │                      │                      │
             ▼                      ▼                      ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                        API GATEWAY (HIPAA COMPLIANT)                         │
│   • OAuth 2.0 / PKCE Authentication                                          │
│   • Rate Limiting                                                            │
│   • Audit Logging                                                            │
│   • PHI Encryption in Transit (TLS 1.3)                                      │
└─────────────────────────────────────────────────────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                        CRM CORE (Supabase HIPAA)                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│   ┌─────────────┐   ┌─────────────┐   ┌─────────────┐   ┌─────────────┐    │
│   │  Patients   │   │   Leads     │   │  Services   │   │ Transactions│    │
│   │  (PHI)      │   │  Pipeline   │   │  Catalog    │   │  & Payments │    │
│   └─────────────┘   └─────────────┘   └─────────────┘   └─────────────┘    │
│                                                                              │
│   ┌─────────────┐   ┌─────────────┐   ┌─────────────┐   ┌─────────────┐    │
│   │  Consents   │   │   Notes     │   │  Documents  │   │ Audit Logs  │    │
│   │  & Forms    │   │  (Non-PHI)  │   │  (Encrypted)│   │ (Immutable) │    │
│   └─────────────┘   └─────────────┘   └─────────────┘   └─────────────┘    │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                        INTEGRATION LAYER                                     │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│   ┌─────────────────┐        ┌─────────────────┐        ┌────────────────┐ │
│   │    JANE API     │        │  SIMPLEPRACTICE │        │    PAYMENTS    │ │
│   │    (JDP)        │        │    (Telehealth) │        │                │ │
│   │                 │        │                 │        │  ┌──────────┐  │ │
│   │  • Patients     │        │  • Sessions     │        │  │  IvyPay  │  │ │
│   │  • Appointments │        │  • Notes        │        │  │  (Cards) │  │ │
│   │  • Insurance    │        │  • Video        │        │  └──────────┘  │ │
│   │  • Billing      │        │                 │        │  ┌──────────┐  │ │
│   │  • Claim.MD     │        │                 │        │  │  Square  │  │ │
│   │                 │        │                 │        │  │  (Cash)  │  │ │
│   └─────────────────┘        └─────────────────┘        │  └──────────┘  │ │
│                                                         │  ┌──────────┐  │ │
│                                                         │  │  Cherry  │  │ │
│                                                         │  │(Finance) │  │ │
│                                                         │  └──────────┘  │ │
│                                                         └────────────────┘ │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Data Flow: Service Type Determines Path

```
┌────────────────────────────────────────────────────────────────────────────┐
│                           PATIENT INTAKE                                    │
└────────────────────────────────────┬───────────────────────────────────────┘
                                     │
                                     ▼
                    ┌────────────────────────────────┐
                    │     What services do you       │
                    │     need today?                │
                    └────────────────┬───────────────┘
                                     │
              ┌──────────────────────┼──────────────────────┐
              │                      │                      │
              ▼                      ▼                      ▼
    ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
    │    THERAPY      │    │    WELLNESS     │    │    AESTHETIC    │
    │    SERVICES     │    │    (Medical)    │    │    (Spa Only)   │
    │                 │    │                 │    │                 │
    │  • Individual   │    │  • Acupuncture  │    │  • HydraFacial  │
    │  • Couples      │    │  • IV Infusion  │    │  • Laser Hair   │
    │  • EMDR         │    │  • Pain Mgmt    │    │  • Teeth White  │
    │  • Trauma       │    │  • Massage Rx   │    │  • Perm Makeup  │
    └────────┬────────┘    └────────┬────────┘    └────────┬────────┘
             │                      │                      │
             ▼                      ▼                      ▼
    ┌─────────────────────────────────────────────────────────────┐
    │                    FULL HIPAA PATH                          │
    │  • Jane EHR for scheduling                                  │
    │  • Clinical intake forms                                    │
    │  • Insurance verification (Claim.MD)                        │
    │  • Full PHI handling                                        │
    └─────────────────────────────────┬───────────────────────────┘
                                      │
                                      │     ┌─────────────────────────────┐
                                      │     │    AESTHETIC-ONLY PATH      │
                                      │     │  • CRM direct booking       │
                                      │     │  • Simplified intake        │
                                      │     │  • Cash/card payment        │
                                      │     │  • Minimal PHI (consents)   │
                                      │     └──────────────┬──────────────┘
                                      │                    │
                                      ▼                    ▼
                    ┌─────────────────────────────────────────────────┐
                    │              UNIFIED CRM RECORD                  │
                    │  • Single patient profile                        │
                    │  • Service history (all types)                   │
                    │  • Payment history                               │
                    │  • Communication preferences                     │
                    └─────────────────────────────────────────────────┘
```

---

## HIPAA-Compliant Tech Stack

### Core Infrastructure

| Layer | Technology | HIPAA Status | Notes |
|-------|------------|--------------|-------|
| **Database** | Supabase (Team/Enterprise) | ✅ BAA Available | HIPAA add-on required, ~$599/mo |
| **Backend** | Next.js API Routes + Edge Functions | ⚠️ Verify | Supabase edge functions need verification |
| **Authentication** | Supabase Auth + RBAC | ✅ Included | Role-based access control |
| **File Storage** | Supabase Storage (encrypted) | ✅ BAA Covered | AES-256 at rest |
| **Hosting** | Vercel Enterprise | ✅ BAA Available | Or AWS with BAA |

### Integration Services

| Service | Purpose | HIPAA Status | BAA Required |
|---------|---------|--------------|--------------|
| **Jane App** | EHR, scheduling, insurance | ✅ Compliant | Yes (via JDP) |
| **SimplePractice** | Telehealth | ✅ Compliant | Already in place |
| **Square** | ALL payments (cards + cash + POS) | ✅ BAA Available | Yes |
| **Twilio** | SMS (reminders) | ✅ BAA Available | Yes |
| **SendGrid** | Email (HIPAA tier) | ✅ BAA Available | Yes |

### Security Requirements

| Requirement | Implementation |
|-------------|----------------|
| Encryption at rest | AES-256 (Supabase default with HIPAA add-on) |
| Encryption in transit | TLS 1.3 mandatory |
| Authentication | OAuth 2.0 with PKCE, MFA required for staff |
| Access control | Role-based (RBAC) with least privilege |
| Audit logging | Immutable logs, 6-year retention |
| Backup | Daily encrypted backups, point-in-time recovery |
| Breach response | <72 hour notification, documented playbook |

---

## Jane Integration Deep Dive

### Jane Developer Platform (JDP) Capabilities

Jane provides API access through their Developer Platform. Here's what's available:

#### Available Endpoints

| Endpoint | Operations | Use Case |
|----------|------------|----------|
| `/patients` | Read, Create, Update | Sync patient demographics |
| `/appointments` | Read, Create, Update, Cancel | Bidirectional scheduling |
| `/locations` | Read | Multi-location support |
| `/staff_members` | Read | Provider availability |
| `/treatments` | Read | Service catalog sync |
| `/invoices` | Read | Payment reconciliation |
| `/insurance` | Read (via Claim.MD) | Eligibility checks |

#### Authentication Flow

```
┌─────────────────┐      ┌─────────────────┐      ┌─────────────────┐
│   Pathways CRM  │      │    Jane OAuth   │      │   Jane API      │
│   (Extension)   │      │    Server       │      │   (JDP)         │
└────────┬────────┘      └────────┬────────┘      └────────┬────────┘
         │                        │                        │
         │  1. Authorization Request (PKCE)                │
         │───────────────────────>│                        │
         │                        │                        │
         │  2. User Login/Consent │                        │
         │<───────────────────────│                        │
         │                        │                        │
         │  3. Auth Code          │                        │
         │<───────────────────────│                        │
         │                        │                        │
         │  4. Exchange for Token │                        │
         │───────────────────────>│                        │
         │                        │                        │
         │  5. Access + Refresh Tokens                     │
         │<───────────────────────│                        │
         │                        │                        │
         │  6. API Request (Bearer Token)                  │
         │─────────────────────────────────────────────────>
         │                        │                        │
         │  7. Patient/Appointment Data                    │
         │<─────────────────────────────────────────────────
         │                        │                        │
```

#### Sync Strategy (No Webhooks Available)

Jane does NOT currently support webhooks. We must implement polling-based sync:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        JANE SYNC SERVICE                                     │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  Schedule: Every 5 minutes (within rate limits)                              │
│                                                                              │
│  ┌─────────────────────────────────────────────────────────────────────────┐│
│  │  1. Fetch appointments modified since last sync                          ││
│  │  2. Fetch patients modified since last sync                              ││
│  │  3. Compare with CRM records                                             ││
│  │  4. Update CRM with changes (Jane is source of truth for clinical)       ││
│  │  5. Push aesthetic bookings TO Jane (if provider wants unified view)     ││
│  │  6. Log all sync operations for audit                                    ││
│  └─────────────────────────────────────────────────────────────────────────┘│
│                                                                              │
│  Rate Limits:                                                                │
│  • 100 requests/min per endpoint per clinic                                  │
│  • 600 requests/5 min total per clinic                                       │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Jane + CRM Data Model

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           CRM DATABASE SCHEMA                                │
└─────────────────────────────────────────────────────────────────────────────┘

PATIENTS (Unified Profile)
├── id (UUID, primary key)
├── jane_patient_id (FK to Jane, nullable for aesthetic-only)
├── first_name (encrypted)
├── last_name (encrypted)
├── email (encrypted)
├── phone (encrypted)
├── date_of_birth (encrypted)
├── preferred_location_id
├── communication_preferences (JSON)
├── marketing_consent (boolean)
├── hipaa_consent_date
├── created_at
├── updated_at
└── synced_from_jane_at

APPOINTMENTS
├── id (UUID)
├── patient_id (FK)
├── jane_appointment_id (nullable for aesthetic-only)
├── service_id (FK)
├── provider_id (FK)
├── location_id (FK)
├── appointment_type (ENUM: therapy, wellness_medical, wellness_aesthetic)
├── scheduled_at (timestamp)
├── duration_minutes
├── status (ENUM: scheduled, confirmed, completed, cancelled, no_show)
├── booking_source (ENUM: jane, crm_portal, phone, walk_in)
├── notes (encrypted, non-clinical only)
├── created_at
└── synced_from_jane_at

SERVICES
├── id (UUID)
├── jane_treatment_id (nullable)
├── name
├── category (ENUM: therapy, wellness_medical, wellness_aesthetic)
├── requires_clinical_intake (boolean)
├── insurance_eligible (boolean)
├── cash_price (decimal)
├── duration_minutes
├── description
└── active (boolean)

TRANSACTIONS
├── id (UUID)
├── patient_id (FK)
├── appointment_id (FK, nullable)
├── payment_type (ENUM: insurance, card, cash, financing)
├── payment_processor (ENUM: jane_billing, square, cherry)
├── amount (decimal)
├── status (ENUM: pending, completed, refunded, failed)
├── external_transaction_id
├── receipt_number (for cash)
├── created_at
└── reconciled_at

CASH_TRANSACTIONS (Separate audit table)
├── id (UUID)
├── transaction_id (FK)
├── received_by_staff_id
├── amount_tendered
├── change_given
├── drawer_location_id
├── shift_date
├── verified_by_staff_id
├── verified_at
└── deposit_batch_id

CONSENTS
├── id (UUID)
├── patient_id (FK)
├── consent_type (ENUM: hipaa_notice, treatment, photo, marketing, telehealth)
├── service_id (FK, nullable)
├── version
├── signed_at
├── ip_address
├── signature_data (encrypted)
└── document_url (encrypted storage link)

AUDIT_LOGS (Immutable)
├── id (UUID)
├── timestamp
├── user_id
├── action (ENUM: create, read, update, delete, export, login, logout)
├── resource_type
├── resource_id
├── ip_address
├── user_agent
├── changes (JSON diff, encrypted)
└── phi_accessed (boolean)
```

---

## Aesthetic Services Booking System

### The Problem

Jane is designed for clinical scheduling with:
- Insurance verification workflows
- Clinical intake requirements
- Provider-specific scheduling

Aesthetic services need:
- Faster, simpler booking
- Room/equipment availability (not just providers)
- Package/membership support
- Gift card handling
- Walk-in friendly

### Solution: Hybrid Booking Widget

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        UNIFIED BOOKING EXPERIENCE                            │
└─────────────────────────────────────────────────────────────────────────────┘

Website Booking Flow:
                                     
┌──────────────────────────────────────────────────────────────────────────┐
│                         "Begin Your Journey"                              │
│                                                                          │
│   ┌─────────────────────────────┐    ┌─────────────────────────────┐    │
│   │                             │    │                             │    │
│   │      THERAPY &              │    │      AESTHETIC              │    │
│   │      MEDICAL WELLNESS       │    │      SERVICES               │    │
│   │                             │    │                             │    │
│   │  Individual Therapy         │    │  HydraFacial               │    │
│   │  Couples Therapy            │    │  Laser Hair Removal        │    │
│   │  EMDR                       │    │  Teeth Whitening           │    │
│   │  Acupuncture                │    │  Permanent Makeup          │    │
│   │  IV Infusion                │    │  Cryotherapy               │    │
│   │  Pain Management            │    │                             │    │
│   │                             │    │                             │    │
│   │  → Routes to Jane           │    │  → Routes to CRM Booking   │    │
│   │    (Full clinical intake)   │    │    (Simplified flow)       │    │
│   │                             │    │                             │    │
│   └─────────────────────────────┘    └─────────────────────────────┘    │
│                                                                          │
└──────────────────────────────────────────────────────────────────────────┘
```

### Aesthetic Booking Flow (CRM-Managed)

```
Step 1: Service Selection
┌─────────────────────────────────────────────────────────────┐
│  SELECT YOUR SERVICE                                         │
│                                                             │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────┐ │
│  │  HydraFacial    │  │  Laser Hair     │  │  Cryo       │ │
│  │  60 min | $250  │  │  30 min | $150  │  │  15m | $75  │ │
│  └─────────────────┘  └─────────────────┘  └─────────────┘ │
│                                                             │
│  💡 Add-on: LED Light Therapy (+$50)                        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
Step 2: Location Selection
┌─────────────────────────────────────────────────────────────┐
│  CHOOSE LOCATION                                             │
│                                                             │
│  ○ Garden City — Available Today                            │
│  ○ Massapequa — Next available: Tomorrow                    │
│  ○ Smithtown — Next available: Wednesday                    │
│  ○ Port Jefferson — Not available for this service          │
│  ○ Rockville Centre — Available Today                       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
Step 3: Time Selection (Real-time availability)
┌─────────────────────────────────────────────────────────────┐
│  SELECT TIME — Garden City                                   │
│                                                             │
│  ◀ January 2026                                         ▶   │
│                                                             │
│  Sun  Mon  Tue  Wed  Thu  Fri  Sat                          │
│  18   19   20   21   22   23   24                           │
│       ●    ●    ●    ●    ●    ●                            │
│                                                             │
│  Available times for Tuesday, Jan 20:                       │
│  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐            │
│  │ 10:00  │  │ 11:30  │  │ 2:00   │  │ 3:30   │            │
│  └────────┘  └────────┘  └────────┘  └────────┘            │
│                                                             │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
Step 4: Quick Intake (Aesthetic-specific)
┌─────────────────────────────────────────────────────────────┐
│  QUICK DETAILS                                               │
│                                                             │
│  Name: _____________________                                 │
│  Email: ____________________                                 │
│  Phone: ____________________                                 │
│                                                             │
│  ☐ I have had this service before at Pathways               │
│  ☐ I have allergies or sensitivities (specify below)        │
│  _______________________________________________________    │
│                                                             │
│  ☐ I consent to treatment and understand the cancellation   │
│    policy ($75 fee for <72hr notice)                        │
│                                                             │
│  How would you like to pay?                                 │
│  ○ Card on file           ○ Cash at visit                   │
│  ○ New card               ○ Gift card                       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
Step 5: Confirmation
┌─────────────────────────────────────────────────────────────┐
│  ✓ APPOINTMENT CONFIRMED                                     │
│                                                             │
│  HydraFacial + LED Light Therapy                            │
│  Tuesday, January 20, 2026 at 2:00 PM                       │
│  Garden City — 520 Franklin Ave, Suite L1                   │
│                                                             │
│  Total: $300 (due at visit — cash)                          │
│                                                             │
│  📧 Confirmation sent to your email                         │
│  📱 Reminder will be sent 24 hours before                   │
│                                                             │
│  [Add to Calendar]  [Manage Appointment]                    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Resource-Based Scheduling

For aesthetic services, availability depends on:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        AVAILABILITY CALCULATOR                               │
└─────────────────────────────────────────────────────────────────────────────┘

Service: HydraFacial
Requirements:
├── Room: Treatment Room (any)
├── Equipment: HydraFacial Machine
├── Staff: Aesthetician (certified)
└── Duration: 60 minutes + 15 min turnover

Availability Check:
┌─────────────────────────────────────────────────────────────┐
│  Location: Garden City                                       │
│  Date: January 20, 2026                                      │
│                                                             │
│  Treatment Room A: ████░░░░░░░░████████░░░░░░░░░░           │
│  Treatment Room B: ░░░░████████░░░░░░░░████████░░           │
│                                                             │
│  HydraFacial Unit:  ████░░░░░░░░████████░░░░░░░░░░          │
│                                                             │
│  Sarah (Aesthet.):  ████████████████████░░░░░░░░░░          │
│  Maria (Aesthet.):  ░░░░░░░░░░░░████████████████████        │
│                                                             │
│  ████ = Booked    ░░░░ = Available                          │
│                                                             │
│  Available slots: 10:00, 11:30, 2:00, 3:30                  │
└─────────────────────────────────────────────────────────────┘
```

---

## Cash Payment System

### Compliance Framework

Cash payments are legal and common for aesthetic services. The compliance requirements:

| Requirement | Implementation |
|-------------|----------------|
| **Receipt required** | Always issue receipt with service, date, amount |
| **Minimal PHI on receipt** | Service name only, no clinical details |
| **Segregated cash handling** | Separate from clinical billing records |
| **Dual verification** | Two staff verify cash deposits |
| **Daily reconciliation** | End-of-day drawer counts |
| **Audit trail** | Log all cash transactions with timestamps |
| **Insurance compliance** | Cash not accepted for insurance-eligible services when patient has coverage |

### Cash Payment Flow

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        CASH PAYMENT WORKFLOW                                 │
└─────────────────────────────────────────────────────────────────────────────┘

At Service Completion:

┌─────────────────────────────────────────────────────────────┐
│  POS TERMINAL (Square)                                       │
│                                                             │
│  Patient: Jane Smith                                         │
│  Service: HydraFacial + LED Add-on                          │
│  Amount Due: $300.00                                         │
│                                                             │
│  Payment Method:                                             │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐    │
│  │   CASH   │  │   CARD   │  │   SPLIT  │  │  GIFT    │    │
│  │          │  │          │  │          │  │  CARD    │    │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼ (Cash selected)
┌─────────────────────────────────────────────────────────────┐
│  CASH ENTRY                                                  │
│                                                             │
│  Amount tendered: $___320.00___                              │
│                                                             │
│  Change due: $20.00                                          │
│                                                             │
│  Staff: Sarah M. (Badge #1234)                              │
│                                                             │
│  [Complete Transaction]                                      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│  RECEIPT (Printed + Email option)                            │
│                                                             │
│  ═══════════════════════════════════════                    │
│  PATHWAYS WITHIN                                             │
│  Wisdom and Wellness Collaborative                           │
│  520 Franklin Ave, Suite L1                                  │
│  Garden City, NY 11530                                       │
│  ═══════════════════════════════════════                    │
│                                                             │
│  Date: January 20, 2026                                      │
│  Receipt #: GC-2026-01-20-0042                              │
│                                                             │
│  Wellness Service .............. $300.00                    │
│                                                             │
│  Payment: Cash ................. $320.00                    │
│  Change ........................ ($20.00)                   │
│                                                             │
│  Thank you for choosing Pathways Within                      │
│  (631) 371-3825                                              │
│  ═══════════════════════════════════════                    │
│                                                             │
│  Note: Receipt shows minimal service info                    │
│  (no clinical details, no diagnosis codes)                   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│  END OF DAY RECONCILIATION                                   │
│                                                             │
│  Location: Garden City                                       │
│  Date: January 20, 2026                                      │
│  Shift: Day (9am - 6pm)                                      │
│                                                             │
│  Cash transactions: 7                                        │
│  Expected cash: $1,245.00                                    │
│  Counted cash: $1,245.00                                     │
│  Variance: $0.00 ✓                                           │
│                                                             │
│  Counted by: Sarah M.                                        │
│  Verified by: Manager Mike T.                                │
│                                                             │
│  [Submit & Lock]                                             │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Square: One System for All Payments

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        SQUARE — UNIFIED PAYMENTS                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  WHY SQUARE FOR EVERYTHING                                                   │
│  ─────────────────────────                                                   │
│  • One vendor, one BAA, one integration                                      │
│  • Cards + cash in same system                                               │
│  • POS hardware included (Square Terminal)                                   │
│  • Online payments supported                                                 │
│  • Built-in reporting and reconciliation                                     │
│  • HIPAA BAA available                                                       │
│                                                                              │
│  WHAT SQUARE HANDLES                                                         │
│  ─────────────────────                                                       │
│  ✓ In-person card payments (Square Terminal at each location)               │
│  ✓ Online card payments (booking prepay, patient portal)                    │
│  ✓ Cash transaction logging                                                  │
│  ✓ Cash drawer tracking                                                      │
│  ✓ End-of-day reconciliation                                                 │
│  ✓ Receipts (printed + email)                                                │
│  ✓ Reporting by location/date/type                                           │
│                                                                              │
│  INTEGRATION PATTERN                                                         │
│  ───────────────────                                                         │
│                                                                              │
│  ┌─────────────┐       ┌─────────────┐       ┌─────────────┐               │
│  │   CRM       │──────>│   Square    │──────>│   CRM       │               │
│  │  (Start)    │       │   (Payment) │       │  (Complete) │               │
│  └─────────────┘       └─────────────┘       └─────────────┘               │
│                                                                              │
│  1. CRM creates pending transaction with appointment ID                      │
│  2. Square processes payment (card or cash)                                  │
│  3. Square webhook notifies CRM of completion                                │
│  4. CRM updates transaction status                                           │
│  5. CRM logs for audit trail                                                 │
│                                                                              │
│  HIPAA CONFIGURATION                                                         │
│  ───────────────────                                                         │
│  • Sign Square BAA before go-live                                            │
│  • Item names: Generic ("Wellness Service" — NOT detailed PHI)              │
│  • Patient details: Stored in CRM, not Square                                │
│  • Reconciliation: Square transaction ID links to CRM record                │
│                                                                              │
│  HARDWARE NEEDED (5 locations)                                               │
│  ─────────────────────────────                                               │
│  • 5x Square Terminal ($299 each = $1,495 total)                            │
│  • Optional: Cash drawers if not already present                             │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Unified Patient Experience

### Single Patient Profile

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  PATIENT PROFILE — Jane Smith                                                │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌──────────────┐   Name: Jane Smith                                        │
│  │              │   Email: jane@email.com                                    │
│  │    Photo     │   Phone: (516) 555-1234                                    │
│  │  (optional)  │   DOB: March 15, 1985                                      │
│  │              │   Preferred Location: Garden City                          │
│  └──────────────┘   Patient Since: June 2024                                 │
│                                                                              │
│  ┌─────────────────────────────────────────────────────────────────────────┐│
│  │  SERVICE HISTORY                                                         ││
│  ├─────────────────────────────────────────────────────────────────────────┤│
│  │                                                                          ││
│  │  THERAPY (via Jane EHR)                    WELLNESS                      ││
│  │  ─────────────────────                     ────────                      ││
│  │  • Individual Therapy                      • HydraFacial (x3)            ││
│  │    Weekly since Jun 2024                   • IV Vitamin Infusion (x2)    ││
│  │    Provider: Dr. Sarah Johnson             • Laser Hair (in progress)    ││
│  │                                            • Cryotherapy (x5)            ││
│  │  [View in Jane →]                                                        ││
│  │                                                                          ││
│  │  Note: Clinical records maintained in Jane EHR                           ││
│  │  CRM stores service history for unified view only                        ││
│  │                                                                          ││
│  └─────────────────────────────────────────────────────────────────────────┘│
│                                                                              │
│  ┌─────────────────────────────────────────────────────────────────────────┐│
│  │  UPCOMING APPOINTMENTS                                                   ││
│  ├─────────────────────────────────────────────────────────────────────────┤│
│  │                                                                          ││
│  │  Jan 21 │ 2:00 PM │ Individual Therapy │ Dr. Johnson │ Garden City      ││
│  │  Jan 25 │ 11:00 AM │ HydraFacial       │ Maria S.    │ Garden City      ││
│  │  Jan 28 │ 2:00 PM │ Individual Therapy │ Dr. Johnson │ Garden City      ││
│  │                                                                          ││
│  └─────────────────────────────────────────────────────────────────────────┘│
│                                                                              │
│  ┌─────────────────────────────────────────────────────────────────────────┐│
│  │  PAYMENT SUMMARY                                                         ││
│  ├─────────────────────────────────────────────────────────────────────────┤│
│  │                                                                          ││
│  │  Insurance: Aetna (verified via Jane/Claim.MD)                           ││
│  │  Card on File: •••• 4242 (Square)                                        ││
│  │  Outstanding Balance: $0.00                                              ││
│  │                                                                          ││
│  │  Recent Transactions:                                                    ││
│  │  • Jan 18 │ HydraFacial │ $250 │ Card │ Paid ✓                          ││
│  │  • Jan 14 │ Therapy Copay │ $30 │ Insurance + Card │ Paid ✓             ││
│  │  • Jan 10 │ Cryotherapy │ $75 │ Cash │ Paid ✓                           ││
│  │                                                                          ││
│  └─────────────────────────────────────────────────────────────────────────┘│
│                                                                              │
│  ┌─────────────────────────────────────────────────────────────────────────┐│
│  │  COMMUNICATION PREFERENCES                                               ││
│  ├─────────────────────────────────────────────────────────────────────────┤│
│  │                                                                          ││
│  │  ☑ Email appointment reminders                                           ││
│  │  ☑ SMS appointment reminders (24hr before)                               ││
│  │  ☑ Email promotions for wellness services                                ││
│  │  ☐ SMS promotions                                                        ││
│  │                                                                          ││
│  │  Marketing consent given: Yes (June 15, 2024)                            ││
│  │  HIPAA notice acknowledged: Yes (June 15, 2024)                          ││
│  │                                                                          ││
│  └─────────────────────────────────────────────────────────────────────────┘│
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Staff Dashboard

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  PATHWAYS WITHIN — Staff Dashboard                          Sarah M. ▼      │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌────────────────────────────────────────────────────────────────────────┐ │
│  │  TODAY — Garden City                                     January 20    │ │
│  ├────────────────────────────────────────────────────────────────────────┤ │
│  │                                                                        │ │
│  │   9:00   Sarah M.     HydraFacial         Jane Smith      ● Confirmed │ │
│  │  10:30   Maria S.     Laser Hair (2/6)    Tom Wilson      ○ Pending   │ │
│  │  11:00   Sarah M.     Cryotherapy         New Patient     ● Confirmed │ │
│  │  12:00   ─── LUNCH ─────────────────────────────────────────────────  │ │
│  │   1:00   Sarah M.     IV Infusion         Mary Johnson    ● Checked In│ │
│  │   2:00   Maria S.     HydraFacial         Jane Smith      ○ Pending   │ │
│  │   3:30   Sarah M.     Teeth Whitening     Walk-in         ◐ In Room   │ │
│  │                                                                        │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
│  ┌─────────────────────────┐  ┌─────────────────────────┐                   │
│  │  QUICK ACTIONS          │  │  TODAY'S METRICS        │                   │
│  │                         │  │                         │                   │
│  │  [+ New Appointment]    │  │  Appointments: 12/14    │                   │
│  │  [+ Walk-in Patient]    │  │  Revenue: $2,450        │                   │
│  │  [Process Payment]      │  │  Cash: $525             │                   │
│  │  [Check Availability]   │  │  No-shows: 1            │                   │
│  │                         │  │                         │                   │
│  └─────────────────────────┘  └─────────────────────────┘                   │
│                                                                              │
│  ┌────────────────────────────────────────────────────────────────────────┐ │
│  │  ALERTS                                                                │ │
│  │                                                                        │ │
│  │  ⚠️  Tom Wilson — insurance eligibility check failed (manual verify)   │ │
│  │  📋  3 consent forms pending signature                                 │ │
│  │  💳  End-of-day cash reconciliation due in 2 hours                     │ │
│  │                                                                        │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Implementation Phases

### Phase 2A: Foundation (Weeks 1-4)

| Task | Description | Dependencies |
|------|-------------|--------------|
| **Supabase Setup** | Configure HIPAA-compliant project, sign BAA | None |
| **Schema Design** | Implement database schema with RLS policies | Supabase |
| **Authentication** | Staff auth with MFA, role-based access | Supabase |
| **Jane API Setup** | Register as Jane Extension, OAuth flow | Jane approval |
| **Audit Logging** | Implement immutable audit trail | Schema |

**Deliverables:**
- [ ] Supabase HIPAA project configured
- [ ] Database schema deployed
- [ ] Staff authentication working
- [ ] Jane OAuth flow functional
- [ ] Audit logging operational

### Phase 2B: Jane Integration (Weeks 5-8)

| Task | Description | Dependencies |
|------|-------------|--------------|
| **Patient Sync** | Bidirectional patient data sync | Jane API |
| **Appointment Sync** | Read appointments from Jane | Jane API |
| **Polling Service** | Scheduled sync (5-min intervals) | Background jobs |
| **Conflict Resolution** | Handle sync conflicts (Jane = source of truth) | Sync service |
| **Error Handling** | Retry logic, alerting for failures | Sync service |

**Deliverables:**
- [ ] Patients syncing from Jane
- [ ] Appointments visible in CRM
- [ ] Sync status dashboard
- [ ] Error alerting configured

### Phase 2C: Aesthetic Booking (Weeks 9-12)

| Task | Description | Dependencies |
|------|-------------|--------------|
| **Service Catalog** | Configure aesthetic services in CRM | Schema |
| **Availability Engine** | Room/staff/equipment scheduling logic | Schema |
| **Booking Widget** | Patient-facing booking interface | Availability |
| **Intake Forms** | Digital consent and basic intake | Booking |
| **Notifications** | Email/SMS confirmations and reminders | Twilio/SendGrid |

**Deliverables:**
- [ ] Aesthetic services bookable via website
- [ ] Real-time availability display
- [ ] Digital consent workflow
- [ ] Automated reminders working

### Phase 2D: Payment Integration (Weeks 13-16)

| Task | Description | Dependencies |
|------|-------------|--------------|
| **Square Setup** | Configure Square for all locations, sign BAA | None |
| **Card Payments** | Square Terminal for in-person cards | Square |
| **Online Payments** | Square for online booking prepay | Square |
| **Cash Handling** | Cash transaction logging and reconciliation | Square |
| **Receipts** | HIPAA-compliant receipt generation | Payments |
| **Reporting** | Daily/weekly financial reports | Payments |

**Deliverables:**
- [ ] Square POS operational at all 5 locations
- [ ] All payments (card + cash) through one system
- [ ] Daily reconciliation workflow
- [ ] Financial reporting dashboard

### Phase 2E: Staff Portal (Weeks 17-20)

| Task | Description | Dependencies |
|------|-------------|--------------|
| **Dashboard** | Daily schedule view per location | All syncs |
| **Patient Lookup** | Search and view patient profiles | Patient sync |
| **Walk-in Flow** | Quick patient registration | Booking |
| **Check-in/Out** | Appointment status management | Appointments |
| **Manager Tools** | Reports, reconciliation, overrides | All |

**Deliverables:**
- [ ] Staff can manage daily operations via CRM
- [ ] Walk-in patients can be registered quickly
- [ ] Managers can run reports and reconcile

### Phase 2F: Patient Portal (Weeks 21-24)

| Task | Description | Dependencies |
|------|-------------|--------------|
| **Account Creation** | Patient self-service registration | Auth |
| **Appointment Management** | View, reschedule, cancel appointments | Booking |
| **Payment History** | View past transactions | Payments |
| **Forms/Consents** | Complete forms before appointment | Intake |
| **Communication Preferences** | Manage notification settings | Profile |

**Deliverables:**
- [ ] Patients can log in and manage appointments
- [ ] Forms can be completed online before visit
- [ ] Payment history visible

---

## Phase 3: Productization (Months 7-12)

*After Phase 2 is live and stable at Pathways Within*

### Phase 3A: Multi-Tenancy (Months 7-8)

| Task | Description |
|------|-------------|
| **Schema Isolation** | Implement organization-scoped data access |
| **Tenant Provisioning** | Automated new organization setup |
| **Branding System** | Configurable logos, colors, domains |
| **Jane Multi-Clinic** | Support multiple Jane clinic connections |
| **Admin Console** | Super-admin for tenant management |

### Phase 3B: Self-Service & Billing (Months 9-10)

| Task | Description |
|------|-------------|
| **Marketing Site** | Product website with positioning |
| **Demo Environment** | Sandbox for prospects |
| **Self-Serve Signup** | Automated onboarding flow |
| **Stripe Integration** | Subscription billing |
| **Usage Tracking** | Metered features, limits |
| **Trial System** | 14-day free trial with limits |

### Phase 3C: Scale & Support (Months 11-12)

| Task | Description |
|------|-------------|
| **Documentation** | Help center, guides, API docs |
| **In-App Support** | Chat widget, ticket system |
| **SOC 2 Audit** | Complete Type II audit |
| **Performance Optimization** | Scale for multi-tenant load |
| **Sales Enablement** | Demo scripts, comparison sheets |

### Phase 3 Deliverables

- [ ] Multi-tenant architecture live
- [ ] First 3-5 external customers onboarded
- [ ] Subscription billing operational
- [ ] Help center and documentation
- [ ] Revenue: Target $5K-10K MRR by month 12
- [ ] SOC 2 Type II certification (for credibility with larger customers)

**Note:** SOC 2 is a Phase 3 investment — you don't need it until you're selling to others who require proof of compliance. Many early customers will accept your vendor BAAs (Supabase, Square) as sufficient.

---

## Go-To-Market Strategy (Phase 3)

### Initial Target Audience

**Primary:** Jane App users who are frustrated with TrustDrivenCare
- They already have Jane
- They know they need a CRM layer
- They've experienced the pain of bad software
- They understand the value proposition immediately

**How to find them:**
- Jane App community forums
- Facebook groups for practice owners
- Therapy/wellness practice conferences
- LinkedIn targeting (practice managers, owners)

### Positioning Statement

> **For hybrid therapy and wellness practices** who use Jane App and are tired of clunky, questionable CRM tools, **[Product Name]** is a **HIPAA-compliant patient relationship platform** that combines beautiful design with genuine compliance. Unlike TrustDrivenCare and generic CRMs, our product was **built by practitioners, for practitioners**, with an editorial design philosophy that makes work feel calm instead of chaotic.

### Competitive Messaging

| When They Say | We Say |
|---------------|--------|
| "TrustDrivenCare has Jane integration" | "So do we — and ours doesn't require a PhD to configure" |
| "But TrustDrivenCare is HIPAA compliant" | "Ask them for their SOC 2 report. We'll show you ours." |
| "Other tools are cheaper" | "How much is a data breach? How much is staff frustration?" |
| "We don't need something fancy" | "You deserve software that respects your time" |

### Launch Strategy

1. **Beta Program** (Month 7-8)
   - Invite 5-10 practices from Pathways' network
   - Free in exchange for feedback
   - Case studies for marketing

2. **Soft Launch** (Month 9-10)
   - Limited availability, application required
   - Founder-led sales (you onboard each customer)
   - Pricing validation

3. **Public Launch** (Month 11-12)
   - Self-serve signup live
   - Content marketing (blog, guides)
   - Targeted ads to Jane App users

---

## Real HIPAA Compliance (Not Marketing Claims)

### Why TrustDrivenCare's Claims Are Suspect

TrustDrivenCare states "HIPAA compliant" on their website, but proper HIPAA compliance requires **verifiable evidence**:

| Compliance Requirement | What Real Compliance Looks Like | TrustDrivenCare |
|------------------------|--------------------------------|-----------------|
| **BAA Available** | Sign before using, documented process | Not visible in signup flow |
| **SOC 2 Type II Audit** | Third-party security audit, report available | No mention |
| **Encryption Details** | AES-256, TLS 1.3, key management documented | No specifics |
| **Audit Logging** | Documented what's logged, retention period | No details |
| **Breach Notification** | Documented process, timeline, contacts | No information |
| **Security Page** | Detailed technical documentation | Generic "we're compliant" statement |
| **Subprocessor List** | Who handles your data, their BAAs | Not published |

**Red Flag:** TrustDrivenCare appears to be a white-label of GoHighLevel (a generic CRM platform). GoHighLevel offers HIPAA features on enterprise plans, but:
- Requires additional configuration
- BAA is separate agreement
- Not all features are covered
- White-label resellers may not properly configure

### How We'll Do It Right

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    HIPAA COMPLIANCE TRANSPARENCY                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  PUBLIC SECURITY PAGE (on our product website)                               │
│  ──────────────────────────────────────────────                              │
│                                                                              │
│  1. BAA Process                                                              │
│     • Available for download/e-sign before account creation                  │
│     • Lists all covered services                                             │
│     • Named contacts for security questions                                  │
│                                                                              │
│  2. Technical Safeguards                                                     │
│     • Encryption: AES-256 at rest, TLS 1.3 in transit                       │
│     • Key management: Supabase managed, customer-managed option             │
│     • Network: VPC isolation, no public database access                     │
│                                                                              │
│  3. Access Controls                                                          │
│     • MFA required for all users                                             │
│     • Role-based access with named permissions                               │
│     • Session timeout: 15 minutes inactive                                   │
│     • IP allowlisting available (enterprise)                                 │
│                                                                              │
│  4. Audit Logging                                                            │
│     • All PHI access logged                                                  │
│     • Immutable logs (append-only)                                           │
│     • 6-year retention (HIPAA minimum)                                       │
│     • Export available for customer audits                                   │
│                                                                              │
│  5. Subprocessors                                                            │
│     • Supabase (database) — BAA signed                                       │
│     • Vercel (hosting) — BAA signed                                          │
│     • Twilio (SMS) — BAA signed                                              │
│     • SendGrid (email) — BAA signed                                          │
│     • Square (payments) — BAA signed                                         │
│     • Change notifications for new subprocessors                             │
│                                                                              │
│  6. Certifications                                                           │
│     • SOC 2 Type II (annual, report available under NDA)                    │
│     • HIPAA Security Rule assessment (annual)                                │
│     • Penetration testing (annual, summary available)                        │
│                                                                              │
│  7. Incident Response                                                        │
│     • 24-hour internal detection to notification                             │
│     • Customer notification within 48 hours of confirmed breach             │
│     • Dedicated security contact: security@[product].com                     │
│     • Status page for service incidents                                      │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Compliance as Product Differentiator

When selling to healthcare practices:

| TrustDrivenCare | Our Product |
|-----------------|-------------|
| "We're HIPAA compliant" (trust us) | "Here's our SOC 2 report" (verify it) |
| Generic security page | Detailed technical documentation |
| BAA available "upon request" | BAA required at signup |
| Unknown subprocessors | Published subprocessor list |
| No audit evidence | Annual third-party audits |

**This becomes a sales advantage:** When prospects ask "How do I know you're really compliant?", we have answers. TrustDrivenCare has claims.

### Compliance Roadmap — What's Actually Required

**PHASE 2 (Internal Use) — Required:**

| Requirement | Timeline | Cost | Notes |
|-------------|----------|------|-------|
| BAAs with vendors | Before launch | $0 | Supabase, Square, Twilio, SendGrid |
| Access controls in code | During build | Internal | Role-based, audit logging |
| Written policies | Before launch | Internal | Access policy, breach response |
| Staff training | Before launch | Internal | Document who's trained |
| Risk assessment | Before launch | Internal | Simple document, update annually |

**PHASE 2 (Internal Use) — NOT Required:**

| Item | Why Not Needed |
|------|----------------|
| SOC 2 audit | Only needed to prove compliance to OTHERS |
| Third-party pen test | Recommended but not legally required |
| HIPAA "certification" | Doesn't exist — HIPAA has no certification |
| Auditing your vendors | They handle their own compliance |

**PHASE 3 (Selling to Others) — Then Add:**

| Requirement | Timeline | Cost Estimate | Why Needed |
|-------------|----------|---------------|------------|
| SOC 2 Type II readiness | Month 7-9 | $15,000 - $30,000 | Customers will ask |
| SOC 2 Type II audit | Month 9-12 | $20,000 - $50,000 | Proof for sales |
| Penetration test | Month 7 | $5,000 - $10,000 | Validates your code |
| Your own BAA template | Month 7 | $2,000 - $5,000 (legal) | You become their BA |
| Security documentation | Month 7-8 | Internal | Public security page |

**Key Insight:** Your vendors (Supabase, Square) already have SOC 2 and handle infrastructure compliance. For Phase 2, you just need to use them correctly and sign their BAAs. The expensive audits only matter when you're selling to external customers who need proof.

---

## Security & Compliance Checklist

### Phase 2 (Internal Use) — Before Go-Live

| Category | Requirement | Status | Cost |
|----------|-------------|--------|------|
| **Legal** | Supabase BAA signed | ☐ | $0 |
| **Legal** | Square BAA signed | ☐ | $0 |
| **Legal** | Twilio BAA signed | ☐ | $0 |
| **Legal** | SendGrid BAA signed | ☐ | $0 |
| **Legal** | Privacy policy updated | ☐ | Internal |
| **Technical** | Supabase HIPAA add-on enabled | ☐ | Included in plan |
| **Technical** | MFA enabled for all staff | ☐ | $0 |
| **Technical** | Role-based access controls working | ☐ | Internal |
| **Technical** | Audit logging implemented | ☐ | Internal |
| **Operational** | Staff training completed | ☐ | Internal |
| **Operational** | Breach response plan written | ☐ | Internal |
| **Operational** | Risk assessment documented | ☐ | Internal |

**Total Phase 2 Compliance Cost: ~$0** (just your time + vendor subscription costs)

### Phase 3 (Selling to Others) — Additional Requirements

| Category | Requirement | Status | Cost |
|----------|-------------|--------|------|
| **Legal** | Your own BAA template | ☐ | $2,000 - $5,000 |
| **Audit** | SOC 2 Type II prep | ☐ | $15,000 - $30,000 |
| **Audit** | SOC 2 Type II audit | ☐ | $20,000 - $50,000 |
| **Security** | Penetration test | ☐ | $5,000 - $10,000 |
| **Documentation** | Public security page | ☐ | Internal |
| **Documentation** | Subprocessor list published | ☐ | Internal |

**Total Phase 3 Compliance Cost: $42,000 - $95,000**

### Ongoing Compliance (Both Phases)

| Frequency | Task |
|-----------|------|
| Daily | Cash reconciliation |
| Weekly | Review audit logs for anomalies |
| Monthly | Security patch updates |
| Quarterly | Access review (remove departed staff) |
| Annually | Risk assessment update |
| Annually | Staff HIPAA training refresh |
| Annually | Review vendor BAAs still valid |

---

## Cost Estimates

### Phase 2 (Internal Use) — Monthly Recurring

| Service | Tier | Estimated Cost |
|---------|------|----------------|
| **Supabase** | Team + HIPAA Add-on | $599 - $899/mo |
| **Vercel** | Pro | $20/mo |
| **Twilio** | HIPAA-eligible | ~$100/mo (volume dependent) |
| **SendGrid** | Pro | ~$90/mo |
| **Square** | Per-transaction | 2.6% + $0.10 per card, free for cash |
| **Jane** | Existing | (already budgeted) |
| **SimplePractice** | Existing | (already budgeted) |

**Phase 2 Monthly Total:** ~$800 - $1,100/mo

### Phase 2 (Internal Use) — One-Time Costs

| Item | Estimated Cost |
|------|----------------|
| Square Terminal (5 locations) | ~$1,500 |
| Development (internal or agency) | Variable |

**Phase 2 One-Time Total:** ~$1,500 + development

### Phase 3 (Selling to Others) — Additional Costs

| Item | Estimated Cost |
|------|----------------|
| Vercel Enterprise (for BAA) | +$400/mo |
| SOC 2 preparation | $15,000 - $30,000 |
| SOC 2 audit | $20,000 - $50,000 |
| Penetration test | $5,000 - $10,000 |
| Legal (BAA template, terms) | $2,000 - $5,000 |

**Phase 3 Additional Total:** $42,000 - $95,000 one-time + ~$400/mo

---

## Risk Assessment

### High Risk Items

| Risk | Impact | Mitigation |
|------|--------|------------|
| Jane API changes | Breaks sync, scheduling fails | Version lock, monitor JDP changelog |
| Data breach | HIPAA violation, fines, reputation | Encryption, access controls, monitoring |
| Staff misuse of PHI | Compliance violation | Training, audit logs, least privilege |
| Cash handling errors | Financial loss, audit issues | Dual verification, daily reconciliation |

### Medium Risk Items

| Risk | Impact | Mitigation |
|------|--------|------------|
| Sync conflicts | Duplicate/missing appointments | Jane as source of truth, conflict resolution |
| System downtime | Lost bookings, patient frustration | Failover, status page, manual backup process |
| Rate limit exceeded | Sync delays | Queue management, backoff strategy |

### Low Risk Items

| Risk | Impact | Mitigation |
|------|--------|------------|
| Staff adoption resistance | Slow rollout | Training, gradual rollout, feedback loops |
| Patient portal low adoption | Wasted effort | Focus on staff tools first, patient portal later |

---

## Success Metrics

### Phase 2 KPIs

| Metric | Target | Measurement |
|--------|--------|-------------|
| Sync latency (Jane ↔ CRM) | < 10 minutes | Average time to reflect changes |
| Booking completion rate | > 85% | Started vs completed online bookings |
| Cash reconciliation accuracy | 100% | Daily drawer vs system match |
| Audit log completeness | 100% | All PHI access logged |
| Staff satisfaction | > 4/5 | Survey after training |
| Patient portal adoption | > 30% | Patients with active accounts (6 months) |

---

## Open Questions

Before proceeding, clarify:

### Technical Questions

1. **Jane API Access** — Has Pathways been approved as a Jane Extension? If not, this is the first step. (2-4 weeks for approval)

2. **Square vs. Alternative** — Is Square acceptable for POS/cash tracking, or is there a preference for another system?

3. **Multi-Location Complexity** — Do all 5 locations offer the same aesthetic services, or is availability location-specific?

4. **Cherry Integration** — How deeply should Cherry (financing) integrate with the CRM? Display-only or full workflow?

5. **SimplePractice** — Should telehealth appointments also sync to the CRM, or remain separate in SimplePractice?

6. **Staff Devices** — Will staff use provided tablets/computers, or personal devices? (Affects MDM requirements)

7. **Existing Patient Data** — Is there historical data to migrate from TrustDrivenCare, or start fresh?

### Business Questions (for Productization)

8. **Product Name** — What will the SaaS product be called? Separate brand from Pathways Within?

9. **Investment Appetite** — Is there budget for SOC 2 audit ($20-50K) to validate compliance claims?

10. **Timeline Priority** — Is speed to internal launch more important than productization-ready architecture?

11. **Development Resources** — Internal team, agency, or hybrid? This affects timeline significantly.

12. **TrustDrivenCare Transition** — When is the current contract up? Is there overlap budget?

### Legal Questions

13. **Entity Structure** — Will the SaaS product be under Pathways Within or a separate company?

14. **IP Ownership** — Who owns the software if built by an agency?

15. **Non-Compete Review** — Any restrictions from current TrustDrivenCare agreement?

---

## Next Steps

### Immediate (This Week)

1. **Review this plan** with stakeholders and decision-makers
2. **Answer open questions** above (especially #1, #10, #11)
3. **Audit TrustDrivenCare contract** — when can you exit?

### Week 1-2

4. **Initiate Jane Extension application** — this is the critical path blocker
5. **Supabase setup** — create organization, request HIPAA add-on quote
6. **Vendor research** — get BAA availability confirmed for all vendors

### Week 2-4

7. **Architecture decision** — confirm tech stack based on Jane approval status
8. **Development kickoff** — whether internal or agency
9. **Begin Phase 2A** — database schema, auth, audit logging

### Parallel Track

10. **Brand exploration** — what will the product be called?
11. **Competitive monitoring** — sign up for TrustDrivenCare trial to document pain points
12. **Market validation** — informal conversations with other practice owners

---

## Appendix A: Vendor Contact Information

| Vendor | Purpose | BAA Contact |
|--------|---------|-------------|
| Supabase | Database | support@supabase.io (request HIPAA add-on) |
| Jane | EHR/Scheduling | developers@jane.app |
| Square | ALL Payments (cards + cash + POS) | hipaa@squareup.com |
| Twilio | SMS | sales@twilio.com (request BAA) |
| SendGrid | Email | hipaa@sendgrid.com |
| Vercel | Hosting | enterprise@vercel.com (Enterprise tier for BAA) |

---

## Appendix B: Glossary

| Term | Definition |
|------|------------|
| **BAA** | Business Associate Agreement — contract required when sharing PHI with vendors |
| **PHI** | Protected Health Information — any health data tied to patient identity |
| **ePHI** | Electronic PHI — PHI stored or transmitted electronically |
| **HIPAA** | Health Insurance Portability and Accountability Act |
| **JDP** | Jane Developer Platform — Jane's API for integrations |
| **PKCE** | Proof Key for Code Exchange — OAuth security extension |
| **RLS** | Row Level Security — database access control at row level |
| **MFA** | Multi-Factor Authentication |
| **POS** | Point of Sale — payment terminal system |
| **FHIR** | Fast Healthcare Interoperability Resources — healthcare data standard |

---

---

## Summary: Why This Will Work

### The Timing Is Right

1. **TrustDrivenCare has set expectations** — practices know they need a CRM layer for Jane
2. **But execution is poor** — slow, ugly, questionable compliance creates opening
3. **No one owns "beautiful + compliant"** — that quadrant is empty
4. **Jane ecosystem is growing** — more potential customers every month

### Your Advantages

1. **You're a customer first** — you know the pain because you live it
2. **Design DNA** — your editorial approach applied to software is differentiated
3. **Hybrid expertise** — therapy + wellness in one system is your daily reality
4. **5 locations** — you can test at scale before selling

### The Path

```
NOW                    MONTH 6                 MONTH 12
────────────────────────────────────────────────────────────────▶

TrustDrivenCare        Pathways on             External customers
frustration            new CRM                 using product
                       
  ●─────────────────────●───────────────────────●
     Phase 2               Phase 3
     Internal build        Productize & sell
```

### Success Looks Like

**Month 6 (Phase 2 Complete):**
- Pathways staff using new CRM daily
- TrustDrivenCare cancelled
- Faster workflows, happier staff
- Real compliance, documented

**Month 12 (Phase 3 Progress):**
- 5-10 external customers
- $5K-15K MRR
- SOC 2 certified
- Clear path to $50K+ MRR

**Month 24 (Scale):**
- 50+ customers
- $50K+ MRR
- Team dedicated to product
- Acquisition interest or sustainable business

### The Bottom Line

You're not just replacing TrustDrivenCare for Pathways Within — you're building the tool that **should exist** for every hybrid therapy/wellness practice. 

TrustDrivenCare proved the market exists. Now build something worth using.

---

*This document is a living plan and will be updated as decisions are made and implementation progresses.*

**Document History:**
- v1.0 (Jan 18, 2026): Initial plan
- v1.1 (Jan 18, 2026): Added competitive analysis, productization strategy, design philosophy application
