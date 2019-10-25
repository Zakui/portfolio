import React from "react"
import {Item} from '../utils/menu'

const Header = () => (
  <header id="navbar">
    <nav>
      <ul>
        <Item section="welcome-section">About</Item>
        <Item section="projects-container">Work</Item>
        <Item section="contact">Contact</Item>
      </ul>
    </nav>
  </header>
)

export default Header
