import { useState } from "react";
import * as React from "react";
import { createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { LiaPenNibSolid } from "react-icons/lia";
import { FiClock, FiArrowUpRight } from "react-icons/fi";
import { FaRegCheckCircle } from "react-icons/fa";
import { FcCancel } from "react-icons/fc";
import { BiInfoCircle, BiMinusCircle } from "react-icons/bi";
import Container from "@mui/material/Container";
import { Typography } from "@material-ui/core";
import Pagination from "./Pagination";

const cards = [
	{
		title: "Waiting for me",
		icon: <LiaPenNibSolid />,
		color: "#e3d3ff",
		data: [
			{
				title: "llp-Agreement",
				Name: ["Theo Horton", "Bailey"],
				Desciption: "To:",
				symbol: <FiArrowUpRight />,
			},
			{
				title: "Business-Proposal",
				Name: ["Pansy Meyer", "Hanley Kelley"],
				Desciption: "To:",
				symbol: <FiArrowUpRight />,
			},
			{
				title: "Confidentiality-Agreement",
				Name: ["Lissa Ogley", "Will Lucas"],
				Desciption: "To:",
				symbol: <FiArrowUpRight />,
			},
			{
				title: "draft-Consulting-Agreement",
				Name: ["Ulric Hoyles"],
				Desciption: "To:",
				symbol: <FiArrowUpRight />,
			},
		],
		colorText: "#6749B2",
		count: 5,
	},
	{
		title: "Needs Attention",
		icon: <BiInfoCircle />,
		color: "#FEFCBB",
		data: [
			{
				title: "Lease-Agreement",
				Name: [],
				Desciption: "You have failed the authentication",
				symbol: "",
			},
		],
		colorText: "#826D30",
		count: 1,
	},
	{
		title: "Recently Revoked,Declined and Completed",
		color: "#EFEEF4",
		data: [
			{
				title: "llp-Agreement",
				Name: ["Theo Horton", "Bailey"],
				Desciption: "To:",
				symbol: <FaRegCheckCircle color="green" />,
			},
			{
				title: "Business-Proposal",
				Name: ["Pansy Meyer", "Hanley Kelley"],
				Desciption: "To:",
				symbol: <BiMinusCircle color="red" />,
			},
			{
				title: "Confidentiality-Agreement",
				Name: ["Lissa Ogley", "Will Lucas"],
				Desciption: "To:",
				symbol: <FcCancel size="1.2rem" />,
			},
			{
				title: "draft-Consulting-Agreement",
				Name: ["Ulric Hoyles"],
				Desciption: "To:",
				symbol: <FaRegCheckCircle color="green" />,
			},
		],
		colorText: "#6749B2",
		// count: 0,
	},
	{
		title: "Waiting for others",
		icon: <FiClock />,
		color: "#DDF0FF",
		data: [
			{
				title: "llp-Agreement",
				Name: ["Theo Horton", "Bailey"],
				Desciption: "To:",
				symbol: <FiArrowUpRight />,
			},
			{
				title: "Business-Proposal",
				Name: ["Pansy Meyer", "Hanley Kelley"],
				Desciption: "To:",
				symbol: <FiArrowUpRight />,
			},
			{
				title: "Confidentiality-Agreement",
				Name: ["Lissa Ogley", "Will Lucas"],
				Desciption: "To:",
				symbol: <FiArrowUpRight />,
			},
			{
				title: "draft-Consulting-Agreement",
				Name: ["Ulric Hoyles"],
				Desciption: "To:",
				symbol: <FiArrowUpRight />,
			},
		],
		colorText: "#4179B3",
		count: 5,
	},
];

const SignDashboard = () => {
	const [selectedCard, setSelectedCard] = useState(null);

	return (
		<Container>
			<Typography>
				Here is a quick summary of your currently active documents...
			</Typography>
			<Grid container columnSpacing={25} marginTop="10px">
				{cards.map((card) => (
					// Enterprise card is full width at sm breakpoint
					<Grid item key={card.title} xs={12} sm={6} md={3}>
						<Card
							sx={{
								height: "480px",
								width: "320px",
								border: `0.5px solid lightgrey`,
								// overflow: "auto",
								":hover": {
									border: "2px solid #4C96D3", // Thick blue border on hover
								},
								":onFocus": {
									border: "3px solid #4C96D3", // Thick blue border when selected
								},
							}}
							className={selectedCard === card.title ? "selected-card" : ""}
							onClick={() => setSelectedCard(card.title)}
						>
							<Box
								sx={{
									paddingX: "20px",
									paddingY: "10px",
									height: "40px",
									backgroundColor: card.color,
									borderBottom: `0.5px solid lightgrey`,
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
									<Box sx={{ color: card.colorText, fontSize: "1.4rem" }}>
										{card.icon}
									</Box>
									{card.title}
								</Box>
								<Box sx={{ color: card.colorText, fontSize: "1.5rem" }}>
									{card.count}
								</Box>
							</Box>

							{/* Card Contents */}
							<Box
								sx={{
									display: "block",
									flexWrap: "wrap", // Add this property to wrap items to the next line
								}}
							>
								{card.data.length === 0
									? "Nothing to Show"
									: card.data.map((d, index) => (
											<List key={index}>
												<ListItem
													sx={{
														display: "block",
														borderBottom: `0.5px solid lightgrey`,
													}}
												>
													<ListItemText>{d.title}</ListItemText>
													<ListItemText sx={{ fontSize: "0.9rem" }}>
														{d.symbol} {d.Desciption}{" "}
														{d.Name.map((n, index) => (
															<span key={index}>
																{n}
																{index != d.Name.length - 1 ? ", " : ""}
															</span>
														))}
													</ListItemText>
												</ListItem>
											</List>
									  ))}
							</Box>
							{/* Card Contents */}
							{/* Render the Pagination component */}
							<Pagination
								dataLength={card.data.length} // Pass the data length as a prop
							/>
						</Card>
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

export default SignDashboard;
