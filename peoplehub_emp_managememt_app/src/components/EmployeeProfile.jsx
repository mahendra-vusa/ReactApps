export default function EmployeeProfile({ employee, onClose, onEdit, onDelete }) {
  if (!employee) return null;

  return (
    <div className="profile-backdrop" onMouseDown={onClose}>
      <section
        className="profile-modal"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          className="profile-close"
          onClick={onClose}
          aria-label="Close employee profile"
        >
          ×
        </button>

        <div className="profile-hero">
          <div className="profile-avatar">
            {employee.name
              .split(" ")
              .map((word) => word[0])
              .join("")
              .slice(0, 2)
              .toUpperCase()}
          </div>

          <div>
            <span className="eyebrow">Employee profile</span>
            <h2>{employee.name}</h2>
            <p>{employee.role}</p>
          </div>
        </div>

        <div className="profile-status-row">
          <span className={`status-pill ${employee.status.toLowerCase().replace(" ", "-")}`}>
            {employee.status}
          </span>

          <span className="profile-id">
            Employee #{employee.id}
          </span>
        </div>

        <div className="profile-details">
          <div className="profile-detail">
            <span>Email</span>
            <strong>{employee.email}</strong>
          </div>

          <div className="profile-detail">
            <span>Phone</span>
            <strong>{employee.phone || "Not provided"}</strong>
          </div>

          <div className="profile-detail">
            <span>Department</span>
            <strong>{employee.department}</strong>
          </div>

          <div className="profile-detail">
            <span>Job title</span>
            <strong>{employee.role}</strong>
          </div>

          <div className="profile-detail">
            <span>Joining date</span>
            <strong>{employee.joinDate}</strong>
          </div>

          <div className="profile-detail">
            <span>Status</span>
            <strong>{employee.status}</strong>
          </div>
        </div>

        <div className="profile-actions">
          <button
            className="btn btn-secondary"
            onClick={() => onEdit(employee)}
          >
            Edit employee
          </button>

          <button
            className="btn btn-danger"
            onClick={() => onDelete(employee.id)}
          >
            Delete employee
          </button>
        </div>
      </section>
    </div>
  );
}