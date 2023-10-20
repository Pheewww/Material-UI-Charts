import * as React from "react";
import { createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Typrography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import { LiaPenNibSolid } from "react-icons/lia";
import { BsClockHistory } from "react-icons/bs";
import { BiInfoCircle } from "react-icons/bi";
import Container from "@mui/material/Container";
import { Block } from "@material-ui/icons";

const cards = [
	{
		title: "Waiting for me",
		icon: <LiaPenNibSolid />,
		color: "#e5e1ee",
		data: ["hello", "hello"],
		count: 0,
	},
	{
		title: "Waiting for others",
		icon: <BsClockHistory />,
		color: "#dffdff",
		data: ["hello", "hello"],
		count: 0,
	},
	{
		title: "Needs Attention",
		icon: <BiInfoCircle />,
		color: "#f08cae",
		data: ["hello", "hello"],
		count: 0,
	},
	{
		title: "Recently Revoked,Declined and Completed",
		// icon: <BiInfoCircle />,
		color: "#68edc6",
		data: ["hello", "hello"],
		count: 0,
	},
	{
		title: "Documents(Total)",
		// icon: <BiInfoCircle />,
		color: "#90bede",
		data: [],
		count: 0,
	},
];

export default function Pricing() {
	return (
		<Container maxWidth="md" component="main">
			<Grid container spacing={10} alignItems="flex-end">
				{cards.map((card) => (
					// Enterprise card is full width at sm breakpoint
					<Grid item key={card.title} xs={12} sm={6} md={4}>
						<Card
							style={{
								height: "400px",
								width: "300px",
								border: `0.5px solid grey`,
							}}
						>
							<Box
								sx={{
									paddingX: "10px",
									paddingY: "5px",
									height: "40px",
									backgroundColor: card.color,
									borderBottom: `1px solid black`,
									fontSize: "100%",
									fontWeight: "bold",
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between",
								}}
							>
								<Box
									sx={{
										display: "flex", // Create a nested flex container
										alignItems: "center", // Center vertically
										gap: "5px", // Add some space between icon and title
									}}
								>
									{card.icon} {card.title}
								</Box>
								<Box>{card.count}</Box>
							</Box>

							<CardContent>
								<Box
									sx={{
										display: "flex",
										justifyContent: "center",
										alignItems: "baseline",
										mb: 2,
									}}
								>
									{card.data.length === 0
										? "Nothing to show"
										: card.data.map((d) => <Typrography>{d}</Typrography>)}
								</Box>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</Container>
	);
}
