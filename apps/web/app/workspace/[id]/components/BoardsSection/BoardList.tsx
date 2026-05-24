import BoardItem from './BoardItem';

export default function BoardList({ boards }: any) {
  if (boards.length === 0) {
    return <p className="text-sm text-gray-500">Aucun board</p>;
  }

  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {boards.map((board: any) => (
        <BoardItem key={board.id} board={board} />
      ))}
    </div>
  )
}