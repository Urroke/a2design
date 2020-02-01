import React from "react";
import "./post.sass";
import { Link } from "react-router-dom";
import Coments from "../containers/Coments";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = { openComents: false };
  }
  render() {
    const { title, body } = this.props.data;
    const { id, username } = this.props;
    return this.state.openComents ? (
      <Coments
        data={this.props.data}
        id={id}
        username={username}
        enableComents={() => this.setState({ openComents: false })}
      ></Coments>
    ) : (
      <article
        className="post"
        onClick={() => this.setState({ openComents: true })}
      >
        <Link to={"/people/" + id}>
          <nav className="post__user-name">@{username}:</nav>
        </Link>
        <h3 className="post__title">{title}</h3>
        <p className="post__body">{body}</p>
      </article>
    );
  }
}

export default Post;
