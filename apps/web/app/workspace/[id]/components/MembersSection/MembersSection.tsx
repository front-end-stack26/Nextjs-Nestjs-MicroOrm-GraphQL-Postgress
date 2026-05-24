import InviteForm from './InviteForm';
import MembersList from './MembersList';

export default function MembersSection({ vm }: any) {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900">Membres</h2>
        <p className="text-sm text-gray-500">
          Gérez les accès à votre workspace
        </p>
      </div>
      <MembersList vm={vm} />
      <InviteForm vm={vm} />
      {vm.inviteError && (
        <p className="text-sm text-red-500">{vm.inviteError}</p>
      )}
    </section>
  )
}