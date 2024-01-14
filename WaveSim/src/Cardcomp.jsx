import Card from "@mui/material/Card";
import React, { useEffect, useState } from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
// import signalCard from './card'

class card {
    constructor(color="#4ba3b1", 
                title="title", 
                desc="description", 
                img="path", 
                onclick="url"){
        this.color = color;
        this.title = title;
        this.desc = desc;
        this.img = img;
        this.onclick = onclick;
    }
}

const signalCard = card((color = "#0f566a"), (title = "Signal Processing"));

function Cardcomp() {


   
  return (
    <div>
        {signalCard}
      <br />
      <br />
      <Card
        variant={"outlined"}
        style={{
          width: "300px",
          height: "500px",
        //   backgroundColor: signalCard.color,
        }}
      ></Card>
    </div>
  );
}
export default Cardcomp;
