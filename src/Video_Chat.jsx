//import React from "react";

import VideoCard from "./Media_video"; // Assuming MediaCard is in the same directory
import Box from "@mui/material/Box";

const VideoArray = () => {
  // Create an array of MediaCard components
  //   const cardArray = Array(3).fill(<VideoCard />);
  const cardCount = 3;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {Array.from({ length: cardCount }).map((_, index) => (
        <VideoCard key={index} />
      ))}
    </Box>
  );


};




export default VideoArray;
