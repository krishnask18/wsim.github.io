import React from "react";
import styled from "styled-components";
import Cardcomp from "./Cardcomp";
import { useState } from "react";
import ButtonAppBar from "./AppBar";
import Muiresponsive from "./Muiresponsive";
import "./App.css";
import { Box, Typography } from "@mui/material";
import bgimg from "./assets/bgimg.jpg";
import MyComponent from "./Muiresponsive";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <ButtonAppBar wrap="true" />
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div>
          <Cardcomp
            bgim="linear-gradient(to bottom right,rgba(79, 112, 65, 0.8), rgba(63, 87, 54, 0.8)),url(https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/201201/20120126114103-0_0.jpg)"
            title="Continuous Time Signals"
          />
        </div>
        <div style={{transform:"translate(60px, 0px)"}}>
          <Cardcomp
            bgim="linear-gradient(to bottom right,rgba(15, 126, 94, 0.8), rgba(15, 126, 94, 0.8)),url(../src/assets/DT_bgi.jpg)"
            title="Discrete Time Signals"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
