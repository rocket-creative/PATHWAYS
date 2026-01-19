// Demo data for frontend preview
// This will be replaced with real Supabase data later

export const currentStaff = {
  id: '1',
  firstName: 'Sarah',
  lastName: 'Mitchell',
  email: 'sarah@pathwayswithin.com',
  role: 'manager' as const,
  location: 'Garden City',
}

export const locations = [
  { id: '1', name: 'Garden City', address: '520 Franklin Ave, Suite L1' },
  { id: '2', name: 'Port Jefferson', address: '1227 Main Street, Suite 101' },
  { id: '3', name: 'Massapequa', address: '4160 Merrick Rd, Suite 5' },
  { id: '4', name: 'Smithtown', address: '496 Smithtown Bypass, Suite 203' },
  { id: '5', name: 'Rockville Centre', address: '53 N Park Ave, Suite 203' },
]

export const services = [
  // Therapy
  { id: '1', name: 'Individual Therapy', category: 'therapy', duration: 60, price: 200 },
  { id: '2', name: 'Couples Therapy', category: 'therapy', duration: 60, price: 250 },
  { id: '3', name: 'EMDR Therapy', category: 'therapy', duration: 90, price: 275 },
  // Wellness Medical
  { id: '4', name: 'IV Vitamin Infusion', category: 'wellness_medical', duration: 60, price: 199 },
  { id: '5', name: 'Acupuncture', category: 'wellness_medical', duration: 60, price: 150 },
  // Wellness Aesthetic
  { id: '6', name: 'HydraFacial', category: 'wellness_aesthetic', duration: 60, price: 250 },
  { id: '7', name: 'Laser Hair Removal', category: 'wellness_aesthetic', duration: 30, price: 150 },
  { id: '8', name: 'Cryotherapy', category: 'wellness_aesthetic', duration: 15, price: 75 },
  { id: '9', name: 'Teeth Whitening', category: 'wellness_aesthetic', duration: 45, price: 199 },
]

export const patients = [
  {
    id: '1',
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@email.com',
    phone: '(516) 555-0101',
    preferredLocation: 'Garden City',
    lastVisit: '2026-01-15',
    totalVisits: 12,
    status: 'active',
  },
  {
    id: '2',
    firstName: 'Tom',
    lastName: 'Wilson',
    email: 'tom.wilson@email.com',
    phone: '(631) 555-0102',
    preferredLocation: 'Port Jefferson',
    lastVisit: '2026-01-10',
    totalVisits: 5,
    status: 'active',
  },
  {
    id: '3',
    firstName: 'Sarah',
    lastName: 'Chen',
    email: 'sarah.chen@email.com',
    phone: '(516) 555-0103',
    preferredLocation: 'Garden City',
    lastVisit: '2026-01-18',
    totalVisits: 3,
    status: 'new',
  },
  {
    id: '4',
    firstName: 'Michael',
    lastName: 'Brown',
    email: 'michael.brown@email.com',
    phone: '(631) 555-0104',
    preferredLocation: 'Massapequa',
    lastVisit: '2025-12-20',
    totalVisits: 8,
    status: 'active',
  },
  {
    id: '5',
    firstName: 'Emily',
    lastName: 'Davis',
    email: 'emily.davis@email.com',
    phone: '(516) 555-0105',
    preferredLocation: 'Smithtown',
    lastVisit: '2026-01-05',
    totalVisits: 15,
    status: 'active',
  },
]

// Today's appointments for the demo
const today = new Date()
export const todaysAppointments = [
  {
    id: '1',
    time: new Date(today.setHours(9, 0, 0, 0)),
    patient: patients[0],
    service: services[5], // HydraFacial
    provider: 'Maria S.',
    status: 'confirmed',
    location: 'Garden City',
  },
  {
    id: '2',
    time: new Date(today.setHours(10, 30, 0, 0)),
    patient: patients[1],
    service: services[6], // Laser Hair
    provider: 'Sarah M.',
    status: 'checked_in',
    location: 'Garden City',
  },
  {
    id: '3',
    time: new Date(today.setHours(11, 0, 0, 0)),
    patient: patients[2],
    service: services[7], // Cryotherapy
    provider: 'Maria S.',
    status: 'confirmed',
    location: 'Garden City',
  },
  {
    id: '4',
    time: new Date(today.setHours(13, 0, 0, 0)),
    patient: patients[3],
    service: services[3], // IV Infusion
    provider: 'Dr. Johnson',
    status: 'pending',
    location: 'Garden City',
  },
  {
    id: '5',
    time: new Date(today.setHours(14, 30, 0, 0)),
    patient: patients[0],
    service: services[0], // Individual Therapy
    provider: 'Dr. Johnson',
    status: 'confirmed',
    location: 'Garden City',
  },
  {
    id: '6',
    time: new Date(today.setHours(15, 30, 0, 0)),
    patient: patients[4],
    service: services[8], // Teeth Whitening
    provider: 'Sarah M.',
    status: 'pending',
    location: 'Garden City',
  },
]

export const recentTransactions = [
  { id: '1', patient: 'Jane Smith', service: 'HydraFacial', amount: 250, type: 'card', date: '2026-01-18' },
  { id: '2', patient: 'Tom Wilson', service: 'Therapy Copay', amount: 30, type: 'card', date: '2026-01-17' },
  { id: '3', patient: 'Sarah Chen', service: 'Cryotherapy', amount: 75, type: 'cash', date: '2026-01-17' },
  { id: '4', patient: 'Michael Brown', service: 'IV Infusion', amount: 199, type: 'card', date: '2026-01-16' },
]

export const stats = {
  todayAppointments: 6,
  todayRevenue: 1245,
  weekAppointments: 42,
  weekRevenue: 8750,
  pendingConfirmations: 3,
  noShows: 1,
}
