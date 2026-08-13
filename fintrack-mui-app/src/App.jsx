import { useMemo, useState } from "react";
import { Box, Container, CssBaseline, Grid, Paper, ThemeProvider, Typography, createTheme } from "@mui/material";
import Header from "./components/Header";
import StatCard from "./components/StatCard";
import ExpenseFilters from "./components/ExpenseFilters";
import ExpenseTable from "./components/ExpenseTable";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseDetails from "./components/ExpenseDetails";
import { initialTransactions } from "./data/transactions";

const theme = createTheme({
  palette: { primary: { main: "#475569" }, success: { main: "#16a34a" }, background: { default: "#f5f7fb", paper: "#fff" } },
  shape: { borderRadius: 12 },
  typography: { fontFamily: "Inter, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" },
  components: { MuiButton: { defaultProps: { disableElevation: true } } }
});

export default function App() {
  const [transactions, setTransactions] = useState(initialTransactions);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [editing, setEditing] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return transactions.filter(t => (!q || [t.title,t.category,t.note,t.method].join(" ").toLowerCase().includes(q)) && (category === "All" || t.category === category));
  }, [transactions, search, category]);

  const total = transactions.reduce((sum, t) => sum + Number(t.amount), 0);
  const average = transactions.length ? total / transactions.length : 0;

  function save(form) {
    if (editing) setTransactions(all => all.map(t => t.id === editing.id ? { ...form, id: t.id } : t));
    else setTransactions(all => [{ ...form, id: Date.now() }, ...all]);
    setShowForm(false); setEditing(null);
  }

  function edit(t) { setSelected(null); setEditing(t); setShowForm(true); }
  function remove(id) { setTransactions(all => all.filter(t => t.id !== id)); setSelected(null); }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header onAdd={() => { setEditing(null); setShowForm(true); }} />
      <Container maxWidth="lg" sx={{ py: 5 }}>
        <Box sx={{ mb: 4 }}><Typography color="success.main" fontWeight={900}>Money overview</Typography><Typography variant="h3" fontWeight={900} sx={{ mt: .5, fontSize: { xs: "2rem", md: "2.7rem" } }}>Know where it goes.</Typography><Typography color="text.secondary" sx={{ mt: 1, maxWidth: 700 }}>Track everyday expenses, payment methods and spending categories in one clean workspace.</Typography></Box>
        <Grid container spacing={2} sx={{ mb: 4 }}>
          <Grid size={{ xs: 12, sm: 6, lg: 3 }}><StatCard label="Total spend" value={`$${total.toFixed(2)}`} detail="All recorded expenses" icon="$" /></Grid>
          <Grid size={{ xs: 12, sm: 6, lg: 3 }}><StatCard label="Transactions" value={transactions.length} detail="Recorded expenses" icon="↕" /></Grid>
          <Grid size={{ xs: 12, sm: 6, lg: 3 }}><StatCard label="Average" value={`$${average.toFixed(2)}`} detail="Per transaction" icon="≈" /></Grid>
          <Grid size={{ xs: 12, sm: 6, lg: 3 }}><StatCard label="Visible" value={filtered.length} detail="Matching your filters" icon="⌕" /></Grid>
        </Grid>
        <Paper elevation={0} sx={{ p: 2.5, mb: 2, border: "1px solid", borderColor: "divider", borderRadius: 3 }}><ExpenseFilters search={search} setSearch={setSearch} category={category} setCategory={setCategory} /></Paper>
        <ExpenseTable transactions={filtered} onView={setSelected} onEdit={edit} onDelete={remove} />
      </Container>
      {showForm && <ExpenseForm transaction={editing} onSave={save} onClose={() => { setShowForm(false); setEditing(null); }} />}
      {selected && <ExpenseDetails transaction={selected} onClose={() => setSelected(null)} onEdit={edit} onDelete={remove} />}
    </ThemeProvider>
  );
}
