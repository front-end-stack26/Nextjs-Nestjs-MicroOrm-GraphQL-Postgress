import { Plus, LayoutDashboard } from 'lucide-react';

export default function DashboardHeader({ onCreateClick }: any) {
  return (
    <div className="flex items-center justify-between p-6 rounded-2xl bg-white/70 backdrop-blur border shadow-sm">
      <div className="flex items-center gap-4">
        <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600">
          <LayoutDashboard size={20} />
        </div>
        <div>
          <h1 className="text-xl font-semibold text-gray-900">
            Dashboard
          </h1>
          <p className="text-sm text-gray-500">
            Gère tes workspaces
          </p>
        </div>
      </div>
      <button
        onClick={onCreateClick}
        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 text-white text-sm font-medium shadow hover:bg-blue-700 transition"
      >
        <Plus size={16} />
        Créer
      </button>
    </div>
  )
}