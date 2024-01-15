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
        <Cardcomp />
        
      </div>
    </div>
  );
}

export default App;
