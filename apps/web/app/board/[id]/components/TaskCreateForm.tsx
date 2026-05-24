export default function TaskCreateForm({ vm }: any) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    vm.handleCreate();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-8 p-4 rounded-2xl border bg-white shadow-sm flex flex-wrap items-center gap-3"
    >
      <input
        value={vm.title}
        onChange={(e) => vm.setTitle(e.target.value)}
        placeholder="Titre de la tâche..."
        className="flex-1 min-w-[220px] px-3 py-2 text-sm rounded-lg border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        value={vm.description}
        onChange={(e) => vm.setDescription(e.target.value)}
        placeholder="Description..."
        className="flex-1 min-w-[260px] px-3 py-2 text-sm rounded-lg border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
      >
        {vm.creating ? 'Ajout...' : '+ Ajouter'}
      </button>
    </form>
  )
}
