import React from "react";
import { connect } from "react-redux";
import { startScrapingMatching } from "../../../actions/MainActions";
import OwnerTable from "./reactTable";
import ObituaryTable from "./obituaryTable";
import MatchesTable from "./matchTable";
import { showAuthLoader } from "../../../actions/Auth";
import "./index.css";
import CircularProgress from "@material-ui/core/CircularProgress";

class Matches extends React.Component {
  componentWillMount() {
    this.props.startScrapingMatching();
    this.props.showAuthLoader();
  }

  render() {
    return (
      <div className="app-wrapper">
        {this.props.loader ? (
          <div className="loader-view">
            <h1>Please Wait While Data Is Matching</h1>
            <CircularProgress />
          </div>
        ) : (
          <div>
            <div className="row firstRow">
              <div className="col-md-6">
                <h1>Obituaries</h1>
                <ObituaryTable />
              </div>
              <div className="col-md-6">
                <h1>Owners</h1>
                <OwnerTable />
              </div>
            </div>
            <h1>Matches</h1>
            <MatchesTable />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { loader } = auth;
  return { loader };
};

export default connect(mapStateToProps, {
  startScrapingMatching,
  showAuthLoader
})(Matches);
