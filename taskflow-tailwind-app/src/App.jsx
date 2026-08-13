import { useMemo, useState } from "react";
import Header from "./components/Header";
import StatCard from "./components/StatCard";
import TaskFilters from "./components/TaskFilters";
import TaskTable from "./components/TaskTable";
import TaskForm from "./components/TaskForm";
import TaskDetails from "./components/TaskDetails";
import { initialTasks } from "./data/tasks";

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All statuses");
  const [priority, setPriority] = useState("All priorities");
  const [editing, setEditing] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return tasks.filter((t) =>
      (!q || [t.title, t.project, t.assignee].join(" ").toLowerCase().includes(q)) &&
      (status === "All statuses" || t.status === status) &&
      (priority === "All priorities" || t.priority === priority)
    );
  }, [tasks, search, status, priority]);

  function save(form) {
    if (editing) setTasks((all) => all.map((t) => t.id === editing.id ? { ...form, id: t.id } : t));
    else setTasks((all) => [{ ...form, id: Date.now() }, ...all]);
    setShowForm(false); setEditing(null);
  }

  function edit(task) { setSelected(null); setEditing(task); setShowForm(true); }
  function remove(id) { setTasks((all) => all.filter((t) => t.id !== id)); setSelected(null); }

  return (
    <div className="min-h-screen bg-slate-50">
      <Header onAdd={() => { setEditing(null); setShowForm(true); }} />
      <main className="mx-auto max-w-7xl space-y-7 px-4 py-8 sm:px-6 lg:px-8">
        <section><p className="text-sm font-black text-cyan-600">Workspace overview</p><h2 className="mt-1 text-3xl font-black tracking-tight">Plan work. Ship clearly.</h2><p className="mt-2 max-w-2xl text-sm font-medium text-slate-500">A simple project planner for tracking priorities, owners and deadlines.</p></section>
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard label="Total tasks" value={tasks.length} detail="Across all projects" icon="✓" />
          <StatCard label="In progress" value={tasks.filter(t => t.status === "In Progress").length} detail="Currently moving" icon="↗" />
          <StatCard label="High priority" value={tasks.filter(t => t.priority === "High").length} detail="Needs attention" icon="!" />
          <StatCard label="Completed" value={tasks.filter(t => t.status === "Done").length} detail="Finished work" icon="★" />
        </section>
        <TaskFilters search={search} setSearch={setSearch} status={status} setStatus={setStatus} priority={priority} setPriority={setPriority} />
        <TaskTable tasks={filtered} onEdit={edit} onDelete={remove} onView={setSelected} />
      </main>
      {showForm && <TaskForm task={editing} onSave={save} onClose={() => { setShowForm(false); setEditing(null); }} />}
      {selected && <TaskDetails task={selected} onClose={() => setSelected(null)} onEdit={edit} onDelete={remove} />}
    </div>
  );
}
