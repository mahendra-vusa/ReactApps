function initials(name) {
  return name
    .split(" ")
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function EmployeeRow({ employee, onEdit, onDelete }) {
  return (
    <tr>
      <td>
        <div className="employee-cell">
          <div className="avatar">{initials(employee.name)}</div>
          <div>
            <strong>{employee.name}</strong>
            <span>{employee.role}</span>
          </div>
        </div>
      </td>
      <td>
        <div className="contact">
          <span>{employee.email}</span>
          <small>{employee.phone || "No phone"}</small>
        </div>
      </td>
      <td><span className="department-chip">{employee.department}</span></td>
      <td>
        <span className={`status ${employee.status.toLowerCase().replace(" ", "-")}`}>
          <i /> {employee.status}
        </span>
      </td>
      <td>{new Date(employee.joinDate).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric"
      })}</td>
      <td>
        <div className="row-actions">
          <button className="action-btn" onClick={() => onEdit(employee)} title="Edit">✎</button>
          <button className="action-btn danger" onClick={() => onDelete(employee.id)} title="Delete">⌫</button>
        </div>
      </td>
    </tr>
  );
}