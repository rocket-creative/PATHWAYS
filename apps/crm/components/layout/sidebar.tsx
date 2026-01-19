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

// Pathways Within Logo Component
function PathwaysLogo() {
  return (
    <div className="flex items-center gap-4">
      {/* Logo mark - stylized path/journey icon */}
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg shadow-green/20">
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          className="w-7 h-7 text-white"
          stroke="currentColor" 
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Stylized path/journey icon */}
          <path d="M12 3v18" />
          <path d="M5 8c2-2 5-2 7 0s5 2 7 0" />
          <path d="M5 16c2-2 5-2 7 0s5 2 7 0" />
        </svg>
      </div>
      {/* Wordmark */}
      <div className="flex flex-col">
        <span className="font-serif text-xl leading-tight tracking-tight text-white">Pathways</span>
        <span className="text-[11px] uppercase tracking-[0.2em] text-green-400 font-medium">Within</span>
      </div>
    </div>
  )
}

export function Sidebar({ staffName, location }: SidebarProps) {
  const pathname = usePathname()

  return (
    <aside className="fixed inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-navy-900 via-navy to-navy-950 text-white hidden lg:flex lg:flex-col">
      {/* Logo */}
      <div className="flex h-24 items-center px-6 border-b border-white/10">
        <PathwaysLogo />
      </div>

      {/* Location selector */}
      <div className="px-5 py-4 border-b border-white/10">
        <button className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
          <Building2 className="w-4 h-4" />
          <span className="flex-1 text-left">{location}</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Main navigation */}
      <nav className="flex-1 px-5 py-6 space-y-1">
        {navigation.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg transition-all',
                isActive
                  ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg shadow-green/20'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              )}
            >
              <item.icon className="w-5 h-5" />
              {item.name}
            </Link>
          )
        })}
      </nav>

      {/* Secondary navigation */}
      <div className="px-5 py-4 border-t border-white/10 space-y-1">
        {secondaryNav.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            <item.icon className="w-5 h-5" />
            {item.name}
          </Link>
        ))}
      </div>

      {/* User */}
      <div className="px-5 py-5 border-t border-white/10">
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-sm font-semibold text-white shadow-lg shadow-green/20">
            {staffName.split(' ').map(n => n[0]).join('')}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">{staffName}</p>
            <p className="text-xs text-white/50">Manager</p>
          </div>
          <button className="p-1.5 text-white/50 hover:text-white transition-colors">
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  )
}
