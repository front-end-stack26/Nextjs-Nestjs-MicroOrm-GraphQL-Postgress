'use client';

import { useParams, useRouter } from 'next/navigation';
import { useTask } from './hooks/useTask';
import TaskDetails from './components/TaskDetails';
import Loading from '../../components/Loading';

export default function TaskPage() {
  const params = useParams();
  const router = useRouter();

  const taskId = Number(params.id);

  const { task, loading, updateTask, deleteTask } = useTask(taskId);

  if (loading) return <Loading />;
  if (!task) return <p>Task introuvable</p>;

  const handleDelete = async () => {
    await deleteTask();
    router.back();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <div className="max-w-xl mx-auto">
        <TaskDetails
          task={task}
          onSave={updateTask}
          onDelete={handleDelete}
        />
      </div>
    </div>
  )
}
