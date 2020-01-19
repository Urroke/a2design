import React from "react";
import { Link } from "react-router-dom";
import "./defaultLayout.sass";

class DefaultLayout extends React.Component {
  render() {
    const headerHeight = 108;
    return (
      <React.Fragment>
        <div
          className="main-top-indificator"
          style={{
            marginTop: headerHeight
          }}
        ></div>
        <header
          style={{
            height: headerHeight,
            top: window.scrollY
          }}
          className="main-header"
        >
          <Link to="/home" className="main-name">
            <h1>Grazie!</h1>
          </Link>
          <div className="main-icon"></div>
        </header>
        <div
          className="main-back"
          style={{
            top: window.scrollY + headerHeight,
            backgroundSize: "cover",
            height: "calc(100vh - " + headerHeight + "px) "
          }}
        ></div>
        <main className="main-content">{this.props.children}</main>
      </React.Fragment>
    );
  }
}

export default DefaultLayout;
