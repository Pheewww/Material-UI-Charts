import { useState } from "react";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import Skeleton from "@mui/material/Skeleton";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js";
import PropTypes from "prop-types";

// ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend);

const PieChart = ({ isLoading }) => {
  const [selectedDateRange, setSelectedDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const [filteredData, setFilteredData] = useState([]);

  const chartData = {
    labels: ["Decline", "Reassign", "Sign"],
    datasets: [
      {
        label: "Documents",
        data: [
          {
            date: "2023-10-01",
            decline: 10,
            reassign: 5,
            sign: 30,
          },
          {
            date: "2023-10-02",
            decline: 8,
            reassign: 4,
            sign: 25,
          },
          {
            date: "2023-10-03",
            decline: 12,
            reassign: 3,
            sign: 35,
          },
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 1)", // Red
          "rgba(54, 162, 235, 1)", // Blue
          "rgba(255, 206, 86, 1)", // Yellow
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };

  const filterData = (dateRange) => {
    // Filter the data based on the selected date range
    const filtered = chartData.datasets[0].data.filter((item) => {
      const itemDate = new Date(item.date);
      const startDate = dateRange.startDate;
      const endDate = dateRange.endDate;

      return itemDate >= startDate && itemDate <= endDate;
    });

    setFilteredData(filtered);
  };

  const chartStyle = {
    width: "400px",
    margin: "10px",
  };

  return (
    <div>
      <h2>Analytics for Documents reassigned, decline etc</h2>
      <DateRangePicker
        editableDateInputs={true}
        onChange={(ranges) => setSelectedDateRange(ranges.selection)}
        moveRangeOnFirstSelection={false}
        ranges={[selectedDateRange]}
      />
      <button onClick={() => filterData(selectedDateRange)}>
        Apply Filters
      </button>
      <div style={chartStyle}>
        <h3>Pie Chart</h3>
        {isLoading ? (
          <Skeleton variant="rect" width={300} height={300} animation="wave" />
        ) : (
          <Pie data={filteredData} />
        )}
      </div>
    </div>
  );
};

PieChart.propTypes = {
  isLoading: PropTypes.bool.isRequired, // Add prop type validation
};

export default PieChart;
