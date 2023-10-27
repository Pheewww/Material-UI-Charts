import React from "react";
import { Box, Typography } from "@mui/material";

// import { Point } from "chart.js/auto";

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend,
} from "chart.js";

import { Line, Chart } from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend
);

const getRandomData = () => {
	return Array.from({ length: 12 }, () => Math.floor(Math.random() * 50));
};

const data = {
	labels: [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	],
	datasets: [
		{
			label: "Created",
			data: getRandomData(),
			backgroundColor: "rgba(255, 99, 132, 0.2)",
			borderColor: "rgba(255, 99, 132, 1)",
			borderWidth: 1,
			tension: 0.5,
		},
		{
			label: "Completed",
			data: getRandomData(),
			backgroundColor: "rgba(54, 162, 235, 0.2)",
			borderColor: "rgba(54, 162, 235, 1)",
			tension: 0.5,
		},
		{
			label: "Reassign",
			data: getRandomData(),
			backgroundColor: "rgba(75, 192, 192, 0.2)",
			borderColor: "rgba(75, 192, 192, 1)",
			tension: 0.5,
		},
		{
			label: "Revoke",
			data: getRandomData(),
			backgroundColor: "rgba(196, 122, 142, 0.2)",
			borderColor: "rgba(175, 122, 212, 1)",
			tension: 0.5,
		},
	],
};
const options = {
	fill: true,
	maintainAspectRatio: false,

	plugins: {
	legend: {
		labels: {
			fontSize: 25,
			boxWidth: 10,
		},
	},
},
};

const AreaChart = () => {
	// Chart.register(Chart.PointElement);

	return (
		<Box className="areaChart" >
			<Box display="flex">
				<Typography variant="h6" fontWeight={2}>
					Area Chart
				</Typography>
				<Typography fontSize="15px" paddingTop={1} paddingLeft={1}>
					Visual Data
				</Typography>
			</Box>
			<Box width={1400}>
				<Line
					type="line"
					data={data}
					height={400}
					width={600}
					options={options}
				/>
			</Box>
		</Box>
	);
};

export default AreaChart;
