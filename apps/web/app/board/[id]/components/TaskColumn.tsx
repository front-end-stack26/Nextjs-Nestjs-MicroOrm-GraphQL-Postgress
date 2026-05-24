'use client';

import { Droppable, Draggable } from '@hello-pangea/dnd';
import Link from 'next/link';

type Task = {
  id: number;
  title: string;
};

type Props = {
  title: string;
  tasks: Task[];
  droppableId: string;
  variant?: 'todo' | 'doing' | 'done' | 'waiting';
};

const styles = {
  todo: {
    bg: 'bg-gray-200',
    dot: 'bg-gray-500',
  },
  doing: {
    bg: 'bg-blue-100',
    dot: 'bg-blue-500',
  },
  done: {
    bg: 'bg-green-100',
    dot: 'bg-green-500',
  },
  waiting: {
    bg: 'bg-amber-100',
    dot: 'bg-amber-500',
  },
};

export default function TaskColumn({
  title,
  tasks,
  droppableId,
  variant = 'todo',
}: Props) {
  const style = styles[variant];

  return (
    <Droppable droppableId={droppableId}>
      {(provided, snapshot) => (
        <div className="w-72 flex-shrink-0">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className={`h-2.5 w-2.5 rounded-full ${style.dot}`} />
              <h2 className="text-sm font-medium text-gray-700">
                {title}
              </h2>
            </div>
            <span className="text-xs text-gray-500">
              {tasks.length}
            </span>
          </div>

          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`
              rounded-xl p-3 flex flex-col gap-3 transition
              ${style.bg}
              ${snapshot.isDraggingOver ? 'ring-2 ring-blue-400' : ''}
            `}
          >
            {tasks.length === 0 && (
              <p className="text-xs text-gray-500 text-center py-4">
                Vide
              </p>
            )}

            {tasks.map((task, index) => (
              <Draggable
                key={task.id}
                draggableId={task.id.toString()}
                index={index}
              >
                {(provided, snapshot) => (
                  <Link
                    href={`/task/${task.id}`}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={`
                      bg-white rounded-lg px-3 py-2 text-sm
                      shadow-sm cursor-grab transition

                      hover:shadow-md

                      ${
                        snapshot.isDragging
                          ? 'shadow-lg scale-[1.02]'
                          : ''
                      }
                    `}
                  >
                    {task.title}
                  </Link>
                )}
              </Draggable>
            ))}

            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  )
}
