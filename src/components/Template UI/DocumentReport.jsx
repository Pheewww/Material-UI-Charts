import React from "react";
import Typography from "@mui/material/Typography";
import DoughnutChart from "./DougnutChart";
import { Box, Button, Stack } from "@mui/material";
import Cards from "./Cards";

const DocumentReport = () => {
	return (
		<Box style={{ width: "100%" }}>
			<Box className="heading">
				<Typography fontSize="20px" paddingTop={4}>
					Template Report
				</Typography>
			</Box>
			<Box>
				<Box backgroundColor="rgb(228, 228, 228)" padding={4}>
					<Stack
						direction={"row"}
						spacing={2}
						sx={{
							display: "inline-block",
							borderRadius: "5px",
							padding: "10px",
							margin: "10px",
							backgroundColor: "white",
						}}
					>
						<Button variant="outlined" sx={{ width: "120px" }}>
							Today
						</Button>
						<Button variant="outlined" sx={{ width: "120px" }}>
							Yesterday
						</Button>
						<Button variant="outlined" sx={{ width: "120px" }}>
							Week
						</Button>
						<Button variant="outlined" sx={{ width: "120px" }}>
							Month
						</Button>
					</Stack>
					<Box display={"flex"}>
						<Box
							sx={{
								padding: "10px",
								backgroundColor: "white",
							}}
							height={"55vh"}
							width={"65vw"}
						>
							<Typography align={"center"}>Top 5 Templates</Typography>
							<Box
								sx={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									height: "50vh",
									padding: "4px",
								}}
							>
								<DoughnutChart />
							</Box>
						</Box>
						<Cards />
					</Box>
				</Box>

				<Box
					display="flex"
					backgroundColor="rgb(228, 228, 228)"
					paddingBottom={4}
					paddingX={4}
				></Box>
			</Box>
		</Box>
	);
};

export default DocumentReport;
