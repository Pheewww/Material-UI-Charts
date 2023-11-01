import React from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import Box from "@mui/material/Box";
import { Bar } from "react-chartjs-2";
import { Typography } from "@mui/material";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

const options = {
	indexAxis: "x",
	elements: {
		bar: {
			borderWidth: 2,
		},
	},
	scales: {
		x: {
			beginAtZero: true,
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
	},
};

// <-- BAR - HROIZONTAL DATA -->

const labels = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sept",
	"Oct",
	"Nov",
	"Dec",
];

// Generate random data for Dataset 1
const dataset1Data = labels.map(() => Math.floor(Math.random() * 20) + 1);

// Generate random data for Dataset 2
const dataset2Data = labels.map(() => Math.floor(Math.random() * 20) + 1);

export const data1 = {
	labels,
	datasets: [
		{
			label: "Dataset 1",
			data: dataset1Data,
			backgroundColor: "rgba(53, 162, 235, 0.4)",

			borderWidth: 1,
		},
		{
			label: "Dataset 2",
			data: dataset2Data,
			backgroundColor: "rgba(53, 162, 235, 2.7)",

			borderWidth: 1,
		},
	],
};

function BarChart() {
	return (
		<Box padding={2}>
			<Typography fontWeight={'bold'}>Monthly Created Template + Used Template</Typography>
			<Bar
				type="line"
				data={data1}
				height={400}
				width={1500}
				options={options}
			/>
		</Box>
	);
}

export default BarChart;
