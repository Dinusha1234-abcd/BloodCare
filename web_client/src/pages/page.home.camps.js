import { React, useState } from "react";
import styled from "styled-components";
import Calendar from 'react-calendar';
import NavBar from "../components/component.home.navbar";


export default function Camps() {
  const IconButtonFunction = (e, name) => {
    alert(`${name} was clicked`);
  };
  const IconButton1Function = (e, name) => {
    alert(`${name} was clicked`);
  };
  const Text63Function = (e, name) => {
    alert(`${name} was clicked`);
  };

  const [date, setDate] = useState(new Date());

 
  return (
    <CampsRoot>
      <FlexRow>
        <Ellipse src={`https://file.rendit.io/n/PTec1Cf8jiACjvNKEsKE.svg`} />
      </FlexRow>
      <HeroImage>
        <WhiteRectangle />
        <FlexColumn>
          <FlexRow1>
            <Logo src={`https://file.rendit.io/n/rVsJvSQj68EZGNCwxrQO.png`} />
            <Text1>BLOODCARE</Text1>
          </FlexRow1>
          <NavBar />
          <FlexRow2>

            <FlexColumn1>
            
              <CalendarContainer>
                 <Calendar onChange={setDate} readOnly={true} value={date} id="calender" />
              </CalendarContainer>

              <Element52>
              <Text43>Choose your district</Text43>
               
                <Select>
                <option value="" disabled selected hidden>Select District</option>
                <option value="1">Colombo</option>
                <option value="2">Galle</option>
                <option value="3">Kandy</option>
                <option value="4">Jaffna</option>
              </Select>
              </Element52>

          
              <Map2>
                <Map1>
                  <Element58>
                    <Input>
                      <Field>
                        <BaseField>
                          <Search
                            src={`https://file.rendit.io/n/KbMwPgQDD7sHeEGBaoVz.svg`}
                          />
                          <Content9 placeholder={`Search map`} />
                        </BaseField>
                      </Field>
                    </Input>
                    <IconButton
                      onClick={(e) => IconButtonFunction(e, "IconButton")}
                    >
                      <Search
                        src={`https://file.rendit.io/n/6tFKJOWKIIGPujW7Hkng.svg`}
                      />
                    </IconButton>
                  </Element58>
                  <CurrentLocation
                    src={`https://file.rendit.io/n/5QawF07Pkg99dPOvwROw.svg`}
                  />
                  <FlexRow10>
                    <View>
                      <Label17>
                        <Layers1
                          src={`https://file.rendit.io/n/P7BzA59gCDMySsSXptvy.svg`}
                        />
                        <Text45>Layers</Text45>
                      </Label17>
                    </View>
                    <Controls>
                      <IconButton1
                        onClick={(e) => IconButton1Function(e, "IconButton1")}
                      >
                        <Search
                          src={`https://file.rendit.io/n/NSNorMZHKQ99xq1HxPl9.svg`}
                        />
                      </IconButton1>
                      <IconButton1
                        onClick={(e) => IconButton1Function(e, "IconButton2")}
                      >
                        <Search
                          src={`https://file.rendit.io/n/naYn9K9894qZGhHjWlWL.svg`}
                        />
                      </IconButton1>
                    </Controls>
                  </FlexRow10>
                </Map1>
              </Map2>
            </FlexColumn1>
            <FlexColumn2>
              <Text46>Blood Camp Locations</Text46>
              <FlexRow11>
                <LaneInner>
                  <Task height={`200px`}>
                    <Content>
                      <Text47>Supipi Blood Camp</Text47>
                      <Paragraph>
                        Join our blood camp organized by the Leo Club of
                        University of Colombo!
                        <br />
                        <br />
                        {"       "}
                        32/1, Road Lane, Colombo
                      </Paragraph>
                      <FlexRow12>
                        <PiggyPinkText>Register</PiggyPinkText>
                        <FancyChip>
                          <Chip1 width={`92px`}>
                            <AvatarFill>
                              <Image1
                                src={`https://file.rendit.io/n/3gXlyjGNIVtjCL0f8Kj5.png`}
                              />
                            </AvatarFill>
                            <Label color={`#334155`}>Rudra Devi</Label>
                          </Chip1>
                        </FancyChip>
                      </FlexRow12>
                      <Dotsvertical
                        src={`https://file.rendit.io/n/7DQQkHayPLktTdJn6JGq.svg`}
                      />
                    </Content>
                    <Footer height={`15px`}>
                      <Action2>
                        <Image1
                          src={`https://file.rendit.io/n/nkwg6PdHOZ0AINY0BgTB.svg`}
                        />
                        <June width={`63px`}>Jun 2, 2022</June>
                      </Action2>
                    </Footer>
                    <Akariconslocation>
                      <Akariconslocation1
                        src={`https://file.rendit.io/n/XVa7BszjAOZwC9AViTad.svg`}
                      />
                    </Akariconslocation>
                  </Task>
                  <Task height={`200px`}>
                    <Content>
                      <Text47>Supipi Blood Camp</Text47>
                      <Paragraph>
                        Join our blood camp organized by the Leo Club of
                        University of Colombo!
                        <br />
                        <br />
                        {"       "}
                        32/1, Road Lane, Colombo
                      </Paragraph>
                      <FlexRow12>
                        <PiggyPinkText>Register</PiggyPinkText>
                        <FancyChip>
                          <Chip1 width={`108px`}>
                            <AvatarFill>
                              <Image1
                                src={`https://file.rendit.io/n/2gRAvJdvPXAwnIGN4ywg.png`}
                              />
                            </AvatarFill>
                            <Label color={`#334155`}>Jennifer Cook</Label>
                          </Chip1>
                        </FancyChip>
                      </FlexRow12>
                      <Dotsvertical
                        src={`https://file.rendit.io/n/7DQQkHayPLktTdJn6JGq.svg`}
                      />
                    </Content>
                    <Footer height={`15px`}>
                      <Action2>
                        <Image1
                          src={`https://file.rendit.io/n/nkwg6PdHOZ0AINY0BgTB.svg`}
                        />
                        <June width={`67px`}>Jun 21, 2022</June>
                      </Action2>
                    </Footer>
                  </Task>
                  <Task height={`183px`}>
                    <Content>
                      <Text47>Supipi Blood Camp</Text47>
                      <Paragraph>
                        Join our blood camp organized by the Leo Club of
                        University of Colombo!
                        <br />
                        <br />
                        {"       "}
                        32/1, Road Lane, Colombo
                      </Paragraph>
                      <FlexRow12>
                        <PiggyPinkText>Register</PiggyPinkText>
                        <FancyChip>
                          <Chip1 width={`115px`}>
                            <AvatarFill>
                              <Image1
                                src={`https://file.rendit.io/n/NZpnmyAhdKuzTzL8HXwj.png`}
                              />
                            </AvatarFill>
                            <Label color={`#334155`}>Jose Schneider</Label>
                          </Chip1>
                        </FancyChip>
                      </FlexRow12>
                      <Dotsvertical
                        src={`https://file.rendit.io/n/7DQQkHayPLktTdJn6JGq.svg`}
                      />
                    </Content>
                    <Footer height={`auto`}>
                      <Action2>
                        <Message2
                          src={`https://file.rendit.io/n/nkwg6PdHOZ0AINY0BgTB.svg`}
                        />
                        <Text52 width={`67px`}>Jun 14, 2022</Text52>
                      </Action2>
                    </Footer>
                  </Task>
                </LaneInner>
                <LaneInner>
                  <Task height={`200px`}>
                    <Content>
                      <Text47>Supipi Blood Camp</Text47>
                      <Paragraph>
                        Join our blood camp organized by the Leo Club of
                        University of Colombo!|
                        <br />
                        <br />
                        {"       "}
                        32/1, Road Lane, Colombo
                      </Paragraph>
                      <FlexRow12>
                        <PiggyPinkText>Register</PiggyPinkText>
                        <FancyChip>
                          <Chip1 width={`122px`}>
                            <AvatarFill>
                              <Image1
                                src={`https://file.rendit.io/n/arQvSAIKmzWSEw0NzbhZ.png`}
                              />
                            </AvatarFill>
                            <Label color={`#334155`}>Katherine Bailey</Label>
                          </Chip1>
                        </FancyChip>
                      </FlexRow12>
                      <Dotsvertical
                        src={`https://file.rendit.io/n/7DQQkHayPLktTdJn6JGq.svg`}
                      />
                    </Content>
                    <Footer height={`15px`}>
                      <Action2>
                        <Image1
                          src={`https://file.rendit.io/n/nkwg6PdHOZ0AINY0BgTB.svg`}
                        />
                        <June width={`69px`}>Jun 24, 2022</June>
                      </Action2>
                    </Footer>
                  </Task>
                  <Task height={`200px`}>
                    <Content>
                      <Text47>Supipi Blood Camp</Text47>
                      <Paragraph>
                        Join our blood camp organized by the Leo Club of
                        University of Colombo!|
                        <br />
                        <br />
                        {"       "}
                        32/1, Road Lane, Colombo
                      </Paragraph>
                      <FlexRow12>
                        <PiggyPinkText>Register</PiggyPinkText>
                        <FancyChip>
                          <Chip1 width={`111px`}>
                            <AvatarFill>
                              <Image1
                                src={`https://file.rendit.io/n/niq46ihNp7osY0FXGwPy.png`}
                              />
                            </AvatarFill>
                            <Label color={`#334155`}>Boyd Goodwin</Label>
                          </Chip1>
                        </FancyChip>
                      </FlexRow12>
                      <Dotsvertical
                        src={`https://file.rendit.io/n/7DQQkHayPLktTdJn6JGq.svg`}
                      />
                    </Content>
                    <Footer height={`15px`}>
                      <Action2>
                        <Image1
                          src={`https://file.rendit.io/n/nkwg6PdHOZ0AINY0BgTB.svg`}
                        />
                        <June width={`63px`}>Jun 6, 2022</June>
                      </Action2>
                    </Footer>
                  </Task>
                  <Task height={`183px`}>
                    <Content>
                      <Text47>Supipi Blood Camp</Text47>
                      <Paragraph>
                        Join our blood camp organized by the Leo Club of
                        University of Colombo!|
                        <br />
                        <br />
                        {"       "}
                        32/1, Road Lane, Colombo
                      </Paragraph>
                      <FlexRow12>
                        <PiggyPinkText>Register</PiggyPinkText>
                        <FancyChip>
                          <Chip1 width={`89px`}>
                            <AvatarFill>
                              <Image1
                                src={`https://file.rendit.io/n/0tfnv95V0yoygm5uaPN1.png`}
                              />
                            </AvatarFill>
                            <Label color={`#334155`}>Kim Bailey</Label>
                          </Chip1>
                        </FancyChip>
                      </FlexRow12>
                      <Dotsvertical
                        src={`https://file.rendit.io/n/7DQQkHayPLktTdJn6JGq.svg`}
                      />
                    </Content>
                    <Footer height={`auto`}>
                      <Action2>
                        <Message2
                          src={`https://file.rendit.io/n/nkwg6PdHOZ0AINY0BgTB.svg`}
                        />
                        <Text52 width={`62px`}>Jun 3, 2022</Text52>
                      </Action2>
                    </Footer>
                  </Task>
                </LaneInner>
              </FlexRow11>
            </FlexColumn2>
          </FlexRow2>
        </FlexColumn>
        <LaneInner2>
          <Task height={`200px`}>
            <Content>
              <Text47>Supipi Blood Camp</Text47>
              <Paragraph>
                Join our blood camp organized by the Leo Club of University of
                Colombo!|
                <br />
                <br />
                {"       "}
                32/1, Road Lane, Colombo
              </Paragraph>
              <FlexRow12>
                <PiggyPinkText>Register</PiggyPinkText>
                <FancyChip>
                  <Chip1 width={`126px`}>
                    <AvatarFill>
                      <Image1
                        src={`https://file.rendit.io/n/2StFbWcaHcXtu9y374Lz.png`}
                      />
                    </AvatarFill>
                    <Label color={`#334155`}>Beverly Gonzalez</Label>
                  </Chip1>
                </FancyChip>
              </FlexRow12>
              <Dotsvertical
                src={`https://file.rendit.io/n/7DQQkHayPLktTdJn6JGq.svg`}
              />
            </Content>
            <Footer height={`15px`}>
              <Action2>
                <Image1
                  src={`https://file.rendit.io/n/nkwg6PdHOZ0AINY0BgTB.svg`}
                />
                <June width={`66px`}>May 4, 2022</June>
              </Action2>
            </Footer>
          </Task>
          <Task height={`200px`}>
            <Content>
              <Text47>Supipi Blood Camp</Text47>
              <Paragraph>
                Join our blood camp organized by the Leo Club of University of
                Colombo!|
                <br />
                <br />
                {"    32/1, Road Lane, Colombo   "}
                
              </Paragraph>
              <FlexRow12>
                <PiggyPinkText>Register</PiggyPinkText>
                <FancyChip>
                  <Chip1 width={`102px`}>
                    <AvatarFill>
                      <Image1
                        src={`https://file.rendit.io/n/4Omxxm3EpyPwB0fw97yn.png`}
                      />
                    </AvatarFill>
                    <Label color={`#334155`}>Morris Lopez</Label>
                  </Chip1>
                </FancyChip>
              </FlexRow12>
              <Dotsvertical
                src={`https://file.rendit.io/n/7DQQkHayPLktTdJn6JGq.svg`}
              />
            </Content>
            <Footer height={`15px`}>
              <Action2>
                <Image1
                  src={`https://file.rendit.io/n/nkwg6PdHOZ0AINY0BgTB.svg`}
                />
                <June width={`66px`}>May 4, 2022</June>
              </Action2>
            </Footer>
          </Task>
          <Task height={`183px`}>
            <Content>
              <Text47>Supipi Blood Camp</Text47>
              <Paragraph>
                Join our blood camp organized by the Leo Club of University of
                Colombo!|
                <br />
                <br />
                {"       "}
                32/1, Road Lane, Colombo
              </Paragraph>
              <FlexRow12>
                <PiggyPinkText>Register</PiggyPinkText>
                <FancyChip>
                  <Chip1 width={`108px`}>
                    <AvatarFill>
                      <Image1
                        src={`https://file.rendit.io/n/zYZhCEonn7LSMPBahidv.png`}
                      />
                    </AvatarFill>
                    <Label color={`#334155`}>Gilberto Ward</Label>
                  </Chip1>
                </FancyChip>
              </FlexRow12>
              <Dotsvertical
                src={`https://file.rendit.io/n/7DQQkHayPLktTdJn6JGq.svg`}
              />
            </Content>
            <Footer height={`auto`}>
              <Action2>
                <Message2
                  src={`https://file.rendit.io/n/nkwg6PdHOZ0AINY0BgTB.svg`}
                />
                <Text52 width={`64px`}>May 1, 2022</Text52>
              </Action2>
            </Footer>
          </Task>
        </LaneInner2>
      </HeroImage>
    </CampsRoot>
  );
};

