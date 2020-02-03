import React from "react";
import "./layout.sass";
import { Link } from "react-router-dom";

class DefaultLayout extends React.Component {
  render() {
    const path = this.props.match.url.split("/")[1];

    return (
      <React.Fragment>
        <header className="layout">
          <nav>
            <Link to="/">
              <div className="layout__logo"></div>
            </Link>
          </nav>
          <nav className="layout__navigator">
            <Link to="/">
              <button
                className={"layout__link ".concat(
                  path === "" ? "layout__link__chosen" : ""
                )}
              >
                Home
              </button>
            </Link>
            <Link to="/people">
              <button
                className={"layout__link ".concat(
                  path === "people" ? "layout__link__chosen" : ""
                )}
              >
                People
              </button>
            </Link>
            <Link to="/feed">
              <button
                className={"layout__link ".concat(
                  path === "feed" ? "layout__link__chosen" : ""
                )}
              >
                Feed
              </button>
            </Link>
          </nav>
        </header>

        {this.props.children}
      </React.Fragment>
    );
  }
}

export default DefaultLayout;
