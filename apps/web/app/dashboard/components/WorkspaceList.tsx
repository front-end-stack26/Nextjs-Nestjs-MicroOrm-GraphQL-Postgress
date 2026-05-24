import WorkspaceCard from './WorkspaceCard';

export default function WorkspaceList({ memberships }: any) {
  if (!memberships.length) {
    return (
      <div className="text-center py-20 border border-dashed rounded-2xl bg-white">
        <p className="text-gray-500 text-sm">
          Aucun workspace pour le moment
        </p>
      </div>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {memberships.map((m: any) => (
        <WorkspaceCard
          key={m.id}
          name={m.workspace.name}
          role={m.role}
          href={`/workspace/${m.workspace.id}`}
        />
      ))}
    </div>
  )
}
