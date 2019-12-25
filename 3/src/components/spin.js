import React from "react";
import "./spin.sass";
class Spin extends React.Component {
  render() {
    const { direct } = this.props;
    return (
      <div
        className={"spin spin_direction_" + (direct === 1 ? "up" : "down")}
      ></div>
    );
  }
}

export default Spin;
