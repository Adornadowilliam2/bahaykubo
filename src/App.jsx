import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Box, Divider, Typography } from "@mui/material";
import photo from "./media/landingpage.jpg";
function App() {
  return (
    <>
      <Typography variant="h1">Bahay Kubo</Typography>
      <Divider />
      <img src={photo} alt="My Image" />
      <Typography className="title">Bahay Kubo</Typography>
      <Typography className="lyrics">
        Bahay-kubo, kahit munti Ang halaman doon ay sari-sari Singkamas at
        talong Sigarilyas at mani Sitaw, bataw, patani Kundol, patola, upo't
        kalabasa At tsaka mayro'n pang Labanos, mustasa Sibuyas, kamatis, bawang
        at luya Sa paligid-ligid ay puno ng linga.
      </Typography>
      <Box>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/4EY4Gc0poMw"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Box>
    </>
  );
}

export default App;
