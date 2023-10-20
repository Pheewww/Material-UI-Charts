import { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
// import { useState } from "react";

// import "react-date-range/dist/styles.css"; // main style file
// import "react-date-range/dist/theme/default.css"; // theme css file
// import { DateRangePicker } from "react-date-range";
// import Skeleton from "@mui/material/Skeleton";
// import { Pie } from "react-chartjs-2";
// import { Chart as ChartJS, Legend } from "chart.js";
// import PropTypes from "prop-types";

// ChartJS.register(Legend);

// const Dashboard = ({ isLoading }) => {
//   const [selectedDateRange, setSelectedDateRange] = useState({
//     startDate: new Date(),
//     endDate: new Date(),
//     key: "selection",
//   });

//   const [filteredData, setFilteredData] = useState([]);

//   const chartData = {
//     labels: ["Decline", "Reassign", "Sign"],
//     datasets: [
//       {
//         label: "Documents",
//         data: [
//           {
//             date: "2023-10-01",
//             decline: 10,
//             reassign: 5,
//             sign: 30,
//           },
//           {
//             date: "2023-10-02",
//             decline: 8,
//             reassign: 4,
//             sign: 25,
//           },
//           {
//             date: "2023-10-03",
//             decline: 12,
//             reassign: 3,
//             sign: 35,
//           },
//         ],
//         backgroundColor: [
//           "rgba(255, 99, 132, 1)", // Red
//           "rgba(54, 162, 235, 1)", // Blue
//           "rgba(255, 206, 86, 1)", // Yellow
//         ],
//         borderColor: "black",
//         borderWidth: 2,
//       },
//     ],
//   };

//   const filterData = (dateRange) => {
//     // Filter the data based on the selected date range
//     const filtered = chartData.datasets[0].data.filter((item) => {
//       const itemDate = new Date(item.date);
//       const startDate = dateRange.startDate;
//       const endDate = dateRange.endDate;

//       return itemDate >= startDate && itemDate <= endDate;
//     });

//     setFilteredData(filtered);
//   };

//   const chartStyle = {
//     width: "400px",
//     margin: "10px",
//   };

//   return (
//     <div>
//       <h2>Analytics for Documents reassigned, decline etc</h2>
//       <DateRangePicker
//         editableDateInputs={true}
//         onChange={(ranges) => setSelectedDateRange(ranges.selection)}
//         moveRangeOnFirstSelection={false}
//         ranges={[selectedDateRange]}
//       />
//       <button onClick={() => filterData(selectedDateRange)}>
//         Apply Filters
//       </button>
//       <div style={chartStyle}>
//         <h3>Pie Chart</h3>
//         {isLoading ? (
//           <Skeleton variant="rect" width={300} height={300} animation="wave" />
//         ) : (
//           <Pie data={filteredData} />
//         )}
//       </div>
//     </div>
//   );
// };

// PieChart.propTypes = {
//   isLoading: PropTypes.bool.isRequired, // Add prop type validation
// };

// export default Dashboard;

const Dashboard = () => {
  const sampleData = [
    { date: "2023-10-01", reassign: 10, decline: 5, sign: 30 },
    { date: "2023-10-02", reassign: 8, decline: 4, sign: 25 },
    { date: "2023-10-03", reassign: 18, decline: 14, sign: 27 },
    { date: "2023-10-04", reassign: 28, decline: 24, sign: 35 },
    { date: "2023-10-05", reassign: 38, decline: 42, sign: 20 },
    { date: "2023-10-06", reassign: 7, decline: 31, sign: 21 },
    { date: "2023-10-07", reassign: 27, decline: 24, sign: 29 },
    // Add more data f
  ];

  const [data, setData] = useState(sampleData);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const filterData = () => {
    if (!startDate || !endDate) {
      // If either start date or end date is missing, do not filter
      return;
    }

    const filteredData = sampleData.filter((item) => {
      const itemDate = new Date(item.date);
      const filterStartDate = new Date(startDate);
      const filterEndDate = new Date(endDate);

      return itemDate >= filterStartDate && itemDate <= filterEndDate;
    });

    setData(filteredData);
  };

  // Implement chart configuration based on the 'data' received
  const chartData = {
    labels: ["Reassign", "Decline", "Sign"],
    datasets: [
      {
        label: "Document Data",
        data: [
          data.reduce((total, item) => total + item.reassign, 0),
          data.reduce((total, item) => total + item.decline, 0),
          data.reduce((total, item) => total + item.sign, 0),
        ],
        backgroundColor: ["#FF5733", "#337DFF", "#33FF42"],
      },
    ],
  };

  const isDataEmpty = data.length === 0; // Check if data is empty

  return (
    <div>
      <h1>Analytics Dashboard</h1>

      <div>
        <label>Start Date:</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>

      <div>
        <label>End Date:</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>

      <button onClick={filterData}>Apply Filters</button>
      <h2>Document Statistics</h2>

      {/* Conditionally render content based on whether data is empty or not */}
      {isDataEmpty ? (
        <p>No data available. Please check your filters.</p>
      ) : (
        <Pie data={chartData} />
      )}
    </div>
  );
};

export default Dashboard;
