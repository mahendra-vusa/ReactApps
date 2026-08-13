import { FormControl, InputLabel, MenuItem, Select, Stack, TextField } from "@mui/material";

const categories = ["Utilities", "Food", "Software", "Travel", "Office", "Marketing"];

export default function ExpenseFilters({ search, setSearch, category, setCategory }) {
  return (
    <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
      <TextField
        fullWidth
        label="Search expenses"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <FormControl sx={{ minWidth: { sm: 220 } }}>
        <InputLabel>Category</InputLabel>
        <Select
          label="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <MenuItem value="All">All categories</MenuItem>

          {categories.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
}
