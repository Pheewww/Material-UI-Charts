import React from "react";
import {
  Doughnut,
  Line,
  Bar,
  PolarArea,
  Bubble,
  Radar,
  Pie,
} from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const FollowerGrowthChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Followers",
        data: [1000, 1200, 1400, 1600, 1100, 2000],
        backgroundColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 99, 132, 1)", // Red
          "rgba(54, 162, 235, 1)", // Blue
          "rgba(255, 206, 86, 1)", // Yellow
          "rgba(153, 102, 255, 1)", // Purple
          "rgba(204, 0, 0, 1)", // Dark Red
        ],
        borderColor: "black",
        borderWidth: 2,
      },
      {
        label: "Following",
        data: [400, 720, 940, 1060, 1090, 1400],
        backgroundColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 99, 132, 1)", // Red
          "rgba(54, 162, 235, 1)", // Blue
          "rgba(255, 206, 86, 1)", // Yellow
          "rgba(153, 102, 255, 1)", // Purple
          "rgba(204, 0, 0, 1)", // Dark Red
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };

  const chartContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  };

  const chartStyle = {
    width: "400px",
    margin: "10px",
  };

  return (
    <div>
      <h2>Followers And Followings Growth In Months For an Instagram User</h2>
      <div style={chartContainerStyle}>
        <div style={chartStyle}>
          <h3>Doughnut Chart</h3>
          <Doughnut data={data} />
        </div>
        <div style={chartStyle}>
          <h3>Pie Chart</h3>
          <Pie data={data} />
        </div>
        <div style={chartStyle}>
          <h3>Bar Chart</h3>
          <Bar data={data} />
        </div>
        <div style={chartStyle}>
          <h3>Polar Area Chart</h3>
          <PolarArea data={data} />
        </div>
        <div style={chartStyle}>
          <h3>Radar Chart</h3>
          <Radar data={data} />
        </div>
        <div style={chartStyle}>
          <h3>Line Chart</h3>
          <Line data={data} />
        </div>
      </div>
    </div>
  );
};

export default FollowerGrowthChart;
