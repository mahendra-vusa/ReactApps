import { Box, Button, Dialog, DialogActions, DialogContent, Divider, Grid, Typography } from "@mui/material";

export default function ExpenseDetails({ transaction, onClose, onEdit, onDelete }) {
  if (!transaction) return null;
  const rows = [["Amount", `$${transaction.amount.toFixed(2)}`],["Category",transaction.category],["Date",transaction.date],["Payment method",transaction.method],["Note",transaction.note || "No note"]];
  return (
    <Dialog open onClose={onClose} fullWidth maxWidth="xs">
      <DialogContent sx={{ p: 3 }}>
        <Typography variant="overline" color="success.main" fontWeight={900}>Expense details</Typography>
        <Typography variant="h5" fontWeight={900}>{transaction.title}</Typography>
        <Divider sx={{ my: 2.5 }} />
        <Grid container spacing={1.5}>{rows.map(([k,v]) => <Grid size={{ xs: 12 }} key={k}><Box sx={{ p: 1.7, border: "1px solid", borderColor: "divider", borderRadius: 2.5 }}><Typography variant="caption" color="text.secondary" fontWeight={800}>{k}</Typography><Typography fontWeight={800}>{v}</Typography></Box></Grid>)}</Grid>
      </DialogContent>
      <DialogActions sx={{ p: 2 }}><Button onClick={() => onEdit(transaction)} variant="outlined" color="success" sx={{ fontWeight: 800 }}>Edit</Button><Button onClick={() => onDelete(transaction.id)} variant="contained" color="error" sx={{ fontWeight: 800 }}>Delete</Button></DialogActions>
    </Dialog>
  );
}
