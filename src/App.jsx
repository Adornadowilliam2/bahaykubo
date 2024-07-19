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
        at luya Sa paligid-ligid ay puno ng linga Bahay-kubo kahit munti Ay
        matibay at tunay nating yaman Bahay-kubo, kahit munti Matatawag nating
        tahanan Haa-ah, la-la-la-la, la-la-la-la Ohh Bahay-kubo, kahit munti Ang
        halaman doon ay sari-sari Pag-ibig at galak Kagandahan ng loob At
        pagpapahinuhog Kapayapaan, pang-unawang matapat At tsaka mayro'n pang
        Kabutihang yakap Kahinahunan Matimpi sa t'wina Sa paligid-ligid may
        pagkakaisa Haa-ah, ta-la-la-la, ta-la-la-la-la
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
