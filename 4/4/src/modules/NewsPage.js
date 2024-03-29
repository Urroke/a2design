import React from "react";
import "./news.sass";
import News from "../components/news";
import Filter from "../components/filter";
import Data from "./data.json";
import { Link } from "react-router-dom";

class NewsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewedNewsType: { art: true, global: true, politics: true }
    };
  }

  SetFilter = type => {
    let copyViewedNewsType = {};
    if (type === false)
      copyViewedNewsType = { art: false, global: false, politics: false };
    else {
      copyViewedNewsType = {...this.state.viewedNewsType};
      copyViewedNewsType[type] = !this.state.viewedNewsType[type];
    }
    this.setState({ viewedNewsType: copyViewedNewsType });
  };

  render() {
    return (
      <section className="news-list">
        <Filter
          SetFilter={this.SetFilter}
          active={this.state.viewedNewsType}
        ></Filter>
        <div className="news__support-class">
          <nav className="news-home">
            <Link to="/home">
              <button className="news-home-button" />
            </Link>
          </nav>
          <h2 className="news-list__caption">
            Most recent news from our users
          </h2>
        </div>
        {Data.filter(el => this.state.viewedNewsType[el.type]).map(
          el => <News value={el}></News>
        )}
      </section>
    );
  }
}

export default NewsPage;
