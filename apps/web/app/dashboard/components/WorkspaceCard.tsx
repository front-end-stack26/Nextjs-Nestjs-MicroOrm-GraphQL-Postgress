import { ArrowRight, FolderKanban } from 'lucide-react';
import Link from 'next/link';

export default function WorkspaceCard({ name, role, href }: any) {
  return (
    <Link
      href={href}
      className="group relative p-5 rounded-2xl bg-white border shadow-sm hover:shadow-lg transition"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
            <FolderKanban size={18} />
          </div>
          <div>
            <p className="font-medium text-gray-900">{name}</p>
            <span className="text-xs text-gray-400">{role}</span>
          </div>
        </div>
        <ArrowRight
          className="text-gray-300 group-hover:text-gray-600 transition"
          size={18}
        />
      </div>
    </Link>
  )
}
