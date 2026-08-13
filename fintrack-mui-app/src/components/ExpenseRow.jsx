import { Chip, IconButton, TableCell, TableRow, Tooltip, Typography } from "@mui/material";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";

export default function ExpenseRow({ transaction, onView, onEdit, onDelete }) {
  return (
    <TableRow hover>
      <TableCell><Typography fontWeight={800}>{transaction.title}</Typography><Typography variant="caption" color="text.secondary">{transaction.note}</Typography></TableCell>
      <TableCell><Chip size="small" label={transaction.category} sx={{ fontWeight: 800 }} /></TableCell>
      <TableCell><Typography fontWeight={900}>${transaction.amount.toFixed(2)}</Typography></TableCell>
      <TableCell>{transaction.date}</TableCell>
      <TableCell>{transaction.method}</TableCell>
      <TableCell align="right">
        <Tooltip title="Edit"><IconButton color="success" onClick={() => onEdit(transaction)}><EditRoundedIcon fontSize="small" /></IconButton></Tooltip>
        <Tooltip title="Delete"><IconButton color="error" onClick={() => onDelete(transaction.id)}><DeleteOutlineRoundedIcon fontSize="small" /></IconButton></Tooltip>
        <Tooltip title="Details"><IconButton onClick={() => onView(transaction)}><Typography fontWeight={900}>i</Typography></IconButton></Tooltip>
      </TableCell>
    </TableRow>
  );
}
