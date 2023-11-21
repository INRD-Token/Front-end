import React from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar";
import HomepageINRD from "./../Images/homepageinrd1.jpg";
import BrahmGan from "./../Images/BrahmGan.jpg";
const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Nav = styled.div`
  flex: 3;
`;
const Content = styled.div`
  flex: 4;
  display: flex;
  justify-content: space-around;
  align-content: center;
  align-items: center;
`;
const Partners = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #32636c;
`;
const Heading = styled.h1`
  width: 337px;
  height: 75px;
  font-family: "Tysla";
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 61px;

  background: linear-gradient(90deg, #7bbc98 0%, #be8b13 107.95%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

const Para = styled.p`
  width: 635px;
  height: 96px;
  font-family: "Gilroy-Medium";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 120%;
  color: #f0f0f1;
`;

const PartnerHeading = styled.h3`
  width: 262px;
  height: 45px;
  font-family: "Gilroy-Bold";
  font-size: 36px;
  line-height: 42px;
  color: #f5f5f5;
`;
const Partner = styled.img`
  width: 115.65px;
  height: 32px;
`;

const Animation = styled.div`
overflow:hidden;
`;

function Homepage1(props) {
  return (
    <>
      <Container>
        <Navbar />
        <Content>
          <div>
            <Heading>INRD Token</Heading>
            <Para>
              The next generation of Defi, around the Indian National Rupee
            </Para>
          </div>
          <Animation>
            <img style={{mixBlendMode:"multiple"}} src={HomepageINRD} alt="logo" height={270} width={600} />
            {/* <div className="HomepageINRD"></div> */}
          </Animation>
        </Content>
        <Partners>
          <PartnerHeading>Trusted patners</PartnerHeading>
          <div style={{ display: "flex", alignContent:"space-around",justifyContent: "space-around" }}>
            <div>
              <Partner style={{mixBlendMode:"multiple"}} src={BrahmGan} />
            </div>
            <div>
              <Partner style={{mixBlendMode:"multiple"}} src={BrahmGan} />
            </div>
          </div>
        </Partners>
      </Container>
    </>
  );
}

export default Homepage1;
