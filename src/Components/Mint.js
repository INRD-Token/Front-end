import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ethers } from "ethers";
import INRDABI from './../Asserts/INRDABI.json'
import USDTABI from './../Asserts/USDTABI.json'
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
export default function Mint() {
  const [token, setToken] = React.useState("USDT");
  const [amount,setAmount] = React.useState(0)
  const INRD = "0xF5336Eef5aBf5dBBAF3Bce939F7F9c083452F1CC"
  const USDT = "0x7037e93365A7c73E64772556e812a3725Eb38caB"
  const Boxing = {
    outerCard: {
      borderRadius: "10px",
    },
    btn: {
      display:"flex",
      justifyContent:"center",
      backgroundColor:"green",
      color:"#fff"
    },
    calc:{
      padding: "15px",
      //fontWeight:"bold",
      fontSize:"20px",
    }
  };
  const handleTokenChange = (event) => {
    setToken(event.target.value);

  };
  
  const handleChange=async(e)=>{
    const _Amount = parseInt(e.target.value)
    if(_Amount>0){
    setAmount(parseInt(e.target.value))
    const calculation = document.querySelector('.calc')
    console.log(calculation)
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const inrd =new ethers.Contract(INRD,INRDABI,signer)
    const price = await inrd.getInrToUsdPrice()
    console.log(price)
    calculation.innerHTML =  `Total INRD minting amount = ${parseInt((_Amount*(10**8))/price)}`
  }
  else{
    const calculation = document.querySelector('.calc')
    calculation.innerHTML = ""
  }
  }

  const mintINRD=async()=>{
    console.log(token,amount)
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      //const usrAddress =await signer.getAddress()
      const _token = ethers.utils.formatBytes32String(token);
      console.log(_token)
      const usdt =new ethers.Contract(USDT,USDTABI,signer)
      const approve = await usdt.approve(INRD,amount)
      await approve.wait()
      console.log(approve)
      const inrd =new ethers.Contract(INRD,INRDABI,signer)
      const mint = await inrd.mintINRDToken(_token,amount,{gasLimit: 100000,})
      console.log(mint)
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <React.Fragment>
          <CardContent style={Boxing.outerCard}>
            <InputLabel fullWidth id="demo-simple-select-label">
               Mint Amount
            </InputLabel>
            <TextField
              onChange={(e)=>handleChange(e)}
              fullWidth
              type="number"
              style={Boxing.textBoxs}
              label="USDT/USDC Amount"
              id="fullWidth"
            />
            <InputLabel fullWidth id="demo-simple-select-label">
              Token
            </InputLabel>
            <Select
              fullWidth
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={token}
              label="token"
              onChange={handleTokenChange}
            >
              <MenuItem value={"USDT"}>USDT</MenuItem>
              <MenuItem value={"USDC"}>USDC</MenuItem>
            </Select>
            <Typography style={Boxing.calc} className="calc" variant="p" gutterBottom></Typography>
          </CardContent>
          <CardActions>
            <Button onClick={mintINRD} fullWidth style={Boxing.btn} variant="outlined" size="large">
              Mint
            </Button>
          </CardActions>
        </React.Fragment>
      </Card>
    </Box>
  );
}
