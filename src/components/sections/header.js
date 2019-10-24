import React from "react"
import styled from "styled-components";
import {Item, Menu} from '../utils/menu'

const Nav = styled.nav`
  display: flex;
`

const Head = styled.header`
  position: fixed;
  top: 0;
  height: 50px;
  width: 100%;
  background: #def;
  display: flex;
  padding: 5px 0;
  left: 0;
  z-index: 1;
  justify-content: flex-end;
`

const Header = () => (
  <Head id="navbar">
    <Nav>
      <Menu>
        <Item section="welcome-section">About</Item>
        <Item section="projects-container">Work</Item>
        <Item section="contact">Contact</Item>
      </Menu>
    </Nav>
  </Head>
)

export default Header
