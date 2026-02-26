# CRM Build Plan — Implementation Guide

## For AI/Developer Reference

**Purpose:** Step-by-step implementation plan for building the Pathways Within CRM  
**Goal:** Demo-ready backend + frontend preview for stakeholders  
**Timeline:** Sprint to demo in 2-3 weeks

---

## Constitution Compliance Checklist

This build follows all cursor-constitution rules:

| Rule File | Key Requirements | How We Comply |
|-----------|------------------|---------------|
| **core-stack.mdc** | Next.js App Router, TypeScript, Server Components | CRM built as Next.js app in monorepo |
| **coding-style.mdc** | Strict TypeScript, small functions, early returns | All code follows these patterns |
| **security.mdc** | CSP, no client secrets, validate inputs, rate limit | Supabase RLS, server-only keys, Zod validation |
| **privacy-compliance.mdc** | Consent-first, no tracking without consent | PHI handled server-side only, audit logging |
| **api-patterns.mdc** | Server actions for mutations, Zod validation, proper error handling | All API follows these patterns |
| **design-system.mdc** | One styling approach, consistent spacing, semantic colors | Tailwind only, uses existing design tokens |
| **design-philosophy.mdc** | Editorial, restrained, 2 font weights, warm colors | CRM UI follows same philosophy as marketing site |

---

## Build Phases Overview

```
PHASE A: Foundation (Days 1-3)
├── Supabase project setup
├── Database schema
├── Auth configuration
└── Monorepo structure

PHASE B: Core CRM (Days 4-7)
├── Patient management
├── Staff dashboard
├── Basic CRUD operations
└── Audit logging

PHASE C: Booking System (Days 8-11)
├── Service catalog
├── Availability engine
├── Booking flow
└── Calendar views

PHASE D: Demo Polish (Days 12-14)
├── UI refinement
├── Sample data
├── Demo walkthrough
└── Stakeholder presentation
```

---

## PHASE A: Foundation (Days 1-3)

### A1. Monorepo Structure

Add CRM app to existing monorepo:

```
pathways-within-monorepo/
├── apps/
│   ├── main/                    ← Existing marketing site
│   └── crm/                     ← NEW: CRM application
│       ├── app/
│       │   ├── (auth)/          ← Login, auth pages
│       │   │   ├── login/
│       │   │   └── layout.tsx
│       │   ├── (dashboard)/     ← Protected routes
│       │   │   ├── layout.tsx   ← Dashboard shell
│       │   │   ├── page.tsx     ← Dashboard home
│       │   │   ├── patients/
│       │   │   ├── appointments/
│       │   │   ├── services/
│       │   │   └── settings/
│       │   ├── api/
│       │   │   └── webhooks/    ← Square, etc.
│       │   ├── layout.tsx
│       │   └── globals.css
│       ├── components/
│       │   ├── ui/              ← Base UI components
│       │   ├── patients/        ← Patient-specific
│       │   ├── appointments/    ← Appointment-specific
│       │   └── layout/          ← Shell, nav, etc.
│       ├── lib/
│       │   ├── supabase/
│       │   │   ├── client.ts    ← Browser client
│       │   │   ├── server.ts    ← Server client
│       │   │   ├── admin.ts     ← Service role client
│       │   │   └── types.ts     ← Generated types
│       │   ├── actions/         ← Server actions
│       │   ├── hooks/           ← Client hooks
│       │   └── utils/
│       ├── package.json
│       └── tsconfig.json
├── packages/
│   ├── ui/                      ← Shared components
│   ├── config/                  ← Shared config
│   └── database/                ← NEW: Supabase schemas, types
│       ├── schema.sql
│       ├── seed.sql
│       ├── types.ts
│       └── package.json
```

### A2. Supabase Project Setup

**Tasks:**
1. Create new Supabase project (production)
2. Enable HIPAA add-on (contact Supabase)
3. Configure auth providers (email/password for staff)
4. Set up Row Level Security (RLS)
5. Generate TypeScript types

**Environment Variables (apps/crm/.env.local):**
```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=xxx
SUPABASE_SERVICE_ROLE_KEY=xxx  # Server only, never expose

# App
NEXT_PUBLIC_APP_URL=http://localhost:3001
```

### A3. Database Schema

**File: packages/database/schema.sql**

