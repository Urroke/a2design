import React from "react";
import "./layout.sass";
import { Link } from "react-router-dom";

class DefaultLayout extends React.Component {
  render() {
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
              <button className="layout__link">Home</button>
            </Link>
            <Link to="/people">
              <button className="layout__link">People</button>
            </Link>
            <Link to="/feed">
              <button className="layout__link">Feed</button>
            </Link>
          </nav>
        </header>

        {this.props.children}
      </React.Fragment>
    );
  }
}

export default DefaultLayout;
