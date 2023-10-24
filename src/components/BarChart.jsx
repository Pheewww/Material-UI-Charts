import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

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
	},
};

// <-- BAR - HROIZONTAL DATA -->

const labels = ["Jan", "Feb", "March"];

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

function BarChart() {
  return <Bar options={options} data={data1} />;
}

export default BarChart;
