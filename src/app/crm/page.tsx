'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  DollarSign, 
  Clock, 
  CheckCircle2,
  AlertCircle,
  Plus,
  Search,
  Filter,
  Shield
} from 'lucide-react'

// Mock data - replace with real data later
const stats = {
  totalPatients: 247,
  todayAppointments: 12,
  pendingPayments: 8,
  activeTherapists: 15,
}

const recentAppointments = [
  { id: 1, patient: 'Sarah Johnson', time: '9:00 AM', therapist: 'Dr. Smith', status: 'confirmed', type: 'Individual Therapy' },
  { id: 2, patient: 'Michael Chen', time: '10:30 AM', therapist: 'Dr. Brown', status: 'pending', type: 'Couples Therapy' },
  { id: 3, patient: 'Emily Rodriguez', time: '11:00 AM', therapist: 'Dr. Davis', status: 'confirmed', type: 'Massage' },
  { id: 4, patient: 'David Kim', time: '2:00 PM', therapist: 'Dr. Wilson', status: 'cancelled', type: 'Individual Therapy' },
  { id: 5, patient: 'Lisa Anderson', time: '3:30 PM', therapist: 'Dr. Martinez', status: 'confirmed', type: 'Acupuncture' },
]

const recentPatients = [
  { id: 1, name: 'Sarah Johnson', email: 'sarah.j@email.com', phone: '(555) 123-4567', lastVisit: '2026-01-20', status: 'active' },
  { id: 2, name: 'Michael Chen', email: 'm.chen@email.com', phone: '(555) 234-5678', lastVisit: '2026-01-19', status: 'active' },
  { id: 3, name: 'Emily Rodriguez', email: 'emily.r@email.com', phone: '(555) 345-6789', lastVisit: '2026-01-18', status: 'active' },
  { id: 4, name: 'David Kim', email: 'd.kim@email.com', phone: '(555) 456-7890', lastVisit: '2026-01-15', status: 'inactive' },
  { id: 5, name: 'Lisa Anderson', email: 'lisa.a@email.com', phone: '(555) 567-8901', lastVisit: '2026-01-22', status: 'active' },
]

type View = 'dashboard' | 'patients' | 'appointments'

