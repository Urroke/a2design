import React from "react";
import "./news.sass";
import News from "../components/news";
import { history } from "../helpers/history";
import { Redirect } from "react-router-dom";

class NewsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }
  componentDidMount = () => {
    const { GetNews } = this.props;
    GetNews();
  };

  render() {
    const { values } = this.props;
    return this.state.redirect ? (
      <Redirect to={"home"} />
    ) : (
      <section className="news-list">
        <div className="news__support-class">
          <nav className="news-home">
            <button
              className="news-home-button"
              onClick={() => {
                this.setState({ redirect: true });
                history.push("home");
              }}
            />
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