//styled components

const Element53 = styled.div`
  width: 25px;
  height: 24px;
  position: relative;
  flex-grow: 1;
  margin: ${(props) => props.margin};
`;
const PiggyPinkRectangle = styled.div`
  width: 25px;
  height: 20px;
  background-color: #fbcfd8;
  position: absolute;
  top: 2px;
`;
const Text2 = styled.div`
  font-size: 20px;
  font-family: Inter;
  letter-spacing: 0.6px;
  position: absolute;
  left: ${(props) => props.left};
`;
const Text5 = styled.div`
  font-size: 20px;
  font-family: Inter;
  letter-spacing: 0.6px;
  color: #5f5858;
  margin: ${(props) => props.margin};
`;
const Text11 = styled.div`
  font-size: 20px;
  font-family: Inter;
  font-weight: bold;
  letter-spacing: 0.6px;
  color: ${(props) => props.color};
`;
const Text12 = styled.div`
  font-size: 20px;
  font-family: Inter;
  letter-spacing: 0.6px;
  align-self: flex-end;
  margin: ${(props) => props.margin};
`;
const Text13 = styled.div`
  font-size: 20px;
  font-family: Inter;
  letter-spacing: 0.6px;
  margin: ${(props) => props.margin};
`;
const MelonRectangle = styled.div`
  width: 31px;
  height: 23px;
  background-color: rgba(255, 182, 182, 0.38);
  position: absolute;
  border-radius: 8px;
  top: ${(props) => props.top};
`;
const Text28 = styled.div`
  font-size: 20px;
  font-family: Inter;
  letter-spacing: 0.6px;
  color: rgba(221, 45, 80, 0.8);
  align-self: flex-start;
`;
const Text29 = styled.div`
  font-size: 20px;
  font-family: Inter;
  letter-spacing: 0.6px;
  align-self: flex-start;
  margin: ${(props) => props.margin};
`;
const Line = styled.img`
  width: 1px;
  height: 182px;
  position: absolute;
  top: 0.01px;
  left: ${(props) => props.left};
`;
const Line3 = styled.img`
  width: 1px;
  height: 182px;
  position: absolute;
  top: 0.02px;
  left: ${(props) => props.left};
`;
const Search = styled.img`
  width: 20px;
  height: 20px;
`;
const IconButton1 = styled.button`
  border-color: #e2e8f0;
  border-style: solid;
  width: 34px;
  height: 34px;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  padding: 8px;
  border-width: 1px;
  box-sizing: content-box;
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  }
`;
const LaneInner = styled.div`
  border-color: #ffffff;
  border-style: solid;
  backdrop-filter: blur(12px);
  background-color: #dd2d50;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  gap: 16px;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 24px;
  padding: 16px;
  border-width: 1px;
`;
const Task = styled.div`
  width: 303px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 12px;
  height: ${(props) => props.height};
`;
const Content = styled.div`
  height: 120px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: stretch;
  min-width: 288px;
  padding: 16px;
`;
const Text47 = styled.div`
  font-size: 14px;
  font-family: Quicksand;
  font-weight: 700;
  line-height: 20px;
  color: #334155;
  height: 20px;
  align-self: stretch;
  min-width: 287px;
`;
const Paragraph = styled.div`
  font-size: 12px;
  font-family: Quicksand;
  line-height: 16px;
  color: #64748b;
  height: 64px;
  align-self: stretch;
  min-width: 287px;
  white-space: pre-wrap;
`;
const FlexRow12 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
  min-width: 287px;
