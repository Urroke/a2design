import React from "react";
import "./home.sass";
import { Link } from "react-router-dom";

class HomePage extends React.Component {
  render() {
    return (
      <main className="home">
        <div className="home__logo"></div>
        <h1 className="home__name">fendar.io</h1>
        <h2 className="home__slogan">help people get to know each other!</h2>
        <Link to="/people">
          <nav className="home__start">Start now</nav>
        </Link>
      </main>
    );
  }
}

export default HomePage;
