import React from "react";
import Post from "../components/Post";
import "./coments.sass";

class Coments extends React.Component {
  componentDidMount() {
    const { data, SetPostComents } = this.props;
    SetPostComents(data.id);
  }
  render() {
    const { data, username, id, enableComents } = this.props;
    let { coments } = this.props;

    if (coments.length !== 0 && coments[0].postId !== data.id) coments = []; //Чтобы не отображало коменты к посту открытому ранее

    return (
      <article className="coments" onClick={enableComents}>
        <div className="coments__form">
          <Post data={data} id={id} username={username}></Post>
          {coments.map((el, index) => (
            <div key={index}>{el.body}</div>
          ))}
        </div>
      </article>
    );
  }
}

export default Coments;
