import { GetNews } from "../store/news/action";
import { connect } from "react-redux";
import NewsPage from "../modules/NewsPage";

const mapStateToProps = ({ News }) => {
  return {
    values: News.values
  };
};

const mapDispatchToProps = {
  GetNews
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsPage);
