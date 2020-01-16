import React, {Component} from 'react';
// react component for creating dynamic tables
import IconButton from '@material-ui/core/IconButton';
import ReactTable from 'react-table';
import 'react-table/react-table.css'
import {connect} from 'react-redux';


// redux action
// import {getUserList, deteletUser} from '../../actions';

class ClientsTable extends Component {
  state = {
  };

  componentDidMount () {
    // this.props.getUserList ();
  }

  formatUserList = list => {
    const rows = list ? list.map (dataValue => {
      let dataRow = [];
      for (let key in dataValue) {
        dataRow.push (dataValue[key]);
      }
      return dataRow;
    }): '';
    return rows;
  };

  render () {
    let dataOrganized = this.formatUserList (this.props.obituaries);

    return (
      <ReactTable
        data={dataOrganized ? dataOrganized.map ((prop, key) => {
          return {
            id1: key,
            name: prop[0],
          };
        }):''}
        filterable
        columns={[
          {
            Header: 'Name',
            accessor: 'name',
          }
        ]}
        defaultPageSize={10}
        showPaginationTop
        showPaginationBottom={true}
        // className="-striped -highlight"
      />
    );
  }
}

// map state to props
const mapStateToProps = ({main}) => {
  const {obituaries} = main;
  return {obituaries};
};

export default connect (mapStateToProps, null) (ClientsTable);
