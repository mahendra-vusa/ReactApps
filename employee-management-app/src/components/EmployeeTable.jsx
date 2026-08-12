import EmployeeRow from "./EmployeeRow";

export default function EmployeeTable({ employees, onEdit, onDelete }) {
  if (!employees.length) {
    return (
      <div className="empty-state">
        <div className="empty-icon">⌁</div>
        <h3>No employees found</h3>
        <p>Try changing your search or filters, or add a new employee.</p>
      </div>
    );
  }

  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Employee</th>
            <th>Contact</th>
            <th>Department</th>
            <th>Status</th>
            <th>Joined</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <EmployeeRow
              key={employee.id}
              employee={employee}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}