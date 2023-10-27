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
			justifyContent="center"
			padding={1.5}
			//   backgroundColor="rgb(228, 228, 228)"
		>
			{/* <Box height={240}> */}
			<Box width={"70%"}>
				<Card_Component />
			</Box>
			{/* CHART GRAPH */}
			{charts.map((chart, index) => (
				<Box
					key={index}
					className="chartCard"
					width="30%"
					alignItems="center"
					border={2}
					borderColor={"#000000"}
					borderRadius="7px"
				>
					<Box className="chart" height={250} display="block" justifyItems='center'>
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
