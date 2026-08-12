export default function SearchBar({
  search,
  setSearch,
  department,
  setDepartment,
  status,
  setStatus
}) {
  return (
    <div className="toolbar">
      <div className="search-wrap">
        <span>⌕</span>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name, email or role..."
        />
      </div>

      <select value={department} onChange={(e) => setDepartment(e.target.value)}>
        <option value="All">All departments</option>
        <option>Engineering</option>
        <option>Design</option>
        <option>Marketing</option>
        <option>HR</option>
        <option>Finance</option>
        <option>Sales</option>
        <option>Operations</option>
      </select>

      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="All">All statuses</option>
        <option>Active</option>
        <option>On Leave</option>
        <option>Inactive</option>
      </select>
    </div>
  );
}