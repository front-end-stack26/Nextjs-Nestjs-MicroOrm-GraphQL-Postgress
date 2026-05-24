export default function BoardCreateForm({ vm }: any) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    vm.handleCreateBoard();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-end gap-3 p-4 rounded-2xl bg-white border shadow-sm"
    >
      <div className="flex flex-col gap-1 flex-1">
        <label className="text-xs text-gray-500">
          Nom du board
        </label>

        <input
          value={vm.title}
          onChange={(e) => vm.setTitle(e.target.value)}
          placeholder="Ex: Sprint mobile"
          className="px-3 py-2 rounded-lg border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
      >
        + Créer
      </button>
    </form>
  )
}
