import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
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

const labels = ["Jan", "Feb", "March", "April", "May", "June", "July"];

// Generate random data for Dataset 1
const dataset1Data = labels.map(() => Math.floor(Math.random() * 200) + 1);

// Generate random data for Dataset 2
const dataset2Data = labels.map(() => Math.floor(Math.random() * 200) + 1);

export const data = {
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

function LineChart() {
  return <Line options={options} data={data} />;
}

export default LineChart;