`;
const PiggyPinkText = styled.div`
  display: flex;
  font-size: 12px;
  font-family: Quicksand;
  line-height: 16px;
  color: #f43f5e;
  background-color: #ffe4e6;
  flex-direction: row;
  gap: 4px;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  padding: 2px 6px;
`;
const FancyChip = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Chip1 = styled.div`
  height: 20px;
  background-color: #e2e8f0;
  display: flex;
  flex-direction: row;
  gap: 4px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  padding: 2px 8px 2px 3px;
  width: ${(props) => props.width};
`;
const AvatarFill = styled.div`
  border-color: #e2e8f0;
  border-style: solid;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1000px;
  border-width: 1px;
`;
const Image1 = styled.img`
  width: 16px;
  height: 16px;
`;
const Label = styled.div`
  font-size: 12px;
  font-family: Quicksand;
  line-height: 16px;
  color: ${(props) => props.color};
`;
const Dotsvertical = styled.img`
  width: 11px;
  height: 20px;
`;
const Footer = styled.div`
  border-color: #f1f5f9;
  border-style: solid;
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: flex-start;
  align-items: center;
  align-self: stretch;
  min-width: 288px;
  padding: 16px;
  border-width: 1px 0px 0px 0px;
  height: ${(props) => props.height};
`;
const Action = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2px;
  justify-content: flex-start;
  align-items: center;
`;
const Action2 = styled.div`
  width: 221px;
  display: flex;
  flex-direction: row;
  gap: 2px;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 1;
`;
const June = styled.div`
  font-size: 12px;
  font-family: Quicksand;
  line-height: 16px;
  color: #64748b;
  height: 16px;
  width: ${(props) => props.width};
`;
const Message2 = styled.img`
  width: 16px;
  height: 15px;
`;
const Text52 = styled.div`
  font-size: 12px;
  font-family: Quicksand;
  line-height: 16px;
  color: #64748b;
  height: 15px;
  width: ${(props) => props.width};
`;
const Text61 = styled.div`
  font-size: 18px;
  font-family: Quicksand;
  font-weight: 500;
  line-height: 27px;
  color: #161e29;
  margin: ${(props) => props.margin};
`;
const CampsRoot = styled.div`
  width: 100%;
  height: 1414px;
  zoom: 90%;
  background-color: #f6e2e6;
  overflow: hidden;
  position: relative;
`;
const FlexRow = styled.div`
  width: 1217.86px;
  background-image: url("https://file.rendit.io/n/gDS54Tx3UnWnxhZtBb6N.svg");
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
const HeroImage = styled.div`
  border-color: #dd2c4f;
  border-style: solid;
  box-shadow: 0px 4px 60px 0px rgba(122, 19, 39, 0.12);
  width: 1546px;
  height: 1335px;
  background-color: #ffffff;
  overflow: hidden;
  position: absolute;
  top: 36px;
  left: 4%;
  border-radius: 50px;
  border-width: 3px;
