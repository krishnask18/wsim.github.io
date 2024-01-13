import React from "react";
import styled from "styled-components";

import { useState } from "react";
import ButtonAppBar from "./AppBar";
import Muiresponsive from "./Muiresponsive";
import "./App.css";

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
      <ButtonAppBar wrap="true" />
    </div>
  );
}

export default App;
