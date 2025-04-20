export default function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border p-4 rounded shadow">
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <div>{children}</div>
    </div>
  )
}