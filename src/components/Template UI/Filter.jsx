import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

const filter = [
	{
		title: "Timeframe:",
		values: ["All-time"],
	},
	{
		title: "Source:",
		values: ["All"],
	},
	{
		title: "Medium:",
		values: ["All"],
	},
];

const Filter = () => {
	return (
		<>
			<Box margin={"10px"} display={"flex"} bgcolor={"rgb(228, 228, 228)"}>
				{filter.map((item) => (
					<Box
						sx={{
							marginY: "10px",
							marginX: "1%",
							paddingY: "0.5%",
							paddingX: "2.5%",
							width: "10%",
							backgroundColor: "white",
							borderRadius: "35px",
							display: "flex",
							alignItems: "center",

						}}
					>
						<Typography>{item.title}</Typography>
						<FormControl fullWidth>
							<NativeSelect
								defaultValue={30}
								inputProps={{
									name: item.title,
								}}
							>
								{item.values.map((val) => (
									<option value={val}>{val}</option>
								))}
							</NativeSelect>
						</FormControl>
					</Box>
				))}
			</Box>
		</>
	);
};

export default Filter;
