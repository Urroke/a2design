import React from "react";
import "./post.sass";
import { Link } from "react-router-dom";

export default props => {
  const { name, body, email } = props.data;
  return (
    <article className="post">
      <a href={email}>{email}</a>
      <h3 className="post__title">{name}</h3>
      <p className="post__body">{body}</p>
    </article>
  );
};
