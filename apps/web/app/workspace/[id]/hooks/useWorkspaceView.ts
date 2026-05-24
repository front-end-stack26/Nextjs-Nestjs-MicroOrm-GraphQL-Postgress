'use client';

import { useState } from 'react';
import { useBoards } from './useBoards';
import { useMembers } from './useMembers';

export function useWorkspaceView(workspaceId: number) {
  const { boards, loading: boardsLoading, createBoard } = useBoards(workspaceId);

  const {
    members,
    loading: membersLoading,
    inviting,
    inviteByEmail,
    promoteToAdmin,
  } = useMembers(workspaceId);

  const [title, setTitle] = useState('');
  const [inviteEmail, setInviteEmail] = useState('');
  const [inviteError, setInviteError] = useState('');

  const handleCreateBoard = async () => {
    if (!title.trim()) return;
    await createBoard(title);
    setTitle('');
  };

  const handleInvite = async () => {
    if (!inviteEmail.trim()) return;

    setInviteError('');
    try {
      await inviteByEmail(inviteEmail);
      setInviteEmail('');
    } catch {
      setInviteError("Impossible d'inviter cet utilisateur.");
    }
  };

  const isAdmin = members.some((m) => m.role === 'ADMIN');
  const hasData = boards.length > 0 || members.length > 0;

  return {
    boards,
    members,
    boardsLoading: !hasData && boardsLoading,
    membersLoading,
    inviting,
    title,
    setTitle,
    inviteEmail,
    setInviteEmail,
    inviteError,
    handleCreateBoard,
    handleInvite,
    promoteToAdmin,
    isAdmin,
  }
}