`;
const WhiteRectangle = styled.div`
  width: 323px;
  height: 673px;
  background-color: rgba(255, 255, 255, 0.8);
  position: absolute;
  top: 257px;
  left: 2px;
  border-radius: 30px;
`;
const FlexColumn = styled.div`
  height: 904.87px;
  background-image: url("https://file.rendit.io/n/JkOnZ6f1GzDLUAs3o6kf.svg");
  background-size: cover;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 12.98px;
  padding: 53px 104.3px 53px 17px;
`;
const FlexRow1 = styled.div`
  height: 69px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 9px;
  align-items: flex-start;
  padding: 0px 30px;
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
  color: #e71e43;
  align-self: flex-end;
`;
const FlexRow2 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  justify-content: center;
`;
const FlexColumn1 = styled.div`
  width: 323px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 15px;
  flex-grow: 1;
  align-items: center;
`;
const Element52 = styled.div`
  height: 390.02px;
  position: relative;
  min-width: 323px;
`;
const WhiteFlexColumn = styled.div`
  height: 238px;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  position: absolute;
  top: 134.02px;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 30px;
  padding: 9px 20.99px 9px 14px;
`;
const CalendarContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px 44.01px 0px 50px;
  margin: 0px 0px 14px 0px;
`;
const Text3 = styled.div`
  font-size: 20px;
  font-family: Inter;
  letter-spacing: 0.6px;
  color: #5f5858;
  align-self: center;
  margin: 0px 18px 0px 0px;
