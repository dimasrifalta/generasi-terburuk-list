import React, { Component } from 'react';
import { Container } from 'reactstrap';
import BackComponets from '../components/BackComponets';

export default class EditContainer extends Component {
  render() {
    return (
      <Container>
        <BackComponets />
        <h1>Edit User</h1>
      </Container>
    );
  }
}
