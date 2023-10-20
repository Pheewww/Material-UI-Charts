import React from "react";
import { Line } from "react-chartjs-2";
import {
	Chart as ChartJS,
	LineElement,
	CategoryScale,
	LinearScale,
	PointElement,
	Legend,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend);
const LineChart = () => {
	const data = {
		labels: ["2014", "2015", "2016", "2017", "2018", "2019", "2020","2021"],
		datasets: [
			{
				label: "4G Users",
				data: [3, 6, 9, 12, 16, 17, 20],
				backgroundColor: "transparent",
				borderColor: "skyblue",
				pointBorderColor: "blue",
				pointBorderWidth: 4,
				tension: 0.2,
			},
			{
				label: "3G Users",
				data: [15, 13, 12, 11, 9, 6, 3],
				backgroundColor: "transparent",
				borderColor: "pink",
				pointBorderColor: "#ee538b",
				pointBorderWidth: 4,
				tension: 0.2,
			},
		],
	};

	const options = {
		scales: {
			x: {
				grid: {
					display: false,
				},
			},
			y: {
				min: 2,
				max: 24,
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
				<h1>Line Chart</h1>
				<Line data={data} options={options}></Line>
			</div>
		</>
	);
};

export default LineChart;
