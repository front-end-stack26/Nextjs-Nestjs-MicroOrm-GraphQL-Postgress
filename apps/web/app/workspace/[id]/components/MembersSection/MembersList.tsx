import MemberItem from './MemberItem';
import Loading from '@/app/components/Loading';

export default function MembersList({ vm }: any) {
  if (vm.membersLoading) {
    return <Loading />;
  }

  return (
    <div className="bg-white border rounded-2xl divide-y">
      {vm.members.map((m: any) => (
        <MemberItem key={m.id} member={m} vm={vm} />
      ))}
    </div>
  )
}