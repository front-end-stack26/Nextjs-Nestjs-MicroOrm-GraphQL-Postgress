import Link from 'next/link';

export default function BoardItem({ board }: any) {
  return (
    <Link
      href={`/board/${board.id}`}
      className="group p-4 rounded-2xl bg-white border hover:shadow-md transition flex items-center justify-between"
    >
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-semibold">
          {board.title.charAt(0).toUpperCase()}
        </div>
        <span className="font-medium text-gray-800">{board.title}</span>
      </div>
      <span className="text-gray-300 group-hover:text-gray-500 transition">→</span>
    </Link>
  )
}