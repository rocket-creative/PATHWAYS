export type LocationType = 'Wisdom' | 'Wellness' | 'Both'

export interface Location {
  id: string
  name: string
  displayName: string
  type: LocationType
  address: string
  city: string
  zip: string
  phone: string
  services: string[]
  mapsUrl: string
  virtual?: boolean
  note?: string
}

export const locations: Location[] = [
  {
    id: 'garden-city-wisdom',
    name: 'Garden City — Wisdom',
    displayName: 'Garden City — Wisdom',
    type: 'Wisdom',
    address: '520 Franklin Ave, Suite L1',
    city: 'Garden City, NY',
    zip: '11530',
    phone: '(631) 371-3825',
    services: [
      'Individual, couples, and family therapy',
      'Child and teen therapy',
      'Trauma and EMDR therapy',
      'Somatic therapy and hypnotherapy',
    ],
    mapsUrl: 'https://maps.google.com/?q=520+Franklin+Ave+Suite+L1+Garden+City+NY+11530',
  },
  {
    id: 'garden-city-wellness',
    name: 'Garden City — Wellness',
    displayName: 'Garden City — Wellness',
    type: 'Wellness',
    address: '520 Franklin Ave, Suite L2',
    city: 'Garden City, NY',
    zip: '11530',
    phone: '(631) 371-3825',
    services: [
      'Massage therapy',
      'Acupuncture',
      'Skincare and aesthetics',
      'Energy work',
    ],
    mapsUrl: 'https://maps.google.com/?q=520+Franklin+Ave+Garden+City+NY+11530',
  },
  {
    id: 'port-jefferson',
    name: 'Port Jefferson',
    displayName: 'Port Jefferson',
    type: 'Both',
    address: '1227 Main Street, Suite 101',
    city: 'Port Jefferson, NY',
    zip: '11777',
    phone: '(631) 371-3825',
    services: [
      'Individual, couples, and family therapy',
      'Child and teen therapy',
      'Trauma and EMDR therapy',
      'Wellness services (contact for availability)',
    ],
    mapsUrl: 'https://maps.google.com/?q=1227+Main+Street+Suite+101+Port+Jefferson+NY+11777',
  },
  {
    id: 'massapequa',
    name: 'Massapequa',
    displayName: 'Massapequa',
    type: 'Both',
    address: '4160 Merrick Rd, Suite 5 & Suite 7',
    city: 'Massapequa, NY',
    zip: '11758',
    phone: '(631) 371-3825',
    services: [
      'Individual, couples, and family therapy',
      'Child and teen therapy',
      'Trauma and EMDR therapy',
      'Wellness services (contact for availability)',
    ],
    mapsUrl: 'https://maps.google.com/?q=4160+Merrick+Rd+Massapequa+NY+11758',
  },
  {
    id: 'smithtown',
    name: 'Smithtown',
    displayName: 'Smithtown',
    type: 'Both',
    address: '496 Smithtown Bypass, Suite 203 & Suite 204',
    city: 'Smithtown, NY',
    zip: '11787',
    phone: '(631) 371-3825',
    services: [
      'Individual, couples, and family therapy',
      'Child and teen therapy',
      'Trauma and EMDR therapy',
      'Wellness services (contact for availability)',
    ],
    mapsUrl: 'https://maps.google.com/?q=496+Smithtown+Bypass+Smithtown+NY+11787',
  },
  {
    id: 'rockville-centre',
    name: 'Rockville Centre',
    displayName: 'Rockville Centre',
    type: 'Both',
    address: '53 N Park Ave, Suite 203',
    city: 'Rockville Centre, NY',
    zip: '11570',
    phone: '(631) 371-3825',
    services: [
      'Individual, couples, and family therapy',
      'Child and teen therapy',
      'Trauma and EMDR therapy',
      'Wellness services (contact for availability)',
    ],
    mapsUrl: 'https://maps.google.com/?q=53+N+Park+Ave+Suite+203+Rockville+Centre+NY+11570',
  },
]

export const locationsList = locations

export const locationNames = locations.map((l) => l.displayName)

export function getLocationById(id: string) {
  return locations.find((l) => l.id === id)
}
