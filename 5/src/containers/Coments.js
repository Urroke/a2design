import { SetPostComents } from "../store/action";
import { connect } from "react-redux";
import Coments from "../modules/coments/Coments";

const mapStateToProps = ({ peopleReducer }) => {
  return {
    coments: peopleReducer.coments
  };
};

const mapDispatchToProps = {
  SetPostComents
};

export default connect(mapStateToProps, mapDispatchToProps)(Coments);
