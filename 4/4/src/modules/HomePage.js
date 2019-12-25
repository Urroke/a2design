import React from "react";
import "./home.sass";
import { history } from "../helpers/history";
import { Redirect } from "react-router-dom";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }

  componentDidMount = () => {};

  render() {
    return this.state.redirect ? (
      <Redirect to={"news"} />
    ) : (
      <section className="home-pointer">
        <h2 className="home-motto">
          The perfect news community made for everyone.
        </h2>
        <nav>
          <button
            className="home-news"
            onClick={() => {
              this.setState({ redirect: true });
              history.push("news");
            }}
          >
            See what’s new
          </button>
        </nav>
      </section>
    );
  }
}

export default HomePage;
