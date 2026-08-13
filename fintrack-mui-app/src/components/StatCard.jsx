import { Box, Card, CardContent, Typography } from "@mui/material";

export default function StatCard({ label, value, detail, icon }) {
  return (
    <Card elevation={0} sx={{ border: "1px solid", borderColor: "divider", borderRadius: 3 }}>
      <CardContent sx={{ display: "flex", justifyContent: "space-between", p: 2.5 }}>
        <Box><Typography variant="body2" color="text.secondary" fontWeight={700}>{label}</Typography><Typography variant="h4" fontWeight={900} sx={{ mt: .7 }}>{value}</Typography><Typography variant="caption" color="text.disabled" fontWeight={700}>{detail}</Typography></Box>
        <Box sx={{ width: 42, height: 42, display: "grid", placeItems: "center", borderRadius: 2, bgcolor: "success.50", color: "success.main" }}>{icon}</Box>
      </CardContent>
    </Card>
  );
}
