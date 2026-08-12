import { useEffect, useState } from "react";

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  department: "Engineering",
  role: "",
  status: "Active",
  joinDate: ""
};

export default function EmployeeForm({ employee, onSubmit, onClose }) {
  const [form, setForm] = useState(employee || emptyForm);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setForm(employee || emptyForm);
    setErrors({});
  }, [employee]);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function validate() {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = "Name is required";
    if (!form.email.trim()) nextErrors.email = "Email is required";
    if (!/^[^\s@]+@peoplehub\.com$/.test(form.email)) {
      nextErrors.email = "Enter a valid PeopleHub email";
    }
    if (!form.role.trim()) nextErrors.role = "Role is required";
    if (!form.joinDate) nextErrors.joinDate = "Join date is required";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (validate()) onSubmit(form);
  }
  const getToday = () => {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

  return (
    <div className="modal-backdrop" onMouseDown={onClose}>
      <section className="modal" onMouseDown={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <span className="eyebrow">{employee ? "Edit profile" : "New profile"}</span>
            <h2>{employee ? "Edit employee" : "Add employee"}</h2>
            <p>Keep employee information accurate and up to date.</p>
          </div>
          <button className="icon-btn" onClick={onClose} aria-label="Close">×</button>
        </div>

        <form onSubmit={handleSubmit} className="employee-form">
          <div className="form-grid">
            <label>
              Full name
              <input name="name" value={form.name} onChange={handleChange} placeholder="e.g. Priya Singh" />
              {errors.name && <small className="error">{errors.name}</small>}
            </label>

            <label>
              Email
              <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="name@company.com" />
              {errors.email && <small className="error">{errors.email}</small>}
            </label>

            <label>
              Phone
              <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" />
            </label>

            <label>
              Department
              <select name="department" value={form.department} onChange={handleChange}>
                <option>Engineering</option>
                <option>Design</option>
                <option>Marketing</option>
                <option>HR</option>
                <option>Finance</option>
                <option>Sales</option>
                <option>Operations</option>
              </select>
            </label>

            <label>
              Job title
              <input name="role" value={form.role} onChange={handleChange} placeholder="e.g. Product Manager" />
              {errors.role && <small className="error">{errors.role}</small>}
            </label>

            <label>
              Status
              <select name="status" value={form.status} onChange={handleChange}>
                <option>Active</option>
                <option>On Leave</option>
                <option>Inactive</option>
              </select>
            </label>

            <label>
              Joining date
              <input name="joinDate" type="date" value={form.joinDate} onChange={handleChange}  max={getToday()}/>
              {errors.joinDate && <small className="error">{errors.joinDate}</small>}
            </label>
          </div>

          <div className="modal-actions">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
            <button type="submit" className="btn btn-primary">
              {employee ? "Save changes" : "Create employee"}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}