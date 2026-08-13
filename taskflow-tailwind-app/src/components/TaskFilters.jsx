export default function TaskFilters({ search, setSearch, status, setStatus, priority, setPriority }) {
  return (
    <div className="grid gap-3 md:grid-cols-[1fr_180px_180px]">
      <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search tasks, projects or people..." className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-50" />
      <select value={status} onChange={(e) => setStatus(e.target.value)} className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-50">
        <option>All statuses</option><option>Todo</option><option>In Progress</option><option>Done</option>
      </select>
      <select value={priority} onChange={(e) => setPriority(e.target.value)} className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-50">
        <option>All priorities</option><option>High</option><option>Medium</option><option>Low</option>
      </select>
    </div>
  );
}