`;
const Line12 = styled.img`
  width: 287.01px;
  height: 1px;
  align-self: flex-end;
`;
const FlexRow4 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 9.01px 0px 7px;
  margin: 0px 0px 8px 0px;
`;
const Line13 = styled.img`
  width: 287.01px;
  height: 1px;
  align-self: flex-start;
  margin: 0px 0px 3px 0px;
`;
const FlexRow5 = styled.div`
  height: 25px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 0px 12.01px;
  margin: 0px 0px 1px 0px;
`;
const Line7 = styled.img`
  width: 287.01px;
  height: 1px;
  align-self: flex-end;
  margin: 0px 0px 3px 0px;
`;
const FlexRow6 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 0px 7.01px;
  margin: 0px 0px 3px 0px;
`;
const Element55 = styled.div`
  align-self: stretch;
  width: 31px;
  height: 25px;
  position: relative;
  flex-grow: 1;
  margin: 0px 19px 0px 0px;
`;
const Line8 = styled.img`
  width: 287.01px;
  height: 1px;
  align-self: flex-end;
  margin: 0px 0px 1px 0px;
`;
const FlexRow7 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 0px 10.01px 0px 12px;
  margin: 0px 0px 2px 0px;
`;
const Element56 = styled.div`
  align-self: stretch;
  width: 31px;
  height: 26px;
  position: relative;
  flex-grow: 1;
  margin: 0px 8px 0px 0px;
`;
const Text26 = styled.div`
  font-size: 20px;
  font-family: Inter;
  letter-spacing: 0.6px;
  position: absolute;
  top: 2px;
  left: 2px;
`;
const Line9 = styled.img`
  width: 287.01px;
  height: 1px;
  align-self: flex-end;
  margin: 0px 0px 2px 0px;
`;
const FlexRow8 = styled.div`
  height: 25px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 0px 6.01px;
  margin: 0px 0px 2px 0px;
`;
const Line10 = styled.img`
  width: 287.01px;
  height: 1px;
  align-self: flex-start;
`;
const FlexRow9 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 9px;
`;
const Element57 = styled.div`
  width: 31px;
  height: 24px;
  position: relative;
  flex-grow: 1;
  margin: 0px 10px 0px 0px;
