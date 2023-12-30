import "./App.css";
// import DocumentReport from "./components/Template UI/DocumentReport";
// import SignDashboard from "./components/DashBoard UI/SignDashboard";
// import HeatCalender from "./components/DashBoard UI/Heatmap";
// import ChartComponent from "./components/DashBoard UI/Chart_component";
// import { Divider } from "@mui/material";
import ContractDashboard from "./components/Contracts UI/ContractDashboard";
//import Fetch from "./dyte/Fetch";

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
        {/* <DocumentReport /> */}

        <ContractDashboard/>

        {/* <Fetch /> */}
      </div>
    </>
  );
}

export default App;
