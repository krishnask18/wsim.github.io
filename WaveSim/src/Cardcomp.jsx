import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import './index.css'

function Cardcomp(props) {
  return (
    <div
      className="card-div"
      onClick={() => {
        location.href = "https://www.google.com";
      }}
      style={{
        cursor: "pointer",
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,    
        backgroundImage:
        props.bgim,
        objectFit:"cover",
        width: "300px",
        backgroundRepeat: "no-repeat",
        height: "420px",
        transform: "translate(0px, 80px)",
      }}
    >
      <br></br>
      <Typography
        variant="h4"
        style={{ color: "white", fontFamily: "Poppins" }}
        >
        {props.title}
      </Typography>
        <br></br>
        <br></br>
        {/* <br></br> */}
      <Typography
        style={{
          color: "#e4e4e5",
          fontFamily: "Poppins",
          fontSize: "17px",
          overflowWrap: "break-word",
        }}
      >
        Set of tools for processing and computation of Continuous & Discrete
        time Signals.Engineering disciplines such as electrical engineering have advanced the design, study, and implementation of systems involving transmission, storage, and manipulation of information.
      </Typography>
    </div>
  );
}
export default Cardcomp;
