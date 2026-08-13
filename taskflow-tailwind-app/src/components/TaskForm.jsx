import { useEffect, useState } from "react";

const empty = { title: "", project: "Website Refresh", assignee: "", priority: "Medium", status: "Todo", dueDate: "" };

export default function TaskForm({ task, onSave, onClose }) {
  const [form, setForm] = useState(task || empty);
  const [error, setError] = useState("");

  useEffect(() => { setForm(task || empty); setError(""); }, [task]);

  function change(e) { setForm((v) => ({ ...v, [e.target.name]: e.target.value })); }

  function submit(e) {
    e.preventDefault();
    if (!form.title.trim() || !form.assignee.trim() || !form.dueDate) {
      setError("Task title, assignee and due date are required.");
      return;
    }
    onSave(form);
  }

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/50 p-4 backdrop-blur-sm" onMouseDown={onClose}>
      <section className="w-full max-w-2xl rounded-3xl bg-white shadow-2xl" onMouseDown={(e) => e.stopPropagation()}>
        <div className="flex items-start justify-between border-b border-slate-100 p-6">
          <div><p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-600">{task ? "Update task" : "New task"}</p><h2 className="mt-1 text-2xl font-black">Task details</h2></div>
          <button onClick={onClose} className="grid h-9 w-9 place-items-center rounded-full bg-slate-100 text-xl text-slate-500">×</button>
        </div>
        <form onSubmit={submit} className="space-y-5 p-6">
          {error && <p className="rounded-xl bg-red-50 p-3 text-sm font-bold text-red-700">{error}</p>}
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="sm:col-span-2"><span className="mb-1.5 block text-sm font-bold">Task title</span><input name="title" value={form.title} onChange={change} placeholder="e.g. Prepare launch checklist" className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-50" /></label>
            <label><span className="mb-1.5 block text-sm font-bold">Project</span><select name="project" value={form.project} onChange={change} className="w-full rounded-xl border border-slate-200 px-4 py-3">{["Website Refresh","Growth","People Ops","Mobile App","Internal"].map((x) => <option key={x}>{x}</option>)}</select></label>
            <label><span className="mb-1.5 block text-sm font-bold">Assignee</span><input name="assignee" value={form.assignee} onChange={change} placeholder="Team member" className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-50" /></label>
            <label><span className="mb-1.5 block text-sm font-bold">Priority</span><select name="priority" value={form.priority} onChange={change} className="w-full rounded-xl border border-slate-200 px-4 py-3"><option>High</option><option>Medium</option><option>Low</option></select></label>
            <label><span className="mb-1.5 block text-sm font-bold">Status</span><select name="status" value={form.status} onChange={change} className="w-full rounded-xl border border-slate-200 px-4 py-3"><option>Todo</option><option>In Progress</option><option>Done</option></select></label>
            <label><span className="mb-1.5 block text-sm font-bold">Due date</span><input name="dueDate" type="date" value={form.dueDate} onChange={change} className="w-full rounded-xl border border-slate-200 px-4 py-3" /></label>
          </div>
          <div className="flex justify-end gap-3 border-t border-slate-100 pt-5"><button type="button" onClick={onClose} className="rounded-xl bg-slate-100 px-5 py-3 font-black">Cancel</button><button className="rounded-xl bg-cyan-600 px-5 py-3 font-black text-white hover:bg-cyan-700">{task ? "Save changes" : "Create task"}</button></div>
        </form>
      </section>
    </div>
  );
}
