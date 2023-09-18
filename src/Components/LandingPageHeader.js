import React from 'react'
import Typography from "@mui/material/Typography";
import LOGO from "./../Asserts/Images/LOGO.png";
import Launch from "./../Asserts/Images/Launch.png";
import Navbar from "./../Components/Navbar.js";
import Button from "@mui/material/Button";
//import Spin from 'react-reveal/Spin';
export default function LandingPageHeader() {
    const styles = {
        main: {
        marginTop:"20px",
          display: "flex",
          flexDirection: "column",
          alignContent:"center",
          justifyContent:"center",
        },
        container: {
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        },
        btn: {
          color: "black",
        },
        LunchBtn: {
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }
      };
  return (
    <div>
        <Navbar />
        <div style={styles.main}>
        <div style={styles.container}>
          <div>
            <Typography variant="h2" gutterBottom>
              Lets,Welcome India's
            </Typography>
            <Typography variant="h2" gutterBottom>
              First Stable Coin
            </Typography>
            <Typography variant="h2" gutterBottom>
              INRD.
            </Typography>
          </div>
          <div>
            <img src={LOGO} alt="Logo" height="250px" width="250px" />
          </div>
        </div>
      </div>
      <div style={styles.LunchBtn}>
        <Button href="/app" size="large" variant="contained">
            LUNCH APP
            <img src={Launch} alt="Launch" width="50px" height="50px" />
          </Button>
      </div>
    </div>
  )
}
