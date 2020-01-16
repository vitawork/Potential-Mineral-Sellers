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
    let dataOrganized = this.formatUserList (this.props.owners);

    return (
      <ReactTable
        data={dataOrganized ? dataOrganized.map ((prop, key) => {
          return {
            id1: key,
            id: prop[0],
            name: prop[4],
            address: prop[6],
            well: prop[12],
            yearBegan: prop[13],
            sourceId: prop[2]
          };
        }):''}
        filterable
        columns={[
          {
            Header: 'Source ID',
            accessor: 'sourceId',
          },
          {
            Header: 'Name',
            accessor: 'name',
          },
          {
            Header: 'Address',
            accessor: 'address',
          },
          {
            Header: 'Well',
            accessor: 'well',
          },
          {
            Header: 'Year Began',
            accessor: 'yearBegan',
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
  const {owners} = main;
  return {owners};
};

export default connect (mapStateToProps, null) (ClientsTable);
