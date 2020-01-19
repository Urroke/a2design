import React from "react";
import "./home.sass";
import { Link } from "react-router-dom";

class HomePage extends React.Component {
  componentDidMount = () => {};

  render() {
    return (
      <section className="home-pointer">
        <h2 className="home-motto">
          The perfect news community made for everyone.
        </h2>
        <nav>
          <Link to="/news">
            <button className="home-news">See what’s new</button>
          </Link>
        </nav>
      </section>
    );
  }
}

export default HomePage;
