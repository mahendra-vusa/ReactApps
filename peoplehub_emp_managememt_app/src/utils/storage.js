const STORAGE_KEY = "peoplehub-employees";

export function loadEmployees(fallback) {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : fallback;
  } catch {
    return fallback;
  }
}

export function saveEmployees(employees) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(employees));
}