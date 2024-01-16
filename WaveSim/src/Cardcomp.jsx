import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import './index.css'

function Cardcomp(props) {
  return (
    <div style={{borderStyle:"hidden", padding:25}}>

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
                <hr style={{
                  width:"250px", 
                  height:"1.5px", 
                  background:"white", 
                  transform:"translate(0px, -10px)"}}/>
      </Typography>
      <Typography
        style={{
          color: "#e4e4e5",
          fontFamily: "Poppins",
          fontSize: "17px",
          overflowWrap: "break-word",
          transform:"translate(0px, 30px)"
        }}
        >
        {props.description}
      </Typography>
    </div>
        </div>
  );
}
export default Cardcomp;
