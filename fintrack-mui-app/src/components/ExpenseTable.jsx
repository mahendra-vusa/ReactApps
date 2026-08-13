import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import ExpenseRow from "./ExpenseRow";

export default function ExpenseTable({ transactions, onView, onEdit, onDelete }) {
  if (!transactions.length) return <Paper elevation={0} sx={{ p: 6, textAlign: "center", border: "1px dashed", borderColor: "divider", borderRadius: 3 }}><Typography fontWeight={900}>No expenses found</Typography><Typography variant="body2" color="text.secondary">Try another search or category.</Typography></Paper>;
  return (
    <TableContainer component={Paper} elevation={0} sx={{ border: "1px solid", borderColor: "divider", borderRadius: 3 }}>
      <Table sx={{ minWidth: 900 }}>
        <TableHead sx={{ bgcolor: "grey.50" }}><TableRow>{["Expense","Category","Amount","Date","Method","Actions"].map(h => <TableCell key={h} sx={{ fontSize: 11, fontWeight: 900, color: "text.secondary", letterSpacing: 1 }}>{h}</TableCell>)}</TableRow></TableHead>
        <TableBody>{transactions.map(t => <ExpenseRow key={t.id} transaction={t} onView={onView} onEdit={onEdit} onDelete={onDelete} />)}</TableBody>
      </Table>
    </TableContainer>
  );
}
