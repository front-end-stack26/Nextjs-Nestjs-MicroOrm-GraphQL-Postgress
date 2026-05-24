'use client';

import Loading from '@/app/components/Loading';
import { useWorkspaceView } from '../hooks/useWorkspaceView';
import BoardsSection from './BoardsSection/BoardsSection';
import MembersSection from './MembersSection/MembersSection';

export default function WorkspaceView({ workspaceId }: { workspaceId: number }) {
  const vm = useWorkspaceView(workspaceId);

  if (vm.boardsLoading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 py-10 space-y-10">
        <BoardsSection vm={vm} />
        <MembersSection vm={vm} />
      </div>
    </div>
  )
}
