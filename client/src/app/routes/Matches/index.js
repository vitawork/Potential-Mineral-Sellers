import React from 'react';
import { connect } from "react-redux";
import { startScrapingMatching } from "../../../actions/MainActions";

class Matches extends React.Component {
 
  componentWillMount(){
    this.props.startScrapingMatching();
  }


  render() {
    return (
      <div className="app-wrapper">
        <div className="d-flex justify-content-center">
          <h1>matches</h1>
        </div>

      </div>
    );
  }
}

// const mapStateToProps = ({ auth }) => {
//   const { initURL, user } = auth;
//   return { initURL, user };
// };

export default connect(null, { startScrapingMatching })(Matches);