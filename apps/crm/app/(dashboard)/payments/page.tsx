import { recentTransactions, stats } from '@/lib/demo-data'
import { 
  DollarSign, 
  CreditCard, 
  Banknote, 
  TrendingUp,
  Download,
  Filter,
  CheckCircle2,
} from 'lucide-react'

export default function PaymentsPage() {
  // Extended demo transactions
  const allTransactions = [
    ...recentTransactions,
    { id: '5', patient: 'Emily Davis', service: 'Couples Therapy', amount: 250, type: 'insurance', date: '2026-01-15' },
    { id: '6', patient: 'Jane Smith', service: 'Laser Hair', amount: 150, type: 'card', date: '2026-01-15' },
    { id: '7', patient: 'Tom Wilson', service: 'Acupuncture', amount: 150, type: 'card', date: '2026-01-14' },
    { id: '8', patient: 'Michael Brown', service: 'Cryotherapy', amount: 75, type: 'cash', date: '2026-01-14' },
  ]

  const totalToday = recentTransactions.reduce((sum, tx) => sum + tx.amount, 0)
  const cardTotal = recentTransactions.filter(tx => tx.type === 'card').reduce((sum, tx) => sum + tx.amount, 0)
  const cashTotal = recentTransactions.filter(tx => tx.type === 'cash').reduce((sum, tx) => sum + tx.amount, 0)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-stone-900">Payments</h1>
          <p className="text-stone-500 mt-1">Track transactions and reconciliation</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 text-sm text-stone-600 bg-white border border-stone-200 rounded-lg hover:bg-stone-50 transition-colors">
            <Download className="w-4 h-4" />
            Export
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-sage-600 text-white text-sm font-medium rounded-full hover:bg-sage-700 transition-colors">
            <DollarSign className="w-4 h-4" />
            Record payment
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card p-5">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-sage-100">
              <DollarSign className="w-5 h-5 text-sage-600" />
            </div>
            <div>
              <p className="text-sm text-stone-500">Today's revenue</p>
              <p className="text-xl font-semibold text-stone-900">${totalToday}</p>
            </div>
          </div>
        </div>

        <div className="card p-5">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100">
              <CreditCard className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-stone-500">Card payments</p>
              <p className="text-xl font-semibold text-stone-900">${cardTotal}</p>
            </div>
          </div>
        </div>

        <div className="card p-5">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-100">
              <Banknote className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <p className="text-sm text-stone-500">Cash collected</p>
              <p className="text-xl font-semibold text-stone-900">${cashTotal}</p>
            </div>
          </div>
        </div>

        <div className="card p-5">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100">
              <TrendingUp className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-stone-500">This week</p>
              <p className="text-xl font-semibold text-stone-900">${stats.weekRevenue.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Cash Reconciliation Alert */}
      <div className="card p-5 bg-amber-50 border-amber-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Banknote className="w-6 h-6 text-amber-600" />
            <div>
              <p className="font-medium text-stone-900">End of day cash reconciliation</p>
              <p className="text-sm text-stone-600">Cash collected today: ${cashTotal} — Please verify and submit</p>
            </div>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-amber-600 text-white text-sm font-medium rounded-lg hover:bg-amber-700 transition-colors">
            <CheckCircle2 className="w-4 h-4" />
            Reconcile now
          </button>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="card overflow-hidden">
        <div className="px-6 py-4 border-b border-stone-100 flex items-center justify-between">
          <h2 className="font-semibold text-stone-900">Recent transactions</h2>
          <button className="flex items-center gap-2 text-sm text-stone-500 hover:text-stone-700 transition-colors">
            <Filter className="w-4 h-4" />
            Filter
          </button>
        </div>

        <table className="w-full">
          <thead>
            <tr className="border-b border-stone-200 bg-stone-50">
              <th className="text-left text-xs font-medium text-stone-500 uppercase tracking-wider px-6 py-3">
                Date
              </th>
              <th className="text-left text-xs font-medium text-stone-500 uppercase tracking-wider px-6 py-3">
                Patient
              </th>
              <th className="text-left text-xs font-medium text-stone-500 uppercase tracking-wider px-6 py-3">
                Service
              </th>
              <th className="text-left text-xs font-medium text-stone-500 uppercase tracking-wider px-6 py-3">
                Type
              </th>
              <th className="text-right text-xs font-medium text-stone-500 uppercase tracking-wider px-6 py-3">
                Amount
              </th>
              <th className="text-left text-xs font-medium text-stone-500 uppercase tracking-wider px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            {allTransactions.map((tx) => (
              <tr key={tx.id} className="hover:bg-stone-50 transition-colors">
                <td className="px-6 py-4 text-sm text-stone-500">
                  {new Date(tx.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                  })}
                </td>
                <td className="px-6 py-4">
                  <p className="text-sm font-medium text-stone-900">{tx.patient}</p>
                </td>
                <td className="px-6 py-4 text-sm text-stone-500">
                  {tx.service}
                </td>
                <td className="px-6 py-4">
                  <span className={`badge ${
                    tx.type === 'card' ? 'bg-blue-100 text-blue-700' :
                    tx.type === 'cash' ? 'bg-amber-100 text-amber-700' :
                    'bg-purple-100 text-purple-700'
                  }`}>
                    {tx.type.charAt(0).toUpperCase() + tx.type.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm font-medium text-stone-900 text-right">
                  ${tx.amount}
                </td>
                <td className="px-6 py-4">
                  <span className="badge badge-confirmed">
                    Completed
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
