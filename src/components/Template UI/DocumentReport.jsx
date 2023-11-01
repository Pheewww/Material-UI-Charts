import React from "react";
import { Typography, Grid, Box } from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import DoughnutChart from "./DoughnutChart";
import Cards from "./Cards";
import Filter from "./Filter";
import BarChart from "./BarChart";

const DocumentReport = () => {
	return (
		<Box style={{ width: "100%" }}>
			<Box className="heading">
				<Typography fontSize="20px" paddingTop={4}>
					Template Report
				</Typography>
				{/* Calenders */}
				<Box className="calenders">
					{/* Start Date */}
					<Box className="calender" width="40%">
						<LocalizationProvider dateAdapter={AdapterDayjs}>
							<DemoContainer components={["DatePicker"]}>
								<DatePicker label="Start Date" format="YYYY-MM-DD" />
							</DemoContainer>
						</LocalizationProvider>
					</Box>
					{/* End Date */}
					<Box className="calender" width="40%">
						<LocalizationProvider dateAdapter={AdapterDayjs}>
							<DemoContainer components={["DatePicker"]}>
								<DatePicker label="End Date" format="YYYY-MM-DD" />
							</DemoContainer>
						</LocalizationProvider>
					</Box>
				</Box>
			</Box>
			<Box backgroundColor="rgb(228, 228, 228)" padding={4}>
				<Grid container spacing={3}>
					{/* Top 5 Templates */}
					<Grid item xs={12} sm={8} borderRadius={"5px"}>
						<Box
							sx={{
								backgroundColor: "white",
								height: "55vh",
								width: "100%",
								paddingTop: "10px",
							}}
						>
							<Typography align={"center"}>Top 5 Templates</Typography>
							<Box
								sx={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									height: "50vh",
								}}
							>
								<DoughnutChart />
							</Box>
						</Box>
					</Grid>

					{/* Cards */}
					<Grid item xs={12} sm={4}>
						<Cards />
					</Grid>
				</Grid>

				{/* Filter */}
				<Filter />

				{/* BarChart */}
				<Box
					sx={{
						display: "inline-block",
						borderRadius: "5px",
						padding: "10px",
						backgroundColor: "white",
					}}
				>
					<BarChart />
				</Box>
			</Box>
		</Box>
	);
};
export default DocumentReport;
