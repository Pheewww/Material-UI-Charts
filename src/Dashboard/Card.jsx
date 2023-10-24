import React from "react";
import Boxes from "./Boxes";
import { Box, Typography } from "@mui/material";


function Card_Component() {
    const boxStyle = {
      backgroundColor: "#890EF2",
      width: "650px",
      height: "250px",
      borderRadius: "7px",
      padding: "20px", // Add padding to the main box
      color: "#ffffff", // White text color
    };


  return (
    <Box style={boxStyle}>
      <Typography variant="h5" fontWeight="bold">Today Summary</Typography>
      <Typography> Heres a quick summary of top modules</Typography>
      <Boxes />
    </Box>
  );
}

export default Card_Component;
