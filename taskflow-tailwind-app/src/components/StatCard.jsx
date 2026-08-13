export default function StatCard({ label, value, detail, icon }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-bold text-slate-500">{label}</p>
          <p className="mt-2 text-3xl font-black text-slate-900">{value}</p>
          <p className="mt-1 text-xs font-semibold text-slate-400">{detail}</p>
        </div>
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-cyan-50 text-lg text-cyan-700">{icon}</span>
      </div>
    </article>
  );
}
