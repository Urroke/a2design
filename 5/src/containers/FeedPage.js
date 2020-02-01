import { SetAllPosts, SetAllUsers } from "../store/action";
import { connect } from "react-redux";
import FeedPage from "../modules/FeedPage";

const mapStateToProps = ({ peopleReducer }) => {
  return {
    users: peopleReducer.users,
    posts: peopleReducer.allPosts,
    userListEmpty: peopleReducer.userListEmpty
  };
};

const mapDispatchToProps = {
  SetAllPosts,
  SetAllUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedPage);
