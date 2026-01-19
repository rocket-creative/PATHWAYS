'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import {
  LayoutDashboard,
  Users,
  Calendar,
  Sparkles,
  CreditCard,
  Settings,
  LogOut,
  Building2,
} from 'lucide-react'

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Patients', href: '/patients', icon: Users },
  { name: 'Appointments', href: '/appointments', icon: Calendar },
  { name: 'Services', href: '/services', icon: Sparkles },
  { name: 'Payments', href: '/payments', icon: CreditCard },
]

const secondaryNav = [
  { name: 'Settings', href: '/settings', icon: Settings },
]

interface SidebarProps {
  staffName: string
  location: string
}

export function Sidebar({ staffName, location }: SidebarProps) {
  const pathname = usePathname()

  return (
    <aside className="fixed inset-y-0 left-0 z-50 w-64 bg-stone-900 text-white hidden lg:flex lg:flex-col">
      {/* Logo */}
      <div className="flex h-16 items-center px-6 border-b border-stone-800">
        <span className="font-serif text-xl tracking-tight">Pathways Within</span>
      </div>

      {/* Location selector */}
      <div className="px-4 py-4 border-b border-stone-800">
        <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-stone-300 hover:bg-stone-800 rounded-lg transition-colors">
          <Building2 className="w-4 h-4" />
          <span className="flex-1 text-left">{location}</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Main navigation */}
      <nav className="flex-1 px-4 py-6 space-y-1">
        {navigation.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg transition-colors',
                isActive
                  ? 'bg-sage-600 text-white'
                  : 'text-stone-400 hover:text-white hover:bg-stone-800'
              )}
            >
              <item.icon className="w-5 h-5" />
              {item.name}
            </Link>
          )
        })}
      </nav>

      {/* Secondary navigation */}
      <div className="px-4 py-4 border-t border-stone-800 space-y-1">
        {secondaryNav.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-stone-400 hover:text-white hover:bg-stone-800 rounded-lg transition-colors"
          >
            <item.icon className="w-5 h-5" />
            {item.name}
          </Link>
        ))}
      </div>

      {/* User */}
      <div className="px-4 py-4 border-t border-stone-800">
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="w-8 h-8 rounded-full bg-sage-600 flex items-center justify-center text-sm font-medium">
            {staffName.split(' ').map(n => n[0]).join('')}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">{staffName}</p>
            <p className="text-xs text-stone-500">Manager</p>
          </div>
          <button className="p-1.5 text-stone-500 hover:text-white transition-colors">
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  )
}
