import React from "react"
import { Link } from "gatsby"

import "./Header.scss"

export default class Header extends React.Component<any, any> {
  public render() {
    return (
      <header>
        <h1>All About Zohair</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cv">CV</Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}
