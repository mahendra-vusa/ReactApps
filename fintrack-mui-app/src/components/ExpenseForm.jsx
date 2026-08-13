import { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const empty = {
  title: "",
  category: "Office",
  amount: "",
  date: "",
  method: "Card",
  note: "",
};

const categories = ["Utilities", "Food", "Software", "Travel", "Office", "Marketing"];
const paymentMethods = ["Card", "UPI", "Cash", "Bank transfer"];

export default function ExpenseForm({ transaction, onSave, onClose }) {
  const [form, setForm] = useState(transaction || empty);
  const [error, setError] = useState("");

  useEffect(() => {
    setForm(transaction || empty);
    setError("");
  }, [transaction]);

  function change(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function submit(event) {
    event.preventDefault();

    if (
      !form.title.trim() ||
      !form.amount ||
      Number(form.amount) <= 0 ||
      !form.date
    ) {
      setError("Title, a positive amount and date are required.");
      return;
    }

    onSave({
      ...form,
      amount: Number(form.amount),
    });
  }

  return (
    <Dialog open onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle sx={{ fontWeight: 900 }}>
        {transaction ? "Edit expense" : "Add expense"}
      </DialogTitle>

      <DialogContent dividers>
        <form id="expense-form" onSubmit={submit}>
          <Grid container spacing={2} sx={{ pt: 1 }}>
            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                name="title"
                label="Expense title"
                value={form.title}
                onChange={change}
                error={Boolean(error && !form.title)}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                name="amount"
                label="Amount"
                type="number"
                inputProps={{ min: 0.01, step: 0.01 }}
                value={form.amount}
                onChange={change}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                name="date"
                label="Date"
                type="date"
                value={form.date}
                onChange={change}
                slotProps={{ inputLabel: { shrink: true } }}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <FormControl fullWidth>
                <InputLabel>Category</InputLabel>

                <Select
                  name="category"
                  label="Category"
                  value={form.category}
                  onChange={change}
                >
                  {categories.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <FormControl fullWidth>
                <InputLabel>Payment method</InputLabel>

                <Select
                  name="method"
                  label="Payment method"
                  value={form.method}
                  onChange={change}
                >
                  {paymentMethods.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                multiline
                minRows={2}
                name="note"
                label="Note"
                value={form.note}
                onChange={change}
              />
            </Grid>

            {error && (
              <Grid size={{ xs: 12 }}>
                <div style={{ color: "#d32f2f", fontWeight: 700 }}>
                  {error}
                </div>
              </Grid>
            )}
          </Grid>
        </form>
      </DialogContent>

      <DialogActions sx={{ p: 2 }}>
        <Button onClick={onClose} color="inherit" sx={{ fontWeight: 800 }}>
          Cancel
        </Button>

        <Button
          type="submit"
          form="expense-form"
          variant="contained"
          color="success"
          sx={{ borderRadius: 2, fontWeight: 900 }}
        >
          {transaction ? "Save changes" : "Create expense"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