`;
const Line5 = styled.img`
  width: 1px;
  height: 182.01px;
  position: absolute;
  left: 260px;
`;
const WhiteRectangle1 = styled.div`
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 290px;
  height: 43px;
  background-color: #ffffff;
  position: absolute;
  top: 71.02px;
  left: 21px;
  border-radius: 10px;
`;
const Text43 = styled.div`
  width: 266px;
  height: 46px;
  font-size: 20px;
  font-family: Quicksand;
  font-weight: 500;
  letter-spacing: 1px;
  position: absolute;
  top: 38.02px;
  left: 25px;
`;
const Text44 = styled.div`
  width: 166px;
  height: 33px;
  font-size: 14px;
  font-family: Inter;
  font-weight: 500;
  letter-spacing: 0.7px;
  color: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 84.02px;
  left: 36px;
`;
const Icroundarrowdropdown = styled.img`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 64.02px;
  left: 270px;
`;
const Map2 = styled.div`
  background-color: #f1f5f9;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Map1 = styled.div`
  height: 245px;
  background-image: url("https://file.rendit.io/n/z6UxF9ysUexsaPrDPADv.png");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8px;
`;
const Element58 = styled.div`
  height: 36px;
  position: relative;
  min-width: 245px;
  margin: 0px 0px 109px 0px;
