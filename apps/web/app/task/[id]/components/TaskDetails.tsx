'use client';

import { useState } from 'react';

export default function TaskDetails({ task, onSave, onDelete }: any) {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description || '');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSave(title, description);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl p-6 shadow-sm border space-y-4"
    >
      <h1 className="text-xl font-semibold">Détails de la tâche</h1>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full px-3 py-2 rounded-lg border bg-gray-50"
      />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full px-3 py-2 rounded-lg border bg-gray-50"
      />

      <div className="flex justify-between">
        <button
          type="button"
          onClick={onDelete}
          className="text-sm text-red-500 hover:text-red-600"
        >
          Supprimer
        </button>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          Sauvegarder
        </button>
      </div>
    </form>
  )
}
