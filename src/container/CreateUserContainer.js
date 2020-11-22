import React, { Component } from 'react';
import { Container } from 'reactstrap';
import BackComponets from '../components/BackComponets';

export default class CreateUserContainer extends Component {
  render() {
    return (
      <Container>
        <BackComponets />
        <h1>Create User</h1>
      </Container>
    );
  }
}
