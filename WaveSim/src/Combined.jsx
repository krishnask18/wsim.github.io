import React from "react";
import styled from "styled-components";
import Cardcomp from "./Cardcomp";
import { useState } from "react";
import ButtonAppBar from "./AppBar";
import Muiresponsive from "./Muiresponsive";
import "./App.css";
import "./index.css";
import { Box, Typography } from "@mui/material";
import MyComponent from "./Muiresponsive";

function CombinedAll() {
  return (
    <div style={{transform:"translate(0px, 80px)"}}>
      
      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        {/* CONT */}
        <div  className="card-hover"
          onClick={()=>{
            window.location="/continuousTime";
                }}>
          <Cardcomp 
            bgim="linear-gradient(to bottom,rgba(79, 112, 65, 1), rgba(55, 78, 49, 0.5)),url(../src/assets/CT_bgi.jpg)"
            title="Continuous Time Signals"
            description={
              <div style={{width:"270px"}}>
                <div>
                  {"\u25CF"} Tools for computation and visualisation of vaious
                  domain transformations for continuous time signals
                </div>
                <br />
                <div>
                  {"\u25CF"} Animations of convolution custom signals
                </div>
              </div>
            }
            />
        </div>
            {/* DIGITAL */}
        <div className="card-hover" 
          onClick={()=>{
            window.location="/continuousTime";
                }}>
          <Cardcomp
            bgim="linear-gradient(to bottom,rgba(15, 126, 94, 1), rgba(10, 115, 86, 0.5)),url(../src/assets/DT_bgi.jpg)"
            title="Digital Signal Processing"
            description={
              <div style={{width:"280px"}}>
                <div>
                  {"\u25CF"} Interepretetion & visualisation of DTFT, DFT, z Transform for discrete time & digital signals
                </div>
                <br />
                <div>
                  {"\u25CF"} Various types of convolutions & animations for Discrete time signals
                </div>
              </div>
            }
            />
        </div>
          {/* SYSTEM */}
        <div className="card-hover"
          onClick={()=>{
            window.location="/continuousTime";
                }}>
          <Cardcomp
            bgim="linear-gradient(to bottom,rgba(150, 120, 15, 1), rgba(110, 90, 10, 0.5)),url(../src/assets/Sys_bgi.jpg)"
            title="System Analysis"
            description={
              <div style={{width:"280px"}}>
                <div>
                  {"\u25CF"} Interepretetion & visualisation of DTFT, DFT, z Transform for discrete time & digital signals
                </div>
                <br />
                <div>
                  {"\u25CF"} Various types of convolutions & animations for Discrete time signals
                </div>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}
export default CombinedAll;
