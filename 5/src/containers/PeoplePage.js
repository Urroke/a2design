import { SetAllUsers } from "../store/action";
import { connect } from "react-redux";
import PeoplePage from "../modules/PeoplePage";

const mapStateToProps = ({ peopleReducer }) => {
  return {
    users: peopleReducer.users
  };
};

const mapDispatchToProps = {
  SetAllUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(PeoplePage);
