import React from "react";
import Spin from "../components/spin";
import "./ising.sass";
import { copyFileSync } from "fs";

const L = 128;
const T = 2.2;
const exp = [2 / T][4 / T];

const cell = new Array(L);
for (let i = 0; i < L; i++) {
  cell[i] = new Array(L);
  for (let j = 0; j < L; j++) cell[i][j] = 1;
}

class Ising extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cell: [...cell]
    };
  }

  getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

  methropolysMonteCarloStep = () => {
    const copyCell = this.state.cell;

    const getSpinEnergy = (x, y) => {
      let res = 0;
      for (let i = -1; i < 2; i++)
        for (let j = -1; j < 2; j++)
          res += copyCell[(i + L + y) % L][(j + L + x) % L];
      return -2 * res * copyCell[y][x];
    };

    for (let i = 0; i < L; i++)
      for (let j = 0; j < L; j++) {
        let x = this.getRandomInt(L);
        let y = this.getRandomInt(L);
        copyCell[y][x] *= -1;
        let dE = getSpinEnergy(x, y);
        if (dE > 0) {
          if (Math.random > exp[Math.floor(dE / 4)]) copyCell *= -1;
        }
      }
    this.setState({ cell: copyCell });
    setTimeout(methropolysMonteCarloStep, 1000);
  };

  render() {
    return (
      <section className="ising">
        {this.state.cell.map(el => el.map(ele => <Spin direct={ele}></Spin>))}
      </section>
    );
  }
}

export default Ising;
