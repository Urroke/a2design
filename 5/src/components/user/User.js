import React from "react";
import "./user.sass";

export default props => {
  const { name, email, username, color } = props.data;
  const names = name ? name.split(" ") : [" ", " "];
  return (
    <article className="user">
      <div
        className="user__avatar"
        style={{ backgroundColor: `rgb(${color})` }}
      >
        {names[0][0].toUpperCase() + names[1][0].toUpperCase()}
      </div>
      <div className="user__description">
        <nav className="user__user-name"> @{username}</nav>
        <h1 className="user__name">{name}</h1>
        <a className="user__link" href={"mailto:" + email}>
          {email}
        </a>
      </div>
      <div className="user__footer"></div>
    </article>
  );
};
