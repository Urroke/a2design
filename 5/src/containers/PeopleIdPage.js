import { SetSingleUser, SetUserPosts, SetUserFromList } from "../store/action";
import { connect } from "react-redux";
import PeopleIdPage from "../modules/PeopleIdPage";

const mapStateToProps = ({ peopleReducer }) => {
  return {
    user: peopleReducer.user,
    posts: peopleReducer.posts,
    userListEmpty: peopleReducer.userListEmpty
  };
};

const mapDispatchToProps = {
  SetSingleUser,
  SetUserPosts,
  SetUserFromList
};

export default connect(mapStateToProps, mapDispatchToProps)(PeopleIdPage);
