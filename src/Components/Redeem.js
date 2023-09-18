import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { ethers } from "ethers";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import INRDABI from './../Asserts/INRDABI.json'
export default function Redeem() {
  const INRD = "0xF5336Eef5aBf5dBBAF3Bce939F7F9c083452F1CC"
  const [token, setToken] = React.useState("USDT");
  const [amount, setAmount] = React.useState(null)
  const Boxing = {
    outerCard: {
      borderRadius: "10px",
    },
    btn: {
      display: "flex",
      justifyContent: "center",
      backgroundColor: "green",
      color: "#fff"
    },
  };
  const handleChange = (event) => {
    setToken(event.target.value);
  };
  const burnINRDToken = async() => {
    console.log(token,amount)
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const inrd =new ethers.Contract(INRD,INRDABI,signer)
      const mint = await inrd.burnINRD('0x5553445400000000000000000000000000000000000000000000000000000000',amount,{gasLimit: 100000,})
      console.log(mint)
    } catch (error) {

    }
  }
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card style={Boxing.outerCard} variant="outlined">
        <React.Fragment>
          <CardContent>
            <InputLabel fullWidth id="demo-simple-select-label">
              Token Amount
            </InputLabel>
            <TextField
              onChange={(e)=>setAmount(parseInt(e.target.value))}
              fullWidth
              style={Boxing.textBoxs}
              label="To Burn"
              id="fullWidth"
            />
            <InputLabel fullWidth id="demo-simple-select-label">
              Receive Token in
            </InputLabel>
            <Select
              fullWidth
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={token}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={"USDT"}>USDT</MenuItem>
              <MenuItem value={"USDC"}>USDC</MenuItem>
            </Select>
          </CardContent>
          <CardActions>
            <Button onClick={burnINRDToken} fullWidth style={Boxing.btn} variant="outlined" size="large">
              Reddem
            </Button>
          </CardActions>
        </React.Fragment>
      </Card>
    </Box>
  );
}
