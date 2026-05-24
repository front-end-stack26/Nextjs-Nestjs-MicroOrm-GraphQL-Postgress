'use client';

import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client/react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const CHECK_MEMBERSHIP = gql`
  query ($workspaceId: Float!) {
    members(workspaceId: $workspaceId) {
      id
    }
  }
`;

type CheckMembershipResponse = {
  members: { id: number }[];
};

export function useWorkspaceMembership(workspaceId: number) {
  const router = useRouter();
  const { data, loading, error } = useQuery<CheckMembershipResponse>(CHECK_MEMBERSHIP, {
    variables: { workspaceId },
  });

  useEffect(() => {
    if (!loading && error) {
      router.push('/dashboard');
    }
  }, [error, loading, router]);

  const hasData = (data?.members?.length ?? 0) > 0;
  const shouldShowLoading = !hasData && loading;

  return {
    shouldShowLoading,
    hasData,
    error,
  }
}
