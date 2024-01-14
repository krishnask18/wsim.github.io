import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Muiresponsive from "./Muiresponsive";
import Grid from "@mui/material/Grid";
// import Image from 'react-image-resizer';
import Box from "@mui/material/Box";
import logo2 from "./assets/waveSim Logo2.png";
import logo from "./assets/waveSim Logo4.png";
import MyComponent from "./Muiresponsive";

function ButtonAppBar() {
    
  return (
    <div id="appbar">
      <AppBar style={{ background: "rgba(255,255,255, 0.08)" }} wrap="true">
        <Toolbar>
          <img src={logo2} width={"64"} height={"64"} />
          <img src={logo} height={"64"} />
        </Toolbar>
      </AppBar>
    </div>
  );    
}

export default ButtonAppBar;
