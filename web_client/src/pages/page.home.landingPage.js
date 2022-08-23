import React from "react";
import styled from "styled-components";
import NavBar from "../components/component.home.navbar";
import { Link } from "react-router-dom";
import '../assests/css/component.home.navbar.css'

export default function LandingPage ()  {
  return (
    <LandingPageRoot>
      <FlexRow>
        <Ellipse src={`https://file.rendit.io/n/bFL3SeuYSDVoSBzGuTtK.svg`} />
      </FlexRow>
      <Image7 src={`https://file.rendit.io/n/k3UGiJljG1MJJvAO7eMK.svg`} />
      <HeroImage>
        <Element4>
          <FlexColumn>
            <Logo1>
              <Logo src={`https://file.rendit.io/n/H8YKCYAAFoic9QpkpRXn.png`} />
              <Text1>BLOODCARE</Text1>
            </Logo1>
            <Element5>
              <GIVEBLOODGIVELIFE3>
                GIVE
                {[
                    {
                    childText: ` BLOOD `,
                    color: `#e71e43`,
                    },
                    {
                    childText: `GIVE`,
                    color: `#020202`,
                    },
                    {
                    childText: ` LIFE`,
                    color: `#e71e43`,
                    },
                ].map((data) => (
                    <GIVEBLOODGIVELIFE color={data.color}>
                    {data.childText}
                  </GIVEBLOODGIVELIFE>
                ))}
              </GIVEBLOODGIVELIFE3>
              <BloodDrop
                src={`https://file.rendit.io/n/DVpipRnvK7p3Mr2lVS9B.png`}
              />
            </Element5>
            <Content>
              <Paragraph>
                A single drop of blood can make a huge difference in someone
                life. Be the reason for someone's heartbeat.
              </Paragraph>
              <ReadMore>
                <Bg1 />
                <Bg2>
                <Link to="/registerCamp" className="registerBtn">Register Camp</Link>
                </Bg2>
              </ReadMore>
            </Content>
            <Text3>What you need to know</Text3>
          </FlexColumn>
          <Bowl src={`https://file.rendit.io/n/ma66MpZSysTxraWq01Un.png`} />
          <NavBar />
          <FlexRow1>
            <Element1>
              <BG />
              <BG1>
                <HorizontalLine>
                  <Text8>Who can donate?</Text8>
                  <BG2>
                    <Image1
                      src={`https://file.rendit.io/n/1sUcWmLdCLEMKwcvhbKj.png`}
                    />
                  </BG2>
                </HorizontalLine>
              </BG1>
            </Element1>
            <Benefits>
              <FlexColumn1>
                {[
                  {
                    childText: `Age above 18 years and below 60 years.`,
                    alignSelf: `inherit`,
                  },
                  {
                    childText: `If previously donated, at least 4 months should be elapsed since the date of previous donation.`,
                    alignSelf: `center`,
                  },
                  {
                    childText: `Hemoglobin level should be more than 12g/dL.`,
                    alignSelf: `inherit`,
                  },
                  {
                    childText: `Free from any serious disease condition or pregnancy.`,
                    alignSelf: `inherit`,
                  },
                  {
                    childText: `Free from "Risk Behaviours".`,
                    alignSelf: `inherit`,
                  },
                  {
                    childText: `Should have a valid identity card or any other document to prove the identity.`,
                    alignSelf: `inherit`,
                  },
                ].map((data) => (
                  <Text9 alignSelf={data.alignSelf}>{data.childText}</Text9>
                ))}
              </FlexColumn1>
              <VerticleLine
                src={`https://file.rendit.io/n/a2HDzQXzCrRX1lY1lxp0.svg`}
                height={`140px`}
              />
            </Benefits>
          </FlexRow1>
        </Element4>
        <FlexRow2>
          <Element1>
            <BG />
            <BG1>
              <HorizontalLine1>
                <BG5>
                  <Image1
                    src={`https://file.rendit.io/n/8UfRJ1eMCBYHCzXDxuig.png`}
                  />
                </BG5>
                <Text11>Why you should donate</Text11>
              </HorizontalLine1>
            </BG1>
          </Element1>
          <Criteria>
            <VerticleLine
              src={`https://file.rendit.io/n/sWafq114YG6EoU9zorh7.svg`}
              height={`119.5px`}
            />
            <FlexColumn2>
              {[
                {
                  childText: `Antioxidants`,
                  alignSelf: `center`,
                },
                {
                  childText: `Vitamins`,
                  alignSelf: `inherit`,
                },
                {
                  childText: `Minerals`,
                  alignSelf: `inherit`,
                },
                {
                  childText: `Nutrients`,
                  alignSelf: `inherit`,
                },
              ].map((data) => (
                <Text9 alignSelf={data.alignSelf}>{data.childText}</Text9>
              ))}
            </FlexColumn2>
          </Criteria>
        </FlexRow2>
        <FlexRow3>
          <Element1>
            <BG />
            <BG7>
              <HorizontalLine2>
                <BG8>
                  <Image1
                    src={`https://file.rendit.io/n/YVF4BFzSdGkoO4B2lEjq.png`}
                  />
                </BG8>
                <Text11>Benefits of donating blood</Text11>
              </HorizontalLine2>
            </BG7>
          </Element1>
          <Criteria1>
            <VerticleLine
              src={`https://file.rendit.io/n/LpAry3TeDCjlbToKhYis.svg`}
              height={`168px`}
            />
            <FlexColumn2>
              {[
                {
                  childText: `Giving blood can reveal potential health problems`,
                  alignSelf: `inherit`,
                },
                {
                  childText: `Giving blood can reduce harmful iron stores`,
                  alignSelf: `inherit`,
                },
                {
                  childText: `Giving blood may lower your risk of suffering a heart attack`,
                  alignSelf: `center`,
                },
                {
                  childText: `Giving blood may reduce your risk of developing cancer`,
                  alignSelf: `inherit`,
                },
                {
                  childText: `Giving blood can help your liver stay healthy`,
                  alignSelf: `inherit`,
                },
                {
                  childText: `Giving blood can help your mental state`,
                  alignSelf: `inherit`,
                },
              ].map((data) => (
                <Text9 alignSelf={data.alignSelf}>{data.childText}</Text9>
              ))}
            </FlexColumn2>
          </Criteria1>
        </FlexRow3>
      </HeroImage>
      <Image8 src={`https://file.rendit.io/n/z8E2yjzaGPk6cmk4TEMP.svg`} />
    </LandingPageRoot>
  );
};


