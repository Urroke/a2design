import React from "react";
import MiniUser from "../../components/mini-user/MiniUser";
import "./users.sass";

class PeoplePage extends React.Component {
  componentDidMount() {
    const { SetAllUsers } = this.props;
    SetAllUsers();
  }
  render() {
    const { users } = this.props;
    return (
      <main className="users">
        <h1 className="users__top">Top-picked authors:</h1>
        {users.map((el, index) => (
          <MiniUser key={index} data={el}></MiniUser>
        ))}
      </main>
    );
  }
}

export default PeoplePage;
