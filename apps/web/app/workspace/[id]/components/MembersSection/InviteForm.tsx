export default function InviteForm({ vm }: any) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    vm.handleInvite();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-end gap-3 p-4 rounded-2xl bg-white border shadow-sm"
    >
      <div className="flex flex-col gap-1 flex-1">
        <label className="text-xs text-gray-500 ml-1 mb-1">
          Inviter par email
        </label>
        <input
          type="email"
          value={vm.inviteEmail}
          onChange={(e) => vm.setInviteEmail(e.target.value)}
          placeholder="user@email.com"
          className="px-3 py-2 rounded-lg border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        disabled={vm.inviting}
        className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 disabled:opacity-50"
      >
        {vm.inviting ? 'Invitation...' : 'Inviter'}
      </button>
    </form>
  )
}
