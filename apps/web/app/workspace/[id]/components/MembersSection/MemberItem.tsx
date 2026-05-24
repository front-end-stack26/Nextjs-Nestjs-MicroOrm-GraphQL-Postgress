export default function MemberItem({ member, vm }: any) {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-full bg-gray-200 flex items-center justify-center text-sm">
            {(member.user.username || member.user.email)[0].toUpperCase()}
        </div>
        <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-800">
            {member.user.username || member.user.email}
            </span>
            <span className="text-xs text-gray-400">
            {member.user.email}
            </span>
        </div>
        </div>
        <div className="flex items-center gap-3">
            <span
                className={`text-xs px-2 py-1 rounded-full ${
                member.role === 'ADMIN'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600'
                }`}
            >
                {member.role === 'ADMIN' ? 'Admin' : 'Membre'}
            </span>
            {vm.isAdmin && member.role !== 'ADMIN' && (
                <button
                onClick={() => vm.promoteToAdmin(member.user.id)}
                className="text-xs text-blue-600 hover:underline"
                >
                Promouvoir
                </button>
            )}
        </div>
    </div>
  )
}
