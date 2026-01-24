'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Shield, Users, Calendar, LayoutDashboard } from 'lucide-react'

const features = [
  { icon: LayoutDashboard, title: 'Dashboard', description: 'View appointments, revenue, and alerts at a glance' },
  { icon: Users, title: 'Patient Management', description: 'Access patient records and history' },
  { icon: Calendar, title: 'Scheduling', description: 'Manage appointments and availability' },
  { icon: Shield, title: 'HIPAA Compliant', description: 'Secure, encrypted access to all data' },
]

export default function CRMPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero-gradient">
        <div className="container-site py-16 lg:py-24">
          <div className="mb-8">
            <Link href="/">
              <Image 
                src="/logo.png" 
                alt="Pathways Within - Home" 
                width={220}
                height={80}
                className="w-[180px] brightness-0 invert lg:w-[220px]"
              />
            </Link>
          </div>
          
          <div className="max-w-2xl">
            <p className="eyebrow mb-4">Staff Portal</p>
            <h1 className="mb-6 text-white">Practice Management System</h1>
            <p className="text-xl text-white/80" style={{ lineHeight: 1.8 }}>
              Access the Pathways Within CRM to manage patients, appointments, payments, and more. Staff only.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site py-12">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <div key={feature.title} className="flex items-start gap-4 rounded-lg border border-[rgb(var(--border))]/50 p-6">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[rgb(var(--color-green))]/10">
                    <Icon className="h-5 w-5 text-[rgb(var(--color-green))]" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-sm font-medium text-[rgb(var(--color-navy))]">{feature.title}</h3>
                    <p className="text-sm text-[rgb(var(--color-text-light))]">{feature.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-[rgb(var(--color-cream))]">
        <div className="container-site py-16 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-6 text-[rgb(var(--color-navy))]">Access the CRM Dashboard</h2>
            <p className="mb-8 text-lg text-[rgb(var(--color-text-light))]" style={{ lineHeight: 1.8 }}>
              Staff members can log in to manage daily operations, view patient information, and track appointments.
            </p>
            
            <a 
              href="https://crm-sooty-one.vercel.app" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-[rgb(var(--color-navy))] px-8 py-4 text-white transition-all duration-300 hover:bg-[rgb(var(--color-navy))]/90 hover:shadow-lg"
              style={{ fontFamily: 'var(--font-raleway), system-ui, sans-serif', fontWeight: 600 }}
            >
              <span>Open CRM Dashboard</span>
              <ArrowRight className="h-5 w-5" />
            </a>

            <p className="mt-6 text-sm text-[rgb(var(--color-text-light))]">
              Need access? Contact your administrator.
            </p>
          </div>
        </div>
      </section>

      {/* Security Note */}
      <section className="border-t border-[rgb(var(--border))]/50 bg-white">
        <div className="container-site py-12">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-start gap-4 rounded-lg bg-[rgb(var(--color-linen))] p-6">
              <Shield className="h-6 w-6 flex-shrink-0 text-[rgb(var(--color-navy))]" />
              <div>
                <h3 className="mb-2 font-medium text-[rgb(var(--color-navy))]">Security Notice</h3>
                <p className="text-sm text-[rgb(var(--color-text-light))]">
                  This system contains protected health information (PHI). Access is restricted to authorized staff only. 
                  All activity is logged for HIPAA compliance. Never share your login credentials.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
