import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import '../assests/css/component.home.navbar.css'

const NavBar= () =>{
  return (
  <Header>
      <Link to="/" className="topNav">Home</Link>
      <Link to="/camps" className="topNav">Camps</Link>
      
      <Link to="/login" className="topNavLogin">Login</Link>
  </Header>
  );
}
export default NavBar;

//styled-components
const Header = styled.div`
  width: 567px;
  display: flex;
  position: absolute;
  top: 52px;
  left: 950px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

