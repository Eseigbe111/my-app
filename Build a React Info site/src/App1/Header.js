import React from "react"
import logo from "./react-logo.svg"

export default function Header() {
  return (
      <header>
          <nav className="nav-header">
              <img src={logo} width="40px"/>
              <ul className="nav-items">
                  <li>Pricing</li>
                  <li>About</li>
                  <li>Contact</li>
              </ul>
          </nav>
      </header>
  )
}