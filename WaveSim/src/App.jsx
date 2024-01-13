import React from "react";
import styled from "styled-components";

import { useState } from "react";
import ButtonAppBar from "./AppBar";
import Muiresponsive from "./Muiresponsive";
import "./App.css";
import { Box } from "@mui/material";
import bgimg from "./assets/bgimg.jpg";

const ResponsiveText = styled.p`
  font-size: 16px;

  @media only screen and (max-width: 600px) {
    font-size: 14px;
  }
`;



function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
    <div>
      <ButtonAppBar wrap="true" />
    </div>
      <br/>
      <br/>
      <div style={{opacity:0.1, objectFit:"cover"}}>
          <img src={bgimg}  width={"1600"} height={"800"} />
        </div>
    </div>
  );
}

export default App;
