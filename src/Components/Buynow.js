import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { ethers } from "ethers";
import INRDABI from './../Asserts/INRDABI.json'
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
export default function Buynow() {
  const INRD = "0xF5336Eef5aBf5dBBAF3Bce939F7F9c083452F1CC"
  const [age, setAge] = React.useState("INRD");
  const [balance,setBalance] = React.useState(0)
  const Boxing = {
    outerCard: {
      // borderRadius: "15px 50px 30px 5px",
    },
    btn: {
      display: "flex",
      justifyContent: "center",
      backgroundColor: "green",
      color: "#cccccc",
    },
  };
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const INRDBalance = async()=> {
    try{
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const usrAddress =await signer.getAddress()
      console.log(usrAddress)
      const inrd =new ethers.Contract(INRD,INRDABI,signer)
      const mint = await inrd.connect(usrAddress).INRDBalance()
      console.log(parseInt(mint[0]._hex))
      setBalance(parseInt(mint[0]._hex))
    }catch(e){
      console.log(e)
    }
  }
  return (
    <Box style={Boxing.outerCard} sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <React.Fragment>
          <CardContent style={Boxing.outerCard}>
            <InputLabel fullWidth id="demo-simple-select-label">
              Token
            </InputLabel>
            <Select
              fullWidth
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={"INRD"}>INRD</MenuItem>
            </Select>
            <InputLabel fullWidth id="demo-simple-select-label">
              Your Balance
            </InputLabel>
            <TextField
              fullWidth
              style={Boxing.textBoxs}
              value = {balance}
              id="fullWidth"
            />
          </CardContent>
          <CardActions>
            <Button
              fullWidth
              style={Boxing.btn}
              variant="outlined"
              size="large"
              onClick={INRDBalance}
            >
              Get Balance
            </Button>
          </CardActions>
        </React.Fragment>
      </Card>
    </Box>
  );
}
