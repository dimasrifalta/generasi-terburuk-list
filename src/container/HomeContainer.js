import React, { Component } from 'react';
import { Container } from 'reactstrap';
import TableComponets from '../components/TableComponets';
import { connect } from 'react-redux';
import { getUsersList, deleteData } from '../actions/userAction';

class HomeContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getUsersList());
    this.props.dispatch(deleteData());
  }
  render() {
    return (
      <Container>
        <TableComponets />
      </Container>
    );
  }
}

export default connect()(HomeContainer);
