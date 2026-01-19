import { patients, todaysAppointments, recentTransactions, services } from '@/lib/demo-data'
import Link from 'next/link'
import { 
  ArrowLeft, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  CreditCard,
  FileText,
  Edit,
  MoreHorizontal,
} from 'lucide-react'

export default function PatientDetailPage({ params }: { params: { id: string } }) {
  // For demo, use first patient
  const patient = patients.find(p => p.id === params.id) || patients[0]
  
  // Demo appointment history
  const patientAppointments = [
    { date: '2026-01-18', service: 'HydraFacial', provider: 'Maria S.', status: 'completed' },
    { date: '2026-01-14', service: 'Individual Therapy', provider: 'Dr. Johnson', status: 'completed' },
    { date: '2026-01-10', service: 'Cryotherapy', provider: 'Sarah M.', status: 'completed' },
    { date: '2026-01-07', service: 'Individual Therapy', provider: 'Dr. Johnson', status: 'completed' },
    { date: '2025-12-28', service: 'IV Vitamin Infusion', provider: 'Dr. Chen', status: 'completed' },
  ]

  // Demo payment history  
  const patientPayments = [
    { date: '2026-01-18', service: 'HydraFacial', amount: 250, type: 'card' },
    { date: '2026-01-14', service: 'Therapy Copay', amount: 30, type: 'card' },
    { date: '2026-01-10', service: 'Cryotherapy', amount: 75, type: 'cash' },
  ]

  return (
    <div className="space-y-6">
      {/* Back link */}
      <Link 
        href="/patients" 
        className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-stone-700 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to patients
      </Link>

      {/* Patient Header */}
      <div className="card p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-sage-100 flex items-center justify-center text-xl font-semibold text-sage-700">
              {patient.firstName[0]}{patient.lastName[0]}
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-stone-900">
                {patient.firstName} {patient.lastName}
              </h1>
              <div className="flex items-center gap-4 mt-2 text-sm text-stone-500">
                <span className="flex items-center gap-1">
                  <Mail className="w-4 h-4" />
                  {patient.email}
                </span>
                <span className="flex items-center gap-1">
                  <Phone className="w-4 h-4" />
                  {patient.phone}
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-4 py-2 text-sm text-stone-600 bg-white border border-stone-200 rounded-lg hover:bg-stone-50 transition-colors">
              <Edit className="w-4 h-4" />
              Edit
            </button>
            <button className="p-2 text-stone-400 hover:text-stone-600 transition-colors">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-4 gap-4 mt-6 pt-6 border-t border-stone-100">
          <div>
            <p className="text-sm text-stone-500">Status</p>
            <p className="font-medium text-stone-900 mt-1">
              <span className="badge badge-confirmed">Active</span>
            </p>
          </div>
          <div>
            <p className="text-sm text-stone-500">Preferred location</p>
            <p className="font-medium text-stone-900 mt-1 flex items-center gap-1">
              <MapPin className="w-4 h-4 text-stone-400" />
              {patient.preferredLocation}
            </p>
          </div>
          <div>
            <p className="text-sm text-stone-500">Total visits</p>
            <p className="font-medium text-stone-900 mt-1">{patient.totalVisits}</p>
          </div>
          <div>
            <p className="text-sm text-stone-500">Patient since</p>
            <p className="font-medium text-stone-900 mt-1">June 2024</p>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Upcoming Appointments */}
          <div className="card">
            <div className="px-6 py-4 border-b border-stone-100 flex items-center justify-between">
              <h2 className="font-semibold text-stone-900">Upcoming appointments</h2>
              <button className="text-sm text-sage-600 hover:text-sage-700 font-medium">
                + Schedule new
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-4 p-4 bg-sage-50 rounded-lg">
                <div className="p-3 bg-white rounded-lg">
                  <Calendar className="w-5 h-5 text-sage-600" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-stone-900">Individual Therapy</p>
                  <p className="text-sm text-stone-500">Tomorrow at 2:00 PM · Dr. Johnson</p>
                </div>
                <span className="badge badge-confirmed">Confirmed</span>
              </div>
            </div>
          </div>

          {/* Appointment History */}
          <div className="card">
            <div className="px-6 py-4 border-b border-stone-100">
              <h2 className="font-semibold text-stone-900">Appointment history</h2>
            </div>
            <div className="divide-y divide-stone-100">
              {patientAppointments.map((appt, i) => (
                <div key={i} className="px-6 py-4 flex items-center justify-between">
                  <div>
                    <p className="font-medium text-stone-900">{appt.service}</p>
                    <p className="text-sm text-stone-500">{appt.provider}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-stone-900">
                      {new Date(appt.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </p>
                    <span className="badge badge-completed text-xs">Completed</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Payment Info */}
          <div className="card p-6">
            <h3 className="font-semibold text-stone-900 mb-4 flex items-center gap-2">
              <CreditCard className="w-4 h-4" />
              Payment information
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-stone-500">Insurance</span>
                <span className="font-medium text-stone-900">Aetna</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Card on file</span>
                <span className="font-medium text-stone-900">•••• 4242</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Balance</span>
                <span className="font-medium text-sage-600">$0.00</span>
              </div>
            </div>
          </div>

          {/* Recent Payments */}
          <div className="card">
            <div className="px-6 py-4 border-b border-stone-100">
              <h3 className="font-semibold text-stone-900">Recent payments</h3>
            </div>
            <div className="divide-y divide-stone-100">
              {patientPayments.map((payment, i) => (
                <div key={i} className="px-6 py-3 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-stone-900">{payment.service}</p>
                    <p className="text-xs text-stone-500">
                      {new Date(payment.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                      })} · {payment.type}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-stone-900">${payment.amount}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Consents & Forms */}
          <div className="card p-6">
            <h3 className="font-semibold text-stone-900 mb-4 flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Consents & forms
            </h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-stone-600">HIPAA Notice</span>
                <span className="text-sage-600">✓ Signed</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-stone-600">Treatment Consent</span>
                <span className="text-sage-600">✓ Signed</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-stone-600">Marketing Consent</span>
                <span className="text-sage-600">✓ Opted in</span>
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="card p-6">
            <h3 className="font-semibold text-stone-900 mb-3">Notes</h3>
            <p className="text-sm text-stone-500 italic">
              Prefers morning appointments. Interested in trying IV therapy.
            </p>
            <button className="text-sm text-sage-600 hover:text-sage-700 font-medium mt-3">
              + Add note
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
