import Card from "@mui/material/Card";
import React, { useEffect, useState } from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
// import {Link, useNavigate} from "react-router-dom";

// let navigate = useNavigate(); 
// const routeChange = () =>{ 
//   let path = `google.com`; 
//   navigate(path);
// }

function Cardcomp() {
  return (
    <div to="google.com" 
    onClick={()=>{location.href = "https://www.google.com"}}
    style={{
      cursor:"pointer",
      borderBottomRightRadius:20,
      borderBottomLeftRadius:20,
      borderTopRightRadius:20,
      borderTopLeftRadius:20,
      backgroundImage:"linear-gradient(to bottom right,#255959,20%, #0d272e)",
      width: "300px",
      height: "420px",
      transform: "translate(0px, 80px)"}}>
        <Typography
          variant="h4"
          style={{ color: "white", fontFamily: "Poppins" }}
        >
          Hello
        </Typography>
        <Typography
          style={{
            color: "white",
            fontFamily: "Poppins",
            fontSize: "10",
            overflowWrap: "break-word",
          }}
        >
          Set of tools for processing and computation of Continuous & Discrete
          time Signals.
        </Typography>
    </div>
  );
}
export default Cardcomp;
