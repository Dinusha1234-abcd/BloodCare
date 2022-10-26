import { React, useState } from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import NavBar from "../components/component.home.navbar";
import "../assests/css/page.home.camps.css";
import "../assests/css/component.doctors.css";
import axios from "axios";

export default function Camps() {

  function joinCamp(e) {
    e.preventDefault();

    const donor = {
      firstName,
      lastName,
      NIC,
      address,
      email,
      mobileNumber,
    };
    if (firstName.length == 0) {
      setMessage("Please Enter First Name ");
    } else if (lastName.length == 0) {
      setMessage("Please Enter Last Name ");
    } else if (!(NIC.length == 10 || NIC.length == 12)) {
      console.log(NIC.length);
      setMessage("Please Enter  Valid NIC Number ");
    } else if (address.length == 0) {
      setMessage("Please Enter  Address ");
    } else if (email.length == 0) {
      setMessage("Please Enter  Email ");
    } else if (!(mobileNumber.length == 10)) {
      setMessage("Please Enter  Valid Mobile Number");
    } else {
      setFormRegCamp(false);
      setSuccess(true);
      setFirstName("");
      setLastName("");
      setNIC("");
      setAddress("");
      setMobileNumber("");
      setEmail("");
      e.target.reset();
      // pass check the data with server
      axios
        .post("http://localhost:8070/camps", donor)
        .then((res) => {
          //check password and username
          if (res["data"]["message"] == "success") {
            window.location = "/camps";
          } else {
            setMessage("Network Connection issue");
          }
        })
        .catch((err) => {
          //sever error
          console.log(err.message);
        });
    }
  }

  const [date, setDate] = useState(new Date());
  const [formRegCamp, setFormRegCamp] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [NIC, setNIC] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const [firstRow, setFirstRow] = useState(0);
  const [lastRow, setLastRow] = useState(0);
  const [searchData, setSearchData] = useState("");
  const [data, setData] = useState([]);

  const list = [];

  if (searchData == "") {

    for (let i = firstRow; i < lastRow; i++) {
      list.push(
          <>

    <Task height={`200px`}>
      
      <Content>
        <Text47>{data[i]['campName']}</Text47>
        <Paragraph>
          Join our blood camp organized by the Leo Club of
          University of Colombo!
          <br />
          <br />
          {"       "}
          {data[i]['location']}
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
              <Label color={`#334155`}>{data[i]['FullName']}</Label>
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
          <June width={`63px`}>{data[i]['campDate']}</June>
        </Action2>
      </Footer>
      <Akariconslocation>
        <Akariconslocation1
          src={`https://file.rendit.io/n/XVa7BszjAOZwC9AViTad.svg`}
        />
      </Akariconslocation>
    </Task>
    </>)
}
  };
   
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
              <SelectDistrict>
                <h3 id="select-district-text">Select Your District</h3>
                <Select>
                  <option value="" disabled defaultValue hidden>
                    Select District
                  </option>
                  <option value="1">Colombo</option>
                  <option value="2">Galle</option>
                  <option value="3">Kandy</option>
                  <option value="4">Jaffna</option>
                </Select>
              </SelectDistrict>
              <CalendarContainer>
                <Calendar
                  onChange={setDate}
                  readOnly={true}
                  value={date}
                  id="calender"
                />
              </CalendarContainer>
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
                        <button onClick={() => {setFormRegCamp(!formRegCamp) }}>
                          <PiggyPinkText>Register</PiggyPinkText>
                        </button>
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
      <div id={`${formRegCamp ? 'fade-clusterAdmin' : null}`} onClick={() => { setFormRegCamp(!formRegCamp) }}></div>
      <div
        id={`${
          formRegCamp
            ? "register-form-join-camp-active"
            : "register-form-join-camp"
        }`}
      >
        <h3 id="register-form-doctor-name-clusteradmin">
          Register To The Camp
        </h3>
        <form id="register-join-camp" onSubmit={joinCamp}>
          {message ? (
            <p id="message-form-clusteradmin">
              {message}{" "}
              <i
                class="fa-solid fa-xmark close-button-form"
                onClick={() => {
                  setMessage("");
                }}
              ></i>
            </p>
          ) : null}
          <table id="medical-staff-view-table">
            <tr>
              <td>First Name</td>
              <td>
                {" "}
                <input
                  type="text"
                  id="register-form-doctor-input-clusteradmin"
                  placeholder="Enter First name"
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />{" "}
                <br />
              </td>
            </tr>
            <tr>
              <td>Last Name</td>
              <td>
                {" "}
                <input
                  type="text"
                  id="register-form-doctor-input-clusteradmin"
                  placeholder="Enter Last name"
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />{" "}
                <br />
              </td>
            </tr>
            <tr>
              <td>NIC Number</td>
              <td>
                {" "}
                <input
                  type="text"
                  id="register-form-doctor-input-clusteradmin"
                  placeholder="Enter NIC Number"
                  onChange={(e) => {
                    setNIC(e.target.value);
                  }}
                />{" "}
                <br />
              </td>
            </tr>
            <tr>
              <td>Address</td>
              <td>
                {" "}
                <input
                  type="text"
                  id="register-form-doctor-input-clusteradmin"
                  placeholder="Enter Address"
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />{" "}
                <br />
              </td>
            </tr>
            <tr>
              <td>Email</td>
              <td>
                {" "}
                <input
                  type="text"
                  id="register-form-doctor-input-clusteradmin"
                  placeholder="Enter Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />{" "}
                <br />
              </td>
            </tr>
            <tr>
              <td>Mobile Number</td>
              <td>
                {" "}
                <input
                  type="text"
                  id="register-form-doctor-input-clusteradmin"
                  placeholder="Enter Mobile Number"
                  onChange={(e) => {
                    setMobileNumber(e.target.value);
                  }}
                />{" "}
                <br />
              </td>
            </tr>
          </table>{" "}
          <br />
          <button type="sumbit" id="sumbit-save-form">
            {" "}
            Register{" "}
          </button>{" "}
          <button
            id="sumbit-cancle-form"
            onClick={() => {
              setFormRegCamp(!formRegCamp);
            }}
          >
            {" "}
            Cancel{" "}
          </button>{" "}
          <br />
          <br />
        </form>
      </div>
    </CampsRoot>
  );
}

//styled components
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
  height: 50%;
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
const SelectDistrict = styled.div`
  height: 390.02px;
  position: relative;
  min-width: 323px;
`;
const CalendarContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 256px;
  top: 25%;
  right: 70.5%;
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
  top: 234px;
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
