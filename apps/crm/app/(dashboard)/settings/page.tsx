import { currentStaff, locations } from '@/lib/demo-data'
import { 
  User, 
  Building2, 
  Bell, 
  Shield, 
  CreditCard,
  Link as LinkIcon,
  FileText,
} from 'lucide-react'

export default function SettingsPage() {
  return (
    <div className="space-y-6 max-w-4xl">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-stone-900">Settings</h1>
        <p className="text-stone-500 mt-1">Manage your account and preferences</p>
      </div>

      {/* Settings Sections */}
      <div className="space-y-6">
        {/* Profile */}
        <SettingsSection
          icon={User}
          title="Profile"
          description="Your personal information"
        >
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">
                First name
              </label>
              <input
                type="text"
                defaultValue={currentStaff.firstName}
                className="w-full px-3 py-2 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sage-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">
                Last name
              </label>
              <input
                type="text"
                defaultValue={currentStaff.lastName}
                className="w-full px-3 py-2 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sage-500"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-stone-700 mb-1">
                Email
              </label>
              <input
                type="email"
                defaultValue={currentStaff.email}
                className="w-full px-3 py-2 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sage-500"
              />
            </div>
          </div>
        </SettingsSection>

        {/* Locations */}
        <SettingsSection
          icon={Building2}
          title="Locations"
          description="Manage practice locations"
        >
          <div className="space-y-3">
            {locations.map((location) => (
              <div
                key={location.id}
                className="flex items-center justify-between p-4 bg-stone-50 rounded-lg"
              >
                <div>
                  <p className="font-medium text-stone-900">{location.name}</p>
                  <p className="text-sm text-stone-500">{location.address}</p>
                </div>
                <button className="text-sm text-sage-600 hover:text-sage-700 font-medium">
                  Edit
                </button>
              </div>
            ))}
          </div>
        </SettingsSection>

        {/* Notifications */}
        <SettingsSection
          icon={Bell}
          title="Notifications"
          description="Configure alerts and reminders"
        >
          <div className="space-y-4">
            <ToggleSetting
              label="Email notifications"
              description="Receive appointment reminders via email"
              defaultChecked
            />
            <ToggleSetting
              label="SMS notifications"
              description="Receive urgent alerts via text message"
              defaultChecked
            />
            <ToggleSetting
              label="Daily summary"
              description="Get a daily digest of appointments"
              defaultChecked={false}
            />
          </div>
        </SettingsSection>

        {/* Security */}
        <SettingsSection
          icon={Shield}
          title="Security"
          description="Account security settings"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-stone-900">Two-factor authentication</p>
                <p className="text-sm text-stone-500">Add an extra layer of security</p>
              </div>
              <span className="badge badge-confirmed">Enabled</span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-stone-900">Session timeout</p>
                <p className="text-sm text-stone-500">Auto-logout after inactivity</p>
              </div>
              <span className="text-sm text-stone-600">15 minutes</span>
            </div>
            <button className="text-sm text-sage-600 hover:text-sage-700 font-medium">
              Change password
            </button>
          </div>
        </SettingsSection>

        {/* Integrations */}
        <SettingsSection
          icon={LinkIcon}
          title="Integrations"
          description="Connected services"
        >
          <div className="space-y-4">
            <IntegrationRow
              name="Jane App"
              status="connected"
              description="EHR and scheduling"
            />
            <IntegrationRow
              name="Square"
              status="connected"
              description="Payment processing"
            />
            <IntegrationRow
              name="Twilio"
              status="connected"
              description="SMS notifications"
            />
          </div>
        </SettingsSection>

        {/* Compliance */}
        <SettingsSection
          icon={FileText}
          title="Compliance"
          description="HIPAA and audit settings"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-stone-900">Audit logging</p>
                <p className="text-sm text-stone-500">All PHI access is logged</p>
              </div>
              <span className="badge badge-confirmed">Active</span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-stone-900">Data encryption</p>
                <p className="text-sm text-stone-500">AES-256 encryption at rest</p>
              </div>
              <span className="badge badge-confirmed">Enabled</span>
            </div>
            <button className="text-sm text-sage-600 hover:text-sage-700 font-medium">
              View audit logs
            </button>
          </div>
        </SettingsSection>
      </div>

      {/* Save Button */}
      <div className="flex justify-end pt-6 border-t border-stone-200">
        <button className="px-6 py-2.5 bg-sage-600 text-white text-sm font-medium rounded-full hover:bg-sage-700 transition-colors">
          Save changes
        </button>
      </div>
    </div>
  )
}

function SettingsSection({
  icon: Icon,
  title,
  description,
  children,
}: {
  icon: React.ElementType
  title: string
  description: string
  children: React.ReactNode
}) {
  return (
    <div className="card p-6">
      <div className="flex items-start gap-4 mb-6">
        <div className="p-2 rounded-lg bg-stone-100">
          <Icon className="w-5 h-5 text-stone-600" />
        </div>
        <div>
          <h2 className="font-semibold text-stone-900">{title}</h2>
          <p className="text-sm text-stone-500">{description}</p>
        </div>
      </div>
      {children}
    </div>
  )
}

function ToggleSetting({
  label,
  description,
  defaultChecked,
}: {
  label: string
  description: string
  defaultChecked: boolean
}) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="font-medium text-stone-900">{label}</p>
        <p className="text-sm text-stone-500">{description}</p>
      </div>
      <button
        className={`relative w-11 h-6 rounded-full transition-colors ${
          defaultChecked ? 'bg-sage-600' : 'bg-stone-200'
        }`}
      >
        <span
          className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
            defaultChecked ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
      </button>
    </div>
  )
}

function IntegrationRow({
  name,
  status,
  description,
}: {
  name: string
  status: 'connected' | 'disconnected'
  description: string
}) {
  return (
    <div className="flex items-center justify-between p-4 bg-stone-50 rounded-lg">
      <div>
        <p className="font-medium text-stone-900">{name}</p>
        <p className="text-sm text-stone-500">{description}</p>
      </div>
      <span className={`badge ${status === 'connected' ? 'badge-confirmed' : 'badge-cancelled'}`}>
        {status === 'connected' ? 'Connected' : 'Disconnected'}
      </span>
    </div>
  )
}
