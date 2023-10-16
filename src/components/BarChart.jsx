import React from "react";
import {
	Chart as ChartJS,
	BarElement,
	CategoryScale,
	LinearScale,
	Tooltip,
	Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
const BarChart = () => {
	const data = {
		labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
		datasets: [
			{
				label: "Registered Users",
				data: [3, 6, 9, 12, 16, 17, 20],
				backgroundColor: "#009d9a",
				borderColor: "black",
				borderWidth: 2,
			},
			{
				label: "Unregistered Users",
				data: [15, 13, 12, 11, 9, 6, 3],
				backgroundColor: "#00539a",
				borderColor: "black",
				borderWidth: 2,
			},
		],
	};

	const options = {
		scales: {
			y: {
				ticks: {
					stepSize: 2,
					callback: (value) => value + "K",
				},
			},
		},
	};

	return (
		<>
			<div className="plot">
				<h1>Bar Chart</h1>
				<Bar data={data} options={options}></Bar>
			</div>
		</>
	);
};

export default BarChart;
