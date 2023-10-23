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
		page: 0,
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
			{
				title: "draft-Consulting-Agreement",
				Name: ["Ulric Hoyles"],
				Desciption: "To:",
				symbol: <FiArrowUpRight />,
			},
			{
				title: "draft-Consulting-Agreement",
				Name: ["Ulric Hoyles"],
				Desciption: "To:",
				symbol: <FiArrowUpRight />,
			},
			{
				title: "draft-Consulting-Agreement",
				Name: ["Ulric Hoyles"],
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
		page: 1,
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
		page: 2,

		data: [
			{
				title: "Loan-Agreement",
				Name: ["Theo Horton", "Bailey"],
				Desciption: "Completed by",
				symbol: <FaRegCheckCircle color="green" />,
			},
			{
				title: "House-Keeping",
				Name: ["you"],
				Desciption: "Revoked by",
				symbol: <BiMinusCircle color="red" />,
			},
			{
				title: "Lease-Agreement",
				Name: ["you"],
				Desciption: "Declined by",
				symbol: <FcCancel size="1.2rem" />,
			},
			{
				title: "HOME SERVICES AGREEMENT",
				Name: ["Melinda Cress"],
				Desciption: "Completed by",
				symbol: <FaRegCheckCircle color="green" />,
			},
		],
		colorText: "#6749B2",
		// count: 0,
	},
	{
		title: "Waiting for others",
		icon: <FiClock />,
		page: 3,
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

	// Define state variables for pagination for each card
	const [waitingForMePage, setWaitingForMePage] = useState(0);
	const [waitingForMeRowsPerPage, setWaitingForMeRowsPerPage] = useState(4);

	const [needsAttentionPage, setNeedsAttentionPage] = useState(0);
	const [needsAttentionRowsPerPage, setNeedsAttentionRowsPerPage] = useState(4);

	const [recentlyRevokedPage, setRecentlyRevokedPage] = useState(0);
	const [recentlyRevokedRowsPerPage, setRecentlyRevokedRowsPerPage] =
		useState(4);

	const [waitingForOthersPage, setWaitingForOthersPage] = useState(0);
	const [waitingForOthersRowsPerPage, setWaitingForOthersRowsPerPage] =
		useState(4);

	const handleWaitingForMePageChange = (event, newPage) => {
		setWaitingForMePage(newPage);
	};

	const handleWaitingForMeRowsPerPageChange = (event) => {
		setWaitingForMeRowsPerPage(parseInt(event.target.value, 4));
		setWaitingForMePage(0);
	};

	const handleNeedsAttentionPageChange = (event, newPage) => {
		setNeedsAttentionPage(newPage);
	};

	const handleNeedsAttentionRowsPerPageChange = (event) => {
		setNeedsAttentionRowsPerPage(parseInt(event.target.value, 4));
		setNeedsAttentionPage(0);
	};

	const handleRecentlyRevokedPageChange = (event, newPage) => {
		setRecentlyRevokedPage(newPage);
	};

	const handleRecentlyRevokedRowsPerPageChange = (event) => {
		setRecentlyRevokedRowsPerPage(parseInt(event.target.value, 4));
		setRecentlyRevokedPage(0);
	};

	const handleWaitingForOthersPageChange = (event, newPage) => {
		setWaitingForOthersPage(newPage);
	};

	const handleWaitingForOthersRowsPerPageChange = (event) => {
		setWaitingForOthersRowsPerPage(parseInt(event.target.value, 4));
		setWaitingForOthersPage(0);
	};

	const page = [
		waitingForMePage,
		needsAttentionPage,
		recentlyRevokedPage,
		waitingForOthersPage,
	];
	const rowsPerPage = [
		waitingForMeRowsPerPage,
		needsAttentionRowsPerPage,
		recentlyRevokedRowsPerPage,
		waitingForOthersRowsPerPage,
	];
	return (
		<Container>
			<Typography>
				Here is a quick summary of your currently active documents...
			</Typography>
			<Grid container columnSpacing={25} rowSpacing={2} marginTop="10px">
				{cards.map((card) => (
					<Grid
						item
						key={card.title}
						xs={12}
						sm={6}
						md={4}
						lg={3}
						sx={{
							alignItems: "center",
						}}
					>
						<Card
							sx={{
								display: "flex",
								flexDirection: "column",
								height: "520px",
								width: "320px",
								border: `0.5px solid lightgrey`,
								":hover": {
									border: "2px solid #4C96D3",
								},
								"&.selected-card": {
									border: "2px solid #4C96D3",
								},
							}}
							className={selectedCard === card.title ? "selected-card" : ""}
							onClick={() => setSelectedCard(card.title)}
						>
							{/* Card Header */}
							<Box
								sx={{
									paddingX: "20px",
									paddingY: "10px",
									height: "50px",
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
										display: "flex",
										alignItems: "center",
										gap: "5px",
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
									flex: 1,
									overflowY: "hidden",
									flexWrap: "wrap",
								}}
							>
								{card.data
									.slice(
										page[card.page] * rowsPerPage[card.page],
										page[card.page] * rowsPerPage[card.page] +
											rowsPerPage[card.page]
									)
									.map((d, index) => (
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
															{index !== d.Name.length - 1 ? ", " : ""}
														</span>
													))}
												</ListItemText>
											</ListItem>
										</List>
									))}
							</Box>

							{/* Render the Pagination component at the bottom of each card */}
							{card.title === "Waiting for me" && (
								<Pagination
									count={card.data.length}
									page={waitingForMePage}
									rowsPerPage={waitingForMeRowsPerPage}
									onChangePage={handleWaitingForMePageChange}
									onChangeRowsPerPage={handleWaitingForMeRowsPerPageChange}
								/>
							)}
							{card.title === "Needs Attention" && (
								<Pagination
									count={card.data.length}
									page={needsAttentionPage}
									rowsPerPage={needsAttentionRowsPerPage}
									onChangePage={handleNeedsAttentionPageChange}
									onChangeRowsPerPage={handleNeedsAttentionRowsPerPageChange}
								/>
							)}
							{card.title === "Recently Revoked,Declined and Completed" && (
								<Pagination
									count={card.data.length}
									page={recentlyRevokedPage}
									rowsPerPage={recentlyRevokedRowsPerPage}
									onChangePage={handleRecentlyRevokedPageChange}
									onChangeRowsPerPage={handleRecentlyRevokedRowsPerPageChange}
								/>
							)}
							{card.title === "Waiting for others" && (
								<Pagination
									count={card.data.length}
									page={waitingForOthersPage}
									rowsPerPage={waitingForOthersRowsPerPage}
									onChangePage={handleWaitingForOthersPageChange}
									onChangeRowsPerPage={handleWaitingForOthersRowsPerPageChange}
								/>
							)}
						</Card>
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

export default SignDashboard;
