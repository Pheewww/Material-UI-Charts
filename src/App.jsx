import "./App.css";
import DocumentReport from "./components/Template UI/DocumentReport";
import SignDashboard from "./components/DashBoard UI/SignDashboard";
import HeatCalender from "./components/DashBoard UI/Heatmap";
import ChartComponent from "./components/DashBoard UI/Chart_component";
import { Divider } from "@mui/material";

function App() {
	return (
		<>
			{/* Your components, including ChartComponent and PieChart */}
			<div>
				{/* <ChartComponent />
				<Divider variant="middle" />
				<HeatCalender />
				<Divider variant="middle" />
				<SignDashboard />
				<Divider variant="middle" /> */}
				<DocumentReport />
			</div>
		</>
	);
}

export default App;
