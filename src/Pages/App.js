import React,{useState} from "react";
import NavBar from "../Components/Navbar";
//import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Buynow from "../Components/Buynow";
import Mint from "../Components/Mint";
import Redeem from "../Components/Redeem";
import Paper from '@mui/material/Paper';
export default function Apps() {
  const [block,setBlock] = useState(1)
  const styles = {
    root: { backgroundColor:"cyan",borderRadius: 20, borderColor: "#000", padding: 50 },
    main: {
      margin: "120px 0px 0px 0px",
    },
    box: {
     // backgroundColor:"rgb(235, 46, 46)",
      minHeight: "200px",
      maxWidth: "370px",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto"
    },
  };
  return (
    <div>
      <NavBar />
      <div style={styles.main}>
        <div style={styles.box}>
          <Button onClick={()=>setBlock(1)} variant={(block===1)?"text":"filled"} size="large">
            mint
          </Button>
          <Button onClick={()=>setBlock(2)} variant={(block===2)?"text":"filled"} size="large">
            Redeem
          </Button>
          <Button onClick={()=>setBlock(3)} variant={(block===3)?"text":"filled"} size="large">
            treasury
          </Button>
          <div style={styles.box}>
            <Paper  className={styles.root} square={true} elevation={4}>
          {
              (block===1)?
              <Mint/>
              :(block===2)?
              <Redeem/>
              :
              <Buynow/>
          }
            </Paper>
          </div>
        </div>
      </div>
    </div>
  );
}