'use client'

import { Bell, Search, Plus } from 'lucide-react'

interface HeaderProps {
  title?: string
}

export function Header({ title }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-cream-100/80 backdrop-blur-sm border-b border-linen-200">
      <div className="flex h-16 items-center justify-between px-6 lg:px-8">
        {/* Search */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-navy-400" />
            <input
              type="text"
              placeholder="Search patients, appointments..."
              className="w-full pl-10 pr-4 py-2 text-sm bg-white border border-linen-200 rounded-lg text-navy placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Quick add */}
          <button className="flex items-center gap-2 px-4 py-2 bg-green text-white text-sm font-medium rounded-full hover:bg-green-600 transition-colors">
            <Plus className="w-4 h-4" />
            <span className="hidden sm:inline">New appointment</span>
          </button>

          {/* Notifications */}
          <button className="relative p-2 text-navy-400 hover:text-navy transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-green rounded-full" />
          </button>
        </div>
      </div>
    </header>
  )
}
