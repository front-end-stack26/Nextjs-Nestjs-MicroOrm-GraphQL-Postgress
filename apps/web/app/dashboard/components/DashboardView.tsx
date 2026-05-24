"use client";

import { useWorkspaces } from '../hooks/useWorkspaces';
import { useState } from 'react';
import DashboardHeader from './DashboardHeader';
import WorkspaceList from './WorkspaceList';
import CreateWorkspaceModal from './CreateWorkspaceModal';
import Loading from '../../components/Loading';

export default function DashboardView() {
  const { memberships, loading, createWorkspace } = useWorkspaces();
  const [open, setOpen] = useState(false);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-10 space-y-8">
        <DashboardHeader onCreateClick={() => setOpen(true)} />
        <WorkspaceList memberships={memberships} />
      </div>
      <CreateWorkspaceModal
        open={open}
        onClose={() => setOpen(false)}
        onCreate={createWorkspace}
      />
    </div>
  )
}
