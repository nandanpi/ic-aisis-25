export default function Button({ label, onClick }: { label: string; onClick?: () => void }) {
  return (
    <button
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      onClick={onClick}
    >
      {label}
    </button>
  )
}
