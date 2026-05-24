'use client';

import { gql } from '@apollo/client';
import { useQuery, useMutation, useApolloClient } from '@apollo/client/react';

type Task = {
  id: number;
  title: string;
  description?: string | null;
};

type TaskData = {
  task: Task | null;
};

const GET_TASK = gql`
  query ($taskId: Float!) {
    task(taskId: $taskId) {
      id
      title
      description
    }
  }
`;

const UPDATE_TASK = gql`
  mutation ($taskId: Float!, $title: String!, $description: String) {
    updateTask(taskId: $taskId, title: $title, description: $description) {
      id
      title
      description
    }
  }
`;

const DELETE_TASK = gql`
  mutation ($taskId: Float!) {
    deleteTask(taskId: $taskId)
  }
`;

const GET_TASKS = gql`
  query ($boardId: Float!) {
    tasks(boardId: $boardId) {
      id
      title
      status
      order
    }
  }
`;

export function useTask(taskId: number) {
  const { data, loading, refetch } = useQuery<TaskData>(GET_TASK, {
    variables: { taskId },
  });

  const client = useApolloClient();

  const [updateTaskMutation] = useMutation(UPDATE_TASK);
  const [deleteTaskMutation] = useMutation(DELETE_TASK);

  const updateTask = async (title: string, description: string) => {
    await updateTaskMutation({
      variables: { taskId, title, description },
    });
    await refetch();
  };

  const deleteTask = async () => {
    await deleteTaskMutation({
      variables: { taskId },
    });
    client.cache.evict({ fieldName: 'tasks' });
    client.cache.gc();
  };

  return {
    task: data?.task,
    loading: !data?.task && loading,
    updateTask,
    deleteTask,
  };
}
