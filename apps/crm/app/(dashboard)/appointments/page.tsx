import { todaysAppointments, services } from '@/lib/demo-data'
import { ChevronLeft, ChevronRight, Plus, Filter } from 'lucide-react'

export default function AppointmentsPage() {
  const today = new Date()
  
  // Generate week days
  const weekDays = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(today)
    date.setDate(today.getDate() - today.getDay() + i)
    return date
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-navy">Appointments</h1>
          <p className="text-navy-400 mt-1">Manage your schedule</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-full hover:bg-green-700 transition-colors">
          <Plus className="w-4 h-4" />
          New appointment
        </button>
      </div>

      {/* Calendar Navigation */}
      <div className="card">
        <div className="px-6 py-4 border-b border-linen-200 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="p-1.5 text-navy-300 hover:text-navy-500 hover:bg-linen-100 rounded-lg transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <h2 className="font-semibold text-navy">
              {today.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </h2>
            <button className="p-1.5 text-navy-300 hover:text-navy-500 hover:bg-linen-100 rounded-lg transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 text-sm font-medium text-green-600 bg-green-50 rounded-lg">
              Today
            </button>
            <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-navy-500 hover:bg-linen-100 rounded-lg transition-colors">
              <Filter className="w-4 h-4" />
              Filter
            </button>
          </div>
        </div>

        {/* Week View */}
        <div className="grid grid-cols-7 border-b border-linen-200">
          {weekDays.map((date, i) => {
            const isToday = date.toDateString() === today.toDateString()
            return (
              <div
                key={i}
                className={`p-4 text-center border-r border-linen-200 last:border-r-0 ${
                  isToday ? 'bg-green-50' : ''
                }`}
              >
                <p className="text-xs text-navy-400 uppercase">
                  {date.toLocaleDateString('en-US', { weekday: 'short' })}
                </p>
                <p className={`text-lg font-semibold mt-1 ${
                  isToday ? 'text-green-600' : 'text-navy'
                }`}>
                  {date.getDate()}
                </p>
                {isToday && (
                  <p className="text-xs text-green-600 mt-1">
                    {todaysAppointments.length} appts
                  </p>
                )}
              </div>
            )
          })}
        </div>

        {/* Day Schedule */}
        <div className="p-6">
          <h3 className="text-sm font-medium text-navy-400 mb-4">
            {today.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
          </h3>
          
          <div className="space-y-2">
            {todaysAppointments.map((appt) => (
              <div
                key={appt.id}
                className="flex items-center gap-4 p-4 bg-cream-50 rounded-lg hover:bg-linen-100 transition-colors cursor-pointer"
              >
                <div className="w-20 text-sm font-medium text-navy">
                  {appt.time.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}
                </div>
                <div className={`w-1 h-12 rounded-full ${
                  appt.service.category === 'therapy' 
                    ? 'bg-blue-400' 
                    : appt.service.category === 'wellness_medical'
                    ? 'bg-purple-400'
                    : 'bg-green-500'
                }`} />
                <div className="flex-1">
                  <p className="font-medium text-navy">
                    {appt.patient.firstName} {appt.patient.lastName}
                  </p>
                  <p className="text-sm text-navy-400">
                    {appt.service.name} · {appt.service.duration} min · {appt.provider}
                  </p>
                </div>
                <span className={`badge ${
                  appt.status === 'confirmed' ? 'badge-confirmed' :
                  appt.status === 'checked_in' ? 'bg-blue-100 text-blue-700' :
                  'badge-pending'
                }`}>
                  {appt.status === 'checked_in' ? 'Checked in' : 
                   appt.status.charAt(0).toUpperCase() + appt.status.slice(1)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-6 text-sm text-navy-400">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-400" />
          Therapy
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-purple-400" />
          Wellness Medical
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-green-500" />
          Aesthetic
        </div>
      </div>
    </div>
  )
}
