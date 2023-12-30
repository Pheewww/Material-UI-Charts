import { Box } from "@mui/material";
import LineChart from "./LineChart.jsx";
import BarChart from "./BarChart.jsx";
import ContractConversionFunnel from "./FunnelChart.jsx";
import ContractPieChart from "./PieChart.jsx";
import MapChart from "./MapChart.jsx";
import Heat_Calendar from "./Heatmap.jsx";

function ContractDashboard() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column", // Changed to column for vertical stacking
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row", // Row direction to place charts side by side
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "50%", height: "100%" }}>
            <BarChart />
          </Box>

          <Box sx={{ width: "50%", height: "100%" }}>
            <LineChart />
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row", // Row direction to place charts side by side
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "50%", height: "300px" }}>
            <ContractConversionFunnel />
          </Box>

          <Box sx={{ width: "50%", height: "100%", justifyContent: "center" }}>
            <ContractPieChart />
          </Box>
        </Box>
      </Box>
      <Heat_Calendar />
      <MapChart />
    </>
  );
}

export default ContractDashboard;
