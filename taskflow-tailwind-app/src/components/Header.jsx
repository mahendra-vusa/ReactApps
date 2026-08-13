export default function Header({ onAdd }) {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-cyan-600 font-black text-white shadow-lg shadow-cyan-100">TF</div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-600">TaskFlow</p>
            <h1 className="text-xl font-black text-slate-900">Project Planner</h1>
          </div>
        </div>
        <button onClick={onAdd} className="rounded-xl bg-cyan-600 px-4 py-2.5 text-sm font-black text-white shadow-lg shadow-cyan-100 hover:bg-cyan-700">
          + New task
        </button>
      </div>
    </header>
  );
}
