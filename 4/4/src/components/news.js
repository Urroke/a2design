import React from "react";
import "./news.sass";

class News extends React.Component {
  render() {
    const { nickname, message } = this.props.value;
    return (
      <article className="news">
        <h3 className="news__author">
          {nickname} <span className="news__says">says:</span>
        </h3>
        <p className="news__message">{message}</p>
      </article>
    );
  }
}

export default News;
