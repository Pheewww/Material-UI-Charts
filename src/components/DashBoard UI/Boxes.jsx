import React from "react";
import { MdEditDocument } from "react-icons/md";
import { RiBallPenFill } from "react-icons/ri";
import { HiBuildingStorefront } from "react-icons/hi2";
import { Box, Typography } from "@mui/material";

function Boxes() {
	const cards = [
		{
			symbol: (
				<MdEditDocument
					style={{
						borderRadius: "100%",
						padding: "12px",
						backgroundColor: "#F76F75",
					}}
				/>
			),
			count: 10,
			title: "Documents",
			Status: "+5% from yesterday",
		},
		{
			symbol: (
				<HiBuildingStorefront
					style={{
						borderRadius: "100%",
						padding: "12px",
						backgroundColor: "#C58BEF",
					}}
				/>
			),
			count: 5,
			title: "Templates",
			Status: "+5% from yesterday",
		},
		{
			symbol: (
				<RiBallPenFill
					style={{
						borderRadius: "100%",
						padding: "12px",
						backgroundColor: "#91DE97",
					}}
				/>
			),
			count: 7,
			title: "Bulk ESign",
			Status: "+5% from yesterday",
		},
	];

	const MainboxStyle = {
		display: "flex",
		justifyContent: "space-around",
		color: "black",
	};
	const innerBoxStyle = {
		backgroundColor: "#ffffff", // White color
		width: "200px",
		height: "200px",
		borderRadius: "7px",
		marginTop: "20px", // Margin between inner boxes
		padding: "10px",
		display: "inline-block", // Display inner boxes inline
	};
	const countStyle = {
		fontSize: "2rem",
		fontWeight: "bold",
		marginBottom: "10px",
	};
	const titleStyle = {
		fontSize: "1.5rem",
		marginBottom: "10px",
	};

	return (
		<Box style={MainboxStyle}>
			{cards.map((card, index) => (
				<Box
					key={index}
					style={innerBoxStyle}
					alignItems="center"
					justifyContent="center"
				>
					<Typography style={countStyle}>
						{card.symbol} +{card.count}
					</Typography>
					<Typography style={titleStyle}>{card.title}</Typography>
					<Typography>{card.Status}</Typography>
				</Box>
			))}
		</Box>
	);
}

export default Boxes;