//styled components

const GIVEBLOODGIVELIFE = styled.div`
  font-size: 64px;
  font-family: Inter;
  display: contents;
  white-space: pre-wrap;
  color: ${(props) => props.color};
`;
const GIVEBLOODGIVELIFE3 = styled.div`
  width: 425px;
  height: 55px;
  left: 96px;
  position: absolute;
  font-size: 64px;
  font-family: Inter;
  color: #020202;
`;
const Text5 = styled.div`
  font-size: 18px;
  font-family: Quicksand;
  font-weight: 500;
  line-height: 27px;
  color: #161e29;
  margin: ${(props) => props.margin};
`;
const Element1 = styled.div`
  width: 400px;
  height: 279px;
  position: relative;
`;
const BG = styled.div`
  filter: blur(16px);
  width: 346px;
  height: 230px;
  background-color: rgba(22, 30, 41, 0.2);
  position: absolute;
  top: 49px;
  left: 28px;
  border-radius: 51px;
`;
const BG1 = styled.div`
  background-color: #dd2d50;
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 31px;
`;
const Image1 = styled.img`
  width: 156px;
  height: 156px;
`;
const Text9 = styled.div`
  font-size: 15px;
  font-family: Montserrat;
  font-weight: 600;
  letter-spacing: 0.3px;
  line-height: 19.5px;
  color: #161e29;
  align-self: ${(props) => props.alignSelf};
`;
const VerticleLine = styled.img`
  width: 2px;
  position: absolute;
  top: -1px;
  left: -1px;
  height: ${(props) => props.height};
`;
const Text11 = styled.div`
  text-align: center;
  width: 206px;
  height: 58px;
  display: flex;
  font-size: 20px;
  font-family: Montserrat;
  font-weight: 600;
  letter-spacing: 0.4px;
  text-transform: capitalize;
  color: #020202;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const FlexColumn2 = styled.div`
  display: flex;
  position: absolute;
  top: 6px;
  left: 20px;
  flex-direction: column;
  gap: 10px;
  justify-content: space-between;
  align-items: flex-start;
