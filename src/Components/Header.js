import React from "react";
import "../Styles/Header.css";
import GradientButton from "./GradientButton";
import { Button } from "@mui/material";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
const Header = () => {
  return (
    <header data-aos="fade-up">
      <div className="header-flex">
        <div className="header-content">
          <div className="header-content-inner">
            <h1>
              <div className="hero-content-line">
                <div className="hero-content-line-inner">INRD - First Indian</div>
              </div>
              <div className="hero-content-line">
                <div className="hero-content-line-inner">
                  Backed stable coin
                </div>
              </div>
            </h1>
            
            <br />
            <div className="btn-row">
            <Button href="/app">
              <GradientButton>
                Mint now
              <ArrowOutwardIcon fontSize="5"/>
              </GradientButton>
            </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;