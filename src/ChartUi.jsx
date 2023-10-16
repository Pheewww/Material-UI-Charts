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
import { Pie, Doughnut, Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

import { Box, Divider, Stack, Typography } from "@mui/material";

export const data = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 14)",
        "rgba(54, 162, 235, 19)",
        "rgba(255, 206, 86, 16)",
      ],
      borderColor: [
        "rgba(255, 255, 255, 1)", // Set the border color to white
        "rgba(255, 255, 255, 1)", // Set the border color to white
        "rgba(255, 255, 255, 1)", // Set the border color to white
      ],
      borderWidth: 1,
    },
  ],
};

//FOR LINE + PIE
const chartOptions = {
  plugins: {
    legend: {
      display: true, // This hides the legend
      position: "bottom",
      align: "center",

      labels: {
        font: {
          weight: "bold",
        },
        boxWidth: 10, // Set the legend width to 1px
      },
    },
  },
};

//FOR BAR - HORIZONTAL
const options = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  scales: {
    x: {
      beginAtZero: true,
    },
    y: {
      barThickness: 40, // Adjust the value to set the desired width in the Y direction
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        boxWidth: 10,
      },
    },

    title: {
      display: true,
      text: "Chart.js Horizontal Bar Chart",
    },
  },
};

// <-- BAR - HROIZONTAL DATA -->

const labels = ["A", "B", "C", "D", "E"];

// Generate random data for Dataset 1
const dataset1Data = labels.map(() => Math.floor(Math.random() * 200) + 1);

// Generate random data for Dataset 2
const dataset2Data = labels.map(() => Math.floor(Math.random() * 200) + 1);

export const data1 = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: dataset1Data,
      backgroundColor: "rgba(255, 99, 132, 0.9)",
      borderColor: "rgb(255, 99, 132)",
      borderWidth: 1,
    },
    {
      label: "Dataset 2",
      data: dataset2Data,
      backgroundColor: "rgba(53, 162, 235, 0.7)",
      borderColor: "rgb(53, 162, 235)",
      borderWidth: 1,
    },
  ],
};

const App1 = () => {
  return (
    <Stack
      direction="row"
      spacing={5}
      display={"flex"}
      backgroundColor={"#f5f5f5"} // "rgb(200, 200, 200)"
      divider={<Divider orientation="vertical" flexItem />}
    >
      <Box bgcolor={"white"}>
        <Typography> Daywise Document created count</Typography>
        <Bar data={data1} options={options} />
      </Box>
      <Box bgcolor={"white"}>
        <Typography> Donut Chart</Typography>
        <Pie data={data} options={chartOptions} />
      </Box>
      <Box bgcolor={"white"}>
        <Typography> Line Chart</Typography>
        <Doughnut data={data} options={chartOptions} />
      </Box>
    </Stack>
  );
};

export default App1;