`;
const LandingPageRoot = styled.div`
  width: 100%;
  height: 1915px;
  zoom: 90%;
  background-color: #f6e2e6;
  overflow: hidden;
  position: relative;
`;
const FlexRow = styled.div`
  width: 1217.86px;
  background-image: url("https://file.rendit.io/n/G6J5zi64jC5X2DDyPxoa.svg");
  background-size: cover;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 0px 472.76px 0px;
`;
const Ellipse = styled.img`
  width: 653px;
  height: 592px;
`;
const Image7 = styled.img`
  width: 1315.34px;
  height: 820.44px;
  position: absolute;
  top: 1094.56px;
  left: 284.66px;
`;
const HeroImage = styled.div`
  border-color: #dd2c4f;
  border-style: solid;
  box-shadow: 0px 4px 60px 0px rgba(122, 19, 39, 0.12);
  height: 1841px;
  background-color: #ffffff;
  display: flex;
  overflow: hidden;
  position: absolute;
  top: 34px;
  left: 4%;
  flex-direction: column;
  justify-content: flex-start;
  gap: 44px;
  border-radius: 50px;
  padding: 0px 63px 0px 0px;
  border-width: 3px;
`;
const Element4 = styled.div`
  height: 1102px;
  position: relative;
  min-width: 1483px;
`;
const FlexColumn = styled.div`
  height: 919.87px;
  background-image: url("https://file.rendit.io/n/vVTuUnavKsZqdgU83lxl.svg");
  background-size: cover;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 53px 208.3px 53px 47px;
`;
const Logo1 = styled.div`
  height: 69px;
  display: flex;
  flex-direction: row;
  gap: 9px;
  justify-content: center;
  align-items: flex-start;
  margin: 0px 0px 133px 0px;
`;
const Logo = styled.img`
  width: 46px;
  height: 45px;
`;
const Text1 = styled.div`
  width: 273px;
  height: 55px;
  font-size: 24px;
  font-family: Inter;
  font-weight: bold;
  color: #e71e43;
  align-self: flex-end;
`;
const Element5 = styled.div`
  align-self: stretch;
  height: 186px;
  position: relative;
  min-width: 940px;
`;

const BloodDrop = styled.img`
  width: 190px;
  height: 186px;
  position: absolute;
  left: 470px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 161px 96px;
`;
const Paragraph = styled.div`
  width: 453px;
  font-size: 16px;
  font-family: Montserrat;
  font-weight: 500;
  letter-spacing: 0.32px;
  line-height: 22px;
  color: rgba(22, 30, 41, 0.7);
`;
const ReadMore = styled.div`
  width: 154px;
  height: 56px;
  align-self: flex-start;
  position: relative;
`;
const Bg1 = styled.div`
  filter: blur(7px);
  width: 103.38px;
  height: 42px;
  background-color: rgba(185, 28, 59, 0.48);
  position: absolute;
  top: 14px;
  left: 25.85px;
  border-radius: 30.5px;
`;
const Bg2 = styled.div`
  height: 48px;
  background-color: #dd2d50;
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 30.5px;
  padding: 0px 9.69px 0px 10.77px;
`;
const Text2 = styled.div`
  text-align: center;
  width: 133.54px;
  font-size: 16px;
  font-family: Montserrat;
  font-weight: 700;
  line-height: 20.8px;
  color: #ffffff;
`;
const Text3 = styled.div`
  width: 425px;
  height: 55px;
  font-size: 36px;
  font-family: Inter;
  font-weight: 700;
  color: #161e29;
  align-self: flex-end;
`;
const Bowl = styled.img`
  width: 639px;
  height: 613px;
  position: absolute;
  top: 135px;
  left: 799px;
