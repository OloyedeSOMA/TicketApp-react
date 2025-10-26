
export default function StatCard({ title, value, dotColor }) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
        </div>
        <div className={`w-3 h-3 rounded-full ${dotColor}`}></div>
      </div>
    </div>
  );
}