`;
const Input = styled.div`
  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: flex-start;
  align-items: flex-start;
  position: absolute;
`;
const Field = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: stretch;
  min-width: 224px;
`;
const BaseField = styled.div`
  border-color: #e2e8f0;
  border-style: solid;
  width: 222px;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  border-radius: 2px;
  padding: 8px;
  border-width: 1px;
`;
const Content9 = styled.input`
  width: 180px;
  font-size: 14px;
  font-family: Quicksand;
  line-height: 20px;
  color: #cbd5e1;
  flex-grow: 1;
  padding: 0px;
  border-width: 0px;
  background: none;
  :: placeholder {
    color: #cbd5e1;
  }
  display: inline-block;
  outline-width: 0px;
`;
const IconButton = styled.button`
  border-color: #e2e8f0;
  border-style: solid;
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.1);
  width: 34px;
  height: 34px;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 209px;
  border-radius: 100px;
  padding: 8px;
  border-width: 1px;
  box-sizing: content-box;
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  }
`;
const CurrentLocation = styled.img`
  width: 28px;
  height: 28px;
  align-self: center;
`;
const FlexRow10 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 93px;
  justify-content: center;
  align-items: center;
`;
const View = styled.div`
  height: 68px;
  background-image: url("https://file.rendit.io/n/r1IBvhg48diOzss6s1W7.png");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 2px;
`;
const Label17 = styled.div`
  width: 60px;
  background-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  display: flex;
  flex-direction: row;
  gap: 2px;
  justify-content: center;
  align-items: center;
  padding: 4px;
`;
const Layers1 = styled.img`
  width: 12px;
  height: 12px;
`;
const Text45 = styled.div`
  font-size: 10px;
  font-family: Quicksand;
  font-weight: 300;
  line-height: 12px;
  color: #ffffff;
`;
const Controls = styled.div`
  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: flex-end;
`;
const FlexColumn2 = styled.div`
  width: 728px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 56px;
  flex-grow: 1;
  align-items: flex-end;
`;
const Text46 = styled.div`
  width: 404px;
  height: 55px;
  font-size: 36px;
  font-family: Inter;
  font-weight: 700;
  color: #161e29;
  margin: 0px 96px 0px 0px;
`;
const FlexRow11 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  gap: 24px;
  justify-content: center;
  align-items: center;
`;
const Akariconslocation = styled.div`
  background-image: url("https://file.rendit.io/n/XVa7BszjAOZwC9AViTad.svg");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Akariconslocation1 = styled.img`
  width: 19px;
  height: 20px;
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
const Text60 = styled.div`
  font-size: 18px;
  font-family: Quicksand;
  font-weight: 700;
  line-height: 27px;
  color: #161e29;
  align-self: flex-end;
  margin: 0px 55px 8px 0px;
`;
const FlexColumn3 = styled.div`
  width: 59px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex-grow: 1;
  align-items: center;
  padding: 5px 0px;
  margin: 0px 55px 0px 0px;
`;
const Selector = styled.div`
  width: 59px;
  height: 4px;
  background-color: #dd2d50;
  border-radius: 20px;
`;
const Text63 = styled.button`
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
const LaneInner2 = styled.div`
  border-color: #ffffff;
  border-style: solid;
  backdrop-filter: blur(12px);
  background-color: #dd2d50;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  gap: 16px;
  justify-content: flex-start;
  align-items: flex-start;
  position: absolute;
  top: 263px;
  left: 1116px;
  border-radius: 24px;
  padding: 16px;
  border-width: 1px;
`;

const Select = styled.select`
  width: 100%;
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-left: 10px;
  border-radius: 25px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;
