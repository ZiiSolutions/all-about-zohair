import React from "react"
import Header from "../Header/Header"

import "./Layout.scss"

export default class Layout extends React.Component<any, any> {
  public render() {
    const { children } = this.props
    return (
      <div>
        <Header />
        <main className="container">{children}</main>
      </div>
    )
  }
}
