import React from "react";
import styled from "styled-components";
import Cardcomp from "./Cardcomp";
import { useState } from "react";
import ButtonAppBar from "./AppBar";
import Muiresponsive from "./Muiresponsive";
import "./App.css";
import { Box } from "@mui/material";
import bgimg from "./assets/bgimg.jpg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>
        <ButtonAppBar wrap="true" />
      </div>
        <Cardcomp />
    </div>
  );
}

export default App;
