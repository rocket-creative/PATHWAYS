import { 
  currentStaff, 
  todaysAppointments, 
  stats, 
  recentTransactions 
} from '@/lib/demo-data'
import { formatDate, getTimeOfDay } from '@/lib/utils'
import { 
  Calendar, 
  DollarSign, 
  Users, 
  Clock,
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react'

export default function DashboardPage() {
  const today = new Date()

  return (
    <div className="space-y-8">
      {/* Greeting */}
      <div>
        <h1 className="text-2xl font-semibold text-navy">
          Good {getTimeOfDay()}, {currentStaff.firstName}
        </h1>
        <p className="text-navy-400 mt-1">
          {formatDate(today)} · {stats.todayAppointments} appointments today
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          label="Today's appointments"
          value={stats.todayAppointments.toString()}
          icon={Calendar}
          trend="+2 from yesterday"
        />
        <StatCard
          label="Today's revenue"
          value={`$${stats.todayRevenue.toLocaleString()}`}
          icon={DollarSign}
          trend="+12%"
        />
        <StatCard
          label="This week"
          value={stats.weekAppointments.toString()}
          subtext="appointments"
          icon={Users}
        />
        <StatCard
          label="Pending confirmations"
          value={stats.pendingConfirmations.toString()}
          icon={Clock}
          alert
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Today's Schedule - Takes 2 columns */}
        <div className="lg:col-span-2 card">
          <div className="px-6 py-4 border-b border-linen-200">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-navy">Today's schedule</h2>
              <button className="text-sm text-green hover:text-green-600 font-medium">
                View all →
              </button>
            </div>
          </div>
          <div className="divide-y divide-linen-200">
            {todaysAppointments.map((appointment) => (
              <AppointmentRow key={appointment.id} appointment={appointment} />
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Alerts */}
          <div className="card p-6">
            <h3 className="font-semibold text-navy mb-4">Needs attention</h3>
            <div className="space-y-3">
              <AlertItem
                type="warning"
                title="Insurance verification failed"
                description="Tom Wilson — manual verification required"
              />
              <AlertItem
                type="info"
                title="3 consent forms pending"
                description="Awaiting patient signatures"
              />
              <AlertItem
                type="success"
                title="Cash reconciliation"
                description="Due in 2 hours"
              />
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="card">
            <div className="px-6 py-4 border-b border-linen-200">
              <h3 className="font-semibold text-navy">Recent transactions</h3>
            </div>
            <div className="divide-y divide-linen-200">
              {recentTransactions.slice(0, 4).map((tx) => (
                <div key={tx.id} className="px-6 py-3 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-navy">{tx.patient}</p>
                    <p className="text-xs text-navy-400">{tx.service}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-navy">
                      ${tx.amount}
                    </p>
                    <p className="text-xs text-navy-400 capitalize">{tx.type}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Stat Card Component
function StatCard({ 
  label, 
  value, 
  subtext,
  icon: Icon, 
  trend,
  alert 
}: { 
  label: string
  value: string
  subtext?: string
  icon: React.ElementType
  trend?: string
  alert?: boolean
}) {
  return (
    <div className="card p-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-navy-400">{label}</p>
          <p className="text-2xl font-semibold text-navy mt-1">
            {value}
            {subtext && <span className="text-sm font-normal text-navy-400 ml-1">{subtext}</span>}
          </p>
          {trend && (
            <p className="text-xs text-green mt-1 flex items-center gap-1">
              <ArrowUpRight className="w-3 h-3" />
              {trend}
            </p>
          )}
        </div>
        <div className={`p-2 rounded-lg ${alert ? 'bg-amber-100' : 'bg-linen-100'}`}>
          <Icon className={`w-5 h-5 ${alert ? 'text-amber-600' : 'text-navy-400'}`} />
        </div>
      </div>
    </div>
  )
}

// Appointment Row Component
function AppointmentRow({ appointment }: { appointment: typeof todaysAppointments[0] }) {
  const statusStyles = {
    confirmed: 'badge-confirmed',
    checked_in: 'bg-breezy-100 text-navy',
    pending: 'badge-pending',
    completed: 'badge-completed',
    cancelled: 'badge-cancelled',
  }

  const statusLabels = {
    confirmed: 'Confirmed',
    checked_in: 'Checked in',
    pending: 'Pending',
    completed: 'Completed',
    cancelled: 'Cancelled',
  }

  return (
    <div className="px-6 py-4 flex items-center gap-4 hover:bg-linen-50 transition-colors">
      {/* Time */}
      <div className="w-16 text-sm">
        <span className="font-medium text-navy">
          {appointment.time.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}
        </span>
      </div>

      {/* Patient & Service */}
      <div className="flex-1 min-w-0">
        <p className="font-medium text-navy">
          {appointment.patient.firstName} {appointment.patient.lastName}
        </p>
        <p className="text-sm text-navy-400 truncate">
          {appointment.service.name} · {appointment.provider}
        </p>
      </div>

      {/* Status */}
      <span className={`badge ${statusStyles[appointment.status as keyof typeof statusStyles]}`}>
        {statusLabels[appointment.status as keyof typeof statusLabels]}
      </span>

      {/* Actions */}
      <button className="px-3 py-1.5 text-sm font-medium text-green hover:bg-green-50 rounded-lg transition-colors">
        Check in
      </button>
    </div>
  )
}

// Alert Item Component
function AlertItem({ 
  type, 
  title, 
  description 
}: { 
  type: 'warning' | 'info' | 'success'
  title: string
  description: string
}) {
  const styles = {
    warning: { bg: 'bg-amber-50', icon: AlertCircle, iconColor: 'text-amber-500' },
    info: { bg: 'bg-breezy-100', icon: Clock, iconColor: 'text-breezy-500' },
    success: { bg: 'bg-green-50', icon: CheckCircle2, iconColor: 'text-green' },
  }

  const { bg, icon: Icon, iconColor } = styles[type]

  return (
    <div className={`${bg} rounded-lg p-3 flex items-start gap-3`}>
      <Icon className={`w-5 h-5 ${iconColor} flex-shrink-0 mt-0.5`} />
      <div>
        <p className="text-sm font-medium text-navy">{title}</p>
        <p className="text-xs text-navy-600 mt-0.5">{description}</p>
      </div>
    </div>
  )
}
