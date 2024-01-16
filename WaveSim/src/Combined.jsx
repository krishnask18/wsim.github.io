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

function CombinedAll() {
  return (
    <div>
      
      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        <div onClick={()=>{
          window.location="/continuousTime";
        }}>
          <Cardcomp 
            bgim="linear-gradient(to bottom,rgba(79, 112, 65, 1), rgba(63, 87, 54, 0.5)),url(../src/assets/CT_bgi.jpg)"
            title="Continuous Time Signals"
            description={
              <div>
                <div>
                  {"\u25CF"} Tools for computation and visualisation of vaious
                  domain transformations for<br></br>continuous time signals
                </div>
                <div>
                  {"\u25CF"} Animations of convolution custom signals
                </div>
              </div>
            }
          />
        </div>
        <div>
          <Cardcomp
            bgim="linear-gradient(to bottom,rgba(15, 126, 94, 1), rgba(15, 126, 94, 0.5)),url(../src/assets/DT_bgi.jpg)"
            title="Discrete Time Signals"
          />
        </div>
      </div>
    </div>
  );
}
export default CombinedAll;
