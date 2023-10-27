import React from "react";
import { Box, Grid } from "@mui/material";
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
		<Box display="flex" flexDirection="column">
			<Box display={"flex"}>
				{cardData1.map((card, index) => (
					<Card
						key={index}
						sx={{
							display: "flex",
							width: "100%",
							height: "100%",
							margin: "12px",
							marginLeft: "5%",
							alignItems: "center",
							justifyItems: "center",
							paddingLeft: "30px",
						}}
					>
						{/* content */}
						<Box justifyContent={"center"}>
							<CardContent>
								<Typography component="div" variant="h6" textAlign="left">
									{card.title}
								</Typography>
								<Typography variant="h5" component="div" textAlign="left">
									{card.value}
								</Typography>
							</CardContent>
						</Box>
					</Card>
				))}
			</Box>
			<Box display={"flex"} marginTop={"10%"}>
				{cardData1.map((card, index) => (
					<Card
						key={index}
						sx={{
							display: "flex",
							width: "100%",
							height: "100%",
							margin: "12px",
							marginLeft: "5%",
							alignItems: "center",
							justifyItems: "center",
							paddingLeft: "30px",
						}}
					>
						{/* content */}
						<Box justifyContent={"center"}>
							<CardContent>
								<Typography component="div" variant="h6" textAlign="left">
									{card.title}
								</Typography>
								<Typography variant="h5" component="div" textAlign="left">
									{card.value}
								</Typography>
							</CardContent>
						</Box>
					</Card>
				))}
			</Box>
		</Box>
		// <Grid container spacing={8}>
		// 	{cardData.map((card, index) => (
		// 		<Grid item key={index} xs={12} md={6}>
		// 			<Card
		// 				sx={{
		// 					display: "flex",
		// 					width: "50%",
		// 					height: "100%",
		// 					margin: "12px",
		// 					marginLeft: "10%",
		// 					alignItems: "center",
		// 					paddingX: "30px",
		// 				}}
		// 			>
		// 				<CardContent>
		// 					<Typography variant="h6">{card.title}</Typography>
		// 					<Typography variant="h4" alignItems={"center"}>
		// 						{card.value}
		// 					</Typography>
		// 				</CardContent>
		// 			</Card>
		// 		</Grid>
		// 	))}
		// </Grid>
	);
};

export default Cards;
