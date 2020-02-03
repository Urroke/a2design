import React from "react";
import Post from "../../components/post/Post";
import "./coments.sass";

class Coments extends React.Component {
  componentDidMount() {
    const { data, SetPostComents } = this.props;
    SetPostComents(data.id);
  }
  render() {
    const { data, username, id, enableComents } = this.props;
    let { coments } = this.props;
    return (
      <article className="coments" onClick={enableComents}>
        <div className="coments__form">
          <Post
            data={data}
            id={id}
            username={username}
            className="with-coments"
          ></Post>
          {coments.map((el, index) => (
            <div key={index} className="coment">
              <a href={"mailto:" + el.email} className="coment__email">
                {el.email}
              </a>
              <h2 className="coment__title">{el.name}</h2>
              <p className="coment__body">{el.body}</p>
            </div>
          ))}
        </div>
      </article>
    );
  }
}

export default Coments;
