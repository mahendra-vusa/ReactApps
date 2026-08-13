import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";

export default function Header({ onAdd }) {
  return (
    <AppBar position="sticky" elevation={0} sx={{ bgcolor: "background.paper", color: "text.primary", borderBottom: "1px solid", borderColor: "divider" }}>
      <Toolbar sx={{ maxWidth: 1200, width: "100%", mx: "auto", py: 1.2 }}>
        <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center", gap: 1.5 }}>
          <Box sx={{ width: 44, height: 44, display: "grid", placeItems: "center", borderRadius: 2.5, bgcolor: "success.main", color: "white" }}><AccountBalanceWalletRoundedIcon /></Box>
          <Box><Typography variant="overline" color="success.main" fontWeight={900} letterSpacing={2}>FinTrack</Typography><Typography variant="h6" fontWeight={900}>Expense Manager</Typography></Box>
        </Box>
        <Button onClick={onAdd} variant="contained" color="success" startIcon={<AddRoundedIcon />} sx={{ borderRadius: 2.5, fontWeight: 900 }}>Add expense</Button>
      </Toolbar>
    </AppBar>
  );
}
