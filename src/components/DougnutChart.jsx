import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

//FOR LINE + PIE
const chartOptions = {
	plugins: {
		legend: {
			display: true, // This hides the legend

			align: "center",

			labels: {
				font: {
					weight: "bold",
				},
				boxWidth: 10, // Set the legend width to 1px
			},
		},
	},

	radius: "90%",
};

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

function DoughnutChart() {
	return <Doughnut options={chartOptions} data={data} />;
}

export default DoughnutChart;