`;
const Header = styled.div`
  width: 567px;
  display: flex;
  position: absolute;
  top: 52px;
  left: 916px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Element6 = styled.div`
  width: 52px;
  height: 45px;
  position: relative;
  flex-grow: 1;
  margin: 0px 55px 0px 0px;
`;
const Text4 = styled.div`
  font-size: 18px;
  font-family: Quicksand;
  font-weight: 700;
  line-height: 27px;
  color: #161e29;
  position: absolute;
  top: 10px;
`;
const Selector = styled.div`
  width: 51px;
  height: 4px;
  background-color: #dd2d50;
  position: absolute;
  top: 36px;
  border-radius: 20px;
`;
const Text7 = styled.button`
  text-align: center;
  font-size: 16px;
  font-family: Quicksand;
  font-weight: 500;
  line-height: 24px;
  color: #020202;
  margin: 0px 37px 0px 0px;
  padding: 0px;
  border-width: 0px;
  background: none;
  box-sizing: content-box;
  cursor: pointer;
`;
const RedText = styled.input`
  display: inline-block;
  font-size: 18px;
  font-family: Quicksand;
  font-weight: 700;
  line-height: 27px;
  color: #ffffff;
  width: 119px;
  height: 27px;
  background-color: #dd2d50;
  flex-direction: row;
  justify-content: center;
  border-radius: 30.5px;
  padding: 8px 0px 10px 0px;
  border-width: 0px;
  :: placeholder {
    color: #ffffff;
  }
  outline-width: 0px;
`;
const FlexRow1 = styled.div`
  width: 1258px;
  display: flex;
  flex-direction: row;
  gap: 31px;
  justify-content: flex-start;
  align-items: flex-start;
  position: absolute;
  top: 823px;
  left: 143px;
`;
const HorizontalLine = styled.div`
  width: 400px;
  height: 248px;
  background-image: url("https://file.rendit.io/n/w4a57pPozJV3bzV2ywsl.svg");
  background-size: cover;
  position: relative;
`;
const Text8 = styled.div`
  text-align: center;
  width: 206px;
  height: 58px;
  display: flex;
  font-size: 20px;
  font-family: Montserrat;
  font-weight: 600;
  letter-spacing: 0.4px;
  text-transform: capitalize;
  color: #020202;
  position: absolute;
  top: 178px;
  left: 98px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const BG2 = styled.div`
  height: 164px;
  background-image: url("https://file.rendit.io/n/gqqTJdNkHdVpMjJutFkH.svg");
  background-size: cover;
  position: absolute;
  top: 19px;
  left: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 4px;
`;
const Benefits = styled.div`
  width: 781px;
  height: 199px;
  position: relative;
`;
const FlexColumn1 = styled.div`
  display: flex;
  position: absolute;
  top: 45px;
  left: 21px;
  flex-direction: column;
  gap: 8px;
  justify-content: space-between;
  align-items: flex-start;
`;
const FlexRow2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 53px;
  align-items: center;
  padding: 0px 143px;
`;
const HorizontalLine1 = styled.div`
  height: 248px;
  background-image: url("https://file.rendit.io/n/w4a57pPozJV3bzV2ywsl.svg");
  background-size: cover;
  display: flex;
  flex-direction: column;
  gap: 3px;
  justify-content: center;
  align-items: center;
  padding: 0px 99px 0px 95px;
`;
const BG5 = styled.div`
  height: 164px;
  background-image: url("https://file.rendit.io/n/gqqTJdNkHdVpMjJutFkH.svg");
  background-size: cover;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 4px;
  margin: 0px 19px 0px 0px;
`;
const Criteria = styled.div`
  width: 122px;
  height: 117.5px;
  align-self: flex-start;
  position: relative;
  margin: 65px 0px 0px 0px;
`;
const FlexRow3 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 32px;
  align-items: center;
  padding: 0px 141px;
`;
const BG7 = styled.div`
  width: 400px;
  background-color: #dd2d50;
  display: flex;
  position: absolute;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 31px;
`;
const HorizontalLine2 = styled.div`
  background-image: url("https://file.rendit.io/n/XFeH5papz0pXFXrZdvvY.svg");
  background-size: cover;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  padding: 7px 92px 9px 98px;
`;
const BG8 = styled.div`
  height: 164px;
  background-image: url("https://file.rendit.io/n/gqqTJdNkHdVpMjJutFkH.svg");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 4px;
`;
const Criteria1 = styled.div`
  width: 497px;
  height: 170px;
  align-self: flex-start;
  position: relative;
  margin: 39px 0px 0px 0px;
`;
const Image8 = styled.img`
  width: 1319.78px;
  height: 820.32px;
  position: absolute;
  top: 1094.68px;
  left: 280.22px;
`;