import { services } from '@/lib/demo-data'
import { Plus, Clock, DollarSign, Sparkles, Brain, Heart } from 'lucide-react'

export default function ServicesPage() {
  const therapyServices = services.filter(s => s.category === 'therapy')
  const wellnessMedical = services.filter(s => s.category === 'wellness_medical')
  const wellnessAesthetic = services.filter(s => s.category === 'wellness_aesthetic')

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-stone-900">Services</h1>
          <p className="text-stone-500 mt-1">Manage your service catalog</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-sage-600 text-white text-sm font-medium rounded-full hover:bg-sage-700 transition-colors">
          <Plus className="w-4 h-4" />
          Add service
        </button>
      </div>

      {/* Therapy Services */}
      <ServiceCategory
        title="Therapy Services"
        description="Clinical mental health services"
        icon={Brain}
        iconBg="bg-blue-100"
        iconColor="text-blue-600"
        services={therapyServices}
        accentColor="blue"
      />

      {/* Wellness Medical */}
      <ServiceCategory
        title="Wellness Medical"
        description="Medical wellness treatments"
        icon={Heart}
        iconBg="bg-purple-100"
        iconColor="text-purple-600"
        services={wellnessMedical}
        accentColor="purple"
      />

      {/* Wellness Aesthetic */}
      <ServiceCategory
        title="Aesthetic Services"
        description="Non-clinical beauty and wellness"
        icon={Sparkles}
        iconBg="bg-sage-100"
        iconColor="text-sage-600"
        services={wellnessAesthetic}
        accentColor="sage"
      />
    </div>
  )
}

function ServiceCategory({
  title,
  description,
  icon: Icon,
  iconBg,
  iconColor,
  services,
  accentColor,
}: {
  title: string
  description: string
  icon: React.ElementType
  iconBg: string
  iconColor: string
  services: typeof import('@/lib/demo-data').services
  accentColor: string
}) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-lg ${iconBg}`}>
          <Icon className={`w-5 h-5 ${iconColor}`} />
        </div>
        <div>
          <h2 className="font-semibold text-stone-900">{title}</h2>
          <p className="text-sm text-stone-500">{description}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <div
            key={service.id}
            className="card p-5 hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-medium text-stone-900">{service.name}</h3>
              <span className={`badge ${
                accentColor === 'blue' ? 'bg-blue-100 text-blue-700' :
                accentColor === 'purple' ? 'bg-purple-100 text-purple-700' :
                'badge-confirmed'
              }`}>
                Active
              </span>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-stone-500">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {service.duration} min
              </div>
              <div className="flex items-center gap-1">
                <DollarSign className="w-4 h-4" />
                {service.price}
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-stone-100 flex items-center justify-between">
              <span className="text-xs text-stone-400">
                {service.category === 'therapy' ? 'Insurance eligible' : 
                 service.category === 'wellness_medical' ? 'May be covered' : 
                 'Cash/Card only'}
              </span>
              <button className="text-sm text-sage-600 hover:text-sage-700 font-medium">
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
