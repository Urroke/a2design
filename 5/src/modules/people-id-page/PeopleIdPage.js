import React from "react";
import User from "../../components/user/User";
import Post from "../../components/post/Post";
import "./user.sass";

class PeopleIdPage extends React.Component {
  componentDidMount() {
    const {
      SetSingleUser,
      SetUserPosts,
      userListEmpty,
      SetUserFromList
    } = this.props;
    const { id } = this.props.match.params;
    if (userListEmpty) SetSingleUser(id);
    else SetUserFromList(id);
    SetUserPosts(id);
  }
  render() {
    const { user, posts } = this.props;
    if (!user) return null;
    return (
      <main className="user-page">
        <User data={user}></User>
        <h2 className="user__latest-posts">Latest Posts</h2>
        {posts.map((el, index) => (
          <Post
            data={el}
            key={index}
            username={user.username}
            id={user.id}
          ></Post>
        ))}
      </main>
    );
  }
}

export default PeopleIdPage;
