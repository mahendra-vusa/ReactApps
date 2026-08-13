const priorityStyles = {
  High: "bg-red-50 text-red-700 ring-1 ring-red-200",
  Medium: "bg-amber-50 text-amber-700 ring-1 ring-amber-200",
  Low: "bg-slate-100 text-slate-600 ring-1 ring-slate-200"
};

const statusStyles = {
  Todo: "bg-slate-100 text-slate-700",
  "In Progress": "bg-cyan-50 text-cyan-700",
  Done: "bg-emerald-50 text-emerald-700"
};

export default function TaskRow({ task, onEdit, onDelete, onView }) {
  return (
    <tr className="border-t border-slate-100 hover:bg-slate-50">
      <td className="px-5 py-4">
        <button onClick={() => onView(task)} className="text-left">
          <span className="block font-extrabold text-slate-900 hover:text-cyan-700">{task.title}</span>
          <span className="text-xs font-semibold text-slate-400">{task.project}</span>
        </button>
      </td>
      <td className="px-5 py-4 text-sm font-bold text-slate-600">{task.assignee}</td>
      <td className="px-5 py-4"><span className={`rounded-full px-3 py-1 text-xs font-black ${priorityStyles[task.priority]}`}>{task.priority}</span></td>
      <td className="px-5 py-4"><span className={`rounded-full px-3 py-1 text-xs font-black ${statusStyles[task.status]}`}>{task.status}</span></td>
      <td className="px-5 py-4 text-sm font-bold text-slate-500">{task.dueDate}</td>
      <td className="px-5 py-4 text-right">
        <button onClick={() => onEdit(task)} className="mr-2 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-black text-slate-600 hover:text-cyan-700">Edit</button>
        <button onClick={() => onDelete(task.id)} className="rounded-lg border border-red-100 px-3 py-1.5 text-xs font-black text-red-600 hover:bg-red-50">Delete</button>
      </td>
    </tr>
  );
}
