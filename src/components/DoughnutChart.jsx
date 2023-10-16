import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
	const data = {
		labels: ["Youtube", "Whatsapp", "Instagram", "Netflix", "Chrome", "Other"],
		datasets: [
			{
				label: "Daily App Usage Stats",
				data: [4, 2, 1.5, 4, 1.5, 11],
				backgroundColor: [
					"#da1e28",
					"#3ddbd9",
					"#004144",
					"#0072c3",
					"#6929c4",
					"#570408",
				],
				borderColor: [
					"#da1e28",
					"#3ddbd9",
					"#004144",
					"#0072c3",
					"#6929c4",
					"#570408",
				],
			},
		],
	};
	const options = {};
	return (
		<>
			<div className="plot">
				<h1>Doughnut Chart</h1>
				<Doughnut data={data} options={options}></Doughnut>
			</div>
		</>
	);
};

export default DoughnutChart;
