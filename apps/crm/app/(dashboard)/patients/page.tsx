import { patients } from '@/lib/demo-data'
import { Search, Filter, Plus, MoreHorizontal } from 'lucide-react'
import Link from 'next/link'

export default function PatientsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-stone-900">Patients</h1>
          <p className="text-stone-500 mt-1">{patients.length} total patients</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-sage-600 text-white text-sm font-medium rounded-full hover:bg-sage-700 transition-colors">
          <Plus className="w-4 h-4" />
          Add patient
        </button>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
          <input
            type="text"
            placeholder="Search by name, email, or phone..."
            className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 text-sm text-stone-600 bg-white border border-stone-200 rounded-lg hover:bg-stone-50 transition-colors">
          <Filter className="w-4 h-4" />
          Filters
        </button>
      </div>

      {/* Patient Table */}
      <div className="card overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-stone-200 bg-stone-50">
              <th className="text-left text-xs font-medium text-stone-500 uppercase tracking-wider px-6 py-3">
                Patient
              </th>
              <th className="text-left text-xs font-medium text-stone-500 uppercase tracking-wider px-6 py-3">
                Contact
              </th>
              <th className="text-left text-xs font-medium text-stone-500 uppercase tracking-wider px-6 py-3">
                Location
              </th>
              <th className="text-left text-xs font-medium text-stone-500 uppercase tracking-wider px-6 py-3">
                Last visit
              </th>
              <th className="text-left text-xs font-medium text-stone-500 uppercase tracking-wider px-6 py-3">
                Status
              </th>
              <th className="w-12"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            {patients.map((patient) => (
              <tr key={patient.id} className="hover:bg-stone-50 transition-colors">
                <td className="px-6 py-4">
                  <Link href={`/patients/${patient.id}`} className="block">
                    <p className="font-medium text-stone-900 hover:text-sage-600 transition-colors">
                      {patient.firstName} {patient.lastName}
                    </p>
                    <p className="text-sm text-stone-500">{patient.totalVisits} visits</p>
                  </Link>
                </td>
                <td className="px-6 py-4">
                  <p className="text-sm text-stone-900">{patient.email}</p>
                  <p className="text-sm text-stone-500">{patient.phone}</p>
                </td>
                <td className="px-6 py-4">
                  <p className="text-sm text-stone-900">{patient.preferredLocation}</p>
                </td>
                <td className="px-6 py-4">
                  <p className="text-sm text-stone-900">
                    {new Date(patient.lastVisit).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </p>
                </td>
                <td className="px-6 py-4">
                  <span className={`badge ${
                    patient.status === 'new' 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'badge-confirmed'
                  }`}>
                    {patient.status === 'new' ? 'New' : 'Active'}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="p-1.5 text-stone-400 hover:text-stone-600 transition-colors">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-stone-500">
          Showing 1-{patients.length} of {patients.length} patients
        </p>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 text-sm text-stone-500 bg-white border border-stone-200 rounded-lg hover:bg-stone-50 disabled:opacity-50" disabled>
            Previous
          </button>
          <button className="px-3 py-1.5 text-sm text-stone-500 bg-white border border-stone-200 rounded-lg hover:bg-stone-50 disabled:opacity-50" disabled>
            Next
          </button>
        </div>
      </div>
    </div>
  )
}
