'use client';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import CreateWorkspaceForm from './CreateWorkspaceForm';

export default function CreateWorkspaceModal({ onCreate, onClose, open }: any) {
  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
        <Dialog.Content className="fixed top-[50%] left-[50%] w-full max-w-md translate-x-[-50%] translate-y-[-50%] bg-white p-6 rounded-2xl shadow-xl border space-y-4">
          <div className="flex items-center justify-between">
            <Dialog.Title className="text-lg font-semibold">
              Créer un workspace
            </Dialog.Title>
            <Dialog.Close>
              <X size={18} className="text-gray-500 hover:text-black" />
            </Dialog.Close>
          </div>
          <p className="text-sm text-gray-500">
            Organise ton travail en espaces
          </p>
          <CreateWorkspaceForm
            onCreate={async (name: string) => {
              await onCreate(name);
              onClose(false);
            }}
            onClose={() => onClose(false)}
          />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

