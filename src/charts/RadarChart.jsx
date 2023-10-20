import React from "react";
import {
	Chart as ChartJS,
	LineElement,
	PointElement,
	Tooltip,
	Legend,
	RadialLinearScale,
	Filler,
} from "chart.js";
import { Radar } from "react-chartjs-2";
ChartJS.register(
	LineElement,
	PointElement,
	Tooltip,
	Legend,
	RadialLinearScale,
	Filler
);

const RadarChart = () => {
	const data = {
		labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
		datasets: [
			{
				label: "Subscriber View Count",
				data: [3, 6, 9, 12, 16, 17, 20],
				backgroundColor: "rgba(0, 157, 154,0.5)",
				borderColor: "black",
				borderWidth: 1,
			},
			{
				label: "Non-Subscriber View Count",
				data: [15, 13, 12, 11, 9, 6, 3],
				backgroundColor: "rgba(200, 80, 120,0.5)",
				borderColor: "black",
				borderWidth: 1,
			},
		],
	};

	const options = {
		scale: {
			display: false, // Hide the scale (axes)
		},
	};

	return (
		<>
			<div className="plot">
				<h1>Radar Chart</h1>
				<Radar data={data} options={options}></Radar>
			</div>
		</>
	);
};

export default RadarChart;
