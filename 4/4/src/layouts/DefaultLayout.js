import React from "react";
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
          <h1 className="main-name">Grazie!</h1>
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
