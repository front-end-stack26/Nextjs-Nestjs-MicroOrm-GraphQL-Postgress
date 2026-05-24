import { DragDropContext } from '@hello-pangea/dnd'
import TaskColumn from './TaskColumn';

export default function BoardColumns({ vm }: any) {
  const columns = [
    { id: 'TODO', title: 'Rédigé', tasks: vm.todo, variant: 'todo' },
    { id: 'DOING', title: 'En cours', tasks: vm.doing, variant: 'doing' },
    { id: 'DONE', title: 'Finalisé', tasks: vm.done, variant: 'done' },
    { id: 'WAITING', title: 'En attente', tasks: vm.waiting, variant: 'waiting' },
  ];

  return (
    <DragDropContext onDragEnd={vm.onDragEnd}>
      <div className="flex gap-6 pb-2">
        {columns.map((col) => (
          <TaskColumn
            key={col.id}
            title={col.title}
            tasks={col.tasks}
            droppableId={col.id}
            variant={col.variant as any}
          />
        ))}
      </div>
    </DragDropContext>
  );
}
