import React from "react";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { IoPersonSharp } from "react-icons/io5";
import { MdDiscount } from "react-icons/md";
import { LiaDollarSignSolid } from "react-icons/lia";

const cardData = [
	{
		title: "Users",
		value: 3200,
		icon: <IoPersonSharp />,
	},
	{
		title: "Tickets",
		value: 1300,
		icon: <MdDiscount />,
	},
	{
		title: "Income",
		value: 8400,
		icon: <LiaDollarSignSolid />,
	},
];

const Cards = () => {
	return (
		<Box display="flex" flexDirection="column">
			{cardData.map((card, index) => (
				<Card
					key={index}
					sx={{
						display: "flex",
						width: "100%",
						height: "100%",
						margin: "12px",
						marginLeft: "25%",
						alignItems: "center",
						justifyItems: "center",
						paddingLeft: "30px",
					}}
				>
					{/* icon */}
					<Box className="icon">{card.icon}</Box>
					{/* content */}
					<Box paddingLeft={5}>
						<CardContent>
							<Typography variant="h5" component="div" textAlign="left">
								{card.value}
							</Typography>
							<Typography component="div" variant="h7" textAlign="left">
								{card.title}
							</Typography>
						</CardContent>
					</Box>
				</Card>
			))}
		</Box>
	);
};

export default Cards;