```sql
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- ENUM TYPES
-- ============================================

CREATE TYPE user_role AS ENUM ('admin', 'manager', 'staff', 'provider');
CREATE TYPE appointment_status AS ENUM ('scheduled', 'confirmed', 'checked_in', 'in_progress', 'completed', 'cancelled', 'no_show');
CREATE TYPE service_category AS ENUM ('therapy', 'wellness_medical', 'wellness_aesthetic');
CREATE TYPE payment_type AS ENUM ('insurance', 'card', 'cash', 'financing');
CREATE TYPE payment_status AS ENUM ('pending', 'completed', 'refunded', 'failed');

-- ============================================
-- CORE TABLES
-- ============================================

-- Staff/Users (CRM users, not patients)
CREATE TABLE staff (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    auth_id UUID UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT UNIQUE NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    role user_role NOT NULL DEFAULT 'staff',
    location_ids UUID[] DEFAULT '{}',
    active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Locations
CREATE TABLE locations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    address_line1 TEXT NOT NULL,
    address_line2 TEXT,
    city TEXT NOT NULL,
    state TEXT NOT NULL DEFAULT 'NY',
    zip TEXT NOT NULL,
    phone TEXT,
    active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Patients
CREATE TABLE patients (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    jane_patient_id TEXT UNIQUE,  -- Link to Jane EHR
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT,
    phone TEXT,
    date_of_birth DATE,
    preferred_location_id UUID REFERENCES locations(id),
    notes TEXT,  -- Non-clinical notes only
    marketing_consent BOOLEAN DEFAULT false,
    hipaa_consent_date TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    synced_from_jane_at TIMESTAMPTZ
);

-- Services
CREATE TABLE services (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    jane_treatment_id TEXT,
    name TEXT NOT NULL,
    description TEXT,
    category service_category NOT NULL,
    duration_minutes INTEGER NOT NULL DEFAULT 60,
    price DECIMAL(10,2),
    requires_clinical_intake BOOLEAN DEFAULT false,
    insurance_eligible BOOLEAN DEFAULT false,
    active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Appointments
CREATE TABLE appointments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    jane_appointment_id TEXT UNIQUE,
    patient_id UUID NOT NULL REFERENCES patients(id),
    service_id UUID NOT NULL REFERENCES services(id),
    provider_id UUID REFERENCES staff(id),
    location_id UUID NOT NULL REFERENCES locations(id),
    scheduled_at TIMESTAMPTZ NOT NULL,
    duration_minutes INTEGER NOT NULL,
    status appointment_status DEFAULT 'scheduled',
    notes TEXT,  -- Non-clinical only
    booking_source TEXT DEFAULT 'crm',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    synced_from_jane_at TIMESTAMPTZ
);

-- Transactions
CREATE TABLE transactions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    patient_id UUID NOT NULL REFERENCES patients(id),
    appointment_id UUID REFERENCES appointments(id),
    payment_type payment_type NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    status payment_status DEFAULT 'pending',
    square_transaction_id TEXT,
    receipt_number TEXT,
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- AUDIT LOG (HIPAA Requirement)
-- ============================================

CREATE TABLE audit_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    timestamp TIMESTAMPTZ DEFAULT NOW(),
    user_id UUID REFERENCES staff(id),
    action TEXT NOT NULL,  -- create, read, update, delete
    resource_type TEXT NOT NULL,  -- patients, appointments, etc.
    resource_id UUID,
    ip_address INET,
    user_agent TEXT,
    changes JSONB,  -- What changed (old vs new)
    phi_accessed BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Make audit logs append-only (no updates or deletes)
CREATE RULE audit_logs_no_update AS ON UPDATE TO audit_logs DO INSTEAD NOTHING;
CREATE RULE audit_logs_no_delete AS ON DELETE TO audit_logs DO INSTEAD NOTHING;

-- ============================================
-- ROW LEVEL SECURITY
-- ============================================

ALTER TABLE staff ENABLE ROW LEVEL SECURITY;
ALTER TABLE locations ENABLE ROW LEVEL SECURITY;
ALTER TABLE patients ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_logs ENABLE ROW LEVEL SECURITY;

-- Staff can read their own record and admins can read all
CREATE POLICY "Staff read own or admin reads all" ON staff
    FOR SELECT USING (
        auth.uid() = auth_id OR 
        EXISTS (SELECT 1 FROM staff WHERE auth_id = auth.uid() AND role = 'admin')
    );

-- All authenticated staff can read locations
CREATE POLICY "Authenticated staff read locations" ON locations
    FOR SELECT USING (auth.role() = 'authenticated');

-- All authenticated staff can read patients
CREATE POLICY "Authenticated staff read patients" ON patients
    FOR SELECT USING (auth.role() = 'authenticated');

-- All authenticated staff can read services
CREATE POLICY "Authenticated staff read services" ON services
    FOR SELECT USING (auth.role() = 'authenticated');

-- All authenticated staff can read appointments
CREATE POLICY "Authenticated staff read appointments" ON appointments
    FOR SELECT USING (auth.role() = 'authenticated');

-- Only admins/managers can read transactions
CREATE POLICY "Managers read transactions" ON transactions
    FOR SELECT USING (
        EXISTS (SELECT 1 FROM staff WHERE auth_id = auth.uid() AND role IN ('admin', 'manager'))
    );

-- Only admins can read audit logs
CREATE POLICY "Admins read audit logs" ON audit_logs
    FOR SELECT USING (
        EXISTS (SELECT 1 FROM staff WHERE auth_id = auth.uid() AND role = 'admin')
    );

-- ============================================
-- INDEXES
-- ============================================

CREATE INDEX idx_patients_email ON patients(email);
CREATE INDEX idx_patients_jane_id ON patients(jane_patient_id);
CREATE INDEX idx_appointments_scheduled ON appointments(scheduled_at);
CREATE INDEX idx_appointments_patient ON appointments(patient_id);
CREATE INDEX idx_appointments_location ON appointments(location_id);
CREATE INDEX idx_audit_logs_timestamp ON audit_logs(timestamp);
CREATE INDEX idx_audit_logs_user ON audit_logs(user_id);

-- ============================================
-- UPDATED_AT TRIGGER
-- ============================================

CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_staff_updated_at BEFORE UPDATE ON staff
    FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER update_locations_updated_at BEFORE UPDATE ON locations
    FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER update_patients_updated_at BEFORE UPDATE ON patients
    FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER update_services_updated_at BEFORE UPDATE ON services
    FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER update_appointments_updated_at BEFORE UPDATE ON appointments
    FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER update_transactions_updated_at BEFORE UPDATE ON transactions
    FOR EACH ROW EXECUTE FUNCTION update_updated_at();
```

