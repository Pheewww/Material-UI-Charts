import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import LineChart from "./LineChart";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

import { Box, Stack, Typography } from "@mui/material";
import Card_Component from "./Card";

const charts = [
  {
    title: "Visitors Insight",
    chart: <LineChart />,
  },
];

const LineComp = () => {
  return (
    <Stack
      direction="row"
      spacing={3}
      width={"100%"}
      //   height={150}
      display={"flex"}
      justifyContent="space-between"
      padding={1.5}
      borderRadius="0px"
    //   backgroundColor="rgb(228, 228, 228)"
    >
      {/* <Box height={240}> */}

      <Box>
        <Card_Component />
      </Box>
      




      {/* CHART GRAPH */}

      
      {charts.map((chart, index) => (
        <Box
          key={index}
          className="chartCard"
          width="inherit"
          alignItems="center"
          border={2}
          borderColor={"#000000"}
          padding={1}
          borderRadius="7px"
        >
          <Box className="chart" height={250}>
            <Typography variant="h7" fontWeight="bold">
              {chart.title}{" "}
            </Typography>
            {chart.chart}
          </Box>
        </Box>
      ))}
    </Stack>
  );
};

export default LineComp;
