import React, { Component } from 'react';
import { Container } from 'reactstrap';
import TableComponets from '../components/TableComponets';

export default class HomeContainer extends Component {
  render() {
    return (
      <Container>
        <TableComponets users={this.props.users} />
      </Container>
    );
  }
}
