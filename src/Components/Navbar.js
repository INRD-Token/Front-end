import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import GradientButton from './GradientButton.js';
import { ethers } from "ethers";
import LOGO from "./../Asserts/Images/LOGO.png";
export default function Navbar() {
  const [isConnected, setIsConnected] = useState(false);
  //const [balance,setBalance] = useState(null)
  const btn = {
    color: "black",
  };

  useEffect(() => {
    async function connect() {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        provider.send("eth_requestAccounts", []);
        setIsConnected(true);
      } catch {}
    }
    connect();
  }, [isConnected]);

  return (
    <div>
      <Grid container>
        <Grid xs={10.4}>
          <Button style={btn} size="large">
            <img src={LOGO} alt="logo" height="auto" width="100" />
          </Button>
          <Button href="/app" style={btn} size="large">
            App
          </Button>
          <Button href="/" style={btn} size="large">
            Home
          </Button>
          <Button href="/about" style={btn} size="large">
            About us
          </Button>
        </Grid>
        <Grid xs={1}>
          {isConnected ? (
            <>
              <Button size="medium" href="/app">
              <GradientButton>Mint now</GradientButton>
            </Button>
            </>
          ) : (
            <Button variant="contained" style={btn} size="large">
              Connect
            </Button>
          )}
        </Grid>
      </Grid>
    </div>
  );
}
