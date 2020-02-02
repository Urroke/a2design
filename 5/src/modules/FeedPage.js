import React from "react";
import Post from "../components/Post";
import "./user.sass";

class FeedPage extends React.Component {
  componentDidMount() {
    const { SetAllPosts, SetAllUsers, userListEmpty } = this.props;
    if (userListEmpty) SetAllUsers();
    SetAllPosts();
  }

  getRandomNumber(a, b) {
    return a + Math.floor(Math.abs(b - a) * Math.random());
  }

  render() {
    let { posts, userListEmpty, users } = this.props;
    const chaos = 1000; ///Чем меньше это число тем больше группы коментов одного автора (1 - исходный порядок) (10 - немного премешаны) (infinity - полный рандом)

    let order = [];
    for (let i = 0; i < posts.length; i++)
      order[i] = this.getRandomNumber(0, chaos);
    posts.sort((a, b) => (order[a.id] < order[b.id] ? 1 : -1));
    return (
      <main className="user-page">
        {posts.map((el, index) => {
          const user = users.find(ele => el.userId === ele.id);
          return userListEmpty ? (
            ""
          ) : (
            <Post
              data={el}
              key={index}
              username={user.username}
              id={user.id}
            ></Post>
          );
        })}
      </main>
    );
  }
}

export default FeedPage;
