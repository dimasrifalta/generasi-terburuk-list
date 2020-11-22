import React, { Component } from 'react';
import { Container } from 'reactstrap';
import BackComponets from '../components/BackComponets';

export default class extends Component {
  render() {
    return (
      <Container>
        <BackComponets />
        <h1>Detail User</h1>
      </Container>
    );
  }
}
