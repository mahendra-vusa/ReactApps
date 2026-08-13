import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import StatCard from "./components/StatCard";
import SearchBar from "./components/SearchBar";
import EmployeeTable from "./components/EmployeeTable";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeProfile from "./components/EmployeeProfile";
import { initialEmployees } from "./data/employees";
import { loadEmployees, saveEmployees } from "./utils/storage";

export default function App() {
  const [employees, setEmployees] = useState(() => loadEmployees(initialEmployees));
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");
  const [status, setStatus] = useState("All");
  const [modalOpen, setModalOpen] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    saveEmployees(employees);
  }, [employees]);

  const filteredEmployees = useMemo(() => {
    const query = search.toLowerCase().trim();

    return employees.filter((employee) => {
      const matchesSearch =
        !query ||
        employee.name.toLowerCase().includes(query) ||
        employee.email.toLowerCase().includes(query) ||
        employee.role.toLowerCase().includes(query);

      const matchesDepartment =
        department === "All" || employee.department === department;

      const matchesStatus =
        status === "All" || employee.status === status;

      return matchesSearch && matchesDepartment && matchesStatus;
    });
  }, [employees, search, department, status]);

  const activeCount = employees.filter((e) => e.status === "Active").length;
  const leaveCount = employees.filter((e) => e.status === "On Leave").length;
  const departmentsCount = new Set(employees.map((e) => e.department)).size;

  function openAddModal() {
    setEditingEmployee(null);
    setModalOpen(true);
  }

  function openEditModal(employee) {
    setEditingEmployee(employee);
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
    setEditingEmployee(null);
  }

  function handleSave(form) {
    if (editingEmployee) {
      setEmployees((current) =>
        current.map((employee) =>
          employee.id === editingEmployee.id
            ? { ...form, id: editingEmployee.id }
            : employee
        )
      );
    } else {
      setEmployees((current) => [
        ...current,
        { ...form, id: Date.now() }
      ]);
    }

    closeModal();
  }

  function handleDelete(id) {
    const employee = employees.find((item) => item.id === id);
    if (!employee) return;

    const confirmed = window.confirm(
      `Delete ${employee.name}? This action cannot be undone.`
    );

    if (confirmed) {
      setEmployees((current) => current.filter((item) => item.id !== id));
    }
  }

  return (
    <div className="app-shell">
      <Header
        onAddEmployee={openAddModal}
        employeeCount={employees.length}
      />

      <main className="main-content">
        <section className="hero">
          <div>
            <span className="eyebrow">Workspace overview</span>
            <h2>Manage your people, effortlessly.</h2>
            <p>
              Add, edit, search and organize employee records from one clean dashboard.
            </p>
          </div>
          <div className="hero-orb">✦</div>
        </section>

        <section className="stats-grid">
          <StatCard label="Total employees" value={employees.length} icon="◎" tone="purple" />
          <StatCard label="Active employees" value={activeCount} icon="✓" tone="green" />
          <StatCard label="On leave" value={leaveCount} icon="◷" tone="orange" />
          <StatCard label="Departments" value={departmentsCount} icon="⌘" tone="blue" />
        </section>

        <section className="content-card">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Directory</span>
              <h3>Employee records</h3>
            </div>
            <span className="result-count">
              Showing {filteredEmployees.length} of {employees.length}
            </span>
          </div>

          <SearchBar
            search={search}
            setSearch={setSearch}
            department={department}
            setDepartment={setDepartment}
            status={status}
            setStatus={setStatus}
          />

          <EmployeeTable
            employees={filteredEmployees}
            onEdit={openEditModal}
            onDelete={handleDelete}
            onView={setSelectedEmployee}
          />

        {selectedEmployee && (
        <EmployeeProfile
          employee={selectedEmployee}
          onClose={() => setSelectedEmployee(null)}
          onEdit={(employee) => {
            setSelectedEmployee(null);
            handleEdit(employee);
          }}
          onDelete={(id) => {
            setSelectedEmployee(null);
            handleDelete(id);
          }}
        />
      )}
        </section>
      </main>

      <footer className="footer">
        <span>PeopleHub</span>
        <span>React + Vite CRUD application</span>
      </footer>

      {modalOpen && (
        <EmployeeForm
          employee={editingEmployee}
          onSubmit={handleSave}
          onClose={closeModal}
        />
      )}
    </div>
  );
}