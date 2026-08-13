import TaskRow from "./TaskRow";

export default function TaskTable({ tasks, onEdit, onDelete, onView }) {
  if (!tasks.length) return <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center"><p className="font-black">No tasks found</p><p className="mt-1 text-sm text-slate-400">Try changing your filters.</p></div>;
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px]">
          <thead className="bg-slate-50">
            <tr>{["Task", "Assignee", "Priority", "Status", "Due date", "Actions"].map((h) => <th key={h} className="px-5 py-3 text-left text-xs font-black uppercase tracking-wider text-slate-400 last:text-right">{h}</th>)}</tr>
          </thead>
          <tbody>{tasks.map((task) => <TaskRow key={task.id} task={task} onEdit={onEdit} onDelete={onDelete} onView={onView} />)}</tbody>
        </table>
      </div>
    </div>
  );
}
