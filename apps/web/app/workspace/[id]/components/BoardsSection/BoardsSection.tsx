import BoardCreateForm from './BoardCreateForm';
import BoardList from './BoardList';

export default function BoardsSection({ vm }: any) {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Boards</h1>
        <p className="text-sm text-gray-500">
          Organise ton travail par boards
        </p>
      </div>

      <BoardCreateForm vm={vm} />
      <BoardList boards={vm.boards} />
    </section>
  )
}
