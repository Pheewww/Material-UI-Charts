import DoughnutChart from "./DougnutChart";

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
import LineChart from "../Dashboard/LineChart";
import BarChart from "./BarChart";

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



const charts = [
	{
		title: "Daywise Document created count",
		chart: <BarChart />,
	},
	{
		title: "Donut Chart",
		chart: <LineChart />,
	},
	{
		title: "Line Chart",
		chart: <DoughnutChart />,
	},
];

const ChartUi = () => {
	return (
		<Stack
			direction="row"
			spacing={1.5}
			width={"100%"}
			display={"flex"}
			justifyContent="space-between"
			backgroundColor="rgb(228, 228, 228)"
			padding={1.5}
		>
			{charts.map((chart, index) => (
				<Box key={index} className="chartCard" height={350} width={"inherit"}>
					<Typography>{chart.title} </Typography>
					<Box className="chart" height={350}>
						{chart.chart}
					</Box>
				</Box>
			))}
		</Stack>
	);
};

export default ChartUi;