### A4. Seed Data

**File: packages/database/seed.sql**

```sql
-- Seed Locations (Pathways Within actual locations)
INSERT INTO locations (id, name, address_line1, city, state, zip) VALUES
    ('11111111-1111-1111-1111-111111111111', 'Garden City', '520 Franklin Ave, Suite L1', 'Garden City', 'NY', '11530'),
    ('22222222-2222-2222-2222-222222222222', 'Port Jefferson', '1227 Main Street, Suite 101', 'Port Jefferson', 'NY', '11777'),
    ('33333333-3333-3333-3333-333333333333', 'Massapequa', '4160 Merrick Rd, Suite 5', 'Massapequa', 'NY', '11758'),
    ('44444444-4444-4444-4444-444444444444', 'Smithtown', '496 Smithtown Bypass, Suite 203', 'Smithtown', 'NY', '11787'),
    ('55555555-5555-5555-5555-555555555555', 'Rockville Centre', '53 N Park Ave, Suite 203', 'Rockville Centre', 'NY', '11570');

-- Seed Services (sample from each category)
INSERT INTO services (name, category, duration_minutes, price, requires_clinical_intake, insurance_eligible) VALUES
    -- Therapy (clinical)
    ('Individual Therapy', 'therapy', 60, 200.00, true, true),
    ('Couples Therapy', 'therapy', 60, 250.00, true, true),
    ('EMDR Therapy', 'therapy', 90, 275.00, true, true),
    
    -- Wellness Medical
    ('IV Vitamin Infusion', 'wellness_medical', 60, 199.00, true, true),
    ('Acupuncture', 'wellness_medical', 60, 150.00, true, true),
    ('Pain Management', 'wellness_medical', 45, 175.00, true, true),
    
    -- Wellness Aesthetic (no clinical intake, cash/card)
    ('HydraFacial', 'wellness_aesthetic', 60, 250.00, false, false),
    ('Laser Hair Removal', 'wellness_aesthetic', 30, 150.00, false, false),
    ('Cryotherapy', 'wellness_aesthetic', 15, 75.00, false, false),
    ('Teeth Whitening', 'wellness_aesthetic', 45, 199.00, false, false),
    ('Permanent Makeup', 'wellness_aesthetic', 120, 450.00, false, false);

-- Sample patients for demo
INSERT INTO patients (first_name, last_name, email, phone, preferred_location_id, marketing_consent) VALUES
    ('Jane', 'Smith', 'jane.smith@email.com', '516-555-0101', '11111111-1111-1111-1111-111111111111', true),
    ('Tom', 'Wilson', 'tom.wilson@email.com', '631-555-0102', '22222222-2222-2222-2222-222222222222', false),
    ('Sarah', 'Chen', 'sarah.chen@email.com', '516-555-0103', '11111111-1111-1111-1111-111111111111', true),
    ('Michael', 'Brown', 'michael.brown@email.com', '631-555-0104', '33333333-3333-3333-3333-333333333333', true),
    ('Emily', 'Davis', 'emily.davis@email.com', '516-555-0105', '44444444-4444-4444-4444-444444444444', false);
```

