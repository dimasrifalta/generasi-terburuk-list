import React from 'react';
import { Table } from 'reactstrap';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    getUsersDetail: state.users.getUsersDetail,
    errorUsersDetail: state.users.errorUsersDetail,
  };
};
const DetailUserComponent = (props) => {
  return (
    <Table striped>
      <tbody>
        <tr>
          <th width='200'>Nama</th>
          <th width='10'>:</th>
          <th>{props.getUsersDetail.nama}</th>
        </tr>
        <tr>
          <th width='200'>Alamat</th>
          <th width='10'>:</th>
          <th>{props.getUsersDetail.alamat}</th>
        </tr>
        <tr>
          <th width='200'>Umur</th>
          <th width='10'>:</th>
          <th>{props.getUsersDetail.umur}</th>
        </tr>
        <tr>
          <th width='200'>No HP</th>
          <th width='10'>:</th>
          <th>{props.getUsersDetail.nohp}</th>
        </tr>
      </tbody>
    </Table>
  );
};

export default connect(mapStateToProps, null)(DetailUserComponent);
