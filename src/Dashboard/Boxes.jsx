import React from 'react'
import { Box, Typography } from "@mui/material";

function Boxes() {

    const MainboxStyle = {
        display: "flex",
      justifyContent:   "space-around",
    };

    
    const innerBoxStyle = {
      backgroundColor: "#ffffff", // White color
      width: "150px",
      height: "150px",
      borderRadius: "7px",
      marginTop: "40px", // Margin between inner boxes
      display: "inline-block", // Display inner boxes inline
    };
  return (
    <Box style={MainboxStyle} >
      <Box style={innerBoxStyle}></Box>
      <Box style={innerBoxStyle}></Box>
      <Box style={innerBoxStyle}></Box>
    </Box>
  );
}

export default Boxes