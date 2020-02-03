import React from "react";
import "./mini-user.sass";
import { Link } from "react-router-dom";

export default props => {
  const { name, email, id, color } = props.data;
  let names = name.split(" ");
  return (
    <Link to={"people/" + id}>
      <button className="mini-user">
        <div
          className="mini_user__avatar"
          style={{ backgroundColor: `rgb(${color})` }}
        >
          {names[0][0].toUpperCase() + names[1][0].toUpperCase()}
        </div>
        <h2 className="mini-user__name">{name}</h2>
        <a className="mini-user__link" href={email}>
          {email}
        </a>
        <div className="mini-user__footer"></div>
      </button>
    </Link>
  );
};
