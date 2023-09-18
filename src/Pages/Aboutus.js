import React from "react";
import Navbar from "../Components/Navbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
//import ScrollAnimation from 'react-animate-on-scroll';
//import AboutUS from "./../Asserts/Images/AboutUS.jpg";
export default function Aboutus() {
  const styles = {
    main: {
      //backgroundImage:`url(${AboutUS})`,
      //backgroundColor:"lightgrey",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
      height: "100%",
      padding: "20px",
      borderRadius: "45px 45px 45px 45px",
    },
    header: {
      color: "Black",
    },
    paraText: {
      fontSize: 20,
      color: "#306844",
      fontWeight: "bold",
      color: "Black",
    },
  };
  return (
    <div>
      <Navbar />
      <Box m={2} style={styles.main}>
        <div>
          <Typography style={styles.header} variant="h2" gutterBottom>
            About us
          </Typography>

          <Box mt={2}>
            <Typography style={styles.paraText} variant="p" gutterBottom>
              In the year 2016, at a time when the status of cryptocurrencies in
              India hung in the balance, our journey began. This was an era of
              uncertainty, with the nation contemplating the fate of crypto
              regulations. In a remarkable stride towards progress, we forged a
              close collaboration with the Swiss government, orchestrating round
              table discussions that engaged the regulatory stakeholders of both
              countries. These discussions, held between the vibrant Zug region
              and the Indian Ministry, paved the way for significant exchange of
              ideas and perspectives.
            </Typography>
          </Box>

          <Box mt={2}>
            <Typography style={styles.paraText} variant="p" gutterBottom>
              Fast forward seven years and a transformative shift has occurred.
              India, once treading cautiously around the crypto landscape, has
              taken a momentous step by legalizing cryptocurrencies. This
              pivotal decision has opened doors to new possibilities, even as
              certain grey areas and less-than-optimal policies persist. Our
              stance remains resolute as we express our confidence in the
              burgeoning Indian economy. We harbor an optimistic outlook,
              foreseeing the Indian Rupee (INR) emerging as a potent driving
              force within the global decentralized finance (DeFi) realm.
            </Typography>
          </Box>

          <Box mt={2}>
            <Typography style={styles.paraText} variant="p" gutterBottom>
              At the heart of our journey lies a dynamic and dedicated team,
              composed of exceptional individuals who possess both visionary
              insight and remarkable talent. This assembly of diverse minds is
              steadfastly dedicated to the formidable mission of turning the
              future of money into a tangible reality.
            </Typography>
          </Box>

          <Box mt={2}>
            <Typography style={styles.paraText} variant="p" gutterBottom>
              Our narrative is one of collaboration, innovation, and
              determination. As we chart our course into the uncharted realms of
              the cryptocurrency landscape, we do so with a profound belief in
              the power of transformation. Our journey is far from ordinary;
              it's a testament to the harmonious convergence of global efforts,
              regulatory evolution, and our unwavering commitment to carving a
              new path for the financial world.
            </Typography>
          </Box>

          <Box mt={2}>
            <Typography style={styles.paraText} variant="p" gutterBottom>
              The pages of history continue to unfold, and we find ourselves at
              the precipice of monumental change. From regulatory diplomacy to
              the visionary endeavors of our team, every chapter of our story is
              etched with the spirit of progress. As the Indian economy
              continues to embrace the future, we stand as pioneers, passionate
              about leveraging the potential of INR in the grand tapestry of
              decentralized finance. Our commitment resonates, and our
              aspirations are ignited as we champion the remarkable
              transformation of monetary landscapes.
            </Typography>
          </Box>
        </div>
      </Box>
    </div>
  );
}
