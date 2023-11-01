import React from "react";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const cardData1 = [
	{
		title: "Total Created",
		value: "25K",
	},
	{
		title: "Most Used Template",
		value: "Template 1",
	},
];
const cardData2 = [
	{
		title: "Total New User",
		value: "8,400",
	},
	{
		title: "Total New User",
		value: "Name of User",
	},
];

const Cards = () => {
	return (
		<Grid container spacing={3} sx={{ height: "100%"}} >
			{cardData1.map((card, index) => (
				<Grid item key={index} xs={12} sm={6} sx={{ height: "48%" }}>
					<Card
						sx={{
							display: "flex",
							height: "100%",
							alignItems: "center",
							padding: "12px",
							justifyContent: "center",
						}}
					>
						<CardContent>
							<Typography variant="h6" textAlign="left">
								{card.title}
							</Typography>
							<Typography variant="h5" textAlign="left">
								{card.value}
							</Typography>
						</CardContent>
					</Card>
				</Grid>
			))}
			{cardData2.map((card, index) => (
				<Grid item key={index} xs={12} sm={6} sx={{ height: "48%" }}>
					<Card
						sx={{
							display: "flex",
							height: "100%",
							alignItems: "center",
							padding: "12px",
							justifyContent: "center",
						}}
					>
						<CardContent>
							<Typography variant="h6" textAlign="left">
								{card.title}
							</Typography>
							<Typography variant="h5" textAlign="left">
								{card.value}
							</Typography>
						</CardContent>
					</Card>
				</Grid>
			))}
		</Grid>
	);
};

export default Cards;
