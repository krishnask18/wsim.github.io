import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";

function Cardcomp(props) {
  return (
    <div
      to="google.com"
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
      <Typography
        variant="h4"
        style={{ color: "white", fontFamily: "Poppins" }}
        >
        {props.title}
      </Typography>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      <Typography
        style={{
          color: "#e4e4e5",
          fontFamily: "Poppins",
          fontSize: "10",
          overflowWrap: "break-word",
        }}
      >
        Set of tools for processing and computation of Continuous & Discrete
        time Signals.Engineering disciplines such as electrical engineering have advanced the design, study, and implementation of systems involving transmission, storage, and manipulation of information. In the latter half of the 20th century, electrical engineering itself separated into several disciplines
      </Typography>
    </div>
  );
}
export default Cardcomp;
