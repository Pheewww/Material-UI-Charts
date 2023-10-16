import "./App.css";
import React from "react";
import BarChart from "./components/BarChart";
import DoughnutChart from "./components/DoughnutChart";
import LineChart from "./components/LineChart";
import RadarChart from "./components/RadarChart";
import PolarPlot from "./components/PolarPlot";
import AuditTable from "./components/AuditTable";

const App = () => {
	return (
		<>
			{/* <div className="charts">
				<BarChart />
				<DoughnutChart />
			</div>
			<div className="charts">
				<RadarChart />
				<LineChart />
			</div>
			<div className="charts">
				<PolarPlot />
			</div> */}
			<br/>
			<AuditTable />
		</>
	);
};

export default App;
