import React from "react";
import styled from "styled-components";
import Cardcomp from "./Cardcomp";
import { useState } from "react";
import ButtonAppBar from "./AppBar";
import Muiresponsive from "./Muiresponsive";
import "./App.css";
import "./index.css";
import { Box, Typography } from "@mui/material";
import bgimg from "./assets/bgimg.jpg";
import MyComponent from "./Muiresponsive";
import CombinedAll from "./Combined";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
        <CombinedAll/>
    </div>
          
  );
}

export default App;