---

## PHASE B: Core CRM (Days 4-7)

### B1. Authentication Setup

**File: apps/crm/lib/supabase/server.ts**

```typescript
import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { Database } from '@pathways/database'

export async function createClient() {
  const cookieStore = await cookies()

  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          cookieStore.set({ name, value, ...options })
        },
        remove(name: string, options: CookieOptions) {
          cookieStore.set({ name, value: '', ...options })
        },
      },
    }
  )
}
```

### B2. Dashboard Layout

**File: apps/crm/app/(dashboard)/layout.tsx**

```typescript
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { Sidebar } from '@/components/layout/sidebar'
import { Header } from '@/components/layout/header'

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  // Get staff record
  const { data: staff } = await supabase
    .from('staff')
    .select('*')
    .eq('auth_id', user.id)
    .single()

  if (!staff) {
    redirect('/login')
  }

  return (
    <div className="min-h-screen bg-stone-50">
      <Sidebar staff={staff} />
      <div className="lg:pl-64">
        <Header staff={staff} />
        <main className="p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  )
}
```

### B3. Dashboard Home

**File: apps/crm/app/(dashboard)/page.tsx**

```typescript
import { createClient } from '@/lib/supabase/server'
import { TodaySchedule } from '@/components/dashboard/today-schedule'
import { QuickStats } from '@/components/dashboard/quick-stats'
import { RecentActivity } from '@/components/dashboard/recent-activity'

export default async function DashboardPage() {
  const supabase = await createClient()
  
  // Get today's appointments
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const tomorrow = new Date(today)
  tomorrow.setDate(tomorrow.getDate() + 1)

  const { data: appointments } = await supabase
    .from('appointments')
    .select(`
      *,
      patient:patients(*),
      service:services(*),
      location:locations(*)
    `)
    .gte('scheduled_at', today.toISOString())
    .lt('scheduled_at', tomorrow.toISOString())
    .order('scheduled_at', { ascending: true })

  const { data: staff } = await supabase
    .from('staff')
    .select('first_name')
    .eq('auth_id', (await supabase.auth.getUser()).data.user?.id)
    .single()

  return (
    <div className="space-y-8">
      {/* Greeting */}
      <div>
        <h1 className="text-2xl font-semibold text-stone-900">
          Good {getTimeOfDay()}, {staff?.first_name}
        </h1>
        <p className="text-stone-600 mt-1">
          {formatDate(today)} · {appointments?.length || 0} appointments today
        </p>
      </div>

      {/* Today's Schedule */}
      <TodaySchedule appointments={appointments || []} />

      {/* Quick Stats */}
      <QuickStats />

      {/* Recent Activity */}
      <RecentActivity />
    </div>
  )
}

function getTimeOfDay() {
  const hour = new Date().getHours()
  if (hour < 12) return 'morning'
  if (hour < 17) return 'afternoon'
  return 'evening'
}

function formatDate(date: Date) {
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  })
}
```

### B4. Patients List Page

**File: apps/crm/app/(dashboard)/patients/page.tsx**

```typescript
import { createClient } from '@/lib/supabase/server'
import { PatientList } from '@/components/patients/patient-list'
import { PatientSearch } from '@/components/patients/patient-search'

export default async function PatientsPage({
  searchParams,
}: {
  searchParams: { q?: string; page?: string }
}) {
  const supabase = await createClient()
  const query = searchParams.q || ''
  const page = parseInt(searchParams.page || '1')
  const pageSize = 20

  let patientsQuery = supabase
    .from('patients')
    .select('*, preferred_location:locations(*)', { count: 'exact' })
    .order('last_name', { ascending: true })
    .range((page - 1) * pageSize, page * pageSize - 1)

  if (query) {
    patientsQuery = patientsQuery.or(
      `first_name.ilike.%${query}%,last_name.ilike.%${query}%,email.ilike.%${query}%`
    )
  }

  const { data: patients, count } = await patientsQuery

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-stone-900">Patients</h1>
        <button className="px-4 py-2 bg-sage-600 text-white rounded-full text-sm font-medium hover:bg-sage-700 transition-colors">
          + Add patient
        </button>
      </div>

      <PatientSearch initialQuery={query} />

      <PatientList 
        patients={patients || []} 
        totalCount={count || 0}
        page={page}
        pageSize={pageSize}
      />
    </div>
  )
}
```

