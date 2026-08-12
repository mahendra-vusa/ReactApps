export default function Header({ onAddEmployee, employeeCount }) {
  return (
    <header className="topbar">
      <div className="brand">
        <div className="brand-mark">P</div>
        <div>
          <h1>PeopleHub</h1>
          <p>Employee management</p>
        </div>
      </div>

      <div className="topbar-actions">
        <span className="employee-count">{employeeCount} employees</span>
        <button className="btn btn-primary" onClick={onAddEmployee}>
          <span className="btn-icon">＋</span>
          Add Employee
        </button>
      </div>
    </header>
  );
}