export default function CRMPage() {
  const [currentView, setCurrentView] = useState<View>('dashboard')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPatients = recentPatients.filter(patient =>
    patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    patient.email.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const filteredAppointments = recentAppointments.filter(apt =>
    apt.patient.toLowerCase().includes(searchQuery.toLowerCase()) ||
    apt.therapist.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="border-b border-linen-300 bg-white">
        <div className="container-site py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-navy">CRM Dashboard</h1>
              <p className="text-sm text-navy-400">Practice Management System</p>
            </div>
            <div className="flex items-center gap-3">
              <Link 
                href="/"
                className="text-sm text-navy-400 hover:text-navy transition-colors"
              >
                Back to Site
              </Link>
              <div className="flex items-center gap-2 rounded-lg bg-linen-200 px-3 py-2">
                <Shield className="h-4 w-4 text-navy-400" />
                <span className="text-xs text-navy-400">Staff Only</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="border-b border-linen-300 bg-white">
        <div className="container-site">
          <div className="flex gap-1">
            <button
              onClick={() => setCurrentView('dashboard')}
              className={`px-6 py-3 text-sm font-medium transition-colors ${
                currentView === 'dashboard'
                  ? 'border-b-2 border-green text-green'
                  : 'text-navy-400 hover:text-navy'
              }`}
            >
              <LayoutDashboard className="mr-2 inline h-4 w-4" />
              Dashboard
            </button>
            <button
              onClick={() => setCurrentView('patients')}
              className={`px-6 py-3 text-sm font-medium transition-colors ${
                currentView === 'patients'
                  ? 'border-b-2 border-green text-green'
                  : 'text-navy-400 hover:text-navy'
              }`}
            >
              <Users className="mr-2 inline h-4 w-4" />
              Patients
            </button>
            <button
              onClick={() => setCurrentView('appointments')}
              className={`px-6 py-3 text-sm font-medium transition-colors ${
                currentView === 'appointments'
                  ? 'border-b-2 border-green text-green'
                  : 'text-navy-400 hover:text-navy'
              }`}
            >
              <Calendar className="mr-2 inline h-4 w-4" />
              Appointments
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container-site py-8">
        {currentView === 'dashboard' && (
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg border border-linen-300 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-navy-400">Total Patients</p>
                    <p className="mt-1 text-3xl font-semibold text-navy">{stats.totalPatients}</p>
                  </div>
                  <div className="rounded-full bg-green-100 p-3">
                    <Users className="h-6 w-6 text-green" />
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-linen-300 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-navy-400">Today's Appointments</p>
                    <p className="mt-1 text-3xl font-semibold text-navy">{stats.todayAppointments}</p>
                  </div>
                  <div className="rounded-full bg-breezy-100 p-3">
                    <Calendar className="h-6 w-6 text-breezy" />
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-linen-300 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-navy-400">Pending Payments</p>
                    <p className="mt-1 text-3xl font-semibold text-navy">{stats.pendingPayments}</p>
                  </div>
                  <div className="rounded-full bg-breezy-100 p-3">
                    <DollarSign className="h-6 w-6 text-breezy" />
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-linen-300 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-navy-400">Active Therapists</p>
                    <p className="mt-1 text-3xl font-semibold text-navy">{stats.activeTherapists}</p>
                  </div>
                  <div className="rounded-full bg-green-100 p-3">
                    <Users className="h-6 w-6 text-green" />
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Appointments */}
            <div className="rounded-lg border border-linen-300 bg-white shadow-sm">
              <div className="border-b border-linen-300 px-6 py-4">
                <h2 className="text-lg font-semibold text-navy">Today's Appointments</h2>
              </div>
              <div className="divide-y divide-linen-300">
                {recentAppointments.slice(0, 5).map((apt) => (
                  <div key={apt.id} className="px-6 py-4 hover:bg-cream transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <h3 className="font-medium text-navy">{apt.patient}</h3>
                          <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                            apt.status === 'confirmed' ? 'bg-green-100 text-green-700' :
                            apt.status === 'pending' ? 'bg-breezy-100 text-navy-700' :
                            'bg-linen-200 text-navy-700'
                          }`}>
                            {apt.status}
                          </span>
                        </div>
                        <p className="mt-1 text-sm text-navy-400">{apt.type} with {apt.therapist}</p>
                      </div>
                      <div className="flex items-center gap-2 text-navy-400">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm font-medium">{apt.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {currentView === 'patients' && (
          <div className="space-y-6">
            {/* Search and Actions */}
            <div className="flex items-center justify-between gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-400" />
                <input
                  type="text"
                  placeholder="Search patients..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-lg border border-linen-300 bg-white py-2 pl-10 pr-4 text-sm text-navy focus:border-green focus:outline-none focus:ring-2 focus:ring-green-500/20"
                />
              </div>
              <button className="flex items-center gap-2 rounded-lg bg-green px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-600">
                <Plus className="h-4 w-4" />
                Add Patient
              </button>
            </div>

            {/* Patients Table */}
            <div className="rounded-lg border border-linen-300 bg-white shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b border-linen-300 bg-linen-100">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-navy-400">Name</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-navy-400">Contact</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-navy-400">Last Visit</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-navy-400">Status</th>
                      <th className="px-6 py-3 text-right text-xs font-semibold uppercase tracking-wider text-navy-400">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-linen-300">
                    {filteredPatients.map((patient) => (
                      <tr key={patient.id} className="hover:bg-cream transition-colors">
                        <td className="px-6 py-4">
                          <div className="font-medium text-navy">{patient.name}</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-navy-400">{patient.email}</div>
                          <div className="text-sm text-navy-400">{patient.phone}</div>
                        </td>
                        <td className="px-6 py-4 text-sm text-navy-400">{patient.lastVisit}</td>
                        <td className="px-6 py-4">
                          <span className={`rounded-full px-2 py-1 text-xs font-medium ${
                            patient.status === 'active' 
                              ? 'bg-green-100 text-green-700' 
                              : 'bg-linen-200 text-navy-700'
                          }`}>
                            {patient.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-sm text-green hover:text-green-600 transition-colors">
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {currentView === 'appointments' && (
          <div className="space-y-6">
            {/* Search and Actions */}
            <div className="flex items-center justify-between gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-400" />
                <input
                  type="text"
                  placeholder="Search appointments..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-lg border border-linen-300 bg-white py-2 pl-10 pr-4 text-sm text-navy focus:border-green focus:outline-none focus:ring-2 focus:ring-green-500/20"
                />
              </div>
              <button className="flex items-center gap-2 rounded-lg bg-green px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-600">
                <Plus className="h-4 w-4" />
                New Appointment
              </button>
            </div>

            {/* Appointments List */}
            <div className="rounded-lg border border-linen-300 bg-white shadow-sm">
              <div className="divide-y divide-linen-300">
                {filteredAppointments.map((apt) => (
                  <div key={apt.id} className="px-6 py-4 hover:bg-cream transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <h3 className="font-medium text-navy">{apt.patient}</h3>
                          <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                            apt.status === 'confirmed' ? 'bg-green-100 text-green-700' :
                            apt.status === 'pending' ? 'bg-breezy-100 text-navy-700' :
                            'bg-linen-200 text-navy-700'
                          }`}>
                            {apt.status}
                          </span>
                        </div>
                        <p className="mt-1 text-sm text-navy-400">{apt.type}</p>
                        <p className="mt-1 text-sm text-navy-400">with {apt.therapist}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <div className="flex items-center gap-2 text-navy-400">
                            <Clock className="h-4 w-4" />
                            <span className="text-sm font-medium">{apt.time}</span>
                          </div>
                        </div>
                        <button className="text-sm text-green hover:text-green-600 transition-colors">
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
