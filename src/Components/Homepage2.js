import React from "react";
import styled from "styled-components";
import Homepagep2 from "./../Images/Homepagep2.jpg";
const Container = styled.div`
  display: grid;
  grid-template-columns: 6fr 6fr;
  height: 100vh;
`;
const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  mix-blend-mode:multiple;
  border: none;
`;
const Vl = styled.div`
  border-left: 1px solid grey;
  height: 40vh;
`;
const Right = styled.div`
  display: grid;
  grid-template-rows: 6fr 6fr;
  height: 100vh;
  align-items: center;
`;
const RightUpper = styled.div`
  display: grid;
  grid-template-columns: 0.1fr 5fr;
  align-items: center;
`;

const Title = styled.h1`
  width: 544px;
  height: 47px;

  font-family: "Sunflora";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 47px;
  color: #89e2f2;
`;
const Content = styled.h3`
  width: 642px;
  height: 190px;
  font-family: "Gilroy-Medium";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 120%;
  color: #f0f0f1;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;
const TitleL = styled.h3`
  width: 666px;
  height: 56px;
  font-family: "Sunflora";
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 36px;
  margin-bottom: 4px;
  /* Foundation /green/green-2 */
  color: #cde5d8;
`;
const ContentL = styled.h3`
  width: 5px;
  height: 150px;
  background: #f2d79b;
  display:flex;
  flex-direction:column;
`;
const ContentText = styled.p`
  width: 573px;
  height: 76px;

  /* H3 */
  font-family: "Gilroy-Medium";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 120%;
  /* or 38px */
  /* Foundation /neutral/neutral-4 */
  color: #f0f0f1;
`;

const Button = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 12px;
    gap: 6px;

    width: 573px;
    height: 44px;

    /* Foundation /dark_green/dark_green-5 */
    background: #427670;
    border-radius: 500px;
`
function Homepage2(props) {
  return (
    <>
      <Container>
        <Left>
          {/* <Image  src={Homepagep2} alt="Logo" height={500} /> */}
          <img style={{mixBlendMode:"multiple"}} src={Homepagep2} alt="logo" height={500} />
        </Left>
        <Right>
          <RightUpper>
            <Vl />
            <div>
              <Title>Driving the Future of Money</Title>
              <Content>
                INRD is a digital rupee, which is a stablecoin, available 24/7
                and moves at internet speed. Billions of INRD change hands every
                day, and every INRD token is always redeemable 1:1 for Indian
                Rupees.
              </Content>
            </div>
          </RightUpper>
          <RightUpper>
            <div>
              <TitleL>How it works</TitleL>
              <RightUpper>
                <ContentL/>
                <ContentText>
                  Deposit USDT/Token to mint INRD based on Oracle pricing
                <Button>Learn More</Button>
                </ContentText>
              </RightUpper>
              <RightUpper>
                <ContentL style={{ background: "#C1F0F8" }} />
                <ContentText>Redeem INRD by getting back USDT
                <Button>Learn More</Button>
                </ContentText>
              </RightUpper>
            </div>
          </RightUpper>
        </Right>
      </Container>
    </>
  );
}

export default Homepage2;
