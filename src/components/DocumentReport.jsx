import React from "react";
import Typography from "@mui/material/Typography";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Box } from "@mui/material";
import Card from "./Cards";
import ChartUi from "./ChartUi";
import AreaChart from "./AreaChart";

const DocumentReport = () => {
	return (
		<Box style={{ width: "100%" }}>
			<Box className="heading">
				<Typography fontSize="20px" paddingTop={4}>
					Document Report
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

			<Box>
				<Box display="flex" backgroundColor="rgb(228, 228, 228)" padding={4}>
					<AreaChart />
					<Card />
				</Box>

				<Box display="flex" backgroundColor="rgb(228, 228, 228)" paddingBottom={4} paddingX={4}>
					<ChartUi />
				</Box>
			</Box>
		</Box>
	);
};

export default DocumentReport;
