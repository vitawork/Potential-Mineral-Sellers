import React from "react";
import { connect } from "react-redux";
import { startScrapingMatching } from "../../../actions/MainActions";
import OwnerTable from "./reactTable";
import ObituaryTable from "./obituaryTable";
import MatchesTable from "./matchTable";
import "./index.css";

class Matches extends React.Component {
  componentWillMount() {
    this.props.startScrapingMatching();
  }

  render() {
    return (
      <div className="app-wrapper">
        <div className="row firstRow">
          <div className="col-md-6">
            <h1>Obituary</h1>
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
    );
  }
}

// const mapStateToProps = ({ auth }) => {
//   const { initURL, user } = auth;
//   return { initURL, user };
// };

export default connect(null, { startScrapingMatching })(Matches);
