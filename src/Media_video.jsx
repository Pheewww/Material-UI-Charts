//import React from "react";
import Card from "@mui/material/Card";

const VideoCard = () => {
  return (
    <Card
      component="li"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minWidth: 300,
        minHeight: 200,
        flexGrow: 1,
        border: "2px solid #000",
      }}
    >
      <video
        alt="Video"
        height="170"
        controls
        style={{ maxWidth: "100%" }} // Ensure the video doesn't overflow the card
      >
        <source
          src="https://assets.codepen.io/6093409/river.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </Card>
  );
};

export default VideoCard;
