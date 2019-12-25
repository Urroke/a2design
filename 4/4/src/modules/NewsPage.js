import React from "react";
import "./news.sass";
import News from "../components/news";

import { Link, Redirect } from "react-router-dom";

class NewsPage extends React.Component {
  componentDidMount = () => {
    const { GetNews } = this.props;
    GetNews();
  };

  render() {
    const { values } = this.props;
    return (
      <section className="news-list">
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
        {values.map(el => (
          <News value={el}></News>
        ))}
      </section>
    );
  }
}

export default NewsPage;
