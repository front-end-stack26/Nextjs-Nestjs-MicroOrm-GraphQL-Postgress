'use client';

import { useTasks } from '../hooks/useTasks';
import Loading from '@/app/components/Loading';
import BoardHeader from './BoardHeader';
import TaskCreateForm from './TaskCreateForm';
import BoardColumns from './BoardColumns';

export default function BoardView({ boardId }: { boardId: number }) {
  const vm = useTasks(boardId);

  if (vm.loading) return <Loading />;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-6 py-8">
        <BoardHeader />
        <TaskCreateForm vm={vm} />
        <BoardColumns vm={vm} />
      </div>
    </div>
  )
}
