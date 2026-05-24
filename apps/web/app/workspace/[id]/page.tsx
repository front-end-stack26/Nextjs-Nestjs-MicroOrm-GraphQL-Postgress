'use client';

import { useParams } from 'next/navigation';
import Loading from '../../components/Loading';
import WorkspaceView from './components/WorkspaceView';
import { useWorkspaceMembership } from './hooks/useWorkspaceMembership';

export default function WorkspacePage() {
  const params = useParams();
  const workspaceId = Number(params.id);
  const { shouldShowLoading, error } = useWorkspaceMembership(workspaceId);

  if (shouldShowLoading) return <Loading />;
  if (error) return null;

  return <WorkspaceView workspaceId={workspaceId} />;
}
