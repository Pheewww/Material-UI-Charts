import React from "react";
import {
	Chart as ChartJS,
	ArcElement,
	Title,
	Tooltip,
	Legend,
	RadialLinearScale,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";
ChartJS.register(ArcElement, Title, Tooltip, Legend, RadialLinearScale);

const PolarPlot = () => {
	const data = {
		labels: ["Red", "Green", "Yellow", "Grey", "Blue"],
		datasets: [
			{
				label: "My First Dataset",
				data: [11, 16, 7, 3, 14],
				backgroundColor: [
					"rgba(255, 99, 132,0.8)",
					"rgba(75, 192, 192,0.8)",
					"rgba(255, 205, 86,0.8)",
					"rgba(201, 203, 207,0.8)",
					"rgba(54, 162, 235,0.8)",
				],
				borderWidth: 0,
			},
		],
	};

	const options = {
		responsive: true,
		scales: {
			r: {
				suggestedMin: 0,
				suggestedMax: 18,
				grid: {
					circular: true,
					color: "#000",
				},
				angelLines: {
					display: true,
					color: "#000",
					lineWidth: 1,
				},
			},
		},
	};

	return (
		<>
			<div className="plot">
				<h1>Polar Plot</h1>
				<PolarArea data={data} options={options}></PolarArea>
			</div>
		</>
	);
};

export default PolarPlot;
