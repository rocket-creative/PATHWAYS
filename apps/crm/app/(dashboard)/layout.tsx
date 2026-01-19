import { Sidebar } from '@/components/layout/sidebar'
import { Header } from '@/components/layout/header'
import { currentStaff } from '@/lib/demo-data'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const staffName = `${currentStaff.firstName} ${currentStaff.lastName}`

  return (
    <div className="min-h-screen bg-stone-50">
      <Sidebar staffName={staffName} location={currentStaff.location} />
      <div className="lg:pl-64">
        <Header />
        <main className="p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  )
}
