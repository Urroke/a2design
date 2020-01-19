import React from "react";
import "./filter.sass";

const types = {
  global: "Global",
  politics: "Politics",
  art: "Art"
};

class Filter extends React.Component {
  render() {
    const { SetFilter, active } = this.props;
    return (
      <section className="filters">
        {Object.keys(types).map(el => (
          <label className="check">
            <input
              type="checkbox"
              className="check__input"
              onClick={() => {
                SetFilter(el);
              }}
              checked={active[el]}
            />
            <span className="check__box"></span>
            {types[el]}
          </label>
        ))}
        <button
          className="filters__reset"
          onClick={() => {
            SetFilter(false);
          }}
        >
          Reset
        </button>
      </section>
    );
  }
}

export default Filter;
