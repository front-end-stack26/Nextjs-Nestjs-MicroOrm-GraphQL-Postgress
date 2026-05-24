'use client';

import { useState } from 'react';

export default function CreateWorkspaceForm({ onCreate, onClose }: any) {
  const [name, setName] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name.trim()) return;
    await onCreate(name);
    setName('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700">
          Nom du workspace
        </label>
        <input
          autoFocus
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ex: Projet SaaS"
          className="border rounded-lg px-3 py-2 bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 text-sm rounded-lg border hover:bg-gray-100"
        >
          Annuler
        </button>

        <button
          type="submit"
          className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700"
        >
          Créer
        </button>
      </div>
    </form>
  )
}