### B5. Audit Logging Action

**File: apps/crm/lib/actions/audit.ts**

```typescript
'use server'

import { createClient } from '@/lib/supabase/server'
import { headers } from 'next/headers'

type AuditAction = 'create' | 'read' | 'update' | 'delete'

interface AuditLogParams {
  action: AuditAction
  resourceType: string
  resourceId?: string
  changes?: Record<string, unknown>
  phiAccessed?: boolean
}

export async function logAuditEvent({
  action,
  resourceType,
  resourceId,
  changes,
  phiAccessed = false,
}: AuditLogParams) {
  const supabase = await createClient()
  const headersList = await headers()

  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) return

  const { data: staff } = await supabase
    .from('staff')
    .select('id')
    .eq('auth_id', user.id)
    .single()

  await supabase.from('audit_logs').insert({
    user_id: staff?.id,
    action,
    resource_type: resourceType,
    resource_id: resourceId,
    ip_address: headersList.get('x-forwarded-for') || headersList.get('x-real-ip'),
    user_agent: headersList.get('user-agent'),
    changes,
    phi_accessed: phiAccessed,
  })
}
```

---

## PHASE C: Booking System (Days 8-11)

### C1. Service Catalog

### C2. Availability Engine

### C3. Booking Flow

### C4. Calendar Views

*(Detailed implementation after Phase B is working)*

---

## PHASE D: Demo Polish (Days 12-14)

### D1. UI Refinement

Apply design-philosophy.mdc:
- Warm color palette (sage, cream, warm neutrals)
- 2 font weights only (400, 600)
- Generous whitespace
- Editorial, calm layouts
- Clear information hierarchy

### D2. Sample Data

Create realistic demo scenarios:
- 5 sample patients with history
- 2 weeks of appointments
- Mix of service types
- Sample transactions

### D3. Demo Walkthrough Script

1. Login as staff member
2. View today's dashboard
3. Check in a patient
4. View patient profile
5. Book new appointment
6. Process payment
7. View audit logs (admin)

---

## File Creation Order

Execute in this order:

### Day 1
1. [ ] Create `apps/crm/` directory structure
2. [ ] Create `apps/crm/package.json`
3. [ ] Create `packages/database/` structure
4. [ ] Create `packages/database/schema.sql`
5. [ ] Create `packages/database/seed.sql`
6. [ ] Set up Supabase project and run schema

### Day 2
7. [ ] Create `apps/crm/lib/supabase/server.ts`
8. [ ] Create `apps/crm/lib/supabase/client.ts`
9. [ ] Create `apps/crm/app/layout.tsx`
10. [ ] Create `apps/crm/app/(auth)/login/page.tsx`
11. [ ] Create auth middleware

### Day 3
12. [ ] Create `apps/crm/app/(dashboard)/layout.tsx`
13. [ ] Create `apps/crm/components/layout/sidebar.tsx`
14. [ ] Create `apps/crm/components/layout/header.tsx`
15. [ ] Create base UI components (button, input, card)

### Day 4-5
16. [ ] Create `apps/crm/app/(dashboard)/page.tsx`
17. [ ] Create dashboard components
18. [ ] Create patients list page
19. [ ] Create patient detail page
20. [ ] Create patient CRUD actions

### Day 6-7
21. [ ] Create appointments list page
22. [ ] Create appointment detail page
23. [ ] Create services management
24. [ ] Create audit logging

### Day 8-11
25. [ ] Build booking flow
26. [ ] Build availability engine
27. [ ] Build calendar views
28. [ ] Integrate with frontend widget

### Day 12-14
29. [ ] Polish UI to match design philosophy
30. [ ] Create demo data
31. [ ] Test full flows
32. [ ] Prepare demo presentation

---

## Commands Reference

```bash
# Install dependencies
pnpm install

# Run CRM dev server
pnpm dev:crm

# Generate Supabase types
pnpm supabase gen types typescript --project-id YOUR_PROJECT_ID > packages/database/types.ts

# Run schema migrations
pnpm supabase db push

# Seed database
pnpm supabase db seed
```

---

## Quality Gates

Before each phase is complete:

- [ ] TypeScript strict mode passes (no errors)
- [ ] All components have proper types
- [ ] Server actions validate inputs with Zod
- [ ] Audit logging working for PHI access
- [ ] RLS policies tested
- [ ] Responsive on mobile/tablet/desktop
- [ ] Follows design-philosophy.mdc
- [ ] AI changelog updated

---

## Next Action

**START HERE:** Create the CRM app structure and Supabase schema.

Ready to begin?
