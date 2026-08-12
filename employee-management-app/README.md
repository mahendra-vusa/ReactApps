# PeopleHub — Employee Management (React + Vite)

A beautiful component-based employee management CRUD application.

## Features
- Create employee
- Read/list employees
- Update employee
- Delete employee with confirmation
- Search by name, email, or role
- Filter by department and status
- Dashboard statistics
- Responsive UI
- Form validation
- localStorage persistence
- Props-based reusable components

## Run

```bash
npm install
npm run dev
```

Then open the local URL printed by Vite.

## Build

```bash
npm run build
npm run preview
```

## Component structure

- `App.jsx` — state, CRUD logic, filtering
- `Header.jsx` — application header
- `StatCard.jsx` — reusable dashboard statistic
- `SearchBar.jsx` — search/filter controls
- `EmployeeTable.jsx` — table container
- `EmployeeRow.jsx` — one employee row using props
- `EmployeeForm.jsx` — create/edit form
- `storage.js` — localStorage persistence
- `employees.js` — seed data
