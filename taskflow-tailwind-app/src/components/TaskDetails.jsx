export default function TaskDetails({ task, onClose, onEdit, onDelete }) {
  if (!task) return null;
  return (
    <div className="fixed inset-0 z-40 grid place-items-center bg-slate-950/50 p-4 backdrop-blur-sm" onMouseDown={onClose}>
      <section className="w-full max-w-lg rounded-3xl bg-white p-7 shadow-2xl" onMouseDown={(e) => e.stopPropagation()}>
        <div className="flex justify-between gap-4"><div><p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-600">Task details</p><h2 className="mt-1 text-2xl font-black">{task.title}</h2><p className="mt-1 text-sm text-slate-500">{task.project}</p></div><button onClick={onClose} className="grid h-9 w-9 place-items-center rounded-full bg-slate-100 text-xl">×</button></div>
        <div className="mt-6 grid grid-cols-2 gap-3">{[["Assignee", task.assignee],["Priority",task.priority],["Status",task.status],["Due date",task.dueDate]].map(([k,v]) => <div key={k} className="rounded-2xl border border-slate-200 p-4"><p className="text-xs font-black uppercase text-slate-400">{k}</p><p className="mt-1 font-extrabold">{v}</p></div>)}</div>
        <div className="mt-6 flex justify-end gap-3 border-t border-slate-100 pt-5"><button onClick={() => onEdit(task)} className="rounded-xl bg-slate-100 px-4 py-2.5 font-black">Edit</button><button onClick={() => onDelete(task.id)} className="rounded-xl bg-red-600 px-4 py-2.5 font-black text-white">Delete</button></div>
      </section>
    </div>
  );
}
